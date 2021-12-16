/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  padding: 0;\\n  margin: 0;\\n  box-sizing: border-box;\\n  font-family: Arial, Helvetica, sans-serif;\\n}\\n\\nbody {\\n  height: 100vh;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n\\n.header {\\n  background-color: #F41D12;\\n  color: #ffffff;\\n  display: flex;\\n  padding: 12px;\\n  align-items: center;\\n  justify-content: flex-start;\\n  gap: 12px;\\n}\\n\\n.logo {\\n  height: 30px;\\n  width: 30px;\\n}\\n\\n.display {\\n  padding: 12px;\\n  height: 100%;\\n}\\n\\n.item {\\n  border: 1px solid #000000;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 6px 12px;\\n  margin-bottom: 12px;\\n}\\n\\n.item > .left-container,\\n.item > .right-container {\\n  display: flex;\\n  align-items: center;\\n  gap: 12px;\\n}\\n\\n.item .icon {\\n  width: 20px;\\n  height: 20px;\\n  cursor: pointer;\\n}\\n\\n.item button {\\n  border: none;\\n  background: none;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.priority-low {\\n  border-left: 5px solid #008000;\\n}\\n\\n.priority-medium {\\n  border-left: 5px solid #ffe600;\\n}\\n\\n.priority-high {\\n  border-left: 5px solid #cf0000;\\n}\\n\\n.add-button {\\n  position: fixed;\\n  bottom: 24px;\\n  right: 24px;\\n  height: 50px;\\n  width: 50px;\\n  cursor: pointer;\\n  background-color: #F41D12;\\n  border-radius: 50%;\\n  border: none;\\n  box-shadow: 5px 5px 12px #00000040;\\n  padding: 14px;\\n}\\n\\n.add-button img {\\n  height: 100%;\\n  width: 100%;\\n}\\n\\n#overlay {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  bottom: 0;\\n  background-color: #00000080;\\n  pointer-events: none;\\n  opacity: 0;\\n}\\n\\n#overlay.active {\\n  opacity: 1;\\n  pointer-events: all;\\n}\\n\\n.new-item-form {\\n  border: 1px solid #000000;\\n  position: fixed;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%) scale(0);\\n  z-index: 10;\\n  background-color: #ffffff;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: stretch;\\n  justify-content: space-between;\\n  padding: 12px;\\n  width: 460px;\\n  height: 300px;\\n}\\n\\n.new-item-form.active {\\n  transform: translate(-50%, -50%) scale(1);\\n}\\n\\n.form-header {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n\\n.close-button {\\n  border: none;\\n  background: none;\\n  cursor: pointer;\\n}\\n\\n.form-header img {\\n  height: 16px;\\n  width: 16px;\\n}\\n\\n.new-item-form input,\\n.new-item-form textarea {\\n  padding: 2px 6px;\\n}\\n\\n.form-row-1 {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  gap: 12px;\\n}\\n\\n.form-row-1 #new-title {\\n  flex: 1;\\n}\\n\\n.form-row-2 #new-description {\\n  width: 100%;\\n}\\n\\n.form-row-3,\\n.form-row-4 {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  gap: 12px;\\n}\\n\\n.form-row-3 label,\\n.form-row-4 p {\\n  font-size: 14px;\\n}\\n\\n.priority-radio {\\n  display: flex;\\n  align-items: baseline;\\n  justify-content: space-between;\\n  gap: 4px;\\n}\\n\\n.form-submit-button {\\n  padding: 2px 4px;\\n  width: 70px;\\n  align-self: center;\\n}\\n\\n\\n/*\\n.content {\\n  display: flex;\\n  height: 100%;\\n}\\n\\n.navbar {\\n  background-color: #f3f3f3;\\n  padding: 12px;\\n  width: 25%;\\n}\\n\\n.new-item-form.active {\\n  transform: scale(1);\\n}\\n\\n\\n.form-buttons {\\n  display: flex;\\n  justify-content: space-around;\\n  align-items: center;\\n  gap: 10px;\\n}\\n*/\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/add-button.js":
/*!***************************!*\
  !*** ./src/add-button.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createAddButton\": () => (/* binding */ createAddButton)\n/* harmony export */ });\n/* harmony import */ var _img_plus_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/plus.png */ \"./src/img/plus.png\");\n\n\nfunction createAddButton() {\n  // > button \n  const button = document.createElement('button');\n  button.type = 'button';\n  button.classList.add('add-button');\n  // >> button icon \n  const plus = new Image();\n  plus.src = _img_plus_png__WEBPACK_IMPORTED_MODULE_0__;\n  plus.alt = 'plus sign';\n  // append child to parent \n  button.appendChild(plus);\n\n  return button;\n}\n\n\n\n//# sourceURL=webpack://to-do-list/./src/add-button.js?");

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayCurrentList\": () => (/* binding */ displayCurrentList)\n/* harmony export */ });\n/* harmony import */ var _img_view_details_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/view-details.png */ \"./src/img/view-details.png\");\n/* harmony import */ var _img_edit_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/edit.png */ \"./src/img/edit.png\");\n/* harmony import */ var _img_bin_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/bin.png */ \"./src/img/bin.png\");\n\n\n\n\n// display current list of to do items \n// take in current toDoList from index.js \n// return entire display element \nfunction displayCurrentList(toDoList) {\n  \n  // > display container below header \n  const displayContainer = document.createElement('div');\n  displayContainer.classList.add('display');\n\n  for (let i = 0; i < toDoList.list.length; i++) { \n    // current item in list \n    const currItem = toDoList.list[i];\n\n    // >> create item container \n    const itemContainer = document.createElement('div');\n    itemContainer.classList.add('item');\n    itemContainer.classList.add(`priority-${currItem.priority}`);\n    itemContainer.dataset.indexNumber = i;\n\n    // >>> left container \n    const leftContainer = document.createElement('div');\n    leftContainer.classList.add('left-container');\n    // >>>> checkbox \n    const checkBox = document.createElement('input');\n    checkBox.type = 'checkbox';\n    checkBox.checked = currItem.isCompleted;\n    // >>>> title \n    const title = document.createElement('h3');\n    title.classList.add('title');\n    title.textContent = currItem.title;\n\n    // >>> right container\n    const rightContainer = document.createElement('div');\n    rightContainer.classList.add('right-container');\n    // >>>> due date \n    const dueDate = document.createElement('h4');\n    dueDate.classList.add('due-date');\n    dueDate.textContent = currItem.dueDate;\n    // >>>> buttons \n    const detailButton = document.createElement('button');\n    detailButton.type = 'button';\n    detailButton.classList.add('detail-button')\n    const editButton = document.createElement('button');\n    editButton.type = 'button';\n    editButton.classList.add('edit-button')\n    const deleteButton = document.createElement('button');\n    deleteButton.type = 'button';\n    deleteButton.classList.add('delete-button')\n    // >>>>> icon in buttons \n    const detailButtonIcon = new Image();\n    detailButtonIcon.src = _img_view_details_png__WEBPACK_IMPORTED_MODULE_0__;\n    detailButtonIcon.alt = 'detail icon';\n    detailButtonIcon.classList.add('icon');\n    const editButtonIcon = new Image();\n    editButtonIcon.src = _img_edit_png__WEBPACK_IMPORTED_MODULE_1__;\n    editButtonIcon.alt = 'edit icon';\n    editButtonIcon.classList.add('icon');\n    const deleteButtonIcon = new Image();\n    deleteButtonIcon.src = _img_bin_png__WEBPACK_IMPORTED_MODULE_2__;\n    deleteButtonIcon.alt = 'delete icon';\n    deleteButtonIcon.classList.add('icon');\n\n    // append child to parent \n    detailButton.appendChild(detailButtonIcon);\n    editButton.appendChild(editButtonIcon);\n    deleteButton.appendChild(deleteButtonIcon);\n    leftContainer.appendChild(checkBox);\n    leftContainer.appendChild(title);\n    rightContainer.appendChild(dueDate);\n    rightContainer.appendChild(detailButton);\n    rightContainer.appendChild(editButton);\n    rightContainer.appendChild(deleteButton);\n    itemContainer.appendChild(leftContainer);\n    itemContainer.appendChild(rightContainer);\n    displayContainer.appendChild(itemContainer); \n  }  \n  return displayContainer;\n}\n\n\n\n//# sourceURL=webpack://to-do-list/./src/display.js?");

