/**
 * Dependencies
 */
require('../css/special.styl');

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
    removeElement
} from './lib/dom';

import {
    isMobile
} from './lib/check';

import {
    toArray, shuffle
} from './lib/array';

import {
    preloadImages,
    scrollToElement
} from './lib/helper';

/**
 * Constants
 */
const PATH = window.__PATH || '.';

const CSS = {
    state: {
        active: 'l-active'
    },
    main: 'Cipr'
};

const EL = {};

/**
 * Special constructor
 */
class Special extends BaseSpecial {

    constructor(params) {
        super();

        this.css = params.css;
        this.setDefaultValues();
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

        this.content.appendChild(this.mainText);
        this.content.appendChild(this.mainOptions);
        this.content.appendChild(this.mainActions);
        this.container.appendChild(this.content);

        this.makeIntro();

        this.container.tabIndex = 1;
        this.container.addEventListener('keydown', (event) => {
            this.keydownHandler(event);
        });

        Analytics.sendEvent('Start screen', 'Load');

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
            innerHTML: `<a href="${Data.promoUrl}" target="_blank">${Svg.logo}</a>`
        });

        this.counter = makeElement('div', Bem.set(CSS.main, 'counter'));
        header.appendChild(this.counter);

        this.updateCounter();

        this.container.appendChild(header);
    }

    updateCounter() {
        if (this.counter.children.length === 0) {
            Data.questions.forEach(i => {
                let bullet = makeElement('span');
                this.counter.appendChild(bullet);
            });
        }

        let bullets = toArray(this.counter.children);

        bullets.forEach((bullet, i) => {
            if (i <= this.activeIndex) {
                bullet.classList.add('active');
            } else {
                bullet.classList.remove('active');
            }
        });

    }

    makeIntro() {
        this.mainText.innerHTML = `<div class="${Bem.set(CSS.main, 'title')}"><a href="${CONFIG.articleUrl}">${Data.title}</a></div>${Data.intro}`;
        this.makeActionButton('Начать', 'start');
    }

    makeActionButton(text, func) {
        let button = makeElement('button', Bem.set(CSS.main, 'button'), {
            type: 'button',
            data: {
                click: func
            }
        });

        button.innerHTML = text + Svg.next;

        this.mainActions.appendChild(button);
    }

    start() {
        this.updateMode('progress');
        this.makeQuestion(this.activeIndex);

        Analytics.sendEvent('Start button', 'Click');
    }

    makeQuestion() {
        let data = Data.questions[this.activeIndex];

        if (data) {
            removeChildren(this.mainOptions);
            removeChildren(this.mainActions);

            this.isPending = false;
            this.mainOptions.classList.remove(Bem.set(CSS.main, 'options', 'disabled'));

            this.updateCounter();
            this.mainText.innerHTML = `<div>${data.text}</div>`;

            this.makeQuestionOptions(data.options);

            if (isMobile()) scrollToElement(this.container);

            Analytics.sendEvent(`Question ${this.activeIndex + 1} screen`, 'Hit');
        } else {
            throw new Error('Missing question data');
        }
    }

    makeQuestionOptions(options) {

        shuffle(options);

        options.forEach(option => {
            let item = makeElement('div', Bem.set(CSS.main, 'option'), {
                data: {
                    click: 'submitAnswer',
                    id: option.id
                }
            });

            item.textContent = option.text;

            this.mainOptions.appendChild(item);

            if (option.isCorrect) {
                this.activeCorrectId = option.id;
            }

            this.messages[option.id] = option.message;
        });

    }

    submitAnswer(button) {

        if (!this.isPending) {
            let id = parseInt(button.dataset.id),
                data = null;

            this.isPending = true;
            this.mainOptions.classList.add(Bem.set(CSS.main, 'options', 'disabled'));

            if (id === this.activeCorrectId) {
                this.userPoints++;
                button.classList.add(Bem.set(CSS.main, 'option', 'success'));
            } else {
                button.classList.add(Bem.set(CSS.main, 'option', 'error'));
            }

            this.makeOptionMessage(id);

            if (this.activeIndex >= this.totalLength - 1) {
                let resultData = this.findResult();

                this.makeActionButton('Результат', 'makeResult');

                preloadImages([
                    'https://leonardo.osnova.io/5999f84f-96fa-0f36-0b22-48a05ee2ed0f/'
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

    findResult() {
        let results = Data.results,
            finalResult = null;

        for (let result of results) {
            if (this.userPoints >= result.range[0] && this.userPoints <= result.range[1]) {
                finalResult = result;
                break;
            }
        }

        return finalResult;
    }

    makeResult() {
        let data = this.findResult();

        let result = makeElement('div', Bem.set(CSS.main, 'result')),
            resultContent = makeElement('div', Bem.set(CSS.main, 'resultContent')),
            resultActions = makeElement('div', Bem.set(CSS.main, 'resultActions')),
            restartButton = makeElement('div', Bem.set(CSS.main, 'restartButton'), {
                data: {
                    click: 'restart'
                }
            }),
            button = makeElement('a', Bem.set(CSS.main, 'button'), {
                target: '_blank',
                href: Data.promoUrl
            });

        this.updateMode('result');

        this.mainText.innerHTML = Data.outro;
        removeChildren(this.mainOptions);
        removeChildren(this.mainActions);

        resultContent.innerHTML = `<div class="${Bem.set(CSS.main, 'resultPoints')}">${this.userPoints} из ${this.totalLength} правильных ответов</div>
            <div class="${Bem.set(CSS.main, 'title')}">${data.title}</div>`;
        result.appendChild(resultContent);
        resultContent.appendChild(resultActions);
        prepend(this.content, result);

        button.innerHTML = 'Купить билет';
        this.mainText.appendChild(button);

        Share.make(resultActions, {
            url: `${CONFIG.share.url}/${this.userPoints}`,
            twitter: CONFIG.share.twitter
        });

        restartButton.innerHTML = 'Пройти ещё раз' + Svg.restart;
        resultActions.appendChild(restartButton);

        if (isMobile()) scrollToElement(this.container);

        Analytics.sendEvent('Result screen', 'Hit');
        Analytics.sendEvent(`Result ${this.userPoints} screen`, 'Hit');
    }

    updateMode(name) {
        this.mode = name;
        this.container.dataset.mode = this.mode;
    }

    restart() {
        this.setDefaultValues();
        this.updateMode('progress');

        removeChildren(this.content);
        this.content.appendChild(this.mainText);
        this.content.appendChild(this.mainOptions);
        this.content.appendChild(this.mainActions);

        this.makeQuestion(0);

        Analytics.sendEvent('Restart button', 'Click');
    }

}

module.exports = Special;