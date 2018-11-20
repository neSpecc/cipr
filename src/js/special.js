/**
 * Class for special project tests
 */
/**
 * @typedef {object} InitParams
 * @property {Element} container - where to append
 * @property {string} articleUrl - url of entry that has the app injected
 * @property {{url, twitter}} share - sharing params
 * @property {string} apiEndpoint - route for requests to backend (checkAuth, checkAnswer etc)
 */

/**
 * @typedef {object} question
 * @description Object represented single question data
 * @property {number} id - question's id
 * @property {string} text
 * @property {string} image - url of image with code
 * @property {option[]} options
 */

/**
 * @typedef {object} option
 * @description Available answer item
 * @property {number} id - we can't use option'a index, because they will be shuffled
 * @property {string} text
 */

/**
 * @typedef {object} result
 * @property {array} range - [1, 3]
 * @property {string} title - 'Вы белка'
 * @property {string} message - '6 из 7 правильныйх ответов'
 */

/**
 * Dependencies
 */
require('../css/app.pcss');

const CONFIG = require('./config');

import * as Analytics from './lib/analytics';
import * as Share from './lib/share';
import BaseSpecial from './base';

import ajax from '@codexteam/ajax';

import DATA from './data';
import SVG from './svg';
import { prepend, make, removeChildren, removeElement } from './lib/dom';
import { isMobile } from './lib/check';
import { shuffle } from './lib/array';
import { scrollToElement } from './lib/helper';
import Auth from './auth';

/**
 * Special constructor
 */
class Special extends BaseSpecial {
  constructor(params) {
    super();

    this.css = params.css;
    this.staticURL = params.staticURL;

    this.nodes = {
      wrapper: null,
      container: null,
      header: null,
      counter: null,
      headerMenu: null,
      headerMenuTabs: [],
      content: null,
      tabs: [],
      mainText: null,
      options: null,
      optionsItems: [],
      actions: null,
      resultsButton: null,
      result: null,
      popup: null,
      popupContainer: null,
    };

    this.setDefaultValues();
  }

  /**
   * Parametres uses in app
   */
  setDefaultValues() {
    this.currentQuestionId = 1;
    this.totalLength = DATA.questions.length;
    this.userPoints = 0;
    this.isPending = false;
  }

  /**
   * App stated
   * @param {InitParams} params
   */
  init(params = {}) {
    Object.assign(CONFIG, params);

    /**
     * Save init params to this.params of base class
     */
    this.saveParams(CONFIG);

    if (this.css) {
      this.loadStyles(this.css).then(() => this.render());
    }
  }

  /**
   *
   * @return {{wrapper: string, container: string, header: string, headerLogo: string, headerMenu: string, headerMenuButton: string, headerMenuButtonActive: string, content: string, contentLoading: string, contentHidden: string, counter: string, mainText: string, options: string, optionsDisabled: string, optionsItem: string, optionsItemSelected: string, optionsItemLoading: string, optionsItemCorrect: string, optionsItemError: string, optionsMessage: string, actions: string, actionsDisclaimer: string, title: string, button: string, buttonSecond: string, buttonDisabled: string, buttonLoading: string, introText: string, result: string, resultContent: string, resultActions: string, resultButton: string, resultsTable: string, popup: string, popupShowed: string, popupContainer: string, popupClose: string, auth: string, authButtons: string}}
   * @constructor
   */
  static get CSS() {
    return {
      wrapper: 'bf-special',
      container: 'bf-special__container',

      header: 'bf-special__header',
      headerLogo: 'bf-special__header-logo',
      headerMenu: 'bf-special__header-menu',
      headerMenuButton: 'bf-special__header-menu-button',
      headerMenuButtonActive: 'bf-special__header-menu-button--active',

      content: 'bf-special__content',
      contentLoading: 'bf-special__content--loading',
      contentHidden: 'bf-special__content--hidden',
      counter: 'bf-special__counter',
      mainText: 'bf-special__content-text',

      options: 'bf-special__options',
      optionsDisabled: 'bf-special__options--disabled',
      optionsItem: 'bf-special__options-item',
      optionsItemSelected: 'bf-special__options-item--selected',
      optionsItemLoading: 'bf-special__options-item--loading',
      optionsItemCorrect: 'bf-special__options-item--correct',
      optionsItemError: 'bf-special__options-item--incorrect',
      optionsMessage: 'bf-special__options-message',

      actions: 'bf-special__actions',
      actionsDisclaimer: 'bf-special__actions-disclaimer',

      title: 'bf-special__title',
      button: 'bf-special__button',
      buttonSecond: 'bf-special__button--second',
      buttonDisabled: 'bf-special__button--disabled',
      buttonLoading: 'bf-special__button--loading',
      introText: 'bf-special__intro',

      result: 'bf-special__result',
      resultContent: 'bf-special__result-content',
      resultActions: 'bf-special__result-actions',
      resultButton: 'bf-special__result-button',
      resultsTable: 'bf-special__table',

      popup: 'bf-special__popup',
      popupShowed: 'bf-special__popup--showed',
      popupContainer: 'bf-special__popup-container',
      popupClose: 'bf-special__popup-close',

      auth: 'bf-special__auth',
      authButtons: 'bf-special__auth-buttons',
    };
  }

