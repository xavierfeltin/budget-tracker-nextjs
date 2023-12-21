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

/***/ "(app-pages-browser)/./components/Charts/TagByMonthChart.tsx":
/*!***********************************************!*\
  !*** ./components/Charts/TagByMonthChart.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TagByMonthChart: function() { return /* binding */ TagByMonthChart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _TagByMonthChart_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TagByMonthChart.css */ \"(app-pages-browser)/./components/Charts/TagByMonthChart.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Data_Bank__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Data/Bank */ \"(app-pages-browser)/./components/Data/Bank.ts\");\n/* harmony import */ var _TagMonthBarChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TagMonthBarChart */ \"(app-pages-browser)/./components/Charts/TagMonthBarChart.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction TagByMonthChart(param) {\n    let { accountLines, tag } = param;\n    _s();\n    const [periodData, setPeriodData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const taggedLines = tag === \"\" ? accountLines : accountLines.filter((line)=>line.tags.indexOf(tag) !== -1);\n        //const groupByTag = aggregateByTags(taggedLines, -1, tag);\n        const groupByTag = (0,_Data_Bank__WEBPACK_IMPORTED_MODULE_3__.aggregateByTags)(taggedLines, 0, tag);\n        const tags = Object.keys(groupByTag).sort();\n        const groupByDate = (0,_Data_Bank__WEBPACK_IMPORTED_MODULE_3__.aggregateByDate)(taggedLines, true);\n        const dateLabels = Object.keys(groupByDate).sort((a, b)=>{\n            let dA = new Date(2023, parseInt(a.split(\"/\")[1]) - 1, parseInt(a.split(\"/\")[0]));\n            let dB = new Date(2023, parseInt(b.split(\"/\")[1]) - 1, parseInt(b.split(\"/\")[0]));\n            return dA > dB ? 1 : -1;\n        });\n        // Datasets to cover the sub tags\n        const processedTags = [];\n        const dataByTag = [];\n        const tagPosition = tag === \"\" ? 0 : -1;\n        for(let i = 0; i < tags.length; i++){\n            let subTaggedLines = [];\n            if (tag === \"\") {\n                // Search only the first level of tags\n                subTaggedLines = taggedLines.filter((line)=>line.tags.indexOf(tags[i]) === 0);\n            } else {\n                // Search any lines containing the tag\n                subTaggedLines = taggedLines.filter((line)=>line.tags.indexOf(tags[i]) !== -1 && !line.tags.some((t)=>processedTags.includes(t)));\n            }\n            const groupSubTagByDate = (0,_Data_Bank__WEBPACK_IMPORTED_MODULE_3__.aggregateByDate)(subTaggedLines, true);\n            let historyDebit = Object.keys(groupByDate).sort((a, b)=>{\n                let dA = new Date(2023, parseInt(a.split(\"/\")[1]) - 1, parseInt(a.split(\"/\")[0]));\n                let dB = new Date(2023, parseInt(b.split(\"/\")[1]) - 1, parseInt(b.split(\"/\")[0]));\n                return dA > dB ? 1 : -1;\n            }).map((date)=>groupSubTagByDate[date] ? groupSubTagByDate[date].debit : 0);\n            dataByTag.push({\n                tag: tags[i],\n                data: historyDebit\n            });\n            processedTags.push(tags[i]);\n        }\n        const dataByPeriod = [];\n        for(let i = dateLabels.length - 1; i >= 0; i--){\n            dataByPeriod.push({\n                period: dateLabels[i],\n                data: dataByTag.filter((d)=>d.data[i] > 0).map((d)=>d.data[i]),\n                labels: dataByTag.filter((d)=>d.data[i] > 0).map((d)=>d.tag)\n            });\n        }\n        setPeriodData(dataByPeriod);\n    }, [\n        accountLines,\n        tag\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: periodData.map((p, idx)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TagMonthBarChart__WEBPACK_IMPORTED_MODULE_4__.TagMonthBarChart, {\n                tag: tag,\n                period: p.period,\n                labels: p.labels,\n                data: p.data\n            }, \"tagmonthbarchart-\" + idx, false, {\n                fileName: \"D:\\\\projet\\\\budget-tracker-nextjs\\\\components\\\\Charts\\\\TagByMonthChart.tsx\",\n                lineNumber: 86,\n                columnNumber: 21\n            }, this);\n        })\n    }, void 0, false);\n}\n_s(TagByMonthChart, \"ojt9TBLB1oqCQnJemnnIfT/A8W0=\");\n_c = TagByMonthChart;\nvar _c;\n$RefreshReg$(_c, \"TagByMonthChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ2hhcnRzL1RhZ0J5TW9udGhDaGFydC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQStCO0FBRWE7QUFDa0M7QUFDeEI7QUFhL0MsU0FBU0ssZ0JBQWdCLEtBR1Y7UUFIVSxFQUM1QkMsWUFBWSxFQUNaQyxHQUFHLEVBQ2UsR0FIVTs7SUFLNUIsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdSLCtDQUFRQSxDQUFnQixFQUFFO0lBRTlERCxnREFBU0EsQ0FBQztRQUNOLE1BQU1VLGNBQWNILFFBQVEsS0FBS0QsZUFBZUEsYUFBYUssTUFBTSxDQUFDLENBQUNDLE9BQVNBLEtBQUtDLElBQUksQ0FBQ0MsT0FBTyxDQUFDUCxTQUFTLENBQUM7UUFDMUcsMkRBQTJEO1FBQzNELE1BQU1RLGFBQWFaLDJEQUFlQSxDQUFDTyxhQUFhLEdBQUdIO1FBQ25ELE1BQU1NLE9BQU9HLE9BQU9DLElBQUksQ0FBQ0YsWUFBWUcsSUFBSTtRQUV6QyxNQUFNQyxjQUFjakIsMkRBQWVBLENBQUNRLGFBQWE7UUFDakQsTUFBTVUsYUFBY0osT0FBT0MsSUFBSSxDQUFDRSxhQUFhRCxJQUFJLENBQUMsQ0FBQ0csR0FBR0M7WUFDbEQsSUFBSUMsS0FBSyxJQUFJQyxLQUFLLE1BQU1DLFNBQVNKLEVBQUVLLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEdBQUdELFNBQVNKLEVBQUVLLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMvRSxJQUFJQyxLQUFLLElBQUlILEtBQUssTUFBTUMsU0FBU0gsRUFBRUksS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksR0FBR0QsU0FBU0gsRUFBRUksS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQy9FLE9BQU9ILEtBQUtJLEtBQUssSUFBSSxDQUFDO1FBQzFCO1FBRUEsaUNBQWlDO1FBQ2pDLE1BQU1DLGdCQUEwQixFQUFFO1FBQ2xDLE1BQU1DLFlBQTZDLEVBQUU7UUFDckQsTUFBTUMsY0FBY3ZCLFFBQVEsS0FBSyxJQUFJLENBQUM7UUFDdEMsSUFBSyxJQUFJd0IsSUFBSSxHQUFHQSxJQUFJbEIsS0FBS21CLE1BQU0sRUFBRUQsSUFBSztZQUNsQyxJQUFJRSxpQkFBaUMsRUFBRTtZQUN2QyxJQUFJMUIsUUFBUSxJQUFJO2dCQUNaLHNDQUFzQztnQkFDdEMwQixpQkFBaUJ2QixZQUFZQyxNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0MsSUFBSSxDQUFDQyxPQUFPLENBQUNELElBQUksQ0FBQ2tCLEVBQUUsTUFBTTtZQUNqRixPQUNLO2dCQUNELHNDQUFzQztnQkFDdENFLGlCQUFpQnZCLFlBQVlDLE1BQU0sQ0FBQyxDQUFDQyxPQUFTQSxLQUFLQyxJQUFJLENBQUNDLE9BQU8sQ0FBQ0QsSUFBSSxDQUFDa0IsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDbkIsS0FBS0MsSUFBSSxDQUFDcUIsSUFBSSxDQUFDQyxDQUFBQSxJQUFLUCxjQUFjUSxRQUFRLENBQUNEO1lBQ25JO1lBQ0EsTUFBTUUsb0JBQW9CbkMsMkRBQWVBLENBQUMrQixnQkFBZ0I7WUFFMUQsSUFBSUssZUFBZXRCLE9BQU9DLElBQUksQ0FBQ0UsYUFBYUQsSUFBSSxDQUFDLENBQUNHLEdBQUdDO2dCQUNqRCxJQUFJQyxLQUFLLElBQUlDLEtBQUssTUFBTUMsU0FBU0osRUFBRUssS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksR0FBR0QsU0FBU0osRUFBRUssS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUMvRSxJQUFJQyxLQUFLLElBQUlILEtBQUssTUFBTUMsU0FBU0gsRUFBRUksS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksR0FBR0QsU0FBU0gsRUFBRUksS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUMvRSxPQUFPSCxLQUFLSSxLQUFLLElBQUksQ0FBQztZQUMxQixHQUFHWSxHQUFHLENBQUMsQ0FBQ0MsT0FBU0gsaUJBQWlCLENBQUNHLEtBQUssR0FBR0gsaUJBQWlCLENBQUNHLEtBQUssQ0FBQ0MsS0FBSyxHQUFHO1lBRTNFWixVQUFVYSxJQUFJLENBQUM7Z0JBQ1huQyxLQUFLTSxJQUFJLENBQUNrQixFQUFFO2dCQUNaWSxNQUFNTDtZQUNWO1lBRUFWLGNBQWNjLElBQUksQ0FBQzdCLElBQUksQ0FBQ2tCLEVBQUU7UUFDOUI7UUFFQSxNQUFNYSxlQUE4QixFQUFFO1FBQ3RDLElBQUssSUFBSWIsSUFBSVgsV0FBV1ksTUFBTSxHQUFHLEdBQUdELEtBQUssR0FBR0EsSUFBSztZQUM3Q2EsYUFBYUYsSUFBSSxDQUFDO2dCQUNkRyxRQUFRekIsVUFBVSxDQUFDVyxFQUFFO2dCQUNyQlksTUFBTWQsVUFBVWxCLE1BQU0sQ0FBQyxDQUFDbUMsSUFBTUEsRUFBRUgsSUFBSSxDQUFDWixFQUFFLEdBQUcsR0FBR1EsR0FBRyxDQUFDLENBQUNPLElBQU1BLEVBQUVILElBQUksQ0FBQ1osRUFBRTtnQkFDakVnQixRQUFRbEIsVUFBVWxCLE1BQU0sQ0FBQyxDQUFDbUMsSUFBTUEsRUFBRUgsSUFBSSxDQUFDWixFQUFFLEdBQUcsR0FBR1EsR0FBRyxDQUFDLENBQUNPLElBQU1BLEVBQUV2QyxHQUFHO1lBQ25FO1FBQ0o7UUFDQUUsY0FBY21DO0lBRW5CLEdBQUc7UUFBQ3RDO1FBQWNDO0tBQUk7SUFFckIscUJBQ0k7a0JBR0lDLFdBQVcrQixHQUFHLENBQUMsQ0FBQ1MsR0FBR0M7WUFDZixxQkFDSSw4REFBQzdDLCtEQUFnQkE7Z0JBQWlDRyxLQUFLQTtnQkFBS3NDLFFBQVFHLEVBQUVILE1BQU07Z0JBQUVFLFFBQVFDLEVBQUVELE1BQU07Z0JBQUVKLE1BQU1LLEVBQUVMLElBQUk7ZUFBckYsc0JBQXNCTTs7Ozs7UUFFckQ7O0FBSVo7R0ExRWdCNUM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGFydHMvVGFnQnlNb250aENoYXJ0LnRzeD83MjRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9UYWdCeU1vbnRoQ2hhcnQuY3NzJztcclxuXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSUFjY291bnRMaW5lLCBhZ2dyZWdhdGVCeURhdGUsIGFnZ3JlZ2F0ZUJ5VGFncyB9IGZyb20gXCIuLi9EYXRhL0JhbmtcIjtcclxuaW1wb3J0IHsgVGFnTW9udGhCYXJDaGFydCB9IGZyb20gXCIuL1RhZ01vbnRoQmFyQ2hhcnRcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW5wdXRSYW5nZVByb3BzIHtcclxuICAgIGFjY291bnRMaW5lczogSUFjY291bnRMaW5lW107XHJcbiAgICB0YWc6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIElQZXJpb2REYXRhIHtcclxuICAgIHBlcmlvZDogc3RyaW5nO1xyXG4gICAgbGFiZWxzOiBzdHJpbmdbXTtcclxuICAgIGRhdGE6IG51bWJlcltdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVGFnQnlNb250aENoYXJ0KHtcclxuICAgIGFjY291bnRMaW5lcyxcclxuICAgIHRhZyxcclxuICAgIH06IElucHV0UmFuZ2VQcm9wcyk6IEpTWC5FbGVtZW50IHtcclxuXHJcbiAgICBjb25zdCBbcGVyaW9kRGF0YSwgc2V0UGVyaW9kRGF0YV0gPSB1c2VTdGF0ZTxJUGVyaW9kRGF0YVtdPihbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCB0YWdnZWRMaW5lcyA9IHRhZyA9PT0gXCJcIiA/IGFjY291bnRMaW5lcyA6IGFjY291bnRMaW5lcy5maWx0ZXIoKGxpbmUpID0+IGxpbmUudGFncy5pbmRleE9mKHRhZykgIT09IC0xKTtcclxuICAgICAgICAvL2NvbnN0IGdyb3VwQnlUYWcgPSBhZ2dyZWdhdGVCeVRhZ3ModGFnZ2VkTGluZXMsIC0xLCB0YWcpO1xyXG4gICAgICAgIGNvbnN0IGdyb3VwQnlUYWcgPSBhZ2dyZWdhdGVCeVRhZ3ModGFnZ2VkTGluZXMsIDAsIHRhZyk7XHJcbiAgICAgICAgY29uc3QgdGFncyA9IE9iamVjdC5rZXlzKGdyb3VwQnlUYWcpLnNvcnQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgZ3JvdXBCeURhdGUgPSBhZ2dyZWdhdGVCeURhdGUodGFnZ2VkTGluZXMsIHRydWUpO1xyXG4gICAgICAgIGNvbnN0IGRhdGVMYWJlbHMgPSAgT2JqZWN0LmtleXMoZ3JvdXBCeURhdGUpLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgbGV0IGRBID0gbmV3IERhdGUoMjAyMywgcGFyc2VJbnQoYS5zcGxpdChcIi9cIilbMV0pIC0gMSwgcGFyc2VJbnQoYS5zcGxpdChcIi9cIilbMF0pKTtcclxuICAgICAgICAgICAgbGV0IGRCID0gbmV3IERhdGUoMjAyMywgcGFyc2VJbnQoYi5zcGxpdChcIi9cIilbMV0pIC0gMSwgcGFyc2VJbnQoYi5zcGxpdChcIi9cIilbMF0pKTtcclxuICAgICAgICAgICAgcmV0dXJuIGRBID4gZEIgPyAxIDogLTE7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIERhdGFzZXRzIHRvIGNvdmVyIHRoZSBzdWIgdGFnc1xyXG4gICAgICAgIGNvbnN0IHByb2Nlc3NlZFRhZ3M6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgY29uc3QgZGF0YUJ5VGFnOiB7dGFnOiBzdHJpbmcsIGRhdGE6IG51bWJlcltdfVtdID0gW11cclxuICAgICAgICBjb25zdCB0YWdQb3NpdGlvbiA9IHRhZyA9PT0gXCJcIiA/IDAgOiAtMTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHN1YlRhZ2dlZExpbmVzOiBJQWNjb3VudExpbmVbXSA9IFtdO1xyXG4gICAgICAgICAgICBpZiAodGFnID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTZWFyY2ggb25seSB0aGUgZmlyc3QgbGV2ZWwgb2YgdGFnc1xyXG4gICAgICAgICAgICAgICAgc3ViVGFnZ2VkTGluZXMgPSB0YWdnZWRMaW5lcy5maWx0ZXIoKGxpbmUpID0+IGxpbmUudGFncy5pbmRleE9mKHRhZ3NbaV0pID09PSAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIFNlYXJjaCBhbnkgbGluZXMgY29udGFpbmluZyB0aGUgdGFnXHJcbiAgICAgICAgICAgICAgICBzdWJUYWdnZWRMaW5lcyA9IHRhZ2dlZExpbmVzLmZpbHRlcigobGluZSkgPT4gbGluZS50YWdzLmluZGV4T2YodGFnc1tpXSkgIT09IC0xICYmICFsaW5lLnRhZ3Muc29tZSh0ID0+IHByb2Nlc3NlZFRhZ3MuaW5jbHVkZXModCkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBncm91cFN1YlRhZ0J5RGF0ZSA9IGFnZ3JlZ2F0ZUJ5RGF0ZShzdWJUYWdnZWRMaW5lcywgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgaGlzdG9yeURlYml0ID0gT2JqZWN0LmtleXMoZ3JvdXBCeURhdGUpLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBkQSA9IG5ldyBEYXRlKDIwMjMsIHBhcnNlSW50KGEuc3BsaXQoXCIvXCIpWzFdKSAtIDEsIHBhcnNlSW50KGEuc3BsaXQoXCIvXCIpWzBdKSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZEIgPSBuZXcgRGF0ZSgyMDIzLCBwYXJzZUludChiLnNwbGl0KFwiL1wiKVsxXSkgLSAxLCBwYXJzZUludChiLnNwbGl0KFwiL1wiKVswXSkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRBID4gZEIgPyAxIDogLTE7XHJcbiAgICAgICAgICAgIH0pLm1hcCgoZGF0ZSkgPT4gZ3JvdXBTdWJUYWdCeURhdGVbZGF0ZV0gPyBncm91cFN1YlRhZ0J5RGF0ZVtkYXRlXS5kZWJpdCA6IDApO1xyXG5cclxuICAgICAgICAgICAgZGF0YUJ5VGFnLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdGFnOiB0YWdzW2ldLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogaGlzdG9yeURlYml0XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcHJvY2Vzc2VkVGFncy5wdXNoKHRhZ3NbaV0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZGF0YUJ5UGVyaW9kOiBJUGVyaW9kRGF0YVtdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IGRhdGVMYWJlbHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgZGF0YUJ5UGVyaW9kLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgcGVyaW9kOiBkYXRlTGFiZWxzW2ldLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YUJ5VGFnLmZpbHRlcigoZCkgPT4gZC5kYXRhW2ldID4gMCkubWFwKChkKSA9PiBkLmRhdGFbaV0pLFxyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiBkYXRhQnlUYWcuZmlsdGVyKChkKSA9PiBkLmRhdGFbaV0gPiAwKS5tYXAoKGQpID0+IGQudGFnKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0UGVyaW9kRGF0YShkYXRhQnlQZXJpb2QpO1xyXG5cclxuICAgfSwgW2FjY291bnRMaW5lcywgdGFnXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBlcmlvZERhdGEubWFwKChwLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFRhZ01vbnRoQmFyQ2hhcnQga2V5PXtcInRhZ21vbnRoYmFyY2hhcnQtXCIgKyBpZHh9IHRhZz17dGFnfSBwZXJpb2Q9e3AucGVyaW9kfSBsYWJlbHM9e3AubGFiZWxzfSBkYXRhPXtwLmRhdGF9Lz5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcbiAgIClcclxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImFnZ3JlZ2F0ZUJ5RGF0ZSIsImFnZ3JlZ2F0ZUJ5VGFncyIsIlRhZ01vbnRoQmFyQ2hhcnQiLCJUYWdCeU1vbnRoQ2hhcnQiLCJhY2NvdW50TGluZXMiLCJ0YWciLCJwZXJpb2REYXRhIiwic2V0UGVyaW9kRGF0YSIsInRhZ2dlZExpbmVzIiwiZmlsdGVyIiwibGluZSIsInRhZ3MiLCJpbmRleE9mIiwiZ3JvdXBCeVRhZyIsIk9iamVjdCIsImtleXMiLCJzb3J0IiwiZ3JvdXBCeURhdGUiLCJkYXRlTGFiZWxzIiwiYSIsImIiLCJkQSIsIkRhdGUiLCJwYXJzZUludCIsInNwbGl0IiwiZEIiLCJwcm9jZXNzZWRUYWdzIiwiZGF0YUJ5VGFnIiwidGFnUG9zaXRpb24iLCJpIiwibGVuZ3RoIiwic3ViVGFnZ2VkTGluZXMiLCJzb21lIiwidCIsImluY2x1ZGVzIiwiZ3JvdXBTdWJUYWdCeURhdGUiLCJoaXN0b3J5RGViaXQiLCJtYXAiLCJkYXRlIiwiZGViaXQiLCJwdXNoIiwiZGF0YSIsImRhdGFCeVBlcmlvZCIsInBlcmlvZCIsImQiLCJsYWJlbHMiLCJwIiwiaWR4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Charts/TagByMonthChart.tsx\n"));

/***/ })

});