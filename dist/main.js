/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  color: #444444;\n  line-height: 1.6;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  line-height: 1.2;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.grids {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 3rem;\n  justify-content: center;\n  margin: 0 3rem;\n}\n\n.row {\n  display: flex;\n}\n\n.ship-box {\n  box-sizing: border-box;\n  border-collapse: collapse;\n  height: 1.5rem;\n  width: 1.5rem;\n  border: 0.5px solid rgb(0, 0, 225);\n}\n\n.ship {\n  border-collapse: collapse;\n  height: 1.5rem;\n  width: 1.5rem;\n  border: 2px solid rgb(0, 0, 225);\n  background: rgba(0, 0, 255, 0.05);\n}\n\n.miss {\n  border-collapse: collapse;\n  height: 1.5rem;\n  width: 1.5rem;\n  background: grey;\n}\n\n.hit {\n  border-collapse: collapse;\n  height: 1.5rem;\n  width: 1.5rem;\n  border: 2px solid red;\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.grid-label {\n  text-align: center;\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;;;;;;EAME,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,SAAS;EACT,uBAAuB;EACvB,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,sBAAsB;EACtB,yBAAyB;EACzB,cAAc;EACd,aAAa;EACb,kCAAkC;AACpC;;AAEA;EACE,yBAAyB;EACzB,cAAc;EACd,aAAa;EACb,gCAAgC;EAChC,iCAAiC;AACnC;;AAEA;EACE,yBAAyB;EACzB,cAAc;EACd,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;EACzB,cAAc;EACd,aAAa;EACb,qBAAqB;EACrB,gCAAgC;AAClC;;AAEA;EACE,kBAAkB;AACpB","sourcesContent":["html {\n  color: #444444;\n  line-height: 1.6;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  line-height: 1.2;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.grids {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 3rem;\n  justify-content: center;\n  margin: 0 3rem;\n}\n\n.row {\n  display: flex;\n}\n\n.ship-box {\n  box-sizing: border-box;\n  border-collapse: collapse;\n  height: 1.5rem;\n  width: 1.5rem;\n  border: 0.5px solid rgb(0, 0, 225);\n}\n\n.ship {\n  border-collapse: collapse;\n  height: 1.5rem;\n  width: 1.5rem;\n  border: 2px solid rgb(0, 0, 225);\n  background: rgba(0, 0, 255, 0.05);\n}\n\n.miss {\n  border-collapse: collapse;\n  height: 1.5rem;\n  width: 1.5rem;\n  background: grey;\n}\n\n.hit {\n  border-collapse: collapse;\n  height: 1.5rem;\n  width: 1.5rem;\n  border: 2px solid red;\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.grid-label {\n  text-align: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ play)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/js/gameboard.js");
/* harmony import */ var _render_gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render-gameboard */ "./src/js/render-gameboard.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/js/player.js");




let humanBoard;
let opponentBoard;
let humanPlayer;
let computerPlayer;

function endGame(winner) {
  _render_gameboard__WEBPACK_IMPORTED_MODULE_1__.removeListeners();

  if (winner === "human") {
    _render_gameboard__WEBPACK_IMPORTED_MODULE_1__.updateMessage("You win! Play again?");
  } else {
    _render_gameboard__WEBPACK_IMPORTED_MODULE_1__.updateMessage("Sorry, you lost. Play again?");
  }
}

function computerTurn() {
  const attack = computerPlayer.attack();
  _render_gameboard__WEBPACK_IMPORTED_MODULE_1__.updateCell(attack.result, "human", attack.coordinates);

  if (humanBoard.hasAllShipsSunk()) {
    endGame("computer");
  }

  _render_gameboard__WEBPACK_IMPORTED_MODULE_1__.updateMessage("Your turn!");
}

function humanTurn(event) {
  const x = event.target.dataset.row;
  const y = event.target.dataset.col;

  const attack = humanPlayer.attack({ x, y });
  _render_gameboard__WEBPACK_IMPORTED_MODULE_1__.updateCell(attack.result, "computer", { x, y }, humanTurn);

  if (opponentBoard.hasAllShipsSunk()) {
    endGame("human");
  } else {
    _render_gameboard__WEBPACK_IMPORTED_MODULE_1__.updateMessage("Your opponent is playing. Please wait.");
    computerTurn();
  }
}

function play() {
  _render_gameboard__WEBPACK_IMPORTED_MODULE_1__.reset();

  humanBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();
  humanBoard.autofill();
  _render_gameboard__WEBPACK_IMPORTED_MODULE_1__.renderHumanBoard(humanBoard);

  opponentBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();
  opponentBoard.autofill();

  humanPlayer = (0,_player__WEBPACK_IMPORTED_MODULE_2__["default"])("human", opponentBoard);
  _render_gameboard__WEBPACK_IMPORTED_MODULE_1__.attachListeners(humanTurn);
  computerPlayer = (0,_player__WEBPACK_IMPORTED_MODULE_2__["default"])("computer", humanBoard);

  _render_gameboard__WEBPACK_IMPORTED_MODULE_1__.updateMessage("You go first!");
}


