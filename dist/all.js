(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["CiprTest"] = factory();
	else
		root["CiprTest"] = factory();
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
    name: 'CiprTest',
    analyticsCategory: 'Cipr Test',
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

var _data = __webpack_require__(30);

var _data2 = _interopRequireDefault(_data);

var _svg = __webpack_require__(31);

var _svg2 = _interopRequireDefault(_svg);

var _bem = __webpack_require__(32);

var _bem2 = _interopRequireDefault(_bem);

var _dom = __webpack_require__(7);

var _check = __webpack_require__(33);

var _array = __webpack_require__(34);

var _helper = __webpack_require__(35);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Dependencies
 */
__webpack_require__(36);

var CONFIG = __webpack_require__(4);

/**
 * Constants
 */
var PATH = window.__PATH || '.';

var CSS = {
    state: {
        active: 'l-active'
    },
    main: 'Cipr'
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
        _this.setDefaultValues();
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

            this.content.appendChild(this.mainText);
            this.content.appendChild(this.mainOptions);
            this.content.appendChild(this.mainActions);
            this.container.appendChild(this.content);

            this.makeIntro();

            this.container.tabIndex = 1;
            this.container.addEventListener('keydown', function (event) {
                _this3.keydownHandler(event);
            });

            Analytics.sendEvent('Start screen', 'Load');

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
                innerHTML: '<a href="' + _data2.default.promoUrl + '" target="_blank">' + _svg2.default.logo + '</a>'
            });

            this.counter = (0, _dom.makeElement)('div', _bem2.default.set(CSS.main, 'counter'));
            header.appendChild(this.counter);

            this.updateCounter();

            this.container.appendChild(header);
        }
    }, {
        key: 'updateCounter',
        value: function updateCounter() {
            var _this4 = this;

            if (this.counter.children.length === 0) {
                _data2.default.questions.forEach(function (i) {
                    var bullet = (0, _dom.makeElement)('span');
                    _this4.counter.appendChild(bullet);
                });
            }

            var bullets = (0, _array.toArray)(this.counter.children);

            bullets.forEach(function (bullet, i) {
                if (i <= _this4.activeIndex) {
                    bullet.classList.add('active');
                } else {
                    bullet.classList.remove('active');
                }
            });
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
            var button = (0, _dom.makeElement)('button', _bem2.default.set(CSS.main, 'button'), {
                type: 'button',
                data: {
                    click: func
                }
            });

            button.innerHTML = text + _svg2.default.next;

            this.mainActions.appendChild(button);
        }
    }, {
        key: 'start',
        value: function start() {
            this.updateMode('progress');
            this.makeQuestion(this.activeIndex);

            Analytics.sendEvent('Start button', 'Click');
        }
    }, {
        key: 'makeQuestion',
        value: function makeQuestion() {
            var data = _data2.default.questions[this.activeIndex];

            if (data) {
                (0, _dom.removeChildren)(this.mainOptions);
                (0, _dom.removeChildren)(this.mainActions);

                this.isPending = false;
                this.mainOptions.classList.remove(_bem2.default.set(CSS.main, 'options', 'disabled'));

                this.updateCounter();
                this.mainText.innerHTML = '<div>' + data.text + '</div>';

                this.makeQuestionOptions(data.options);

                if ((0, _check.isMobile)()) (0, _helper.scrollToElement)(this.container);

                Analytics.sendEvent('Question ' + (this.activeIndex + 1) + ' screen', 'Hit');
            } else {
                throw new Error('Missing question data');
            }
        }
    }, {
        key: 'makeQuestionOptions',
        value: function makeQuestionOptions(options) {
            var _this5 = this;

            (0, _array.shuffle)(options);

            options.forEach(function (option) {
                var item = (0, _dom.makeElement)('div', _bem2.default.set(CSS.main, 'option'), {
                    data: {
                        click: 'submitAnswer',
                        id: option.id
                    }
                });

                item.textContent = option.text;

                _this5.mainOptions.appendChild(item);

                if (option.isCorrect) {
                    _this5.activeCorrectId = option.id;
                }

                _this5.messages[option.id] = option.message;
            });
        }
    }, {
        key: 'submitAnswer',
        value: function submitAnswer(button) {

            if (!this.isPending) {
                var id = parseInt(button.dataset.id),
                    data = null;

                this.isPending = true;
                this.mainOptions.classList.add(_bem2.default.set(CSS.main, 'options', 'disabled'));

                if (id === this.activeCorrectId) {
                    this.userPoints++;
                    button.classList.add(_bem2.default.set(CSS.main, 'option', 'success'));
                } else {
                    button.classList.add(_bem2.default.set(CSS.main, 'option', 'error'));
                }

                this.makeOptionMessage(id);

                if (this.activeIndex >= this.totalLength - 1) {
                    var resultData = this.findResult();

                    this.makeActionButton('Результат', 'makeResult');

                    (0, _helper.preloadImages)([this.findResult().cover]);
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
    }, {
        key: 'findResult',
        value: function findResult() {
            var results = _data2.default.results,
                finalResult = null;

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = results[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var result = _step.value;

                    if (this.userPoints >= result.range[0] && this.userPoints <= result.range[1]) {
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

            return finalResult;
        }
    }, {
        key: 'makeResult',
        value: function makeResult() {
            var data = this.findResult();

            var result = (0, _dom.makeElement)('div', _bem2.default.set(CSS.main, 'result')),
                resultContent = (0, _dom.makeElement)('div', _bem2.default.set(CSS.main, 'resultContent')),
                resultActions = (0, _dom.makeElement)('div', _bem2.default.set(CSS.main, 'resultActions')),
                restartButton = (0, _dom.makeElement)('div', _bem2.default.set(CSS.main, 'restartButton'), {
                data: {
                    click: 'restart'
                }
            }),
                button = (0, _dom.makeElement)('a', _bem2.default.set(CSS.main, 'button'), {
                target: '_blank',
                href: _data2.default.promoUrl
            });

            this.updateMode('result');

            result.style.backgroundImage = 'url(' + data.cover + ')';

            this.mainText.innerHTML = _data2.default.outro;
            (0, _dom.removeChildren)(this.mainOptions);
            (0, _dom.removeChildren)(this.mainActions);

            resultContent.innerHTML = '<div class="' + _bem2.default.set(CSS.main, 'resultPoints') + '">' + this.userPoints + ' \u0438\u0437 ' + this.totalLength + ' \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432</div>\n            <div class="' + _bem2.default.set(CSS.main, 'title') + '">' + data.title + '</div>';
            result.appendChild(resultContent);
            resultContent.appendChild(resultActions);
            (0, _dom.prepend)(this.content, result);

            button.innerHTML = 'Купить билет';
            this.mainText.appendChild(button);

            Share.make(resultActions, {
                url: CONFIG.share.url + '/' + this.userPoints,
                twitter: CONFIG.share.twitter
            });

            restartButton.innerHTML = 'Пройти ещё раз' + _svg2.default.restart;
            resultActions.appendChild(restartButton);

            if ((0, _check.isMobile)()) (0, _helper.scrollToElement)(this.container);

            Analytics.sendEvent('Result screen', 'Hit');
            Analytics.sendEvent('Result ' + this.userPoints + ' screen', 'Hit');
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
            this.content.appendChild(this.mainText);
            this.content.appendChild(this.mainOptions);
            this.content.appendChild(this.mainActions);

            this.makeQuestion(0);

            Analytics.sendEvent('Restart button', 'Click');
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

                var action = event.target.dataset[eventName];

                if (action && this[action]) {
                    this[action](event.target, event);
                }

                /** Send links clicks to analytics */
                if (event.target.tagName.toLowerCase() === 'a') {
                    Analytics.sendEvent(event.target.href);
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
exports.default = {
    title: 'Тест: Что вы знаете о&nbsp;«цифровой экономике»',
    intro: 'Проверьте, готовы ли вы к&nbsp;будущему торговли.',
    outro: '<div>\n    \u041D\u0430 \u043A\u043E\u043D\u0444\u0435\u0440\u0435\u043D\u0446\u0438\u0438 \u0426\u0418\u041F\u0420 \u0432\u044B \u0443\u0437\u043D\u0430\u0435\u0442\u0435 \u043E \u0446\u0438\u0444\u0440\u043E\u0432\u043E\u0439 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u043A\u0435 \u0433\u043B\u0430\u0432\u043D\u043E\u0435. <strong>\u0421&nbsp;6&nbsp;\u043F\u043E&nbsp;8&nbsp;\u0438\u044E\u043D\u044F</strong> \u0435\u0451 \u0431\u0443\u0434\u0443\u0442 \u043E\u0431\u0441\u0443\u0436\u0434\u0430\u0442\u044C \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u0438 \u0420\u043E\u0441\u0442\u0435\u0445\u0430, Samsung, \u0420\u043E\u0441\u0430\u0442\u043E\u043C\u0430, \u0420\u043E\u0441\u0442\u0435\u043B\u0435\u043A\u043E\u043C\u0430, \u0421\u043A\u043E\u043B\u043A\u043E\u0432\u043E \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u043A\u0440\u0443\u043F\u043D\u044B\u0445 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439.\n    <span></span>\n    \u0420\u0435\u0447\u044C \u043D\u0430 \u0426\u0418\u041F\u0420 \u043F\u043E\u0439\u0434\u0451\u0442 \u043E\u0431\u043E \u0432\u0441\u0451\u043C \u043E\u0442 \u0443\u043C\u043D\u044B\u0445 \u0433\u043E\u0440\u043E\u0434\u043E\u0432 \u0434\u043E \u0432\u043B\u0438\u044F\u043D\u0438\u044F \xAB\u0446\u0438\u0444\u0440\u043E\u0432\u043E\u0439 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u043A\u0438\xBB \u043D\u0430 \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u043E\u0441\u0442\u044C. \u041F\u0440\u043E\u0439\u0434\u0451\u0442 \u043A\u043E\u043D\u0444\u0435\u0440\u0435\u043D\u0446\u0438\u044F \u0432 \u0418\u043D\u043D\u043E\u043F\u043E\u043B\u0438\u0441\u0435 \u043D\u0435\u043F\u043E\u0434\u0430\u043B\u0451\u043A\u0443 \u043E\u0442 \u041A\u0430\u0437\u0430\u043D\u0438, \u0442\u0430\u043A \u0447\u0442\u043E \u043B\u0443\u0447\u0448\u0435 \u0441\u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E\u0435\u0437\u0434\u043A\u0443 \u0437\u0430\u0440\u0430\u043D\u0435\u0435 \u2014 \u0441 \u043F\u0440\u043E\u043C\u043E\u043A\u043E\u0434\u043E\u043C <strong>CIPR5</strong> \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u0431\u0438\u043B\u0435\u0442\u044B \u043D\u0430 \u0426\u0418\u041F\u0420 \u0431\u0443\u0434\u0443\u0442 \u0441\u0442\u043E\u0438\u0442\u044C 5 000 \u0440\u0443\u0431\u043B\u0435\u0439 \u0432\u043C\u0435\u0441\u0442\u043E 30 000.\n    </div>',
    promoUrl: 'https://reg.cipr.ru/?utm_source=VC&utm_medium=banner&utm_campaign=test',
    questions: [{
        text: 'Начнём с простого: сколько сейчас стоит вся цифровая экономика?',
        options: [{
            id: 0,
            text: '$3 трлн долларов',
            message: 'Верно! Это в два раза больше, чем ВВП России.',
            isCorrect: true
        }, {
            id: 1,
            text: '$400 млрд',
            message: 'Маловато — на самом деле общая стоимость цифровой экономики сейчас составляет 2,9 триллиона долларов. Это в два раза больше, чем ВВП России.'
        }, {
            id: 2,
            text: '$15,2 трлн',
            message: 'Неверно. На самом деле цифровая экономика стоит 2,9 триллиона долларов. Что немало — это в два раза больше, чем ВВП России.'
        }, {
            id: 3,
            text: '$947 млрд долларов',
            message: 'Маловато — на самом деле общая стоимость цифровой экономики сейчас составляет 2,9 триллиона долларов. Это в два раза больше, чем ВВП России.'
        }]
    }, {
        text: 'Какой процент профессий может полностью исчезнуть из-за автоматизации?',
        options: [{
            id: 0,
            text: '5%',
            message: '\u041F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E. \u0415\u0449\u0451 51% \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0439 \u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E <a href="https://finance.yahoo.com/news/51-of-all-job-tasks-could-be-automated-by-todays-technology-135331964.html?guccounter=1" target="_blank">\u0438\u0437\u043C\u0435\u043D\u0438\u0442\u0441\u044F</a> \u2014 \u043B\u044E\u0434\u0438 \u0438 \u0440\u043E\u0431\u043E\u0442\u044B \u0431\u0443\u0434\u0443\u0442 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0432\u043C\u0435\u0441\u0442\u0435.\n                    <span></span>\n                    \u041D\u0430 \u043A\u043E\u043D\u0444\u0435\u0440\u0435\u043D\u0446\u0438\u0438 <a href="https://cipr.ru/" target="_blank">\u0426\u0418\u041F\u0420</a> \u0431\u0443\u0434\u0443\u0449\u0435\u0435 \u043D\u0430\u0441\u0442\u0443\u043F\u0438\u0442 \u0447\u0443\u0442\u044C \u0440\u0430\u043D\u044C\u0448\u0435 \u2014 \u0441\u043E-\u043C\u043E\u0434\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u043C \u043E\u0434\u043D\u043E\u0439 \u0438\u0437 \u0441\u0435\u0441\u0441\u0438\u0439 \u0441\u0442\u0430\u043D\u0435\u0442 \u0430\u043D\u0434\u0440\u043E\u0438\u0434 \u0410\u043B\u0438\u0441\u0430.',
            isCorrect: true
        }, {
            id: 1,
            text: '51%',
            message: '\u041D\u0435\u0432\u0435\u0440\u043D\u043E. \u0421\u0442\u043E\u043B\u044C\u043A\u043E \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0439 \u044D\u0432\u043E\u043B\u044E\u0446\u0438\u043E\u043D\u0438\u0440\u0443\u044E\u0442 \u0438\u0437-\u0437\u0430 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0438, \u0430 \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E <a href="https://finance.yahoo.com/news/51-of-all-job-tasks-could-be-automated-by-todays-technology-135331964.html?guccounter=1" target="_blank">\u0438\u0441\u0447\u0435\u0437\u043D\u0435\u0442</a> \u0432\u0441\u0435\u0433\u043E 5%.\n                    <span></span>\n                    \u041D\u0430 \u043A\u043E\u043D\u0444\u0435\u0440\u0435\u043D\u0446\u0438\u0438 <a href="https://cipr.ru/" target="_blank">\u0426\u0418\u041F\u0420</a> \u0431\u0443\u0434\u0443\u0449\u0435\u0435 \u043D\u0430\u0441\u0442\u0443\u043F\u0438\u0442 \u0447\u0443\u0442\u044C \u0440\u0430\u043D\u044C\u0448\u0435 \u2014 \u0441\u043E-\u043C\u043E\u0434\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u043C \u043E\u0434\u043D\u043E\u0439 \u0438\u0437 \u0441\u0435\u0441\u0441\u0438\u0439 \u0441\u0442\u0430\u043D\u0435\u0442 \u0430\u043D\u0434\u0440\u043E\u0438\u0434 \u0410\u043B\u0438\u0441\u0430.'
        }, {
            id: 2,
            text: '15%',
            message: '\u041D\u0435\u0432\u0435\u0440\u043D\u043E. \u041D\u0430 \u0441\u0430\u043C\u043E\u043C \u0434\u0435\u043B\u0435 <a href="https://finance.yahoo.com/news/51-of-all-job-tasks-could-be-automated-by-todays-technology-135331964.html?guccounter=1" target="_blank">\u0438\u0441\u0447\u0435\u0437\u043D\u0435\u0442</a> \u0432\u0441\u0435\u0433\u043E 5% \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0439, \u0438 \u0435\u0449\u0451 51% \u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u044D\u0432\u043E\u043B\u044E\u0446\u0438\u043E\u043D\u0438\u0440\u0443\u044E\u0442.\n                    <span></span>\n                    \u041D\u0430 \u043A\u043E\u043D\u0444\u0435\u0440\u0435\u043D\u0446\u0438\u0438 <a href="https://cipr.ru/" target="_blank">\u0426\u0418\u041F\u0420</a> \u0431\u0443\u0434\u0443\u0449\u0435\u0435 \u043D\u0430\u0441\u0442\u0443\u043F\u0438\u0442 \u0447\u0443\u0442\u044C \u0440\u0430\u043D\u044C\u0448\u0435 \u2014 \u0441\u043E-\u043C\u043E\u0434\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u043C \u043E\u0434\u043D\u043E\u0439 \u0438\u0437 \u0441\u0435\u0441\u0441\u0438\u0439 \u0441\u0442\u0430\u043D\u0435\u0442 \u0430\u043D\u0434\u0440\u043E\u0438\u0434 \u0410\u043B\u0438\u0441\u0430.'
        }, {
            id: 3,
            text: '80%',
            message: '\u041C\u043D\u043E\u0433\u043E\u0432\u0430\u0442\u043E. \u041D\u0430 \u0441\u0430\u043C\u043E\u043C \u0434\u0435\u043B\u0435 <a href="https://finance.yahoo.com/news/51-of-all-job-tasks-could-be-automated-by-todays-technology-135331964.html?guccounter=1" target="_blank">\u0438\u0441\u0447\u0435\u0437\u043D\u0435\u0442</a> \u0432\u0441\u0435\u0433\u043E 5% \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0439, \u0438 \u0435\u0449\u0451 51% \u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u044D\u0432\u043E\u043B\u044E\u0446\u0438\u043E\u043D\u0438\u0440\u0443\u044E\u0442.\n                    <span></span>\n                    \u041D\u0430 \u043A\u043E\u043D\u0444\u0435\u0440\u0435\u043D\u0446\u0438\u0438 <a href="https://cipr.ru/" target="_blank">\u0426\u0418\u041F\u0420</a> \u0431\u0443\u0434\u0443\u0449\u0435\u0435 \u043D\u0430\u0441\u0442\u0443\u043F\u0438\u0442 \u0447\u0443\u0442\u044C \u0440\u0430\u043D\u044C\u0448\u0435 \u2014 \u0441\u043E-\u043C\u043E\u0434\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u043C \u043E\u0434\u043D\u043E\u0439 \u0438\u0437 \u0441\u0435\u0441\u0441\u0438\u0439 \u0441\u0442\u0430\u043D\u0435\u0442 \u0430\u043D\u0434\u0440\u043E\u0438\u0434 \u0410\u043B\u0438\u0441\u0430.'
        }]
    }, {
        text: 'Аналитики Gartner ежегодно выпускают отчёты о технологических трендах. Из предсказаний ниже, три взяты из их отчёта, а одно мы придумали. Какое?',
        options: [{
            id: 0,
            text: 'В 2021 году приложений и устройств с использованием ИИ станет в два раза больше, чем обычных',
            message: 'Верно. Этот тренд мы придумали, хотя он и может стать правдой.',
            isCorrect: true
        }, {
            id: 1,
            text: 'В 2020 году обычные люди будут общаться с ботами чаще, чем с супругами',
            message: 'Неверно. В <a href="https://www.gartner.com/binaries/content/assets/events/keywords/cio/ciode5/top_strategic_predictions_fo_315910.pdf" target="_blank">отчёте</a> Gartner есть и такой тренд.'
        }, {
            id: 2,
            text: 'К 2022 году интернет вещей снизит расходы обычных людей и компаний на один триллион долларов в год',
            message: 'Неверно. В <a href="https://www.gartner.com/binaries/content/assets/events/keywords/cio/ciode5/top_strategic_predictions_fo_315910.pdf" target="_blank">отчёте</a> Gartner есть и такой тренд.'
        }, {
            id: 3,
            text: 'В 2020 году 100 миллионов человек будут покупать товары в дополненной реальности',
            message: 'Неверно. В <a href="https://www.gartner.com/binaries/content/assets/events/keywords/cio/ciode5/top_strategic_predictions_fo_315910.pdf" target="_blank">отчёте</a> Gartner есть и такой тренд.'
        }]
    }, {
        text: 'Мы живём в мире третьей индустриальной революции, но скоро должна произойти четвёртая. Выберите технологию, которая считается её частью.',
        options: [{
            id: 0,
            text: 'Интернет вещей',
            message: 'Правильно. Ещё к «Индустрии 4.0» относятся облачные вычисления и сети из глубоко интегрированных с интернетом машин под управлением искусственного интеллекта.',
            isCorrect: true
        }, {
            id: 1,
            text: 'Роботы на производстве',
            message: 'Неверно. Это признак третьей индустриальной революции.'
        }, {
            id: 2,
            text: 'Промышленный термоядерный синтез',
            message: 'Увы, до этого ещё далеко.'
        }, {
            id: 3,
            text: 'Механизация производства',
            message: 'Неверно. Механизация производства — это паровые прялки времён первой индустриальной революции.'
        }]
    }, {
        text: 'Какая страна больше всех готова к цифровой экономике?',
        options: [{
            id: 0,
            text: 'Сингапур',
            message: 'Верно. По <a href="http://reports.weforum.org/global-information-technology-report-2016/networked-readiness-index/" target="_blank">мнению</a> Мирового экономического форума, инфраструктура Сингапура подготовлена лучше всего. Россия — на 41 месте.',
            isCorrect: true
        }, {
            id: 1,
            text: 'Япония',
            message: 'Неверно. По <a href="http://reports.weforum.org/global-information-technology-report-2016/networked-readiness-index/" target="_blank">мнению</a> Мирового экономического форума, лучше всего подготовлена инфраструктура Сингапура. Россия — на 41 месте.'
        }, {
            id: 2,
            text: 'США',
            message: 'Неверно. По <a href="http://reports.weforum.org/global-information-technology-report-2016/networked-readiness-index/" target="_blank">мнению</a> Мирового экономического форума, лучше всего подготовлена инфраструктура Сингапура. Россия — на 41 месте.'
        }, {
            id: 3,
            text: 'Китай',
            message: 'Неверно. По <a href="http://reports.weforum.org/global-information-technology-report-2016/networked-readiness-index/" target="_blank">мнению</a> Мирового экономического форума, лучше всего подготовлена инфраструктура Сингапура. Россия — на 41 месте.'
        }]
    }, {
        text: 'Выберите город, в котором широкомасштабно используется концепция интернета вещей.',
        options: [{
            id: 0,
            text: 'Барселона',
            message: '\u0412\u0435\u0440\u043D\u043E! \u0412 \u0438\u0441\u043F\u0430\u043D\u0441\u043A\u043E\u043C \u0433\u043E\u0440\u043E\u0434\u0435 \u0441 2012 \u0433\u043E\u0434\u0430 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442, \u043E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435 \u0438 \u0434\u0430\u0436\u0435 \u043F\u0430\u0440\u043A\u0438 \u0441\u0432\u044F\u0437\u0430\u043D\u044B \u0432 \u0435\u0434\u0438\u043D\u0443\u044E \u0441\u0438\u0441\u0442\u0435\u043C\u0443 \u0441\u043E \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E\u043C \u0434\u0430\u0442\u0447\u0438\u043A\u043E\u0432.\n                    <span></span>\n                    \u041D\u0430 <a href="https://cipr.ru/" target="_blank">\u0426\u0418\u041F\u0420</a> \xAB\u0443\u043C\u043D\u044B\u043C\xBB \u0433\u043E\u0440\u043E\u0434\u0430\u043C \u043F\u043E\u0441\u0432\u044F\u0449\u0435\u043D\u043E \u0441\u0440\u0430\u0437\u0443 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0432\u044B\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0439: \u0442\u0430\u043C \u0432\u044B \u0443\u0437\u043D\u0430\u0435\u0442\u0435, \u043A\u0430\u043A \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430 \u0434\u0430\u043D\u043D\u044B\u0445 \u043F\u043E\u043C\u043E\u0433\u0430\u0435\u0442 \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043D\u0430 \u0433\u043E\u0440\u043E\u0434\u0441\u043A\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043C\u044B, \u0438 \u043A\u0430\u043A\u043E\u0439 \u0433\u043E\u0440\u043E\u0434 \u0432 \u0420\u043E\u0441\u0441\u0438\u0438 \u0441\u0430\u043C\u044B\u0439 \xAB\u0443\u043C\u043D\u044B\u0439\xBB.',
            isCorrect: true
        }, {
            id: 1,
            text: 'Сингапур',
            message: '\u041D\u0435\u0432\u0435\u0440\u043D\u043E. \u0412 \u0411\u0430\u0440\u0441\u0435\u043B\u043E\u043D\u0435 \u0441 2012 \u0433\u043E\u0434\u0430 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442, \u043E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435 \u0438 \u0434\u0430\u0436\u0435 \u0433\u043E\u0440\u043E\u0434\u0441\u043A\u0438\u0435 \u043F\u0430\u0440\u043A\u0438 \u0441\u0432\u044F\u0437\u0430\u043D\u044B \u0432 \u0435\u0434\u0438\u043D\u0443\u044E \u0441\u0438\u0441\u0442\u0435\u043C\u0443 \u0441\u043E \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E\u043C \u0434\u0430\u0442\u0447\u0438\u043A\u043E\u0432.\n                    <span></span>\n                    \u041D\u0430 <a href="https://cipr.ru/" target="_blank">\u0426\u0418\u041F\u0420</a> \xAB\u0443\u043C\u043D\u044B\u043C\xBB \u0433\u043E\u0440\u043E\u0434\u0430\u043C \u043F\u043E\u0441\u0432\u044F\u0449\u0435\u043D\u043E \u0441\u0440\u0430\u0437\u0443 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0432\u044B\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0439: \u0442\u0430\u043C \u0432\u044B \u0443\u0437\u043D\u0430\u0435\u0442\u0435, \u043A\u0430\u043A \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430 \u0434\u0430\u043D\u043D\u044B\u0445 \u043F\u043E\u043C\u043E\u0433\u0430\u0435\u0442 \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043D\u0430 \u0433\u043E\u0440\u043E\u0434\u0441\u043A\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u0438 \u043A\u0430\u043A\u043E\u0439 \u0433\u043E\u0440\u043E\u0434 \u0432 \u0420\u043E\u0441\u0441\u0438\u0438 \u0441\u0430\u043C\u044B\u0439 \xAB\u0443\u043C\u043D\u044B\u0439\xBB.'
        }, {
            id: 2,
            text: 'Нью-Йорк',
            message: '\u041D\u0435\u0432\u0435\u0440\u043D\u043E. \u0412 \u0411\u0430\u0440\u0441\u0435\u043B\u043E\u043D\u0435 \u0441 2012 \u0433\u043E\u0434\u0430 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442, \u043E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435 \u0438 \u0434\u0430\u0436\u0435 \u0433\u043E\u0440\u043E\u0434\u0441\u043A\u0438\u0435 \u043F\u0430\u0440\u043A\u0438 \u0441\u0432\u044F\u0437\u0430\u043D\u044B \u0432 \u0435\u0434\u0438\u043D\u0443\u044E \u0441\u0438\u0441\u0442\u0435\u043C\u0443 \u0441\u043E \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E\u043C \u0434\u0430\u0442\u0447\u0438\u043A\u043E\u0432.\n                    <span></span>\n                    \u041D\u0430 <a href="https://cipr.ru/" target="_blank">\u0426\u0418\u041F\u0420</a> \xAB\u0443\u043C\u043D\u044B\u043C\xBB \u0433\u043E\u0440\u043E\u0434\u0430\u043C \u043F\u043E\u0441\u0432\u044F\u0449\u0435\u043D\u043E \u0441\u0440\u0430\u0437\u0443 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0432\u044B\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0439: \u0442\u0430\u043C \u0432\u044B \u0443\u0437\u043D\u0430\u0435\u0442\u0435, \u043A\u0430\u043A \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430 \u0434\u0430\u043D\u043D\u044B\u0445 \u043F\u043E\u043C\u043E\u0433\u0430\u0435\u0442 \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043D\u0430 \u0433\u043E\u0440\u043E\u0434\u0441\u043A\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u0438 \u043A\u0430\u043A\u043E\u0439 \u0433\u043E\u0440\u043E\u0434 \u0432 \u0420\u043E\u0441\u0441\u0438\u0438 \u0441\u0430\u043C\u044B\u0439 \xAB\u0443\u043C\u043D\u044B\u0439\xBB.'
        }, {
            id: 3,
            text: 'Москва',
            message: '\u041D\u0435\u0432\u0435\u0440\u043D\u043E. \u0412 \u0411\u0430\u0440\u0441\u0435\u043B\u043E\u043D\u0435 \u0441 2012 \u0433\u043E\u0434\u0430 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442, \u043E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435 \u0438 \u0434\u0430\u0436\u0435 \u0433\u043E\u0440\u043E\u0434\u0441\u043A\u0438\u0435 \u043F\u0430\u0440\u043A\u0438 \u0441\u0432\u044F\u0437\u0430\u043D\u044B \u0432 \u0435\u0434\u0438\u043D\u0443\u044E \u0441\u0438\u0441\u0442\u0435\u043C\u0443 \u0441\u043E \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E\u043C \u0434\u0430\u0442\u0447\u0438\u043A\u043E\u0432.\n                    <span></span>\n                    \u041D\u0430 <a href="https://cipr.ru/" target="_blank">\u0426\u0418\u041F\u0420</a> \xAB\u0443\u043C\u043D\u044B\u043C\xBB \u0433\u043E\u0440\u043E\u0434\u0430\u043C \u043F\u043E\u0441\u0432\u044F\u0449\u0435\u043D\u043E \u0441\u0440\u0430\u0437\u0443 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0432\u044B\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0439: \u0442\u0430\u043C \u0432\u044B \u0443\u0437\u043D\u0430\u0435\u0442\u0435, \u043A\u0430\u043A \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430 \u0434\u0430\u043D\u043D\u044B\u0445 \u043F\u043E\u043C\u043E\u0433\u0430\u0435\u0442 \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043D\u0430 \u0433\u043E\u0440\u043E\u0434\u0441\u043A\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u0438 \u043A\u0430\u043A\u043E\u0439 \u0433\u043E\u0440\u043E\u0434 \u0432 \u0420\u043E\u0441\u0441\u0438\u0438 \u0441\u0430\u043C\u044B\u0439 \xAB\u0443\u043C\u043D\u044B\u0439\xBB.'
        }]
    }, {
        text: 'Что такое «Эра индиго»?',
        options: [{
            id: 0,
            text: 'Новый этап развития экономики — вместо природных ресурсов она основывается на идеях и инновациях',
            message: 'Верно. Термин в 2016 году <a href="https://www.realclearpolitics.com/articles/2016/04/29/indigo_era_a_tectonic_shift_is_reshaping_the_world_130434.html" target="_blank">ввёл</a> основатель «Альфа-групп» Михаил Фридман.',
            isCorrect: true
        }, {
            id: 1,
            text: 'Время, когда рождается много детей с выдающимися творческими способностями',
            message: 'Неверно. На самом деле так <a href="https://www.realclearpolitics.com/articles/2016/04/29/indigo_era_a_tectonic_shift_is_reshaping_the_world_130434.html" target="_blank">называется</a> этап развития экономики, когда вместо природных ресурсов она основывается на идеях и инновациях.'
        }, {
            id: 2,
            text: 'Эпоха лидерства технологических корпораций',
            message: 'Неверно. На самом деле так <a href="https://www.realclearpolitics.com/articles/2016/04/29/indigo_era_a_tectonic_shift_is_reshaping_the_world_130434.html" target="_blank">называется</a> этап развития экономики, когда вместо природных ресурсов она основывается на идеях и инновациях.'
        }, {
            id: 3,
            text: 'Пик глобализации — без государственных границ и с единой цифровой валютой',
            message: 'Неверно. На самом деле так <a href="https://www.realclearpolitics.com/articles/2016/04/29/indigo_era_a_tectonic_shift_is_reshaping_the_world_130434.html" target="_blank">называется</a> этап развития экономики, когда вместо природных ресурсов она основывается на идеях и инновациях.'
        }]
    }, {
        text: 'Цифровые технологии уже меняют медицину и биотехнологии. Одно из изобретений ниже мы придумали — сможете определить, какое?',
        options: [{
            id: 0,
            text: 'Робот-терапевт, способный ставить диагнозы самостоятельно.',
            message: 'Верно. До этого нам ещё слишком далеко — пока что машины лучше всего показывают себя в хирургии. Робот daVinci, например, <a href="https://youtu.be/v1U2ruHU9iY" target="_blank">может</a> самостоятельно зашить виноградину.',
            isCorrect: true
        }, {
            id: 1,
            text: 'Операции на мозге в VR',
            message: 'Такое <a href="http://www.wired.co.uk/article/vr-brain-surgery-nhs-london-watch-video-360" target="_blank">уже было</a> в сентябре 2017 года. Врачи из Barts Health NHS Trust записали в VR операцию по удалению аневризмы из мозга пациента, чтобы потом научить этому студентов-нейрохирургов.'
        }, {
            id: 2,
            text: 'Копия плаценты в виде микрочипа',
            message: 'Неверно. Её с сентября 2017 года <a href="https://motherboard.vice.com/en_us/article/599n7n/placenta-on-a-chip-techn-will-let-scientists-research-neonatal-diseases-without-using-human-fetuses" target="_blank">разрабатывают</a> учёные из Florida Atlantic University, чтобы изучать болезни, не задействуя реальные ткани.'
        }, {
            id: 3,
            text: 'Компьютерный анастезиолог',
            message: 'Такой уже <a href="https://journals.lww.com/anesthesia-analgesia/fulltext/2017/02000/Failure_of_Sedasys___Destiny_or_Poor_Design_.43.aspx" target="_blank">существует</a>. Его зовут Sedasys — это компьютерная система, которая управляет анастезией во время операций на кишечнике. В комплекте идёт микронаушник, с помощью которого Sedasys может разбудить пациента, если потребуется.'
        }]
    }],
    results: [{
        range: [0, 3],
        title: 'Вы — экономический ретроград',
        cover: 'https://leonardo.osnova.io/560c5a09-05d7-8a5c-59f1-a74392daa553/'
    }, {
        range: [4, 6],
        title: 'Вы —<br> владелец «умного» холодильника',
        cover: 'https://leonardo.osnova.io/baab3277-9bcb-20c3-d5d2-c19797ca424f/'
    }, {
        range: [7, 8],
        title: 'Вы —<br> «умный» холодильник',
        cover: 'https://leonardo.osnova.io/5999f84f-96fa-0f36-0b22-48a05ee2ed0f/'
    }]
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    logo: '<svg width="146" height="54" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fill-rule="evenodd"><path d="M32.33 0h-3.153v12.617H3.944V0H.789v15.77h34.696v-3.153h-3.154zM142.726 6.309h-25.233V3.155h25.233v3.154zM114.339 0v15.77h3.153V9.463h28.388V0H114.34zM60.718 0L48.102 12.617h-6.309V0H38.64v15.77h10.767l12.65-12.616h4.97V15.77h3.155V0zM89.1 0H76.49v15.77h3.154V3.155H89.1zM95.41 0v3.154h9.466V15.77h3.154V0zM29.431 53.856l2.183-2.91v2.91h.62V49.91h-.541l-2.172 2.898V49.91h-.62v3.947h.53zm-5.862 0l2.184-2.91v2.91h.62V49.91h-.541l-2.172 2.898V49.91h-.62v3.947h.53zm-3.991.074c.445 0 .829-.108 1.156-.316v-.626c-.305.243-.683.361-1.129.361-.422 0-.772-.135-1.054-.411-.276-.277-.417-.632-.417-1.055a1.415 1.415 0 0 1 1.449-1.466c.39 0 .745.1 1.066.31V50.1a2.14 2.14 0 0 0-1.071-.265c-.598 0-1.094.192-1.489.58-.395.384-.592.874-.592 1.467 0 .592.197 1.083.592 1.472.4.383.897.575 1.489.575zm-5.302 0c.446 0 .83-.108 1.156-.316v-.626c-.304.243-.682.361-1.128.361-.423 0-.772-.135-1.054-.411-.277-.277-.418-.632-.418-1.055 0-.423.136-.773.412-1.05a1.416 1.416 0 0 1 1.038-.417c.39 0 .744.102 1.066.31v-.625a2.143 2.143 0 0 0-1.072-.265c-.597 0-1.094.192-1.488.58-.395.384-.592.874-.592 1.467 0 .592.197 1.083.592 1.472.4.383.896.575 1.488.575zm-4.883-.586c.382-.395.574-.88.574-1.461 0-.581-.192-1.066-.574-1.455-.384-.395-.864-.592-1.444-.592-.581 0-1.061.197-1.445.592-.377.389-.568.874-.568 1.455 0 .58.19 1.066.568 1.46.384.39.864.587 1.445.587.58 0 1.06-.198 1.444-.586zm-2.426-.412c-.265-.282-.395-.632-.395-1.05 0-.417.13-.767.395-1.043.265-.282.593-.423.982-.423s.716.141.981.423c.265.276.4.626.4 1.044 0 .417-.135.767-.4 1.05a1.31 1.31 0 0 1-.981.416 1.31 1.31 0 0 1-.982-.417zM1.41 50.478h1.027c.468 0 .744.21.744.587 0 .378-.276.593-.744.593H1.409v-1.18zm0 3.378v-1.63h1.077c.412 0 .734-.107.965-.326.236-.22.354-.502.354-.846 0-.339-.118-.615-.354-.824-.231-.213-.553-.32-.965-.32H.79v3.946h.62zM68.748 41.567c.57 0 .993-.36.999-.93h-.519c-.006.27-.192.462-.485.462-.294 0-.48-.185-.48-.462h-.518c.006.57.411.93 1.003.93zm-1.133 4.178l2.183-2.91v2.91h.62V41.8h-.541l-2.172 2.897V41.8h-.62v3.946h.53zm-3.454-.512c.383-.395.575-.88.575-1.461 0-.58-.192-1.066-.575-1.455-.384-.395-.863-.591-1.444-.591s-1.06.196-1.444.59c-.377.39-.569.875-.569 1.456s.192 1.066.57 1.461c.383.389.862.586 1.443.586.58 0 1.06-.197 1.444-.586zm-2.426-.412c-.264-.282-.394-.631-.394-1.049 0-.417.13-.767.394-1.043.266-.283.593-.423.982-.423.39 0 .716.14.982.423.265.276.4.626.4 1.043 0 .418-.135.767-.4 1.05a1.31 1.31 0 0 1-.982.416c-.39 0-.716-.14-.982-.417zm-6.056.924v-1.821h2.059v1.821h.62V41.8h-.62v1.556h-2.06v-1.556h-.62v3.946h.62zm-5.828 0v-1.821h2.059v1.821h.62V41.8h-.62v1.556H49.85v-1.556h-.62v3.946h.62zm-2.864 0v-.568h-2.26v-1.253h1.78v-.57h-1.78v-.986h2.187v-.57h-2.807v3.947h2.88zm-8.973-.011a.86.86 0 0 0 .242.028c.491 0 .813-.197.998-.648.186-.457.26-1.015.277-1.9l.016-.846h1.41v3.377h.62V41.8H38.95l-.017 1.353c-.017.721-.05 1.16-.158 1.522-.096.36-.276.519-.552.519a.726.726 0 0 1-.209-.023v.564zm-2.154.011V41.8h-.619v3.378h-1.473v-3.378h-.62v3.378h-1.472v-3.378h-.62v3.946h4.804zm-10.854-2.013h.852c.547 0 .88.271.88.728 0 .451-.322.717-.88.717h-.852v-1.445zm.885 2.013c.458 0 .813-.118 1.078-.354.264-.242.4-.553.4-.93 0-.385-.13-.695-.395-.937-.264-.243-.625-.36-1.083-.36h-.885v-1.365h-.62v3.946h1.505zm2.014 0h.62V41.8h-.62v3.946zm-9.231 0v-3l1.1 1.489h.36l1.1-1.488v3h.62v-3.947h-.62l-1.268 1.775-1.281-1.775h-.63v3.946h.619zm-3.544-.512c.382-.395.574-.88.574-1.461 0-.58-.192-1.066-.574-1.455-.384-.395-.863-.591-1.444-.591s-1.06.196-1.444.59c-.378.39-.57.875-.57 1.456s.192 1.066.57 1.461c.383.389.863.586 1.444.586.58 0 1.06-.197 1.444-.586zm-2.426-.412c-.265-.282-.395-.631-.395-1.049 0-.417.13-.767.395-1.043.266-.283.593-.423.982-.423s.716.14.981.423c.265.276.4.626.4 1.043 0 .418-.135.767-.4 1.05a1.31 1.31 0 0 1-.981.416c-.39 0-.716-.14-.982-.417zm-5.558-2.453h1.027c.468 0 .745.208.745.586s-.277.593-.745.593H7.146v-1.18zm0 3.377v-1.63h1.078c.412 0 .733-.106.964-.326.236-.22.355-.501.355-.846 0-.338-.119-.615-.355-.823-.231-.214-.552-.321-.964-.321H6.526v3.946h.62zm-5.737 0v-3.377h1.968v3.377h.62V41.8H.79v3.946h.62zM46.65 35.419c-.446 0-.712-.214-.712-.58 0-.362.266-.582.711-.582H47.8v1.162h-1.15zm-.965 2.216l1.19-1.67h.925v1.67h.62v-3.947h-1.8c-.812 0-1.307.445-1.307 1.122 0 .547.321.958.88 1.088l-1.258 1.737h.75zm-5.756 0l2.183-2.91v2.91h.62v-3.947h-.541l-2.172 2.898v-2.898h-.62v3.947h.53zm-5.162-3.378h1.027c.468 0 .745.208.745.587 0 .378-.277.592-.745.592h-1.027v-1.18zm0 3.378v-1.63h1.078c.412 0 .734-.107.964-.327.237-.22.356-.501.356-.845 0-.34-.119-.616-.356-.824-.23-.214-.552-.321-.964-.321h-1.697v3.947h.62zm-6.065-3.378h1.303v3.378h.62v-3.378h1.308v-.57h-3.23v.57zm-3.216 3.451c.445 0 .829-.107 1.156-.316v-.625c-.305.242-.682.36-1.128.36-.423 0-.773-.135-1.054-.41-.277-.278-.418-.633-.418-1.056a1.415 1.415 0 0 1 1.45-1.466c.389 0 .744.101 1.065.31v-.625a2.14 2.14 0 0 0-1.071-.265c-.598 0-1.094.191-1.489.58-.394.383-.591.874-.591 1.466 0 .593.197 1.083.591 1.472.4.383.897.575 1.489.575zm-6.458 0c.468 0 .846-.304 1.134-.919l1.454-3.101h-.665l-.97 2.137-1.167-2.137h-.699l1.545 2.797c-.124.26-.237.434-.344.519a.613.613 0 0 1-.395.124c-.163 0-.31-.034-.45-.096v.586c.129.062.315.09.557.09zm-5.865-.642a3.27 3.27 0 0 0 .411-1.151c.08-.446.119-.998.119-1.658h1.388v2.809h-1.918zm-.468 1.414v-.845h2.99v.845h.585v-1.414h-.57v-3.378h-2.61v.546c0 .728-.05 1.309-.147 1.732-.096.423-.248.79-.457 1.1h-.377v1.414h.586zm-5.425-.845v-1.822h2.06v1.822h.62v-3.947h-.62v1.556H7.27v-1.556h-.62v3.947h.62zm-5.951 0l2.183-2.91v2.91h.62v-3.947H3.58L1.41 36.586v-2.898h-.62v3.947h.53zM43.7 27.309c-.445 0-.71-.215-.71-.582 0-.36.265-.58.71-.58h1.152v1.162H43.7zm-.964 2.215l1.19-1.669h.926v1.669h.619v-3.947h-1.799c-.812 0-1.308.445-1.308 1.122 0 .548.322.959.88 1.088l-1.258 1.737h.75zm-4.797-3.185l.722 1.657h-1.443l.721-1.657zm-1.359 3.185l.423-.981h1.872l.428.98h.665l-1.725-3.968h-.597l-1.725 3.969h.66zm-5.238-3.378h1.066c.412 0 .655.175.655.508s-.243.514-.655.514h-1.066v-1.022zm0 1.568h1.208c.49 0 .772.22.772.61 0 .4-.293.63-.772.63h-1.208v-1.24zm1.32 1.81c.412 0 .734-.101.97-.304.242-.203.36-.473.36-.807 0-.58-.36-.964-.84-1.054.3-.113.525-.406.525-.812 0-.61-.457-.97-1.162-.97h-1.793v3.947h1.94zm-4.864-.513c.383-.394.574-.88.574-1.46s-.19-1.067-.574-1.456c-.384-.394-.863-.59-1.444-.59s-1.06.196-1.444.59c-.377.39-.57.875-.57 1.456 0 .58.193 1.066.57 1.46.383.39.863.586 1.444.586.58 0 1.06-.197 1.444-.586zm-2.425-.411c-.266-.283-.395-.632-.395-1.05 0-.417.13-.766.395-1.043.265-.282.592-.423.981-.423.39 0 .716.141.982.423.265.277.4.626.4 1.044 0 .417-.135.766-.4 1.049a1.31 1.31 0 0 1-.982.417 1.31 1.31 0 0 1-.981-.417zm-5.559-2.454h1.027c.468 0 .745.21.745.587 0 .378-.277.593-.745.593h-1.027v-1.18zm0 3.378v-1.63h1.078c.412 0 .734-.107.964-.326.237-.22.355-.502.355-.846 0-.339-.118-.615-.355-.823-.23-.215-.552-.322-.964-.322h-1.697v3.947h.62zm-4.871-3.158c.429.005.75.118.97.339.22.22.328.49.328.817 0 .328-.108.604-.327.824-.22.22-.542.327-.971.333v-2.313zm-.62 2.313c-.428-.006-.75-.113-.97-.333a1.136 1.136 0 0 1-.322-.824c0-.327.107-.597.322-.817.22-.22.542-.334.97-.339v2.313zm.62.98v-.434c1.32-.034 1.934-.845 1.934-1.703 0-.857-.614-1.668-1.934-1.702v-.372h-.62v.372c-1.32.034-1.928.856-1.928 1.708 0 .463.163.857.496 1.185.332.326.806.495 1.432.512v.434h.62zm-7.663-.135l2.183-2.91v2.91h.62v-3.947h-.541L7.37 28.475v-2.898h-.62v3.947h.53zm-2.741.846v-1.415h-.57v-3.378h-.62v3.378H1.41v-3.378H.79v3.947h3.163v.846h.587z"/></g></svg>',
    restart: '<svg width="18" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M17.475 1.102c-.305-.127-.566-.074-.782.157L15.239 2.7A8.682 8.682 0 0 0 12.505.95a8.427 8.427 0 0 0-3.18-.62 8.352 8.352 0 0 0-3.333.682 8.66 8.66 0 0 0-2.74 1.833 8.67 8.67 0 0 0-1.833 2.74 8.35 8.35 0 0 0-.682 3.332c0 1.163.227 2.273.682 3.332a8.673 8.673 0 0 0 1.833 2.74 8.672 8.672 0 0 0 2.74 1.833 8.352 8.352 0 0 0 3.332.682c1.282 0 2.501-.27 3.656-.811a8.383 8.383 0 0 0 2.952-2.286.364.364 0 0 0 .084-.252.309.309 0 0 0-.106-.229l-1.532-1.543a.43.43 0 0 0-.28-.1c-.119.014-.204.059-.257.134a5.61 5.61 0 0 1-2.001 1.644 5.64 5.64 0 0 1-2.516.58 5.57 5.57 0 0 1-2.22-.452 5.752 5.752 0 0 1-1.827-1.224 5.777 5.777 0 0 1-1.225-1.829A5.568 5.568 0 0 1 3.6 8.918c0-.775.15-1.515.452-2.22a5.756 5.756 0 0 1 1.225-1.827 5.76 5.76 0 0 1 1.828-1.225 5.57 5.57 0 0 1 2.22-.453c1.498 0 2.798.51 3.902 1.532l-1.544 1.543c-.23.224-.283.48-.156.771.127.298.346.448.66.448h5.009a.69.69 0 0 0 .503-.213.688.688 0 0 0 .212-.503V1.762c0-.313-.145-.533-.436-.66z" fill-rule="evenodd"/></svg>',
    next: '<svg width="26" height="20" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><path d="M15.376 0l-2.334 2.333L20.71 10l-7.667 7.667L15.376 20l10-10z" fill-rule="nonzero"/><path d="M.642 8.155h21.715v3.691H.642z"/></g></svg>'
};

/***/ }),
/* 32 */
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
/* 33 */
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
/* 34 */
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
/* 35 */
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
/* 36 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});
//# sourceMappingURL=all.js.map