  /**
   * Create base layout
   *
   * <wrapper>
   *   <container>
   *     <header>
   *       <header-logo--left>
   *       <header-logo--right>
   *       <header-menu>
   *         <header-menu-button>
   *         ...
   *       </header-menu>
   *     </header>
   *     <content>
   *       <header-counter>
   *       <main-text>
   *       <options>
   *       <actions>
   *   </container>
   * </wrapper>
   */
  render() {
    this.nodes.wrapper = make('div', Special.CSS.wrapper);
    this.nodes.container = make('div', Special.CSS.container);

    /**
     * Header
     */
    this.nodes.header = make('div', Special.CSS.header, {
      innerHTML: `
        <a class="${Special.CSS.headerLogo} ${Special.CSS.headerLogo}--left" href="${DATA.logoUrl}" target="_blank"></a>
        <a class="${Special.CSS.headerLogo} ${Special.CSS.headerLogo}--right" href="${DATA.logoUrl}" target="_blank"></a>
        <a class="${Special.CSS.headerLogo} ${Special.CSS.headerLogo}--bottom" href="${DATA.logoUrl}" target="_blank"></a>
      `
    });

    /**
     * Append Header menu if enabled
     */
    if (DATA.tabs) {
      this.nodes.headerMenu = make('div', Special.CSS.headerMenu);
      this.nodes.header.appendChild(this.nodes.headerMenu);
      DATA.tabs.forEach(({tab, label}) => {
        let button = make('span', Special.CSS.headerMenuButton, {
          textContent: label,
          data: {
            click: 'tabClicked',
            tab
          }
        });

        this.nodes.headerMenuTabs.push(button);
        this.nodes.headerMenu.appendChild(button);
      });
    }

    this.nodes.wrapper.appendChild(this.nodes.header);


    /**
     * Content
     */
    this.nodes.content = make('div', Special.CSS.content, {
      data : {
        tab: 'main'
      }
    });
    this.nodes.tabs.push(this.nodes.content);

    this.nodes.counter = make('div', Special.CSS.counter);
    this.nodes.mainText = make('div', Special.CSS.mainText);
    this.nodes.options = make('div', Special.CSS.options);
    this.nodes.actions = make('div', Special.CSS.actions);

    this.nodes.content.appendChild(this.nodes.counter);
    this.nodes.content.appendChild(this.nodes.mainText);
    this.nodes.content.appendChild(this.nodes.options);
    this.nodes.content.appendChild(this.nodes.actions);

    this.nodes.container.appendChild(this.nodes.content);

    /**
     * Append other tabs if we have DATA.tabs
     */
    if (Array.isArray(DATA.tabs)) {
      DATA.tabs.forEach(({tab, content}) => {
        if (!content) {
          return;
        }
        let tabContainer = make('div', [Special.CSS.content, Special.CSS.contentHidden], {
          innerHTML: content,
          data: {
            tab
          }
        });

        this.nodes.tabs.push(tabContainer);
        this.nodes.container.appendChild(tabContainer);
      });
    }

    /**
     * Create popup
     */
    this.nodes.popup = make('div', Special.CSS.popup);
    this.nodes.popupContainer = make('div', Special.CSS.popupContainer);
    this.nodes.popup.appendChild(this.nodes.popupContainer);
    this.nodes.wrapper.appendChild(this.nodes.popup);
    this.nodes.popup.addEventListener('click', (event) => {
      this.popupOutsideClicked(event)
    });


    /**
     * Append all app to the initial container
     */
    this.nodes.wrapper.appendChild(this.nodes.container);
    this.container.appendChild(this.nodes.wrapper);

    this.makeIntro();

    this.container.tabIndex = 1;
    this.container.addEventListener('keydown', (event) => {
      this.keydownHandler(event);
    });

    this.activateTab('main');
    this.updateMode('start');

    Analytics.sendEvent('Start screen', 'Load');

    // this.preloader.load(DATA.questions[0].options.map(option => this.staticURL + option.img));
  }

