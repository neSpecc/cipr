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
 * @property {string} text
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
import { prepend, make, removeChildren } from './lib/dom';
import { isMobile } from './lib/check';
import { shuffle } from './lib/array';
import { scrollToElement } from './lib/helper';

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
      headerMenuButtons: [],
      content: null,
      mainText: null,
      options: null,
      optionsItems: [],
      actions: null,
      resultsButton: null,
    };

    this.setDefaultValues();
  }

  /**
   * Parametres uses in app
   */
  setDefaultValues() {
    this.activeIndex = 0;
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
   * @return {{wrapper: string, container: string, header: string, headerLogo: string, headerMenu: string, headerMenuButton: string, content: string, counter: string, mainText: string, options: string, optionsDisabled: string, optionsItem: string, optionsItemSelected: string, optionsItemLoading: string, optionsItemCorrect: string, optionsItemError: string, optionsMessage: string, actions: string, title: string, button: string, buttonSecond: string, buttonDisabled: string, introText: string, result: string, resultContent: string, resultActions: string, resultButton: string}}
   */
  static get CSS() {
    return {
      wrapper: 'bf-special',
      container: 'bf-special__container',

      header: 'bf-special__header',
      headerLogo: 'bf-special__header-logo',
      headerMenu: 'bf-special__header-menu',
      headerMenuButton: 'bf-special__header-menu-button',

      content: 'bf-special__content',
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

      title: 'bf-special__title',
      button: 'bf-special__button',
      buttonSecond: 'bf-special__button--second',
      buttonDisabled: 'bf-special__button--disabled',
      introText: 'bf-special__intro',

      result: 'bf-special__result',
      resultContent: 'bf-special__result-content',
      resultActions: 'bf-special__result-actions',
      resultButton: 'bf-special__result-button',
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
      `
    });

    /**
     * Append Header menu if enabled
     */
    if (DATA.headerMenu) {
      this.nodes.headerMenu = make('div', Special.CSS.headerMenu);
      DATA.headerMenu.forEach((tab, index) => {
        let button = make('span', Special.CSS.headerMenuButton, {
          textContent: tab,
          data: {
            click: 'tabClicked',
            index
          }
        });

        this.nodes.headerMenuButtons.push(button);
        this.nodes.headerMenu.appendChild(button);
      });
      this.nodes.header.appendChild(this.nodes.headerMenu);
    }

    this.nodes.wrapper.appendChild(this.nodes.header);


    /**
     * Content
     */
    this.nodes.content = make('div', Special.CSS.content);

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
     * Append all app to the initial container
     */
    this.nodes.wrapper.appendChild(this.nodes.container);
    this.container.appendChild(this.nodes.wrapper);

    this.makeIntro();

    this.container.tabIndex = 1;
    this.container.addEventListener('keydown', (event) => {
      this.keydownHandler(event);
    });

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

    this.makeActionButton('НАЧАТЬ ИГРУ', 'start');
  }

  /**
   * Creates a button
   * @param {string} text - button's text
   * @param {string} func - name of method that should be triggered by click
   */
  makeActionButton(text, func) {
    removeChildren(this.nodes.actions);

    let button = make('div', Special.CSS.button, {
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
    /**
     * @type {question}
     */
    let data = DATA.questions[this.activeIndex];

    if (!data) {
      throw new Error(`Missing data for question #${this.activeIndex} or incorrect index`);
    }

    removeChildren(this.nodes.options);
    removeChildren(this.nodes.actions);
    this.nodes.optionsItems = [];

    this.isPending = false;
    this.nodes.options.classList.remove(Special.CSS.optionsDisabled);

    this.updateCounter();
    this.nodes.mainText.innerHTML = `${data.text}`;

    this.makeQuestionOptions(data.options);

    if (isMobile()) scrollToElement(this.container);

    Analytics.sendEvent(`Question ${this.activeIndex + 1} screen`, 'Hit');

    // if (DATA.questions[this.activeIndex + 1]) {
    //   this.preloader.load(DATA.questions[this.activeIndex + 1].options.map(option => this.staticURL + option.img));
    // }
  }

  /**
   * Set current question number to the header counter
   */
  updateCounter() {
    this.nodes.counter.textContent = `— ЗАДАНИЕ ${this.activeIndex + 1} —`;
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
          number: this.activeIndex
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
      url: `${this.params.apiEndpoint}/check_answer`,
      data: {
        question: this.activeIndex,
        answer: id
      }
    })
      .then(
        /**
         * Osnova response
         * @param {object} response
         * @param {number} response.rc  - code (200)
         * @param {string} response.rm  - message (successfull)
         * @param {{message: string, isCorrect: boolean}} response.data  - response data
         */
        (response) => {
          this.nodes.options.classList.remove(Special.CSS.optionsDisabled);
          selectedItem.classList.remove(Special.CSS.optionsItemLoading);

          if (response && response.rc === 200) {
            if (response.data.isCorrect) {
              this.userPoints++;
              selectedItem.classList.add(Special.CSS.optionsItemCorrect);
            } else {
              selectedItem.classList.add(Special.CSS.optionsItemError);
            }

            /**
             * Remove other items
             */
            this.nodes.optionsItems.filter( item => item !== selectedItem).forEach(item => item.remove());

            /**
             * Append description
             */
            this.makeOptionMessage(response.data.message);

            if (this.activeIndex >= this.totalLength - 1) {
              this.makeActionButton('РЕЗУЛЬТАТЫ', 'makeResult');
            } else {
              this.makeActionButton('ПРОДОЛЖИТЬ', 'makeQuestion');
            }

            button.classList.remove(Special.CSS.buttonDisabled);

            this.activeIndex++;
          } else {
            console.log('Error while check answer:', response);
          }
        })
      .catch((error) => {
        console.log('Check answer error', error);
      });
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
    /**
     * @type {result}
     */
    let data = this.findResult();

    this.updateMode('result');

    let result = make('div', Special.CSS.result),
      resultContent = make('div', Special.CSS.resultContent),
      resultActions = make('div', Special.CSS.resultActions);

    // result.style.backgroundImage = `url(${this.imageUrl(data.cover)})`;

    this.nodes.mainText.innerHTML = DATA.outro;
    removeChildren(this.nodes.options);
    removeChildren(this.nodes.actions);

    resultContent.innerHTML = `
      ${data.message}
      <p>${data.title}</p>
    `;

    result.appendChild(resultContent);
    resultContent.appendChild(resultActions);
    prepend(this.nodes.content, result);

    Share.create(resultActions, {
      url: `${CONFIG.share.url}/${this.userPoints}`,
      twitter: CONFIG.share.twitter
    });

    this.nodes.resultsButton = make('div', [Special.CSS.button, Special.CSS.buttonSecond], {
      innerHTML: `${SVG.trophy} РЕЗУЛЬТАТЫ ДРУГИХ ПОЛЬЗОВАТЕЛЕЙ`,
      data: {
        click: 'showResults'
      }
    });

    result.appendChild(this.nodes.resultsButton);


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
    // finalResult.message =`${this.userPoints} их ${this.totalLength} ${declineWord(this.userPoints, ['правильный ответ', 'правильных ответа', 'правильных ответов'])}`;

    return finalResult;
  }

  /**
   * Start game from first question
   */
  restart() {
    this.setDefaultValues();
    this.updateMode('progress');

    removeChildren(this.nodes.content);
    this.nodes.content.appendChild(this.nodes.mainText);
    this.nodes.content.appendChild(this.nodes.options);
    this.nodes.content.appendChild(this.nodes.actions);

    this.makeQuestion(0);

    Analytics.sendEvent('Restart button', 'Click');
  }














  keydownHandler(event) {
    if (event.target === this.container && event.keyCode === this.keyCodes.enter) {
      if (this.mode === 'start') {
        this.start();
      } else if (this.mode === 'progress' && this.isPending) {
        if (this.activeIndex >= this.totalLength) {
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

module.exports = Special;