/***/ }),

/***/ "./src/js/gameboard.js":
/*!*****************************!*\
  !*** ./src/js/gameboard.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _get_open_coordinates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-open-coordinates */ "./src/js/get-open-coordinates.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/js/ship.js");



function Gameboard() {
  const grid = [...Array(10)].map(() => Array(10));

  const ships = [];

  function setShip(ship, coordinates) {
    coordinates.forEach((coordinate) => {
      grid[coordinate.x][coordinate.y] = ship;
      ships.push(ship);
    });
  }

  function receiveAttack(x, y) {
    const cell = grid[x][y];

    if (typeof cell === "object") {
      cell.hit();
      grid[x][y] = "hit";
      return true;
    }

    grid[x][y] = "miss";
    return false;
  }

  function hasAllShipsSunk() {
    return ships.every((ship) => ship.isSunk());
  }

  function autofill() {
    const carrier = (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(5);
    let openCoordinates = (0,_get_open_coordinates__WEBPACK_IMPORTED_MODULE_0__["default"])(grid, 5);
    setShip(carrier, openCoordinates);

    const battleship = (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(4);
    openCoordinates = (0,_get_open_coordinates__WEBPACK_IMPORTED_MODULE_0__["default"])(grid, 4);
    setShip(battleship, openCoordinates);

    const destroyer = (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(3);
    openCoordinates = (0,_get_open_coordinates__WEBPACK_IMPORTED_MODULE_0__["default"])(grid, 3);
    setShip(destroyer, openCoordinates);

    const submarine = (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(3);
    openCoordinates = (0,_get_open_coordinates__WEBPACK_IMPORTED_MODULE_0__["default"])(grid, 3);
    setShip(submarine, openCoordinates);

    const patrolBoat = (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(2);
    openCoordinates = (0,_get_open_coordinates__WEBPACK_IMPORTED_MODULE_0__["default"])(grid, 2);
    setShip(patrolBoat, openCoordinates);

    return ships;
  }

  return { grid, setShip, receiveAttack, hasAllShipsSunk, autofill };
}


/***/ }),

/***/ "./src/js/get-open-coordinates.js":
/*!****************************************!*\
  !*** ./src/js/get-open-coordinates.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getOpenCoordinates)
/* harmony export */ });
function getOpenCoordinates (grid, shipLength) {
  let openCoordinates;
  
  function checkDirection(coordinates, direction) {
    let { x, y } = coordinates;
    openCoordinates = [];
    
    let i = 0;
    // For each space need for the length of the given ship
    while (i < shipLength) {      
      // Move one space in the given direction
      x += direction.x;
      y += direction.y;

      // If that space is not open, end the loop and exit the function
      if (x < 0 || y < 0 || x > grid.length - 1 || 
          y > grid.length - 1 || grid[x][y] !== undefined) {
        openCoordinates = null;
        break;
      };
  
    // While each space is open, add it to openCoordinates
    openCoordinates.push({ x, y });
    i += 1;
    };

    // If all spaces in a given direction are open, for loop will end and 
    // openCoordinates will stay defined, thus ending the entire function
  };
  
  function checkDirections(coordinates) {
    // Direction differentials for each axis
    const possibleDirections = [
      { x: 0, y: 1 },
      { x: 1, y: 0 },
      { x: 0, y: -1 },
      { x: -1, y: 0 }
    ];
  
    // While there are still directions to check
    while (possibleDirections.length > 0) {
      // Remove direction from queue
      const randomIndex = Math.floor(Math.random() * possibleDirections.length);
      const direction = possibleDirections.splice(randomIndex, 1)[0];
      
      // Check needed spaces in that direction
      checkDirection(coordinates, direction);

      // If checkDirection finds an open direction for this starting coordinate, exit the loop
      if (openCoordinates) {
        break;
      }
    }
  }
  
  // While the function hasn't found an open set of coordinates for this length ship,
  // keep looping
  while (openCoordinates === undefined) {    
    const triedCoordinates = [];
    // Generate a random starting coordinate
    const x = Math.floor(Math.random() * (grid.length - 1));
    const y = Math.floor(Math.random() * (grid.length - 1));

    // If that coordinate is open, check in each direction
    if (grid[x][y] === undefined && !triedCoordinates.includes({ x, y})) {
      checkDirections({ x, y });
    }

    triedCoordinates.push({x, y});
  }
  
  return openCoordinates;
}



/***/ }),

