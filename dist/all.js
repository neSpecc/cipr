(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["SpeccSpecial"] = factory();
	else
		root["SpeccSpecial"] = factory();
})(window, function() {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@codexteam/ajax/dist/main.js":
/*!***************************************************!*\
  !*** ./node_modules/@codexteam/ajax/dist/main.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";(function(e){var r=n(2),o=setTimeout;function i(){}function a(e){if(!(this instanceof a))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],l(e,this)}function u(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,a._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var r;try{r=n(e._value)}catch(e){return void s(t.promise,e)}c(t.promise,r)}else(1===e._state?c:s)(t.promise,e._value)})):e._deferreds.push(t)}function c(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof a)return e._state=3,e._value=t,void f(e);if("function"==typeof n)return void l(function(e,t){return function(){e.apply(t,arguments)}}(n,t),e)}e._state=1,e._value=t,f(e)}catch(t){s(e,t)}}function s(e,t){e._state=2,e._value=t,f(e)}function f(e){2===e._state&&0===e._deferreds.length&&a._immediateFn(function(){e._handled||a._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)u(e,e._deferreds[t]);e._deferreds=null}function l(e,t){var n=!1;try{e(function(e){n||(n=!0,c(t,e))},function(e){n||(n=!0,s(t,e))})}catch(e){if(n)return;n=!0,s(t,e)}}a.prototype.catch=function(e){return this.then(null,e)},a.prototype.then=function(e,t){var n=new this.constructor(i);return u(this,new function(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}(e,t,n)),n},a.prototype.finally=r.a,a.all=function(e){return new a(function(t,n){if(!e||void 0===e.length)throw new TypeError("Promise.all accepts an array");var r=Array.prototype.slice.call(e);if(0===r.length)return t([]);var o=r.length;function i(e,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var u=a.then;if("function"==typeof u)return void u.call(a,function(t){i(e,t)},n)}r[e]=a,0==--o&&t(r)}catch(e){n(e)}}for(var a=0;a<r.length;a++)i(a,r[a])})},a.resolve=function(e){return e&&"object"==typeof e&&e.constructor===a?e:new a(function(t){t(e)})},a.reject=function(e){return new a(function(t,n){n(e)})},a.race=function(e){return new a(function(t,n){for(var r=0,o=e.length;r<o;r++)e[r].then(t,n)})},a._immediateFn="function"==typeof e&&function(t){e(t)}||function(e){o(e,0)},a._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},t.a=a}).call(this,n(5).setImmediate)},function(e,t,n){"use strict";t.a=function(e){var t=this.constructor;return this.then(function(n){return t.resolve(e()).then(function(){return n})},function(n){return t.resolve(e()).then(function(){return t.reject(n)})})}},function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n(4);var o=n(8),i=function(){var e={URLENCODED:"application/x-www-form-urlencoded; charset=utf-8",FORM:"multipart/form-data",JSON:"application/json; charset=utf-8"},t=function(e){return new Promise(function(t,n){e=a(e),e=u(e);var r=window.XMLHttpRequest?new window.XMLHttpRequest:new window.ActiveXObject("Microsoft.XMLHTTP");r.open(e.method,e.url),r.setRequestHeader("X-Requested-With","XMLHttpRequest"),Object.keys(e.headers).forEach(function(t){var n=e.headers[t];r.setRequestHeader(t,n)});var o=e.ratio;r.upload.addEventListener("progress",function(t){var n=Math.round(t.loaded/t.total*100),r=Math.ceil(n*o/100);e.progress(r)},!1),r.addEventListener("progress",function(t){var n=Math.round(t.loaded/t.total*100),r=Math.ceil(n*(100-o)/100)+o;e.progress(r)},!1),r.onreadystatechange=function(){if(4===r.readyState){var e=r.response;try{e=JSON.parse(e)}catch(e){}200===r.status?t(e):n(e)}},r.send(e.data)})},n=function(e){return e.method="POST",t(e)},a=function(t){if(!t.url||"string"!=typeof t.url)throw new Error("Url must be a non-empty string");if(t.method&&"string"!=typeof t.method)throw new Error("`method` must be a string or null");if(t.method=t.method?t.method.toUpperCase():"GET",t.headers&&"object"!==r(t.headers))throw new Error("`headers` must be an object or null");if(t.headers=t.headers||{},t.type&&("string"!=typeof t.type||!Object.values(e).includes(t.type)))throw new Error("`type` must be taken from module's «contentType» library");if(t.progress&&"function"!=typeof t.progress)throw new Error("`progress` must be a function or null");if(t.progress=t.progress||function(e){},t.beforeSend=t.beforeSend||function(e){},t.ratio&&"number"!=typeof t.ratio)throw new Error("`ratio` must be a number");if(t.ratio<0||t.ratio>100)throw new Error("`ratio` must be in a 0-100 interval");if(t.ratio=t.ratio||90,t.accept&&"string"!=typeof t.accept)throw new Error("`accept` must be a string with a list of allowed mime-types");if(t.accept=t.accept||"*/*",t.multiple&&"boolean"!=typeof t.multiple)throw new Error("`multiple` must be a true or false");if(t.multiple=t.multiple||!1,t.fieldName&&"string"!=typeof t.fieldName)throw new Error("`fieldName` must be a string");return t.fieldName=t.fieldName||"files",t},u=function(t){switch(t.method){case"GET":var n=c(t.data,e.URLENCODED);delete t.data,t.url=/\?/.test(t.url)?t.url+"&"+n:t.url+"?"+n;break;case"POST":case"PUT":case"DELETE":case"UPDATE":var r=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).type||e.JSON}(t);(o.isFormData(t.data)||o.isFormElement(t.data))&&(r=e.FORM),t.data=c(t.data,r),r!==i.contentType.FORM&&(t.headers["content-type"]=r)}return t},c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch(arguments.length>1?arguments[1]:void 0){case e.URLENCODED:return o.urlEncode(t);case e.JSON:return o.jsonEncode(t);case e.FORM:return o.formEncode(t);default:return t}};return{contentType:e,request:t,get:function(e){return e.method="GET",t(e)},post:n,transport:function(e){return e=a(e),o.transport(e).then(function(t){return o.isObject(e.data)&&Object.keys(e.data).forEach(function(n){var r=e.data[n];t.append(n,r)}),e.data=t,n(e)})}}}();e.exports=i},function(e,t,n){"use strict";n.r(t);var r=n(1);window.Promise=window.Promise||r.a},function(e,t,n){(function(e){var r=void 0!==e&&e||"undefined"!=typeof self&&self||window,o=Function.prototype.apply;function i(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new i(o.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new i(o.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(6),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(0))},function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var r,o=1,i={},a=!1,u=e.document,c=Object.getPrototypeOf&&Object.getPrototypeOf(e);c=c&&c.setTimeout?c:e,"[object process]"==={}.toString.call(e.process)?r=function(e){t.nextTick(function(){f(e)})}:function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?function(){var t="setImmediate$"+Math.random()+"$",n=function(n){n.source===e&&"string"==typeof n.data&&0===n.data.indexOf(t)&&f(+n.data.slice(t.length))};e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n),r=function(n){e.postMessage(t+n,"*")}}():e.MessageChannel?function(){var e=new MessageChannel;e.port1.onmessage=function(e){f(e.data)},r=function(t){e.port2.postMessage(t)}}():u&&"onreadystatechange"in u.createElement("script")?function(){var e=u.documentElement;r=function(t){var n=u.createElement("script");n.onreadystatechange=function(){f(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}():r=function(e){setTimeout(f,0,e)},c.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var a={callback:e,args:t};return i[o]=a,r(o),o++},c.clearImmediate=s}function s(e){delete i[e]}function f(e){if(a)setTimeout(f,0,e);else{var t=i[e];if(t){a=!0;try{!function(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}(t)}finally{s(e),a=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(0),n(7))},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c,s=[],f=!1,l=-1;function d(){f&&c&&(f=!1,c.length?s=c.concat(s):l=-1,s.length&&p())}function p(){if(!f){var e=u(d);f=!0;for(var t=s.length;t;){for(c=s,s=[];++l<t;)c&&c[l].run();l=-1,t=s.length}c=null,f=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new m(e,t)),1!==s.length||f||u(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=n(9);e.exports=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(e,t,n){t&&r(e.prototype,t),n&&r(e,n)}(e,null,[{key:"urlEncode",value:function(e){return o(e)}},{key:"jsonEncode",value:function(e){return JSON.stringify(e)}},{key:"formEncode",value:function(e){if(this.isFormData(e))return e;if(this.isFormElement(e))return new FormData(e);if(this.isObject(e)){var t=new FormData;return Object.keys(e).forEach(function(n){var r=e[n];t.append(n,r)}),t}throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement")}},{key:"isObject",value:function(e){return"[object Object]"===Object.prototype.toString.call(e)}},{key:"isFormData",value:function(e){return e instanceof FormData}},{key:"isFormElement",value:function(e){return e instanceof HTMLFormElement}},{key:"transport",value:function(e){return new Promise(function(t,n){var r=document.createElement("INPUT");r.type="file",e.multiple&&r.setAttribute("multiple","multiple"),e.accept&&r.setAttribute("accept",e.accept),r.addEventListener("change",function(n){for(var r=n.target.files,o=new FormData,i=0;i<r.length;i++)o.append(e.fieldName,r[i],r[i].name);e.beforeSend(r),t(o)},!1),r.click()})}}]),e}()},function(e,t){var n=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,escape).replace(/%20/g,"+")},r=function(e,t,o,i){return t=t||null,o=o||"&",i=i||null,e?function(e){for(var t=new Array,n=0;n<e.length;n++)e[n]&&t.push(e[n]);return t}(Object.keys(e).map(function(a){var u,c=a;if(i&&(c=i+"["+c+"]"),"object"==typeof e[a]&&null!==e[a])u=r(e[a],null,o,c);else{t&&(c=function(e){return!isNaN(parseFloat(e))&&isFinite(e)}(c)?t+Number(c):c);var s=e[a];s=(s=0===(s=!1===(s=!0===s?"1":s)?"0":s)?"0":s)||"",u=n(c)+"="+n(s)}return u})).join(o).replace(/[!'()*]/g,""):""};e.exports=r}])});

/***/ }),

/***/ "./node_modules/cmtt-likely/source/button.js":
/*!***************************************************!*\
  !*** ./node_modules/cmtt-likely/source/button.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var services = __webpack_require__(/*! ./services */ "./node_modules/cmtt-likely/source/services/index.js"),
    config = __webpack_require__(/*! ./config */ "./node_modules/cmtt-likely/source/config.js"),
    fetch = __webpack_require__(/*! ./fetch */ "./node_modules/cmtt-likely/source/fetch.js"),
    utils = __webpack_require__(/*! ./utils */ "./node_modules/cmtt-likely/source/utils.js"),
    dom = __webpack_require__(/*! ./dom */ "./node_modules/cmtt-likely/source/dom.js"),
    storage = __webpack_require__(/*! ./storage */ "./node_modules/cmtt-likely/source/storage.js");

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

/***/ "./node_modules/cmtt-likely/source/config.js":
/*!***************************************************!*\
  !*** ./node_modules/cmtt-likely/source/config.js ***!
  \***************************************************/
/*! no static exports found */
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

/***/ "./node_modules/cmtt-likely/source/dom.js":
/*!************************************************!*\
  !*** ./node_modules/cmtt-likely/source/dom.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var config = __webpack_require__(/*! ./config */ "./node_modules/cmtt-likely/source/config.js");

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

/***/ "./node_modules/cmtt-likely/source/factory.js":
/*!****************************************************!*\
  !*** ./node_modules/cmtt-likely/source/factory.js ***!
  \****************************************************/
/*! no static exports found */
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

/***/ "./node_modules/cmtt-likely/source/fetch.js":
/*!**************************************************!*\
  !*** ./node_modules/cmtt-likely/source/fetch.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var services = __webpack_require__(/*! ./services */ "./node_modules/cmtt-likely/source/services/index.js"),
    Factory  = __webpack_require__(/*! ./factory */ "./node_modules/cmtt-likely/source/factory.js"),
    utils    = __webpack_require__(/*! ./utils */ "./node_modules/cmtt-likely/source/utils.js"),
    dom      = __webpack_require__(/*! ./dom */ "./node_modules/cmtt-likely/source/dom.js");

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

/***/ "./node_modules/cmtt-likely/source/index.js":
/*!**************************************************!*\
  !*** ./node_modules/cmtt-likely/source/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 'use strict';

var Likely = __webpack_require__(/*! ./widget */ "./node_modules/cmtt-likely/source/widget.js"),
    config = __webpack_require__(/*! ./config */ "./node_modules/cmtt-likely/source/config.js"),
    utils = __webpack_require__(/*! ./utils */ "./node_modules/cmtt-likely/source/utils.js"),
    dom = __webpack_require__(/*! ./dom */ "./node_modules/cmtt-likely/source/dom.js");

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

/***/ "./node_modules/cmtt-likely/source/service.js":
/*!****************************************************!*\
  !*** ./node_modules/cmtt-likely/source/service.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dom = __webpack_require__(/*! ./dom */ "./node_modules/cmtt-likely/source/dom.js");

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

/***/ "./node_modules/cmtt-likely/source/services/email.js":
/*!***********************************************************!*\
  !*** ./node_modules/cmtt-likely/source/services/email.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * E-mail service provider
 */

var config = __webpack_require__(/*! ../config */ "./node_modules/cmtt-likely/source/config.js");

var email = {
    popupUrl: 'mailto:?subject={title}&body={url}',
    popupWidth: 0,
    popupHeight: 0
};

module.exports = email;

/***/ }),

/***/ "./node_modules/cmtt-likely/source/services/facebook.js":
/*!**************************************************************!*\
  !*** ./node_modules/cmtt-likely/source/services/facebook.js ***!
  \**************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/cmtt-likely/source/services/gplus.js":
/*!***********************************************************!*\
  !*** ./node_modules/cmtt-likely/source/services/gplus.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Google+ service provider
 */

var config = __webpack_require__(/*! ../config */ "./node_modules/cmtt-likely/source/config.js"),
    utils  = __webpack_require__(/*! ../utils */ "./node_modules/cmtt-likely/source/utils.js"),
    dom    = __webpack_require__(/*! ../dom */ "./node_modules/cmtt-likely/source/dom.js");

var gplus = {
    gid: 0,
    promises: {},
    popupUrl: 'https://plus.google.com/share?url={url}',
    popupWidth: 700,
    popupHeight: 500
};

module.exports = gplus;

/***/ }),

/***/ "./node_modules/cmtt-likely/source/services/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/cmtt-likely/source/services/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Social network services
 */

