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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/blocks/song-lyrics/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./src/blocks/components/RadioControl.js":
/*!***********************************************!*\
  !*** ./src/blocks/components/RadioControl.js ***!
  \***********************************************/
/*! exports provided: SongRadioControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongRadioControl", function() { return SongRadioControl; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


var SongRadioControl = function SongRadioControl(props) {
  var song = props.song,
      setAttributes = props.setAttributes,
      lyrics = props.lyrics,
      updateLyric = props.updateLyric;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RadioControl"], {
    label: "Select Song:",
    selected: song,
    options: [{
      label: 'Hello Dolly',
      value: 'Hello Dolly'
    }, {
      label: 'Summertime',
      value: 'Summertime'
    }, {
      label: 'Wonderful World',
      value: 'Wonderful World'
    }, {
      label: 'Dream a Little Dream',
      value: 'Dream a Little Dream'
    }],
    onChange: function onChange(option) {
      updateLyric(option, lyrics[option], setAttributes);
    }
  }));
};

/***/ }),

/***/ "./src/blocks/song-lyrics/index.js":
/*!*****************************************!*\
  !*** ./src/blocks/song-lyrics/index.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_RadioControl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/RadioControl */ "./src/blocks/components/RadioControl.js");
/* harmony import */ var _lyrics__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lyrics */ "./src/blocks/song-lyrics/lyrics.js");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var Component = wp.element.Component;
var InspectorControls = wp.blockEditor.InspectorControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow;
var __ = wp.i18n.__;
var blockStyle = {
  padding: '20px'
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_7__["registerBlockType"])('hello-dolly/song-lyrics', {
  title: 'Song Lyrics',
  icon: 'format-audio',
  category: 'text',
  example: {},
  attributes: {
    song: {
      type: 'string',
      default: 'Hello Dolly'
    },
    lyric: {
      type: 'string',
      default: 'Hello, Dolly'
    },
    lineNumber: {
      type: 'string',
      default: '1'
    }
  },
  edit: /*#__PURE__*/function (_Component) {
    _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(edit, _Component);

    var _super = _createSuper(edit);

    function edit(props) {
      var _this;

      _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, edit);

      _this = _super.call(this, props);
      _this.props = props;
      _this.updateLyric = _this.updateLyric.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
      return _this;
    }

    _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(edit, [{
      key: "updateLyric",
      value: function updateLyric(song, rawLines, setAttributes) {
        //console.log(rawLines);
        var lines = rawLines.split(/\n/);
        var randLineNum = Math.floor(Math.random() * lines.length);
        console.log('Updating: ', song, lines[randLineNum], (randLineNum + 1).toString());
        setAttributes({
          song: song,
          lyric: lines[randLineNum],
          lineNumber: (randLineNum + 1).toString()
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            _this$props$attribute = _this$props.attributes,
            song = _this$props$attribute.song,
            lyric = _this$props$attribute.lyric,
            lineNumber = _this$props$attribute.lineNumber,
            setAttributes = _this$props.setAttributes;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
          style: blockStyle
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("span", {
          style: {
            fontWeight: 'bold'
          }
        }, song), ": ", lyric, " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("span", {
          style: {
            fontStyle: 'italic'
          }
        }, "(", lineNumber, ")"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(PanelBody, {
          className: "faq-themes-panel",
          title: __("Hello Dolly Freemium", "hello-dolly"),
          initialOpen: true
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_components_RadioControl__WEBPACK_IMPORTED_MODULE_9__["SongRadioControl"], {
          updateLyric: this.updateLyric,
          song: song,
          lyrics: _lyrics__WEBPACK_IMPORTED_MODULE_10__["lyrics"],
          setAttributes: setAttributes
        })))));
      }
    }]);

    return edit;
  }(Component),
  save: function save(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
      style: blockStyle
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("span", {
      style: {
        fontWeight: 'bold'
      }
    }, props.attributes.song), ": ", props.attributes.lyric, " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("span", {
      style: {
        fontStyle: 'italic'
      }
    }, "(", props.attributes.lineNumber, ")"));
  }
});