/***/ "./src/js/player.js":
/*!**************************!*\
  !*** ./src/js/player.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
function Player(type, opponentBoard) {
  const possibleMoves = [];
  for (let x = 0; x <= 9; x += 1) {
    for (let y = 0; y <= 9; y += 1) {
      possibleMoves.push({ x, y });
    }
  }

  function getRandomNewCoordinates() {
    const randomIndex = Math.floor(Math.random() * possibleMoves.length);
    const nextCoordinates = possibleMoves[randomIndex];
    possibleMoves.splice(randomIndex, 1);
    return nextCoordinates;
  }

  function attack(coordinateParams) {
    let coordinates = coordinateParams;

    if (coordinates === undefined) {
      coordinates = getRandomNewCoordinates();
    }

    const result = opponentBoard.receiveAttack(coordinates.x, coordinates.y);
    return { result, coordinates };
  }

  return { attack, getRandomNewCoordinates };
}


/***/ }),

/***/ "./src/js/render-gameboard.js":
/*!************************************!*\
  !*** ./src/js/render-gameboard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "attachListeners": () => (/* binding */ attachListeners),
/* harmony export */   "removeListeners": () => (/* binding */ removeListeners),
/* harmony export */   "renderEmptyGrids": () => (/* binding */ renderEmptyGrids),
/* harmony export */   "renderHumanBoard": () => (/* binding */ renderHumanBoard),
/* harmony export */   "reset": () => (/* binding */ reset),
/* harmony export */   "updateCell": () => (/* binding */ updateCell),
/* harmony export */   "updateMessage": () => (/* binding */ updateMessage)
/* harmony export */ });
function renderEmptyGrids() {
  const rows = document.querySelectorAll(".row");
  rows.forEach((row) => {
    for (let i = 0; i <= 9; i += 1) {
      const shipBox = document.createElement("div");
      shipBox.className = "ship-box";
      shipBox.dataset.row = row.dataset.row;
      shipBox.dataset.col = i;
      row.append(shipBox);
    }
  });
}

function attachListeners(callback) {
  const opponentCells = document.querySelectorAll(".computer-grid .ship-box");

  opponentCells.forEach((cell) => {
    cell.addEventListener("click", callback);
  });
}

function renderHumanBoard(humanBoard) {
  for (let r = 0; r < 9; r += 1) {
    for (let c = 0; c < 9; c += 1) {
      if (typeof humanBoard.grid[r][c] === "object") {
        const cell = document.querySelector(
          `.human-grid [data-row="${r}"][data-col="${c}"]`
        );

        cell.classList.add("ship");
      }
    }
  }
}

function updateCell(result, attackee, coordinates, callback) {
  const cell = document.querySelector(
    `.${attackee}-grid [data-row="${coordinates.x}"][data-col="${coordinates.y}"]`
  );

  if (result) {
    cell.classList.remove("ship");
    cell.classList.add("hit");
  } else {
    cell.classList.add("miss");
  }

  if (callback) {
    cell.removeEventListener("click", callback);
  }
}

function updateMessage(string) {
  document.querySelector(".message").textContent = string;
}

function removeListeners(callback) {
  const opponentCells = document.querySelectorAll(".computer-grid .ship-box");

  opponentCells.forEach((cell) => {
    cell.removeEventListener("click", callback);
  });
}

function reset() {
  const allCells = document.querySelectorAll(".ship-box");
  allCells.forEach((cell) => {
    const cellElement = cell;
    cellElement.className = "ship-box";
  });
}




/***/ }),

/***/ "./src/js/ship.js":
/*!************************!*\
  !*** ./src/js/ship.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
function Ship(length) {
  let hits = 0;
  
  function hit() {
    hits += 1;
  }

  function isSunk() {
    return hits >= length
  }
  
  return { length, hit, isSunk }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _js_render_gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/render-gameboard */ "./src/js/render-gameboard.js");
/* harmony import */ var _js_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/game */ "./src/js/game.js");




_js_render_gameboard__WEBPACK_IMPORTED_MODULE_1__.renderEmptyGrids();