var Service = __webpack_require__(/*! ../service */ "./node_modules/cmtt-likely/source/service.js"),
    utils   = __webpack_require__(/*! ../utils */ "./node_modules/cmtt-likely/source/utils.js"),
    svg     = __webpack_require__(/*! ../svg.json */ "./node_modules/cmtt-likely/source/svg.json");

var services = {
    odnoklassniki: __webpack_require__(/*! ./odnoklassniki */ "./node_modules/cmtt-likely/source/services/odnoklassniki.js"),
    vkontakte:     __webpack_require__(/*! ./vk */ "./node_modules/cmtt-likely/source/services/vk.js"),
    facebook:      __webpack_require__(/*! ./facebook */ "./node_modules/cmtt-likely/source/services/facebook.js"),
    twitter:       __webpack_require__(/*! ./twitter */ "./node_modules/cmtt-likely/source/services/twitter.js"),
    gplus:         __webpack_require__(/*! ./gplus */ "./node_modules/cmtt-likely/source/services/gplus.js"),
    pocket:        __webpack_require__(/*! ./pocket */ "./node_modules/cmtt-likely/source/services/pocket.js"),
    telegram:      __webpack_require__(/*! ./telegram */ "./node_modules/cmtt-likely/source/services/telegram.js"),
    whatsapp:      __webpack_require__(/*! ./whatsapp */ "./node_modules/cmtt-likely/source/services/whatsapp.js"),
    viber:         __webpack_require__(/*! ./viber */ "./node_modules/cmtt-likely/source/services/viber.js"),
    email:         __webpack_require__(/*! ./email */ "./node_modules/cmtt-likely/source/services/email.js"),
    more:          __webpack_require__(/*! ./more */ "./node_modules/cmtt-likely/source/services/more.js")
};

utils.each(services, function (service, key) {
    Service(service);

    service.svgi = svg[key];
    service.name = key;
});

module.exports = services;

/***/ }),

/***/ "./node_modules/cmtt-likely/source/services/more.js":
/*!**********************************************************!*\
  !*** ./node_modules/cmtt-likely/source/services/more.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var config = __webpack_require__(/*! ../config */ "./node_modules/cmtt-likely/source/config.js");

module.exports = {
	parent: config.name,
    className: config.name + '--expanded'
};

/***/ }),

/***/ "./node_modules/cmtt-likely/source/services/odnoklassniki.js":
/*!*******************************************************************!*\
  !*** ./node_modules/cmtt-likely/source/services/odnoklassniki.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Odnoklassniki service provider
 */

var config = __webpack_require__(/*! ../config */ "./node_modules/cmtt-likely/source/config.js"),
    utils  = __webpack_require__(/*! ../utils */ "./node_modules/cmtt-likely/source/utils.js"),
    dom    = __webpack_require__(/*! ../dom */ "./node_modules/cmtt-likely/source/dom.js");

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

/***/ "./node_modules/cmtt-likely/source/services/pocket.js":
/*!************************************************************!*\
  !*** ./node_modules/cmtt-likely/source/services/pocket.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Pocket service provider
 */

var config = __webpack_require__(/*! ../config */ "./node_modules/cmtt-likely/source/config.js");

var pocket = {
    popupUrl: config.protocol + '//getpocket.com/save?url={url}&format=json&callback=?',
    popupWidth: 600,
    popupHeight: 300
};

module.exports = pocket;

/***/ }),

/***/ "./node_modules/cmtt-likely/source/services/telegram.js":
/*!**************************************************************!*\
  !*** ./node_modules/cmtt-likely/source/services/telegram.js ***!
  \**************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/cmtt-likely/source/services/twitter.js":
/*!*************************************************************!*\
  !*** ./node_modules/cmtt-likely/source/services/twitter.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Twitter service provider
 */

var config = __webpack_require__(/*! ../config */ "./node_modules/cmtt-likely/source/config.js");

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

/***/ "./node_modules/cmtt-likely/source/services/viber.js":
/*!***********************************************************!*\
  !*** ./node_modules/cmtt-likely/source/services/viber.js ***!
  \***********************************************************/
/*! no static exports found */
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

/***/ "./node_modules/cmtt-likely/source/services/vk.js":
/*!********************************************************!*\
  !*** ./node_modules/cmtt-likely/source/services/vk.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Vkontakte service provider
 */

var config = __webpack_require__(/*! ../config */ "./node_modules/cmtt-likely/source/config.js"),
    utils  = __webpack_require__(/*! ../utils */ "./node_modules/cmtt-likely/source/utils.js"),
    dom    = __webpack_require__(/*! ../dom */ "./node_modules/cmtt-likely/source/dom.js");

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

/***/ "./node_modules/cmtt-likely/source/services/whatsapp.js":
/*!**************************************************************!*\
  !*** ./node_modules/cmtt-likely/source/services/whatsapp.js ***!
  \**************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/cmtt-likely/source/storage.js":
/*!****************************************************!*\
  !*** ./node_modules/cmtt-likely/source/storage.js ***!
  \****************************************************/
/*! no static exports found */
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

/***/ "./node_modules/cmtt-likely/source/svg.json":
/*!**************************************************!*\
  !*** ./node_modules/cmtt-likely/source/svg.json ***!
  \**************************************************/
/*! exports provided: facebook, twitter, vkontakte, gplus, odnoklassniki, pocket, telegram, whatsapp, viber, email, more, default */
/***/ (function(module) {

module.exports = {"facebook":"5.9 16h3.3V8h2.2l.3-2.8H9.2V3.8c0-.7.1-1.1 1.1-1.1h1.4V0H9.5C6.9 0 5.9 1.3 5.9 3.6v1.7H4.3V8H6v8","twitter":"15.96 3.42c-.04.153-.144.31-.237.414l-.118.058v.118l-.59.532-.237.295c-.05.036-.398.21-.413.237V6.49h-.06v.473h-.058v.294h-.058v.296h-.06v.235h-.06v.237h-.058c-.1.355-.197.71-.295 1.064h-.06v.116h-.06c-.02.1-.04.197-.058.296h-.06c-.04.118-.08.237-.118.355h-.06c-.038.118-.078.236-.117.353l-.118.06-.06.235-.117.06v.116l-.118.06v.12h-.06c-.02.057-.038.117-.058.175l-.118.06v.117c-.06.04-.118.08-.177.118v.118l-.237.177v.118l-.59.53-.532.592h-.117c-.06.078-.118.156-.177.236l-.177.06-.06.117h-.118l-.06.118-.176.06v.058h-.118l-.06.118-.353.12-.06.117c-.078.02-.156.04-.235.058v.06c-.118.038-.236.078-.354.118v.058H8.76v.06h-.12v.06h-.176v.058h-.118v.06H8.17v.058H7.99v.06l-.413.058v.06h-.237c-.667.22-1.455.293-2.36.293h-.886v-.058h-.53v-.06H3.27v-.06h-.295v-.06H2.68v-.057h-.177v-.06h-.236v-.058H2.09v-.06h-.177v-.058h-.177v-.06H1.56v-.058h-.12v-.06l-.294-.06v-.057c-.118-.04-.236-.08-.355-.118v-.06H.674v-.058H.555v-.06H.437v-.058H.32l-.06-.12H.142v-.058c-.13-.08-.083.026-.177-.118H1.56v-.06c.294-.04.59-.077.884-.117v-.06h.177v-.058h.237v-.06h.118v-.06h.177v-.057h.118v-.06h.177v-.058l.236-.06v-.058l.236-.06c.02-.038.04-.078.058-.117l.237-.06c.02-.04.04-.077.058-.117h.118l.06-.118h.118c.036-.025.047-.078.118-.118V12.1c-1.02-.08-1.84-.54-2.303-1.183-.08-.058-.157-.118-.236-.176v-.117l-.118-.06v-.117c-.115-.202-.268-.355-.296-.65.453.004.987.008 1.354-.06v-.06c-.254-.008-.47-.08-.65-.175v-.058H2.32v-.06c-.08-.02-.157-.04-.236-.058l-.06-.118h-.117l-.118-.178h-.12c-.077-.098-.156-.196-.235-.294l-.118-.06v-.117l-.177-.12c-.35-.502-.6-1.15-.59-2.006h.06c.204.234.948.377 1.357.415v-.06c-.257-.118-.676-.54-.827-.768V5.9l-.118-.06c-.04-.117-.08-.236-.118-.354h-.06v-.118H.787c-.04-.196-.08-.394-.118-.59-.06-.19-.206-.697-.118-1.005h.06V3.36h.058v-.177h.06v-.177h.057V2.83h.06c.04-.118.078-.236.117-.355h.118v.06c.12.097.237.196.355.295v.118l.118.058c.08.098.157.197.236.295l.176.06.354.413h.118l.177.236h.118l.06.117h.117c.04.06.08.118.118.177h.118l.06.118.235.06.06.117.356.12.06.117.53.176v.06h.118v.058l.236.06v.06c.118.02.236.04.355.058v.06h.177v.058h.177v.06h.176v.058h.236v.06l.472.057v.06l1.417.18v-.237c-.1-.112-.058-.442-.057-.65 0-.573.15-.99.354-1.358v-.117l.118-.06.06-.235.176-.118v-.118c.14-.118.276-.236.414-.355l.06-.117h.117l.12-.177.235-.06.06-.117h.117v-.058H9.7v-.058h.177v-.06h.177v-.058h.177v-.06h.296v-.058h1.063v.058h.294v.06h.177v.058h.178v.06h.177v.058h.118v.06h.118l.06.117c.08.018.158.038.236.058.04.06.08.118.118.177h.118l.06.117c.142.133.193.163.472.178.136-.12.283-.05.472-.118v-.06h.177v-.058h.177v-.06l.236-.058v-.06h.177l.59-.352v.176h-.058l-.06.295h-.058v.117h-.06v.118l-.117.06v.118l-.177.118v.117l-.118.06-.354.412h-.117l-.177.236h.06c.13-.112.402-.053.59-.117l1.063-.353","vkontakte":"7.8 12.4h.9s.3 0 .4-.2c.1-.1.1-.4.1-.4s0-1.3.6-1.4c.6-.2 1.3 1.2 2.1 1.7.6.4 1 .3 1 .3H15s1.1-.1.6-.9c0-.1-.3-.6-1.6-1.8-1.3-1.2-1.1-1 .4-3.1 1-1.3 1.3-2.1 1.2-2.4.1-.3-.6-.3-.6-.3h-2.4s-.2 0-.3.1c-.1.1-.2.3-.2.3s-.4 1-.9 1.8c-1 1.8-1.5 1.9-1.6 1.8-.4-.3-.3-1-.3-1.6 0-1.7.3-2.4-.5-2.6-.3-.1-.4-.2-1.1-.2-.8 0-1.5 0-2 .2-.2.2-.4.5-.3.5.2 0 .5.1.7.3.2.3.2 1.1.2 1.1s.1 2-.3 2.3c-.3.1-.7-.2-1.7-1.8-.5-.8-.8-1.8-.8-1.8l-.2-.2-.4-.2H.7s-.3 0-.5.2c-.1.1 0 .4 0 .4S2 8.6 4 10.7c1.8 1.8 3.8 1.7 3.8 1.7","gplus":"8,6.5v3h4.291c-0.526,2.01-2.093,3.476-4.315,3.476C5.228,12.976,3,10.748,3,8c0-2.748,2.228-4.976,4.976-4.976c1.442,0,2.606,0.623,3.397,1.603L13.52,2.48C12.192,0.955,10.276,0,8,0C3.582,0,0,3.582,0,8s3.582,8,8,8s7.5-3.582,7.5-8V6.5H8","odnoklassniki":"8 2.6c.9 0 1.7.7 1.7 1.7C9.7 5.2 9 6 8 6c-.9 0-1.7-.7-1.7-1.7S7.1 2.6 8 2.6zm0 5.7c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm1.6 3.2c.8-.2 1.6-.5 2.3-1 .5-.3.7-1.1.4-1.6-.3-.6-1.1-.7-1.6-.4-1.6 1-3.8 1-5.4 0-.6-.3-1.3-.1-1.6.4-.4.6-.2 1.3.3 1.7.7.5 1.5.8 2.3 1l-2.2 2.2c-.5.5-.5 1.2 0 1.7.2.2.5.3.8.3.3 0 .6-.1.8-.3L8 13.2l2.2 2.2c.5.5 1.2.5 1.7 0s.5-1.2 0-1.7l-2.3-2.2","pocket":"12.533 6.864L8.77 10.4c-.213.2-.486.3-.76.3-.273 0-.547-.1-.76-.3L3.488 6.865c-.437-.41-.45-1.09-.032-1.52.42-.428 1.114-.443 1.55-.032l3.006 2.823 3.004-2.823c.438-.41 1.132-.396 1.55.032.42.43.406 1.11-.03 1.52zm3.388-4.928c-.207-.56-.755-.936-1.363-.936H1.45C.854 1 .31 1.368.096 1.917.032 2.08 0 2.25 0 2.422v4.73l.055.94c.232 2.14 1.366 4.01 3.12 5.314.03.024.063.047.094.07l.02.013c.94.673 1.992 1.13 3.128 1.353.524.104 1.06.157 1.592.157.492 0 .986-.045 1.472-.133.058-.01.116-.022.175-.034.016-.003.033-.01.05-.018 1.088-.233 2.098-.677 3.003-1.326l.02-.015c.032-.022.064-.045.096-.07 1.753-1.303 2.887-3.173 3.12-5.312l.054-.94v-4.73c0-.165-.02-.327-.08-.487","telegram":"12.4 4.2L6.6 9.6c-.2.2-.3.4-.4.7L6 11.8c0 .2-.3.2-.3 0l-.8-2.6c-.1-.4.1-.7.3-.8l7-4.3c.2-.2.4 0 .2.1zm2.9-3L.5 6.9c-.4.1-.4.7 0 .8L4.1 9l1.4 4.5c.1.3.4.4.7.2l2-1.6c.2-.2.5-.2.7 0l3.6 2.6c.3.2.6 0 .7-.3l2.6-12.8c.1-.2-.2-.5-.5-.4","whatsapp":"15.8 7.8c0 4.2-3.4 7.6-7.6 7.6-1.3 0-2.6-.3-3.7-.9L.3 15.8l1.4-4.1C1 10.6.6 9.2.6 7.8.6 3.6 4 .2 8.2.2c4.2 0 7.6 3.4 7.6 7.6M8.1 1.4c-3.5 0-6.4 2.9-6.4 6.4 0 1.4.5 2.7 1.2 3.7l-.8 2.4 2.5-.8c1 .7 2.2 1.1 3.5 1.1 3.5 0 6.4-2.9 6.4-6.4.1-3.5-2.8-6.4-6.4-6.4M12 9.5c0-.1-.2-.1-.4-.2s-1.1-.5-1.3-.6c-.2-.1-.3-.1-.4.1-.1.2-.4.6-.6.7-.1.1-.2.1-.4 0-.1 0-.8-.2-1.5-.8-.6-.5-.9-1.1-1-1.3-.1-.2 0-.3.1-.4l.3-.3c.1-.1.1-.2.2-.3 0-.2 0-.3-.1-.4 0-.1-.4-1-.6-1.4-.1-.3-.3-.2-.4-.2h-.4c-.1 0-.3 0-.5.2-.1.2-.6.6-.6 1.5s.7 1.8.8 1.9c.1.1 1.3 2.1 3.2 2.8 1.9.7 1.9.5 2.2.5.3 0 1.1-.4 1.3-.9.1-.4.1-.8.1-.9","viber":"13.7 6.7c0 .3.1.7-.3.8-.6.1-.5-.4-.5-.8-.4-2.3-1.2-3.2-3.5-3.7-.4-.1-.9 0-.8-.5.1-.5.5-.4.9-.3 2.3.3 4.2 2.3 4.2 4.5zM8.8 1.2c3.7.6 5.5 2.4 5.9 6.1 0 .3-.1.9.4.9s.4-.5.4-.9c0-3.6-3.1-6.8-6.7-7-.2.1-.8-.1-.8.5 0 .4.4.3.8.4zm5.7 10.2c-.5-.4-1-.7-1.5-1.1-1-.7-1.9-.7-2.6.4-.4.6-1 .6-1.6.4-1.7-.8-2.9-1.9-3.7-3.6-.3-.7-.3-1.4.5-1.9.4-.3.8-.6.8-1.2 0-.8-2-3.5-2.7-3.7-.3-.1-.6-.1-1 0C.9 1.2.2 2.7.9 4.4c2.1 5.2 5.8 8.8 11 11 .3.1.6.2.8.2 1.2 0 2.5-1.1 2.9-2.2.3-1-.5-1.5-1.1-2zM9.7 4c-.2 0-.5 0-.6.3-.1.4.2.5.5.5.9.2 1.4.7 1.5 1.7 0 .3.2.5.4.4.3 0 .4-.3.4-.6 0-1.1-1.2-2.3-2.2-2.3","email":"12.7 1c1 .5 1.8 1.2 2.3 2.2.5.9.8 1.9.8 3.1 0 .9-.1 1.8-.5 2.7-.3.9-.8 1.6-1.4 2.2-.6.6-1.4.9-2.3.9-.6 0-1.1-.2-1.5-.5-.4-.3-.6-.7-.7-1.2-.6 1.1-1.5 1.6-2.5 1.6-.8 0-1.5-.3-1.9-.8-.5-.6-.7-1.3-.7-2.2 0-.8.1-1.6.4-2.5S5.5 5 6.1 4.4c.7-.6 1.5-.8 2.6-.8.5 0 1 .1 1.4.2.5.1.9.3 1.3.6l-.7 4.9v.3c0 .2 0 .4.1.5.1.1.3.2.5.2.4 0 .8-.2 1.1-.7.3-.4.5-1 .7-1.6.1-.7.2-1.3.2-1.9 0-1.3-.4-2.3-1.1-3-.8-.7-1.9-1-3.4-1s-2.7.4-3.7 1.1c-.9.7-1.6 1.6-2 2.6S2.6 7.9 2.6 9c0 .9.2 1.8.6 2.5.4.7 1 1.3 1.7 1.7.7.4 1.7.6 2.7.6.5 0 1-.1 1.6-.2.6-.1 1.1-.3 1.5-.4l.4 1.9c-.6.2-1.2.4-1.8.5-.7.1-1.3.2-1.9.2-1.4 0-2.7-.3-3.8-.9s-1.9-1.4-2.5-2.4S.2 10.3.2 9c0-1.3.3-2.7 1-4 .6-1.4 1.6-2.5 3-3.4C5.5.7 7.2.2 9.2.2c1.3 0 2.5.3 3.5.8zm-4 8.4l.6-3.9c-.3-.1-.5-.2-.7-.2-.7 0-1.2.4-1.5 1.2-.3.8-.5 1.7-.5 2.6 0 .8.3 1.2.8 1.2s.9-.3 1.3-.9","more":"14.725 6.667H9.333V1.275C9.333.57 8.738 0 8 0S6.667.57 6.667 1.275v5.392H1.275C.57 6.667 0 7.262 0 8s.57 1.334 1.275 1.334h5.392v5.393C6.667 15.43 7.262 16 8 16s1.333-.57 1.333-1.273V9.334h5.392C15.43 9.334 16 8.738 16 8s-.57-1.333-1.275-1.333"};

/***/ }),

