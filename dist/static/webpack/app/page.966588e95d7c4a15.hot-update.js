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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TagList: function() { return /* binding */ TagList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _TagList_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TagList.css */ \"(app-pages-browser)/./components/Components/TagList.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Data_Bank__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Data/Bank */ \"(app-pages-browser)/./components/Data/Bank.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction TagList(param) {\n    let { account, onTagSelect } = param;\n    _s();\n    const [tagsWithCount, setTagsWithCount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [subTagsWithCount, setSubTagsWithCount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [selectedTag, setSelectedTag] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [breadCrumbs, setBreadCrumbs] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        \"Tous\"\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const listWithCount = (0,_Data_Bank__WEBPACK_IMPORTED_MODULE_3__.extractMainTagsWithCount)(account.lines); //extractTagsWithCount(account.lines, undefined)\n        setTagsWithCount([\n            {\n                tag: \"Tous\",\n                count: account.lines.length,\n                frequency: 1\n            },\n            ...listWithCount\n        ]);\n    }, [\n        account\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        console.log(\"selected tag: \" + selectedTag);\n        if (selectedTag === \"\") {\n            setSubTagsWithCount([]);\n        } else {\n            const taggedLines = account.lines.filter((line)=>line.tags.indexOf(selectedTag) !== -1);\n            const listWithCount = (0,_Data_Bank__WEBPACK_IMPORTED_MODULE_3__.extractTagsWithCount)(taggedLines, selectedTag);\n            setSubTagsWithCount(listWithCount);\n        }\n    }, [\n        selectedTag,\n        account\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: breadCrumbs.map((tag, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                id: \"btn-breadcrumb-\" + tag,\n                                name: \"btn-breadcrumb-\" + tag,\n                                className: \"btn-link \",\n                                onClick: ()=>{\n                                    const selectedCrumb = breadCrumbs[idx];\n                                    const mappedTag = selectedCrumb === \"Tous\" ? \"\" : selectedCrumb;\n                                    setSelectedTag(selectedCrumb);\n                                    setBreadCrumbs((old)=>old.slice(0, old.indexOf(selectedCrumb) + 1));\n                                    onTagSelect(mappedTag);\n                                },\n                                children: tag\n                            }, \"btn-breadcrumb-\" + tag, false, {\n                                fileName: \"D:\\\\projet\\\\budget-tracker-nextjs\\\\components\\\\Components\\\\TagList.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 17\n                            }, this),\n                            idx < breadCrumbs.length - 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    \" \",\n                                    \">\",\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\projet\\\\budget-tracker-nextjs\\\\components\\\\Components\\\\TagList.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true))\n            }, void 0, false, {\n                fileName: \"D:\\\\projet\\\\budget-tracker-nextjs\\\\components\\\\Components\\\\TagList.tsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"section-wrapper-border\",\n                children: [\n                    breadCrumbs.length > 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: subTagsWithCount.map((tag, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                id: \"btn-subtag-\" + tag.tag,\n                                name: \"btn-subtag-\" + tag.tag,\n                                className: \"btn-link \",\n                                onClick: ()=>{\n                                    setSelectedTag(subTagsWithCount[idx].tag);\n                                    setBreadCrumbs((old)=>[\n                                            ...old,\n                                            subTagsWithCount[idx].tag\n                                        ]);\n                                    onTagSelect(subTagsWithCount[idx].tag);\n                                },\n                                children: tag.tag + \"(\" + Math.floor(tag.frequency * 100) + \"%)\"\n                            }, \"btn-subtag-\" + tag.tag, false, {\n                                fileName: \"D:\\\\projet\\\\budget-tracker-nextjs\\\\components\\\\Components\\\\TagList.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 21\n                            }, this))\n                    }, void 0, false),\n                    breadCrumbs.length === 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: tagsWithCount.map((tag, idx)=>{\n                            const buttons = [];\n                            if (tag.tag !== \"Tous\") {\n                                const button = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    id: \"btn-\" + tag.tag,\n                                    name: \"btn-\" + tag.tag,\n                                    className: selectedTag === tag.tag || tag.tag === \"Tous\" && selectedTag === \"\" ? \"btn-link-selected \" : \"btn-link \",\n                                    onClick: ()=>{\n                                        setSelectedTag(idx === 0 ? \"\" : tagsWithCount[idx].tag);\n                                        setBreadCrumbs(idx === 0 ? [\n                                            \"Tous\"\n                                        ] : [\n                                            \"Tous\",\n                                            tagsWithCount[idx].tag\n                                        ]);\n                                        onTagSelect(idx === 0 ? \"\" : tagsWithCount[idx].tag);\n                                    },\n                                    children: tag.tag === \"Tous\" ? tag.tag : tag.tag + \"(\" + Math.floor(tag.frequency * 100) + \"%)\"\n                                }, \"btn-\" + tag.tag, false, {\n                                    fileName: \"D:\\\\projet\\\\budget-tracker-nextjs\\\\components\\\\Components\\\\TagList.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 40\n                                }, this);\n                                buttons.push(button);\n                            }\n                            return buttons;\n                        })\n                    }, void 0, false)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\projet\\\\budget-tracker-nextjs\\\\components\\\\Components\\\\TagList.tsx\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\projet\\\\budget-tracker-nextjs\\\\components\\\\Components\\\\TagList.tsx\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, this);\n}\n_s(TagList, \"16mPXQJrqUNW7lE/p8P2AQCEjL4=\");\n_c = TagList;\nvar _c;\n$RefreshReg$(_c, \"TagList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ29tcG9uZW50cy9UYWdMaXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF1QjtBQUNxQjtBQUN1RDtBQU81RixTQUFTSSxRQUFRLEtBR0Y7UUFIRSxFQUNoQkMsT0FBTyxFQUNQQyxXQUFXLEVBQ0csR0FIRTs7SUFLcEIsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR1AsK0NBQVFBLENBQVMsRUFBRTtJQUM3RCxNQUFNLENBQUNRLGtCQUFrQkMsb0JBQW9CLEdBQUdULCtDQUFRQSxDQUFTLEVBQUU7SUFDbkUsTUFBTSxDQUFDVSxhQUFhQyxlQUFlLEdBQUdYLCtDQUFRQSxDQUFTO0lBQ3ZELE1BQU0sQ0FBQ1ksYUFBYUMsZUFBZSxHQUFHYiwrQ0FBUUEsQ0FBVztRQUFDO0tBQU87SUFFakVELGdEQUFTQSxDQUFDO1FBQ04sTUFBTWUsZ0JBQWdCYixvRUFBd0JBLENBQUNHLFFBQVFXLEtBQUssR0FBRyxnREFBZ0Q7UUFDL0dSLGlCQUFpQjtZQUFDO2dCQUFDUyxLQUFLO2dCQUFRQyxPQUFPYixRQUFRVyxLQUFLLENBQUNHLE1BQU07Z0JBQUVDLFdBQVc7WUFBQztlQUFNTDtTQUFjO0lBQ2pHLEdBQUc7UUFBQ1Y7S0FBUTtJQUVaTCxnREFBU0EsQ0FBQztRQUNOcUIsUUFBUUMsR0FBRyxDQUFDLG1CQUFtQlg7UUFDL0IsSUFBSUEsZ0JBQWdCLElBQUk7WUFDcEJELG9CQUFvQixFQUFFO1FBQzFCLE9BQ0s7WUFDRCxNQUFNYSxjQUFjbEIsUUFBUVcsS0FBSyxDQUFDUSxNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0MsSUFBSSxDQUFDQyxPQUFPLENBQUNoQixpQkFBaUIsQ0FBQztZQUN2RixNQUFNSSxnQkFBZ0JaLGdFQUFvQkEsQ0FBQ29CLGFBQWFaO1lBQ3hERCxvQkFBb0JLO1FBQ3hCO0lBQ0osR0FBRztRQUFDSjtRQUFhTjtLQUFRO0lBR3pCLHFCQUNJLDhEQUFDdUI7OzBCQUNHLDhEQUFDQzswQkFDQWhCLFlBQVlpQixHQUFHLENBQUMsQ0FBQ2IsS0FBS2Msb0JBQ25COzswQ0FDQSw4REFBQ0M7Z0NBQXFDQyxJQUFJLG9CQUFvQmhCO2dDQUFLaUIsTUFBTSxvQkFBb0JqQjtnQ0FBS2tCLFdBQVc7Z0NBQ3pHQyxTQUFTO29DQUNMLE1BQU1DLGdCQUFnQnhCLFdBQVcsQ0FBQ2tCLElBQUk7b0NBQ3RDLE1BQU1PLFlBQVlELGtCQUFrQixTQUFTLEtBQUtBO29DQUNsRHpCLGVBQWV5QjtvQ0FDZnZCLGVBQWUsQ0FBQ3lCLE1BQVFBLElBQUlDLEtBQUssQ0FBQyxHQUFHRCxJQUFJWixPQUFPLENBQUNVLGlCQUFpQjtvQ0FDbEUvQixZQUFZZ0M7Z0NBQ2hCOzBDQUNDckI7K0JBUlEsb0JBQW9CQTs7Ozs7NEJBVWhDYyxNQUFPbEIsWUFBWU0sTUFBTSxHQUFHLG1CQUN6Qiw4REFBQ3NCOztvQ0FBSztvQ0FBRTtvQ0FBSTs7Ozs7Ozs7Ozs7Ozs7MEJBTXBCLDhEQUFDYjtnQkFBSU8sV0FBVTs7b0JBQ2R0QixZQUFZTSxNQUFNLEdBQUcsbUJBQ2xCO2tDQUNDVixpQkFBaUJxQixHQUFHLENBQUMsQ0FBQ2IsS0FBS2Msb0JBQ3hCLDhEQUFDQztnQ0FBcUNDLElBQUksZ0JBQWdCaEIsSUFBSUEsR0FBRztnQ0FBRWlCLE1BQU0sZ0JBQWdCakIsSUFBSUEsR0FBRztnQ0FBRWtCLFdBQVc7Z0NBQ3pHQyxTQUFTO29DQUFPeEIsZUFBZUgsZ0JBQWdCLENBQUNzQixJQUFJLENBQUNkLEdBQUc7b0NBQUdILGVBQWUsQ0FBQ3lCLE1BQVE7K0NBQUlBOzRDQUFLOUIsZ0JBQWdCLENBQUNzQixJQUFJLENBQUNkLEdBQUc7eUNBQUM7b0NBQUdYLFlBQVlHLGdCQUFnQixDQUFDc0IsSUFBSSxDQUFDZCxHQUFHO2dDQUFFOzBDQUMvSkEsSUFBSUEsR0FBRyxHQUFHLE1BQU15QixLQUFLQyxLQUFLLENBQUMxQixJQUFJRyxTQUFTLEdBQUcsT0FBTzsrQkFGMUMsZ0JBQWdCSCxJQUFJQSxHQUFHOzs7Ozs7b0JBUTNDSixZQUFZTSxNQUFNLEtBQUssbUJBQ3BCO2tDQUNDWixjQUFjdUIsR0FBRyxDQUFDLENBQUNiLEtBQUtjOzRCQUNyQixNQUFNYSxVQUF5QixFQUFFOzRCQUNqQyxJQUFJM0IsSUFBSUEsR0FBRyxLQUFLLFFBQVE7Z0NBQ3BCLE1BQU1lLHVCQUFTLDhEQUFDQTtvQ0FBOEJDLElBQUksU0FBU2hCLElBQUlBLEdBQUc7b0NBQUVpQixNQUFNLFNBQVNqQixJQUFJQSxHQUFHO29DQUFFa0IsV0FBVyxnQkFBaUJsQixJQUFJQSxHQUFHLElBQUtBLElBQUlBLEdBQUcsS0FBSyxVQUFVTixnQkFBZ0IsS0FBTyx1QkFBdUI7b0NBQ3BNeUIsU0FBUzt3Q0FBT3hCLGVBQWVtQixRQUFRLElBQUksS0FBS3hCLGFBQWEsQ0FBQ3dCLElBQUksQ0FBQ2QsR0FBRzt3Q0FBR0gsZUFBZWlCLFFBQVEsSUFBSTs0Q0FBQzt5Q0FBTyxHQUFHOzRDQUFDOzRDQUFReEIsYUFBYSxDQUFDd0IsSUFBSSxDQUFDZCxHQUFHO3lDQUFDO3dDQUFHWCxZQUFZeUIsUUFBUSxJQUFJLEtBQUt4QixhQUFhLENBQUN3QixJQUFJLENBQUNkLEdBQUc7b0NBQUU7OENBQ3RNQSxJQUFJQSxHQUFHLEtBQUssU0FBU0EsSUFBSUEsR0FBRyxHQUFHQSxJQUFJQSxHQUFHLEdBQUcsTUFBTXlCLEtBQUtDLEtBQUssQ0FBQzFCLElBQUlHLFNBQVMsR0FBRyxPQUFPO21DQUYxRCxTQUFTSCxJQUFJQSxHQUFHOzs7OztnQ0FJNUMyQixRQUFRQyxJQUFJLENBQUNiOzRCQUNqQjs0QkFDQSxPQUFPWTt3QkFDWDs7Ozs7Ozs7Ozs7Ozs7QUFNaEI7R0FoRmdCeEM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21wb25lbnRzL1RhZ0xpc3QudHN4P2JlNGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL1RhZ0xpc3QuY3NzJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJQWNjb3VudExpbmVzLCBJVGFnLCBleHRyYWN0TWFpblRhZ3NXaXRoQ291bnQsIGV4dHJhY3RUYWdzV2l0aENvdW50IH0gZnJvbSBcIi4uL0RhdGEvQmFua1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJbnB1dFJhbmdlUHJvcHMge1xyXG4gICAgYWNjb3VudDogSUFjY291bnRMaW5lcztcclxuICAgIG9uVGFnU2VsZWN0OiAodGFnOiBzdHJpbmcpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUYWdMaXN0KHtcclxuICAgICAgICBhY2NvdW50LFxyXG4gICAgICAgIG9uVGFnU2VsZWN0LFxyXG4gICAgfTogSW5wdXRSYW5nZVByb3BzKSB7XHJcblxyXG4gICAgY29uc3QgW3RhZ3NXaXRoQ291bnQsIHNldFRhZ3NXaXRoQ291bnRdID0gdXNlU3RhdGU8SVRhZ1tdPihbXSlcclxuICAgIGNvbnN0IFtzdWJUYWdzV2l0aENvdW50LCBzZXRTdWJUYWdzV2l0aENvdW50XSA9IHVzZVN0YXRlPElUYWdbXT4oW10pXHJcbiAgICBjb25zdCBbc2VsZWN0ZWRUYWcsIHNldFNlbGVjdGVkVGFnXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcbiAgICBjb25zdCBbYnJlYWRDcnVtYnMsIHNldEJyZWFkQ3J1bWJzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXCJUb3VzXCJdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxpc3RXaXRoQ291bnQgPSBleHRyYWN0TWFpblRhZ3NXaXRoQ291bnQoYWNjb3VudC5saW5lcyk7IC8vZXh0cmFjdFRhZ3NXaXRoQ291bnQoYWNjb3VudC5saW5lcywgdW5kZWZpbmVkKVxyXG4gICAgICAgIHNldFRhZ3NXaXRoQ291bnQoW3t0YWc6IFwiVG91c1wiLCBjb3VudDogYWNjb3VudC5saW5lcy5sZW5ndGgsIGZyZXF1ZW5jeTogMX0sIC4uLmxpc3RXaXRoQ291bnRdKTtcclxuICAgIH0sIFthY2NvdW50XSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2VsZWN0ZWQgdGFnOiBcIiArIHNlbGVjdGVkVGFnKTtcclxuICAgICAgICBpZiAoc2VsZWN0ZWRUYWcgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgc2V0U3ViVGFnc1dpdGhDb3VudChbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCB0YWdnZWRMaW5lcyA9IGFjY291bnQubGluZXMuZmlsdGVyKChsaW5lKSA9PiBsaW5lLnRhZ3MuaW5kZXhPZihzZWxlY3RlZFRhZykgIT09IC0xKTtcclxuICAgICAgICAgICAgY29uc3QgbGlzdFdpdGhDb3VudCA9IGV4dHJhY3RUYWdzV2l0aENvdW50KHRhZ2dlZExpbmVzLCBzZWxlY3RlZFRhZylcclxuICAgICAgICAgICAgc2V0U3ViVGFnc1dpdGhDb3VudChsaXN0V2l0aENvdW50KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbc2VsZWN0ZWRUYWcsIGFjY291bnRdKVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAge2JyZWFkQ3J1bWJzLm1hcCgodGFnLCBpZHgpID0+IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT17XCJidG4tYnJlYWRjcnVtYi1cIiArIHRhZ30gaWQ9e1wiYnRuLWJyZWFkY3J1bWItXCIgKyB0YWd9IG5hbWU9e1wiYnRuLWJyZWFkY3J1bWItXCIgKyB0YWd9IGNsYXNzTmFtZT17XCJidG4tbGluayBcIn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkQ3J1bWIgPSBicmVhZENydW1ic1tpZHhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXBwZWRUYWcgPSBzZWxlY3RlZENydW1iID09PSBcIlRvdXNcIiA/IFwiXCIgOiBzZWxlY3RlZENydW1iO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZFRhZyhzZWxlY3RlZENydW1iKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QnJlYWRDcnVtYnMoKG9sZCkgPT4gb2xkLnNsaWNlKDAsIG9sZC5pbmRleE9mKHNlbGVjdGVkQ3J1bWIpICsgMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblRhZ1NlbGVjdChtYXBwZWRUYWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0YWd9XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIHtpZHggPCAoYnJlYWRDcnVtYnMubGVuZ3RoIC0gMSkgJiZcclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ge1wiPlwifSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvaDM+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VjdGlvbi13cmFwcGVyLWJvcmRlcic+XHJcbiAgICAgICAgICAgIHticmVhZENydW1icy5sZW5ndGggPiAxICYmXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAge3N1YlRhZ3NXaXRoQ291bnQubWFwKCh0YWcsIGlkeCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PXtcImJ0bi1zdWJ0YWctXCIgKyB0YWcudGFnfSBpZD17XCJidG4tc3VidGFnLVwiICsgdGFnLnRhZ30gbmFtZT17XCJidG4tc3VidGFnLVwiICsgdGFnLnRhZ30gY2xhc3NOYW1lPXtcImJ0bi1saW5rIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c2V0U2VsZWN0ZWRUYWcoc3ViVGFnc1dpdGhDb3VudFtpZHhdLnRhZyk7IHNldEJyZWFkQ3J1bWJzKChvbGQpID0+IFsuLi5vbGQsIHN1YlRhZ3NXaXRoQ291bnRbaWR4XS50YWddKTsgb25UYWdTZWxlY3Qoc3ViVGFnc1dpdGhDb3VudFtpZHhdLnRhZyk7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0YWcudGFnICsgXCIoXCIgKyBNYXRoLmZsb29yKHRhZy5mcmVxdWVuY3kgKiAxMDApICsgXCIlKVwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAge2JyZWFkQ3J1bWJzLmxlbmd0aCA9PT0gMSAmJlxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIHt0YWdzV2l0aENvdW50Lm1hcCgodGFnLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBidXR0b25zOiBKU1guRWxlbWVudFtdID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhZy50YWcgIT09IFwiVG91c1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IDxidXR0b24ga2V5PXtcImJ0bi1cIiArIHRhZy50YWd9IGlkPXtcImJ0bi1cIiArIHRhZy50YWd9IG5hbWU9e1wiYnRuLVwiICsgdGFnLnRhZ30gY2xhc3NOYW1lPXsoc2VsZWN0ZWRUYWcgPT09IHRhZy50YWcgfHwgKHRhZy50YWcgPT09IFwiVG91c1wiICYmIHNlbGVjdGVkVGFnID09PSBcIlwiKSkgPyBcImJ0bi1saW5rLXNlbGVjdGVkIFwiIDogXCJidG4tbGluayBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzZXRTZWxlY3RlZFRhZyhpZHggPT09IDAgPyBcIlwiIDogdGFnc1dpdGhDb3VudFtpZHhdLnRhZyk7IHNldEJyZWFkQ3J1bWJzKGlkeCA9PT0gMCA/IFtcIlRvdXNcIl0gOiBbXCJUb3VzXCIsIHRhZ3NXaXRoQ291bnRbaWR4XS50YWddKTsgb25UYWdTZWxlY3QoaWR4ID09PSAwID8gXCJcIiA6IHRhZ3NXaXRoQ291bnRbaWR4XS50YWcpO319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZy50YWcgPT09IFwiVG91c1wiID8gdGFnLnRhZyA6IHRhZy50YWcgKyBcIihcIiArIE1hdGguZmxvb3IodGFnLmZyZXF1ZW5jeSAqIDEwMCkgKyBcIiUpXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zLnB1c2goYnV0dG9uKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbnM7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZXh0cmFjdE1haW5UYWdzV2l0aENvdW50IiwiZXh0cmFjdFRhZ3NXaXRoQ291bnQiLCJUYWdMaXN0IiwiYWNjb3VudCIsIm9uVGFnU2VsZWN0IiwidGFnc1dpdGhDb3VudCIsInNldFRhZ3NXaXRoQ291bnQiLCJzdWJUYWdzV2l0aENvdW50Iiwic2V0U3ViVGFnc1dpdGhDb3VudCIsInNlbGVjdGVkVGFnIiwic2V0U2VsZWN0ZWRUYWciLCJicmVhZENydW1icyIsInNldEJyZWFkQ3J1bWJzIiwibGlzdFdpdGhDb3VudCIsImxpbmVzIiwidGFnIiwiY291bnQiLCJsZW5ndGgiLCJmcmVxdWVuY3kiLCJjb25zb2xlIiwibG9nIiwidGFnZ2VkTGluZXMiLCJmaWx0ZXIiLCJsaW5lIiwidGFncyIsImluZGV4T2YiLCJkaXYiLCJoMyIsIm1hcCIsImlkeCIsImJ1dHRvbiIsImlkIiwibmFtZSIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJzZWxlY3RlZENydW1iIiwibWFwcGVkVGFnIiwib2xkIiwic2xpY2UiLCJzcGFuIiwiTWF0aCIsImZsb29yIiwiYnV0dG9ucyIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Components/TagList.tsx\n"));

/***/ })

});