  /**
   * Creates start screen
   */
  makeIntro() {
    this.nodes.mainText.innerHTML = `
      <div class="${Special.CSS.title}">
        <a href="${CONFIG.articleUrl}">
          ${DATA.title}
        </a>
      </div>
      <div class="${Special.CSS.introText}">
        ${DATA.intro}
      </div>
    `;

    removeChildren(this.nodes.actions);
    this.makeActionButton('НАЧАТЬ ИГРУ', 'checkUserState');
  }

  /**
   * Check user auth and game state
   * @param {Element} [button] - НАЧАТЬ ИГРУ
   */
  checkUserState(button) {

    if (button && button.classList.contains(Special.CSS.buttonLoading)){
      return;
    }

    if (button){
      button.classList.add(Special.CSS.buttonLoading);
    }

    ajax.get({
      url: `${this.params.apiEndpoint}/start`
    }).then(
      /**
       * Osnova response with user state
       * @param {object} response
       * @param {number} response.rc  - code (200)
       * @param {string} response.rm  - message (successfull)
       * @param {{active_question: number, answers, is_finished: boolean, result: null}} response.data  - response datas
       */
      (response) => {
        if (button) {
          button.classList.remove(Special.CSS.buttonLoading);
        }

        if (response.rc === 403){
          this.showAuth();
          return;
        }

        if (response.data.active_question){
          this.currentQuestionId = response.data.active_question;
          this.makeIntroduction();
        } else {
          this.userPoints = response.data.result || 0;
          this.makeResult();
        }
      });
  }

  /**
   * Creates introduction screen
   */
  makeIntroduction(){
    this.updateMode('introduction');
    this.nodes.counter.textContent = '— Вступление —';
    this.nodes.mainText.innerHTML = DATA.introduction;

    removeChildren(this.nodes.actions);
    this.makeActionButton('ПРИСТУПИТЬ', 'start');
  }

  /**
   * Creates a button
   * @param {string} text - button's text
   * @param {string} func - name of method that should be triggered by click
   * @param {string[]} additionalCSS - array of CSS classes for button
   */
  makeActionButton(text, func, additionalCSS = []) {
    let buttonStyle = [ Special.CSS.button ];

    if (Array.isArray(additionalCSS)) {
      buttonStyle.push(...additionalCSS);
    }

    let button = make('div', buttonStyle, {
      type: 'button',
      data: {
        click: func
      }
    });

    button.textContent = text;
    this.nodes.actions.appendChild(button);
  }

  /**
   * Update game mode
   * @param {string} name - mode name. For example: "start", "restuls"
   */
  updateMode(name) {
    this.mode = name;
    this.nodes.wrapper.dataset.mode = this.mode;
  }