/***/ }),

/***/ "./src/blocks/song-lyrics/lyrics.js":
/*!******************************************!*\
  !*** ./src/blocks/song-lyrics/lyrics.js ***!
  \******************************************/
/*! exports provided: lyrics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lyrics", function() { return lyrics; });
var lyrics = {
  'Hello Dolly': "Hello, Dolly\n  Well, hello, Dolly\n  It's so nice to have you back where you belong\n  You're lookin' swell, Dolly\n  I can tell, Dolly\n  You're still glowin', you're still crowin'\n  You're still goin' strong\n  We feel the room swayin'\n  While the band's playin'\n  One of your old favourite songs from way back when\n  So, take her wrap, fellas\n  Find her an empty lap, fellas\n  Dolly'll never go away again\n  Hello, Dolly\n  Well, hello, Dolly\n  It's so nice to have you back where you belong\n  You're lookin' swell, Dolly\n  I can tell, Dolly\n  You're still glowin', you're still crowin'\n  You're still goin' strong\n  We feel the room swayin'\n  While the band's playin'\n  One of your old favourite songs from way back when\n  Golly, gee, fellas\n  Find her a vacant knee, fellas\n  Dolly'll never go away\n  Dolly'll never go away\n  Dolly'll never go away again",
  'Summertime': "Summertime and the livin' is easy\n  Fish are jumpin' and the cotton is high\n  Yo' daddy's rich and yo' mama's good lookin'\n  So hush little baby, don't you cry\n  One of these mornin's you gonna rise up singin'\n  You gonna spread your little wings and you'll take to the sky\n  But 'till that mornin' there ain't nothin' gonna harm you\n  With yo mama and daddy standin' bye\n  Now it's summertime and the livin' is easy\n  Them fish are jumpin' and the cotton's 'bout waist high\n  Yo' daddy's rich and, ya know yo' mama's good lookin'\n  Now hush little baby, don't you cry\n  Summertime\n  Ah, said it's summertime",
  'Wonderful World': "I see trees of green, red roses, too,\n  I see them bloom, for me and you\n  And I think to myself\n  What a wonderful world.\n  I see skies of blue, and clouds of white,\n  The bright blessed day, the dark sacred night\n  And I think to myself\n  What a wonderful world.\n  The colors of the rainbow, so pretty in the sky,\n  Are also on the faces of people going by.\n  I see friends shaking hands, sayin', \"How do you do?\"\n  They're really sayin', \"I love you.\"\n  I hear babies cryin'. I watch them grow.\n  They'll learn much more than I'll ever know\n  And I think to myself\n  What a wonderful world\n  Yes, I think to myself\n  What a wonderful world",
  'Dream a Little Dream': "Stars shining bright above you\n  Night breezes seem to whisper \"I love you\"\n  Birds singing in the sycamore tree\n  Dream a little dream of me\n  Say \"Nighty-night\" and kiss me\n  Just hold me tight and tell me you'll miss me\n  While I'm alone and blue as can be\n  Dream a little dream of me\n  Stars fading but I linger on dear\n  Oh how you linger on\n  Still craving your kiss\n  How you crave my kiss\n  Now I'm longin' to linger till dawn dear\n  Just saying this\n  Give me a little kiss\n  Sweet dreams till sunbeams find you\n  Sweet dreams that leave all worries behind you\n  But in your dreams, whatever they be\n  Dream a little dream of me\n  Stars fading but I linger on dear\n  Still craving your kiss\n  Yeah, I'm longing to linger till dawn dear\n  Just saying this, yes\n  Sweet dreams\n  Dreamin'\n  Till sunbeams find you\n  Keep dreaming\n  Gotta keep dreamin'\n  Leave your worries far behind you\n  But in your dreams, whatever they be\n  You gotta make me a promise\n  Promise to me you'll dream\n  Dream a little dream of me"
};

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

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
//# sourceMappingURL=index.js.map