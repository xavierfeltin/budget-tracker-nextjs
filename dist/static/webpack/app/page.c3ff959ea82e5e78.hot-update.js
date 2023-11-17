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

/***/ "(app-pages-browser)/./components/Charts/TagMonthlyHistoryChart.tsx":
/*!******************************************************!*\
  !*** ./components/Charts/TagMonthlyHistoryChart.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TagHistoryMonthlyChart: function() { return /* binding */ TagHistoryMonthlyChart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! chart.js */ \"(app-pages-browser)/./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-chartjs-2 */ \"(app-pages-browser)/./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var _ColorBank__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColorBank */ \"(app-pages-browser)/./components/Charts/ColorBank.ts\");\n/* harmony import */ var _Data_Bank__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Data/Bank */ \"(app-pages-browser)/./components/Data/Bank.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_4__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_4__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_4__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_4__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_4__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_4__.BarElement, chart_js__WEBPACK_IMPORTED_MODULE_4__.Title, chart_js__WEBPACK_IMPORTED_MODULE_4__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_4__.Legend);\nfunction TagHistoryMonthlyChart(param) {\n    let { accountLines, tag } = param;\n    _s();\n    const [chartOption, setChartOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        responsive: true,\n        animation: {},\n        scales: {},\n        plugins: {}\n    });\n    const [chartData, setChartData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        labels: [],\n        datasets: []\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let datasets = [];\n        const taggedLines = tag === \"\" ? accountLines : accountLines.filter((line)=>line.tags.indexOf(tag) !== -1);\n        const groupByTag = (0,_Data_Bank__WEBPACK_IMPORTED_MODULE_3__.aggregateByTags)(taggedLines, -1, tag);\n        const tags = Object.keys(groupByTag);\n        const groupByDate = (0,_Data_Bank__WEBPACK_IMPORTED_MODULE_3__.aggregateByDate)(taggedLines, true);\n        const dateLabels = Object.keys(groupByDate).sort((a, b)=>{\n            let dA = new Date(2023, parseInt(a.split(\"/\")[1]) - 1, parseInt(a.split(\"/\")[0]));\n            let dB = new Date(2023, parseInt(b.split(\"/\")[1]) - 1, parseInt(b.split(\"/\")[0]));\n            return dA > dB ? 1 : -1;\n        });\n        // Dataset to cover the tag\n        let tagHistoryDebit = Object.keys(groupByDate).sort((a, b)=>{\n            let dA = new Date(2023, parseInt(a.split(\"/\")[1]) - 1, parseInt(a.split(\"/\")[0]));\n            let dB = new Date(2023, parseInt(b.split(\"/\")[1]) - 1, parseInt(b.split(\"/\")[0]));\n            return dA > dB ? 1 : -1;\n        }).map((date)=>groupByDate[date] ? groupByDate[date].debit : 0);\n        let dataset = {\n            label: tag || \"Tous\",\n            type: \"line\",\n            yAxisID: \"y\",\n            data: tagHistoryDebit,\n            backgroundColor: _ColorBank__WEBPACK_IMPORTED_MODULE_2__.CHART_COLORS[0]\n        };\n        datasets.push(dataset);\n        // Datasets to cover the sub tags\n        const processedTags = [];\n        for(let i = 0; i < tags.length; i++){\n            const subTaggedLines = taggedLines.filter((line)=>line.tags.indexOf(tags[i]) !== -1 && !line.tags.some((t)=>processedTags.includes(t)));\n            const groupSubTagByDate = (0,_Data_Bank__WEBPACK_IMPORTED_MODULE_3__.aggregateByDate)(subTaggedLines, true);\n            let historyDebit = Object.keys(groupByDate).sort((a, b)=>{\n                let dA = new Date(2023, parseInt(a.split(\"/\")[1]) - 1, parseInt(a.split(\"/\")[0]));\n                let dB = new Date(2023, parseInt(b.split(\"/\")[1]) - 1, parseInt(b.split(\"/\")[0]));\n                return dA > dB ? 1 : -1;\n            }).map((date)=>groupSubTagByDate[date] ? groupSubTagByDate[date].debit : 0);\n            let dataset = {\n                label: tags[i],\n                yAxisID: \"y\",\n                type: \"line\",\n                data: historyDebit,\n                backgroundColor: _ColorBank__WEBPACK_IMPORTED_MODULE_2__.CHART_COLORS[(i + 1) % _ColorBank__WEBPACK_IMPORTED_MODULE_2__.CHART_COLORS.length]\n            };\n            datasets.push(dataset);\n            processedTags.push(tags[i]);\n        }\n        let dataToDisplay = {\n            labels: dateLabels,\n            datasets: datasets\n        };\n        setChartData(dataToDisplay);\n        let options = {\n            responsive: true,\n            maintainAspectRatio: false,\n            animation: {\n                duration: 0\n            },\n            scales: {\n                x: {\n                    beginAtZero: true,\n                    title: {\n                        display: true,\n                        text: \"Date\"\n                    }\n                },\n                y: {\n                    beginAtZero: true,\n                    title: {\n                        display: true,\n                        text: \"Amount\"\n                    }\n                }\n            },\n            plugins: {\n                legend: {\n                    position: \"top\"\n                },\n                title: {\n                    display: true,\n                    text: \"Debit monthly history of \" + (tag || \"Tous\")\n                },\n                datalabels: {\n                    align: \"end\",\n                    anchor: \"end\",\n                    color: \"black\",\n                    display: (context)=>{\n                        const val = context.dataset.data[context.dataIndex];\n                        return val > 0;\n                    },\n                    formatter: (value, context)=>{\n                        return Math.round(value).toString();\n                    },\n                    font: {\n                        weight: \"bold\"\n                    },\n                    padding: 6,\n                    textAlign: \"center\"\n                }\n            }\n        };\n        setChartOption(options);\n    }, [\n        accountLines,\n        tag\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"time-chart-wrapper\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_5__.Bar, {\n            options: chartOption,\n            data: chartData\n        }, void 0, false, {\n            fileName: \"D:\\\\projet\\\\budget-tracker-nextjs\\\\components\\\\Charts\\\\TagMonthlyHistoryChart.tsx\",\n            lineNumber: 179,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\projet\\\\budget-tracker-nextjs\\\\components\\\\Charts\\\\TagMonthlyHistoryChart.tsx\",\n        lineNumber: 178,\n        columnNumber: 9\n    }, this);\n}\n_s(TagHistoryMonthlyChart, \"6CaxhMxXEB4iSHPW/sbEIFO3iIg=\");\n_c = TagHistoryMonthlyChart;\nvar _c;\n$RefreshReg$(_c, \"TagHistoryMonthlyChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ2hhcnRzL1RhZ01vbnRobHlIaXN0b3J5Q2hhcnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFXeEI7QUFDa0I7QUFDSztBQUNtQztBQThCOUVHLDJDQUFPQSxDQUFDYSxRQUFRLENBQ1paLGlEQUFXQSxFQUNYTSxrREFBWUEsRUFDWkQsaURBQVdBLEVBQ1hKLG1EQUFhQSxFQUNiTSxnREFBVUEsRUFDVkosMkNBQUtBLEVBQ0xELDZDQUFPQSxFQUNQRSw0Q0FBTUE7QUFHSCxTQUFTUyx1QkFBdUIsS0FHakI7UUFIaUIsRUFDbkNDLFlBQVksRUFDWkMsR0FBRyxFQUNlLEdBSGlCOztJQUtuQyxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR3BCLCtDQUFRQSxDQUFlO1FBQUNxQixZQUFZO1FBQU1DLFdBQVcsQ0FBQztRQUFHQyxRQUFRLENBQUM7UUFBR0MsU0FBUyxDQUFDO0lBQUM7SUFDdEgsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUcxQiwrQ0FBUUEsQ0FBYTtRQUFDMkIsUUFBUSxFQUFFO1FBQUVDLFVBQVUsRUFBRTtJQUFBO0lBRWhGN0IsZ0RBQVNBLENBQUM7UUFDTixJQUFJNkIsV0FBNEIsRUFBRTtRQUNsQyxNQUFNQyxjQUFjWCxRQUFRLEtBQUtELGVBQWVBLGFBQWFhLE1BQU0sQ0FBQyxDQUFDQyxPQUFTQSxLQUFLQyxJQUFJLENBQUNDLE9BQU8sQ0FBQ2YsU0FBUyxDQUFDO1FBQzFHLE1BQU1nQixhQUFhcEIsMkRBQWVBLENBQUNlLGFBQWEsQ0FBQyxHQUFHWDtRQUNwRCxNQUFNYyxPQUFPRyxPQUFPQyxJQUFJLENBQUNGO1FBRXpCLE1BQU1HLGNBQWN4QiwyREFBZUEsQ0FBQ2dCLGFBQWE7UUFDakQsTUFBTVMsYUFBY0gsT0FBT0MsSUFBSSxDQUFDQyxhQUFhRSxJQUFJLENBQUMsQ0FBQ0MsR0FBR0M7WUFDbEQsSUFBSUMsS0FBSyxJQUFJQyxLQUFLLE1BQU1DLFNB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YWdNb250aGx5SGlzdG9yeUNoYXJ0LnRzeD8yZjYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICAgIENoYXJ0IGFzIENoYXJ0SlMsXHJcbiAgICBMaW5lYXJTY2FsZSxcclxuICAgIENhdGVnb3J5U2NhbGUsXHJcbiAgICBUb29sdGlwLFxyXG4gICAgVGl0bGUsXHJcbiAgICBMZWdlbmQsXHJcbiAgICBMaW5lRWxlbWVudCxcclxuICAgIFBvaW50RWxlbWVudCxcclxuICAgIEJhckVsZW1lbnRcclxuICB9IGZyb20gJ2NoYXJ0LmpzJztcclxuaW1wb3J0IHsgQmFyIH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJztcclxuaW1wb3J0IHsgQ0hBUlRfQ09MT1JTIH0gZnJvbSBcIi4vQ29sb3JCYW5rXCI7XHJcbmltcG9ydCB7IElBY2NvdW50TGluZSwgYWdncmVnYXRlQnlEYXRlLCBhZ2dyZWdhdGVCeVRhZ3MgfSBmcm9tIFwiLi4vRGF0YS9CYW5rXCI7XHJcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiY2hhcnRqcy1wbHVnaW4tZGF0YWxhYmVsc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJbnB1dFJhbmdlUHJvcHMge1xyXG4gICAgYWNjb3VudExpbmVzOiBJQWNjb3VudExpbmVbXTtcclxuICAgIHRhZzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDaGFydERhdGFzZXQge1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxuICAgIHlBeGlzSUQ/OiBzdHJpbmc7XHJcbiAgICBkYXRhOiBudW1iZXJbXTtcclxuICAgIGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xyXG4gICAgZGF0YWxhYmVscz86IGFueTtcclxuICAgIHR5cGU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNoYXJ0RGF0YSB7XHJcbiAgICBsYWJlbHM6IHN0cmluZ1tdO1xyXG4gICAgZGF0YXNldHM6IElDaGFydERhdGFzZXRbXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ2hhcnRPcHRpb24ge1xyXG4gICAgcmVzcG9uc2l2ZTogYm9vbGVhbjtcclxuICAgIG1haW50YWluQXNwZWN0UmF0aW8/OiBib29sZWFuO1xyXG4gICAgc2NhbGVzOiBhbnk7XHJcbiAgICBhbmltYXRpb246IGFueTtcclxuICAgIHBsdWdpbnM6IGFueTtcclxufVxyXG5cclxuQ2hhcnRKUy5yZWdpc3RlcihcclxuICAgIExpbmVhclNjYWxlLFxyXG4gICAgUG9pbnRFbGVtZW50LFxyXG4gICAgTGluZUVsZW1lbnQsXHJcbiAgICBDYXRlZ29yeVNjYWxlLFxyXG4gICAgQmFyRWxlbWVudCxcclxuICAgIFRpdGxlLFxyXG4gICAgVG9vbHRpcCxcclxuICAgIExlZ2VuZFxyXG4pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRhZ0hpc3RvcnlNb250aGx5Q2hhcnQoe1xyXG4gICAgYWNjb3VudExpbmVzLFxyXG4gICAgdGFnLFxyXG4gICAgfTogSW5wdXRSYW5nZVByb3BzKTogSlNYLkVsZW1lbnQge1xyXG5cclxuICAgIGNvbnN0IFtjaGFydE9wdGlvbiwgc2V0Q2hhcnRPcHRpb25dID0gdXNlU3RhdGU8SUNoYXJ0T3B0aW9uPih7cmVzcG9uc2l2ZTogdHJ1ZSwgYW5pbWF0aW9uOiB7fSwgc2NhbGVzOiB7fSwgcGx1Z2luczoge319KTtcclxuICAgIGNvbnN0IFtjaGFydERhdGEsIHNldENoYXJ0RGF0YV0gPSB1c2VTdGF0ZTxJQ2hhcnREYXRhPih7bGFiZWxzOiBbXSwgZGF0YXNldHM6IFtdfSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgZGF0YXNldHM6IElDaGFydERhdGFzZXRbXSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHRhZ2dlZExpbmVzID0gdGFnID09PSBcIlwiID8gYWNjb3VudExpbmVzIDogYWNjb3VudExpbmVzLmZpbHRlcigobGluZSkgPT4gbGluZS50YWdzLmluZGV4T2YodGFnKSAhPT0gLTEpO1xyXG4gICAgICAgIGNvbnN0IGdyb3VwQnlUYWcgPSBhZ2dyZWdhdGVCeVRhZ3ModGFnZ2VkTGluZXMsIC0xLCB0YWcpO1xyXG4gICAgICAgIGNvbnN0IHRhZ3MgPSBPYmplY3Qua2V5cyhncm91cEJ5VGFnKTtcclxuXHJcbiAgICAgICAgY29uc3QgZ3JvdXBCeURhdGUgPSBhZ2dyZWdhdGVCeURhdGUodGFnZ2VkTGluZXMsIHRydWUpO1xyXG4gICAgICAgIGNvbnN0IGRhdGVMYWJlbHMgPSAgT2JqZWN0LmtleXMoZ3JvdXBCeURhdGUpLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgbGV0IGRBID0gbmV3IERhdGUoMjAyMywgcGFyc2VJbnQoYS5zcGxpdChcIi9cIilbMV0pIC0gMSwgcGFyc2VJbnQoYS5zcGxpdChcIi9cIilbMF0pKTtcclxuICAgICAgICAgICAgbGV0IGRCID0gbmV3IERhdGUoMjAyMywgcGFyc2VJbnQoYi5zcGxpdChcIi9cIilbMV0pIC0gMSwgcGFyc2VJbnQoYi5zcGxpdChcIi9cIilbMF0pKTtcclxuICAgICAgICAgICAgcmV0dXJuIGRBID4gZEIgPyAxIDogLTE7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIERhdGFzZXQgdG8gY292ZXIgdGhlIHRhZ1xyXG4gICAgICAgIGxldCB0YWdIaXN0b3J5RGViaXQgPSBPYmplY3Qua2V5cyhncm91cEJ5RGF0ZSkuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZEEgPSBuZXcgRGF0ZSgyMDIzLCBwYXJzZUludChhLnNwbGl0KFwiL1wiKVsxXSkgLSAxLCBwYXJzZUludChhLnNwbGl0KFwiL1wiKVswXSkpO1xyXG4gICAgICAgICAgICBsZXQgZEIgPSBuZXcgRGF0ZSgyMDIzLCBwYXJzZUludChiLnNwbGl0KFwiL1wiKVsxXSkgLSAxLCBwYXJzZUludChiLnNwbGl0KFwiL1wiKVswXSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gZEEgPiBkQiA/IDEgOiAtMTtcclxuICAgICAgICB9KS5tYXAoKGRhdGUpID0+IGdyb3VwQnlEYXRlW2RhdGVdID8gZ3JvdXBCeURhdGVbZGF0ZV0uZGViaXQgOiAwKTtcclxuXHJcbiAgICAgICAgbGV0IGRhdGFzZXQ6IElDaGFydERhdGFzZXQgPSB7XHJcbiAgICAgICAgICAgIGxhYmVsOiB0YWcgfHwgXCJUb3VzXCIsXHJcbiAgICAgICAgICAgIHR5cGU6ICdsaW5lJyxcclxuICAgICAgICAgICAgeUF4aXNJRDogJ3knLFxyXG4gICAgICAgICAgICBkYXRhOiB0YWdIaXN0b3J5RGViaXQsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogQ0hBUlRfQ09MT1JTWzBdLFxyXG5cclxuICAgICAgICB9O1xyXG4gICAgICAgIGRhdGFzZXRzLnB1c2goZGF0YXNldCk7XHJcblxyXG4gICAgICAgIC8vIERhdGFzZXRzIHRvIGNvdmVyIHRoZSBzdWIgdGFnc1xyXG4gICAgICAgIGNvbnN0IHByb2Nlc3NlZFRhZ3M6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN1YlRhZ2dlZExpbmVzID0gdGFnZ2VkTGluZXMuZmlsdGVyKChsaW5lKSA9PiBsaW5lLnRhZ3MuaW5kZXhPZih0YWdzW2ldKSAhPT0gLTEgJiYgIWxpbmUudGFncy5zb21lKHQgPT4gcHJvY2Vzc2VkVGFncy5pbmNsdWRlcyh0KSkpO1xyXG4gICAgICAgICAgICBjb25zdCBncm91cFN1YlRhZ0J5RGF0ZSA9IGFnZ3JlZ2F0ZUJ5RGF0ZShzdWJUYWdnZWRMaW5lcywgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgaGlzdG9yeURlYml0ID0gT2JqZWN0LmtleXMoZ3JvdXBCeURhdGUpLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBkQSA9IG5ldyBEYXRlKDIwMjMsIHBhcnNlSW50KGEuc3BsaXQoXCIvXCIpWzFdKSAtIDEsIHBhcnNlSW50KGEuc3BsaXQoXCIvXCIpWzBdKSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZEIgPSBuZXcgRGF0ZSgyMDIzLCBwYXJzZUludChiLnNwbGl0KFwiL1wiKVsxXSkgLSAxLCBwYXJzZUludChiLnNwbGl0KFwiL1wiKVswXSkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRBID4gZEIgPyAxIDogLTE7XHJcbiAgICAgICAgICAgIH0pLm1hcCgoZGF0ZSkgPT4gZ3JvdXBTdWJUYWdCeURhdGVbZGF0ZV0gPyBncm91cFN1YlRhZ0J5RGF0ZVtkYXRlXS5kZWJpdCA6IDApO1xyXG5cclxuICAgICAgICAgICAgbGV0IGRhdGFzZXQ6IElDaGFydERhdGFzZXQgPSB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogdGFnc1tpXSxcclxuICAgICAgICAgICAgICAgIHlBeGlzSUQ6ICd5JyxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdsaW5lJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGhpc3RvcnlEZWJpdCxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogQ0hBUlRfQ09MT1JTWyhpKzEpJUNIQVJUX0NPTE9SUy5sZW5ndGhdXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGRhdGFzZXRzLnB1c2goZGF0YXNldCk7XHJcbiAgICAgICAgICAgIHByb2Nlc3NlZFRhZ3MucHVzaCh0YWdzW2ldKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBkYXRhVG9EaXNwbGF5OiBJQ2hhcnREYXRhID0ge1xyXG4gICAgICAgICAgICBsYWJlbHM6IGRhdGVMYWJlbHMsXHJcbiAgICAgICAgICAgIGRhdGFzZXRzOiBkYXRhc2V0c1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHNldENoYXJ0RGF0YShkYXRhVG9EaXNwbGF5KTtcclxuXHJcbiAgICAgICAgbGV0IG9wdGlvbnM6IElDaGFydE9wdGlvbiA9IHtcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2NhbGVzOiB7XHJcbiAgICAgICAgICAgICAgICB4OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0RhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHk6IHtcclxuICAgICAgICAgICAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQW1vdW50J1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGx1Z2luczoge1xyXG4gICAgICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcgYXMgY29uc3QsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiRGViaXQgbW9udGhseSBoaXN0b3J5IG9mIFwiICsgKHRhZyB8fCBcIlRvdXNcIilcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ246ICdlbmQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFuY2hvcjogJ2VuZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogKGNvbnRleHQ6IENvbnRleHQpOiBib29sZWFuID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsOiBudW1iZXIgPSBjb250ZXh0LmRhdGFzZXQuZGF0YVtjb250ZXh0LmRhdGFJbmRleF0gYXMgbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsID4gMDtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogKHZhbHVlOiBudW1iZXIsIGNvbnRleHQ6IENvbnRleHQpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdlaWdodDogJ2JvbGQnXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA2LFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldENoYXJ0T3B0aW9uKG9wdGlvbnMpO1xyXG5cclxuICAgfSwgW2FjY291bnRMaW5lcywgdGFnXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWUtY2hhcnQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8QmFyIG9wdGlvbnM9e2NoYXJ0T3B0aW9ufSBkYXRhPXtjaGFydERhdGF9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2hhcnQiLCJDaGFydEpTIiwiTGluZWFyU2NhbGUiLCJDYXRlZ29yeVNjYWxlIiwiVG9vbHRpcCIsIlRpdGxlIiwiTGVnZW5kIiwiTGluZUVsZW1lbnQiLCJQb2ludEVsZW1lbnQiLCJCYXJFbGVtZW50IiwiQmFyIiwiQ0hBUlRfQ09MT1JTIiwiYWdncmVnYXRlQnlEYXRlIiwiYWdncmVnYXRlQnlUYWdzIiwicmVnaXN0ZXIiLCJUYWdIaXN0b3J5TW9udGhseUNoYXJ0IiwiYWNjb3VudExpbmVzIiwidGFnIiwiY2hhcnRPcHRpb24iLCJzZXRDaGFydE9wdGlvbiIsInJlc3BvbnNpdmUiLCJhbmltYXRpb24iLCJzY2FsZXMiLCJwbHVnaW5zIiwiY2hhcnREYXRhIiwic2V0Q2hhcnREYXRhIiwibGFiZWxzIiwiZGF0YXNldHMiLCJ0YWdnZWRMaW5lcyIsImZpbHRlciIsImxpbmUiLCJ0YWdzIiwiaW5kZXhPZiIsImdyb3VwQnlUYWciLCJPYmplY3QiLCJrZXlzIiwiZ3JvdXBCeURhdGUiLCJkYXRlTGFiZWxzIiwic29ydCIsImEiLCJiIiwiZEEiLCJEYXRlIiwicGFyc2VJbnQiLCJzcGxpdCIsImRCIiwidGFnSGlzdG9yeURlYml0IiwibWFwIiwiZGF0ZSIsImRlYml0IiwiZGF0YXNldCIsImxhYmVsIiwidHlwZSIsInlBeGlzSUQiLCJkYXRhIiwiYmFja2dyb3VuZENvbG9yIiwicHVzaCIsInByb2Nlc3NlZFRhZ3MiLCJpIiwibGVuZ3RoIiwic3ViVGFnZ2VkTGluZXMiLCJzb21lIiwidCIsImluY2x1ZGVzIiwiZ3JvdXBTdWJUYWdCeURhdGUiLCJoaXN0b3J5RGViaXQiLCJkYXRhVG9EaXNwbGF5Iiwib3B0aW9ucyIsIm1haW50YWluQXNwZWN0UmF0aW8iLCJkdXJhdGlvbiIsIngiLCJiZWdpbkF0WmVybyIsInRpdGxlIiwiZGlzcGxheSIsInRleHQiLCJ5IiwibGVnZW5kIiwicG9zaXRpb24iLCJkYXRhbGFiZWxzIiwiYWxpZ24iLCJhbmNob3IiLCJjb2xvciIsImNvbnRleHQiLCJ2YWwiLCJkYXRhSW5kZXgiLCJmb3JtYXR0ZXIiLCJ2YWx1ZSIsIk1hdGgiLCJyb3VuZCIsInRvU3RyaW5nIiwiZm9udCIsIndlaWdodCIsInBhZGRpbmciLCJ0ZXh0QWxpZ24iLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Charts/TagMonthlyHistoryChart.tsx\n"));

/***/ })

});