  /**
   * Shows first question
   * Called after click on the START button on intro screen
   */
  start() {
    this.updateMode('progress');
    this.makeQuestion();

    Analytics.sendEvent('Start button', 'Click');
  }

  /**
   * Create question corresponding with current active index
   */
  makeQuestion() {
    console.log('makeQuestion', this.currentQuestionId);

    /**
     * @type {question}
     */
    let data = DATA.questions.find( q => q.id === this.currentQuestionId );

    if (!data) {
      throw new Error(`Missing data for question #${this.currentQuestionId} or incorrect index`);
    }

    removeChildren(this.nodes.options);
    removeChildren(this.nodes.actions);
    this.nodes.optionsItems = [];

    this.isPending = false;
    this.nodes.options.classList.remove(Special.CSS.optionsDisabled);

    this.updateCounter();
    this.nodes.mainText.innerHTML = `${data.text}`;
    if (data.image) {
      this.nodes.mainText.appendChild(make('img', [], {
        src: data.image
      }));
    }

    this.makeQuestionOptions(data.options);

    if (isMobile()) scrollToElement(this.container);

    Analytics.sendEvent(`Question ${this.currentQuestionId} screen`, 'Hit');
  }

  /**
   * Set current question number to the header counter
   */
  updateCounter() {
    this.nodes.counter.textContent = `— ЗАДАНИЕ ${this.currentQuestionId} —`;
  }

  /**
   * Renders possible answers
   * @param {option[]} options
   */
  makeQuestionOptions(options) {
    shuffle(options);

    options.forEach(option => {
      let item = make('div', Special.CSS.optionsItem, {
        data: {
          click: 'selectAnswer',
          id: option.id,
          number: this.currentQuestionId
        },
        textContent: option.text
      });

      this.nodes.optionsItems.push(item);
      this.nodes.options.appendChild(item);
    });
  }

  /**
   * Select answer
   * @param {Element} button - clicked option
   */
  selectAnswer(button) {
    if (this.isPending) {
      return;
    }

    this.nodes.optionsItems.forEach( btn => {
      btn.classList.remove(Special.CSS.optionsItemSelected);
    });

    button.classList.add(Special.CSS.optionsItemSelected);

    removeChildren(this.nodes.actions);
    this.makeActionButton('ПОДТВЕРДИТЬ', 'submitAnswer');
  }

  /**
   * Check selected answer
   * @param {Element} button - clicked 'Confirm' button
   */
  submitAnswer(button) {
    if (this.isPending) {
      return;
    }

    let selectedItem = this.nodes.optionsItems.find((item) => item.classList.contains(Special.CSS.optionsItemSelected));
    let id = parseInt(selectedItem.dataset.id);

    this.isPending = true;
    this.nodes.options.classList.add(Special.CSS.optionsDisabled);
    button.classList.add(Special.CSS.buttonDisabled);

    selectedItem.classList.remove(Special.CSS.optionsItemSelected);
    selectedItem.classList.add(Special.CSS.optionsItemLoading);

    // ajax to check
    ajax.get({
      url: `${this.params.apiEndpoint}/answer`,
      data: {
        question: this.currentQuestionId,
        answer: id
      }
    })
      .then(
        /**
         * Osnova response
         * @param {object} response
         * @param {number} response.rc  - code (200)
         * @param {string} response.rm  - message (successfull)
         * @param {object} response.data  - response data
         * @param {object} response.data.answers  - {"1": 2, "2": 4} list of { question -> answer } pairs
         * @param {null} response.data.result
         * @param {string} response.data.active_question - next question id
         * @param {boolean} response.data.is_finished
         * @param {boolean} response.data.is_correct
         * @param {string} response.data.message
         */
        (response) => {
          this.nodes.options.classList.remove(Special.CSS.optionsDisabled);
          selectedItem.classList.remove(Special.CSS.optionsItemLoading);

          removeChildren(this.nodes.actions);

          if (response && response.rc === 200) {
            if (response.data.is_correct) {
              selectedItem.classList.add(Special.CSS.optionsItemCorrect);
            } else {
              selectedItem.classList.add(Special.CSS.optionsItemError);

              this.makeActionButton('ЕЩЕ РАЗ', 'restart', [ Special.CSS.buttonSecond ]);
            }

            /**
             * Remove other items
             */
            this.nodes.optionsItems.filter( item => item !== selectedItem).forEach(item => item.remove());

            /**
             * Append description
             */
            this.makeOptionMessage(response.data.message);

            if (!response.data.active_question) {
              this.userPoints = response.data.result;
              this.makeActionButton('ЗАВЕРШИТЬ', 'makeConclusion');
            } else {
              this.makeActionButton('ПРОДОЛЖИТЬ', 'makeQuestion');
            }

            if (!response.data.is_correct) {
              this.nodes.actions.appendChild(make('div', Special.CSS.actionsDisclaimer, {
                innerHTML: 'Дополнительная попытка не засчитывается в финальных результатах. <br> Любая ошибка исключает из розыгрыша.'
              }));
            }

            button.classList.remove(Special.CSS.buttonDisabled);

            this.currentQuestionId = response.data.active_question;
          } else {
            console.log('Error while check answer:', response);
          }
        })
      .catch((error) => {
        console.log('Check answer error', error);
      });
  }

