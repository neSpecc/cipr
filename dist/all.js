(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["MegafonSpeed"] = factory();
	else
		root["MegafonSpeed"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
 * Configuration
 */

var secure = window.location.protocol === 'https:';

module.exports = {
    name: 'likely',
    prefix: 'likely__',
    secure: secure,
    protocol: secure ? 'https:' : 'http:',
    storageKey: 'likelyServices',
    breakpoint: 680
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var config = __webpack_require__(0);

var div = document.createElement('div'),
    gid = 0;

var dom = module.exports = {
    /**
     * Wrap SVG coords from data object into SVG tag
     *
     * @param {String} coords
     */
    wrapSVG: function (coords) {
        return '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" ' + 'viewBox="0 0 16 16"><path d="M' + coords + 'z"/></svg>';
    },

    /**
     * Create node from HTML
     *
     * @param {String} html
     */
    createNode: function (html) {
        div.innerHTML = html;

        return div.children[0];
    },

    /**
     * Load script
     *
     * @param {String} url
     */
    getScript: function (url) {
        var script = document.createElement('script'),
            head   = document.head;

        script.type = 'text/javascript';
        script.src  = url;

        head.appendChild(script);
        head.removeChild(script);
    },

    /**
     * Get JSON
     *
     * @param {String} url
     * @param {Function} callback
     */
    getJSON: function (url, callback) {
        var name = encodeURIComponent('random_fun_' + (++gid));

        url = url.replace(
            /callback=(\?)/,
            'callback=' + name
        );

        window[name] = callback;

        dom.getScript(url);
    },

    /**
     * Find first node by selector
     *
     * @param {String} selector
     * @param {Node} node
     * @return {Node}
     */
    find: function (selector, node) {
        return (node || document).querySelector(selector);
    },

    /**
     * Find all nodes by selector
     *
     * @param {String} selector
     * @param {Node} node
     * @return {NodeList}
     */
    findAll: function (selector, node) {
        return (node || document).querySelectorAll(selector);
    },

    /**
     * Check mobile media query
     */
    isMobile: function() {
        return !window.matchMedia('(min-width: ' + config.breakpoint + 'px)').matches;
    },

    /**
     * Open the popup
     *
     * @param {String} url
     * @param {String} winId
     * @param {Number} width,
     * @param {Number} height
     */
    openPopup: function (url, winId, width, height) {
        var left = Math.round(screen.width / 2 - width / 2),
            top  = 0;

        if (screen.height > height) {
            top = Math.round(screen.height / 3 - height / 2);
        }

        var options = 'left='    + left +
                      ',top='    + top +
                      ',width='  + width +
                      ',height=' + height +
                      ',personalbar=0,toolbar=0,scrollbars=1,resizable=1';

        var win = window.open(url, winId, options);

        // if (!win) {
        //     location.href = url;
        //     return location.href;
        // }

        // win.focus();

        return win;
    }
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var bool = {yes: true, no: false},
    rUrl = /(https?|ftp):\/\/[^\s\/$.?#].[^\s]*/gi;

/**
 * @internal
 */
var utils = {
    /**
     * Simple $.each, only for objects
     *
     * @param {Object} object
     * @param {Function} callback
     */
    each: function (object, callback) {
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                callback(object[key], key);
            }
        }
    },

    /**
     * Convert array-like object to array
     *
     * @param {Object} arrayLike
     * @return {Array}
     */
    toArray: function (arrayLike) {
        return Array.prototype.slice.call(arrayLike);
    },

    /**
     * Merge given dictionaries (objects) into one object
     *
     * @param {Object} ...objects
     * @return {Object}
     */
    merge: function () {
        var result = {};

        for (var i = 0; i < arguments.length; i ++) {
            var arg = arguments[i];

            if (arg) {
                for (var key in arg) {
                    result[key] = arg[key];
                }
            }
        }

        return result;
    },

    /**
     * Extend one (target) object by other (subject)
     *
     * @param {Object} target
     * @param {Object} subject
     */
    extend: function (target, subject) {
        for (var key in subject) {
            target[key] = subject[key];
        }
    },

    /**
     * Check new flexbox syntax support
     */
    flexboxSupport: function(element, name){
        var d = document, f = 'flex', fw = '-webkit-'+f, e = d.createElement('b'), c;

        try {
            e.style.display = fw;
            e.style.display = f;
            c = (e.style.display == f || e.style.display == fw) ? f : 'no-'+f;
        } catch(e) {
            c = 'no-'+f;
        }

        element.className += ' ' + name + '--' + c;
    },

    /**
     * Return node.dataset or plain object for IE 10without setters
     * based on https://gist.github.com/brettz9/4093766#file_html5_dataset.js
     *
     * @param {Node} node
     * @return {Object}
     */
    getDataset: function (node) {
        if (typeof node.dataset === 'object') {
            return node.dataset;
        }

        var i,
            dataset = {},
            attributes = node.attributes,
            attribute,
            attributeName;

        var toUpperCase = function (n0) {
            return n0.charAt(1).toUpperCase();
        };

        for (i = attributes.length - 1; i >= 0; i--) {
            attribute = attributes[i];
            if (attribute && attribute.name &&
                (/^data-\w[\w\-]*$/).test(attribute.name)) {
                    attributeName = attribute.name.substr(5).replace(/-./g, toUpperCase);
                    dataset[attributeName] = attribute.value;
                }
        }

        return dataset;
    },

    /**
     * Convert "yes" and "no" to true and false.
     *
     * @param {Node} node
     */
    bools: function (node) {
        var result = {},
            data   = utils.getDataset(node);

        for (var key in data) {
            var value = data[key];

            result[key] = bool[value] || value;
        }

        return result;
    },

    /**
     * Map object keys in string to its values
     *
     * @param {String} text
     * @param {Object} data
     * @return {String}
     */
    template: function (text, data) {
        return !text ? '' : text.replace(/\{([^\}]+)\}/g, function (value, key) {
            return key in data ? data[key] : value;
        });
    },

    /**
     * Map object keys in URL to its values
     *
     * @param {String} text
     * @param {Object} data
     * @return {String}
     */
    makeUrl: function (text, data) {
        for (var key in data) {
            data[key] = encodeURIComponent(data[key]);
        }

        return utils.template(text, data);
    },

    /**
     * Create query string out of data
     *
     * @param {Object} data
     * @return {String}
     */
    query: function (data) {
        var filter = encodeURIComponent,
            query  = [];

        for (var key in data) {
            if (typeof data[key] === 'object') continue;

            query.push(filter(key) + '=' + filter(data[key]));
        }

        return query.join('&');
    },

    /**
     * Set value in object using dot-notation
     *
     * @param {Object} object
     * @param {String} key
     * @param {Object} value
     */
    set: function (object, key, value) {
        var frags = key.split('.'),
            last  = null;

        frags.forEach(function (key, index) {
            if (typeof object[key] === 'undefined') {
                object[key] = {};
            }

            if (index !== frags.length - 1) {
                object = object[key];
            }

            last = key;
        });

        object[last] = value;
    }
};

module.exports = utils;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Config = __webpack_require__(4);

var CONSOLE_STYLE = 'color: #E87E04';

/**
 * Send pageview event via GTM
 */
var sendPageView = exports.sendPageView = function sendPageView() {
    if (true) {
        console.log('Analytics: %cPage — View', CONSOLE_STYLE);
    }

    if (window.dataLayer !== undefined) {
        window.dataLayer.push({
            event: 'Page — View',
            post_details: {},
            section: 'special',
            tags: [],
            title: document.title,
            url: window.location.pathname
        });
    }
};

/**
 * Send analytics events via GTM
 * @param {String} label  - event label
 * @param {String} action - event action ("Click" by default)
 */
var sendEvent = exports.sendEvent = function sendEvent(label) {
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Click';

    if (true) {
        console.log('Analytics: %c' + Config.analyticsCategory + ' \u2014 ' + label + ' \u2014 ' + action, CONSOLE_STYLE);
    }

    if (window.dataLayer !== undefined && Config.analyticsCategory) {
        window.dataLayer.push({
            event: 'data_event',
            data_description: Config.analyticsCategory + ' \u2014 ' + label + ' \u2014 ' + action
        });
    }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    name: 'MegafonSpeed',
    analyticsCategory: 'MegafonSpeed',
    sendPageview: false,
    listenedEvents: ['click']
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Social network services
 */

var Service = __webpack_require__(14),
    utils   = __webpack_require__(2),
    svg     = __webpack_require__(15);

var services = {
    odnoklassniki: __webpack_require__(16),
    vkontakte:     __webpack_require__(17),
    facebook:      __webpack_require__(18),
    twitter:       __webpack_require__(19),
    gplus:         __webpack_require__(20),
    pocket:        __webpack_require__(21),
    telegram:      __webpack_require__(22),
    whatsapp:      __webpack_require__(23),
    viber:         __webpack_require__(24),
    email:         __webpack_require__(25),
    more:          __webpack_require__(26)
};

utils.each(services, function (service, key) {
    Service(service);

    service.svgi = svg[key];
    service.name = key;
});

module.exports = services;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var isAvailable = function() {

    try {
        window.localStorage.setItem('isStorageAvailable', 1);
        window.localStorage.removeItem('isStorageAvailable');
        return true;
    } catch (e) {
        return false;
    }

};

var storage = {

    /**
     * Get item from localStorage
     * @param {String} key
     */
    getItem: function(key){

        if (isAvailable()) {

            var item = window.localStorage.getItem(key);

            try {
                JSON.parse(item);
            } catch (e) {
                return item;
            }

            return JSON.parse(item);

        }

    },

    /**
     * Save item in localStorage
     * @param {String} key
     * @param {String} value
     */
    setItem: function(key, value) {

        value = (typeof value === 'string') ? value : JSON.stringify(value);

        if (isAvailable()) {
            window.localStorage.setItem(key, value);
        }

    },

    /**
     * Remove item from localStorage
     * @param {String} key
     */
    removeItem: function(key) {

        if (isAvailable()) {
            window.localStorage.removeItem(key);
        }

    }

};

module.exports = storage;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Make html element
 * @param {String} tagName
 * @param {Array} classNames - array of classnames
 * @param {Object} attributes - object with html attributes
 */
var makeElement = exports.makeElement = function makeElement(tagName) {
    var classNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    tagName = tagName.toLowerCase();

    var element = document.createElement(tagName);

    if ((typeof classNames === 'undefined' ? 'undefined' : _typeof(classNames)) === 'object') {
        classNames.forEach(function (className) {
            element.classList.add(className);
        });
    } else {
        element.classList.add(classNames);
    }

    for (var attr in attributes) {
        if (attr === 'data') {
            var dataAttributes = attributes[attr];

            for (var _attr in dataAttributes) {
                element.dataset[_attr] = dataAttributes[_attr];
            }
        } else {
            element[attr] = attributes[attr];
        }
    }

    return element;
};

/**
 * Cache elements with data-view attribute and put them in object
 * @param {Object} obj
 */
var cacheElements = exports.cacheElements = function cacheElements(obj) {
    var newObj = {},
        attr = 'view',
        elements = document.querySelectorAll('[data-' + attr + ']');

    Array.prototype.forEach.call(elements, function (el) {
        var name = el.dataset[attr];

        newObj[name] = el;
    });

    _extends(obj, newObj);
};

/**
 * Get all siblings of specified element
 * @param {Element} element
 */
var getSiblings = exports.getSiblings = function getSiblings(element) {
    var siblings = [],
        sibling = element.parentNode.firstChild;

    for (; sibling; sibling = sibling.nextSibling) {
        if (sibling.nodeType !== 1 || sibling === element) continue;
        siblings.push(sibling);
    }

    return siblings;
};

/**
 * Remove all children from element
 * @param {Element} parent
 */
var removeChildren = exports.removeChildren = function removeChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

/**
 * Remove specified element from its parent
 * @param {Element} element
 */
var removeElement = exports.removeElement = function removeElement(element) {
    if (element) {
        element.parentNode.removeChild(element);
    }
};

var htmlStringToNode = exports.htmlStringToNode = function htmlStringToNode(html) {
    var el = document.createElement('div');

    el.innerHTML = html;

    return el.firstChild;
};

var prepend = exports.prepend = function prepend(parent, el) {
    parent.insertBefore(el, parent.firstChild);
};

/**
 * Replace one element with another
 */
var replace = exports.replace = function replace(target, another) {
    target.parentNode.replaceChild(another, target);
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Entry point
 */
var Special = __webpack_require__(9);
var Config = __webpack_require__(4);

// let special = new Special();

// special.init(Config);

module.exports = Special;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _analytics = __webpack_require__(3);

var Analytics = _interopRequireWildcard(_analytics);

var _share = __webpack_require__(10);

var Share = _interopRequireWildcard(_share);

var _base = __webpack_require__(29);

var _base2 = _interopRequireDefault(_base);

var _data = __webpack_require__(31);

var _data2 = _interopRequireDefault(_data);

var _svg = __webpack_require__(32);

var _svg2 = _interopRequireDefault(_svg);

var _bem = __webpack_require__(33);

var _bem2 = _interopRequireDefault(_bem);

var _dom = __webpack_require__(7);

var _check = __webpack_require__(34);

var _array = __webpack_require__(35);

var _helper = __webpack_require__(36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Dependencies
 */
__webpack_require__(37);

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

var CONFIG = __webpack_require__(4);

/**
 * Constants
 */
var PATH = window.__PATH || '.';

var CSS = {
    state: {
        active: 'l-active'
    },
    main: 'MegafonSpeed'
};

var EL = {};

/**
 * Special constructor
 */

var Special = function (_BaseSpecial) {
    _inherits(Special, _BaseSpecial);

    function Special(params) {
        _classCallCheck(this, Special);

        var _this = _possibleConstructorReturn(this, (Special.__proto__ || Object.getPrototypeOf(Special)).call(this));

        _this.css = params.css;
        _this.staticURL = params.staticURL;

        _this.setDefaultValues();

        /**
        * Timer for the progress
        * @type {null|TimeoutId}
        */
        _this.timer = null;

        /**
        * Timer value
        * @type {number}
        * @private
        */
        _this._timerValue = 0;

        /**
        * Timer holder
        * @type {Element|null}
        */
        _this.timerWrapper = null;
        _this.timerContent = null;
        return _this;
    }

    _createClass(Special, [{
        key: 'init',
        value: function init() {
            var _this2 = this;

            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            _extends(CONFIG, params);
            _extends(_data2.default, data);

            this.saveParams(CONFIG);

            if (this.css) {
                this.loadStyles(this.css).then(function () {
                    return _this2.makeGeneralLayout();
                });
            }
        }
    }, {
        key: 'setDefaultValues',
        value: function setDefaultValues() {
            this.activeIndex = 0;
            this.totalLength = _data2.default.questions.length;
            this.userPoints = 0;
            this.activeCorrectId = null;
            this.messages = {};
            this.isPending = false;
            this.stopTimer();
            this.timer = null;
        }
    }, {
        key: 'makeGeneralLayout',
        value: function makeGeneralLayout() {
            var _this3 = this;

            var heart = (0, _dom.makeElement)('div', _bem2.default.set(CSS.main, 'heart'), {
                innerHTML: '<span></span>'
            });

            this.container.appendChild(heart);

            this.content = (0, _dom.makeElement)('div', _bem2.default.set(CSS.main, 'content'));

            this.updateMode('start');

            this.mainText = (0, _dom.makeElement)('div', _bem2.default.set(CSS.main, 'text'));
            this.mainOptions = (0, _dom.makeElement)('div', _bem2.default.set(CSS.main, 'options'));
            this.mainActions = (0, _dom.makeElement)('div', _bem2.default.set(CSS.main, 'actions'));

            this.container.classList.add(CSS.main);

            if (CONFIG.isCompact) {
                this.container.classList.add(_bem2.default.set(CSS.main, null, 'compact'));
            }

            this.makeHeader();

            this.timerWrapper = (0, _dom.makeElement)('div', _bem2.default.set(CSS.main, 'timer'));
            this.timerContent = (0, _dom.makeElement)('div', _bem2.default.set(CSS.main, 'timer-content'));

            this.content.appendChild(this.mainText);
            this.content.appendChild(this.mainOptions);
            this.content.appendChild(this.mainActions);
            this.container.appendChild(this.content);
            this.timerWrapper.appendChild(this.timerContent);
            this.content.appendChild(this.timerWrapper);

            this.makeIntro();

            this.container.tabIndex = 1;
            this.container.addEventListener('keydown', function (event) {
                _this3.keydownHandler(event);
            });

            Analytics.sendEvent('Start screen', 'Load');

            this.preloader.load(_data2.default.questions[0].options.map(function (option) {
                return _this3.staticURL + option.img;
            }));

            // this.makeResult();

            // this.activeIndex = 8;
            // this.start();
        }
    }, {
        key: 'keydownHandler',
        value: function keydownHandler(event) {
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
    }, {
        key: 'makeHeader',
        value: function makeHeader() {
            var header = (0, _dom.makeElement)('div', _bem2.default.set(CSS.main, 'header'), {
                innerHTML: '<a href="' + _data2.default.logoUrl + '" target="_blank">' + _svg2.default.logo + '</a>'
            });

            this.counter = (0, _dom.makeElement)('div', _bem2.default.set(CSS.main, 'counter'));
            header.appendChild(this.counter);

            this.updateCounter();

            this.container.appendChild(header);
        }
    }, {
        key: 'updateCounter',
        value: function updateCounter() {
            this.counter.textContent = '\u0412\u043E\u043F\u0440\u043E\u0441 ' + (this.activeIndex + 1) + ' \u0438\u0437 ' + _data2.default.questions.length;
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
    }, {
        key: 'makeIntro',
        value: function makeIntro() {
            this.mainText.innerHTML = '<div class="' + _bem2.default.set(CSS.main, 'title') + '"><a href="' + CONFIG.articleUrl + '">' + _data2.default.title + '</a></div>' + _data2.default.intro;
            this.makeActionButton('Начать', 'start');
        }
    }, {
        key: 'makeActionButton',
        value: function makeActionButton(text, func) {
            var button = (0, _dom.makeElement)('div', _bem2.default.set(CSS.main, 'button'), {
                type: 'button',
                data: {
                    click: func
                }
            });

            button.innerHTML = '<span class="' + _bem2.default.set(CSS.main, 'button-content') + '">\n                                ' + (text + _svg2.default.next) + '\n                            </span>';

            this.mainActions.appendChild(button);
        }
    }, {
        key: 'start',
        value: function start() {
            this.updateMode('progress');
            this.makeQuestion(this.activeIndex);
            this.restartTimer();

            Analytics.sendEvent('Start button', 'Click');
        }
    }, {
        key: 'makeQuestion',
        value: function makeQuestion() {
            var _this4 = this;

            /**
            * @type {question}
            */
            var data = _data2.default.questions[this.activeIndex];

            if (data) {
                (0, _dom.removeChildren)(this.mainOptions);
                (0, _dom.removeChildren)(this.mainActions);

                this.isPending = false;
                this.mainOptions.classList.remove(_bem2.default.set(CSS.main, 'options', 'disabled'));

                this.restartTimer(false);
                this.updateCounter();
                this.mainText.innerHTML = '' + _data2.default.task;

                this.makeQuestionOptions(data.options);

                if ((0, _check.isMobile)()) (0, _helper.scrollToElement)(this.container);

                Analytics.sendEvent('Question ' + (this.activeIndex + 1) + ' screen', 'Hit');

                if (_data2.default.questions[this.activeIndex + 1]) {
                    this.preloader.load(_data2.default.questions[this.activeIndex + 1].options.map(function (option) {
                        return _this4.staticURL + option.img;
                    }));
                }
            } else {
                throw new Error('Missing question data');
            }
        }

        /**
        * @param {option[]} options
        */

    }, {
        key: 'makeQuestionOptions',
        value: function makeQuestionOptions(options) {
            var _this5 = this;

            (0, _array.shuffle)(options);

            options.forEach(function (option) {
                var item = (0, _dom.makeElement)('div', _bem2.default.set(CSS.main, 'option'), {
                    data: {
                        click: 'submitAnswer',
                        id: option.id,
                        number: _this5.activeIndex
                    }
                });
                //
                // let image = makeElement('img', Bem.set(CSS.main, 'option-image'), {
                //     src: this.staticURL + option.img,
                //     data: {
                //         id: option.id
                //     }
                // });

                var imageCached = _this5.preloader.get(_this5.staticURL + option.img);

                imageCached.classList.add(_bem2.default.set(CSS.main, 'option-image'));
                imageCached.dataset.id = option.id;

                var label = (0, _dom.makeElement)('div', [], {
                    innerHTML: option.text
                });

                item.appendChild(imageCached);
                item.appendChild(label);

                _this5.mainOptions.appendChild(item);

                if (option.isCorrect) {
                    _this5.activeCorrectId = option.id;
                }

                _this5.messages[option.id] = option.message;

                _this5.preloader.load([_this5.staticURL + option.imgCorrect, _this5.staticURL + option.imgWrong, _this5.staticURL + option.imgDisabled]);
            });
        }
    }, {
        key: 'submitAnswer',
        value: function submitAnswer(button) {
            var _this6 = this;

            if (!this.isPending) {
                var id = parseInt(button.dataset.id),
                    data = null;

                this.stopTimer(false);

                this.isPending = true;
                this.mainOptions.classList.add(_bem2.default.set(CSS.main, 'options', 'disabled'));

                var images = this.content.querySelectorAll('.' + _bem2.default.set(CSS.main, 'option-image'));

                /**
                * @type {question}
                */
                var currentQuestion = _data2.default.questions[this.activeIndex];

                Array.from(images).forEach(function (img, index) {
                    var imageId = parseInt(img.dataset.id),
                        imageWrapper = img.parentNode;

                    // clicked image
                    if (id === imageId) {
                        var clickedImage = void 0;

                        if (id === _this6.activeCorrectId) {
                            clickedImage = _this6.preloader.get(_this6.staticURL + currentQuestion.options[index].imgCorrect);
                        } else {
                            clickedImage = _this6.preloader.get(_this6.staticURL + currentQuestion.options[index].imgWrong);
                        }

                        clickedImage.classList.add(_bem2.default.set(CSS.main, 'option-image'));

                        (0, _dom.replace)(img, clickedImage);

                        // second image
                    } else {
                        var secondImage = _this6.preloader.get(_this6.staticURL + currentQuestion.options[index].imgDisabled);

                        secondImage.classList.add(_bem2.default.set(CSS.main, 'option-image'));
                        (0, _dom.replace)(img, secondImage);
                    }

                    var messageOverlay = (0, _dom.makeElement)('div', _bem2.default.set(CSS.main, 'option-overlay'), {
                        innerHTML: '<i></i> ' + currentQuestion.options[index].message
                    });

                    imageWrapper.appendChild(messageOverlay);
                });

                if (id === this.activeCorrectId) {
                    this.userPoints++;
                    button.classList.add(_bem2.default.set(CSS.main, 'option', 'success'));
                } else {
                    button.classList.add(_bem2.default.set(CSS.main, 'option', 'error'));
                }

                // this.makeOptionMessage(id);

                if (this.activeIndex >= this.totalLength - 1) {
                    var resultData = this.findResult();

                    this.makeActionButton('Результат', 'makeResult');

                    this.preloader.load([this.staticURL + this.findResult().cover]);
                } else {
                    this.makeActionButton('Продолжить', 'makeQuestion');
                }

                this.activeIndex++;
            }
        }
    }, {
        key: 'makeOptionMessage',
        value: function makeOptionMessage(id) {
            var message = (0, _dom.makeElement)('div', _bem2.default.set(CSS.main, 'message'), {
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

    }, {
        key: 'findResult',
        value: function findResult() {
            var results = _data2.default.results,
                finalResult = null;

            var secondsWasted = Math.floor(this.timerValue / 10);

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = results[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var result = _step.value;

                    if (secondsWasted >= result.range[0] && secondsWasted <= result.range[1]) {
                        finalResult = result;
                        break;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            finalResult.message = '\u042F \u0443\u0433\u0430\u0434\u0430\u043B ' + (0, _helper.declineWord)(this.userPoints, ['пару', 'пары', 'пар']) + ' \u0437\u0430 ' + (0, _helper.declineWord)(secondsWasted, ['секунду', 'секунды', 'секунд']);

            return finalResult;
        }

        /**
         * Format image URL: add static URL if need
         * @param {string} url
         */

    }, {
        key: 'imageUrl',
        value: function imageUrl(url) {
            if (url.substring(0, 4) === 'http') {
                return url;
            }

            return this.staticURL + url;
        }
    }, {
        key: 'makeResult',
        value: function makeResult() {
            /**
             * @type {result}
             */
            var data = this.findResult();

            var secondsWasted = Math.floor(this.timerValue / 10);

            this.stopTimer();

            var result = (0, _dom.makeElement)('div', _bem2.default.set(CSS.main, 'result')),
                resultContent = (0, _dom.makeElement)('div', _bem2.default.set(CSS.main, 'resultContent')),
                resultActions = (0, _dom.makeElement)('div', _bem2.default.set(CSS.main, 'resultActions')),
                restartButton = (0, _dom.makeElement)('div', _bem2.default.set(CSS.main, 'restartButton'), {
                data: {
                    click: 'restart'
                }
            });

            this.updateMode('result');

            result.style.backgroundImage = 'url(' + this.imageUrl(data.cover) + ')';

            this.mainText.innerHTML = '\n            <div class="' + _bem2.default.set(CSS.main, 'text-content') + '">\n                <div class="' + _bem2.default.set(CSS.main, 'text-body') + '">' + _data2.default.outro + '</div>                <a class="' + _bem2.default.set(CSS.main, 'button') + '" href="' + _data2.default.promoUrl + '" target="_blank">\n                    <span class="' + _bem2.default.set(CSS.main, 'button-content') + '">\n                        ' + _data2.default.CTAText + '\n                    </span>\n                </a>\n            </div>\n        ';
            (0, _dom.removeChildren)(this.mainOptions);
            (0, _dom.removeChildren)(this.mainActions);

            resultContent.innerHTML = '<div class="' + _bem2.default.set(CSS.main, 'resultPoints') + '">' + data.message + '</div>\n            <div class="' + _bem2.default.set(CSS.main, 'title') + '">' + data.title + '</div>';
            result.appendChild(resultContent);
            resultContent.appendChild(resultActions);
            (0, _dom.prepend)(this.content, result);

            Share.make(resultActions, {
                url: CONFIG.share.url + '/' + this.userPoints + '/' + secondsWasted,
                twitter: CONFIG.share.twitter
            });

            restartButton.innerHTML = 'Пройти ещё раз' + _svg2.default.restart;
            resultActions.appendChild(restartButton);

            if ((0, _check.isMobile)()) (0, _helper.scrollToElement)(this.container);

            Analytics.sendEvent('Result screen', 'Hit');
            Analytics.sendEvent('Result ' + this.userPoints + ' screen', 'Hit');
        }

        /**
        * Format number to string like HH:MM:SS
        * @param {number} time - timer count in 0.1s
        * @return {string}
        */

    }, {
        key: 'formatTime',
        value: function formatTime(time) {
            var decileSec = parseInt(time, 10); // don't forget the second param

            var sec = decileSec / 10;
            var minLeft = sec / 60;
            var fullMin = Math.floor(minLeft);
            var secLeft = (decileSec - fullMin) % 600 / 10;
            var fullSecLeft = Math.floor(secLeft);
            var decileSecLeft = parseInt(String(secLeft).split('.')[1], 10) * 6;

            if (isNaN(decileSecLeft)) {
                decileSecLeft = 0;
            }

            fullMin = fullMin < 10 ? '0' + fullMin : fullMin;
            fullSecLeft = fullSecLeft < 10 ? '0' + fullSecLeft : fullSecLeft;
            decileSecLeft = decileSecLeft < 10 ? '0' + decileSecLeft : decileSecLeft;

            return fullMin + ':' + fullSecLeft + ':' + decileSecLeft;
        }
    }, {
        key: 'stopTimer',


        /**
         * Stop timer if it is running
         * @param {boolean} clear - need to clear value
         */
        value: function stopTimer() {
            var clear = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

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

    }, {
        key: 'restartTimer',
        value: function restartTimer(clear) {
            var _this7 = this;

            this.stopTimer(clear);

            this.timer = window.setInterval(function () {
                _this7.timerValue++;
            }, 100);
        }
    }, {
        key: 'updateMode',
        value: function updateMode(name) {
            this.mode = name;
            this.container.dataset.mode = this.mode;
        }
    }, {
        key: 'restart',
        value: function restart() {
            this.setDefaultValues();
            this.updateMode('progress');

            (0, _dom.removeChildren)(this.content);
            this.content.appendChild(this.timerWrapper);
            this.content.appendChild(this.mainText);
            this.content.appendChild(this.mainOptions);
            this.content.appendChild(this.mainActions);

            this.makeQuestion(0);
            this.restartTimer();

            Analytics.sendEvent('Restart button', 'Click');
        }
    }, {
        key: 'timerValue',
        set: function set(val) {
            this._timerValue += 1;
            this.timerContent.textContent = this.formatTime(this._timerValue);
        },
        get: function get() {
            return this._timerValue;
        }
    }]);

    return Special;
}(_base2.default);

module.exports = Special;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.make = exports.init = undefined;

var _cmttLikely = __webpack_require__(11);

var _cmttLikely2 = _interopRequireDefault(_cmttLikely);

var _dom = __webpack_require__(7);

var _analytics = __webpack_require__(3);

var Analytics = _interopRequireWildcard(_analytics);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CSS = {
    likely: 'likely',
    likelyCustom: 'likely--custom',
    state: {
        hidden: 'l-hidden'
    }
};

var init = exports.init = function init() {
    _cmttLikely2.default.initate();
};

/**
 * Make likely buttons and append to specified element
 * @param {Element} parentContainer
 * @param {Array} socials
 */
var make = exports.make = function make(parentContainer) {
    var set = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var likelyContainer = (0, _dom.makeElement)('div', [CSS.likely, CSS.likelyCustom]),
        socials = ['facebook', 'vkontakte', 'twitter'];

    socials.forEach(function (social) {
        var button = (0, _dom.makeElement)('div', social);

        if (social === 'facebook') button.textContent = 'Поделиться';

        button.addEventListener('click', function () {
            Analytics.sendEvent('Share ' + social);
        });

        likelyContainer.appendChild(button);
    });

    parentContainer.appendChild(likelyContainer);

    if (set.url) likelyContainer.dataset.url = set.url;
    if (set.twitter) likelyContainer.dataset.twitter = set.twitter;

    init();
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// 'use strict';

var Likely = __webpack_require__(12),
    config = __webpack_require__(0),
    utils = __webpack_require__(2),
    dom = __webpack_require__(1);

/**
 * @param {Node} node
 * @param {Object} options
 */
var likely = function (node, options) {
    options = options || {};

    var widget = node[config.name];

    if (widget) {
        widget.update(options);
    }
    else {
        node[config.name] = new Likely(node, utils.merge(
            {}, likely.defaults,
            options, utils.bools(node)
        ));
    }

    return widget;
};

/**
 * Initiate Likely buttons on load
 */
likely.initiate = likely.initate = function () {
    var widgets = dom.findAll('.' + config.name);

    utils.toArray(widgets).forEach(likely);
};

/**
 * Defaults options for likely
 */
likely.defaults = {
    counters: true,
    timeout:  1e3,
    zeroes:   false,
    title:    document.title,
    wait:     0.5e3,
    url:      window.location.href.replace(window.location.hash, '')
};

module.exports = likely;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var Button = __webpack_require__(13);

var services = __webpack_require__(5),
    config   = __webpack_require__(0),
    utils = __webpack_require__(2),
    dom = __webpack_require__(1),
    storage = __webpack_require__(6);

/**
 * Main widget view
 *
 * @param {Node} container
 * @param {Object} options
 */
function Likely(container, options) {
    console.log(container.dataset.smart);

    this.isSmartOrder = container.dataset.smart !== undefined ? true : false;
    this.container = container;
    this.options   = options;

    this.countersLeft = 0;
    this.buttons      = [];
    this.number       = 0;

    this.init();
}

Likely.prototype = {

    /**
     * Change buttons order, if previous clicks were saved
     * @param {Array} children
     */
    reorder: function (children) {
        var savedServices = storage.getItem(config.storageKey);

        if (savedServices) {
            savedServices.reverse();

            savedServices.forEach(function (service) {

                var button = dom.find('.' + service);

                if (button) {
                    button.parentNode.insertBefore(button, button.parentNode.firstChild);
                }

            });
        }
    },

    /**
     * Initiate the social buttons widget
     */
    init: function () {

        var buttons = utils.toArray(this.container.children);

        if (dom.isMobile() && this.isSmartOrder) {
            this.reorder(buttons);
        }

        buttons.forEach(this.addButton.bind(this));

        if (this.options.counters) {
            this.timer   = setTimeout(this.appear.bind(this), this.options.wait);
            this.timeout = setTimeout(this.ready.bind(this),  this.options.timeout);
        }
        else {
            this.appear();
        }

        utils.flexboxSupport(this.container, config.name);
    },

    /**
     * Add a button
     *
     * @param {Node} node
     */
    addButton: function (node) {
        var button = new Button(node, this, this.options);

        this.buttons.push(button);

        if (button.options.counterUrl) {
            this.countersLeft++;
        }
    },

    /**
     * Update the timer with URL
     *
     * @param {Object} options
     */
    update: function (options) {
        if (
            options.forceUpdate ||
            options.url !== this.options.url
        ) {
            this.countersLeft = this.buttons.length;
            this.number = 0;

            this.buttons.forEach(function (button) {
                button.update(options);
            });
        }
    },

    /**
     * Update counter
     *
     * @param {String} service
     * @param {Number} counter
     */
    updateCounter: function (service, counter) {
        if (counter) {
            this.number += counter;
        }

        this.countersLeft--;

        if (this.countersLeft === 0) {
            this.appear();
            this.ready();
        }
    },

    /**
     * Show the buttons with smooth animation
     */
    appear: function () {
        this.container.classList.add(config.name + '--visible');
    },

    /**
     * Get. Set. Ready.
     */
    ready: function () {
        if (this.timeout) {
            clearTimeout(this.timeout);

            this.container.classList.add(config.name + '--ready');
        }
    }
};

module.exports = Likely;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var services = __webpack_require__(5),
    config = __webpack_require__(0),
    fetch = __webpack_require__(27),
    utils = __webpack_require__(2),
    dom = __webpack_require__(1),
    storage = __webpack_require__(6);

var htmlSpan = '<span class="{className}">{content}</span>';

/**
 * Separate social link widget
 *
 * @param {Node} widget
 * @param {Likely} likely
 * @param {Object} options
 */
function LikelyButton (widget, likely, options) {
    this.widget  = widget;
    this.likely  = likely;
    this.options = utils.merge(options);

    this.init();
}

LikelyButton.prototype = {
    /**
     * Initiate the button
     */
    init: function () {
        this.detectService();
        this.detectParams();

        if (this.service) {
            this.initHtml();

            setTimeout(this.initCounter.bind(this), 0);
        }
    },

    /**
     * Update the counter
     *
     * @param {Object} options
     */
    update: function (options) {
        var className = '.' + config.prefix + 'counter';
            counters  = dom.findAll(className, this.widget);

        utils.extend(this.options, utils.merge({forceUpdate: false}, options));
        utils.toArray(counters).forEach(function (node) {
            node.parentNode.removeChild(node);
        });

        this.initCounter();
    },

    /**
     * Get the config.name of service and its options
     */
    detectService: function () {
        var widget  = this.widget,
            service = utils.getDataset(widget).service;

        if (!service) {
            var classes = widget.className.split(' ');

            for (var i = 0; i < classes.length; i++) {
                if (classes[i] in services) break;
            }

            service = classes[i];
        }

        if (service) {
            this.service = service;

            utils.extend(this.options, services[service]);
        }
    },

    /**
     * Merge params from data-* attributes into options hash map
     */
    detectParams: function () {
        var options = this.options,
            data    = utils.getDataset(this.widget);

        if (data.counter) {
            var counter = parseInt(data.counter, 10);

            if (isNaN(counter)) {
                options.counterUrl = data.counter;
            }
            else {
                options.counterNumber = counter;
            }
        }

        options.title = data.title || options.title;
        options.url   = data.url   || options.url;
    },

    /**
     * Inititate button's HTML
     */
    initHtml: function () {
        var options = this.options,
            widget  = this.widget,
            text    = widget.innerHTML;

        widget.addEventListener('click', this.click.bind(this));
        widget.classList.remove(this.service);
        widget.className += (' ' + this.className('widget'));

        var button = utils.template(htmlSpan, {
            className: this.className('button'),
            content:   text
        });

        var icon = utils.template(htmlSpan, {
            className: this.className('icon'),
            content:   dom.wrapSVG(options.svgi)
        });

        widget.innerHTML = icon + button;
    },

    /**
     * Fetch or get cached counter value and update the counter
     */
    initCounter: function () {
        var options = this.options;

        if (options.counters && options.counterNumber) {
            this.updateCounter(options.counterNumber);
        }
        else if (options.counterUrl) {
            fetch(
                this.service,
                options.url,
                options
            )(this.updateCounter.bind(this));
        }
    },

    /**
     * @param {String} className
     * @return {String}
     */
    className: function (className) {
        var fullClass = config.prefix + className;

        return fullClass + ' ' + fullClass + '--' + this.service;
    },

    /**
     * Update counter
     *
     * @param {String} e
     */
    updateCounter: function (counter) {
        counter = parseInt(counter, 10) || 0;

        var counterElement = dom.find('.' + config.name + '__counter', this.widget);

        if (counterElement) {
            counterElement.parentNode.removeChild(counterElement);
        }

        var options = {
            className: this.className('counter'),
            content:   counter
        };

        if (!counter && !this.options.zeroes) {
            options.className += ' ' + config.prefix + 'counter--empty';
            options.content = '';
        }

        this.widget.appendChild(
            dom.createNode(utils.template(htmlSpan, options))
        );

        this.likely.updateCounter(this.service, counter);
    },

    /**
     * Click event listener
     */
    click: function () {
        var options = this.options;

        if ( this.service == 'more' ){

            this.widget.classList.toggle('active');
            this.widget.parentElement.classList.toggle(this.options.className);

        } else if (this.service == 'email'){

            var url = utils.makeUrl(options.popupUrl, {
                url: options.url,
                title: options.title
            });

            window.location = url;

            this.rememberClicked(this.service);

        } else {

            if (options.click.call(this)) {

                var twitterText = this.likely.container.dataset.twitter,
                    twitterUrl = this.likely.container.dataset.twitterUrl;

                var window_url = utils.makeUrl(options.popupUrl, {
                    url:   (this.service === 'twitter' && twitterUrl !== '' && twitterUrl !== undefined) ? twitterUrl : options.url,
                    title: (this.service === 'twitter' && twitterText !== '' && twitterText !== undefined) ? twitterText : options.title
                });

                dom.openPopup(
                    this.addAdditionalParamsToUrl(window_url),
                    config.prefix + this.service,
                    options.popupWidth,
                    options.popupHeight
                );

                this.rememberClicked(this.service);
            }

        }

        return false;
    },

    /**
     * Append service data to URL
     *
     * @param {String} url
     */
    addAdditionalParamsToUrl: function (url) {
        var parameters = utils.query(utils.merge(
                this.widget.dataset,
                this.options.data
            )),
            delimeter = url.indexOf('?') === -1 ? '?' : '&';

        return (parameters === '') ? url : (url + delimeter + parameters);
    },

    /**
     * Remember last clicked button and save to storage
     */
    rememberClicked: function (service) {
        var services = storage.getItem(config.storageKey) || [],
            serviceIndex = services.indexOf(service);

        if (serviceIndex !== -1) {
            services.splice(serviceIndex, 1);
        }

        services.splice(0, 0, service);

        storage.setItem(config.storageKey, services);
    }
};

module.exports = LikelyButton;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var dom = __webpack_require__(1);

/**
 * @param {String} url
 * @param {Function} factory
 */
var counter = function (url, factory) {
    var self = this;
    
    dom.getJSON(url, function (count) {
        try {
            if (typeof self.convertNumber === 'function') {
                count = self.convertNumber(count);
            } 
            
            factory(count);
        } 
        catch (e) {}
    });
};

/**
 * @param {Object} options
 */
module.exports = function (options) {
    options.counter = options.counter || counter;
    options.click   = options.click   || function () { return true; };
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = {"facebook":"5.9 16h3.3V8h2.2l.3-2.8H9.2V3.8c0-.7.1-1.1 1.1-1.1h1.4V0H9.5C6.9 0 5.9 1.3 5.9 3.6v1.7H4.3V8H6v8","twitter":"15.96 3.42c-.04.153-.144.31-.237.414l-.118.058v.118l-.59.532-.237.295c-.05.036-.398.21-.413.237V6.49h-.06v.473h-.058v.294h-.058v.296h-.06v.235h-.06v.237h-.058c-.1.355-.197.71-.295 1.064h-.06v.116h-.06c-.02.1-.04.197-.058.296h-.06c-.04.118-.08.237-.118.355h-.06c-.038.118-.078.236-.117.353l-.118.06-.06.235-.117.06v.116l-.118.06v.12h-.06c-.02.057-.038.117-.058.175l-.118.06v.117c-.06.04-.118.08-.177.118v.118l-.237.177v.118l-.59.53-.532.592h-.117c-.06.078-.118.156-.177.236l-.177.06-.06.117h-.118l-.06.118-.176.06v.058h-.118l-.06.118-.353.12-.06.117c-.078.02-.156.04-.235.058v.06c-.118.038-.236.078-.354.118v.058H8.76v.06h-.12v.06h-.176v.058h-.118v.06H8.17v.058H7.99v.06l-.413.058v.06h-.237c-.667.22-1.455.293-2.36.293h-.886v-.058h-.53v-.06H3.27v-.06h-.295v-.06H2.68v-.057h-.177v-.06h-.236v-.058H2.09v-.06h-.177v-.058h-.177v-.06H1.56v-.058h-.12v-.06l-.294-.06v-.057c-.118-.04-.236-.08-.355-.118v-.06H.674v-.058H.555v-.06H.437v-.058H.32l-.06-.12H.142v-.058c-.13-.08-.083.026-.177-.118H1.56v-.06c.294-.04.59-.077.884-.117v-.06h.177v-.058h.237v-.06h.118v-.06h.177v-.057h.118v-.06h.177v-.058l.236-.06v-.058l.236-.06c.02-.038.04-.078.058-.117l.237-.06c.02-.04.04-.077.058-.117h.118l.06-.118h.118c.036-.025.047-.078.118-.118V12.1c-1.02-.08-1.84-.54-2.303-1.183-.08-.058-.157-.118-.236-.176v-.117l-.118-.06v-.117c-.115-.202-.268-.355-.296-.65.453.004.987.008 1.354-.06v-.06c-.254-.008-.47-.08-.65-.175v-.058H2.32v-.06c-.08-.02-.157-.04-.236-.058l-.06-.118h-.117l-.118-.178h-.12c-.077-.098-.156-.196-.235-.294l-.118-.06v-.117l-.177-.12c-.35-.502-.6-1.15-.59-2.006h.06c.204.234.948.377 1.357.415v-.06c-.257-.118-.676-.54-.827-.768V5.9l-.118-.06c-.04-.117-.08-.236-.118-.354h-.06v-.118H.787c-.04-.196-.08-.394-.118-.59-.06-.19-.206-.697-.118-1.005h.06V3.36h.058v-.177h.06v-.177h.057V2.83h.06c.04-.118.078-.236.117-.355h.118v.06c.12.097.237.196.355.295v.118l.118.058c.08.098.157.197.236.295l.176.06.354.413h.118l.177.236h.118l.06.117h.117c.04.06.08.118.118.177h.118l.06.118.235.06.06.117.356.12.06.117.53.176v.06h.118v.058l.236.06v.06c.118.02.236.04.355.058v.06h.177v.058h.177v.06h.176v.058h.236v.06l.472.057v.06l1.417.18v-.237c-.1-.112-.058-.442-.057-.65 0-.573.15-.99.354-1.358v-.117l.118-.06.06-.235.176-.118v-.118c.14-.118.276-.236.414-.355l.06-.117h.117l.12-.177.235-.06.06-.117h.117v-.058H9.7v-.058h.177v-.06h.177v-.058h.177v-.06h.296v-.058h1.063v.058h.294v.06h.177v.058h.178v.06h.177v.058h.118v.06h.118l.06.117c.08.018.158.038.236.058.04.06.08.118.118.177h.118l.06.117c.142.133.193.163.472.178.136-.12.283-.05.472-.118v-.06h.177v-.058h.177v-.06l.236-.058v-.06h.177l.59-.352v.176h-.058l-.06.295h-.058v.117h-.06v.118l-.117.06v.118l-.177.118v.117l-.118.06-.354.412h-.117l-.177.236h.06c.13-.112.402-.053.59-.117l1.063-.353","vkontakte":"7.8 12.4h.9s.3 0 .4-.2c.1-.1.1-.4.1-.4s0-1.3.6-1.4c.6-.2 1.3 1.2 2.1 1.7.6.4 1 .3 1 .3H15s1.1-.1.6-.9c0-.1-.3-.6-1.6-1.8-1.3-1.2-1.1-1 .4-3.1 1-1.3 1.3-2.1 1.2-2.4.1-.3-.6-.3-.6-.3h-2.4s-.2 0-.3.1c-.1.1-.2.3-.2.3s-.4 1-.9 1.8c-1 1.8-1.5 1.9-1.6 1.8-.4-.3-.3-1-.3-1.6 0-1.7.3-2.4-.5-2.6-.3-.1-.4-.2-1.1-.2-.8 0-1.5 0-2 .2-.2.2-.4.5-.3.5.2 0 .5.1.7.3.2.3.2 1.1.2 1.1s.1 2-.3 2.3c-.3.1-.7-.2-1.7-1.8-.5-.8-.8-1.8-.8-1.8l-.2-.2-.4-.2H.7s-.3 0-.5.2c-.1.1 0 .4 0 .4S2 8.6 4 10.7c1.8 1.8 3.8 1.7 3.8 1.7","gplus":"8,6.5v3h4.291c-0.526,2.01-2.093,3.476-4.315,3.476C5.228,12.976,3,10.748,3,8c0-2.748,2.228-4.976,4.976-4.976c1.442,0,2.606,0.623,3.397,1.603L13.52,2.48C12.192,0.955,10.276,0,8,0C3.582,0,0,3.582,0,8s3.582,8,8,8s7.5-3.582,7.5-8V6.5H8","odnoklassniki":"8 2.6c.9 0 1.7.7 1.7 1.7C9.7 5.2 9 6 8 6c-.9 0-1.7-.7-1.7-1.7S7.1 2.6 8 2.6zm0 5.7c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm1.6 3.2c.8-.2 1.6-.5 2.3-1 .5-.3.7-1.1.4-1.6-.3-.6-1.1-.7-1.6-.4-1.6 1-3.8 1-5.4 0-.6-.3-1.3-.1-1.6.4-.4.6-.2 1.3.3 1.7.7.5 1.5.8 2.3 1l-2.2 2.2c-.5.5-.5 1.2 0 1.7.2.2.5.3.8.3.3 0 .6-.1.8-.3L8 13.2l2.2 2.2c.5.5 1.2.5 1.7 0s.5-1.2 0-1.7l-2.3-2.2","pocket":"12.533 6.864L8.77 10.4c-.213.2-.486.3-.76.3-.273 0-.547-.1-.76-.3L3.488 6.865c-.437-.41-.45-1.09-.032-1.52.42-.428 1.114-.443 1.55-.032l3.006 2.823 3.004-2.823c.438-.41 1.132-.396 1.55.032.42.43.406 1.11-.03 1.52zm3.388-4.928c-.207-.56-.755-.936-1.363-.936H1.45C.854 1 .31 1.368.096 1.917.032 2.08 0 2.25 0 2.422v4.73l.055.94c.232 2.14 1.366 4.01 3.12 5.314.03.024.063.047.094.07l.02.013c.94.673 1.992 1.13 3.128 1.353.524.104 1.06.157 1.592.157.492 0 .986-.045 1.472-.133.058-.01.116-.022.175-.034.016-.003.033-.01.05-.018 1.088-.233 2.098-.677 3.003-1.326l.02-.015c.032-.022.064-.045.096-.07 1.753-1.303 2.887-3.173 3.12-5.312l.054-.94v-4.73c0-.165-.02-.327-.08-.487","telegram":"12.4 4.2L6.6 9.6c-.2.2-.3.4-.4.7L6 11.8c0 .2-.3.2-.3 0l-.8-2.6c-.1-.4.1-.7.3-.8l7-4.3c.2-.2.4 0 .2.1zm2.9-3L.5 6.9c-.4.1-.4.7 0 .8L4.1 9l1.4 4.5c.1.3.4.4.7.2l2-1.6c.2-.2.5-.2.7 0l3.6 2.6c.3.2.6 0 .7-.3l2.6-12.8c.1-.2-.2-.5-.5-.4","whatsapp":"15.8 7.8c0 4.2-3.4 7.6-7.6 7.6-1.3 0-2.6-.3-3.7-.9L.3 15.8l1.4-4.1C1 10.6.6 9.2.6 7.8.6 3.6 4 .2 8.2.2c4.2 0 7.6 3.4 7.6 7.6M8.1 1.4c-3.5 0-6.4 2.9-6.4 6.4 0 1.4.5 2.7 1.2 3.7l-.8 2.4 2.5-.8c1 .7 2.2 1.1 3.5 1.1 3.5 0 6.4-2.9 6.4-6.4.1-3.5-2.8-6.4-6.4-6.4M12 9.5c0-.1-.2-.1-.4-.2s-1.1-.5-1.3-.6c-.2-.1-.3-.1-.4.1-.1.2-.4.6-.6.7-.1.1-.2.1-.4 0-.1 0-.8-.2-1.5-.8-.6-.5-.9-1.1-1-1.3-.1-.2 0-.3.1-.4l.3-.3c.1-.1.1-.2.2-.3 0-.2 0-.3-.1-.4 0-.1-.4-1-.6-1.4-.1-.3-.3-.2-.4-.2h-.4c-.1 0-.3 0-.5.2-.1.2-.6.6-.6 1.5s.7 1.8.8 1.9c.1.1 1.3 2.1 3.2 2.8 1.9.7 1.9.5 2.2.5.3 0 1.1-.4 1.3-.9.1-.4.1-.8.1-.9","viber":"13.7 6.7c0 .3.1.7-.3.8-.6.1-.5-.4-.5-.8-.4-2.3-1.2-3.2-3.5-3.7-.4-.1-.9 0-.8-.5.1-.5.5-.4.9-.3 2.3.3 4.2 2.3 4.2 4.5zM8.8 1.2c3.7.6 5.5 2.4 5.9 6.1 0 .3-.1.9.4.9s.4-.5.4-.9c0-3.6-3.1-6.8-6.7-7-.2.1-.8-.1-.8.5 0 .4.4.3.8.4zm5.7 10.2c-.5-.4-1-.7-1.5-1.1-1-.7-1.9-.7-2.6.4-.4.6-1 .6-1.6.4-1.7-.8-2.9-1.9-3.7-3.6-.3-.7-.3-1.4.5-1.9.4-.3.8-.6.8-1.2 0-.8-2-3.5-2.7-3.7-.3-.1-.6-.1-1 0C.9 1.2.2 2.7.9 4.4c2.1 5.2 5.8 8.8 11 11 .3.1.6.2.8.2 1.2 0 2.5-1.1 2.9-2.2.3-1-.5-1.5-1.1-2zM9.7 4c-.2 0-.5 0-.6.3-.1.4.2.5.5.5.9.2 1.4.7 1.5 1.7 0 .3.2.5.4.4.3 0 .4-.3.4-.6 0-1.1-1.2-2.3-2.2-2.3","email":"12.7 1c1 .5 1.8 1.2 2.3 2.2.5.9.8 1.9.8 3.1 0 .9-.1 1.8-.5 2.7-.3.9-.8 1.6-1.4 2.2-.6.6-1.4.9-2.3.9-.6 0-1.1-.2-1.5-.5-.4-.3-.6-.7-.7-1.2-.6 1.1-1.5 1.6-2.5 1.6-.8 0-1.5-.3-1.9-.8-.5-.6-.7-1.3-.7-2.2 0-.8.1-1.6.4-2.5S5.5 5 6.1 4.4c.7-.6 1.5-.8 2.6-.8.5 0 1 .1 1.4.2.5.1.9.3 1.3.6l-.7 4.9v.3c0 .2 0 .4.1.5.1.1.3.2.5.2.4 0 .8-.2 1.1-.7.3-.4.5-1 .7-1.6.1-.7.2-1.3.2-1.9 0-1.3-.4-2.3-1.1-3-.8-.7-1.9-1-3.4-1s-2.7.4-3.7 1.1c-.9.7-1.6 1.6-2 2.6S2.6 7.9 2.6 9c0 .9.2 1.8.6 2.5.4.7 1 1.3 1.7 1.7.7.4 1.7.6 2.7.6.5 0 1-.1 1.6-.2.6-.1 1.1-.3 1.5-.4l.4 1.9c-.6.2-1.2.4-1.8.5-.7.1-1.3.2-1.9.2-1.4 0-2.7-.3-3.8-.9s-1.9-1.4-2.5-2.4S.2 10.3.2 9c0-1.3.3-2.7 1-4 .6-1.4 1.6-2.5 3-3.4C5.5.7 7.2.2 9.2.2c1.3 0 2.5.3 3.5.8zm-4 8.4l.6-3.9c-.3-.1-.5-.2-.7-.2-.7 0-1.2.4-1.5 1.2-.3.8-.5 1.7-.5 2.6 0 .8.3 1.2.8 1.2s.9-.3 1.3-.9","more":"14.725 6.667H9.333V1.275C9.333.57 8.738 0 8 0S6.667.57 6.667 1.275v5.392H1.275C.57 6.667 0 7.262 0 8s.57 1.334 1.275 1.334h5.392v5.393C6.667 15.43 7.262 16 8 16s1.333-.57 1.333-1.273V9.334h5.392C15.43 9.334 16 8.738 16 8s-.57-1.333-1.275-1.333"}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Odnoklassniki service provider
 */

var config = __webpack_require__(0),
    utils  = __webpack_require__(2),
    dom    = __webpack_require__(1);

var odnoklassniki = {
    counterUrl: config.secure 
        ? undefined 
        : 'http://connect.ok.ru/dk?st.cmd=extLike&ref={url}&uid={index}',
    counter: function (url, promise) {
        this.promises.push(promise);
        
        dom.getScript(utils.makeUrl(url, {
            index: this.promises.length - 1
        }));
    },
    promises: [],
    popupUrl: 'http://connect.ok.ru/dk?st.cmd=WidgetSharePreview&service=odnoklassniki&st.shareUrl={url}',
    popupWidth: 640,
    popupHeight: 400
};

utils.set(window, 'ODKL.updateCount', function (index, counter) {
    odnoklassniki.promises[index](counter);
});

module.exports = odnoklassniki;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Vkontakte service provider
 */

var config = __webpack_require__(0),
    utils  = __webpack_require__(2),
    dom    = __webpack_require__(1);

var vkontakte = {
    counterUrl: 'https://vk.com/share.php?act=count&url={url}&index={index}',
    counter: function (url, promise) {
        this.promises.push(promise);
        
        dom.getScript(utils.makeUrl(url, {
            index: this.promises.length - 1
        }));
    },
    promises: [],
    popupUrl: config.protocol + '//vk.com/share.php?url={url}&title={title}',
    popupWidth: 550,
    popupHeight: 330
};

utils.set(window, 'VK.Share.count', function (index, count) {
    vkontakte.promises[index](count);
});

module.exports = vkontakte;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

/**
 * Facebook service provider
 */

module.exports = {
    counterUrl: 'https://graph.facebook.com/?fields=share,og_object{likes.limit(0).summary(true),comments.limit(0).summary(true)}&id={url}&callback=?',
    convertNumber: function (counter) {
        return counter.share.share_count;
    },
    popupUrl: 'https://www.facebook.com/sharer/sharer.php?u={url}',
    popupWidth: 600,
    popupHeight: 500
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Twitter service provider
 */

var config = __webpack_require__(0);

var twitter = {
    popupUrl: config.protocol + '//twitter.com/intent/tweet?url={url}&text={title}',
    popupWidth: 600,
    popupHeight: 450,
    click: function () {
        if (!/[\.\?:\-–—]\s*$/.test(this.options.title)) {
            this.options.title += ':';
        }

        return true;
    }
};

module.exports = twitter;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Google+ service provider
 */

var config = __webpack_require__(0),
    utils  = __webpack_require__(2),
    dom    = __webpack_require__(1);

var gplus = {
    gid: 0,
    promises: {},
    popupUrl: 'https://plus.google.com/share?url={url}',
    popupWidth: 700,
    popupHeight: 500
};

module.exports = gplus;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Pocket service provider
 */

var config = __webpack_require__(0);

var pocket = {
    popupUrl: config.protocol + '//getpocket.com/save?url={url}&format=json&callback=?',
    popupWidth: 600,
    popupHeight: 300
};

module.exports = pocket;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

/**
 * Telegram service provider
 */

module.exports = {
    popupUrl: 'tg://msg?text={title}%0A{url}',
    popupWidth: 600,
    popupHeight: 450
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

/**
 * WhatsApp service provider
 */

module.exports = {
    popupUrl: 'whatsapp://send?text={title}%0A{url}',
    popupWidth: 600,
    popupHeight: 450
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

/**
 * Viber service provider
 */

module.exports = {
    popupUrl: 'viber://forward?text={title}%0A{url}',
    popupWidth: 600,
    popupHeight: 450
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * E-mail service provider
 */

var config = __webpack_require__(0);

var email = {
    popupUrl: 'mailto:?subject={title}&body={url}',
    popupWidth: 0,
    popupHeight: 0
};

module.exports = email;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var config = __webpack_require__(0);

module.exports = {
	parent: config.name,
    className: config.name + '--expanded'
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var services = __webpack_require__(5),
    Factory  = __webpack_require__(28),
    utils    = __webpack_require__(2),
    dom      = __webpack_require__(1);

var factories = {};

/**
 * Fetch data
 *
 * @param {String} service
 * @param {String} url
 * @param {Object} options
 * @return {Promise}
 */
module.exports = function (service, url, options) {
    if (!factories[service]) {
        factories[service] = {};
    }

    var counters = factories[service],
        counter  = counters[url];

    if (!options.forceUpdate && counter) {
        return counter;
    }

    counter = Factory();

    var href = utils.makeUrl(options.counterUrl, {
        url: url
    });

    services[service].counter(href, counter, url);

    counters[url] = counter;

    return counters[url];
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

/**
 * Factory function
 * 
 * This function returns function with following API:
 * 
 * - if passed argument is callback, then this callback would be callled
 *   if the value was changed
 * - if passed argument is anything but undefined or function, then this 
 *   function behaves like setter
 * - if argument isn't provided, then return value stored in closure
 * 
 * @param {Object} value
 * @return {Function}
 */
module.exports = function (value) {
    var listeners = [];
    
    return function (argument) {
        var type = typeof argument;
        
        if (type == 'undefined') {
            return value;
        }
        else if (type == 'function') {
            listeners.push(argument);
        }
        else {
            value = argument;
            
            listeners.forEach(function (listener) {
                listener(argument);
            });
        }
    };
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _analytics = __webpack_require__(3);

var Analytics = _interopRequireWildcard(_analytics);

var _preloader = __webpack_require__(30);

var _preloader2 = _interopRequireDefault(_preloader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Base special constructor with common methods
 */
var BaseSpecial = function () {
    function BaseSpecial() {
        _classCallCheck(this, BaseSpecial);

        this.params = {
            container: 'body',
            analyticsCategory: null,
            sendPageview: false,
            listenedEvents: ['click'],
            listenedKeys: []
        };

        this.keyCodes = {
            enter: 13
        };

        /**
         * Construct image preloader module
         * @type {Preloader}
         */
        this.preloader = new _preloader2.default();
    }

    /**
     * Save custom params
     * @param {Object} params - params object with custom values
     */


    _createClass(BaseSpecial, [{
        key: 'saveParams',
        value: function saveParams(params) {
            _extends(this.params, params);
            this.container = this.params.container;
            this.addEventListeners();
        }

        /**
         * Load css file
         * @param {String} path
         */

    }, {
        key: 'loadStyles',
        value: function loadStyles(path) {
            return new Promise(function (resolve, reject) {
                var link = document.createElement('link');

                link.rel = 'stylesheet';
                link.href = path;

                link.onload = function () {
                    return resolve();
                };

                document.body.appendChild(link);
            });
        }

        /**
         * Add event listeners to document
         */

    }, {
        key: 'addEventListeners',
        value: function addEventListeners() {
            var _this = this;

            this.params.listenedEvents.forEach(function (eventName) {
                _this.container.addEventListener(eventName, function (event) {
                    return _this.defaultEventHandler(event, eventName);
                });
            });
        }

        /**
         * Default events handler
         * @param {Object} event
         * @param {String} eventName
         */

    }, {
        key: 'defaultEventHandler',
        value: function defaultEventHandler(event, eventName) {
            /** Keydown event */
            if (eventName === 'keydown' && this.params.listenedKeys.length > 0) {
                this.params.listenedKeys.forEach(function (key) {
                    if (event.keyCode === key.code) {
                        key.action(event);
                    }
                });

                /** All other events, attached to elements */
            } else {
                var el = event.target;

                /**
                * Bubble click
                */
                while (el) {
                    var action = el.dataset ? el.dataset[eventName] : null;

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
    }]);

    return BaseSpecial;
}();

exports.default = BaseSpecial;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Image Preloader module
 *
 * Loads Image and stores in own cache
 *
 * @usage preloader.load(url)
 * @usage preloader.load([url1, url2])
 * @usage preloader.get(url) -> Image
 *
 */

var Preloader = function () {
    function Preloader() {
        _classCallCheck(this, Preloader);

        /**
         * Internal cache
         * @type {{src: Image}}
         */
        this.images = {};
    }

    /**
     * Loads Image
     * @param {string|string[]} urls - one or several URL to prelaod
     */


    _createClass(Preloader, [{
        key: 'load',
        value: function load(urls) {
            var _this = this;

            console.log('Preloader: start to load', urls);
            if (Array.isArray(urls)) {
                urls.forEach(function (url) {
                    _this.loadOne(url);
                });
            } else {
                this.loadOne(urls);
            }
        }

        /**
         * Loads single image
         * @param {string} url
         */

    }, {
        key: 'loadOne',
        value: function loadOne(url) {
            if (this.images[url]) {
                console.log('Preloader: already loaded %o', url);
                return;
            }

            var image = new Image();

            image.src = url;

            console.time(url);

            image.onload = function () {
                console.timeEnd(url);
            };

            image.onerror = function () {
                console.timeEnd(url);
                console.warn('image [%o] was not loaded', url);
            };

            this.images[url] = image;
        }

        /**
         * Return loaded image
         */

    }, {
        key: 'get',
        value: function get(url) {
            if (!this.images[url]) {
                this.loadOne(url);
            }

            return this.images[url];
        }
    }]);

    return Preloader;
}();

exports.default = Preloader;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    title: 'Кто быстрее',
    task: 'Из этой пары быстрее...',
    intro: 'Скоростной тест на скорость.',
    outro: '<p>\u0421\u0430\u043C\u044B\u0439 \u0431\u044B\u0441\u0442\u0440\u044B\u0439 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u2014 \u0432&nbsp;\u041C\u0435\u0433\u0430\u0424\u043E\u043D\u0435. \u0414\u043E\u043A\u0430\u0437\u0430\u043D\u043E \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F\u043C\u0438 \u043C\u0438\u043B\u043B\u0438\u043E\u043D\u043E\u0432 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u0432&nbsp;Speedtest.</p> ',
    logoUrl: 'http://moscow.megafon.ru/tariffs/vklyuchaysya/?utm_source=vc&utm_campaign=fed_flight_www-b2c_vc-special-project-jul-2018_rf&utm_medium=ag-media_media__logo_cpm__&utm_content=&utm_term=',
    promoUrl: 'http://moscow.megafon.ru/tariffs/vklyuchaysya/?utm_source=vc&utm_campaign=fed_flight_www-b2c_vc-special-project-jul-2018_rf&utm_medium=ag-media_media__button_cpm__&utm_content=&utm_term=',
    CTAText: 'Подключить',
    questions: [{
        text: '',
        options: [{
            id: 0,
            text: 'Сокол сапсан',
            message: '322 км/ч',
            img: '1-0.png',
            imgCorrect: '1-0-correct.png',
            imgWrong: '1-0-wrong.png',
            imgDisabled: '1-0-disabled.png',
            isCorrect: true
        }, {
            id: 1,
            text: 'Поезд «Сапсан»',
            message: '250 км/ч',
            img: '1-1.png',
            imgCorrect: '1-1-correct.png',
            imgWrong: '1-1-wrong.png',
            imgDisabled: '1-1-disabled.png'
        }]
    }, {
        text: '',
        options: [{
            id: 0,
            text: 'Лионель Месси',
            message: '35,8 км/ч',
            img: '2-0.png',
            imgCorrect: '2-0-correct.png',
            imgWrong: '2-0-wrong.png',
            imgDisabled: '2-0-disabled.png'
        }, {
            id: 1,
            text: 'Криштиану Роналду',
            message: '38,6 км/ч',
            img: '2-1.png',
            imgCorrect: '2-1-correct.png',
            imgWrong: '2-1-wrong.png',
            imgDisabled: '2-1-disabled.png',
            isCorrect: true
        }]
    }, {
        text: '',
        options: [{
            id: 0,
            text: 'Самолет F-111',
            message: '3060 км/ч',
            img: '3-0.png',
            imgCorrect: '3-0-correct.png',
            imgWrong: '3-0-wrong.png',
            imgDisabled: '3-0-disabled.png'
        }, {
            id: 1,
            text: 'Самолет МиГ-31',
            message: '3464 км/ч',
            img: '3-1.png',
            imgCorrect: '3-1-correct.png',
            imgWrong: '3-1-wrong.png',
            imgDisabled: '3-1-disabled.png',
            isCorrect: true
        }]
    }, {
        text: '',
        options: [{
            id: 0,
            text: 'Hyperloop',
            message: '1220 км/ч',
            img: '4-0.png',
            imgCorrect: '4-0-correct.png',
            imgWrong: '4-0-wrong.png',
            imgDisabled: '4-0-disabled.png',
            isCorrect: true
        }, {
            id: 1,
            text: 'Airbus A320',
            message: '910 км/ч',
            img: '4-1.png',
            imgCorrect: '4-1-correct.png',
            imgWrong: '4-1-wrong.png',
            imgDisabled: '4-1-disabled.png'
        }]
    }, {
        text: '',
        options: [{
            id: 0,
            text: 'Усейн Болт',
            message: '44,72 км/ч',
            img: '5-0.png',
            imgCorrect: '5-0-correct.png',
            imgWrong: '5-0-wrong.png',
            imgDisabled: '5-0-disabled.png'
        }, {
            id: 1,
            text: 'Заяц-русак',
            message: '80 км/ч',
            img: '5-1.png',
            imgCorrect: '5-1-correct.png',
            imgWrong: '5-1-wrong.png',
            imgDisabled: '5-1-disabled.png',
            isCorrect: true
        }]
    }, {
        text: '',
        options: [{
            id: 0,
            text: 'Гепард',
            message: '115 км/ч',
            img: '6-0.png',
            imgCorrect: '6-0-correct.png',
            imgWrong: '6-0-wrong.png',
            imgDisabled: '6-0-disabled.png'
        }, {
            id: 1,
            text: 'Электрокар Lada Ellada',
            message: '130 км/ч',
            img: '6-1.png',
            imgCorrect: '6-1-correct.png',
            imgWrong: '6-1-wrong.png',
            imgDisabled: '6-1-disabled.png',
            isCorrect: true
        }]
    }, {
        text: '',
        options: [{
            id: 0,
            text: 'Комета Чурюмова-Герасименко',
            message: '55 000 км/ч',
            img: '7-0.png',
            imgCorrect: '7-0-correct.png',
            imgWrong: '7-0-wrong.png',
            imgDisabled: '7-0-disabled.png'
        }, {
            id: 1,
            text: '«Вояджер-1»',
            message: '62 140 км/ч',
            img: '7-1.png',
            imgCorrect: '7-1-correct.png',
            imgWrong: '7-1-wrong.png',
            imgDisabled: '7-1-disabled.png',
            isCorrect: true
        }]
    }, {
        text: '',
        options: [{
            id: 0,
            text: 'Волан',
            message: '300 км/ч',
            img: '8-0.png',
            imgCorrect: '8-0-correct.png',
            imgWrong: '8-0-wrong.png',
            imgDisabled: '8-0-disabled.png',
            isCorrect: true
        }, {
            id: 1,
            text: 'Теннисный мяч',
            message: '251 км/ч',
            img: '8-1.png',
            imgCorrect: '8-1-correct.png',
            imgWrong: '8-1-wrong.png',
            imgDisabled: '8-1-disabled.png'
        }]
    }, {
        text: '',
        options: [{
            id: 0,
            text: 'Нервный импульс',
            message: '450 км/ч',
            img: '9-0.png',
            imgCorrect: '9-0-correct.png',
            imgWrong: '9-0-wrong.png',
            imgDisabled: '9-0-disabled.png'
        }, {
            id: 1,
            text: 'Радиосигнал',
            message: '1 080 000 000 км/ч',
            img: '9-1.png',
            imgCorrect: '9-1-correct.png',
            imgWrong: '9-1-wrong.png',
            imgDisabled: '9-1-disabled.png',
            isCorrect: true
        }]
    }, {
        text: '',
        options: [{
            id: 0,
            text: 'Вишневый родстер Илона&nbsp;Маска в&nbsp;космосе',
            message: '39 600 км/ч',
            img: '10-0.png',
            imgCorrect: '10-0-correct.png',
            imgWrong: '10-0-wrong.png',
            imgDisabled: '10-0-disabled.png',
            isCorrect: true
        }, {
            id: 1,
            text: 'Ракета-носитель «Протон»',
            message: '25 855 км/ч',
            img: '10-1.png',
            imgCorrect: '10-1-correct.png',
            imgWrong: '10-1-wrong.png',
            imgDisabled: '10-1-disabled.png'
        }]
    }, {
        text: '',
        options: [{
            id: 0,
            text: 'Поезд московского метро',
            message: '80 км/ч',
            img: '11-0.png',
            imgCorrect: '11-0-correct.png',
            imgWrong: '11-0-wrong.png',
            imgDisabled: '11-0-disabled.png'
        }, {
            id: 1,
            text: 'Рыба Парусник',
            message: '120 км/ч',
            img: '11-1.png',
            imgCorrect: '11-1-correct.png',
            imgWrong: '11-1-wrong.png',
            imgDisabled: '11-1-disabled.png',
            isCorrect: true
        }]
    }, {
        text: '',
        options: [{
            id: 0,
            text: 'Робот Cheetah',
            message: '45,5 км/ч',
            img: '12-0.png',
            imgCorrect: '12-0-correct.png',
            imgWrong: '12-0-wrong.png',
            imgDisabled: '12-0-disabled.png'
        }, {
            id: 1,
            text: 'Ford Model T',
            message: '72 км/час',
            img: '12-1.png',
            imgCorrect: '12-1-correct.png',
            imgWrong: '12-1-wrong.png',
            imgDisabled: '12-1-disabled.png',
            isCorrect: true
        }]
    }, {
        text: '',
        options: [{
            id: 0,
            text: 'Сварится целая картофелина в&nbsp;воде',
            message: '20 минут',
            img: '13-0.png',
            imgCorrect: '13-0-correct.png',
            imgWrong: '13-0-wrong.png',
            imgDisabled: '13-0-disabled.png',
            isCorrect: true
        }, {
            id: 1,
            text: 'Tesla Model 3 проедет 125&nbsp;км на&nbsp;максимальной скорости',
            message: '30 минут',
            img: '13-1.png',
            imgCorrect: '13-1-correct.png',
            imgWrong: '13-1-wrong.png',
            imgDisabled: '13-1-disabled.png'
        }]
    }, {
        text: '',
        options: [{
            id: 0,
            text: 'Американский таракан пробежит 30&nbsp;метров',
            message: '20 секунд',
            img: '14-0.png',
            imgCorrect: '14-0-correct.png',
            imgWrong: '14-0-wrong.png',
            imgDisabled: '14-0-disabled.png',
            isCorrect: true
        }, {
            id: 1,
            text: 'Включится iPhone&nbsp;7',
            message: '27,63 секунды',
            img: '14-1.png',
            imgCorrect: '14-1-correct.png',
            imgWrong: '14-1-wrong.png',
            imgDisabled: '14-1-disabled.png'
        }]
    }],
    results: [{
        range: [0, 15],
        title: 'А улитка не&nbsp;успела проползти и&nbsp;сантиметра пути',
        cover: 'https://leonardo.osnova.io/83c4905f-bb75-919c-b4c4-4a8e87f944a8'
    }, {
        range: [15, 20],
        title: 'Свет преодолел&nbsp;бы несколько миллионов километров',
        cover: 'https://leonardo.osnova.io/81514d36-8db9-3012-adc1-cf9df4735738'
    }, {
        range: [20, 30],
        title: 'А комар успел 10&nbsp;тысяч раз взмахнуть крыльями',
        cover: 'https://leonardo.osnova.io/fd0fc018-f002-e91e-e9ae-07b72cd1af44'
    }, {
        range: [30, 99999],
        title: 'За это время сын маминой подруги успел&nbsp;бы прославиться',
        cover: 'https://leonardo.osnova.io/91847ec4-4597-a55f-1e84-6efdbbc65de4'
    }]
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    logo: '<svg width="100" height="18" viewBox="0 0 100 18" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="#00B856" fill-rule="nonzero"><path d="M9.916.073V9.17c0 .425-.327.72-.72.72h-1.08c-.065 0-.098.065-.098.098v7.626c.262 0 .524.065.818.065 4.877 0 8.837-3.96 8.837-8.836 0-4.484-3.371-8.248-7.757-8.771zM9.72 13.687a1.09 1.09 0 0 1-1.08-1.08c0-.621.524-1.08 1.08-1.08.622 0 1.08.524 1.08 1.08.065.59-.458 1.08-1.08 1.08zm2.585 0a1.09 1.09 0 0 1-1.08-1.08c0-.621.524-1.08 1.08-1.08.622 0 1.08.524 1.08 1.08 0 .557-.425 1.08-1.08 1.08zm2.619 0a1.09 1.09 0 0 1-1.08-1.08c0-.621.523-1.08 1.08-1.08.621 0 1.08.524 1.08 1.08a1.09 1.09 0 0 1-1.08 1.08z"/><path d="M8.836.04C3.96.04 0 4 0 8.876c0 4.288 2.978 7.79 6.97 8.608V9.53c0-.36.328-.655.655-.72h1.08c.066 0 .099-.065.099-.098L8.836.04zM7.135 7.306a1.09 1.09 0 0 1-1.08-1.08c0-.622.523-1.08 1.08-1.08.621 0 1.08.523 1.08 1.08 0 .556-.491 1.08-1.08 1.08z"/><g><path d="M97.298 4.851v3.338h-4.45V4.851h-2.259v8.836h2.258V10.12h4.451v3.567h2.193V4.851zM60.513 5.866c-.36-.786-1.08-1.211-1.8-1.211s-1.473.425-1.8 1.21l-3.568 7.855h2.357l.785-1.865h4.582l.786 1.865h2.356l-3.698-7.854zm-3.404 4.221l1.342-3.24c.065-.098.098-.098.164-.098.065 0 .163 0 .163.098l1.342 3.24h-3.01zM34.2 3.28c-1.047 0-1.702.556-2.193 1.67l-2.847 6.643-2.88-6.677c-.458-1.08-1.145-1.669-2.193-1.669-.982 0-1.963.655-1.963 2.193v8.215h2.192v-7.92l2.913 6.578c.36.949 1.047 1.505 1.931 1.505.95 0 1.57-.556 1.93-1.505l2.914-6.578v8.018h2.192V5.538C36.164 4 35.182 3.28 34.2 3.28zM40.058 11.822c-.098 0-.229-.098-.229-.23v-1.57h5.498v-1.8H39.83V6.88c0-.098.098-.229.23-.229h5.465V4.786h-6.546c-.785 0-1.309.621-1.309 1.309v6.185c0 .655.556 1.31 1.31 1.31h6.545v-1.866h-5.466v.098zM49.222 13.687V6.946c0-.099.098-.23.229-.23h5.465V4.851h-6.545c-.786 0-1.31.622-1.31 1.31v7.494l2.16.032zM89.15 9.302c0-3.076-1.343-4.516-4.68-4.516h-.786c-3.339 0-4.68 1.472-4.68 4.516 0 3.01 1.341 4.516 4.68 4.516h.72c3.403-.065 4.745-1.505 4.745-4.516zm-4.746 2.65h-.72c-1.8 0-2.553-.817-2.553-2.65 0-1.767.622-2.651 2.553-2.651h.72c1.865 0 2.552.884 2.552 2.65 0 1.8-.687 2.652-2.552 2.652zM72.884 3.476h-4.386c-3.273 0-4.582 1.67-4.582 4.517 0 .458.066.883.099 1.243.36 2.03 1.57 3.273 4.614 3.273h.982v1.146h2.193v-1.146h.949c3.076 0 4.287-1.243 4.614-3.273a7.1 7.1 0 0 0 .098-1.243c-.032-2.847-1.374-4.517-4.581-4.517zm-3.339 7.2h-.981c-1.506 0-2.03-.556-2.357-1.472-.098-.328-.098-.786-.098-1.244 0-1.865.884-2.65 2.127-2.65h1.342v5.366h-.033zm5.63-1.374c-.328.884-.884 1.473-2.357 1.473h-.982v-5.4h1.342c1.244 0 2.127.785 2.127 2.65-.032.491-.032.884-.13 1.277z"/></g></g></g></svg>',
    restart: '<svg width="18" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M17.475 1.102c-.305-.127-.566-.074-.782.157L15.239 2.7A8.682 8.682 0 0 0 12.505.95a8.427 8.427 0 0 0-3.18-.62 8.352 8.352 0 0 0-3.333.682 8.66 8.66 0 0 0-2.74 1.833 8.67 8.67 0 0 0-1.833 2.74 8.35 8.35 0 0 0-.682 3.332c0 1.163.227 2.273.682 3.332a8.673 8.673 0 0 0 1.833 2.74 8.672 8.672 0 0 0 2.74 1.833 8.352 8.352 0 0 0 3.332.682c1.282 0 2.501-.27 3.656-.811a8.383 8.383 0 0 0 2.952-2.286.364.364 0 0 0 .084-.252.309.309 0 0 0-.106-.229l-1.532-1.543a.43.43 0 0 0-.28-.1c-.119.014-.204.059-.257.134a5.61 5.61 0 0 1-2.001 1.644 5.64 5.64 0 0 1-2.516.58 5.57 5.57 0 0 1-2.22-.452 5.752 5.752 0 0 1-1.827-1.224 5.777 5.777 0 0 1-1.225-1.829A5.568 5.568 0 0 1 3.6 8.918c0-.775.15-1.515.452-2.22a5.756 5.756 0 0 1 1.225-1.827 5.76 5.76 0 0 1 1.828-1.225 5.57 5.57 0 0 1 2.22-.453c1.498 0 2.798.51 3.902 1.532l-1.544 1.543c-.23.224-.283.48-.156.771.127.298.346.448.66.448h5.009a.69.69 0 0 0 .503-.213.688.688 0 0 0 .212-.503V1.762c0-.313-.145-.533-.436-.66z" fill-rule="evenodd"/></svg>',
    next: '<svg width="26" height="20" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><path d="M15.376 0l-2.334 2.333L20.71 10l-7.667 7.667L15.376 20l10-10z" fill-rule="nonzero"/><path d="M.642 8.155h21.715v3.691H.642z"/></g></svg>'
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {

    set: function set(b, e, m) {
        var cname = b;

        if (e) cname += "__" + e;
        if (m) cname += "--" + m;

        return cname;
    }

};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var BREAKPOINTS = {
    mobile: 680
};

/**
 * Check if screen size is mobile
 */
var isMobile = exports.isMobile = function isMobile() {
    return !window.matchMedia("(min-width: " + BREAKPOINTS.mobile + "px)").matches;
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Find most frequent value in array
 * @param {Array} array
 */
var getMostFrequentValue = exports.getMostFrequentValue = function getMostFrequentValue(array) {
    var result = [].concat(_toConsumableArray(array));

    return result.sort(function (a, b) {
        return result.filter(function (v) {
            return v === a;
        }).length - result.filter(function (v) {
            return v === b;
        }).length;
    }).pop();
};

/**
 * Shuffle an array (original array will be modified)
 * @param {Array} array
 */
var shuffle = exports.shuffle = function shuffle(array) {
    var j = void 0,
        x = void 0,
        i = void 0;

    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
};

/**
 * Convert nodelist to array
 * @param {NodeList} nodeList
 */
var toArray = exports.toArray = function toArray(nodeList) {
    return Array.prototype.slice.call(nodeList);
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * Simple images preload
 * @param {Array} urls - array of images urls
 */
var preloadImages = exports.preloadImages = function preloadImages(urls) {
    urls.forEach(function (url) {
        var image = new Image();

        image.src = url;
    });
};

/**
 * Decline russian words
 * @param {Number} number
 * @param {Array} words - array of 3 words
 */
var declineWord = exports.declineWord = function declineWord(number, words) {
    var result = number + '&nbsp;';

    if (number % 10 == 1 && number % 100 != 11) {
        result += words[0];
    } else if ([2, 3, 4].indexOf(number % 10) > -1 && [12, 13, 14].indexOf(number % 100) < 0) {
        result += words[1];
    } else {
        result += words[2];
    }

    return result;
};

/**
 * Format large numbers
 * @param {Number} number
 * @param {String} string - string to insert after thousands. Non-breaking space by default
 */
var formatNumber = exports.formatNumber = function formatNumber(number) {
    var string = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '&nbsp;';

    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, string);
};

/**
 * Scroll window to target element
 * @param {Element} element
 * @param {Number} offset - offset from top
 */
var scrollToElement = exports.scrollToElement = function scrollToElement(element) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    var y = element.getBoundingClientRect().top + (window.scrollY || window.pageYOffset) - offset;

    window.scroll(0, y);
};

var copyToClipboard = exports.copyToClipboard = function copyToClipboard(string, callback) {
    var input = document.createElement('textarea'),
        isSuccess = false;

    _extends(input.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        opacity: '0'
    });

    input.value = string;

    document.body.appendChild(input);

    input.select();

    try {
        var copy = document.execCommand('copy');

        isSuccess = true;
    } catch (e) {}

    document.body.removeChild(input);

    callback(isSuccess);
};

/***/ }),
/* 37 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});
//# sourceMappingURL=all.js.map