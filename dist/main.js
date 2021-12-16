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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ \"./src/logic.js\");\n\n\n// create new list \nconst toDoList = new _logic__WEBPACK_IMPORTED_MODULE_0__.ToDoList();\n// example items \nconst exampleItems = (function () {\n  const item1 = new _logic__WEBPACK_IMPORTED_MODULE_0__.ToDoItem('Wash car', 'Chores', 'wash then wax car', '2021-12-17', 'low');\n  toDoList.addItemToList(item1);\n  const item2 = new _logic__WEBPACK_IMPORTED_MODULE_0__.ToDoItem('Buy groceries', 'Chores', 'cabbage, bread, milk', '2021-12-15', 'high');\n  toDoList.addItemToList(item2);\n  const item3 = new _logic__WEBPACK_IMPORTED_MODULE_0__.ToDoItem('Math assignment 3', 'School', 'problem set 1 - 6', '2021-12-23', 'medium');\n  item3.toggleIsCompleted();\n  toDoList.addItemToList(item3);\n})();\n\nconst groupedToDoList = toDoList.groupByProject();\nconsole.log(groupedToDoList);\nconsole.log(Object.keys(groupedToDoList));\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ToDoItem\": () => (/* binding */ ToDoItem),\n/* harmony export */   \"ToDoList\": () => (/* binding */ ToDoList)\n/* harmony export */ });\n// individual to do item \n// properties: isCompleted, title, project, description, dueDate, priority\n// methods: toggeIsCompleted\nclass ToDoItem {\n  constructor(title, project, description, dueDate, priority) {\n    this.isCompleted = false;\n    this.title = title;\n    this.project = project;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n  }\n  toggleIsCompleted() {\n    (this.isCompleted) ? this.isCompleted = false : this.isCompleted = true;\n  }\n}\n\n// list of to do items \n// properties: list \n// methods: addItemToList\nclass ToDoList {\n  constructor() {\n    this.list = [];\n  }\n  addItemToList(item) {\n    this.list.push(item);\n  }\n  removeItemFromList(index) {\n    this.list.splice(index, 1);\n  }\n  groupByProject() {\n    const groupedToDoLists = {};\n    for (let i = 0; i < this.list.length; i++) {\n      const currItem = this.list[i];\n      const currProject = currItem.project;\n      if (!groupedToDoLists.hasOwnProperty(currProject)) {\n        groupedToDoLists[currProject] = [];\n      }\n      groupedToDoLists[currProject].push(currItem);\n    }\n    return groupedToDoLists;\n  }\n}\n\n\n\n//# sourceURL=webpack://to-do-list/./src/logic.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;