  /**
   * Shows conclusion scene
   */
  makeConclusion() {
    this.updateMode('conclusion');
    this.nodes.counter.textContent = '— ЗАКЛЮЧЕНИЕ —';
    this.nodes.mainText.innerHTML = DATA.conclusion;

    removeChildren(this.nodes.options);
    removeChildren(this.nodes.actions);
    this.makeActionButton('РЕЗУЛЬТАТЫ', 'makeResult');
  }

  /**
   * Show description after answer
   * @param {string} message - description got from backend
   */
  makeOptionMessage(message) {
    let messageEl = make('div', Special.CSS.optionsMessage, {
      innerHTML: message
    });

    this.nodes.options.appendChild(messageEl);
  }

  /**
   * Creates results screen
   */
  makeResult() {
    removeElement(this.nodes.result);
    removeChildren(this.nodes.options);
    removeChildren(this.nodes.actions);
    removeChildren(this.nodes.mainText);


    /**
     * @type {result}
     */
    let data = this.findResult();

    this.updateMode('result');

    this.nodes.result = make('div', Special.CSS.result);

    let resultContent = make('div', Special.CSS.resultContent),
      resultActions = make('div', Special.CSS.resultActions);

    // result.style.backgroundImage = `url(${this.imageUrl(data.cover)})`;

    this.nodes.mainText.innerHTML = DATA.outro;
    removeChildren(this.nodes.options);
    removeChildren(this.nodes.actions);

    resultContent.innerHTML = `
      ${data.message}
      <p>${data.title}</p>
    `;

    this.nodes.result.appendChild(resultContent);
    resultContent.appendChild(resultActions);
    prepend(this.nodes.content, this.nodes.result);

    Share.create(resultActions, {
      url: `${CONFIG.share.url}/${this.userPoints}`,
      twitter: CONFIG.share.twitter
    });

    this.nodes.resultsButton = make('div', [Special.CSS.button, Special.CSS.buttonSecond], {
      innerHTML: `${SVG.trophy} РЕЗУЛЬТАТЫ ДРУГИХ ПОЛЬЗОВАТЕЛЕЙ`,
      data: {
        click: 'showResultsTable'
      }
    });

    this.nodes.result.appendChild(this.nodes.resultsButton);


    // this.nodes.actions.appendChild(make('span', Special.CSS.button, {
    //   textContent: 'ПРОЙТИ ЕЩЕ РАЗ',
    //   data: {
    //     click: 'restart'
    //   }
    // }));
    this.nodes.actions.appendChild(make('a', Special.CSS.button, {
      href: DATA.promoUrl,
      target: '_blank',
      textContent: DATA.CTAText
    }));

    if (isMobile()) scrollToElement(this.container);

    Analytics.sendEvent('Result screen', 'Hit');
    Analytics.sendEvent(`Result ${this.userPoints} screen`, 'Hit');
  }

