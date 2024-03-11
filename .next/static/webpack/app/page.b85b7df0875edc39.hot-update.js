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

/***/ "(app-pages-browser)/./app/components/smoothScroll.js":
/*!****************************************!*\
  !*** ./app/components/smoothScroll.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! resize-observer-polyfill */ \"(app-pages-browser)/./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/scroll/use-viewport-scroll.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-transform.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-spring.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _util_use_follow_point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/use-follow-point */ \"(app-pages-browser)/./app/util/use-follow-point.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst SmoothScroll = (param)=>{\n    let { children } = param;\n    _s();\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const { x, y } = (0,_util_use_follow_point__WEBPACK_IMPORTED_MODULE_3__.useFollowPointer)(ref);\n    // scroll container\n    const scrollRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    // page scrollable height based on content length\n    const [pageHeight, setPageHeight] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    // update scrollable height when browser is resizing\n    const resizePageHeight = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((entries)=>{\n        for (let entry of entries){\n            setPageHeight(entry.contentRect.height);\n        }\n    }, []);\n    // observe when browser is resizing\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(()=>{\n        const resizeObserver = new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_2__[\"default\"]((entries)=>resizePageHeight(entries));\n        scrollRef && resizeObserver.observe(scrollRef.current);\n        return ()=>resizeObserver.disconnect();\n    }, [\n        scrollRef,\n        resizePageHeight\n    ]);\n    const { scrollY } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useViewportScroll)() // measures how many pixels user has scrolled vertically\n    ;\n    // as scrollY changes between 0px and the scrollable height, create a negative scroll value...\n    // ... based on current scroll position to translateY the document in a natural way\n    const transform = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform)(scrollY, [\n        0,\n        pageHeight\n    ], [\n        0,\n        -pageHeight\n    ]);\n    const physics = {\n        damping: 15,\n        mass: 0.27,\n        stiffness: 65\n    } // easing of smooth scroll\n    ;\n    const spring = (0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.useSpring)(transform, physics) // apply easing to the negative scroll value\n    ;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                ref: ref,\n                className: \"w-5 h-5 border border-black rounded-full\",\n                animate: {\n                    x,\n                    y\n                },\n                transition: {\n                    type: \"spring\",\n                    damping: 20,\n                    stiffness: 50,\n                    restDelta: 0.001\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dhanu\\\\~home\\\\code\\\\portfolio\\\\app\\\\components\\\\smoothScroll.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                ref: scrollRef,\n                style: {\n                    y: spring\n                },\n                className: \"scroll-container\",\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dhanu\\\\~home\\\\code\\\\portfolio\\\\app\\\\components\\\\smoothScroll.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    height: pageHeight\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dhanu\\\\~home\\\\code\\\\portfolio\\\\app\\\\components\\\\smoothScroll.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(SmoothScroll, \"HAdsu2AW846KVXca85WSjWAJyRU=\", false, function() {\n    return [\n        _util_use_follow_point__WEBPACK_IMPORTED_MODULE_3__.useFollowPointer,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useViewportScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_6__.useSpring\n    ];\n});\n_c = SmoothScroll;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SmoothScroll);\nvar _c;\n$RefreshReg$(_c, \"SmoothScroll\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3Ntb290aFNjcm9sbC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNkU7QUFDeEI7QUFNL0I7QUFDc0M7QUFFNUQsTUFBTVcsZUFBZTtRQUFDLEVBQUVDLFFBQVEsRUFBRTs7SUFFaEMsTUFBTUMsTUFBTVosNkNBQU1BLENBQUM7SUFDbkIsTUFBTSxFQUFFYSxDQUFDLEVBQUVDLENBQUMsRUFBRSxHQUFHTCx3RUFBZ0JBLENBQUNHO0lBRWxDLG1CQUFtQjtJQUNuQixNQUFNRyxZQUFZZiw2Q0FBTUEsQ0FBQztJQUV6QixpREFBaUQ7SUFDakQsTUFBTSxDQUFDZ0IsWUFBWUMsY0FBYyxHQUFHaEIsK0NBQVFBLENBQUM7SUFFN0Msb0RBQW9EO0lBQ3BELE1BQU1pQixtQkFBbUJoQixrREFBV0EsQ0FBQ2lCLENBQUFBO1FBQ25DLEtBQUssSUFBSUMsU0FBU0QsUUFBUztZQUN6QkYsY0FBY0csTUFBTUMsV0FBVyxDQUFDQyxNQUFNO1FBQ3hDO0lBQ0YsR0FBRyxFQUFFO0lBRUwsbUNBQW1DO0lBQ25DbkIsc0RBQWVBLENBQUM7UUFDZCxNQUFNb0IsaUJBQWlCLElBQUluQixnRUFBY0EsQ0FBQ2UsQ0FBQUEsVUFDeENELGlCQUFpQkM7UUFFbkJKLGFBQWFRLGVBQWVDLE9BQU8sQ0FBQ1QsVUFBVVUsT0FBTztRQUNyRCxPQUFPLElBQU1GLGVBQWVHLFVBQVU7SUFDeEMsR0FBRztRQUFDWDtRQUFXRztLQUFpQjtJQUVoQyxNQUFNLEVBQUVTLE9BQU8sRUFBRSxHQUFHdEIsZ0VBQWlCQSxHQUFHLHdEQUF3RDs7SUFDaEcsOEZBQThGO0lBQzlGLG1GQUFtRjtJQUNuRixNQUFNdUIsWUFBWXRCLDJEQUFZQSxDQUFDcUIsU0FBUztRQUFDO1FBQUdYO0tBQVcsRUFBRTtRQUFDO1FBQUcsQ0FBQ0E7S0FBVztJQUN6RSxNQUFNYSxVQUFVO1FBQUVDLFNBQVM7UUFBSUMsTUFBTTtRQUFNQyxXQUFXO0lBQUcsRUFBRSwwQkFBMEI7O0lBQ3JGLE1BQU1DLFNBQVMxQix3REFBU0EsQ0FBQ3FCLFdBQVdDLFNBQVMsNENBQTRDOztJQUV6RixxQkFDRTs7MEJBQ0UsOERBQUNyQixpREFBTUEsQ0FBQzBCLEdBQUc7Z0JBQ1R0QixLQUFLQTtnQkFDRHVCLFdBQVU7Z0JBQ1ZDLFNBQVM7b0JBQUV2QjtvQkFBR0M7Z0JBQUU7Z0JBQ2hCdUIsWUFBWTtvQkFDUkMsTUFBTTtvQkFDTlIsU0FBUztvQkFDVEUsV0FBVztvQkFDWE8sV0FBVztnQkFDYjs7Ozs7OzBCQUVSLDhEQUFDL0IsaURBQU1BLENBQUMwQixHQUFHO2dCQUNUdEIsS0FBS0c7Z0JBQ0x5QixPQUFPO29CQUFFMUIsR0FBR21CO2dCQUFPO2dCQUNuQkUsV0FBVTswQkFFVHhCOzs7Ozs7MEJBS0gsOERBQUN1QjtnQkFBSU0sT0FBTztvQkFBRWxCLFFBQVFOO2dCQUFXOzs7Ozs7OztBQUd2QztHQTVETU47O1FBR2FELG9FQUFnQkE7UUF3QmJKLDREQUFpQkE7UUFHbkJDLHVEQUFZQTtRQUVmQyxvREFBU0E7OztLQWhDcEJHO0FBOEROLCtEQUFlQSxZQUFZQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL3Ntb290aFNjcm9sbC5qcz9hYTFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IFJlc2l6ZU9ic2VydmVyIGZyb20gXCJyZXNpemUtb2JzZXJ2ZXItcG9seWZpbGxcIlxyXG5pbXBvcnQge1xyXG4gIHVzZVZpZXdwb3J0U2Nyb2xsLFxyXG4gIHVzZVRyYW5zZm9ybSxcclxuICB1c2VTcHJpbmcsXHJcbiAgbW90aW9uXHJcbn0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxyXG5pbXBvcnQgeyB1c2VGb2xsb3dQb2ludGVyIH0gZnJvbSBcIi4uL3V0aWwvdXNlLWZvbGxvdy1wb2ludFwiO1xyXG5cclxuY29uc3QgU21vb3RoU2Nyb2xsID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG5cclxuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgeyB4LCB5IH0gPSB1c2VGb2xsb3dQb2ludGVyKHJlZik7XHJcblxyXG4gIC8vIHNjcm9sbCBjb250YWluZXJcclxuICBjb25zdCBzY3JvbGxSZWYgPSB1c2VSZWYobnVsbClcclxuXHJcbiAgLy8gcGFnZSBzY3JvbGxhYmxlIGhlaWdodCBiYXNlZCBvbiBjb250ZW50IGxlbmd0aFxyXG4gIGNvbnN0IFtwYWdlSGVpZ2h0LCBzZXRQYWdlSGVpZ2h0XSA9IHVzZVN0YXRlKDApXHJcblxyXG4gIC8vIHVwZGF0ZSBzY3JvbGxhYmxlIGhlaWdodCB3aGVuIGJyb3dzZXIgaXMgcmVzaXppbmdcclxuICBjb25zdCByZXNpemVQYWdlSGVpZ2h0ID0gdXNlQ2FsbGJhY2soZW50cmllcyA9PiB7XHJcbiAgICBmb3IgKGxldCBlbnRyeSBvZiBlbnRyaWVzKSB7XHJcbiAgICAgIHNldFBhZ2VIZWlnaHQoZW50cnkuY29udGVudFJlY3QuaGVpZ2h0KVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG5cclxuICAvLyBvYnNlcnZlIHdoZW4gYnJvd3NlciBpcyByZXNpemluZ1xyXG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCByZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcihlbnRyaWVzID0+XHJcbiAgICAgIHJlc2l6ZVBhZ2VIZWlnaHQoZW50cmllcylcclxuICAgIClcclxuICAgIHNjcm9sbFJlZiAmJiByZXNpemVPYnNlcnZlci5vYnNlcnZlKHNjcm9sbFJlZi5jdXJyZW50KVxyXG4gICAgcmV0dXJuICgpID0+IHJlc2l6ZU9ic2VydmVyLmRpc2Nvbm5lY3QoKVxyXG4gIH0sIFtzY3JvbGxSZWYsIHJlc2l6ZVBhZ2VIZWlnaHRdKVxyXG5cclxuICBjb25zdCB7IHNjcm9sbFkgfSA9IHVzZVZpZXdwb3J0U2Nyb2xsKCkgLy8gbWVhc3VyZXMgaG93IG1hbnkgcGl4ZWxzIHVzZXIgaGFzIHNjcm9sbGVkIHZlcnRpY2FsbHlcclxuICAvLyBhcyBzY3JvbGxZIGNoYW5nZXMgYmV0d2VlbiAwcHggYW5kIHRoZSBzY3JvbGxhYmxlIGhlaWdodCwgY3JlYXRlIGEgbmVnYXRpdmUgc2Nyb2xsIHZhbHVlLi4uXHJcbiAgLy8gLi4uIGJhc2VkIG9uIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIHRvIHRyYW5zbGF0ZVkgdGhlIGRvY3VtZW50IGluIGEgbmF0dXJhbCB3YXlcclxuICBjb25zdCB0cmFuc2Zvcm0gPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWSwgWzAsIHBhZ2VIZWlnaHRdLCBbMCwgLXBhZ2VIZWlnaHRdKVxyXG4gIGNvbnN0IHBoeXNpY3MgPSB7IGRhbXBpbmc6IDE1LCBtYXNzOiAwLjI3LCBzdGlmZm5lc3M6IDY1IH0gLy8gZWFzaW5nIG9mIHNtb290aCBzY3JvbGxcclxuICBjb25zdCBzcHJpbmcgPSB1c2VTcHJpbmcodHJhbnNmb3JtLCBwaHlzaWNzKSAvLyBhcHBseSBlYXNpbmcgdG8gdGhlIG5lZ2F0aXZlIHNjcm9sbCB2YWx1ZVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICByZWY9e3JlZn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy01IGgtNSBib3JkZXIgYm9yZGVyLWJsYWNrIHJvdW5kZWQtZnVsbFwiXHJcbiAgICAgICAgICAgIGFuaW1hdGU9e3sgeCwgeSB9fVxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcInNwcmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgZGFtcGluZzogMjAsXHJcbiAgICAgICAgICAgICAgICBzdGlmZm5lc3M6IDUwLFxyXG4gICAgICAgICAgICAgICAgcmVzdERlbHRhOiAwLjAwMVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgPjwvbW90aW9uLmRpdj5cclxuICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICByZWY9e3Njcm9sbFJlZn1cclxuICAgICAgICBzdHlsZT17eyB5OiBzcHJpbmcgfX0gLy8gdHJhbnNsYXRlWSBvZiBzY3JvbGwgY29udGFpbmVyIHVzaW5nIG5lZ2F0aXZlIHNjcm9sbCB2YWx1ZVxyXG4gICAgICAgIGNsYXNzTmFtZT1cInNjcm9sbC1jb250YWluZXJcIlxyXG4gICAgICA+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgIHsvKiBibGFuayBkaXYgdGhhdCBoYXMgYSBkeW5hbWljIGhlaWdodCBiYXNlZCBvbiB0aGUgY29udGVudCdzIGluaGVyZW50IGhlaWdodCAqL31cclxuICAgICAgey8qIHRoaXMgaXMgbmVjY2Vzc2FyeSB0byBhbGxvdyB0aGUgc2Nyb2xsIGNvbnRhaW5lciB0byBzY3JvbGwuLi4gKi99XHJcbiAgICAgIHsvKiAuLi4gdXNpbmcgdGhlIGJyb3dzZXIncyBuYXRpdmUgc2Nyb2xsIGJhciAqL31cclxuICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IHBhZ2VIZWlnaHQgfX0gLz5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU21vb3RoU2Nyb2xsXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlQ2FsbGJhY2siLCJ1c2VMYXlvdXRFZmZlY3QiLCJSZXNpemVPYnNlcnZlciIsInVzZVZpZXdwb3J0U2Nyb2xsIiwidXNlVHJhbnNmb3JtIiwidXNlU3ByaW5nIiwibW90aW9uIiwidXNlRm9sbG93UG9pbnRlciIsIlNtb290aFNjcm9sbCIsImNoaWxkcmVuIiwicmVmIiwieCIsInkiLCJzY3JvbGxSZWYiLCJwYWdlSGVpZ2h0Iiwic2V0UGFnZUhlaWdodCIsInJlc2l6ZVBhZ2VIZWlnaHQiLCJlbnRyaWVzIiwiZW50cnkiLCJjb250ZW50UmVjdCIsImhlaWdodCIsInJlc2l6ZU9ic2VydmVyIiwib2JzZXJ2ZSIsImN1cnJlbnQiLCJkaXNjb25uZWN0Iiwic2Nyb2xsWSIsInRyYW5zZm9ybSIsInBoeXNpY3MiLCJkYW1waW5nIiwibWFzcyIsInN0aWZmbmVzcyIsInNwcmluZyIsImRpdiIsImNsYXNzTmFtZSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwidHlwZSIsInJlc3REZWx0YSIsInN0eWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/smoothScroll.js\n"));

/***/ })

});