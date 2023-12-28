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

/***/ "(app-pages-browser)/./components/Charts/BalanceHistoryChart.tsx":
/*!***************************************************!*\
  !*** ./components/Charts/BalanceHistoryChart.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BalanceHistoryChart: function() { return /* binding */ BalanceHistoryChart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ \"(app-pages-browser)/./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartjs-2 */ \"(app-pages-browser)/./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var _ColorBank__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColorBank */ \"(app-pages-browser)/./components/Charts/ColorBank.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_3__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_3__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_3__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_3__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.Title, chart_js__WEBPACK_IMPORTED_MODULE_3__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_3__.Legend);\nfunction BalanceHistoryChart(param) {\n    let { accountLines } = param;\n    _s();\n    const [chartOption, setChartOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        responsive: true,\n        animation: {},\n        scales: {},\n        plugins: {}\n    });\n    const [chartData, setChartData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        labels: [],\n        datasets: []\n    });\n    const chartReference = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (chartReference) {\n            const chart = chartReference.current;\n            if (chart && chartData.datasets.length > 0) {\n                var _chart_ctx_canvas_parentElement;\n                const width = ((_chart_ctx_canvas_parentElement = chart.ctx.canvas.parentElement) === null || _chart_ctx_canvas_parentElement === void 0 ? void 0 : _chart_ctx_canvas_parentElement.style.width) ? chart.ctx.canvas.width : 1370;\n                chart.resize(width, chart.canvas.height);\n                chart.update();\n            }\n        }\n    }, [\n        chartReference,\n        chartData\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const dateLabels = [];\n        const history = [];\n        if (accountLines.length === 1) {\n            dateLabels.push(accountLines[0].date.toLocaleDateString(\"fr-FR\"));\n            history.push(accountLines[0].balance);\n        } else if (accountLines.length > 1) {\n            let currentDate = accountLines[0].date;\n            for(let i = 1; i < accountLines.length; i++){\n                if (accountLines[i].date.getTime() !== currentDate.getTime()) {\n                    dateLabels.push(currentDate);\n                    history.push(accountLines[i - 1].balance);\n                    currentDate = accountLines[i].date;\n                }\n            }\n            dateLabels.push(currentDate);\n            history.push(accountLines[accountLines.length - 1].balance);\n        }\n        let datasets = [];\n        let dataset = {\n            label: \"Balance\",\n            yAxisID: \"y\",\n            data: history,\n            backgroundColor: _ColorBank__WEBPACK_IMPORTED_MODULE_2__.CHART_COLORS[0],\n            datalabels: {\n                anchor: \"center\",\n                align: \"bottom\"\n            }\n        };\n        datasets.push(dataset);\n        let dataToDisplay = {\n            labels: dateLabels,\n            datasets: datasets\n        };\n        setChartData(dataToDisplay);\n        let options = {\n            responsive: true,\n            maintainAspectRatio: false,\n            animations: false,\n            scales: {\n                x: {\n                    beginAtZero: true,\n                    title: {\n                        display: true,\n                        text: \"Date\"\n                    }\n                },\n                y: {\n                    beginAtZero: true,\n                    title: {\n                        display: true,\n                        text: \"Amount\"\n                    }\n                }\n            },\n            plugins: {\n                legend: {\n                    position: \"top\"\n                },\n                title: {\n                    display: true,\n                    text: \"Evolution of the account's balance\"\n                },\n                datalabels: {\n                    display: false\n                }\n            }\n        };\n        setChartOption(options);\n    }, [\n        accountLines\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"time-chart-wrapper\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Line, {\n            ref: chartReference,\n            options: chartOption,\n            data: chartData\n        }, void 0, false, {\n            fileName: \"D:\\\\projet\\\\budget-tracker-nextjs\\\\components\\\\Charts\\\\BalanceHistoryChart.tsx\",\n            lineNumber: 159,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\projet\\\\budget-tracker-nextjs\\\\components\\\\Charts\\\\BalanceHistoryChart.tsx\",\n        lineNumber: 158,\n        columnNumber: 9\n    }, this);\n}\n_s(BalanceHistoryChart, \"FoTWsYANwTxhQBbJG1664sLH0eo=\");\n_c = BalanceHistoryChart;\nvar _c;\n$RefreshReg$(_c, \"BalanceHistoryChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ2hhcnRzL0JhbGFuY2VIaXN0b3J5Q2hhcnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFvRDtBQVVoQztBQUNtQjtBQUNJO0FBK0IzQ0ksMkNBQU9BLENBQUNVLFFBQVEsQ0FDWlQsaURBQVdBLEVBQ1hDLGtEQUFZQSxFQUNaQyxpREFBV0EsRUFDWEMsbURBQWFBLEVBQ2JFLDJDQUFLQSxFQUNMRCw2Q0FBT0EsRUFDUEUsNENBQU1BO0FBR0gsU0FBU0ksb0JBQW9CLEtBRWQ7UUFGYyxFQUNoQ0MsWUFBWSxFQUNNLEdBRmM7O0lBSWhDLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHaEIsK0NBQVFBLENBQWU7UUFBQ2lCLFlBQVk7UUFBTUMsV0FBVyxDQUFDO1FBQUdDLFFBQVEsQ0FBQztRQUFHQyxTQUFTLENBQUM7SUFBQztJQUN0SCxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR3RCLCtDQUFRQSxDQUFhO1FBQUN1QixRQUFRLEVBQUU7UUFBRUMsVUFBVSxFQUFFO0lBQUE7SUFFaEYsTUFBTUMsaUJBQWlCMUIsNkNBQU1BLENBQUM7SUFFOUJELGdEQUFTQSxDQUFDO1FBQ04sSUFBSTJCLGdCQUFnQjtZQUNoQixNQUFNQyxRQUFRRCxlQUFlRSxPQUFPO1lBQ3BDLElBQUlELFNBQVNMLFVBQVVHLFFBQVEsQ0FBQ0ksTUFBTSxHQUFHLEdBQUc7b0JBQzFCRjtnQkFBZCxNQUFNRyxRQUFRSCxFQUFBQSxrQ0FBQUEsTUFBTUksR0FBRyxDQUFDQyxNQUFNLENBQUNDLGFBQWEsY0FBOUJOLHNEQUFBQSxnQ0FBZ0NPLEtBQUssQ0FBQ0osS0FBSyxJQUFHSCxNQUFNSSxHQUFHLENBQUNDLE1BQU0sQ0FBQ0YsS0FBSyxHQUFHO2dCQUNyRkgsTUFBTVEsTUFBTSxDQUFDTCxPQUFPSCxNQUFNSyxNQUFNLENBQUNJLE1BQU07Z0JBQ3ZDVCxNQUFNVSxNQUFNO1lBQ2hCO1FBQ0o7SUFDSixHQUFFO1FBQUNYO1FBQWdCSjtLQUFVO0lBRzdCdkIsZ0RBQVNBLENBQUM7UUFFTixNQUFNdUMsYUFBdUIsRUFBRTtRQUMvQixNQUFNQyxVQUFvQixFQUFFO1FBRTVCLElBQUl4QixhQUFhYyxNQUFNLEtBQUssR0FBRztZQUMzQlMsV0FBV0UsSUFBSSxDQUFDekIsWUFBWSxDQUFDLEVBQUUsQ0FBQzBCLElBQUksQ0FBQ0Msa0JBQWtCLENBQUM7WUFDeERILFFBQVFDLElBQUksQ0FBQ3pCLFlBQVksQ0FBQyxFQUFFLENBQUM0QixPQUFPO1FBQ3hDLE9BQ0ssSUFBSTVCLGFBQWFjLE1BQU0sR0FBRyxHQUFHO1lBQzlCLElBQUllLGNBQWM3QixZQUFZLENBQUMsRUFBRSxDQUFDMEIsSUFBSTtZQUV0QyxJQUFJLElBQUlJLElBQUksR0FBR0EsSUFBSTlCLGFBQWFjLE1BQU0sRUFBRWdCLElBQ3hDO2dCQUNJLElBQUk5QixZQUFZLENBQUM4QixFQUFFLENBQUNKLElBQUksQ0FBQ0ssT0FBTyxPQUFPRixZQUFZRSxPQUFPLElBQUk7b0JBQzFEUixXQUFXRSxJQUFJLENBQUNJO29CQUNoQkwsUUFBUUMsSUFBSSxDQUFDekIsWUFBWSxDQUFDOEIsSUFBRSxFQUFFLENBQUNGLE9BQU87b0JBQ3RDQyxjQUFjN0IsWUFBWSxDQUFDOEIsRUFBRSxDQUFDSixJQUFJO2dCQUN0QztZQUNKO1lBRUFILFdBQVdFLElBQUksQ0FBQ0k7WUFDaEJMLFFBQVFDLElBQUksQ0FBQ3pCLFlBQVksQ0FBQ0EsYUFBYWMsTUFBTSxHQUFHLEVBQUUsQ0FBQ2MsT0FBTztRQUM5RDtRQUVBLElBQUlsQixXQUE0QixFQUFFO1FBQ2xDLElBQUlzQixVQUF5QjtZQUN6QkMsT0FBTztZQUNQQyxTQUFTO1lBQ1RDLE1BQU1YO1lBQ05ZLGlCQUFpQnZDLG9EQUFZLENBQUMsRUFBRTtZQUNoQ3dDLFlBQVk7Z0JBQ1JDLFFBQVE7Z0JBQ1JDLE9BQU87WUFDWDtRQUNKO1FBQ0E3QixTQUFTZSxJQUFJLENBQUNPO1FBRWQsSUFBSVEsZ0JBQTRCO1lBQzVCL0IsUUFBUWM7WUFDUmIsVUFBVUE7UUFDZDtRQUVBRixhQUFhZ0M7UUFFYixJQUFJQyxVQUF3QjtZQUN4QnRDLFlBQVk7WUFDWnVDLHFCQUFxQjtZQUNyQkMsWUFBWTtZQUNadEMsUUFBUTtnQkFDSnVDLEdBQUc7b0JBQ0NDLGFBQWE7b0JBQ2JDLE9BQU87d0JBQ0hDLFNBQVM7d0JBQ1RDLE1BQU07b0JBQ1Y7Z0JBQ0o7Z0JBQ0FDLEdBQUc7b0JBQ0NKLGFBQWE7b0JBQ2JDLE9BQU87d0JBQ0hDLFNBQVM7d0JBQ1RDLE1BQU07b0JBQ1Y7Z0JBQ0o7WUFDSjtZQUNBMUMsU0FBUztnQkFDTDRDLFFBQVE7b0JBQ0xDLFVBQVU7Z0JBQ2I7Z0JBQ0FMLE9BQU87b0JBQ0hDLFNBQVM7b0JBQ1RDLE1BQU07Z0JBQ1Y7Z0JBQ0FYLFlBQVk7b0JBQ1JVLFNBQVM7Z0JBQ2I7WUFDSjtRQUNKO1FBQ0E3QyxlQUFldUM7SUFFcEIsR0FBRztRQUFDekM7S0FBYTtJQUVoQixxQkFDSSw4REFBQ29EO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUN6RCxpREFBSUE7WUFBQzBELEtBQUszQztZQUFnQjhCLFNBQVN4QztZQUFha0MsTUFBTTVCOzs7Ozs7Ozs7OztBQUduRTtHQTVHZ0JSO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2hhcnRzL0JhbGFuY2VIaXN0b3J5Q2hhcnQudHN4P2RiNDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgICBDaGFydCBhcyBDaGFydEpTLFxyXG4gICAgTGluZWFyU2NhbGUsXHJcbiAgICBQb2ludEVsZW1lbnQsXHJcbiAgICBMaW5lRWxlbWVudCxcclxuICAgIENhdGVnb3J5U2NhbGUsXHJcbiAgICBUb29sdGlwLFxyXG4gICAgVGl0bGUsXHJcbiAgICBMZWdlbmRcclxuICB9IGZyb20gJ2NoYXJ0LmpzJztcclxuaW1wb3J0IHsgTGluZSB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XHJcbmltcG9ydCB7IENIQVJUX0NPTE9SUyB9IGZyb20gXCIuL0NvbG9yQmFua1wiO1xyXG5pbXBvcnQgeyBJQWNjb3VudExpbmUgfSBmcm9tIFwiLi4vRGF0YS9CYW5rXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElucHV0UmFuZ2VQcm9wcyB7XHJcbiAgICBhY2NvdW50TGluZXM6IElBY2NvdW50TGluZVtdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDaGFydERhdGFzZXQge1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxuICAgIHlBeGlzSUQ/OiBzdHJpbmc7XHJcbiAgICBkYXRhOiBudW1iZXJbXTtcclxuICAgIHBvaW50UmFkaXVzPzogbnVtYmVyO1xyXG4gICAgYm9yZGVyQ29sb3I/OiBzdHJpbmc7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcclxuICAgIGRhdGFsYWJlbHM6IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ2hhcnREYXRhIHtcclxuICAgIGxhYmVsczogc3RyaW5nW107XHJcbiAgICBkYXRhc2V0czogSUNoYXJ0RGF0YXNldFtdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDaGFydE9wdGlvbiB7XHJcbiAgICByZXNwb25zaXZlOiBib29sZWFuO1xyXG4gICAgbWFpbnRhaW5Bc3BlY3RSYXRpbz86IGJvb2xlYW47XHJcbiAgICBzY2FsZXM6IGFueTtcclxuICAgIGFuaW1hdGlvbj86IGFueTtcclxuICAgIGFuaW1hdGlvbnM/OiBhbnk7XHJcbiAgICBwbHVnaW5zOiBhbnk7XHJcbn1cclxuXHJcbkNoYXJ0SlMucmVnaXN0ZXIoXHJcbiAgICBMaW5lYXJTY2FsZSxcclxuICAgIFBvaW50RWxlbWVudCxcclxuICAgIExpbmVFbGVtZW50LFxyXG4gICAgQ2F0ZWdvcnlTY2FsZSxcclxuICAgIFRpdGxlLFxyXG4gICAgVG9vbHRpcCxcclxuICAgIExlZ2VuZFxyXG4pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEJhbGFuY2VIaXN0b3J5Q2hhcnQoe1xyXG4gICAgYWNjb3VudExpbmVzXHJcbiAgICB9OiBJbnB1dFJhbmdlUHJvcHMpOiBKU1guRWxlbWVudCB7XHJcblxyXG4gICAgY29uc3QgW2NoYXJ0T3B0aW9uLCBzZXRDaGFydE9wdGlvbl0gPSB1c2VTdGF0ZTxJQ2hhcnRPcHRpb24+KHtyZXNwb25zaXZlOiB0cnVlLCBhbmltYXRpb246IHt9LCBzY2FsZXM6IHt9LCBwbHVnaW5zOiB7fX0pO1xyXG4gICAgY29uc3QgW2NoYXJ0RGF0YSwgc2V0Q2hhcnREYXRhXSA9IHVzZVN0YXRlPElDaGFydERhdGE+KHtsYWJlbHM6IFtdLCBkYXRhc2V0czogW119KTtcclxuXHJcbiAgICBjb25zdCBjaGFydFJlZmVyZW5jZSA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChjaGFydFJlZmVyZW5jZSkge1xyXG4gICAgICAgICAgICBjb25zdCBjaGFydCA9IGNoYXJ0UmVmZXJlbmNlLmN1cnJlbnQgYXMgQ2hhcnRKU3xudWxsO1xyXG4gICAgICAgICAgICBpZiAoY2hhcnQgJiYgY2hhcnREYXRhLmRhdGFzZXRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gY2hhcnQuY3R4LmNhbnZhcy5wYXJlbnRFbGVtZW50Py5zdHlsZS53aWR0aCA/IGNoYXJ0LmN0eC5jYW52YXMud2lkdGggOiAxMzcwO1xyXG4gICAgICAgICAgICAgICAgY2hhcnQucmVzaXplKHdpZHRoLCBjaGFydC5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGNoYXJ0LnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxbY2hhcnRSZWZlcmVuY2UsIGNoYXJ0RGF0YV0pO1xyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBkYXRlTGFiZWxzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGhpc3Rvcnk6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgICAgIGlmIChhY2NvdW50TGluZXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIGRhdGVMYWJlbHMucHVzaChhY2NvdW50TGluZXNbMF0uZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJmci1GUlwiKSk7XHJcbiAgICAgICAgICAgIGhpc3RvcnkucHVzaChhY2NvdW50TGluZXNbMF0uYmFsYW5jZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGFjY291bnRMaW5lcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50RGF0ZSA9IGFjY291bnRMaW5lc1swXS5kYXRlO1xyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMTsgaSA8IGFjY291bnRMaW5lcy5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFjY291bnRMaW5lc1tpXS5kYXRlLmdldFRpbWUoKSAhPT0gY3VycmVudERhdGUuZ2V0VGltZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZUxhYmVscy5wdXNoKGN1cnJlbnREYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LnB1c2goYWNjb3VudExpbmVzW2ktMV0uYmFsYW5jZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudERhdGUgPSBhY2NvdW50TGluZXNbaV0uZGF0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZGF0ZUxhYmVscy5wdXNoKGN1cnJlbnREYXRlKTtcclxuICAgICAgICAgICAgaGlzdG9yeS5wdXNoKGFjY291bnRMaW5lc1thY2NvdW50TGluZXMubGVuZ3RoIC0gMV0uYmFsYW5jZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZGF0YXNldHM6IElDaGFydERhdGFzZXRbXSA9IFtdO1xyXG4gICAgICAgIGxldCBkYXRhc2V0OiBJQ2hhcnREYXRhc2V0ID0ge1xyXG4gICAgICAgICAgICBsYWJlbDogXCJCYWxhbmNlXCIsXHJcbiAgICAgICAgICAgIHlBeGlzSUQ6ICd5JyxcclxuICAgICAgICAgICAgZGF0YTogaGlzdG9yeSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBDSEFSVF9DT0xPUlNbMF0sXHJcbiAgICAgICAgICAgIGRhdGFsYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgIGFuY2hvcjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBhbGlnbjogJ2JvdHRvbSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZGF0YXNldHMucHVzaChkYXRhc2V0KTtcclxuXHJcbiAgICAgICAgbGV0IGRhdGFUb0Rpc3BsYXk6IElDaGFydERhdGEgPSB7XHJcbiAgICAgICAgICAgIGxhYmVsczogZGF0ZUxhYmVscyxcclxuICAgICAgICAgICAgZGF0YXNldHM6IGRhdGFzZXRzLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHNldENoYXJ0RGF0YShkYXRhVG9EaXNwbGF5KTtcclxuXHJcbiAgICAgICAgbGV0IG9wdGlvbnM6IElDaGFydE9wdGlvbiA9IHtcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbnM6IGZhbHNlLFxyXG4gICAgICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgICAgICAgIHg6IHtcclxuICAgICAgICAgICAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnRGF0ZSdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeToge1xyXG4gICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdBbW91bnQnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwbHVnaW5zOiB7XHJcbiAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyBhcyBjb25zdCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJFdm9sdXRpb24gb2YgdGhlIGFjY291bnQncyBiYWxhbmNlXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRDaGFydE9wdGlvbihvcHRpb25zKTtcclxuXHJcbiAgIH0sIFthY2NvdW50TGluZXNdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZS1jaGFydC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxMaW5lIHJlZj17Y2hhcnRSZWZlcmVuY2V9IG9wdGlvbnM9e2NoYXJ0T3B0aW9ufSBkYXRhPXtjaGFydERhdGF9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiQ2hhcnQiLCJDaGFydEpTIiwiTGluZWFyU2NhbGUiLCJQb2ludEVsZW1lbnQiLCJMaW5lRWxlbWVudCIsIkNhdGVnb3J5U2NhbGUiLCJUb29sdGlwIiwiVGl0bGUiLCJMZWdlbmQiLCJMaW5lIiwiQ0hBUlRfQ09MT1JTIiwicmVnaXN0ZXIiLCJCYWxhbmNlSGlzdG9yeUNoYXJ0IiwiYWNjb3VudExpbmVzIiwiY2hhcnRPcHRpb24iLCJzZXRDaGFydE9wdGlvbiIsInJlc3BvbnNpdmUiLCJhbmltYXRpb24iLCJzY2FsZXMiLCJwbHVnaW5zIiwiY2hhcnREYXRhIiwic2V0Q2hhcnREYXRhIiwibGFiZWxzIiwiZGF0YXNldHMiLCJjaGFydFJlZmVyZW5jZSIsImNoYXJ0IiwiY3VycmVudCIsImxlbmd0aCIsIndpZHRoIiwiY3R4IiwiY2FudmFzIiwicGFyZW50RWxlbWVudCIsInN0eWxlIiwicmVzaXplIiwiaGVpZ2h0IiwidXBkYXRlIiwiZGF0ZUxhYmVscyIsImhpc3RvcnkiLCJwdXNoIiwiZGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImJhbGFuY2UiLCJjdXJyZW50RGF0ZSIsImkiLCJnZXRUaW1lIiwiZGF0YXNldCIsImxhYmVsIiwieUF4aXNJRCIsImRhdGEiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkYXRhbGFiZWxzIiwiYW5jaG9yIiwiYWxpZ24iLCJkYXRhVG9EaXNwbGF5Iiwib3B0aW9ucyIsIm1haW50YWluQXNwZWN0UmF0aW8iLCJhbmltYXRpb25zIiwieCIsImJlZ2luQXRaZXJvIiwidGl0bGUiLCJkaXNwbGF5IiwidGV4dCIsInkiLCJsZWdlbmQiLCJwb3NpdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Charts/BalanceHistoryChart.tsx\n"));

/***/ })

});