  /**
   * Get result by users points
   * @return {result}
   */
  findResult() {
    let results = DATA.results,
      finalResult = null;

    for (let result of results) {
      if (this.userPoints >= result.range[0] && this.userPoints <= result.range[1]) {
        finalResult = result;
        break;
      }
    }

    finalResult.message =`${this.userPoints} из ${this.totalLength} разгаданных шифров`;

    return finalResult;
  }

  /**
   * Start game from first question
   * @param {Element} button - Restart button
   */
  restart(button) {
    if (button.classList.contains(Special.CSS.buttonLoading)){
      return;
    }

    button.classList.add(Special.CSS.buttonLoading);
    Analytics.sendEvent('Restart button', 'Click');

    ajax.get({
      url: `${this.params.apiEndpoint}/retry`,
    }).then(
      /**
       * @param {object} response
       * @param {number} response.rc
       * @param {string} response.message
       * @param {object} response.data
       * @param {number} response.data.active_question
       */
      (response) => {
        button.classList.remove(Special.CSS.buttonLoading);

        this.currentQuestionId = response.data.active_question;

        this.updateMode('progress');

        removeChildren(this.nodes.content);
        this.nodes.content.appendChild(this.nodes.mainText);
        this.nodes.content.appendChild(this.nodes.options);
        this.nodes.content.appendChild(this.nodes.actions);

        this.makeQuestion();
      }
    );
  }

  /**
   * Handler for header tab clicks
   * @param {Element} button - clicked tab
   */
  tabClicked(button) {
    const { tab } = button.dataset;

    this.activateTab(tab);
  }

  /**
   * Make specified tab active
   * @param {string} tab - tab name
   */
  activateTab(tab) {
    this.nodes.container.dataset.tab = tab;

    this.nodes.headerMenuTabs.forEach((item) => {
      item.classList.toggle(Special.CSS.headerMenuButtonActive, item.dataset.tab === tab);
    });

    this.nodes.tabs.forEach((tabContainer) => {
      tabContainer.classList.toggle(Special.CSS.contentHidden, tabContainer.dataset.tab !== tab);
    });
  }

  /**
   * Shows results table
   * @param {Element} button - «show results» or pagination [1], [2], [3]
   */
  showResultsTable(button){
    this.updateMode('result-table');

    removeElement(this.nodes.result);
    removeChildren(this.nodes.options);
    removeChildren(this.nodes.actions);
    removeChildren(this.nodes.mainText);

    this.nodes.counter.innerHTML = `${SVG.trophy} <span>Турнирная таблица</span>`;

    this.nodes.content.classList.add(Special.CSS.contentLoading);

    const limit = 10,
      offset = button.dataset.offset || 0;

    console.log('offset: %o, limit: %o', offset, limit);

    // ajax to check
    ajax.get({
      url: `${this.params.apiEndpoint}/results`,
      data: {
        start: parseInt(offset),
        end: parseInt(offset) + limit - 1,
      }
    }).then(
      /**
       * @param {object} response
       * @param {number} response.rc
       * @param {string} response.message
       * @param {object} response.data
       * @param {number} response.data.count
       * @param {{rank, name, points, isMe}[]} response.data.list
       */
      (response) => {
        this.nodes.content.classList.remove(Special.CSS.contentLoading);
        console.log('results', response);

        this.nodes.counter.appendChild(make('span', Special.CSS.button, {
          innerHTML: `${SVG.back} Вернуться`,
          data: {
            click: 'makeResult'
          }
        }));

        let table = `
          <table class="${ Special.CSS.resultsTable }">
            <tr>
              <th>#</th>
              <th>Имя</th>
              <th>Шифры</th>
            </tr>
        `;

        response.data.list.forEach((user) => {
          table += `
            <tr class="${user.isMe ? 'me' : ''}">
              <td>${user.rank}</td>
              <td>${user.name}</td>
              <td>${user.points + 1}</td>
            </tr>
          `
        });

        table += '</table>';

        this.nodes.options.innerHTML = table;

        let paginationButtonsCount = Math.ceil(response.data.count / limit);
        let paginator = `
          <div class="${Special.CSS.resultsTable}-pagination">
        `;

        for (let i = 0; i < paginationButtonsCount; i++){
          paginator += `
            <span class="${(Math.floor(offset / limit))  === i ? 'current' : ''}" data-click="showResultsTable" data-offset="${i * limit}">
              ${i + 1}
            </span>
          `
        }

        paginator += `</div>`;

        this.nodes.actions.innerHTML = paginator;
      }
    );


    Analytics.sendEvent('Results table', 'Hit');
  }