const playButton = document.querySelector("button");
playButton.onclick = _js_game__WEBPACK_IMPORTED_MODULE_2__["default"];

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7QUNoRmE7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOzs7Ozs7VUNaQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDb0M7QUFDN0I7O0FBRTdCLGtFQUFpQzs7QUFFakM7QUFDQSxxQkFBcUIsZ0RBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvZ2V0LW9wZW4tY29vcmRpbmF0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9yZW5kZXItZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxuICBjb2xvcjogIzQ0NDQ0NDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZ3JpZHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogM3JlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAwIDNyZW07XFxufVxcblxcbi5yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnNoaXAtYm94IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICB3aWR0aDogMS41cmVtO1xcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2IoMCwgMCwgMjI1KTtcXG59XFxuXFxuLnNoaXAge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgd2lkdGg6IDEuNXJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigwLCAwLCAyMjUpO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAyNTUsIDAuMDUpO1xcbn1cXG5cXG4ubWlzcyB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICB3aWR0aDogMS41cmVtO1xcbiAgYmFja2dyb3VuZDogZ3JleTtcXG59XFxuXFxuLmhpdCB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICB3aWR0aDogMS41cmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDAsIDAsIDAuNSk7XFxufVxcblxcbi5ncmlkLWxhYmVsIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBOzs7Ozs7RUFNRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsU0FBUztFQUNULHVCQUF1QjtFQUN2QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsYUFBYTtFQUNiLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcbiAgY29sb3I6ICM0NDQ0NDQ7XFxuICBsaW5lLWhlaWdodDogMS42O1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBsaW5lLWhlaWdodDogMS4yO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmdyaWRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDNyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMCAzcmVtO1xcbn1cXG5cXG4ucm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zaGlwLWJveCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgd2lkdGg6IDEuNXJlbTtcXG4gIGJvcmRlcjogMC41cHggc29saWQgcmdiKDAsIDAsIDIyNSk7XFxufVxcblxcbi5zaGlwIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG4gIHdpZHRoOiAxLjVyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMCwgMCwgMjI1KTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMjU1LCAwLjA1KTtcXG59XFxuXFxuLm1pc3Mge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgd2lkdGg6IDEuNXJlbTtcXG4gIGJhY2tncm91bmQ6IGdyZXk7XFxufVxcblxcbi5oaXQge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgd2lkdGg6IDEuNXJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4uZ3JpZC1sYWJlbCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0ICogYXMgR2FtZWJvYXJkRGlzcGxheSBmcm9tIFwiLi9yZW5kZXItZ2FtZWJvYXJkXCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuXG5sZXQgaHVtYW5Cb2FyZDtcbmxldCBvcHBvbmVudEJvYXJkO1xubGV0IGh1bWFuUGxheWVyO1xubGV0IGNvbXB1dGVyUGxheWVyO1xuXG5mdW5jdGlvbiBlbmRHYW1lKHdpbm5lcikge1xuICBHYW1lYm9hcmREaXNwbGF5LnJlbW92ZUxpc3RlbmVycygpO1xuXG4gIGlmICh3aW5uZXIgPT09IFwiaHVtYW5cIikge1xuICAgIEdhbWVib2FyZERpc3BsYXkudXBkYXRlTWVzc2FnZShcIllvdSB3aW4hIFBsYXkgYWdhaW4/XCIpO1xuICB9IGVsc2Uge1xuICAgIEdhbWVib2FyZERpc3BsYXkudXBkYXRlTWVzc2FnZShcIlNvcnJ5LCB5b3UgbG9zdC4gUGxheSBhZ2Fpbj9cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29tcHV0ZXJUdXJuKCkge1xuICBjb25zdCBhdHRhY2sgPSBjb21wdXRlclBsYXllci5hdHRhY2soKTtcbiAgR2FtZWJvYXJkRGlzcGxheS51cGRhdGVDZWxsKGF0dGFjay5yZXN1bHQsIFwiaHVtYW5cIiwgYXR0YWNrLmNvb3JkaW5hdGVzKTtcblxuICBpZiAoaHVtYW5Cb2FyZC5oYXNBbGxTaGlwc1N1bmsoKSkge1xuICAgIGVuZEdhbWUoXCJjb21wdXRlclwiKTtcbiAgfVxuXG4gIEdhbWVib2FyZERpc3BsYXkudXBkYXRlTWVzc2FnZShcIllvdXIgdHVybiFcIik7XG59XG5cbmZ1bmN0aW9uIGh1bWFuVHVybihldmVudCkge1xuICBjb25zdCB4ID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQucm93O1xuICBjb25zdCB5ID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuY29sO1xuXG4gIGNvbnN0IGF0dGFjayA9IGh1bWFuUGxheWVyLmF0dGFjayh7IHgsIHkgfSk7XG4gIEdhbWVib2FyZERpc3BsYXkudXBkYXRlQ2VsbChhdHRhY2sucmVzdWx0LCBcImNvbXB1dGVyXCIsIHsgeCwgeSB9LCBodW1hblR1cm4pO1xuXG4gIGlmIChvcHBvbmVudEJvYXJkLmhhc0FsbFNoaXBzU3VuaygpKSB7XG4gICAgZW5kR2FtZShcImh1bWFuXCIpO1xuICB9IGVsc2Uge1xuICAgIEdhbWVib2FyZERpc3BsYXkudXBkYXRlTWVzc2FnZShcIllvdXIgb3Bwb25lbnQgaXMgcGxheWluZy4gUGxlYXNlIHdhaXQuXCIpO1xuICAgIGNvbXB1dGVyVHVybigpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBsYXkoKSB7XG4gIEdhbWVib2FyZERpc3BsYXkucmVzZXQoKTtcblxuICBodW1hbkJvYXJkID0gR2FtZWJvYXJkKCk7XG4gIGh1bWFuQm9hcmQuYXV0b2ZpbGwoKTtcbiAgR2FtZWJvYXJkRGlzcGxheS5yZW5kZXJIdW1hbkJvYXJkKGh1bWFuQm9hcmQpO1xuXG4gIG9wcG9uZW50Qm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgb3Bwb25lbnRCb2FyZC5hdXRvZmlsbCgpO1xuXG4gIGh1bWFuUGxheWVyID0gUGxheWVyKFwiaHVtYW5cIiwgb3Bwb25lbnRCb2FyZCk7XG4gIEdhbWVib2FyZERpc3BsYXkuYXR0YWNoTGlzdGVuZXJzKGh1bWFuVHVybik7XG4gIGNvbXB1dGVyUGxheWVyID0gUGxheWVyKFwiY29tcHV0ZXJcIiwgaHVtYW5Cb2FyZCk7XG5cbiAgR2FtZWJvYXJkRGlzcGxheS51cGRhdGVNZXNzYWdlKFwiWW91IGdvIGZpcnN0IVwiKTtcbn1cbiIsImltcG9ydCBnZXRPcGVuQ29vcmRpbmF0ZXMgZnJvbSBcIi4vZ2V0LW9wZW4tY29vcmRpbmF0ZXNcIjtcbmltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZWJvYXJkKCkge1xuICBjb25zdCBncmlkID0gWy4uLkFycmF5KDEwKV0ubWFwKCgpID0+IEFycmF5KDEwKSk7XG5cbiAgY29uc3Qgc2hpcHMgPSBbXTtcblxuICBmdW5jdGlvbiBzZXRTaGlwKHNoaXAsIGNvb3JkaW5hdGVzKSB7XG4gICAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgZ3JpZFtjb29yZGluYXRlLnhdW2Nvb3JkaW5hdGUueV0gPSBzaGlwO1xuICAgICAgc2hpcHMucHVzaChzaGlwKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soeCwgeSkge1xuICAgIGNvbnN0IGNlbGwgPSBncmlkW3hdW3ldO1xuXG4gICAgaWYgKHR5cGVvZiBjZWxsID09PSBcIm9iamVjdFwiKSB7XG4gICAgICBjZWxsLmhpdCgpO1xuICAgICAgZ3JpZFt4XVt5XSA9IFwiaGl0XCI7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBncmlkW3hdW3ldID0gXCJtaXNzXCI7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFzQWxsU2hpcHNTdW5rKCkge1xuICAgIHJldHVybiBzaGlwcy5ldmVyeSgoc2hpcCkgPT4gc2hpcC5pc1N1bmsoKSk7XG4gIH1cblxuICBmdW5jdGlvbiBhdXRvZmlsbCgpIHtcbiAgICBjb25zdCBjYXJyaWVyID0gU2hpcCg1KTtcbiAgICBsZXQgb3BlbkNvb3JkaW5hdGVzID0gZ2V0T3BlbkNvb3JkaW5hdGVzKGdyaWQsIDUpO1xuICAgIHNldFNoaXAoY2Fycmllciwgb3BlbkNvb3JkaW5hdGVzKTtcblxuICAgIGNvbnN0IGJhdHRsZXNoaXAgPSBTaGlwKDQpO1xuICAgIG9wZW5Db29yZGluYXRlcyA9IGdldE9wZW5Db29yZGluYXRlcyhncmlkLCA0KTtcbiAgICBzZXRTaGlwKGJhdHRsZXNoaXAsIG9wZW5Db29yZGluYXRlcyk7XG5cbiAgICBjb25zdCBkZXN0cm95ZXIgPSBTaGlwKDMpO1xuICAgIG9wZW5Db29yZGluYXRlcyA9IGdldE9wZW5Db29yZGluYXRlcyhncmlkLCAzKTtcbiAgICBzZXRTaGlwKGRlc3Ryb3llciwgb3BlbkNvb3JkaW5hdGVzKTtcblxuICAgIGNvbnN0IHN1Ym1hcmluZSA9IFNoaXAoMyk7XG4gICAgb3BlbkNvb3JkaW5hdGVzID0gZ2V0T3BlbkNvb3JkaW5hdGVzKGdyaWQsIDMpO1xuICAgIHNldFNoaXAoc3VibWFyaW5lLCBvcGVuQ29vcmRpbmF0ZXMpO1xuXG4gICAgY29uc3QgcGF0cm9sQm9hdCA9IFNoaXAoMik7XG4gICAgb3BlbkNvb3JkaW5hdGVzID0gZ2V0T3BlbkNvb3JkaW5hdGVzKGdyaWQsIDIpO1xuICAgIHNldFNoaXAocGF0cm9sQm9hdCwgb3BlbkNvb3JkaW5hdGVzKTtcblxuICAgIHJldHVybiBzaGlwcztcbiAgfVxuXG4gIHJldHVybiB7IGdyaWQsIHNldFNoaXAsIHJlY2VpdmVBdHRhY2ssIGhhc0FsbFNoaXBzU3VuaywgYXV0b2ZpbGwgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9wZW5Db29yZGluYXRlcyAoZ3JpZCwgc2hpcExlbmd0aCkge1xuICBsZXQgb3BlbkNvb3JkaW5hdGVzO1xuICBcbiAgZnVuY3Rpb24gY2hlY2tEaXJlY3Rpb24oY29vcmRpbmF0ZXMsIGRpcmVjdGlvbikge1xuICAgIGxldCB7IHgsIHkgfSA9IGNvb3JkaW5hdGVzO1xuICAgIG9wZW5Db29yZGluYXRlcyA9IFtdO1xuICAgIFxuICAgIGxldCBpID0gMDtcbiAgICAvLyBGb3IgZWFjaCBzcGFjZSBuZWVkIGZvciB0aGUgbGVuZ3RoIG9mIHRoZSBnaXZlbiBzaGlwXG4gICAgd2hpbGUgKGkgPCBzaGlwTGVuZ3RoKSB7ICAgICAgXG4gICAgICAvLyBNb3ZlIG9uZSBzcGFjZSBpbiB0aGUgZ2l2ZW4gZGlyZWN0aW9uXG4gICAgICB4ICs9IGRpcmVjdGlvbi54O1xuICAgICAgeSArPSBkaXJlY3Rpb24ueTtcblxuICAgICAgLy8gSWYgdGhhdCBzcGFjZSBpcyBub3Qgb3BlbiwgZW5kIHRoZSBsb29wIGFuZCBleGl0IHRoZSBmdW5jdGlvblxuICAgICAgaWYgKHggPCAwIHx8IHkgPCAwIHx8IHggPiBncmlkLmxlbmd0aCAtIDEgfHwgXG4gICAgICAgICAgeSA+IGdyaWQubGVuZ3RoIC0gMSB8fCBncmlkW3hdW3ldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgb3BlbkNvb3JkaW5hdGVzID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9O1xuICBcbiAgICAvLyBXaGlsZSBlYWNoIHNwYWNlIGlzIG9wZW4sIGFkZCBpdCB0byBvcGVuQ29vcmRpbmF0ZXNcbiAgICBvcGVuQ29vcmRpbmF0ZXMucHVzaCh7IHgsIHkgfSk7XG4gICAgaSArPSAxO1xuICAgIH07XG5cbiAgICAvLyBJZiBhbGwgc3BhY2VzIGluIGEgZ2l2ZW4gZGlyZWN0aW9uIGFyZSBvcGVuLCBmb3IgbG9vcCB3aWxsIGVuZCBhbmQgXG4gICAgLy8gb3BlbkNvb3JkaW5hdGVzIHdpbGwgc3RheSBkZWZpbmVkLCB0aHVzIGVuZGluZyB0aGUgZW50aXJlIGZ1bmN0aW9uXG4gIH07XG4gIFxuICBmdW5jdGlvbiBjaGVja0RpcmVjdGlvbnMoY29vcmRpbmF0ZXMpIHtcbiAgICAvLyBEaXJlY3Rpb24gZGlmZmVyZW50aWFscyBmb3IgZWFjaCBheGlzXG4gICAgY29uc3QgcG9zc2libGVEaXJlY3Rpb25zID0gW1xuICAgICAgeyB4OiAwLCB5OiAxIH0sXG4gICAgICB7IHg6IDEsIHk6IDAgfSxcbiAgICAgIHsgeDogMCwgeTogLTEgfSxcbiAgICAgIHsgeDogLTEsIHk6IDAgfVxuICAgIF07XG4gIFxuICAgIC8vIFdoaWxlIHRoZXJlIGFyZSBzdGlsbCBkaXJlY3Rpb25zIHRvIGNoZWNrXG4gICAgd2hpbGUgKHBvc3NpYmxlRGlyZWN0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBSZW1vdmUgZGlyZWN0aW9uIGZyb20gcXVldWVcbiAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGVEaXJlY3Rpb25zLmxlbmd0aCk7XG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSBwb3NzaWJsZURpcmVjdGlvbnMuc3BsaWNlKHJhbmRvbUluZGV4LCAxKVswXTtcbiAgICAgIFxuICAgICAgLy8gQ2hlY2sgbmVlZGVkIHNwYWNlcyBpbiB0aGF0IGRpcmVjdGlvblxuICAgICAgY2hlY2tEaXJlY3Rpb24oY29vcmRpbmF0ZXMsIGRpcmVjdGlvbik7XG5cbiAgICAgIC8vIElmIGNoZWNrRGlyZWN0aW9uIGZpbmRzIGFuIG9wZW4gZGlyZWN0aW9uIGZvciB0aGlzIHN0YXJ0aW5nIGNvb3JkaW5hdGUsIGV4aXQgdGhlIGxvb3BcbiAgICAgIGlmIChvcGVuQ29vcmRpbmF0ZXMpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAvLyBXaGlsZSB0aGUgZnVuY3Rpb24gaGFzbid0IGZvdW5kIGFuIG9wZW4gc2V0IG9mIGNvb3JkaW5hdGVzIGZvciB0aGlzIGxlbmd0aCBzaGlwLFxuICAvLyBrZWVwIGxvb3BpbmdcbiAgd2hpbGUgKG9wZW5Db29yZGluYXRlcyA9PT0gdW5kZWZpbmVkKSB7ICAgIFxuICAgIGNvbnN0IHRyaWVkQ29vcmRpbmF0ZXMgPSBbXTtcbiAgICAvLyBHZW5lcmF0ZSBhIHJhbmRvbSBzdGFydGluZyBjb29yZGluYXRlXG4gICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChncmlkLmxlbmd0aCAtIDEpKTtcbiAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGdyaWQubGVuZ3RoIC0gMSkpO1xuXG4gICAgLy8gSWYgdGhhdCBjb29yZGluYXRlIGlzIG9wZW4sIGNoZWNrIGluIGVhY2ggZGlyZWN0aW9uXG4gICAgaWYgKGdyaWRbeF1beV0gPT09IHVuZGVmaW5lZCAmJiAhdHJpZWRDb29yZGluYXRlcy5pbmNsdWRlcyh7IHgsIHl9KSkge1xuICAgICAgY2hlY2tEaXJlY3Rpb25zKHsgeCwgeSB9KTtcbiAgICB9XG5cbiAgICB0cmllZENvb3JkaW5hdGVzLnB1c2goe3gsIHl9KTtcbiAgfVxuICBcbiAgcmV0dXJuIG9wZW5Db29yZGluYXRlcztcbn1cblxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGxheWVyKHR5cGUsIG9wcG9uZW50Qm9hcmQpIHtcbiAgY29uc3QgcG9zc2libGVNb3ZlcyA9IFtdO1xuICBmb3IgKGxldCB4ID0gMDsgeCA8PSA5OyB4ICs9IDEpIHtcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8PSA5OyB5ICs9IDEpIHtcbiAgICAgIHBvc3NpYmxlTW92ZXMucHVzaCh7IHgsIHkgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UmFuZG9tTmV3Q29vcmRpbmF0ZXMoKSB7XG4gICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3NzaWJsZU1vdmVzLmxlbmd0aCk7XG4gICAgY29uc3QgbmV4dENvb3JkaW5hdGVzID0gcG9zc2libGVNb3Zlc1tyYW5kb21JbmRleF07XG4gICAgcG9zc2libGVNb3Zlcy5zcGxpY2UocmFuZG9tSW5kZXgsIDEpO1xuICAgIHJldHVybiBuZXh0Q29vcmRpbmF0ZXM7XG4gIH1cblxuICBmdW5jdGlvbiBhdHRhY2soY29vcmRpbmF0ZVBhcmFtcykge1xuICAgIGxldCBjb29yZGluYXRlcyA9IGNvb3JkaW5hdGVQYXJhbXM7XG5cbiAgICBpZiAoY29vcmRpbmF0ZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29vcmRpbmF0ZXMgPSBnZXRSYW5kb21OZXdDb29yZGluYXRlcygpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IG9wcG9uZW50Qm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcy54LCBjb29yZGluYXRlcy55KTtcbiAgICByZXR1cm4geyByZXN1bHQsIGNvb3JkaW5hdGVzIH07XG4gIH1cblxuICByZXR1cm4geyBhdHRhY2ssIGdldFJhbmRvbU5ld0Nvb3JkaW5hdGVzIH07XG59XG4iLCJmdW5jdGlvbiByZW5kZXJFbXB0eUdyaWRzKCkge1xuICBjb25zdCByb3dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yb3dcIik7XG4gIHJvd3MuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gOTsgaSArPSAxKSB7XG4gICAgICBjb25zdCBzaGlwQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHNoaXBCb3guY2xhc3NOYW1lID0gXCJzaGlwLWJveFwiO1xuICAgICAgc2hpcEJveC5kYXRhc2V0LnJvdyA9IHJvdy5kYXRhc2V0LnJvdztcbiAgICAgIHNoaXBCb3guZGF0YXNldC5jb2wgPSBpO1xuICAgICAgcm93LmFwcGVuZChzaGlwQm94KTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhdHRhY2hMaXN0ZW5lcnMoY2FsbGJhY2spIHtcbiAgY29uc3Qgb3Bwb25lbnRDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29tcHV0ZXItZ3JpZCAuc2hpcC1ib3hcIik7XG5cbiAgb3Bwb25lbnRDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FsbGJhY2spO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVySHVtYW5Cb2FyZChodW1hbkJvYXJkKSB7XG4gIGZvciAobGV0IHIgPSAwOyByIDwgOTsgciArPSAxKSB7XG4gICAgZm9yIChsZXQgYyA9IDA7IGMgPCA5OyBjICs9IDEpIHtcbiAgICAgIGlmICh0eXBlb2YgaHVtYW5Cb2FyZC5ncmlkW3JdW2NdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGAuaHVtYW4tZ3JpZCBbZGF0YS1yb3c9XCIke3J9XCJdW2RhdGEtY29sPVwiJHtjfVwiXWBcbiAgICAgICAgKTtcblxuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVDZWxsKHJlc3VsdCwgYXR0YWNrZWUsIGNvb3JkaW5hdGVzLCBjYWxsYmFjaykge1xuICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBgLiR7YXR0YWNrZWV9LWdyaWQgW2RhdGEtcm93PVwiJHtjb29yZGluYXRlcy54fVwiXVtkYXRhLWNvbD1cIiR7Y29vcmRpbmF0ZXMueX1cIl1gXG4gICk7XG5cbiAgaWYgKHJlc3VsdCkge1xuICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcInNoaXBcIik7XG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICB9IGVsc2Uge1xuICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XG4gIH1cblxuICBpZiAoY2FsbGJhY2spIHtcbiAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYWxsYmFjayk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTWVzc2FnZShzdHJpbmcpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZXNzYWdlXCIpLnRleHRDb250ZW50ID0gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiByZW1vdmVMaXN0ZW5lcnMoY2FsbGJhY2spIHtcbiAgY29uc3Qgb3Bwb25lbnRDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29tcHV0ZXItZ3JpZCAuc2hpcC1ib3hcIik7XG5cbiAgb3Bwb25lbnRDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FsbGJhY2spO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVzZXQoKSB7XG4gIGNvbnN0IGFsbENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaGlwLWJveFwiKTtcbiAgYWxsQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgIGNvbnN0IGNlbGxFbGVtZW50ID0gY2VsbDtcbiAgICBjZWxsRWxlbWVudC5jbGFzc05hbWUgPSBcInNoaXAtYm94XCI7XG4gIH0pO1xufVxuXG5leHBvcnQge1xuICByZW5kZXJFbXB0eUdyaWRzLFxuICByZW5kZXJIdW1hbkJvYXJkLFxuICB1cGRhdGVNZXNzYWdlLFxuICBhdHRhY2hMaXN0ZW5lcnMsXG4gIHVwZGF0ZUNlbGwsXG4gIHJlbW92ZUxpc3RlbmVycyxcbiAgcmVzZXQsXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hpcChsZW5ndGgpIHtcbiAgbGV0IGhpdHMgPSAwO1xuICBcbiAgZnVuY3Rpb24gaGl0KCkge1xuICAgIGhpdHMgKz0gMTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3VuaygpIHtcbiAgICByZXR1cm4gaGl0cyA+PSBsZW5ndGhcbiAgfVxuICBcbiAgcmV0dXJuIHsgbGVuZ3RoLCBoaXQsIGlzU3VuayB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgKiBhcyBHYW1lYm9hcmREaXNwbGF5IGZyb20gXCIuL2pzL3JlbmRlci1nYW1lYm9hcmRcIjtcbmltcG9ydCBwbGF5IGZyb20gXCIuL2pzL2dhbWVcIjtcblxuR2FtZWJvYXJkRGlzcGxheS5yZW5kZXJFbXB0eUdyaWRzKCk7XG5cbmNvbnN0IHBsYXlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uXCIpO1xucGxheUJ1dHRvbi5vbmNsaWNrID0gcGxheTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==