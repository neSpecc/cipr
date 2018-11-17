/**
 * Dependencies
 */
require('../css/app.pcss');

/**
 * @typedef {object} question
 * @description Object represented single question data
 * @property {string} text
 * @property {option[]} options
 */

/**
 * @typedef {object} option
 * @description Available answer item
 * @property {number} id
 * @property {string} text
 * @property {string} message
 * @property {boolean} isCorrect
 * @property {string} img
 * @property {string} imgWrong
 * @property {string} imgCorrect
 * @property {string} imgDisabled
 */





const CONFIG = require('./config');

import * as Analytics from './lib/analytics';
import * as Share from './lib/share';
import BaseSpecial from './base';

import DATA from './data';
import Svg from './svg';
import Bem from './bem';
import {
  prepend,
  make,
  removeChildren,
  replace,
} from './lib/dom';

import {
  isMobile
} from './lib/check';

import {
  shuffle
} from './lib/array';

import {
  scrollToElement,
  declineWord
} from './lib/helper';

/**
 * Constants
 */
// const PATH = window.__PATH || '.';

const CSS = {
  // state: {
  //   active: 'l-active'
  // },
  // main: 'bf-special',
};

/**
 * @typedef {object} InitParams
 * @property {Element} container - where to append
 * @property {string} articleUrl - url of entry that has the app injected
 * @property {{url, twitter}} share - sharing params
 */

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
      headerCounter: null,
      headerMenu: null,
      headerMenuButtons: [],
      content: null,
      mainText: null,
      options: null,
      actions: null,
    };

    this.setDefaultValues();
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

  static get CSS() {
    return {
      wrapper: 'bf-special',
      container: 'bf-special__container',

      header: 'bf-special__header',
      headerLogo: 'bf-special__header-logo',
      headerCounter: 'bf-special__header-counter',
      headerMenu: 'bf-special__header-menu',
      headerMenuButton: 'bf-special__header-menu-button',

      content: 'bf-special__content',
      mainText: 'bf-special__content-text',
      options: 'bf-special__options',
      actions: 'bf-special__actions',

      title: 'bf-special__title',
      button: 'bf-special__button',
      introText: 'bf-special__intro',
    };
  }

  /**
   * Create base layout
   *
   * <wrapper>
   *   <container>
   *     <header>
   *       <header-logo>
   *       <header-counter>
   *     </header>
   *     <content>
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
    this.nodes.headerCounter = make('div', Special.CSS.headerCounter);

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

    this.nodes.header.appendChild(this.nodes.headerCounter);
    this.nodes.wrapper.appendChild(this.nodes.header);


    /**
     * Content
     */
    this.nodes.content = make('div', Special.CSS.content);

    this.nodes.mainText = make('div', Special.CSS.mainText);
    this.nodes.options = make('div', Special.CSS.options);
    this.nodes.actions = make('div', Special.CSS.actions);

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
   * Set current question number to the header counter
   */
  updateCounter() {
    this.nodes.headerCounter.textContent = `Вопрос ${this.activeIndex + 1} из ${DATA.questions.length}`;
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


















  setDefaultValues() {
    this.activeIndex = 0;
    this.totalLength = DATA.questions.length;
    this.userPoints = 0;
    this.activeCorrectId = null;
    this.messages = {};
    this.isPending = false;
    this.stopTimer();
    this.timer = null;
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

  start() {
    this.updateMode('progress');
    this.makeQuestion(this.activeIndex);
    this.restartTimer();

    Analytics.sendEvent('Start button', 'Click');
  }

  makeQuestion() {
    /**
       * @type {question}
       */
    let data = DATA.questions[this.activeIndex];

    if (data) {
      removeChildren(this.mainOptions);
      removeChildren(this.mainActions);

      this.isPending = false;
      this.mainOptions.classList.remove(Bem.set(CSS.main, 'options', 'disabled'));

      this.restartTimer(false);
      this.updateCounter();
      this.mainText.innerHTML = `${DATA.task}`;

      this.makeQuestionOptions(data.options);

      if (isMobile()) scrollToElement(this.container);

      Analytics.sendEvent(`Question ${this.activeIndex + 1} screen`, 'Hit');

      if (DATA.questions[this.activeIndex + 1]) {
        this.preloader.load(DATA.questions[this.activeIndex + 1].options.map(option => this.staticURL + option.img));
      }
    } else {
      throw new Error('Missing question data');
    }
  }

  /**
    * @param {option[]} options
    */
  makeQuestionOptions(options) {
    shuffle(options);

    options.forEach(option => {
      let item = make('div', Bem.set(CSS.main, 'option'), {
        data: {
          click: 'submitAnswer',
          id: option.id,
          number: this.activeIndex
        }
      });
      //
      // let image = make('img', Bem.set(CSS.main, 'option-image'), {
      //     src: this.staticURL + option.img,
      //     data: {
      //         id: option.id
      //     }
      // });

      let imageCached = this.preloader.get(this.staticURL + option.img);

      imageCached.classList.add(Bem.set(CSS.main, 'option-image'));
      imageCached.dataset.id = option.id;

      let label = make('div', [], {
        innerHTML: option.text
      });

      item.appendChild(imageCached);
      item.appendChild(label);


      this.mainOptions.appendChild(item);

      if (option.isCorrect) {
        this.activeCorrectId = option.id;
      }

      this.messages[option.id] = option.message;

      this.preloader.load([
        this.staticURL + option.imgCorrect,
        this.staticURL + option.imgWrong,
        this.staticURL + option.imgDisabled
      ]);
    });
  }

  submitAnswer(button) {
    if (!this.isPending) {
      let id = parseInt(button.dataset.id);

      this.stopTimer(false);

      this.isPending = true;
      this.mainOptions.classList.add(Bem.set(CSS.main, 'options', 'disabled'));

      let images = this.content.querySelectorAll('.' + Bem.set(CSS.main, 'option-image'));

      /**
            * @type {question}
            */
      let currentQuestion = DATA.questions[this.activeIndex];

      Array.from(images).forEach( (img, index) => {
        let imageId = parseInt(img.dataset.id),
          imageWrapper = img.parentNode;

        // clicked image
        if (id === imageId) {
          let clickedImage;

          if (id === this.activeCorrectId) {
            clickedImage = this.preloader.get(this.staticURL + currentQuestion.options[index].imgCorrect);
          } else {
            clickedImage = this.preloader.get(this.staticURL + currentQuestion.options[index].imgWrong);
          }

          clickedImage.classList.add(Bem.set(CSS.main, 'option-image'));

          replace(img, clickedImage);

          // second image
        } else {
          let secondImage = this.preloader.get(this.staticURL + currentQuestion.options[index].imgDisabled);

          secondImage.classList.add(Bem.set(CSS.main, 'option-image'));
          replace(img, secondImage);
        }

        let messageOverlay = make('div', Bem.set(CSS.main, 'option-overlay'), {
          innerHTML: '<i></i> ' +  currentQuestion.options[index].message
        });

        imageWrapper.appendChild(messageOverlay);
      });

      if (id === this.activeCorrectId) {
        this.userPoints++;
        button.classList.add(Bem.set(CSS.main, 'option', 'success'));
      } else {
        button.classList.add(Bem.set(CSS.main, 'option', 'error'));
      }

      // this.makeOptionMessage(id);

      if (this.activeIndex >= this.totalLength - 1) {
        this.findResult();

        this.makeActionButton('Результат', 'makeResult');

        this.preloader.load([
          this.staticURL + this.findResult().cover
        ]);
      } else {
        this.makeActionButton('Продолжить', 'makeQuestion');
      }

      this.activeIndex++;
    }
  }

  makeOptionMessage(id) {
    let message = make('div', Bem.set(CSS.main, 'message'), {
      innerHTML: this.messages[id]
    });

    this.mainOptions.appendChild(message);
  }

  /**
     * @typedef {object} result
     * @property {array} range - [1, 3]
     * @property {string} title - 'Вы белка'
     * @property {string} message - 'Вы набрали 2 очков за 15 секунд'
     * @property {string} image  - 'adad.png'
     */

  /**
     * @return {result}
     */
  findResult() {
    let results = DATA.results,
      finalResult = null;

    let secondsWasted = Math.floor(this.timerValue / 10);

    for (let result of results) {
      if (secondsWasted >= result.range[0] && secondsWasted <= result.range[1]) {
        finalResult = result;
        break;
      }
    }

    finalResult.message =`Я угадал ${declineWord(this.userPoints, ['пару', 'пары', 'пар'])} за ${declineWord(secondsWasted, ['секунду', 'секунды', 'секунд'])}`;

    return finalResult;
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

  makeResult() {
    /**
         * @type {result}
         */
    let data = this.findResult();

    let secondsWasted = Math.floor(this.timerValue / 10);

    this.stopTimer();

    let result = make('div', Bem.set(CSS.main, 'result')),
      resultContent = make('div', Bem.set(CSS.main, 'resultContent')),
      resultActions = make('div', Bem.set(CSS.main, 'resultActions')),
      restartButton = make('div', Bem.set(CSS.main, 'restartButton'), {
        data: {
          click: 'restart'
        }
      });

    this.updateMode('result');

    result.style.backgroundImage = `url(${this.imageUrl(data.cover)})`;

    this.mainText.innerHTML = `
            <div class="${Bem.set(CSS.main, 'text-content')}">
                <div class="${Bem.set(CSS.main, 'text-body')}">${DATA.outro}</div>\
                <a class="${Bem.set(CSS.main, 'button')}" href="${DATA.promoUrl}" target="_blank">
                    <span class="${Bem.set(CSS.main, 'button-content')}">
                        ${DATA.CTAText}
                    </span>
                </a>
            </div>
        `;
    removeChildren(this.mainOptions);
    removeChildren(this.mainActions);

    resultContent.innerHTML = `<div class="${Bem.set(CSS.main, 'resultPoints')}">${data.message}</div>
            <div class="${Bem.set(CSS.main, 'title')}">${data.title}</div>`;
    result.appendChild(resultContent);
    resultContent.appendChild(resultActions);
    prepend(this.content, result);


    Share.make(resultActions, {
      url: `${CONFIG.share.url}/${this.userPoints}/${secondsWasted}`,
      twitter: CONFIG.share.twitter
    });

    restartButton.innerHTML = 'Пройти ещё раз' + Svg.restart;
    resultActions.appendChild(restartButton);

    if (isMobile()) scrollToElement(this.container);

    Analytics.sendEvent('Result screen', 'Hit');
    Analytics.sendEvent(`Result ${this.userPoints} screen`, 'Hit');
  }

  /**
    * Format number to string like HH:MM:SS
    * @param {number} time - timer count in 0.1s
    * @return {string}
    */
  formatTime(time) {
    var decileSec = parseInt(time, 10); // don't forget the second param

    let sec = decileSec / 10;
    let minLeft = sec / 60;
    let fullMin = Math.floor(minLeft);
    let secLeft = (decileSec - fullMin) % 600 / 10;
    let fullSecLeft = Math.floor(secLeft);
    let decileSecLeft = parseInt(String(secLeft).split('.')[1], 10) * 6;

    if (isNaN(decileSecLeft)) {
      decileSecLeft = 0;
    }

    fullMin = fullMin < 10 ? `0${fullMin}`: fullMin;
    fullSecLeft = fullSecLeft < 10 ? `0${fullSecLeft}`: fullSecLeft;
    decileSecLeft = decileSecLeft < 10 ? `0${decileSecLeft}`: decileSecLeft;

    return `${fullMin}:${fullSecLeft}:${decileSecLeft}`;
  }

  set timerValue(val) {
    this._timerValue += 1;
    this.timerContent.textContent = this.formatTime(this._timerValue);
  }

  get timerValue() {
    return this._timerValue;
  }

  /**
     * Stop timer if it is running
     * @param {boolean} clear - need to clear value
     */
  stopTimer(clear = true) {
    if (this.timer) {
      window.clearInterval(this.timer);
      if (clear) {
        this._timerValue = 0;
      }
    }
  }

  /**
    * Starts new timer for the game
    * @param {boolean} clear - need to clear value
    */
  restartTimer(clear) {
    this.stopTimer(clear);

    this.timer = window.setInterval(() => {
      this.timerValue++;
    }, 100);
  }

  restart() {
    this.setDefaultValues();
    this.updateMode('progress');

    removeChildren(this.content);
    this.content.appendChild(this.timerWrapper);
    this.content.appendChild(this.mainText);
    this.content.appendChild(this.mainOptions);
    this.content.appendChild(this.mainActions);

    this.makeQuestion(0);
    this.restartTimer();

    Analytics.sendEvent('Restart button', 'Click');
  }
}

module.exports = Special;