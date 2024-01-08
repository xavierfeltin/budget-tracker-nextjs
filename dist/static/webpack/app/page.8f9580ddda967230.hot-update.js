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

/***/ "(app-pages-browser)/./components/Components/TagList.tsx":
/*!*******************************************!*\
  !*** ./components/Components/TagList.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TagList: function() { return /* binding */ TagList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _TagList_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TagList.css */ \"(app-pages-browser)/./components/Components/TagList.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Data_Bank__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Data/Bank */ \"(app-pages-browser)/./components/Data/Bank.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction TagList(param) {\n    let { account, onTagSelect } = param;\n    _s();\n    const [tagsWithCount, setTagsWithCount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [subTagsWithCount, setSubTagsWithCount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [selectedTag, setSelectedTag] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [breadCrumbs, setBreadCrumbs] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        \"Tous\"\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const listWithCount = (0,_Data_Bank__WEBPACK_IMPORTED_MODULE_3__.extractTagsWithCount)(account.lines, undefined);\n        setTagsWithCount([\n            {\n                tag: \"Tous\",\n                count: account.lines.length,\n                frequency: 1\n            },\n            ...listWithCount\n        ]);\n    }, [\n        account\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        console.log(\"selected tag: \" + selectedTag);\n        if (selectedTag === \"\") {\n            setSubTagsWithCount([]);\n        } else {\n            const taggedLines = account.lines.filter((line)=>line.tags.indexOf(selectedTag) !== -1);\n            const listWithCount = (0,_Data_Bank__WEBPACK_IMPORTED_MODULE_3__.extractTagsWithCount)(taggedLines, selectedTag);\n            setSubTagsWithCount(listWithCount);\n        }\n    }, [\n        selectedTag,\n        account\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \" Tags \"\n            }, void 0, false, {\n                fileName: \"D:\\\\projet\\\\budget-tracker-nextjs\\\\components\\\\Components\\\\TagList.tsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \" \",\n                    breadCrumbs.join(\" > \"),\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\projet\\\\budget-tracker-nextjs\\\\components\\\\Components\\\\TagList.tsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this),\n            subTagsWithCount.map((tag, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    id: \"btn-breadcrumb-\" + tag.tag,\n                    name: \"btn-breadcrumb-\" + tag.tag,\n                    className: \"btn-link \",\n                    onClick: ()=>{\n                        setSelectedTag(breadCrumbs[idx].tag);\n                        setBreadCrumbs((old)=>[\n                                ...old,\n                                subTagsWithCount[idx].tag\n                            ]);\n                        onTagSelect(subTagsWithCount[idx].tag);\n                    },\n                    children: tag.tag + \"(\" + Math.floor(tag.frequency * 100) + \"%)\"\n                }, \"btn-breadcrumb-\" + tag.tag, false, {\n                    fileName: \"D:\\\\projet\\\\budget-tracker-nextjs\\\\components\\\\Components\\\\TagList.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                }, this)).join(\" > \"),\n            selectedTag !== \"\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            selectedTag,\n                            \" sub tags\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\projet\\\\budget-tracker-nextjs\\\\components\\\\Components\\\\TagList.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, this),\n                    subTagsWithCount.map((tag, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            id: \"btn-subtag-\" + tag.tag,\n                            name: \"btn-subtag-\" + tag.tag,\n                            className: \"btn-link \",\n                            onClick: ()=>{\n                                setSelectedTag(subTagsWithCount[idx].tag);\n                                setBreadCrumbs((old)=>[\n                                        ...old,\n                                        subTagsWithCount[idx].tag\n                                    ]);\n                                onTagSelect(subTagsWithCount[idx].tag);\n                            },\n                            children: tag.tag + \"(\" + Math.floor(tag.frequency * 100) + \"%)\"\n                        }, \"btn-subtag-\" + tag.tag, false, {\n                            fileName: \"D:\\\\projet\\\\budget-tracker-nextjs\\\\components\\\\Components\\\\TagList.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 21\n                        }, this))\n                ]\n            }, void 0, true),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"All tags\"\n            }, void 0, false, {\n                fileName: \"D:\\\\projet\\\\budget-tracker-nextjs\\\\components\\\\Components\\\\TagList.tsx\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, this),\n            tagsWithCount.map((tag, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    id: \"btn-\" + tag.tag,\n                    name: \"btn-\" + tag.tag,\n                    className: selectedTag === tag.tag || tag.tag === \"Tous\" && selectedTag === \"\" ? \"btn-link-selected \" : \"btn-link \",\n                    onClick: ()=>{\n                        setSelectedTag(idx === 0 ? \"\" : tagsWithCount[idx].tag);\n                        setBreadCrumbs(idx === 0 ? [\n                            \"Tous\"\n                        ] : [\n                            \"Tous\",\n                            tagsWithCount[idx].tag\n                        ]);\n                        onTagSelect(idx === 0 ? \"\" : tagsWithCount[idx].tag);\n                    },\n                    children: tag.tag === \"Tous\" ? tag.tag : tag.tag + \"(\" + Math.floor(tag.frequency * 100) + \"%)\"\n                }, \"btn-\" + tag.tag, false, {\n                    fileName: \"D:\\\\projet\\\\budget-tracker-nextjs\\\\components\\\\Components\\\\TagList.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 17\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\projet\\\\budget-tracker-nextjs\\\\components\\\\Components\\\\TagList.tsx\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, this);\n}\n_s(TagList, \"16mPXQJrqUNW7lE/p8P2AQCEjL4=\");\n_c = TagList;\nvar _c;\n$RefreshReg$(_c, \"TagList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ29tcG9uZW50cy9UYWdMaXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF1QjtBQUNxQjtBQUM2QjtBQU9sRSxTQUFTRyxRQUFRLEtBR0Y7UUFIRSxFQUNoQkMsT0FBTyxFQUNQQyxXQUFXLEVBQ0csR0FIRTs7SUFLcEIsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR04sK0NBQVFBLENBQVMsRUFBRTtJQUM3RCxNQUFNLENBQUNPLGtCQUFrQkMsb0JBQW9CLEdBQUdSLCtDQUFRQSxDQUFTLEVBQUU7SUFDbkUsTUFBTSxDQUFDUyxhQUFhQyxlQUFlLEdBQUdWLCtDQUFRQSxDQUFTO0lBQ3ZELE1BQU0sQ0FBQ1csYUFBYUMsZUFBZSxHQUFHWiwrQ0FBUUEsQ0FBVztRQUFDO0tBQU87SUFFakVELGdEQUFTQSxDQUFDO1FBQ04sTUFBTWMsZ0JBQWdCWixnRUFBb0JBLENBQUNFLFFBQVFXLEtBQUssRUFBRUM7UUFDMURULGlCQUFpQjtZQUFDO2dCQUFDVSxLQUFLO2dCQUFRQyxPQUFPZCxRQUFRVyxLQUFLLENBQUNJLE1BQU07Z0JBQUVDLFdBQVc7WUFBQztlQUFNTjtTQUFjO0lBQ2pHLEdBQUc7UUFBQ1Y7S0FBUTtJQUVaSixnREFBU0EsQ0FBQztRQUNOcUIsUUFBUUMsR0FBRyxDQUFDLG1CQUFtQlo7UUFDL0IsSUFBSUEsZ0JBQWdCLElBQUk7WUFDcEJELG9CQUFvQixFQUFFO1FBQzFCLE9BQ0s7WUFDRCxNQUFNYyxjQUFjbkIsUUFBUVcsS0FBSyxDQUFDUyxNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0MsSUFBSSxDQUFDQyxPQUFPLENBQUNqQixpQkFBaUIsQ0FBQztZQUN2RixNQUFNSSxnQkFBZ0JaLGdFQUFvQkEsQ0FBQ3FCLGFBQWFiO1lBQ3hERCxvQkFBb0JLO1FBQ3hCO0lBQ0osR0FBRztRQUFDSjtRQUFhTjtLQUFRO0lBR3pCLHFCQUNJLDhEQUFDd0I7OzBCQUNHLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQzs7b0JBQUU7b0JBQUVsQixZQUFZbUIsSUFBSSxDQUFDO29CQUFPOzs7Ozs7O1lBQzVCdkIsaUJBQWlCd0IsR0FBRyxDQUFDLENBQUNmLEtBQUtnQixvQkFDeEIsOERBQUNDO29CQUF5Q0MsSUFBSSxvQkFBb0JsQixJQUFJQSxHQUFHO29CQUFFbUIsTUFBTSxvQkFBb0JuQixJQUFJQSxHQUFHO29CQUFFb0IsV0FBVztvQkFDckhDLFNBQVM7d0JBQU8zQixlQUFlQyxXQUFXLENBQUNxQixJQUFJLENBQUNoQixHQUFHO3dCQUFHSixlQUFlLENBQUMwQixNQUFRO21DQUFJQTtnQ0FBSy9CLGdCQUFnQixDQUFDeUIsSUFBSSxDQUFDaEIsR0FBRzs2QkFBQzt3QkFBR1osWUFBWUcsZ0JBQWdCLENBQUN5QixJQUFJLENBQUNoQixHQUFHO29CQUFFOzhCQUMxSkEsSUFBSUEsR0FBRyxHQUFHLE1BQU11QixLQUFLQyxLQUFLLENBQUN4QixJQUFJRyxTQUFTLEdBQUcsT0FBTzttQkFGMUMsb0JBQW9CSCxJQUFJQSxHQUFHOzs7OzBCQUl6Q2MsSUFBSSxDQUFDO1lBR1ByQixnQkFBZ0Isb0JBQ2I7O2tDQUNBLDhEQUFDb0I7OzRCQUFHcEI7NEJBQVk7Ozs7Ozs7b0JBQ2ZGLGlCQUFpQndCLEdBQUcsQ0FBQyxDQUFDZixLQUFLZ0Isb0JBQ3hCLDhEQUFDQzs0QkFBcUNDLElBQUksZ0JBQWdCbEIsSUFBSUEsR0FBRzs0QkFBRW1CLE1BQU0sZ0JBQWdCbkIsSUFBSUEsR0FBRzs0QkFBRW9CLFdBQVc7NEJBQ3pHQyxTQUFTO2dDQUFPM0IsZUFBZUgsZ0JBQWdCLENBQUN5QixJQUFJLENBQUNoQixHQUFHO2dDQUFHSixlQUFlLENBQUMwQixNQUFROzJDQUFJQTt3Q0FBSy9CLGdCQUFnQixDQUFDeUIsSUFBSSxDQUFDaEIsR0FBRztxQ0FBQztnQ0FBR1osWUFBWUcsZ0JBQWdCLENBQUN5QixJQUFJLENBQUNoQixHQUFHOzRCQUFFO3NDQUMvSkEsSUFBSUEsR0FBRyxHQUFHLE1BQU11QixLQUFLQyxLQUFLLENBQUN4QixJQUFJRyxTQUFTLEdBQUcsT0FBTzsyQkFGMUMsZ0JBQWdCSCxJQUFJQSxHQUFHOzs7Ozs7OzBCQVE1Qyw4REFBQ2E7MEJBQUU7Ozs7OztZQUNGeEIsY0FBYzBCLEdBQUcsQ0FBQyxDQUFDZixLQUFLZ0Isb0JBQ3JCLDhEQUFDQztvQkFBOEJDLElBQUksU0FBU2xCLElBQUlBLEdBQUc7b0JBQUVtQixNQUFNLFNBQVNuQixJQUFJQSxHQUFHO29CQUFFb0IsV0FBVyxnQkFBaUJwQixJQUFJQSxHQUFHLElBQUtBLElBQUlBLEdBQUcsS0FBSyxVQUFVUCxnQkFBZ0IsS0FBTyx1QkFBdUI7b0JBQ3JMNEIsU0FBUzt3QkFBTzNCLGVBQWVzQixRQUFRLElBQUksS0FBSzNCLGFBQWEsQ0FBQzJCLElBQUksQ0FBQ2hCLEdBQUc7d0JBQUdKLGVBQWVvQixRQUFRLElBQUk7NEJBQUM7eUJBQU8sR0FBRzs0QkFBQzs0QkFBUTNCLGFBQWEsQ0FBQzJCLElBQUksQ0FBQ2hCLEdBQUc7eUJBQUM7d0JBQUdaLFlBQVk0QixRQUFRLElBQUksS0FBSzNCLGFBQWEsQ0FBQzJCLElBQUksQ0FBQ2hCLEdBQUc7b0JBQUU7OEJBQ3RNQSxJQUFJQSxHQUFHLEtBQUssU0FBU0EsSUFBSUEsR0FBRyxHQUFHQSxJQUFJQSxHQUFHLEdBQUcsTUFBTXVCLEtBQUtDLEtBQUssQ0FBQ3hCLElBQUlHLFNBQVMsR0FBRyxPQUFPO21CQUZ6RSxTQUFTSCxJQUFJQSxHQUFHOzs7Ozs7Ozs7OztBQU83QztHQTdEZ0JkO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29tcG9uZW50cy9UYWdMaXN0LnRzeD9iZTRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9UYWdMaXN0LmNzcyc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSUFjY291bnRMaW5lcywgSVRhZywgZXh0cmFjdFRhZ3NXaXRoQ291bnQgfSBmcm9tIFwiLi4vRGF0YS9CYW5rXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElucHV0UmFuZ2VQcm9wcyB7XHJcbiAgICBhY2NvdW50OiBJQWNjb3VudExpbmVzO1xyXG4gICAgb25UYWdTZWxlY3Q6ICh0YWc6IHN0cmluZykgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRhZ0xpc3Qoe1xyXG4gICAgICAgIGFjY291bnQsXHJcbiAgICAgICAgb25UYWdTZWxlY3QsXHJcbiAgICB9OiBJbnB1dFJhbmdlUHJvcHMpIHtcclxuXHJcbiAgICBjb25zdCBbdGFnc1dpdGhDb3VudCwgc2V0VGFnc1dpdGhDb3VudF0gPSB1c2VTdGF0ZTxJVGFnW10+KFtdKVxyXG4gICAgY29uc3QgW3N1YlRhZ3NXaXRoQ291bnQsIHNldFN1YlRhZ3NXaXRoQ291bnRdID0gdXNlU3RhdGU8SVRhZ1tdPihbXSlcclxuICAgIGNvbnN0IFtzZWxlY3RlZFRhZywgc2V0U2VsZWN0ZWRUYWddID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuICAgIGNvbnN0IFticmVhZENydW1icywgc2V0QnJlYWRDcnVtYnNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtcIlRvdXNcIl0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGlzdFdpdGhDb3VudCA9IGV4dHJhY3RUYWdzV2l0aENvdW50KGFjY291bnQubGluZXMsIHVuZGVmaW5lZClcclxuICAgICAgICBzZXRUYWdzV2l0aENvdW50KFt7dGFnOiBcIlRvdXNcIiwgY291bnQ6IGFjY291bnQubGluZXMubGVuZ3RoLCBmcmVxdWVuY3k6IDF9LCAuLi5saXN0V2l0aENvdW50XSk7XHJcbiAgICB9LCBbYWNjb3VudF0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNlbGVjdGVkIHRhZzogXCIgKyBzZWxlY3RlZFRhZyk7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkVGFnID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHNldFN1YlRhZ3NXaXRoQ291bnQoW10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgdGFnZ2VkTGluZXMgPSBhY2NvdW50LmxpbmVzLmZpbHRlcigobGluZSkgPT4gbGluZS50YWdzLmluZGV4T2Yoc2VsZWN0ZWRUYWcpICE9PSAtMSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpc3RXaXRoQ291bnQgPSBleHRyYWN0VGFnc1dpdGhDb3VudCh0YWdnZWRMaW5lcywgc2VsZWN0ZWRUYWcpXHJcbiAgICAgICAgICAgIHNldFN1YlRhZ3NXaXRoQ291bnQobGlzdFdpdGhDb3VudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3NlbGVjdGVkVGFnLCBhY2NvdW50XSlcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+IFRhZ3MgPC9oMT5cclxuICAgICAgICAgICAgPHA+IHticmVhZENydW1icy5qb2luKFwiID4gXCIpfSA8L3A+XHJcbiAgICAgICAgICAgIHtzdWJUYWdzV2l0aENvdW50Lm1hcCgodGFnLCBpZHgpID0+IChcclxuICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PXtcImJ0bi1icmVhZGNydW1iLVwiICsgdGFnLnRhZ30gaWQ9e1wiYnRuLWJyZWFkY3J1bWItXCIgKyB0YWcudGFnfSBuYW1lPXtcImJ0bi1icmVhZGNydW1iLVwiICsgdGFnLnRhZ30gY2xhc3NOYW1lPXtcImJ0bi1saW5rIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzZXRTZWxlY3RlZFRhZyhicmVhZENydW1ic1tpZHhdLnRhZyk7IHNldEJyZWFkQ3J1bWJzKChvbGQpID0+IFsuLi5vbGQsIHN1YlRhZ3NXaXRoQ291bnRbaWR4XS50YWddKTsgb25UYWdTZWxlY3Qoc3ViVGFnc1dpdGhDb3VudFtpZHhdLnRhZyk7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3RhZy50YWcgKyBcIihcIiArIE1hdGguZmxvb3IodGFnLmZyZXF1ZW5jeSAqIDEwMCkgKyBcIiUpXCJ9XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgKSkuam9pbihcIiA+IFwiKX1cclxuXHJcblxyXG4gICAgICAgICAgICB7c2VsZWN0ZWRUYWcgIT09IFwiXCIgJiZcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8cD57c2VsZWN0ZWRUYWd9IHN1YiB0YWdzPC9wPlxyXG4gICAgICAgICAgICAgICAge3N1YlRhZ3NXaXRoQ291bnQubWFwKCh0YWcsIGlkeCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PXtcImJ0bi1zdWJ0YWctXCIgKyB0YWcudGFnfSBpZD17XCJidG4tc3VidGFnLVwiICsgdGFnLnRhZ30gbmFtZT17XCJidG4tc3VidGFnLVwiICsgdGFnLnRhZ30gY2xhc3NOYW1lPXtcImJ0bi1saW5rIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c2V0U2VsZWN0ZWRUYWcoc3ViVGFnc1dpdGhDb3VudFtpZHhdLnRhZyk7IHNldEJyZWFkQ3J1bWJzKChvbGQpID0+IFsuLi5vbGQsIHN1YlRhZ3NXaXRoQ291bnRbaWR4XS50YWddKTsgb25UYWdTZWxlY3Qoc3ViVGFnc1dpdGhDb3VudFtpZHhdLnRhZyk7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0YWcudGFnICsgXCIoXCIgKyBNYXRoLmZsb29yKHRhZy5mcmVxdWVuY3kgKiAxMDApICsgXCIlKVwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgPHA+QWxsIHRhZ3M8L3A+XHJcbiAgICAgICAgICAgIHt0YWdzV2l0aENvdW50Lm1hcCgodGFnLCBpZHgpID0+IChcclxuICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PXtcImJ0bi1cIiArIHRhZy50YWd9IGlkPXtcImJ0bi1cIiArIHRhZy50YWd9IG5hbWU9e1wiYnRuLVwiICsgdGFnLnRhZ30gY2xhc3NOYW1lPXsoc2VsZWN0ZWRUYWcgPT09IHRhZy50YWcgfHwgKHRhZy50YWcgPT09IFwiVG91c1wiICYmIHNlbGVjdGVkVGFnID09PSBcIlwiKSkgPyBcImJ0bi1saW5rLXNlbGVjdGVkIFwiIDogXCJidG4tbGluayBcIn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c2V0U2VsZWN0ZWRUYWcoaWR4ID09PSAwID8gXCJcIiA6IHRhZ3NXaXRoQ291bnRbaWR4XS50YWcpOyBzZXRCcmVhZENydW1icyhpZHggPT09IDAgPyBbXCJUb3VzXCJdIDogW1wiVG91c1wiLCB0YWdzV2l0aENvdW50W2lkeF0udGFnXSk7IG9uVGFnU2VsZWN0KGlkeCA9PT0gMCA/IFwiXCIgOiB0YWdzV2l0aENvdW50W2lkeF0udGFnKTt9fT5cclxuICAgICAgICAgICAgICAgICAgICB7dGFnLnRhZyA9PT0gXCJUb3VzXCIgPyB0YWcudGFnIDogdGFnLnRhZyArIFwiKFwiICsgTWF0aC5mbG9vcih0YWcuZnJlcXVlbmN5ICogMTAwKSArIFwiJSlcIn1cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImV4dHJhY3RUYWdzV2l0aENvdW50IiwiVGFnTGlzdCIsImFjY291bnQiLCJvblRhZ1NlbGVjdCIsInRhZ3NXaXRoQ291bnQiLCJzZXRUYWdzV2l0aENvdW50Iiwic3ViVGFnc1dpdGhDb3VudCIsInNldFN1YlRhZ3NXaXRoQ291bnQiLCJzZWxlY3RlZFRhZyIsInNldFNlbGVjdGVkVGFnIiwiYnJlYWRDcnVtYnMiLCJzZXRCcmVhZENydW1icyIsImxpc3RXaXRoQ291bnQiLCJsaW5lcyIsInVuZGVmaW5lZCIsInRhZyIsImNvdW50IiwibGVuZ3RoIiwiZnJlcXVlbmN5IiwiY29uc29sZSIsImxvZyIsInRhZ2dlZExpbmVzIiwiZmlsdGVyIiwibGluZSIsInRhZ3MiLCJpbmRleE9mIiwiZGl2IiwiaDEiLCJwIiwiam9pbiIsIm1hcCIsImlkeCIsImJ1dHRvbiIsImlkIiwibmFtZSIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJvbGQiLCJNYXRoIiwiZmxvb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Components/TagList.tsx\n"));

/***/ })

});