"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/customCursor.js":
/*!****************************************!*\
  !*** ./app/components/customCursor.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CustomCursor; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _util_use_follow_point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/use-follow-point */ \"(app-pages-browser)/./app/util/use-follow-point.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction CustomCursor() {\n    _s();\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const { x, y } = (0,_util_use_follow_point__WEBPACK_IMPORTED_MODULE_2__.useFollowPointer)(ref);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        ref: ref,\n        className: \"w-5 h-5 border border-black rounded-full\",\n        animate: {\n            x,\n            y\n        },\n        transition: {\n            type: \"spring\",\n            damping: 20,\n            stiffness: 50,\n            restDelta: 0.001\n        }\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dhanu\\\\~home\\\\code\\\\portfolio\\\\app\\\\components\\\\customCursor.js\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, this);\n}\n_s(CustomCursor, \"z1Q8FdngfD+nSP4Y+cYYSSiissM=\", false, function() {\n    return [\n        _util_use_follow_point__WEBPACK_IMPORTED_MODULE_2__.useFollowPointer\n    ];\n});\n_c = CustomCursor;\nvar _c;\n$RefreshReg$(_c, \"CustomCursor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2N1c3RvbUN1cnNvci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUUwQztBQUNEO0FBQ21CO0FBRTdDLFNBQVNLOztJQUNwQixNQUFNQyxNQUFNSiw2Q0FBTUEsQ0FBQztJQUNyQixNQUFNLEVBQUVLLENBQUMsRUFBRUMsQ0FBQyxFQUFFLEdBQUdKLHdFQUFnQkEsQ0FBQ0U7SUFHaEMscUJBQ0ksOERBQUNMLGlEQUFNQSxDQUFDUSxHQUFHO1FBQ1hILEtBQUtBO1FBQ0RJLFdBQVU7UUFDVkMsU0FBUztZQUFFSjtZQUFHQztRQUFFO1FBQ2hCSSxZQUFZO1lBQ1JDLE1BQU07WUFDTkMsU0FBUztZQUNUQyxXQUFXO1lBQ1hDLFdBQVc7UUFDYjs7Ozs7O0FBR2Q7R0FsQndCWDs7UUFFTEQsb0VBQWdCQTs7O0tBRlhDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL2N1c3RvbUN1cnNvci5qcz80ODM1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgbSwgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VGb2xsb3dQb2ludGVyIH0gZnJvbSBcIi4uL3V0aWwvdXNlLWZvbGxvdy1wb2ludFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VzdG9tQ3Vyc29yKCkge1xyXG4gICAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IHsgeCwgeSB9ID0gdXNlRm9sbG93UG9pbnRlcihyZWYpO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNSBoLTUgYm9yZGVyIGJvcmRlci1ibGFjayByb3VuZGVkLWZ1bGxcIlxyXG4gICAgICAgICAgICBhbmltYXRlPXt7IHgsIHkgfX1cclxuICAgICAgICAgICAgdHJhbnNpdGlvbj17e1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJzcHJpbmdcIixcclxuICAgICAgICAgICAgICAgIGRhbXBpbmc6IDIwLFxyXG4gICAgICAgICAgICAgICAgc3RpZmZuZXNzOiA1MCxcclxuICAgICAgICAgICAgICAgIHJlc3REZWx0YTogMC4wMDFcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgID48L21vdGlvbi5kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6WyJtIiwibW90aW9uIiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VGb2xsb3dQb2ludGVyIiwiQ3VzdG9tQ3Vyc29yIiwicmVmIiwieCIsInkiLCJkaXYiLCJjbGFzc05hbWUiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsInR5cGUiLCJkYW1waW5nIiwic3RpZmZuZXNzIiwicmVzdERlbHRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/customCursor.js\n"));

/***/ })

});