  /**
   * Shows auth popup
   */
  showAuth(){
    this.showPopup(`
      <div class="${Special.CSS.auth}">
        Авторизуйтесь для того, <br> чтобы начать квест
        <div class="${Special.CSS.authButtons}">
          <span class="vk" data-click="auth" data-url="/auth/vk">ВКонтакте</span>
          <span class="fb" data-click="auth" data-url="/auth/facebook">Facebook</span>
          <br>
          <span class="tw" data-click="auth" data-url="/auth/twitter">Twitter</span>
          <span class="ggl" data-click="auth" data-url="/auth/googleplus">Google</span>
        </div>
      </div>
    `);
  }

  /**
   * Handle clicks on the auth button
   * @param {Element} button
   */
  auth(button) {
    const url = button.dataset.url;

    new Auth(url, () => {
      this.checkUserState();
      this.closePopup();
    });
  }


  showPopup(content){
    this.nodes.popupContainer.innerHTML = content += `
      <span class="${Special.CSS.popupClose}" data-click="closePopup"></span>
    `;

    this.nodes.popup.classList.add(Special.CSS.popupShowed);
  }

  closePopup(){
    this.nodes.popupContainer.innerHTML = '';
    this.nodes.popup.classList.remove(Special.CSS.popupShowed);
  }

  /**
   * Clicks on the popup overlay to close popup
   * @param event
   */
  popupOutsideClicked(event){
    let isInsidePopupContent = event.target.closest(`.${Special.CSS.popupContainer}`) !== null;

    if (!isInsidePopupContent) {
      this.closePopup();
    }
  }

  /**
   * Handle clicks on video thumbnail
   * @param {Element} wrapper - video thumb wrapper
   */
  showVideo(wrapper){
    const url = wrapper.dataset.url;

    this.showPopup(`
      <iframe width="${Math.round(window.innerWidth * 0.8)}" height="${Math.round(window.innerHeight * 0.8)}" src="${url}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `);
  }

  /**
   * Show prize popup
   */
  showPrize(){
    this.showPopup(DATA.prizePopup);
  }










  keydownHandler(event) {
    if (event.target === this.container && event.keyCode === this.keyCodes.enter) {
      if (this.mode === 'start') {
        this.start();
      } else if (this.mode === 'progress' && this.isPending) {
        if (this.currentQuestionId >= this.totalLength) {
          this.makeResult();
        } else {
          this.makeQuestion();
        }
      }
    }
  }








  /**
     * Format image URL: add static URL if need
     * @param {string} url
     */
  imageUrl(url) {
    if (url.substring(0, 4) === 'http') {
      return url;
    }

    return this.staticURL + url;
  }
}

if (!Element.prototype.matches)
  Element.prototype.matches = Element.prototype.msMatchesSelector ||
    Element.prototype.webkitMatchesSelector;

if (!Element.prototype.closest) {
  Element.prototype.closest = function(s) {
    var el = this;
    if (!document.documentElement.contains(el)) return null;
    do {
      if (el.matches(s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  };
}

module.exports = Special;