/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayFrom\": () => (/* binding */ displayFrom)\n/* harmony export */ });\n/* harmony import */ var _img_close_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/close.png */ \"./src/img/close.png\");\n\n\nfunction displayFrom() {\n  // > whole page \n  const formPage = document.createElement('div');\n  formPage.classList.add('form-page');\n\n  // >> overlay \n  const overlay = document.createElement('div');\n  overlay.id = 'overlay';\n\n  // >> new item form \n  const newItemForm = document.createElement('form');\n  newItemForm.classList.add('new-item-form');\n\n  // >>> form header\n  const formHeader = document.createElement('div');\n  formHeader.classList.add('form-header');\n  // >>>> title \n  const title = document.createElement('h3');\n  title.textContent = 'Add New Item';\n  // >>>> close button \n  const closeButton = document.createElement('button');\n  closeButton.classList.add('close-button');\n  // >>>>> icon \n  const icon = new Image();\n  icon.src = _img_close_png__WEBPACK_IMPORTED_MODULE_0__;\n  icon.alt = 'close icon';\n\n  // >>> form row 1\n  const row1 = document.createElement('div');\n  row1.classList.add('form-row-1');\n  // >>>> title input \n  const titleInput = document.createElement('input');\n  titleInput.type = 'text';\n  titleInput.id = 'new-title';\n  titleInput.placeholder = 'Title: Pay water bill';\n  titleInput.required = true;\n  // >>>> project input \n  const projectInput = document.createElement('input');\n  projectInput.type = 'text';\n  projectInput.id = 'new-project';\n  projectInput.placeholder = 'Project: Chores';\n  // >>> form row 2 \n  const row2 = document.createElement('div');\n  row2.classList.add('form-row-2');\n  // >>>> description input \n  const descriptionInput = document.createElement('textarea');\n  descriptionInput.id = 'new-description';\n  descriptionInput.placeholder = 'Description: Pay online at www.paybill.com';\n  descriptionInput.rows = '3';\n  // >>> form row 3 \n  const row3 = document.createElement('div');\n  row3.classList.add('form-row-3');\n  // >>>> label \n  const dueDateLabel = document.createElement('label');\n  dueDateLabel.for = 'new-due-date';\n  dueDateLabel.textContent = 'Due Date';\n  // >>>> date input \n  const dueDateInput = document.createElement('input');\n  dueDateInput.type = 'date';\n  dueDateInput.id = 'new-due-date';\n  // >>> form row 4\n  const row4 = document.createElement('div');\n  row4.classList.add('form-row-4');\n  // >>>> label \n  const priorityLabel = document.createElement('p');\n  priorityLabel.textContent = 'Priority';\n  // >>>> low radio \n  const lowRadio = document.createElement('div');\n  lowRadio.classList.add('priority-radio');\n  // >>>>> low label \n  const lowLabel = document.createElement('label');\n  lowLabel.for = 'low';\n  lowLabel.textContent = 'Low';\n  // >>>>> low input \n  const lowInput = document.createElement('input');\n  lowInput.type = 'radio';\n  lowInput.id = 'low';\n  lowInput.name = 'priority';\n  lowInput.value = 'low';\n  // >>>> medium radio \n  const mediumRadio = document.createElement('div');\n  mediumRadio.classList.add('priority-radio');\n  // >>>>> medium label \n  const mediumLabel = document.createElement('label');\n  mediumLabel.for = 'medium';\n  mediumLabel.textContent = 'Medium';\n  // >>>>> medium input \n  const mediumInput = document.createElement('input');\n  mediumInput.type = 'radio';\n  mediumInput.id = 'medium';\n  mediumInput.name = 'priority';\n  mediumInput.value = 'medium';\n  mediumInput.checked = true;\n  // >>>> high radio \n  const highRadio = document.createElement('div');\n  highRadio.classList.add('priority-radio');\n  // >>>>> high label \n  const highLabel = document.createElement('label');\n  highLabel.for = 'high';\n  highLabel.textContent = 'High';\n  // >>>>> high input \n  const highInput = document.createElement('input');\n  highInput.type = 'radio';\n  highInput.id = 'high';\n  highInput.name = 'priority';\n  highInput.value = 'high';\n  // >>> submit button \n  const submitButton = document.createElement('button');\n  submitButton.type = 'submit';\n  submitButton.classList.add('form-submit-button');\n  submitButton.textContent = 'Submit';\n  \n  // append child to parent \n  closeButton.appendChild(icon);\n  formHeader.appendChild(title);\n  formHeader.appendChild(closeButton);\n  newItemForm.appendChild(formHeader);\n  row1.appendChild(titleInput);\n  row1.appendChild(projectInput);\n  newItemForm.appendChild(row1);\n  row2.appendChild(descriptionInput);\n  newItemForm.appendChild(row2);\n  row3.appendChild(dueDateLabel);\n  row3.appendChild(dueDateInput);\n  newItemForm.appendChild(row3);\n  highRadio.appendChild(highInput);\n  highRadio.appendChild(highLabel);\n  mediumRadio.appendChild(mediumInput);\n  mediumRadio.appendChild(mediumLabel);\n  lowRadio.appendChild(lowInput);\n  lowRadio.appendChild(lowLabel);\n  row4.appendChild(priorityLabel);\n  row4.appendChild(highRadio);\n  row4.appendChild(mediumRadio);\n  row4.appendChild(lowRadio);\n  newItemForm.appendChild(row4);\n  newItemForm.appendChild(submitButton);\n  formPage.appendChild(overlay);\n  formPage.appendChild(newItemForm);\n  return formPage;\n}\n\n\n\n//# sourceURL=webpack://to-do-list/./src/form.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHeader\": () => (/* binding */ createHeader)\n/* harmony export */ });\n/* harmony import */ var _img_check_box_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/check-box.png */ \"./src/img/check-box.png\");\n\n\nfunction createHeader() {\n  // > header div \n  const headerContainer = document.createElement('div');\n  headerContainer.classList.add('header');\n  // >> logo \n  const logo = new Image();\n  logo.src = _img_check_box_png__WEBPACK_IMPORTED_MODULE_0__;\n  logo.alt = 'large checkbox';\n  logo.classList.add('logo');\n  // >> title \n  const title = document.createElement('h1');\n  title.textContent = 'To Do List';\n  // append child to parent \n  headerContainer.appendChild(logo);\n  headerContainer.appendChild(title);\n\n  return headerContainer;\n}\n\n\n\n//# sourceURL=webpack://to-do-list/./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic */ \"./src/logic.js\");\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display */ \"./src/display.js\");\n/* harmony import */ var _add_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-button */ \"./src/add-button.js\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form */ \"./src/form.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\n\n// create new list \nconst toDoList = new _logic__WEBPACK_IMPORTED_MODULE_1__.ToDoList();\n// example items \nconst item1 = new _logic__WEBPACK_IMPORTED_MODULE_1__.ToDoItem('Wash car', 'Chores', 'wash then wax car', '2021-12-17', 'low');\ntoDoList.addItemToList(item1);\nconst item2 = new _logic__WEBPACK_IMPORTED_MODULE_1__.ToDoItem('Buy groceries', 'Chores', 'cabbage, bread, milk', '2021-12-15', 'high');\ntoDoList.addItemToList(item2);\nconst item3 = new _logic__WEBPACK_IMPORTED_MODULE_1__.ToDoItem('Math assignment 3', 'School', 'problem set 1 - 6', '2021-12-23', 'medium');\nitem3.toggleIsCompleted();\ntoDoList.addItemToList(item3);\n\n// > body element \nconst body = document.querySelector('body');\n// >> header \nconst header = (0,_header__WEBPACK_IMPORTED_MODULE_0__.createHeader)();\nbody.appendChild(header);\n// >> initial display \nlet currDisplay = (0,_display__WEBPACK_IMPORTED_MODULE_2__.displayCurrentList)(toDoList);\nbody.appendChild(currDisplay);\n// >> add button \nconst addButton = (0,_add_button__WEBPACK_IMPORTED_MODULE_3__.createAddButton)();\nbody.appendChild(addButton);\n// >> new item form \nconst form = (0,_form__WEBPACK_IMPORTED_MODULE_4__.displayFrom)(); \nbody.appendChild(form); \n\n// add new item then display new list \nconst overlay = document.querySelector('#overlay');\nconst newItemForm = document.querySelector('.new-item-form');\naddButton.addEventListener('click', () => {\n  overlay.classList.add('active');\n  newItemForm.classList.add('active');\n});\n\n// add eventListener on form close button \nconst formCloseButton = document.querySelector('.close-button');\nformCloseButton.addEventListener('click', () => {\n  overlay.classList.remove('active');\n  newItemForm.classList.remove('active');\n});\n\nconst checkBoxes = document.querySelectorAll('.item input[type=\"checkbox\"]');\n  checkBoxes.forEach((checkbox) => {\n    checkbox.addEventListener('change', (e) => {\n      const index = e.target.parentNode.parentNode.dataset.indexNumber;\n      console.log(toDoList.list[index]);\n      toDoList.list[index].toggleIsCompleted();\n      console.log(toDoList.list[index]);\n    });\n  });\n\n// add eventListener on form submit \nconst titleInput = document.querySelector('#new-title');\nconst projectInput = document.querySelector('#new-project');\nconst descriptionInput = document.querySelector('#new-description');\nconst dueDateInput = document.querySelector('#new-due-date');\n\nnewItemForm.addEventListener('submit', (e) => {\n  e.preventDefault();\n  const newTitle = titleInput.value;\n  titleInput.value = '';\n  const newProject = projectInput.value;\n  projectInput.value = '';\n  const newDescription = descriptionInput.value;\n  descriptionInput.value = '';\n  const newDueDate = dueDateInput.value;\n  dueDateInput.value = null;\n  const newPriorityInput = document.querySelector('input[name=\"priority\"]:checked').value;\n  document.querySelector('#medium').checked = true;\n\n  overlay.classList.remove('active');\n  newItemForm.classList.remove('active');\n\n  const newItem = new _logic__WEBPACK_IMPORTED_MODULE_1__.ToDoItem(newTitle, newProject, newDescription, newDueDate, newPriorityInput);\n  toDoList.addItemToList(newItem);\n\n  const displayDiv = document.querySelector('.display');\n  body.removeChild(displayDiv);\n  currDisplay = (0,_display__WEBPACK_IMPORTED_MODULE_2__.displayCurrentList)(toDoList);\n  body.appendChild(currDisplay);\n  \n  const checkBoxes = document.querySelectorAll('.item input[type=\"checkbox\"]');\n  checkBoxes.forEach((checkbox) => {\n    checkbox.addEventListener('change', (e) => {\n      const index = e.target.parentNode.parentNode.dataset.indexNumber;\n      console.log(toDoList.list[index]);\n      toDoList.list[index].toggleIsCompleted();\n      console.log(toDoList.list[index]);\n    });\n  });\n\n\n});\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ToDoItem\": () => (/* binding */ ToDoItem),\n/* harmony export */   \"ToDoList\": () => (/* binding */ ToDoList)\n/* harmony export */ });\n// individual to do item \n// properties: isCompleted, title, project, description, dueDate, priority\n// methods: toggeIsCompleted\nclass ToDoItem {\n  constructor(title, project, description, dueDate, priority) {\n    this.isCompleted = false;\n    this.title = title;\n    this.project = project;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n  }\n  toggleIsCompleted() {\n    (this.isCompleted) ? this.isCompleted = false : this.isCompleted = true;\n  }\n}\n\n// list of to do items \n// properties: list \n// methods: addItemToList\nclass ToDoList {\n  constructor() {\n    this.list = [];\n  }\n  addItemToList(item) {\n    this.list.push(item);\n  }\n}\n\n\n\n//# sourceURL=webpack://to-do-list/./src/logic.js?");

