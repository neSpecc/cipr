/**
 * Dependencies
 */
require('../css/special.styl');

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

import Data from './data';
import Svg from './svg';
import Bem from './bem';
import {
    prepend,
    makeElement,
    removeChildren,
    replace,
} from './lib/dom';

import {
    isMobile
} from './lib/check';

import {
    toArray, shuffle
} from './lib/array';

import {
    scrollToElement,
    declineWord
} from './lib/helper';

/**
 * Constants
 */
const PATH = window.__PATH || '.';

const CSS = {
    state: {
        active: 'l-active'
    },
    main: 'MegafonSpeed',
};

const EL = {};

/**
 * Special constructor
 */
class Special extends BaseSpecial {
    constructor(params) {
        super();

        this.css = params.css;
        this.staticURL = params.staticURL;

        this.setDefaultValues();

        /**
        * Timer for the progress
        * @type {null|TimeoutId}
        */
        this.timer = null;

        /**
        * Timer value
        * @type {number}
        * @private
        */
        this._timerValue = 0;

        /**
        * Timer holder
        * @type {Element|null}
        */
        this.timerWrapper = null;
        this.timerContent = null;
    }

    init(params = {}, data = {}) {
        Object.assign(CONFIG, params);
        Object.assign(Data, data);

        this.saveParams(CONFIG);

        if (this.css) {
            this.loadStyles(this.css).then(() => this.makeGeneralLayout());
        }
    }

    setDefaultValues() {
        this.activeIndex = 0;
        this.totalLength = Data.questions.length;
        this.userPoints = 0;
        this.activeCorrectId = null;
        this.messages = {};
        this.isPending = false;
        this.stopTimer();
        this.timer = null;
    }

