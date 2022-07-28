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
/******/ 	__webpack_require__.p = "/static/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack-hot-middleware/client.js?path=http://localhost:3001/static/__webpack_hmr":
/*!******************************************************************************************!*\
  !*** (webpack)-hot-middleware/client.js?path=http://localhost:3001/static/__webpack_hmr ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/ts-loader/index.js):\\nError: Debug Failure. False expression: Non-string value passed to `ts.resolveTypeReferenceDirective`, likely by a wrapping package working with an outdated `resolveTypeReferenceDirectives` signature. This is probably not a problem in TS itself.\\n    at Object.resolveTypeReferenceDirective (F:\\\\WebStorm 2022.1.3\\\\prods\\\\HelloReact\\\\node_modules\\\\typescript\\\\lib\\\\typescript.js:42537:18)\\n    at F:\\\\WebStorm 2022.1.3\\\\prods\\\\HelloReact\\\\node_modules\\\\ts-loader\\\\dist\\\\servicesHost.js:373:77\\n    at F:\\\\WebStorm 2022.1.3\\\\prods\\\\HelloReact\\\\node_modules\\\\ts-loader\\\\dist\\\\servicesHost.js:95:142\\n    at Array.map (<anonymous>)\\n    at Object.resolveTypeReferenceDirectives (F:\\\\WebStorm 2022.1.3\\\\prods\\\\HelloReact\\\\node_modules\\\\ts-loader\\\\dist\\\\servicesHost.js:95:125)\\n    at actualResolveTypeReferenceDirectiveNamesWorker (F:\\\\WebStorm 2022.1.3\\\\prods\\\\HelloReact\\\\node_modules\\\\typescript\\\\lib\\\\typescript.js:116674:163)\\n    at resolveTypeReferenceDirectiveNamesWorker (F:\\\\WebStorm 2022.1.3\\\\prods\\\\HelloReact\\\\node_modules\\\\typescript\\\\lib\\\\typescript.js:116974:26)\\n    at processTypeReferenceDirectives (F:\\\\WebStorm 2022.1.3\\\\prods\\\\HelloReact\\\\node_modules\\\\typescript\\\\lib\\\\typescript.js:118456:31)\\n    at findSourceFileWorker (F:\\\\WebStorm 2022.1.3\\\\prods\\\\HelloReact\\\\node_modules\\\\typescript\\\\lib\\\\typescript.js:118341:21)\\n    at findSourceFile (F:\\\\WebStorm 2022.1.3\\\\prods\\\\HelloReact\\\\node_modules\\\\typescript\\\\lib\\\\typescript.js:118196:26)\\n    at F:\\\\WebStorm 2022.1.3\\\\prods\\\\HelloReact\\\\node_modules\\\\typescript\\\\lib\\\\typescript.js:118148:85\\n    at getSourceFileFromReferenceWorker (F:\\\\WebStorm 2022.1.3\\\\prods\\\\HelloReact\\\\node_modules\\\\typescript\\\\lib\\\\typescript.js:118114:34)\\n    at processSourceFile (F:\\\\WebStorm 2022.1.3\\\\prods\\\\HelloReact\\\\node_modules\\\\typescript\\\\lib\\\\typescript.js:118148:13)\\n    at processTypeReferenceDirectiveWorker (F:\\\\WebStorm 2022.1.3\\\\prods\\\\HelloReact\\\\node_modules\\\\typescript\\\\lib\\\\typescript.js:118487:21)\\n    at processTypeReferenceDirective (F:\\\\WebStorm 2022.1.3\\\\prods\\\\HelloReact\\\\node_modules\\\\typescript\\\\lib\\\\typescript.js:118472:13)\\n    at Object.createProgram (F:\\\\WebStorm 2022.1.3\\\\prods\\\\HelloReact\\\\node_modules\\\\typescript\\\\lib\\\\typescript.js:116777:21)\\n    at synchronizeHostData (F:\\\\WebStorm 2022.1.3\\\\prods\\\\HelloReact\\\\node_modules\\\\typescript\\\\lib\\\\typescript.js:165086:26)\\n    at Object.getProgram (F:\\\\WebStorm 2022.1.3\\\\prods\\\\HelloReact\\\\node_modules\\\\typescript\\\\lib\\\\typescript.js:165218:13)\\n    at successfulTypeScriptInstance (F:\\\\WebStorm 2022.1.3\\\\prods\\\\HelloReact\\\\node_modules\\\\ts-loader\\\\dist\\\\instances.js:178:80)\\n    at Object.getTypeScriptInstance (F:\\\\WebStorm 2022.1.3\\\\prods\\\\HelloReact\\\\node_modules\\\\ts-loader\\\\dist\\\\instances.js:34:12)\\n    at Object.loader (F:\\\\WebStorm 2022.1.3\\\\prods\\\\HelloReact\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:17:41)\");\n\n//# sourceURL=webpack:///(webpack)-hot-middleware/client.js?");

/***/ }),

/***/ "./src/client/index.jsx":
/*!******************************!*\
  !*** ./src/client/index.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/ts-loader/index.js):\\nTypeError: Cannot read properties of undefined (reading 'getSourceFile')\\n    at Object.getEmitOutput (F:\\\\WebStorm 2022.1.3\\\\prods\\\\HelloReact\\\\node_modules\\\\ts-loader\\\\dist\\\\instances.js:369:53)\\n    at getEmit (F:\\\\WebStorm 2022.1.3\\\\prods\\\\HelloReact\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:275:37)\\n    at successLoader (F:\\\\WebStorm 2022.1.3\\\\prods\\\\HelloReact\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:67:15)\\n    at Object.loader (F:\\\\WebStorm 2022.1.3\\\\prods\\\\HelloReact\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:22:12)\");\n\n//# sourceURL=webpack:///./src/client/index.jsx?");

/***/ }),

/***/ 0:
/*!******************************************************************************************************************!*\
  !*** multi ./src/client/index.jsx webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack_hmr ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! F:\\WebStorm 2022.1.3\\prods\\HelloReact\\src\\client\\index.jsx */\"./src/client/index.jsx\");\nmodule.exports = __webpack_require__(/*! webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack_hmr */\"./node_modules/webpack-hot-middleware/client.js?path=http://localhost:3001/static/__webpack_hmr\");\n\n\n//# sourceURL=webpack:///multi_./src/client/index.jsx_webpack-hot-middleware/client?");

/***/ })

/******/ });