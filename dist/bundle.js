/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/index.js":
/*!***********************!*\
  !*** ./dist/index.js ***!
  \***********************/
/***/ (() => {

eval("\r\n\r\nvar app = angular.module(\"myApp\", [\"ngRoute\"]);\r\napp.config(function ($routeProvider) {\r\n  $routeProvider\r\n    .when(\"/\", {\r\n      templateUrl: \"../pages/home.html\",\r\n    })\r\n    .when(\"/home\", {\r\n      templateUrl: \"../pages/home.html\",\r\n    })\r\n    .when(\"/contact\", {\r\n      templateUrl: \"../pages/contact.html\",\r\n    })\r\n    .when(\"/map\", {\r\n      templateUrl: \"../pages/map.html\",\r\n    })\r\n    .when(\"/services\", {\r\n      templateUrl: \"../pages/services.html\",\r\n    })\r\n    .when(\"/admin\", {\r\n      templateUrl: \"../pages/adminlogin.html\",\r\n    })\r\n    .otherwise({\r\n      redirectTo: \"../pages/home.html\",\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://ssip/./dist/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./dist/index.js"]();
/******/ 	
/******/ })()
;