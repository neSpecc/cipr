import * as Analytics from './lib/analytics';

/**
 * Base special constructor with common methods
 */
export default class BaseSpecial {

    constructor() {

        this.params = {
            container: 'body',
            analyticsCategory: null,
            sendPageview: false,
            listenedEvents: [
                'click'
            ],
            listenedKeys: []
        };

        this.keyCodes = {
            enter: 13
        };

    }

    /**
     * Save custom params
     * @param {Object} params - params object with custom values
     */
    saveParams(params) {
        Object.assign(this.params, params);
        this.container = this.params.container;
        this.addEventListeners();
    }

    /**
     * Load css file
     * @param {String} path
     */
    loadStyles(path) {

        return new Promise((resolve, reject) => {

            let link = document.createElement('link');

            link.rel = 'stylesheet';
            link.href = path;

            link.onload = () => resolve();

            document.body.appendChild(link);

        });

    }

    /**
     * Add event listeners to document
     */
    addEventListeners() {

        this.params.listenedEvents.forEach(eventName => {
            this.container.addEventListener(eventName, event => this.defaultEventHandler(event, eventName));
        });

    }

    /**
     * Default events handler
     * @param {Object} event
     * @param {String} eventName
     */
    defaultEventHandler(event, eventName) {

        /** Keydown event */
        if (eventName === 'keydown' && this.params.listenedKeys.length > 0) {

            this.params.listenedKeys.forEach(key => {
                if (event.keyCode === key.code) {
                    key.action(event);
                }
            });

            /** All other events, attached to elements */
        } else {

            let el  = event.target;

            /**
            * Bubble click
            */
            while (el){
              let action = el.dataset ? el.dataset[eventName] : null;

              if (action && this[action]) {
                this[action](el, event);
              }

              /** Send links clicks to analytics */
              if (el.tagName && el.tagName.toLowerCase() === 'a') {
                Analytics.sendEvent(el.href);
              }

              el = el.parentNode;
            }
        }

    }

}