/***/ "./node_modules/cmtt-likely/source/utils.js":
/*!**************************************************!*\
  !*** ./node_modules/cmtt-likely/source/utils.js ***!
  \**************************************************/
/*! no static exports found */
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

/***/ "./node_modules/cmtt-likely/source/widget.js":
/*!***************************************************!*\
  !*** ./node_modules/cmtt-likely/source/widget.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Button = __webpack_require__(/*! ./button */ "./node_modules/cmtt-likely/source/button.js");

var services = __webpack_require__(/*! ./services */ "./node_modules/cmtt-likely/source/services/index.js"),
    config   = __webpack_require__(/*! ./config */ "./node_modules/cmtt-likely/source/config.js"),
    utils = __webpack_require__(/*! ./utils */ "./node_modules/cmtt-likely/source/utils.js"),
    dom = __webpack_require__(/*! ./dom */ "./node_modules/cmtt-likely/source/dom.js"),
    storage = __webpack_require__(/*! ./storage */ "./node_modules/cmtt-likely/source/storage.js");

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

/***/ "./src/css/app.pcss":
/*!**************************!*\
  !*** ./src/css/app.pcss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/js/auth.js":
/*!************************!*\
  !*** ./src/js/auth.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Auth =
/*#__PURE__*/
function () {
  /**
   * @param {string} url - /auth/vk
   * @param callback  - callback that will be called after auth
   */
  function Auth(url, callback) {
    var _this = this;

    _classCallCheck(this, Auth);

    this.url = url;
    this.callback = callback;
    window.addEventListener('storage', function () {
      _this.storageChangeHandler();
    });
    this.open();
  }
  /**
   * Open auth popup
   */


  _createClass(Auth, [{
    key: "open",
    value: function open() {
      var left = window.screen.width / 2 - 800 / 2;
      var top = window.screen.height / 2 - 570 / 2;
      window.localStorage.removeItem('logged_in');
      console.log('now will open');
      window.open(this.url, 'displayWindow', "width=720,height=440,left=".concat(left, ",top=").concat(top, ",location=no,directories=no,status=no,toolbar=no,menubar=no"));
    }
    /**
     * Watch for local storage changing
     **/

  }, {
    key: "storageChangeHandler",
    value: function storageChangeHandler() {
      /** Если появился ключ, означающий успешную авторизацию... */
      if (parseInt(window.localStorage.logged_in) === 1) {
        window.localStorage.removeItem('logged_in');
        this.callback();
      }
      /** Если появился ключ, означающий проваленную авторизацию, делаем что-то (если нужно) */


      if (window.localStorage.auth_error) {
        console.log('Auth error', window.localStorage.auth_error);
        window.localStorage.removeItem('auth_error');
      }
    }
  }]);

  return Auth;
}();

exports.default = Auth;
;

/***/ }),

/***/ "./src/js/base.js":
/*!************************!*\
  !*** ./src/js/base.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var Analytics = _interopRequireWildcard(__webpack_require__(/*! ./lib/analytics */ "./src/js/lib/analytics.js"));

