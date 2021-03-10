/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pro/extend-blocks.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pro/extend-blocks.js":
/*!**********************************!*\
  !*** ./src/pro/extend-blocks.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var _wp$hooks = wp.hooks,
    addAction = _wp$hooks.addAction,
    addFilter = _wp$hooks.addFilter;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    Modal = _wp$components.Modal,
    TextControl = _wp$components.TextControl,
    CheckboxControl = _wp$components.CheckboxControl,
    SelectControl = _wp$components.SelectControl,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    ToggleControl = _wp$components.ToggleControl,
    Toolbar = _wp$components.Toolbar,
    ToolbarButton = _wp$components.ToolbarButton;
var createHigherOrderComponent = wp.compose.createHigherOrderComponent;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment,
    cloneElement = _wp$element.cloneElement;
var __ = wp.i18n.__;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar,
    BlockControls = _wp$blockEditor.BlockControls;
addFilter('inspector-line-number', 'hello-dolly/song-lyrics', function (component, showLineNumber, setAttributes) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(CheckboxControl, {
    label: "Show line number?",
    help: "Optionally display the lyric line number",
    checked: showLineNumber,
    onChange: function onChange(option) {
      setAttributes({
        showLineNumber: option
      });
    }
  }));
});
addFilter('song-list', 'hello-dolly/song-lyrics', function (songs) {
  var plan = hello_dolly_editor_data ? hello_dolly_editor_data.current_plan : null;

  if (plan === 'summertime' || plan === 'wonderful_world' || plan === 'dream') {
    songs.push({
      label: 'Summertime',
      value: 'Summertime'
    });
  }

  if (plan === 'wonderful_world' || plan === 'dream') {
    songs.push({
      label: 'Wonderful World',
      value: 'Wonderful World'
    });
  }

  if (plan === 'dream') {
    songs.push({
      label: 'Dream a Little Dream',
      value: 'Dream a Little Dream'
    });
  }

  return songs;
});
addFilter('song-lyrics', 'hello-dolly/song-lyrics', function (lyrics) {
  var plan = hello_dolly_editor_data ? hello_dolly_editor_data.current_plan : null;

  if (plan === 'summertime' || plan === 'wonderful_world' || plan === 'dream') {
    lyrics['Summertime'] = "Summertime and the livin' is easy\n      Fish are jumpin' and the cotton is high\n      Yo' daddy's rich and yo' mama's good lookin'\n      So hush little baby, don't you cry\n      One of these mornin's you gonna rise up singin'\n      You gonna spread your little wings and you'll take to the sky\n      But 'till that mornin' there ain't nothin' gonna harm you\n      With yo mama and daddy standin' bye\n      Now it's summertime and the livin' is easy\n      Them fish are jumpin' and the cotton's 'bout waist high\n      Yo' daddy's rich and, ya know yo' mama's good lookin'\n      Now hush little baby, don't you cry\n      Summertime\n      Ah, said it's summertime";
  }

  if (plan === 'wonderful_world' || plan === 'dream') {
    lyrics['Wonderful World'] = "I see trees of green, red roses, too,\n      I see them bloom, for me and you\n      And I think to myself\n      What a wonderful world.\n      I see skies of blue, and clouds of white,\n      The bright blessed day, the dark sacred night\n      And I think to myself\n      What a wonderful world.\n      The colors of the rainbow, so pretty in the sky,\n      Are also on the faces of people going by.\n      I see friends shaking hands, sayin', \"How do you do?\"\n      They're really sayin', \"I love you.\"\n      I hear babies cryin'. I watch them grow.\n      They'll learn much more than I'll ever know\n      And I think to myself\n      What a wonderful world\n      Yes, I think to myself\n      What a wonderful world";
  }

  if (plan === 'dream') {
    lyrics['Dream a Little Dream'] = "Stars shining bright above you\n      Night breezes seem to whisper \"I love you\"\n      Birds singing in the sycamore tree\n      Dream a little dream of me\n      Say \"Nighty-night\" and kiss me\n      Just hold me tight and tell me you'll miss me\n      While I'm alone and blue as can be\n      Dream a little dream of me\n      Stars fading but I linger on dear\n      Oh how you linger on\n      Still craving your kiss\n      How you crave my kiss\n      Now I'm longin' to linger till dawn dear\n      Just saying this\n      Give me a little kiss\n      Sweet dreams till sunbeams find you\n      Sweet dreams that leave all worries behind you\n      But in your dreams, whatever they be\n      Dream a little dream of me\n      Stars fading but I linger on dear\n      Still craving your kiss\n      Yeah, I'm longing to linger till dawn dear\n      Just saying this, yes\n      Sweet dreams\n      Dreamin'\n      Till sunbeams find you\n      Keep dreaming\n      Gotta keep dreamin'\n      Leave your worries far behind you\n      But in your dreams, whatever they be\n      You gotta make me a promise\n      Promise to me you'll dream\n      Dream a little dream of me";
  }

  return lyrics;
});

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=extend-blocks.js.map