/***/ }),

/***/ "./src/img/bin.png":
/*!*************************!*\
  !*** ./src/img/bin.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a6fd29509719f079bfd7.png\";\n\n//# sourceURL=webpack://to-do-list/./src/img/bin.png?");

/***/ }),

/***/ "./src/img/check-box.png":
/*!*******************************!*\
  !*** ./src/img/check-box.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"49bf807ccf0d91b241a3.png\";\n\n//# sourceURL=webpack://to-do-list/./src/img/check-box.png?");

/***/ }),

/***/ "./src/img/close.png":
/*!***************************!*\
  !*** ./src/img/close.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"361ad9a0e632f77b3916.png\";\n\n//# sourceURL=webpack://to-do-list/./src/img/close.png?");

/***/ }),

/***/ "./src/img/edit.png":
/*!**************************!*\
  !*** ./src/img/edit.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5de789ef28d13ef0b6ba.png\";\n\n//# sourceURL=webpack://to-do-list/./src/img/edit.png?");

/***/ }),

/***/ "./src/img/plus.png":
/*!**************************!*\
  !*** ./src/img/plus.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"efbf85187797e00d1c7a.png\";\n\n//# sourceURL=webpack://to-do-list/./src/img/plus.png?");

/***/ }),

/***/ "./src/img/view-details.png":
/*!**********************************!*\
  !*** ./src/img/view-details.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"28f83697c278c57bfeb2.png\";\n\n//# sourceURL=webpack://to-do-list/./src/img/view-details.png?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;