    makeGeneralLayout() {
        let heart = makeElement('div', Bem.set(CSS.main, 'heart'), {
            innerHTML: '<span></span>'
        });

        this.container.appendChild(heart);

        this.content = makeElement('div', Bem.set(CSS.main, 'content'));

        this.updateMode('start');

        this.mainText = makeElement('div', Bem.set(CSS.main, 'text'));
        this.mainOptions = makeElement('div', Bem.set(CSS.main, 'options'));
        this.mainActions = makeElement('div', Bem.set(CSS.main, 'actions'));

        this.container.classList.add(CSS.main);

        if (CONFIG.isCompact) {
            this.container.classList.add(Bem.set(CSS.main, null, 'compact'));
        }

        this.makeHeader();

        this.timerWrapper = makeElement('div', Bem.set(CSS.main, 'timer'));
        this.timerContent = makeElement('div', Bem.set(CSS.main, 'timer-content'));

        this.content.appendChild(this.mainText);
        this.content.appendChild(this.mainOptions);
        this.content.appendChild(this.mainActions);
        this.container.appendChild(this.content);
        this.timerWrapper.appendChild(this.timerContent);
        this.content.appendChild(this.timerWrapper);

        this.makeIntro();

        this.container.tabIndex = 1;
        this.container.addEventListener('keydown', (event) => {
            this.keydownHandler(event);
        });

        Analytics.sendEvent('Start screen', 'Load');

        this.preloader.load(Data.questions[0].options.map(option => this.staticURL + option.img));

        // this.makeResult();

        // this.activeIndex = 8;
        // this.start();
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

    makeHeader() {
        let header = makeElement('div', Bem.set(CSS.main, 'header'), {
            innerHTML: `<a href="${Data.logoUrl}" target="_blank">${Svg.logo}</a>`
        });

        this.counter = makeElement('div', Bem.set(CSS.main, 'counter'));
        header.appendChild(this.counter);

        this.updateCounter();

        this.container.appendChild(header);
    }

    updateCounter() {
        this.counter.textContent = `Вопрос ${this.activeIndex + 1} из ${Data.questions.length}`;
        // if (this.counter.children.length === 0) {
        //     Data.questions.forEach(() => {
        //         let bullet = makeElement('span');
        //
        //         this.counter.appendChild(bullet);
        //     });
        // }
        //
        // let bullets = toArray(this.counter.children);
        //
        // bullets.forEach((bullet, i) => {
        //     if (i <= this.activeIndex) {
        //         bullet.classList.add('active');
        //     } else {
        //         bullet.classList.remove('active');
        //     }
        // });
    }

    makeIntro() {
        this.mainText.innerHTML = `<div class="${Bem.set(CSS.main, 'title')}"><a href="${CONFIG.articleUrl}">${Data.title}</a></div>${Data.intro}`;
        this.makeActionButton('Начать', 'start');
    }

    makeActionButton(text, func) {
        let button = makeElement('div', Bem.set(CSS.main, 'button'), {
            type: 'button',
            data: {
                click: func
            }
        });

        button.innerHTML = `<span class="${Bem.set(CSS.main, 'button-content')}">
                                ${text + Svg.next}
                            </span>`;

        this.mainActions.appendChild(button);
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
        let data = Data.questions[this.activeIndex];

        if (data) {
            removeChildren(this.mainOptions);
            removeChildren(this.mainActions);

            this.isPending = false;
            this.mainOptions.classList.remove(Bem.set(CSS.main, 'options', 'disabled'));

            this.restartTimer(false);
            this.updateCounter();
            this.mainText.innerHTML = `${Data.task}`;

            this.makeQuestionOptions(data.options);

            if (isMobile()) scrollToElement(this.container);

            Analytics.sendEvent(`Question ${this.activeIndex + 1} screen`, 'Hit');

            if (Data.questions[this.activeIndex + 1]) {
                this.preloader.load(Data.questions[this.activeIndex + 1].options.map(option => this.staticURL + option.img));
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
            let item = makeElement('div', Bem.set(CSS.main, 'option'), {
                data: {
                    click: 'submitAnswer',
                    id: option.id,
                    number: this.activeIndex
                }
            });
            //
            // let image = makeElement('img', Bem.set(CSS.main, 'option-image'), {
            //     src: this.staticURL + option.img,
            //     data: {
            //         id: option.id
            //     }
            // });

            let imageCached = this.preloader.get(this.staticURL + option.img);

            imageCached.classList.add(Bem.set(CSS.main, 'option-image'));
            imageCached.dataset.id = option.id;

            let label = makeElement('div', [], {
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
            let id = parseInt(button.dataset.id),
                data = null;

            this.stopTimer(false);

            this.isPending = true;
            this.mainOptions.classList.add(Bem.set(CSS.main, 'options', 'disabled'));

            let images = this.content.querySelectorAll('.' + Bem.set(CSS.main, 'option-image'));

            /**
            * @type {question}
            */
            let currentQuestion = Data.questions[this.activeIndex];

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

                let messageOverlay = makeElement('div', Bem.set(CSS.main, 'option-overlay'), {
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
                let resultData = this.findResult();

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
        let message = makeElement('div', Bem.set(CSS.main, 'message'), {
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
        let results = Data.results,
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

        let result = makeElement('div', Bem.set(CSS.main, 'result')),
            resultContent = makeElement('div', Bem.set(CSS.main, 'resultContent')),
            resultActions = makeElement('div', Bem.set(CSS.main, 'resultActions')),
            restartButton = makeElement('div', Bem.set(CSS.main, 'restartButton'), {
                data: {
                    click: 'restart'
                }
            });

        this.updateMode('result');

        result.style.backgroundImage = `url(${this.imageUrl(data.cover)})`;

        this.mainText.innerHTML = `
            <div class="${Bem.set(CSS.main, 'text-content')}">
                <div class="${Bem.set(CSS.main, 'text-body')}">${Data.outro}</div>\
                <a class="${Bem.set(CSS.main, 'button')}" href="${Data.promoUrl}" target="_blank">
                    <span class="${Bem.set(CSS.main, 'button-content')}">
                        ${Data.CTAText}
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

    updateMode(name) {
        this.mode = name;
        this.container.dataset.mode = this.mode;
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