var _preloader = _interopRequireDefault(__webpack_require__(/*! ./lib/preloader */ "./src/js/lib/preloader.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Base special constructor with common methods
 */
var BaseSpecial =
/*#__PURE__*/
function () {
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

    this.preloader = new _preloader.default();
  }
  /**
     * Save custom params
     * @param {Object} params - params object with custom values
     */


  _createClass(BaseSpecial, [{
    key: "saveParams",
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
    key: "loadStyles",
    value: function loadStyles(path) {
      return new Promise(function (resolve) {
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
    key: "addEventListeners",
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
    key: "defaultEventHandler",
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

/***/ "./src/js/config.js":
/*!**************************!*\
  !*** ./src/js/config.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  name: 'SpeccSpecial',
  analyticsCategory: 'Battlefield V',
  sendPageview: false,
  listenedEvents: ['click']
};

/***/ }),

/***/ "./src/js/data.js":
/*!************************!*\
  !*** ./src/js/data.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  title: "\n    <span class=\"intro-logo\"></span>\n    <br/>\n    \u2014 \u0414\u0415\u0428\u0418\u0424\u0420\u041E\u0412\u041A\u0410 \u2014\n  ",
  task: 'Select correct answer',
  intro: "\n    \u041A \u0432\u044B\u0445\u043E\u0434\u0443 <b>Battlefield V</b> \u043C\u044B \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u043B\u0438 \u043A\u0432\u0435\u0441\u0442, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u0432\u044B \u043F\u0440\u0438\u043C\u0435\u0440\u0438\u0442\u0435 \u043D\u0430 \u0441\u0435\u0431\u044F \u0440\u043E\u043B\u044C \u043A\u0440\u0438\u043F\u0442\u043E\u0433\u0440\u0430\u0444\u0430 \u0432\u0440\u0435\u043C\u0451\u043D \u0412\u0442\u043E\u0440\u043E\u0439 \u043C\u0438\u0440\u043E\u0432\u043E\u0439. \u0412\u0430\u0448\u0430 \u0437\u0430\u0434\u0430\u0447\u0430 \u2014 \u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043E\u0432\u0430\u0442\u044C \u0432\u0441\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u043D\u0430\u0446\u0438\u0441\u0442\u043E\u0432 \u0438 \u043F\u0440\u0438\u043D\u044F\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043C\u043E\u0447\u044C \u0432\u044B\u0438\u0433\u0440\u0430\u0442\u044C \u0432\u043E\u0439\u043D\u0443.\n    <div class=\"intro-prizes\">\n      <div class=\"intro-prizes__image\">\n        <img src=\"https://leonardo.osnova.io/b31cbabd-7a1e-a48d-6b62-6dc1e4bded00\" alt=\"\">\n      </div>\n      <div class=\"intro-prizes__text\">\n        \u041A\u0440\u0438\u043F\u0442\u043E\u0433\u0440\u0430\u0444\u044B, \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u043E\u0442\u0432\u0435\u0442\u0438\u0432\u0448\u0438\u0435 \u043D\u0430 \u0432\u0441\u0435 \u0441\u0435\u043C\u044C \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432, \u043F\u043E\u043B\u0443\u0447\u0430\u0442 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043F\u043E\u0443\u0447\u0430\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0432 \u0440\u043E\u0437\u044B\u0433\u0440\u044B\u0448\u0435 \u0433\u043B\u0430\u0432\u043D\u043E\u0433\u043E \u043F\u0440\u0438\u0437\u0430, <span class=\"clickable\" data-click=\"showPrize\">\u043A\u0430\u0441\u0442\u043E\u043C\u043D\u043E\u0433\u043E \u0438\u0433\u0440\u043E\u0432\u043E\u0433\u043E \u041F\u041A Battlefield\u2122 V</span> \u043D\u0430 \u0431\u0430\u0437\u0435 NVIDIA GEFORCE RTX 2080 Ti.\n      </div>\n    </div>\n  ",
  introduction: "\u0412\u044B \u2013 \u043E\u0444\u0438\u0446\u0435\u0440 \u0431\u0440\u0438\u0442\u0430\u043D\u0441\u043A\u043E\u0439 \u0440\u0430\u0437\u0432\u0435\u0434\u043A\u0438, \u043D\u043E \u043D\u0435 \u0438\u0437 \u0442\u0435\u0445, \u0447\u0442\u043E \u0443\u0447\u0438\u043D\u044F\u044E\u0442 \u0434\u0438\u0432\u0435\u0440\u0441\u0438\u0438 \u0432\u043E \u0432\u0440\u0430\u0436\u0435\u0441\u043A\u043E\u043C \u0442\u044B\u043B\u0443 \u0438\u043B\u0438 \u0432\u043D\u0435\u0434\u0440\u044F\u044E\u0442\u0441\u044F \u0432 \u0432\u044B\u0441\u0448\u0438\u0435 \u044D\u0448\u0435\u043B\u043E\u043D\u044B \u0432\u043B\u0430\u0441\u0442\u0438. \u0412\u0430\u0448 \u043E\u0442\u0434\u0435\u043B \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u043E \u0438\u0437\u0443\u0447\u0430\u0435\u0442 \u0434\u0435\u0441\u044F\u0442\u043A\u0438 \u0438 \u0441\u043E\u0442\u043D\u0438 \u043F\u0435\u0440\u0435\u0445\u0432\u0430\u0447\u0435\u043D\u043D\u044B\u0445 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439, \u0441\u0440\u0435\u0434\u0438 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043A\u0430\u043A \u0440\u0443\u0442\u0438\u043D\u043D\u044B\u0435 \u0434\u043E\u043A\u043B\u0430\u0434\u044B \u043E \u0441\u043D\u0430\u0431\u0436\u0435\u043D\u0438\u0438, \u0442\u0430\u043A \u0438 \u0434\u0435\u0442\u0430\u043B\u0438 \u0441\u0443\u0434\u044C\u0431\u043E\u043D\u043E\u0441\u043D\u044B\u0445 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439. \u041A\u043E\u043D\u0435\u0447\u043D\u043E \u0436\u0435, \u0432\u0441\u0451 \u044D\u0442\u043E \u0437\u0430\u0448\u0438\u0444\u0440\u043E\u0432\u0430\u043D\u043E, \u0438 \u0432\u0430\u0448\u0430 \u0437\u0430\u0434\u0430\u0447\u0430 \u2014 \u0440\u0430\u0441\u043A\u0443\u0441\u0438\u0442\u044C \u043A\u043E\u0434\u044B \u043F\u0440\u043E\u0442\u0438\u0432\u043D\u0438\u043A\u0430, \u0447\u0442\u043E\u0431\u044B \u0434\u043E\u0431\u0440\u0430\u0442\u044C\u0441\u044F \u0434\u043E \u0441\u0443\u0442\u0438.",
  tabs: [{
    tab: 'main',
    label: 'Конкурс'
  }, {
    tab: 'aboutGame',
    label: 'Battlefield V',
    content: "\n        <div class=\"about-game\">\n          <p>\n            <b>Battlefield V</b> \u2013 \u0412\u0442\u043E\u0440\u0430\u044F \u043C\u0438\u0440\u043E\u0432\u0430\u044F \u0432 \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u043E \u043D\u043E\u0432\u043E\u043C \u0441\u0432\u0435\u0442\u0435. \u041F\u0440\u0438\u043C\u0438\u0442\u0438\u0435 \u0443\u0447\u0430\u0441\u0442\u0438\u0435 \u0432 \u043C\u0443\u043B\u044C\u0442\u0438\u043F\u043B\u0435\u0435\u0440\u043D\u044B\u0445 \u0431\u043E\u044F\u0445 \u0432 \u043D\u043E\u0432\u044B\u0445 \u0438 \u043A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0440\u0435\u0436\u0438\u043C\u0430\u0445. \u0421\u044E\u0436\u0435\u0442\u043D\u0430\u044F \u043A\u0430\u043C\u043F\u0430\u043D\u0438\u044F \u0440\u0430\u0441\u0441\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u043F\u0440\u043E \u043B\u044E\u0434\u0435\u0439, \u0447\u044C\u0438 \u0441\u0443\u0434\u044C\u0431\u044B \u0431\u044B\u043B\u0438 \u0432\u0442\u044F\u043D\u0443\u0442\u044B \u0432 \u0432\u0435\u043B\u0438\u0447\u0430\u0439\u0448\u0438\u0439 \u0432\u043E\u0435\u043D\u043D\u044B\u0439 \u043A\u043E\u043D\u0444\u043B\u0438\u043A\u0442 \u0432 \u0438\u0441\u0442\u043E\u0440\u0438\u0438 \u0447\u0435\u043B\u043E\u0432\u0435\u0447\u0435\u0441\u0442\u0432\u0430. \n          </p>\n          <p>\n            <b>Battlefield V</b> \u043E\u0442\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u043E\u0442 \u0441\u0435\u0437\u043E\u043D\u043D\u044B\u0445 \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u043E\u0432. \xAB\u0425\u043E\u0434 \u0432\u043E\u0439\u043D\u044B\xBB \u2013 \u043D\u043E\u0432\u044B\u0439 \u0441\u0435\u0440\u0432\u0438\u0441, \u0441\u043D\u0430\u0431\u0436\u0430\u044E\u0449\u0438\u0439 \u0438\u0433\u0440\u043E\u043A\u043E\u0432 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u043C \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u043E\u043C \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u043B\u0435\u0442.\n          </p>\n          <h2>\n            \u0422\u0420\u0415\u0419\u041B\u0415\u0420\u042B \u0418 \u0412\u0418\u0414\u0415\u041E \u041F\u041E \u0418\u0413\u0420\u0415\n          </h2>\n          <div class=\"about-game__videos\">\n            <div class=\"about-game__videos-left\">\n              <div class=\"about-game__videos-wrapper\" data-click=\"showVideo\" data-url=\"https://www.youtube.com/embed/A_LsjERkTvo\">\n                <img src=\"https://img.youtube.com/vi/A_LsjERkTvo/maxresdefault.jpg\" alt=\"\">\n              </div>\n            </div>\n            <div class=\"about-game__videos-right\">\n              <div class=\"about-game__videos-wrapper\" data-click=\"showVideo\" data-url=\"https://www.youtube.com/embed/icnuPKY-M-E\">\n                <img src=\"https://img.youtube.com/vi/icnuPKY-M-E/maxresdefault.jpg\" alt=\"\">\n              </div>\n              <div class=\"about-game__videos-wrapper\" data-click=\"showVideo\" data-url=\"https://www.youtube.com/embed/nrnpp5nAgtg\">\n                <img src=\"https://img.youtube.com/vi/nrnpp5nAgtg/maxresdefault.jpg\" alt=\"\">\n              </div>\n              <div class=\"about-game__videos-wrapper\" data-click=\"showVideo\" data-url=\"https://www.youtube.com/embed/_fOXh_9_-_c\">\n                <img src=\"https://img.youtube.com/vi/_fOXh_9_-_c/maxresdefault.jpg\" alt=\"\">\n              </div>  \n            </div>\n          </div>\n          <div class=\"about-game__buttons\">\n            <a class=\"bf-special__button\" href=\"https://www.ea.com/ru-ru/games/battlefield/battlefield-5/buy?utm_campaign=bf5-launch_hd_ru_scm_fixd_dtf_bfv-eaa-c3&utm_source=dtf&utm_medium=display&utm_content=BFV-Launch-Dis#battlefield-xbox-one\" target=\"_blank\">\n              \u0423\u0417\u041D\u0410\u0422\u042C \u0411\u041E\u041B\u042C\u0428\u0415 \u041E&nbsp;BATTLEFIELD&nbsp;V\n            </a>\n          </div>\n        </div>\n      "
  }, {
    tab: 'aboutPrize',
    label: 'NVIDIA RTX',
    content: "\n        <div class=\"about-nvidia\">\n          <img class=\"about-nvidia__cover\" src=\"https://leonardo.osnova.io/05d01e0b-9a77-ea0f-dbbd-6694570218df\">\n          <img class=\"about-nvidia__logo\" src=\"https://leonardo.osnova.io/21a6011a-788a-1955-ba9e-a6746a44e614\">\n          <p>\n            <b>GEFORCE RTX</b> \u2014 \u043D\u043E\u0432\u044B\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0440\u0435\u0430\u043B\u0438\u0437\u043C\u0430 \u0433\u0440\u0430\u0444\u0438\u043A\u0438 \u043D\u0430 PC. \n            \u0412\u0438\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u044B RTX \u0441\u043E\u0432\u043C\u0435\u0449\u0430\u044E\u0442 \u0432 \u0441\u0435\u0431\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0442\u0440\u0430\u0441\u0441\u0438\u0440\u043E\u0432\u043A\u0438 \u043B\u0443\u0447\u0435\u0439 \u0432 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u043C \u0432\u0440\u0435\u043C\u0435\u043D\u0438, \u0438\u0441\u043A\u0443\u0441\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442 \u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u0443\u0435\u043C\u044B\u0435 \u0448\u0435\u0439\u0434\u0435\u0440\u044B. \u042D\u0442\u043E \u0438\u043D\u043E\u0439 \u0438\u0433\u0440\u043E\u0432\u043E\u0439 \u043E\u043F\u044B\u0442.\n          </p>\n          <p>\n            \u041F\u0440\u0438\u0437 \u044D\u0442\u043E\u0433\u043E \u043A\u043E\u043D\u043A\u0443\u0440\u0441\u0430 \u2014 \u043A\u0430\u0441\u0442\u043E\u043C\u043D\u044B\u0439 \u0438\u0433\u0440\u043E\u0432\u043E\u0439 PC Battlefield V \u043D\u0430 \u0431\u0430\u0437\u0435 <b>NVIDIA GEFORCE RTX 2080 Ti</b>.\n          </p>\n          <br clear=\"all\">\n          <div class=\"about-game__buttons\">\n            <a class=\"bf-special__button\" href=\"https://www.ea.com/ru-ru/games/battlefield/battlefield-5/buy?utm_campaign=bf5-launch_hd_ru_scm_fixd_dtf_bfv-eaa-c3&utm_source=dtf&utm_medium=display&utm_content=BFV-Launch-Dis#battlefield-xbox-one\" target=\"_blank\">\n              \u0423\u0417\u041D\u0410\u0422\u042C \u0411\u041E\u041B\u042C\u0428\u0415 \u041E NVIDIA RTX\n            </a>\n          </div>\n        </div> \n      "
  }],
  conclusion: 'Война продлится ещё целый год как в Европе, так и в Азии, и вас ждёт масса работы. Но ставки уже не столь высоки. Все знают, что нацизм обречён, и его уничтожение – лишь дело времени. Пускай в своей агонии Третий Рейх и будет выдумывать одно чудо-оружие за другим, это ему уже не поможет, и неважно, узнают об этом Союзники или нет.',
  outro: "\n    <div class=\"outro-prizes\">\n      <div class=\"outro-prizes__image\">\n        <img src=\"https://leonardo.osnova.io/b31cbabd-7a1e-a48d-6b62-6dc1e4bded00\" alt=\"\">\n      </div>\n      <div class=\"outro-prizes__text\">\n        28 \u043D\u043E\u044F\u0431\u0440\u044F 15:00 \u043C\u044B \u043F\u0440\u043E\u0432\u0435\u0434\u0451\u043C \u0441\u0442\u0440\u0438\u043C, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u0440\u0430\u0441\u0441\u043A\u0430\u0436\u0435\u043C \u043E Battlefield V, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0440\u0430\u0437\u044B\u0433\u0440\u0430\u0435\u043C \u043F\u0440\u0438\u0437\u044B \u0441\u0440\u0435\u0434\u0438 \u0442\u0435\u0445, \u043A\u0442\u043E \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043F\u0440\u043E\u0448\u0451\u043B \u043A\u0432\u0435\u0441\u0442. \u041D\u0435 \u043F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0442\u0435! \u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0442\u0440\u0430\u043D\u0441\u043B\u044F\u0446\u0438\u044E \u043C\u043E\u0436\u043D\u043E \u043D\u0430 <a href=\"//twitch.tv/dtfru\" target=\"_blank\">Twitch</a>.\n      </div>\n    </div>\n  ",
  prizePopup: "\n    <div class=\"about-prize\">\n      <div class=\"about-prize__image\">\n        <img src=\"https://leonardo.osnova.io/b273f4e8-22ea-658f-0928-e4a24bb10c84\" alt=\"\">\n      </div>\n      <div class=\"about-prize__text\">\n        <h2>\u041A\u041E\u041D\u0424\u0418\u0413\u0423\u0420\u0410\u0426\u0418\u042F</h2>\n        <p>\n          <b>\u0412\u0438\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u0430:</b> NVIDIA GEFORCE RTX 2080 Ti\n        </p>\n        <p>\n          <b>\u041F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440:</b> Intel Core i7-9700K (8 \u044F\u0434\u0435\u0440/8 \u043F\u043E\u0442\u043E\u043A\u043E\u0432)\n          </p>\n        <p>\n          <b>\u041C\u043E\u0434\u0443\u043B\u044C \u043F\u0430\u043C\u044F\u0442\u0438:</b> 32 \u0413\u0431 DDR4 Corsair Vengance RGB Pro, 3000 \u041C\u0413\u0446\n        </p>\n        <p>\n          <b>\u041C\u0430\u0442\u0435\u0440\u0438\u043D\u0441\u043A\u0430\u044F \u043F\u043B\u0430\u0442\u0430:</b> ASUS ROG STRIX Z390-H GAMING\n        </p>\n        <p>\n          <b>\u0417\u0432\u0443\u043A:</b> \u0418\u043D\u0442\u0435\u0433\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u043A\u0430\u0440\u0442\u0430 \u0441 \u0441\u0438\u0441\u0442\u0435\u043C\u043E\u0439 7.1\n        </p>\n        <p>\n          <b>SSD:</b> 500 \u0413\u0431, Samsung 970 EVO\n        </p>\n        <p>\n          <b>\u0416\u0435\u0441\u0442\u043A\u0438\u0439 \u0434\u0438\u0441\u043A:</b> 2 \u0422\u0431 <br>\n          <b>\u0411\u043B\u043E\u043A \u043F\u0438\u0442\u0430\u043D\u0438\u044F:</b> 750W, Corsair HX750i\n        </p>\n        \n        <p>\n          <b>\u041A\u0443\u043B\u0435\u0440:</b> NZXT KRAKEN WATER COOLER X52 <br>\n          <b>\u041A\u043E\u0440\u043F\u0443\u0441:</b> Invasion Rush \u0441 \u0441\u0438\u0441\u0442\u0435\u043C\u043E\u0439 \u043E\u0445\u043B\u0430\u0436\u0434\u0435\u043D\u0438\u044F \u0438 \u0448\u0443\u043C\u043E\u0438\u0437\u043E\u043B\u044F\u0446\u0438\u0438\n        </p>\n        <p>\n          <b>\u0421\u0431\u043E\u0440\u043A\u0430:</b> \u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u0440\u043E\u0435\u043A\u0442 \u043E\u0442 INVASION Labs\n        </p>\n      </div>\n    </div>\n  ",
  logoUrl: 'https://www.ea.com/ru-ru/games/battlefield/battlefield-5/buy?utm_campaign=bf5-launch_hd_ru_scm_fixd_dtf_bfv-eaa-c3&utm_source=dtf&utm_medium=display&utm_content=BFV-Launch-Dis#battlefield-xbox-one',
  promoUrl: 'https://www.ea.com/ru-ru/games/battlefield/battlefield-5/buy?utm_campaign=bf5-launch_hd_ru_scm_fixd_dtf_bfv-eaa-c3&utm_source=dtf&utm_medium=display&utm_content=BFV-Launch-Dis#battlefield-xbox-one',
  CTAText: 'УЗНАТЬ БОЛЬШЕ О BATTLEFIELD V',
  questions: [{
    id: 1,
    text: 'Вас направили на помощь команде математиков под началом Алана Тьюринга, чтобы раскрыть тайну немецкого шифра «Энигма». Чтобы найти закономерность в россыпи случайных букв и цифр, нужно опираться хоть на какие-то известные слова. Однажды эксперты из Блетчли-парка всё же нашли два слова, от которых можно отталкиваться при расшифровке: TZYPQ GAOPXE. Что это за слова?',
    image: 'https://leonardo.osnova.io/ff9556d8-f752-b78e-80b2-8d2940e854d5',
    options: [{
      id: 1,
      text: 'Отряд утерян'
    }, {
      id: 2,
      text: 'Хайль Гитлер'
    }, {
      id: 3,
      text: 'Слышу конвой'
    }, {
      id: 4,
      text: 'Взять живыми'
    }]
  }, {
    id: 2,
    text: 'После успеха с шифровальными машинами вас отправляют туда, где гораздо важнее человеческий фактор — в поместье «Трент-парк», где британская разведка размещала высокопоставленных пленных немецких офицеров. В комфортных условиях, пусть и взаперти, генералы разболтали немало фактов о немецкой военной машине — а их прослушивали на каждом шагу. Один такой офицер сильно запаниковал, когда узнал о точном месте своего заключения. В разговорах с другими немцами он упоминал некоего Виктора Второго как причину беспокойства. Что это за Виктор и почему Второй?',
    options: [{
      id: 1,
      text: 'Первый итальянский авианосец «Витторио Эмануэле»'
    }, {
      id: 2,
      text: 'Завод «Фольксваген» в Вольфсбурге'
    }, {
      id: 3,
      text: 'Второй этап операции «Вундерланд»'
    }, {
      id: 4,
      text: 'Баллистическая ракета «Фау-2»'
    }]
  }, {
    id: 3,
    text: "\u041D\u0435\u0441\u043C\u043E\u0442\u0440\u044F \u043D\u0430 \u0432\u0430\u0448\u0438 \u0443\u0441\u043F\u0435\u0445\u0438, \u0412\u0435\u0440\u043C\u0430\u0445\u0442 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0430\u0435\u0442 \u043D\u0430\u0441\u0442\u0443\u043F\u0430\u0442\u044C. \u0412\u043E\u0442 \u0443\u0436\u0435 \u043F\u0430\u043B\u0430 \u0424\u0440\u0430\u043D\u0446\u0438\u044F, \u0438 \u043D\u0435\u043C\u0435\u0446\u043A\u0438\u0435 \u0441\u0430\u043C\u043E\u043B\u0451\u0442\u044B \u0438\u0441\u043F\u044B\u0442\u044B\u0432\u0430\u044E\u0442 \u043D\u0430 \u043F\u0440\u043E\u0447\u043D\u043E\u0441\u0442\u044C \u043E\u0431\u043E\u0440\u043E\u043D\u0443 \u0411\u0440\u0438\u0442\u0430\u043D\u0438\u0438. \u0412 1941 \u0433\u043E\u0434\u0443 \u041B\u043E\u043D\u0434\u043E\u043D \u0442\u0435\u0440\u043F\u0438\u0442 \u043C\u0430\u0441\u0441\u043E\u0432\u044B\u0435 \u0431\u043E\u043C\u0431\u0430\u0440\u0434\u0438\u0440\u043E\u0432\u043A\u0438 \xAB\u041B\u044E\u0444\u0442\u0432\u0430\u0444\u0444\u0435\xBB. \u041F\u043E \u043F\u0443\u0442\u0438 \u043D\u0430 \u0440\u0430\u0431\u043E\u0442\u0443 \u0432\u044B \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u043E \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u0442\u0435 \u0438 \u043C\u0438\u043C\u043E \u0440\u0443\u0438\u043D, \u0438 \u0440\u044F\u0434\u043E\u043C \u0441 \u0434\u043E\u043C\u0430\u043C\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0435\u0449\u0451 \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0447\u0438\u043D\u0438\u0442\u044C. \u0421\u0440\u0435\u0434\u0438 \u0448\u0443\u043C\u0430 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E \u0437\u0432\u043E\u043D\u043A\u043E \u0441\u043B\u044B\u0448\u0438\u0442\u0441\u044F \u0441\u0442\u0443\u043A \u043C\u043E\u043B\u043E\u0442\u043A\u0430 \u0436\u0435\u0441\u0442\u044F\u043D\u0449\u0438\u043A\u0430, \u043B\u0430\u0442\u0430\u044E\u0449\u0435\u0433\u043E \u043E\u0434\u043D\u0443 \u0438\u0437 \u043A\u0440\u044B\u0448. \u041E\u043D \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u043E \u0437\u0432\u044F\u043A\u0430\u043B \u0442\u043E \u0432 \u043E\u0434\u043D\u043E\u043C, \u0442\u043E \u0432 \u0434\u0440\u0443\u0433\u043E\u043C \u0440\u0430\u0439\u043E\u043D\u0435 \u041B\u043E\u043D\u0434\u043E\u043D\u0430, \u043F\u043E\u043A\u0430 \u0432\u044B \u043D\u0435 \u043F\u0440\u0438\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442\u0435 \u0430\u0440\u0435\u0441\u0442\u043E\u0432\u0430\u0442\u044C \u0436\u0435\u0441\u0442\u044F\u043D\u0449\u0438\u043A\u0430, \u043F\u043E\u0442\u043E\u043C\u0443 \u0447\u0442\u043E \u0432 \u0435\u0433\u043E \u0441\u0442\u0443\u043A\u0435 \u0435\u0441\u0442\u044C \u0437\u0430\u043A\u043E\u043D\u043E\u043C\u0435\u0440\u043D\u043E\u0441\u0442\u044C.\n            <p>\u0427\u0442\u043E \u0432\u044B \u043F\u043E\u0441\u043E\u0432\u0435\u0442\u0443\u0435\u0442\u0435 \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0432\u043B\u0430\u0441\u0442\u044F\u043C \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0433\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F?</p>",
    image: 'https://leonardo.osnova.io/cfffb78d-320e-9356-ed56-2e34f7ecda4e',
    options: [{
      id: 1,
      text: 'Улучшить светомаскировку вокзала'
    }, {
      id: 2,
      text: 'Изучить систему ПВО в Вестминстере и перенести опыт на другие защитные комплексы'
    }, {
      id: 3,
      text: 'Усилить воздушное прикрытие авиабазы'
    }, {
      id: 4,
      text: 'Отменить режим повышенной боеготовности в пригородах'
    }]
  }, {
    id: 4,
    text: "\u0423\u0436\u0435 \u0442\u0440\u0438 \u0433\u043E\u0434\u0430 \u0432\u044B \u043D\u0430\u0431\u043B\u044E\u0434\u0430\u0435\u0442\u0435, \u043A\u0430\u043A \u0432 \u0437\u0430\u0445\u0432\u0430\u0447\u0435\u043D\u043D\u043E\u0439 \u0415\u0432\u0440\u043E\u043F\u0435 \u0432\u0435\u0434\u0451\u0442\u0441\u044F \u043F\u043E\u0434\u0440\u044B\u0432\u043D\u0430\u044F \u0440\u0430\u0431\u043E\u0442\u0430 \u043F\u043E \u0432\u0441\u0435\u043C \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B\u043C \u0444\u0440\u043E\u043D\u0442\u0430\u043C, \u043D\u043E \u043E\u0447\u0435\u0440\u0435\u0434\u043D\u044B\u0435 \u0434\u043E\u043D\u0435\u0441\u0435\u043D\u0438\u044F \u0440\u0435\u0437\u043A\u043E \u043F\u043E\u0434\u043D\u0438\u043C\u0430\u044E\u0442 \u0441\u0442\u0430\u0432\u043A\u0438. \u0412 \u041D\u043E\u0440\u0432\u0435\u0433\u0438\u0438 \u0432\u0441\u0451 \u0430\u043A\u0442\u0438\u0432\u043D\u0435\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0437\u0430\u0432\u043E\u0434, \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u044F\u0449\u0438\u0439 \u043E\u043A\u0441\u0438\u0434 \u0434\u0435\u0439\u0442\u0435\u0440\u0438\u044F, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043E\u0441\u0442\u0440\u043E \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C \u043D\u0435\u043C\u0435\u0446\u043A\u0438\u043C \u0444\u0438\u0437\u0438\u043A\u0430\u043C-\u044F\u0434\u0435\u0440\u0449\u0438\u043A\u0430\u043C \u0434\u043B\u044F \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u0431\u0443\u0434\u0443\u0449\u0435\u0439 \u0430\u0442\u043E\u043C\u043D\u043E\u0439 \u0431\u043E\u043C\u0431\u044B. \u041A \u0441\u0447\u0430\u0441\u0442\u044C\u044E, \u043D\u0430 \u0437\u0430\u0432\u043E\u0434\u0435 \u043E\u043A\u0430\u0437\u0430\u043B\u0441\u044F \u0441\u0432\u043E\u0439 \u0447\u0435\u043B\u043E\u0432\u0435\u043A, \u0443\u0447\u0451\u043D\u044B\u0439 \u0438\u0437 \u0421\u0421\u0421\u0420 \u043F\u043E\u0434 \u043F\u0440\u0438\u043A\u0440\u044B\u0442\u0438\u0435\u043C, \u0442\u0430\u0439\u043D\u043E \u0432\u0435\u0434\u0443\u0449\u0438\u0439 \u043F\u043E\u0434\u0440\u044B\u0432\u043D\u0443\u044E \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C. \u041E\u043D \u0441\u043E\u0431\u0440\u0430\u043B \u0446\u0435\u043D\u043D\u044B\u0435 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u044F, \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u0435\u0440\u0435\u0434\u0430\u0442\u044C \u0438\u0445 \u043D\u0435\u043F\u0440\u043E\u0441\u0442\u043E, \u0432\u0435\u0434\u044C \u0437\u0430 \u0443\u0447\u0451\u043D\u044B\u043C\u0438 \u043F\u0440\u0438\u0441\u0442\u0430\u043B\u044C\u043D\u043E \u0441\u043B\u0435\u0434\u044F\u0442. \n          <p>\u0424\u0438\u0437\u0438\u043A \u043E\u0441\u0442\u0430\u0432\u0438\u043B \u043D\u0430 \u043C\u0435\u043B\u043E\u0432\u043E\u0439 \u0434\u043E\u0441\u043A\u0435 \u0432 \u043E\u0434\u043D\u043E\u043C \u0438\u0437 \u043A\u0430\u0431\u0438\u043D\u0435\u0442\u043E\u0432 \u0440\u044F\u0434 \u0446\u0438\u0444\u0440, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u043E\u0441\u044C \u0441\u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0447\u0435\u0440\u0435\u0437 \u043E\u043A\u043D\u043E. \u0427\u0442\u043E \u0432\u044B \u043F\u043E\u0441\u043E\u0432\u0435\u0442\u0443\u0435\u0442\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u043E\u0432\u0430\u043D\u0438\u044E, \u0435\u0441\u043B\u0438 \u043E\u043F\u0438\u0440\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043E\u0442 \u0443\u0447\u0451\u043D\u043E\u0433\u043E?</p>",
    image: 'https://leonardo.osnova.io/5abd74ac-2113-eb7b-a5d1-3ac42b35da00',
    options: [{
      id: 1,
      text: 'Отменить запланированный авианалёт на завод и придумать план наземной диверсии'
    }, {
      id: 2,
      text: 'Перехватить и потопить судно с оборудованием'
    }, {
      id: 3,
      text: 'Взорвать дамбу, питающую завод'
    }, {
      id: 4,
      text: 'Завербовать учёных на заводе и устроить саботаж'
    }]
  }, {
    id: 5,
    text: "\u0422\u043E\u043B\u044C\u043A\u043E \u0447\u0442\u043E \u0432\u044B \u0447\u0438\u0442\u0430\u043B\u0438 \u0434\u043E\u043D\u0435\u0441\u0435\u043D\u0438\u0435 \u0438\u0437 \u043B\u0435\u0434\u044F\u043D\u043E\u0439 \u0421\u043A\u0430\u043D\u0434\u0438\u043D\u0430\u0432\u0438\u0438, \u0430 \u0432\u043E\u0442 \u0443\u0436\u0435 \u0438\u0437\u0443\u0447\u0430\u0435\u0442\u0435 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0438\u0437 \u0421\u0435\u0432\u0435\u0440\u043D\u043E\u0439 \u0410\u0444\u0440\u0438\u043A\u0438. \u0421\u0430\u0431\u043E\u0442\u0430\u0436\u043D\u0438\u043A\u0438 \u0438\u0437 SBS \u0433\u043E\u0442\u043E\u0432\u0438\u043B\u0438 \u0434\u0435\u0440\u0437\u043A\u0443\u044E \u0434\u0438\u0432\u0435\u0440\u0441\u0438\u044E \u043F\u0440\u043E\u0442\u0438\u0432 \u0430\u0440\u043C\u0435\u0439\u0441\u043A\u043E\u0433\u043E \u043A\u043E\u0440\u043F\u0443\u0441\u0430 \u042D\u0440\u0432\u0438\u043D\u0430 \u0420\u043E\u043C\u043C\u0435\u043B\u044F, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0442\u043E\u043B\u044C\u043A\u043E \u0447\u0442\u043E \u0432\u044B\u0441\u0430\u0434\u0438\u043B\u0441\u044F \u0432 \u0422\u0440\u0438\u043F\u043E\u043B\u0438, \u043D\u043E \u043F\u0440\u0438\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u043B\u0438 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0443, \u043A\u043E\u0433\u0434\u0430 \u0443\u0432\u0438\u0434\u0435\u043B\u0438 \u0446\u0435\u043B\u0443\u044E \u0430\u0440\u043C\u0430\u0434\u0443 \u0433\u043E\u0442\u043E\u0432\u044B\u0445 \u043A \u0431\u043E\u044E \u0442\u0430\u043D\u043A\u043E\u0432. \u0422\u0435\u043C \u0432\u0440\u0435\u043C\u0435\u043D\u0435\u043C \u0432 \u0432\u0430\u0448 \u0448\u0442\u0430\u0431 \u043F\u043E\u043F\u0430\u043B\u0430 \u0448\u0438\u0444\u0440\u043E\u0432\u043A\u0430, \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u0430\u044F \u0434\u0432\u043E\u0439\u043D\u044B\u043C \u0430\u0433\u0435\u043D\u0442\u043E\u043C \u0432 \u0412\u0435\u0440\u043C\u0430\u0445\u0442\u0435. \n          <p>\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u043E\u0434\u0438\u0440\u043E\u0432\u0430\u043D\u043E \u043A\u043D\u0438\u0436\u043D\u044B\u043C \u0448\u0438\u0444\u0440\u043E\u043C, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043E\u043F\u0438\u0440\u0430\u0435\u0442\u0441\u044F \u043D\u0430 \u043F\u0435\u0440\u0432\u044B\u0435 \u0441\u0442\u0440\u043E\u043A\u0438 \u0440\u043E\u043C\u0430\u043D\u0430 \u042D\u0440\u0438\u0445\u0430 \u041C\u0430\u0440\u0438\u0438 \u0420\u0435\u043C\u0430\u0440\u043A\u0430 \xAB\u0412\u043E\u0437\u043B\u044E\u0431\u0438 \u0431\u043B\u0438\u0436\u043D\u0435\u0433\u043E \u0441\u0432\u043E\u0435\u0433\u043E\xBB.  \u041A\u0430\u043A \u0436\u0435 \u0431\u044B\u0442\u044C \u0434\u0430\u043B\u044C\u0448\u0435 \u0434\u0438\u0432\u0435\u0440\u0441\u0430\u043D\u0442\u0430\u043C \u0438\u0437 \u043B\u043E\u0434\u043E\u0447\u043D\u043E\u0439 \u0441\u043B\u0443\u0436\u0431\u044B?</p>",
    image: 'https://leonardo.osnova.io/ec8a1c57-e3a2-f401-2e0f-6ba638274cc6',
    options: [{
      id: 1,
      text: 'Нужно заминировать аэродром и лишить немцев воздушной поддержки'
    }, {
      id: 2,
      text: 'Пусть лодочники нападут на десантные корабли, а войска Союзников могут бить в лоб, пока есть время'
    }, {
      id: 3,
      text: 'Прокрасться в штаб и ликвидировать самого Роммеля!'
    }, {
      id: 4,
      text: 'Подняться вверх по реке и оттуда наблюдать за силами нацистов'
    }]
  }, {
    id: 6,
    text: "\u041A \u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0435 \u0432\u043E\u0439\u043D\u044B \u0432\u044B \u0432\u0441\u0451 \u0447\u0430\u0449\u0435 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u0447\u0430\u0435\u0442\u0435 \u0441 \u0440\u0430\u0437\u0432\u0435\u0434\u043A\u043E\u0439 \u0421\u0428\u0410, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0430\u043A\u0442\u0438\u0432\u043D\u043E \u043F\u043E\u043C\u043E\u0433\u0430\u0435\u0442 \u0431\u0440\u0438\u0442\u0430\u043D\u0441\u043A\u043E\u0439. \u0412 \u0438\u044E\u043B\u0435 1943 \u0433\u043E\u0434\u0430, \u043A\u043E\u0433\u0434\u0430 \u044F\u043D\u043A\u0438 \u0432\u044B\u0441\u0430\u0434\u0438\u043B\u0438\u0441\u044C \u043D\u0430 \u0421\u0438\u0446\u0438\u043B\u0438\u0438, \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u0430\u0433\u0435\u043D\u0442\u0443\u0440\u044B \u0431\u044B\u043B\u043E \u043F\u0440\u0438\u043A\u043E\u0432\u0430\u043D\u043E \u043A \u0441\u043E\u0431\u044B\u0442\u0438\u044F\u043C \u0432 \u0420\u0438\u043C\u0435. \u041E\u0441\u043E\u0431\u0435\u043D\u043D\u043E \u0432\u0430\u0441 \u0443\u0434\u0438\u0432\u0438\u043B \u0442\u0435\u043A\u0441\u0442 \u043F\u0438\u0441\u044C\u043C\u0430 \u043E\u0434\u043D\u043E\u0433\u043E \u0438\u0442\u0430\u043B\u044C\u044F\u043D\u0441\u043A\u043E\u0433\u043E \u0441\u0435\u043D\u0430\u0442\u043E\u0440\u0430, \u043E\u0431\u043D\u0430\u0440\u0443\u0436\u0435\u043D\u043D\u043E\u0435 \u0432 \u0435\u0433\u043E \u043A\u0430\u0431\u0438\u043D\u0435\u0442\u0435 \u043F\u043E\u043B\u0435\u0432\u044B\u043C \u0430\u0433\u0435\u043D\u0442\u043E\u043C. \u0412 \u0437\u0430\u043F\u0438\u0441\u043D\u043E\u0439 \u043A\u043D\u0438\u0436\u043A\u0435 \u0441\u0435\u043D\u0430\u0442\u043E\u0440\u0430 \u0431\u044B\u043B\u043E \u0443\u043A\u0430\u0437\u0430\u043D\u043E, \u0447\u0442\u043E \u0441\u043C\u0435\u0449\u0435\u043D\u0438\u0435 \u0440\u0430\u0432\u043D\u043E \u0442\u0440\u0451\u043C.\n          <p>\u0427\u0442\u043E \u0432\u044B \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0438\u0442\u0435 \u0440\u0438\u043C\u0441\u043A\u043E\u0439 \u044F\u0447\u0435\u0439\u043A\u0435 \u0441\u043E\u043F\u0440\u043E\u0442\u0438\u0432\u043B\u0435\u043D\u0438\u044F, \u043E\u0441\u043D\u043E\u0432\u044B\u0432\u0430\u044F\u0441\u044C \u043D\u0430 \u044D\u0442\u0438\u0445 \u0434\u0430\u043D\u043D\u044B\u0445?</p>",
    image: 'https://leonardo.osnova.io/a1f61eb9-e30c-6836-1c83-be72a999acfc ',
    options: [{
      id: 1,
      text: 'Отступить к горной базе неподалёку от Рима'
    }, {
      id: 2,
      text: 'Направить оперативную группу к двум часам к зданию тюрьмы'
    }, {
      id: 3,
      text: 'Проследить за покушением и довершить начатое, если понадобится'
    }, {
      id: 4,
      text: 'Обеспечить безопасность короля Италии'
    }]
  }, {
    id: 7,
    text: "\u041B\u0435\u0442\u043E\u043C \u0438 \u043E\u0441\u0435\u043D\u044C\u044E 1944-\u0433\u043E \u0433\u043E\u0434\u0430 \u043D\u0430 \u0432\u0430\u0441 \u043E\u0431\u0440\u0443\u0448\u0438\u043B\u0430\u0441\u044C \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0430\u044F \u043B\u0430\u0432\u0438\u043D\u0430 \u0440\u0430\u0431\u043E\u0442\u044B, \u0432\u0435\u0434\u044C \u0430\u0440\u043C\u0438\u044F\u043C \u043D\u0430 \u043D\u0435\u0434\u0430\u0432\u043D\u043E \u043E\u0442\u043A\u0440\u044B\u0442\u043E\u043C \u0437\u0430\u043F\u0430\u0434\u043D\u043E\u043C \u0444\u0440\u043E\u043D\u0442\u0435 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u0430 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 \u0434\u0435\u0448\u0438\u0444\u0440\u043E\u0432\u0449\u0438\u043A\u043E\u0432. \u0412 \u0430\u0432\u0433\u0443\u0441\u0442\u0435 \u043A \u041F\u0430\u0440\u0438\u0436\u0443 \u043F\u0440\u0438\u0431\u043B\u0438\u0436\u0430\u043B\u0438\u0441\u044C \u0432\u043E\u0439\u0441\u043A\u0430 \u0421\u043E\u044E\u0437\u043D\u0438\u043A\u043E\u0432, \u0438 \u043D\u0435 \u043E\u0441\u0442\u0430\u0432\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u043C\u043D\u0435\u043D\u0438\u0439, \u0447\u0442\u043E \u043D\u0430\u0446\u0438\u0441\u0442\u044B \u0441\u043A\u043E\u0440\u043E \u043F\u043E\u043A\u0438\u043D\u0443\u0442 \u0433\u043E\u0440\u043E\u0434. \u041E\u0434\u043D\u0430\u043A\u043E \u0444\u0440\u0430\u043D\u0446\u0443\u0437\u0441\u043A\u043E\u0435 \u0421\u043E\u043F\u0440\u043E\u0442\u0438\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u043E\u0440\u044F\u0434\u043A\u043E\u043C \u0432\u0441\u0442\u0440\u0435\u0432\u043E\u0436\u0438\u043B\u043E\u0441\u044C, \u043A\u043E\u0433\u0434\u0430 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u043E \u0448\u0438\u0444\u0440\u043E\u0432\u043A\u0443 \u043E\u0442 \u043E\u0434\u043D\u043E\u0433\u043E \u0438\u0437 \u0441\u0432\u043E\u0438\u0445 \u0430\u0433\u0435\u043D\u0442\u043E\u0432 \u0432 \u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0442\u0443\u0440\u0435.\n          <p>\u041A\u0430\u043A \u0434\u043E\u043B\u0436\u043D\u043E \u043E\u0442\u0432\u0435\u0442\u0438\u0442\u044C \u0421\u043E\u043F\u0440\u043E\u0442\u0438\u0432\u043B\u0435\u043D\u0438\u0435 \u043D\u0430 \u0443\u0433\u0440\u043E\u0437\u0443, \u043E \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u0432\u044B \u0443\u0437\u043D\u0430\u043B\u0438 \u0438\u0437 \u0448\u0438\u0444\u0440\u043E\u0432\u043A\u0438?</p>",
    image: 'https://leonardo.osnova.io/5f3729cd-a59e-4651-440a-13b499cf1004',
    options: [{
      id: 1,
      text: 'Предупредить всех сочувствующих о скорых репрессиях'
    }, {
      id: 2,
      text: 'Угнать цистерны и спрятать на брошенной железнодорожной ветке'
    }, {
      id: 3,
      text: 'Бросить всё и бежать в леса!'
    }, {
      id: 4,
      text: 'Саботировать закладку взрывчатки под основание Эйфелевой башни'
    }]
  }],
  results: [{
    range: [0, 4],
    title: 'Начинающий криптограф'
  }, {
    range: [5, 7],
    title: 'Знаток дела'
  }, {
    range: [7, 9999],
    title: 'Почти Тьюринг'
  }]
};
exports.default = _default;

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Entry point
 */
var Special = __webpack_require__(/*! ./special.js */ "./src/js/special.js"); // const Config = require('./config.js');
// let special = new Special();
// special.init(Config);


module.exports = Special;

/***/ }),

/***/ "./src/js/lib/analytics.js":
/*!*********************************!*\
  !*** ./src/js/lib/analytics.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendEvent = exports.sendPageView = void 0;

var Config = __webpack_require__(/*! ../config.js */ "./src/js/config.js");

var CONSOLE_STYLE = 'color: #E87E04';
/**
 * Send pageview event via GTM
 */

var sendPageView = function sendPageView() {
  if (true) {
    console.log('Analytics: %cPage — View', CONSOLE_STYLE);
  }

  if (window.dataLayer !== undefined) {
    window.dataLayer.push({
      event: 'Page — View',
      'post_details': {},
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


exports.sendPageView = sendPageView;

var sendEvent = function sendEvent(label) {
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Click';

  if (true) {
    console.log("Analytics: %c".concat(Config.analyticsCategory, " \u2014 ").concat(label, " \u2014 ").concat(action), CONSOLE_STYLE);
  }

  if (window.dataLayer !== undefined && Config.analyticsCategory) {
    window.dataLayer.push({
      event: 'data_event',
      'data_description': "".concat(Config.analyticsCategory, " \u2014 ").concat(label, " \u2014 ").concat(action)
    });
  }
};

exports.sendEvent = sendEvent;

/***/ }),

/***/ "./src/js/lib/array.js":
/*!*****************************!*\
  !*** ./src/js/lib/array.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toArray = exports.shuffle = exports.getMostFrequentValue = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * Find most frequent value in array
 * @param {Array} array
 */
var getMostFrequentValue = function getMostFrequentValue(array) {
  var result = _toConsumableArray(array);

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


exports.getMostFrequentValue = getMostFrequentValue;

var shuffle = function shuffle(array) {
  var j, x, i;

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


exports.shuffle = shuffle;

var toArray = function toArray(nodeList) {
  return Array.prototype.slice.call(nodeList);
};

exports.toArray = toArray;

/***/ }),

/***/ "./src/js/lib/check.js":
/*!*****************************!*\
  !*** ./src/js/lib/check.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isMobile = void 0;
var BREAKPOINTS = {
  mobile: 680
};
/**
 * Check if screen size is mobile
 */

var isMobile = function isMobile() {
  return !window.matchMedia("(min-width: ".concat(BREAKPOINTS.mobile, "px)")).matches;
};

exports.isMobile = isMobile;

/***/ }),

/***/ "./src/js/lib/dom.js":
/*!***************************!*\
  !*** ./src/js/lib/dom.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.replace = exports.prepend = exports.htmlStringToNode = exports.removeElement = exports.removeChildren = exports.getSiblings = exports.cacheElements = exports.make = void 0;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * Make html element
 * @param {String} tagName
 * @param {Array|string} classNames - array of classnames
 * @param {Object} attributes - object with html attributes
 */
var make = function make(tagName) {
  var classNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  tagName = tagName.toLowerCase();
  var element = document.createElement(tagName);

  if (Array.isArray(classNames)) {
    var _element$classList;

    (_element$classList = element.classList).add.apply(_element$classList, _toConsumableArray(classNames));
  } else {
    element.classList.add(classNames);
  }

  for (var attr in attributes) {
    /**
     * @todo rename data to dataset
     */
    if (attr === 'data') {
      var dataAttributes = attributes[attr];

      for (var key in dataAttributes) {
        element.dataset[key] = dataAttributes[key];
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


exports.make = make;

var cacheElements = function cacheElements(obj) {
  var newObj = {},
      attr = 'view',
      elements = document.querySelectorAll("[data-".concat(attr, "]"));
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


exports.cacheElements = cacheElements;

var getSiblings = function getSiblings(element) {
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


exports.getSiblings = getSiblings;

var removeChildren = function removeChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};
/**
 * Remove specified element from its parent
 * @param {Element} element
 */


exports.removeChildren = removeChildren;

var removeElement = function removeElement(element) {
  if (element && element.parentNode) {
    element.parentNode.removeChild(element);
  }
};

exports.removeElement = removeElement;

var htmlStringToNode = function htmlStringToNode(html) {
  var el = document.createElement('div');
  el.innerHTML = html;
  return el.firstChild;
};

exports.htmlStringToNode = htmlStringToNode;

var prepend = function prepend(parent, el) {
  parent.insertBefore(el, parent.firstChild);
};
/**
 * Replace one element with another
 */


exports.prepend = prepend;

var replace = function replace(target, another) {
  target.parentNode.replaceChild(another, target);
};

exports.replace = replace;

/***/ }),

/***/ "./src/js/lib/helper.js":
/*!******************************!*\
  !*** ./src/js/lib/helper.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.copyToClipboard = exports.scrollToElement = exports.formatNumber = exports.declineWord = exports.preloadImages = void 0;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Simple images preload
 * @param {Array} urls - array of images urls
 */
var preloadImages = function preloadImages(urls) {
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


exports.preloadImages = preloadImages;

var declineWord = function declineWord(number, words) {
  var result = '';

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


exports.declineWord = declineWord;

var formatNumber = function formatNumber(number) {
  var string = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '&nbsp;';
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, string);
};
/**
 * Scroll window to target element
 * @param {Element} element
 * @param {Number} offset - offset from top
 */


exports.formatNumber = formatNumber;

var scrollToElement = function scrollToElement(element) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var y = element.getBoundingClientRect().top + (window.scrollY || window.pageYOffset) - offset;
  window.scroll(0, y);
};

exports.scrollToElement = scrollToElement;

var copyToClipboard = function copyToClipboard(string, callback) {
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
    document.execCommand('copy');
    isSuccess = true;
  } catch (e) {}

  document.body.removeChild(input);
  callback(isSuccess);
};

exports.copyToClipboard = copyToClipboard;

/***/ }),

/***/ "./src/js/lib/preloader.js":
/*!*********************************!*\
  !*** ./src/js/lib/preloader.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Image Preloader module
 *
 * Loads Image and stores in own cache
 *
 * @usage preloader.load(url)
 * @usage preloader.load([url1, url2])
 * @usage let imageCached = preloader.get(url); el.appendChild(imageCached);
 *
 */
var Preloader =
/*#__PURE__*/
function () {
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
    key: "load",
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
    key: "loadOne",
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
    key: "get",
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

/***/ "./src/js/lib/share.js":
/*!*****************************!*\
  !*** ./src/js/lib/share.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = exports.init = void 0;

var _cmttLikely = _interopRequireDefault(__webpack_require__(/*! cmtt-likely */ "./node_modules/cmtt-likely/source/index.js"));

var _dom = __webpack_require__(/*! ./dom */ "./src/js/lib/dom.js");

var Analytics = _interopRequireWildcard(__webpack_require__(/*! ./analytics */ "./src/js/lib/analytics.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CSS = {
  likely: 'likely',
  likelyCustom: 'likely--custom',
  state: {
    hidden: 'l-hidden'
  }
};

var init = function init() {
  _cmttLikely.default.initate();
};
/**
 * Make likely buttons and append to specified element
 * @param {Element} parentContainer
 * @param {Array} socials
 */


exports.init = init;

var create = function create(parentContainer) {
  var set = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var likelyContainer = (0, _dom.make)('div', [CSS.likely, CSS.likelyCustom]),
      socials = ['facebook', 'vkontakte', 'twitter'];
  socials.forEach(function (social) {
    var button = (0, _dom.make)('div', social);
    if (social === 'facebook') button.textContent = 'Поделиться';
    button.addEventListener('click', function () {
      Analytics.sendEvent("Share ".concat(social));
    });
    likelyContainer.appendChild(button);
  });
  parentContainer.appendChild(likelyContainer);
  if (set.url) likelyContainer.dataset.url = set.url;
  if (set.twitter) likelyContainer.dataset.twitter = set.twitter;
  init();
};

exports.create = create;

/***/ }),

/***/ "./src/js/special.js":
/*!***************************!*\
  !*** ./src/js/special.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Analytics = _interopRequireWildcard(__webpack_require__(/*! ./lib/analytics */ "./src/js/lib/analytics.js"));

