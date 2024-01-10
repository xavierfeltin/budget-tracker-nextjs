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

/***/ "(app-pages-browser)/./components/Components/Mobile/Nav.tsx":
/*!**********************************************!*\
  !*** ./components/Components/Mobile/Nav.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Nav: function() { return /* binding */ Nav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Data_Bank__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Data/Bank */ \"(app-pages-browser)/./components/Data/Bank.ts\");\n/* harmony import */ var _Nav_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Nav.css */ \"(app-pages-browser)/./components/Components/Mobile/Nav.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n//tutorial: https://www.youtube.com/watch?v=hmoavRdx4YM\nfunction Nav(param) {\n    let { periods, handleNavSelection } = param;\n    _s();\n    const [showLinks, setShowLinks] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const handleShowLinks = (navAction, period)=>{\n        setShowLinks(!showLinks);\n        if (navAction) {\n            handleNavSelection(navAction, period);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"navbar \".concat(showLinks ? \"navbar show-nav\" : \"hide-nav\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"navbar__burger\",\n                onClick: ()=>handleShowLinks(\"\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"burger-bar\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\projet\\\\budget-tracker-nextjs\\\\components\\\\Components\\\\Mobile\\\\Nav.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\projet\\\\budget-tracker-nextjs\\\\components\\\\Components\\\\Mobile\\\\Nav.tsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"navbar__links\"\n            }, void 0, false, {\n                fileName: \"D:\\\\projet\\\\budget-tracker-nextjs\\\\components\\\\Components\\\\Mobile\\\\Nav.tsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"navbar__links\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"navbar__item slideInDown-1\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"navbar__link burger-item\",\n                            onClick: ()=>handleShowLinks(\"Load\"),\n                            children: \"Load accounts\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\projet\\\\budget-tracker-nextjs\\\\components\\\\Components\\\\Mobile\\\\Nav.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\projet\\\\budget-tracker-nextjs\\\\components\\\\Components\\\\Mobile\\\\Nav.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, this),\n                    periods.map((account, idx)=>{\n                        const nbUntaggedLines = account.lines.filter((line)=>line.tags.length === 0).length;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"navbar__item slideInDown-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"navbar__link burger-item\",\n                                onClick: ()=>handleShowLinks(\"DisplayAccount\", account),\n                                children: [\n                                    (0,_components_Data_Bank__WEBPACK_IMPORTED_MODULE_1__.getAccountPeriodStr)(account),\n                                    \" \",\n                                    nbUntaggedLines > 0 ? \"(lines to tag \" + nbUntaggedLines + \")\" : \"\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\projet\\\\budget-tracker-nextjs\\\\components\\\\Components\\\\Mobile\\\\Nav.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 25\n                            }, this)\n                        }, \"navbar-item-\" + (0,_components_Data_Bank__WEBPACK_IMPORTED_MODULE_1__.getAccountPeriodStr)(account), false, {\n                            fileName: \"D:\\\\projet\\\\budget-tracker-nextjs\\\\components\\\\Components\\\\Mobile\\\\Nav.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 28\n                        }, this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\projet\\\\budget-tracker-nextjs\\\\components\\\\Components\\\\Mobile\\\\Nav.tsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\projet\\\\budget-tracker-nextjs\\\\components\\\\Components\\\\Mobile\\\\Nav.tsx\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, this);\n}\n_s(Nav, \"l7SXRhm0tGdFv3onRRCpsmmRnS4=\");\n_c = Nav;\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ29tcG9uZW50cy9Nb2JpbGUvTmF2LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE2RTtBQUMzRDtBQUNjO0FBT2hDLHVEQUF1RDtBQUNoRCxTQUFTRSxJQUFJLEtBRW9CO1FBRnBCLEVBQ2hCQyxPQUFPLEVBQ1BDLGtCQUFrQixFQUFrQixHQUZwQjs7SUFJaEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdMLCtDQUFRQSxDQUFVO0lBRXBELE1BQU1NLGtCQUFrQixDQUFDQyxXQUFtQkM7UUFDeENILGFBQWEsQ0FBQ0Q7UUFFZCxJQUFJRyxXQUFXO1lBQ1hKLG1CQUFtQkksV0FBV0M7UUFDbEM7SUFDSjtJQUVBLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFXLFVBQXFELE9BQTNDTixZQUFZLG9CQUFvQjs7MEJBQ3RELDhEQUFDTztnQkFBT0QsV0FBVTtnQkFBaUJFLFNBQVMsSUFBTU4sZ0JBQWdCOzBCQUM5RCw0RUFBQ087b0JBQUtILFdBQVU7Ozs7Ozs7Ozs7OzBCQUVwQiw4REFBQ0k7Z0JBQUlKLFdBQVU7Ozs7OzswQkFDZiw4REFBQ0s7Z0JBQUdMLFdBQVU7O2tDQUNWLDhEQUFDTTt3QkFBR04sV0FBVTtrQ0FDViw0RUFBQ0M7NEJBQU9ELFdBQVU7NEJBQTJCRSxTQUFTLElBQU1OLGdCQUFnQjtzQ0FBUzs7Ozs7Ozs7Ozs7b0JBS3hGSixRQUFRZSxHQUFHLENBQUMsQ0FBQ0MsU0FBU0M7d0JBQ25CLE1BQU1DLGtCQUFrQkYsUUFBUUcsS0FBSyxDQUFDQyxNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0MsSUFBSSxDQUFDQyxNQUFNLEtBQUssR0FBR0EsTUFBTTt3QkFFckYscUJBQU8sOERBQUNUOzRCQUF1RE4sV0FBVTtzQ0FDckUsNEVBQUNDO2dDQUFRRCxXQUFVO2dDQUE0QkUsU0FBUyxJQUFNTixnQkFBZ0Isa0JBQWtCWTs7b0NBQzNGbkIsMEVBQW1CQSxDQUFDbUI7b0NBQVM7b0NBQUVFLGtCQUFrQixJQUFJLG1CQUFtQkEsa0JBQWtCLE1BQU07Ozs7Ozs7MkJBRnpGLGlCQUFpQnJCLDBFQUFtQkEsQ0FBQ21COzs7OztvQkFLekQ7Ozs7Ozs7Ozs7Ozs7QUFJaEI7R0F2Q2dCakI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21wb25lbnRzL01vYmlsZS9OYXYudHN4P2QwZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUFjY291bnRQZXJpb2QsIGdldEFjY291bnRQZXJpb2RTdHIgfSBmcm9tIFwiQC9jb21wb25lbnRzL0RhdGEvQmFua1wiO1xyXG5pbXBvcnQgXCIuL05hdi5jc3NcIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElucHV0UmFuZ2VQcm9wcyB7XHJcbiAgICBwZXJpb2RzOiBJQWNjb3VudFBlcmlvZFtdO1xyXG4gICAgaGFuZGxlTmF2U2VsZWN0aW9uOiAobmF2QWN0aW9uOiBzdHJpbmcsIHBlcmlvZD86IElBY2NvdW50UGVyaW9kKSA9PiB2b2lkXHJcbn1cclxuXHJcbi8vdHV0b3JpYWw6IGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9aG1vYXZSZHg0WU1cclxuZXhwb3J0IGZ1bmN0aW9uIE5hdih7XHJcbiAgICBwZXJpb2RzLFxyXG4gICAgaGFuZGxlTmF2U2VsZWN0aW9ufTogSW5wdXRSYW5nZVByb3BzKSB7XHJcblxyXG4gICAgY29uc3QgW3Nob3dMaW5rcywgc2V0U2hvd0xpbmtzXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTaG93TGlua3MgPSAobmF2QWN0aW9uOiBzdHJpbmcsIHBlcmlvZD86IElBY2NvdW50UGVyaW9kKSA9PiB7XHJcbiAgICAgICAgc2V0U2hvd0xpbmtzKCFzaG93TGlua3MpO1xyXG5cclxuICAgICAgICBpZiAobmF2QWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGhhbmRsZU5hdlNlbGVjdGlvbihuYXZBY3Rpb24sIHBlcmlvZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9e2BuYXZiYXIgJHtzaG93TGlua3MgPyBcIm5hdmJhciBzaG93LW5hdlwiIDogXCJoaWRlLW5hdlwifWB9PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5hdmJhcl9fYnVyZ2VyXCIgb25DbGljaz17KCkgPT4gaGFuZGxlU2hvd0xpbmtzKFwiXCIpfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJ1cmdlci1iYXJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhcl9fbGlua3NcIj48L2Rpdj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhcl9fbGlua3NcIj5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZiYXJfX2l0ZW0gc2xpZGVJbkRvd24tMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmF2YmFyX19saW5rIGJ1cmdlci1pdGVtXCIgb25DbGljaz17KCkgPT4gaGFuZGxlU2hvd0xpbmtzKFwiTG9hZFwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvYWQgYWNjb3VudHNcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAge3BlcmlvZHMubWFwKChhY2NvdW50LCBpZHgpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5iVW50YWdnZWRMaW5lcyA9IGFjY291bnQubGluZXMuZmlsdGVyKChsaW5lKSA9PiBsaW5lLnRhZ3MubGVuZ3RoID09PSAwKS5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtcIm5hdmJhci1pdGVtLVwiICsgZ2V0QWNjb3VudFBlcmlvZFN0cihhY2NvdW50KX0gY2xhc3NOYW1lPVwibmF2YmFyX19pdGVtIHNsaWRlSW5Eb3duLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAgY2xhc3NOYW1lPVwibmF2YmFyX19saW5rIGJ1cmdlci1pdGVtXCIgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNob3dMaW5rcyhcIkRpc3BsYXlBY2NvdW50XCIsIGFjY291bnQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRBY2NvdW50UGVyaW9kU3RyKGFjY291bnQpfSB7bmJVbnRhZ2dlZExpbmVzID4gMCA/IFwiKGxpbmVzIHRvIHRhZyBcIiArIG5iVW50YWdnZWRMaW5lcyArIFwiKVwiIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbImdldEFjY291bnRQZXJpb2RTdHIiLCJ1c2VTdGF0ZSIsIk5hdiIsInBlcmlvZHMiLCJoYW5kbGVOYXZTZWxlY3Rpb24iLCJzaG93TGlua3MiLCJzZXRTaG93TGlua3MiLCJoYW5kbGVTaG93TGlua3MiLCJuYXZBY3Rpb24iLCJwZXJpb2QiLCJuYXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwic3BhbiIsImRpdiIsInVsIiwibGkiLCJtYXAiLCJhY2NvdW50IiwiaWR4IiwibmJVbnRhZ2dlZExpbmVzIiwibGluZXMiLCJmaWx0ZXIiLCJsaW5lIiwidGFncyIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Components/Mobile/Nav.tsx\n"));

/***/ })

});