var Share = _interopRequireWildcard(__webpack_require__(/*! ./lib/share */ "./src/js/lib/share.js"));

var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "./src/js/base.js"));

var _ajax = _interopRequireDefault(__webpack_require__(/*! @codexteam/ajax */ "./node_modules/@codexteam/ajax/dist/main.js"));

var _data = _interopRequireDefault(__webpack_require__(/*! ./data */ "./src/js/data.js"));

var _svg = _interopRequireDefault(__webpack_require__(/*! ./svg */ "./src/js/svg.js"));

var _dom = __webpack_require__(/*! ./lib/dom */ "./src/js/lib/dom.js");

var _check = __webpack_require__(/*! ./lib/check */ "./src/js/lib/check.js");

var _array = __webpack_require__(/*! ./lib/array */ "./src/js/lib/array.js");

var _helper = __webpack_require__(/*! ./lib/helper */ "./src/js/lib/helper.js");

var _auth = _interopRequireDefault(__webpack_require__(/*! ./auth */ "./src/js/auth.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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
__webpack_require__(/*! ../css/app.pcss */ "./src/css/app.pcss");

var CONFIG = __webpack_require__(/*! ./config */ "./src/js/config.js");

/**
 * Special constructor
 */
var Special =
/*#__PURE__*/
function (_BaseSpecial) {
  _inherits(Special, _BaseSpecial);

  function Special(params) {
    var _this;

    _classCallCheck(this, Special);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Special).call(this));
    _this.css = params.css;
    _this.staticURL = params.staticURL;
    _this.nodes = {
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
      popupContainer: null
    };

    _this.setDefaultValues();

    return _this;
  }
  /**
   * Parametres uses in app
   */


  _createClass(Special, [{
    key: "setDefaultValues",
    value: function setDefaultValues() {
      this.currentQuestionId = 1;
      this.totalLength = _data.default.questions.length;
      this.userPoints = 0;
      this.isPending = false;
    }
    /**
     * App stated
     * @param {InitParams} params
     */

  }, {
    key: "init",
    value: function init() {
      var _this2 = this;

      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _extends(CONFIG, params);
      /**
       * Save init params to this.params of base class
       */


      this.saveParams(CONFIG);

      if (this.css) {
        this.loadStyles(this.css).then(function () {
          return _this2.render();
        });
      }
    }
    /**
     *
     * @return {{wrapper: string, container: string, header: string, headerLogo: string, headerMenu: string, headerMenuButton: string, headerMenuButtonActive: string, content: string, contentLoading: string, contentHidden: string, counter: string, mainText: string, options: string, optionsDisabled: string, optionsItem: string, optionsItemSelected: string, optionsItemLoading: string, optionsItemCorrect: string, optionsItemError: string, optionsMessage: string, actions: string, actionsDisclaimer: string, title: string, button: string, buttonSecond: string, buttonDisabled: string, buttonLoading: string, introText: string, result: string, resultContent: string, resultActions: string, resultButton: string, resultsTable: string, popup: string, popupShowed: string, popupContainer: string, popupClose: string, auth: string, authButtons: string}}
     * @constructor
     */

  }, {
    key: "render",

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
    value: function render() {
      var _this3 = this;

      this.nodes.wrapper = (0, _dom.make)('div', Special.CSS.wrapper);
      this.nodes.container = (0, _dom.make)('div', Special.CSS.container);
      /**
       * Header
       */

      this.nodes.header = (0, _dom.make)('div', Special.CSS.header, {
        innerHTML: "\n        <a class=\"".concat(Special.CSS.headerLogo, " ").concat(Special.CSS.headerLogo, "--left\" href=\"").concat(_data.default.logoUrl, "\" target=\"_blank\"></a>\n        <a class=\"").concat(Special.CSS.headerLogo, " ").concat(Special.CSS.headerLogo, "--right\" href=\"").concat(_data.default.logoUrl, "\" target=\"_blank\"></a>\n        <a class=\"").concat(Special.CSS.headerLogo, " ").concat(Special.CSS.headerLogo, "--bottom\" href=\"").concat(_data.default.logoUrl, "\" target=\"_blank\"></a>\n      ")
      });
      /**
       * Append Header menu if enabled
       */

      if (_data.default.tabs) {
        this.nodes.headerMenu = (0, _dom.make)('div', Special.CSS.headerMenu);
        this.nodes.header.appendChild(this.nodes.headerMenu);

        _data.default.tabs.forEach(function (_ref) {
          var tab = _ref.tab,
              label = _ref.label;
          var button = (0, _dom.make)('span', Special.CSS.headerMenuButton, {
            textContent: label,
            data: {
              click: 'tabClicked',
              tab: tab
            }
          });

          _this3.nodes.headerMenuTabs.push(button);

          _this3.nodes.headerMenu.appendChild(button);
        });
      }

      this.nodes.wrapper.appendChild(this.nodes.header);
      /**
       * Content
       */

      this.nodes.content = (0, _dom.make)('div', Special.CSS.content, {
        data: {
          tab: 'main'
        }
      });
      this.nodes.tabs.push(this.nodes.content);
      this.nodes.counter = (0, _dom.make)('div', Special.CSS.counter);
      this.nodes.mainText = (0, _dom.make)('div', Special.CSS.mainText);
      this.nodes.options = (0, _dom.make)('div', Special.CSS.options);
      this.nodes.actions = (0, _dom.make)('div', Special.CSS.actions);
      this.nodes.content.appendChild(this.nodes.counter);
      this.nodes.content.appendChild(this.nodes.mainText);
      this.nodes.content.appendChild(this.nodes.options);
      this.nodes.content.appendChild(this.nodes.actions);
      this.nodes.container.appendChild(this.nodes.content);
      /**
       * Append other tabs if we have DATA.tabs
       */

      if (Array.isArray(_data.default.tabs)) {
        _data.default.tabs.forEach(function (_ref2) {
          var tab = _ref2.tab,
              content = _ref2.content;

          if (!content) {
            return;
          }

          var tabContainer = (0, _dom.make)('div', [Special.CSS.content, Special.CSS.contentHidden], {
            innerHTML: content,
            data: {
              tab: tab
            }
          });

          _this3.nodes.tabs.push(tabContainer);

          _this3.nodes.container.appendChild(tabContainer);
        });
      }
      /**
       * Create popup
       */


      this.nodes.popup = (0, _dom.make)('div', Special.CSS.popup);
      this.nodes.popupContainer = (0, _dom.make)('div', Special.CSS.popupContainer);
      this.nodes.popup.appendChild(this.nodes.popupContainer);
      this.nodes.wrapper.appendChild(this.nodes.popup);
      this.nodes.popup.addEventListener('click', function (event) {
        _this3.popupOutsideClicked(event);
      });
      /**
       * Append all app to the initial container
       */

      this.nodes.wrapper.appendChild(this.nodes.container);
      this.container.appendChild(this.nodes.wrapper);
      this.makeIntro();
      this.container.tabIndex = 1;
      this.container.addEventListener('keydown', function (event) {
        _this3.keydownHandler(event);
      });
      this.activateTab('main');
      this.updateMode('start');
      Analytics.sendEvent('Start screen', 'Load'); // this.preloader.load(DATA.questions[0].options.map(option => this.staticURL + option.img));
    }
    /**
     * Creates start screen
     */

  }, {
    key: "makeIntro",
    value: function makeIntro() {
      this.nodes.mainText.innerHTML = "\n      <div class=\"".concat(Special.CSS.title, "\">\n        <a href=\"").concat(CONFIG.articleUrl, "\">\n          ").concat(_data.default.title, "\n        </a>\n      </div>\n      <div class=\"").concat(Special.CSS.introText, "\">\n        ").concat(_data.default.intro, "\n      </div>\n    ");
      (0, _dom.removeChildren)(this.nodes.actions);
      this.makeActionButton('НАЧАТЬ ИГРУ', 'checkUserState');
    }
    /**
     * Check user auth and game state
     * @param {Element} [button] - НАЧАТЬ ИГРУ
     */

  }, {
    key: "checkUserState",
    value: function checkUserState(button) {
      var _this4 = this;

      if (button && button.classList.contains(Special.CSS.buttonLoading)) {
        return;
      }

      if (button) {
        button.classList.add(Special.CSS.buttonLoading);
      }

      _ajax.default.get({
        url: "".concat(this.params.apiEndpoint, "/start")
      }).then(
      /**
       * Osnova response with user state
       * @param {object} response
       * @param {number} response.rc  - code (200)
       * @param {string} response.rm  - message (successfull)
       * @param {{active_question: number, answers, is_finished: boolean, result: null}} response.data  - response datas
       */
      function (response) {
        if (button) {
          button.classList.remove(Special.CSS.buttonLoading);
        }

        if (response.rc === 403) {
          _this4.showAuth();

          return;
        }

        if (response.data.active_question) {
          _this4.currentQuestionId = response.data.active_question;

          _this4.makeIntroduction();
        } else {
          _this4.userPoints = response.data.result || 0;

          _this4.makeResult();
        }
      });
    }
    /**
     * Creates introduction screen
     */

  }, {
    key: "makeIntroduction",
    value: function makeIntroduction() {
      this.updateMode('introduction');
      this.nodes.counter.textContent = '— Вступление —';
      this.nodes.mainText.innerHTML = _data.default.introduction;
      (0, _dom.removeChildren)(this.nodes.actions);
      this.makeActionButton('ПРИСТУПИТЬ', 'start');
    }
    /**
     * Creates a button
     * @param {string} text - button's text
     * @param {string} func - name of method that should be triggered by click
     * @param {string[]} additionalCSS - array of CSS classes for button
     */

  }, {
    key: "makeActionButton",
    value: function makeActionButton(text, func) {
      var additionalCSS = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var buttonStyle = [Special.CSS.button];

      if (Array.isArray(additionalCSS)) {
        buttonStyle.push.apply(buttonStyle, _toConsumableArray(additionalCSS));
      }

      var button = (0, _dom.make)('div', buttonStyle, {
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

  }, {
    key: "updateMode",
    value: function updateMode(name) {
      this.mode = name;
      this.nodes.wrapper.dataset.mode = this.mode;
    }
    /**
     * Shows first question
     * Called after click on the START button on intro screen
     */

  }, {
    key: "start",
    value: function start() {
      this.updateMode('progress');
      this.makeQuestion();
      Analytics.sendEvent('Start button', 'Click');
    }
    /**
     * Create question corresponding with current active index
     */

  }, {
    key: "makeQuestion",
    value: function makeQuestion() {
      var _this5 = this;

      console.log('makeQuestion', this.currentQuestionId);
      /**
       * @type {question}
       */

      var data = _data.default.questions.find(function (q) {
        return q.id === _this5.currentQuestionId;
      });

      if (!data) {
        throw new Error("Missing data for question #".concat(this.currentQuestionId, " or incorrect index"));
      }

      (0, _dom.removeChildren)(this.nodes.options);
      (0, _dom.removeChildren)(this.nodes.actions);
      this.nodes.optionsItems = [];
      this.isPending = false;
      this.nodes.options.classList.remove(Special.CSS.optionsDisabled);
      this.updateCounter();
      this.nodes.mainText.innerHTML = "".concat(data.text);

      if (data.image) {
        this.nodes.mainText.appendChild((0, _dom.make)('img', [], {
          src: data.image
        }));
      }

      this.makeQuestionOptions(data.options);
      if ((0, _check.isMobile)()) (0, _helper.scrollToElement)(this.container);
      Analytics.sendEvent("Question ".concat(this.currentQuestionId, " screen"), 'Hit');
    }
    /**
     * Set current question number to the header counter
     */

  }, {
    key: "updateCounter",
    value: function updateCounter() {
      this.nodes.counter.textContent = "\u2014 \u0417\u0410\u0414\u0410\u041D\u0418\u0415 ".concat(this.currentQuestionId, " \u2014");
    }
    /**
     * Renders possible answers
     * @param {option[]} options
     */

  }, {
    key: "makeQuestionOptions",
    value: function makeQuestionOptions(options) {
      var _this6 = this;

      (0, _array.shuffle)(options);
      options.forEach(function (option) {
        var item = (0, _dom.make)('div', Special.CSS.optionsItem, {
          data: {
            click: 'selectAnswer',
            id: option.id,
            number: _this6.currentQuestionId
          },
          textContent: option.text
        });

        _this6.nodes.optionsItems.push(item);

        _this6.nodes.options.appendChild(item);
      });
    }
    /**
     * Select answer
     * @param {Element} button - clicked option
     */

  }, {
    key: "selectAnswer",
    value: function selectAnswer(button) {
      if (this.isPending) {
        return;
      }

      this.nodes.optionsItems.forEach(function (btn) {
        btn.classList.remove(Special.CSS.optionsItemSelected);
      });
      button.classList.add(Special.CSS.optionsItemSelected);
      (0, _dom.removeChildren)(this.nodes.actions);
      this.makeActionButton('ПОДТВЕРДИТЬ', 'submitAnswer');
    }
    /**
     * Check selected answer
     * @param {Element} button - clicked 'Confirm' button
     */

  }, {
    key: "submitAnswer",
    value: function submitAnswer(button) {
      var _this7 = this;

      if (this.isPending) {
        return;
      }

      var selectedItem = this.nodes.optionsItems.find(function (item) {
        return item.classList.contains(Special.CSS.optionsItemSelected);
      });
      var id = parseInt(selectedItem.dataset.id);
      this.isPending = true;
      this.nodes.options.classList.add(Special.CSS.optionsDisabled);
      button.classList.add(Special.CSS.buttonDisabled);
      selectedItem.classList.remove(Special.CSS.optionsItemSelected);
      selectedItem.classList.add(Special.CSS.optionsItemLoading); // ajax to check

      _ajax.default.get({
        url: "".concat(this.params.apiEndpoint, "/answer"),
        data: {
          question: this.currentQuestionId,
          answer: id
        }
      }).then(
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
      function (response) {
        _this7.nodes.options.classList.remove(Special.CSS.optionsDisabled);

        selectedItem.classList.remove(Special.CSS.optionsItemLoading);
        (0, _dom.removeChildren)(_this7.nodes.actions);

        if (response && response.rc === 200) {
          if (response.data.is_correct) {
            selectedItem.classList.add(Special.CSS.optionsItemCorrect);
          } else {
            selectedItem.classList.add(Special.CSS.optionsItemError);

            _this7.makeActionButton('ЕЩЕ РАЗ', 'restart', [Special.CSS.buttonSecond]);
          }
          /**
           * Remove other items
           */


          _this7.nodes.optionsItems.filter(function (item) {
            return item !== selectedItem;
          }).forEach(function (item) {
            return item.remove();
          });
          /**
           * Append description
           */


          _this7.makeOptionMessage(response.data.message);

          if (!response.data.active_question) {
            _this7.userPoints = response.data.result;

            _this7.makeActionButton('ЗАВЕРШИТЬ', 'makeConclusion');
          } else {
            _this7.makeActionButton('ПРОДОЛЖИТЬ', 'makeQuestion');
          }

          if (!response.data.is_correct) {
            _this7.nodes.actions.appendChild((0, _dom.make)('div', Special.CSS.actionsDisclaimer, {
              innerHTML: 'Дополнительная попытка не засчитывается в финальных результатах. <br> Одна ошибка — в розыгрыше не участвуешь.'
            }));
          }

          button.classList.remove(Special.CSS.buttonDisabled);
          _this7.currentQuestionId = response.data.active_question;
        } else {
          console.log('Error while check answer:', response);
        }
      }).catch(function (error) {
        console.log('Check answer error', error);
      });
    }
    /**
     * Shows conclusion scene
     */

  }, {
    key: "makeConclusion",
    value: function makeConclusion() {
      this.updateMode('conclusion');
      this.nodes.counter.textContent = '— ЗАКЛЮЧЕНИЕ —';
      this.nodes.mainText.innerHTML = _data.default.conclusion;
      (0, _dom.removeChildren)(this.nodes.options);
      (0, _dom.removeChildren)(this.nodes.actions);
      this.makeActionButton('РЕЗУЛЬТАТЫ', 'makeResult');
    }
    /**
     * Show description after answer
     * @param {string} message - description got from backend
     */

  }, {
    key: "makeOptionMessage",
    value: function makeOptionMessage(message) {
      var messageEl = (0, _dom.make)('div', Special.CSS.optionsMessage, {
        innerHTML: message
      });
      this.nodes.options.appendChild(messageEl);
    }
    /**
     * Creates results screen
     */

  }, {
    key: "makeResult",
    value: function makeResult() {
      (0, _dom.removeElement)(this.nodes.result);
      (0, _dom.removeChildren)(this.nodes.options);
      (0, _dom.removeChildren)(this.nodes.actions);
      (0, _dom.removeChildren)(this.nodes.mainText);
      /**
       * @type {result}
       */

      var data = this.findResult();
      this.updateMode('result');
      this.nodes.result = (0, _dom.make)('div', Special.CSS.result);
      var resultContent = (0, _dom.make)('div', Special.CSS.resultContent),
          resultActions = (0, _dom.make)('div', Special.CSS.resultActions); // result.style.backgroundImage = `url(${this.imageUrl(data.cover)})`;

      this.nodes.mainText.innerHTML = _data.default.outro;
      (0, _dom.removeChildren)(this.nodes.options);
      (0, _dom.removeChildren)(this.nodes.actions);
      resultContent.innerHTML = "\n      ".concat(data.message, "\n      <p>").concat(data.title, "</p>\n    ");
      this.nodes.result.appendChild(resultContent);
      resultContent.appendChild(resultActions);
      (0, _dom.prepend)(this.nodes.content, this.nodes.result);
      Share.create(resultActions, {
        url: "".concat(CONFIG.share.url, "/").concat(this.userPoints),
        twitter: CONFIG.share.twitter
      });
      this.nodes.resultsButton = (0, _dom.make)('div', [Special.CSS.button, Special.CSS.buttonSecond], {
        innerHTML: "".concat(_svg.default.trophy, " \u0420\u0415\u0417\u0423\u041B\u042C\u0422\u0410\u0422\u042B \u0414\u0420\u0423\u0413\u0418\u0425 \u041F\u041E\u041B\u042C\u0417\u041E\u0412\u0410\u0422\u0415\u041B\u0415\u0419"),
        data: {
          click: 'showResultsTable'
        }
      });
      this.nodes.result.appendChild(this.nodes.resultsButton); // this.nodes.actions.appendChild(make('span', Special.CSS.button, {
      //   textContent: 'ПРОЙТИ ЕЩЕ РАЗ',
      //   data: {
      //     click: 'restart'
      //   }
      // }));

      this.nodes.actions.appendChild((0, _dom.make)('a', Special.CSS.button, {
        href: _data.default.promoUrl,
        target: '_blank',
        textContent: _data.default.CTAText
      }));
      if ((0, _check.isMobile)()) (0, _helper.scrollToElement)(this.container);
      Analytics.sendEvent('Result screen', 'Hit');
      Analytics.sendEvent("Result ".concat(this.userPoints, " screen"), 'Hit');
    }
    /**
     * Get result by users points
     * @return {result}
     */

  }, {
    key: "findResult",
    value: function findResult() {
      var results = _data.default.results,
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
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      finalResult.message = "".concat(this.userPoints, " \u0438\u0437 ").concat(this.totalLength, " \u0440\u0430\u0437\u0433\u0430\u0434\u0430\u043D\u043D\u044B\u0445 \u0448\u0438\u0444\u0440\u043E\u0432");
      return finalResult;
    }
    /**
     * Start game from first question
     * @param {Element} button - Restart button
     */

  }, {
    key: "restart",
    value: function restart(button) {
      var _this8 = this;

      if (button.classList.contains(Special.CSS.buttonLoading)) {
        return;
      }

      button.classList.add(Special.CSS.buttonLoading);
      Analytics.sendEvent('Restart button', 'Click');

      _ajax.default.get({
        url: "".concat(this.params.apiEndpoint, "/retry")
      }).then(
      /**
       * @param {object} response
       * @param {number} response.rc
       * @param {string} response.message
       * @param {object} response.data
       * @param {number} response.data.active_question
       */
      function (response) {
        button.classList.remove(Special.CSS.buttonLoading);
        _this8.currentQuestionId = response.data.active_question;

        _this8.updateMode('progress');

        (0, _dom.removeChildren)(_this8.nodes.content);

        _this8.nodes.content.appendChild(_this8.nodes.mainText);

        _this8.nodes.content.appendChild(_this8.nodes.options);

        _this8.nodes.content.appendChild(_this8.nodes.actions);

        _this8.makeQuestion();
      });
    }
    /**
     * Handler for header tab clicks
     * @param {Element} button - clicked tab
     */

  }, {
    key: "tabClicked",
    value: function tabClicked(button) {
      var tab = button.dataset.tab;
      this.activateTab(tab);
    }
    /**
     * Make specified tab active
     * @param {string} tab - tab name
     */

  }, {
    key: "activateTab",
    value: function activateTab(tab) {
      this.nodes.container.dataset.tab = tab;
      this.nodes.headerMenuTabs.forEach(function (item) {
        item.classList.toggle(Special.CSS.headerMenuButtonActive, item.dataset.tab === tab);
      });
      this.nodes.tabs.forEach(function (tabContainer) {
        tabContainer.classList.toggle(Special.CSS.contentHidden, tabContainer.dataset.tab !== tab);
      });
    }
    /**
     * Shows results table
     * @param {Element} button - «show results» or pagination [1], [2], [3]
     */

  }, {
    key: "showResultsTable",
    value: function showResultsTable(button) {
      var _this9 = this;

      this.updateMode('result-table');
      (0, _dom.removeElement)(this.nodes.result);
      (0, _dom.removeChildren)(this.nodes.options);
      (0, _dom.removeChildren)(this.nodes.actions);
      (0, _dom.removeChildren)(this.nodes.mainText);
      this.nodes.counter.innerHTML = "".concat(_svg.default.trophy, " <span>\u0422\u0443\u0440\u043D\u0438\u0440\u043D\u0430\u044F \u0442\u0430\u0431\u043B\u0438\u0446\u0430</span>");
      this.nodes.content.classList.add(Special.CSS.contentLoading);
      var limit = 10,
          offset = button.dataset.offset || 0;
      console.log('offset: %o, limit: %o', offset, limit); // ajax to check

      _ajax.default.get({
        url: "".concat(this.params.apiEndpoint, "/results"),
        data: {
          start: parseInt(offset),
          end: parseInt(offset) + limit
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
      function (response) {
        _this9.nodes.content.classList.remove(Special.CSS.contentLoading);

        console.log('results', response);

        _this9.nodes.counter.appendChild((0, _dom.make)('span', Special.CSS.button, {
          innerHTML: "".concat(_svg.default.back, " \u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F"),
          data: {
            click: 'makeResult'
          }
        }));

        var table = "\n          <table class=\"".concat(Special.CSS.resultsTable, "\">\n            <tr>\n              <th>#</th>\n              <th>\u0418\u043C\u044F</th>\n              <th>\u0428\u0438\u0444\u0440\u044B</th>\n            </tr>\n        ");
        response.data.list.forEach(function (user) {
          table += "\n            <tr class=\"".concat(user.isMe ? 'me' : '', "\">\n              <td>").concat(user.rank, "</td>\n              <td>").concat(user.name, "</td>\n              <td>").concat(user.points + 1, "</td>\n            </tr>\n          ");
        });
        table += '</table>';
        _this9.nodes.options.innerHTML = table;
        var paginationButtonsCount = Math.ceil(response.data.count / limit);
        var paginator = "\n          <div class=\"".concat(Special.CSS.resultsTable, "-pagination\">\n        ");

        for (var i = 0; i < paginationButtonsCount; i++) {
          paginator += "\n            <span class=\"".concat(Math.floor(offset / limit) === i ? 'current' : '', "\" data-click=\"showResultsTable\" data-offset=\"").concat(i * limit, "\">\n              ").concat(i + 1, "\n            </span>\n          ");
        }

        paginator += "</div>";
        _this9.nodes.actions.innerHTML = paginator;
      });

      Analytics.sendEvent('Results table', 'Hit');
    }
    /**
     * Shows auth popup
     */

  }, {
    key: "showAuth",
    value: function showAuth() {
      this.showPopup("\n      <div class=\"".concat(Special.CSS.auth, "\">\n        \u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0443\u0439\u0442\u0435\u0441\u044C \u0434\u043B\u044F \u0442\u043E\u0433\u043E, <br> \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u0447\u0430\u0442\u044C \u043A\u0432\u0435\u0441\u0442\n        <div class=\"").concat(Special.CSS.authButtons, "\">\n          <span class=\"vk\" data-click=\"auth\" data-url=\"/auth/vk\">\u0412\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0435</span>\n          <span class=\"fb\" data-click=\"auth\" data-url=\"/auth/facebook\">Facebook</span>\n          <br>\n          <span class=\"tw\" data-click=\"auth\" data-url=\"/auth/twitter\">Twitter</span>\n          <span class=\"ggl\" data-click=\"auth\" data-url=\"/auth/googleplus\">Google</span>\n        </div>\n      </div>\n    "));
    }
    /**
     * Handle clicks on the auth button
     * @param {Element} button
     */

  }, {
    key: "auth",
    value: function auth(button) {
      var _this10 = this;

      var url = button.dataset.url;
      new _auth.default(url, function () {
        _this10.checkUserState();

        _this10.closePopup();
      });
    }
  }, {
    key: "showPopup",
    value: function showPopup(content) {
      this.nodes.popupContainer.innerHTML = content += "\n      <span class=\"".concat(Special.CSS.popupClose, "\" data-click=\"closePopup\"></span>\n    ");
      this.nodes.popup.classList.add(Special.CSS.popupShowed);
    }
  }, {
    key: "closePopup",
    value: function closePopup() {
      this.nodes.popupContainer.innerHTML = '';
      this.nodes.popup.classList.remove(Special.CSS.popupShowed);
    }
    /**
     * Clicks on the popup overlay to close popup
     * @param event
     */

  }, {
    key: "popupOutsideClicked",
    value: function popupOutsideClicked(event) {
      var isInsidePopupContent = event.target.closest(".".concat(Special.CSS.popupContainer)) !== null;

      if (!isInsidePopupContent) {
        this.closePopup();
      }
    }
    /**
     * Handle clicks on video thumbnail
     * @param {Element} wrapper - video thumb wrapper
     */

  }, {
    key: "showVideo",
    value: function showVideo(wrapper) {
      var url = wrapper.dataset.url;
      this.showPopup("\n      <iframe width=\"".concat(Math.round(window.innerWidth * 0.8), "\" height=\"").concat(Math.round(window.innerHeight * 0.8), "\" src=\"").concat(url, "\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n    "));
    }
    /**
     * Show prize popup
     */

  }, {
    key: "showPrize",
    value: function showPrize() {
      this.showPopup(_data.default.prizePopup);
    }
  }, {
    key: "keydownHandler",
    value: function keydownHandler(event) {
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

  }, {
    key: "imageUrl",
    value: function imageUrl(url) {
      if (url.substring(0, 4) === 'http') {
        return url;
      }

      return this.staticURL + url;
    }
  }], [{
    key: "CSS",
    get: function get() {
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
        authButtons: 'bf-special__auth-buttons'
      };
    }
  }]);

  return Special;
}(_base.default);

if (!Element.prototype.matches) Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

if (!Element.prototype.closest) {
  Element.prototype.closest = function (s) {
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

/***/ }),

/***/ "./src/js/svg.js":
/*!***********************!*\
  !*** ./src/js/svg.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  trophy: '<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><path d="M17.5 2.62V0h-14v2.62H0v3.5a4.39 4.39 0 0 0 3.55 4.3 7 7 0 0 0 6.07 6.14v2.69H5.25V21h10.94v-1.75h-4.82v-2.69a7 7 0 0 0 6.08-6.14A4.39 4.39 0 0 0 21 6.12v-3.5zm-14 6a2.62 2.62 0 0 1-1.75-2.5V4.38H3.5zm12.25 1a5.25 5.25 0 1 1-10.5 0V1.75h10.5zm3.5-3.5A2.62 2.62 0 0 1 17.5 8.6V4.38h1.75z" fill-rule="evenodd"/></svg>',
  back: '<svg xmlns="http://www.w3.org/2000/svg" width="9.56" height="15.98" viewBox="0 0 9.56 15.98"><path fill-rule="evenodd" d="M3.58 7.92l5.89-5.85L7.39 0 0 7.34l.61.6-.61.6 7.46 7.44 2.1-2.1-5.98-5.96z"/></svg>'
};
exports.default = _default;

/***/ })

/******/ });
});
//# sourceMappingURL=all.js.map