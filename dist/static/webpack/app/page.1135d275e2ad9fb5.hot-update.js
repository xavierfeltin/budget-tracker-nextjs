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

/***/ "(app-pages-browser)/./components/Charts/QuartileHistoryChart.tsx":
/*!****************************************************!*\
  !*** ./components/Charts/QuartileHistoryChart.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   QuartileHistoryChart: function() { return /* binding */ QuartileHistoryChart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chart.js */ \"(app-pages-browser)/./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-chartjs-2 */ \"(app-pages-browser)/./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var _ColorBank__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColorBank */ \"(app-pages-browser)/./components/Charts/ColorBank.ts\");\n/* harmony import */ var _Data_Bank__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Data/Bank */ \"(app-pages-browser)/./components/Data/Bank.ts\");\n/* harmony import */ var _Data_UtilMath__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Data/UtilMath */ \"(app-pages-browser)/./components/Data/UtilMath.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_5__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_5__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_5__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_5__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_5__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_5__.Filler, chart_js__WEBPACK_IMPORTED_MODULE_5__.Title, chart_js__WEBPACK_IMPORTED_MODULE_5__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_5__.Legend);\nfunction QuartileHistoryChart(param) {\n    let { accountLines, allAccountLines } = param;\n    _s();\n    const [chartOption, setChartOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        responsive: true,\n        animation: {},\n        scales: {},\n        plugins: {}\n    });\n    const [chartData, setChartData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        labels: [],\n        datasets: []\n    });\n    const chartReference = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (chartReference) {\n            const chart = chartReference.current;\n            if (chart && chartData.datasets.length > 0) {\n                var _chart_ctx_canvas_parentElement;\n                const width = ((_chart_ctx_canvas_parentElement = chart.ctx.canvas.parentElement) === null || _chart_ctx_canvas_parentElement === void 0 ? void 0 : _chart_ctx_canvas_parentElement.style.width) ? chart.ctx.canvas.width : 1370;\n                chart.resize(width, chart.canvas.height);\n                chart.update();\n            }\n        }\n    }, [\n        chartReference,\n        chartData\n    ]);\n    // Fill space between two lines: https://stackoverflow.com/questions/37866992/filling-area-between-two-lines-chart-js-v2\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const dataLabels = [];\n        const history = [];\n        if (accountLines.length === 1) {\n            dataLabels.push(accountLines[0].date);\n            //dataLabels.push(accountLines[0].pctInMonth)\n            history.push(accountLines[0].balance);\n        } else if (accountLines.length > 1) {\n            let currentDate = accountLines[0].date;\n            for(let i = 1; i < accountLines.length; i++){\n                if (accountLines[i].date.getTime() !== currentDate.getTime()) {\n                    dataLabels.push(currentDate);\n                    //dataLabels.push(accountLines[i-1].pctInMonth)\n                    history.push(accountLines[i - 1].balance);\n                    currentDate = accountLines[i].date;\n                } else if (i === accountLines.length - 1 && accountLines[i].date.getTime() === currentDate.getTime()) {\n                    dataLabels.push(currentDate);\n                    //dataLabels.push(accountLines[i-1].pctInMonth)\n                    history.push(accountLines[i - 1].balance);\n                }\n            }\n        }\n        const date = accountLines[accountLines.length - 1].date;\n        const maxDaysOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();\n        const boxPlots = (0,_Data_Bank__WEBPACK_IMPORTED_MODULE_3__.getBoxPlotsFromLines)(allAccountLines);\n        const boxPlotLabels = [];\n        for(let i = 0; i < boxPlots.length; i++){\n            const dayInMonth = Math.round(_Data_UtilMath__WEBPACK_IMPORTED_MODULE_4__.UtilMath.map(boxPlots[i].pctInMonth, 1, 100, 1, maxDaysOfMonth));\n            const dateBoxPlot = new Date(date.getFullYear(), date.getMonth(), dayInMonth);\n            boxPlotLabels.push(dateBoxPlot);\n        }\n        const allLabels = [\n            ...boxPlotLabels\n        ];\n        for(let i = 0; i < dataLabels.length; i++){\n            if (allLabels.map((d)=>d.getTime()).indexOf(dataLabels[i].getTime()) === -1) {\n                allLabels.push(dataLabels[i]);\n            }\n        }\n        allLabels.sort((a, b)=>a.getTime() - b.getTime());\n        let datasets = [];\n        let dataset = {\n            label: \"Balance\",\n            yAxisID: \"y\",\n            data: history.map((data, idx)=>{\n                return {\n                    x: dataLabels[idx].toLocaleDateString(\"fr-FR\"),\n                    y: data\n                };\n            }),\n            backgroundColor: _ColorBank__WEBPACK_IMPORTED_MODULE_2__.CHART_COLORS[0],\n            fill: false,\n            datalabels: {\n                anchor: \"center\",\n                align: \"bottom\"\n            }\n        };\n        datasets.push(dataset);\n        dataset = {\n            label: \"First Quartile\",\n            yAxisID: \"y\",\n            data: boxPlots.map((box, idx)=>{\n                return {\n                    x: boxPlotLabels[idx].toLocaleDateString(\"fr-FR\"),\n                    y: box.firstQuartile\n                };\n            }),\n            backgroundColor: _ColorBank__WEBPACK_IMPORTED_MODULE_2__.CHART_COLORS[1],\n            borderColor: _ColorBank__WEBPACK_IMPORTED_MODULE_2__.CHART_COLORS[1],\n            pointRadius: 0,\n            fill: false,\n            datalabels: {\n                anchor: \"center\",\n                align: \"bottom\"\n            }\n        };\n        datasets.push(dataset);\n        dataset = {\n            label: \"Third Quartile\",\n            yAxisID: \"y\",\n            data: boxPlots.map((box, idx)=>{\n                return {\n                    x: boxPlotLabels[idx].toLocaleDateString(\"fr-FR\"),\n                    y: box.thirdQuartile\n                };\n            }),\n            backgroundColor: _ColorBank__WEBPACK_IMPORTED_MODULE_2__.CHART_COLORS[1],\n            borderColor: _ColorBank__WEBPACK_IMPORTED_MODULE_2__.CHART_COLORS[1],\n            pointRadius: 0,\n            fill: {\n                target: \"-1\",\n                above: \"rgb(239, 255, 0)\",\n                below: \"rgb(0, 0, 255)\" // And blue below the origin\n            },\n            datalabels: {\n                anchor: \"center\",\n                align: \"bottom\"\n            }\n        };\n        datasets.push(dataset);\n        let dataToDisplay = {\n            labels: allLabels.map((date)=>date.toLocaleDateString(\"fr-FR\")),\n            datasets: datasets\n        };\n        setChartData(dataToDisplay);\n        let options = {\n            responsive: true,\n            maintainAspectRatio: false,\n            animations: false,\n            scales: {\n                x: {\n                    beginAtZero: true,\n                    title: {\n                        display: true,\n                        text: \"Date\"\n                    }\n                },\n                y: {\n                    beginAtZero: true,\n                    title: {\n                        display: true,\n                        text: \"Amount\"\n                    }\n                }\n            },\n            plugins: {\n                legend: {\n                    position: \"top\"\n                },\n                title: {\n                    display: true,\n                    text: \"Comparison of the account's balance\"\n                },\n                datalabels: {\n                    display: false\n                }\n            }\n        };\n        setChartOption(options);\n    }, [\n        accountLines,\n        allAccountLines\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"time-chart-wrapper\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__.Line, {\n            ref: chartReference,\n            options: chartOption,\n            data: chartData\n        }, void 0, false, {\n            fileName: \"D:\\\\projet\\\\budget-tracker-nextjs\\\\components\\\\Charts\\\\QuartileHistoryChart.tsx\",\n            lineNumber: 222,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\projet\\\\budget-tracker-nextjs\\\\components\\\\Charts\\\\QuartileHistoryChart.tsx\",\n        lineNumber: 221,\n        columnNumber: 9\n    }, this);\n}\n_s(QuartileHistoryChart, \"FoTWsYANwTxhQBbJG1664sLH0eo=\");\n_c = QuartileHistoryChart;\nvar _c;\n$RefreshReg$(_c, \"QuartileHistoryChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ2hhcnRzL1F1YXJ0aWxlSGlzdG9yeUNoYXJ0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFvRDtBQVdoQztBQUNtQjtBQUNJO0FBQ3VCO0FBQ3RCO0FBZ0M1Q0ksMkNBQU9BLENBQUNhLFFBQVEsQ0FDWlosaURBQVdBLEVBQ1hDLGtEQUFZQSxFQUNaQyxpREFBV0EsRUFDWEMsbURBQWFBLEVBQ2JJLDRDQUFNQSxFQUNORiwyQ0FBS0EsRUFDTEQsNkNBQU9BLEVBQ1BFLDRDQUFNQTtBQUdILFNBQVNPLHFCQUFxQixLQUdmO1FBSGUsRUFDakNDLFlBQVksRUFDWkMsZUFBZSxFQUNHLEdBSGU7O0lBS2pDLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHcEIsK0NBQVFBLENBQWU7UUFBQ3FCLFlBQVk7UUFBTUMsV0FBVyxDQUFDO1FBQUdDLFFBQVEsQ0FBQztRQUFHQyxTQUFTLENBQUM7SUFBQztJQUN0SCxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBRzFCLCtDQUFRQSxDQUFhO1FBQUMyQixRQUFRLEVBQUU7UUFBRUMsVUFBVSxFQUFFO0lBQUE7SUFFaEYsTUFBTUMsaUJBQWlCOUIsNkNBQU1BLENBQUM7SUFFOUJELGdEQUFTQSxDQUFDO1FBQ04sSUFBSStCLGdCQUFnQjtZQUNoQixNQUFNQyxRQUFRRCxlQUFlRSxPQUFPO1lBQ3BDLElBQUlELFNBQVNMLFVBQVVHLFFBQVEsQ0FBQ0ksTUFBTSxHQUFHLEdBQUc7b0JBQzFCRjtnQkFBZCxNQUFNRyxRQUFRSCxFQUFBQSxrQ0FBQUEsTUFBTUksR0FBRyxDQUFDQyxNQUFNLENBQUNDLGFBQWEsY0FBOUJOLHNEQUFBQSxnQ0FBZ0NPLEtBQUssQ0FBQ0osS0FBSyxJQUFHSCxNQUFNSSxHQUFHLENBQUNDLE1BQU0sQ0FBQ0YsS0FBSyxHQUFHO2dCQUNyRkgsTUFBTVEsTUFBTSxDQUFDTCxPQUFPSCxNQUFNSyxNQUFNLENBQUNJLE1BQU07Z0JBQ3ZD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QUFHLENBQUMsQ0FBQ2YsT0FBU0EsS0FBSzhCLGtCQUFrQixDQUFDO1lBQ3hEOUMsVUFBVUE7UUFDZDtRQUVBRixhQUFhK0Q7UUFFYixJQUFJQyxVQUF3QjtZQUN4QnJFLFlBQVk7WUFDWnNFLHFCQUFxQjtZQUNyQkMsWUFBWTtZQUNackUsUUFBUTtnQkFDSmtELEdBQUc7b0JBQ0NvQixhQUFhO29CQUNiQyxPQUFPO3dCQUNIQyxTQUFTO3dCQUNUQyxNQUFNO29CQUNWO2dCQUNKO2dCQUNBckIsR0FBRztvQkFDQ2tCLGFBQWE7b0JBQ2JDLE9BQU87d0JBQ0hDLFNBQVM7d0JBQ1RDLE1BQU07b0JBQ1Y7Z0JBQ0o7WUFDSjtZQUNBeEUsU0FBUztnQkFDTHlFLFFBQVE7b0JBQ0xDLFVBQVU7Z0JBQ2I7Z0JBQ0FKLE9BQU87b0JBQ0hDLFNBQVM7b0JBQ1RDLE1BQU07Z0JBQ1Y7Z0JBQ0FsQixZQUFZO29CQUNSaUIsU0FBUztnQkFDYjtZQUNKO1FBQ0o7UUFDQTNFLGVBQWVzRTtJQUVwQixHQUFHO1FBQUN6RTtRQUFjQztLQUFnQjtJQUVqQyxxQkFDSSw4REFBQ2lGO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUN6RixpREFBSUE7WUFBQzBGLEtBQUt4RTtZQUFnQjZELFNBQVN2RTtZQUFhb0QsTUFBTTlDOzs7Ozs7Ozs7OztBQUduRTtHQXRLZ0JUO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2hhcnRzL1F1YXJ0aWxlSGlzdG9yeUNoYXJ0LnRzeD9jN2U1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gICAgQ2hhcnQgYXMgQ2hhcnRKUyxcclxuICAgIExpbmVhclNjYWxlLFxyXG4gICAgUG9pbnRFbGVtZW50LFxyXG4gICAgTGluZUVsZW1lbnQsXHJcbiAgICBDYXRlZ29yeVNjYWxlLFxyXG4gICAgVG9vbHRpcCxcclxuICAgIFRpdGxlLFxyXG4gICAgTGVnZW5kLFxyXG4gICAgRmlsbGVyXHJcbiAgfSBmcm9tICdjaGFydC5qcyc7XHJcbmltcG9ydCB7IExpbmUgfSBmcm9tICdyZWFjdC1jaGFydGpzLTInO1xyXG5pbXBvcnQgeyBDSEFSVF9DT0xPUlMgfSBmcm9tIFwiLi9Db2xvckJhbmtcIjtcclxuaW1wb3J0IHsgSUFjY291bnRMaW5lLCBnZXRCb3hQbG90c0Zyb21MaW5lcyB9IGZyb20gXCIuLi9EYXRhL0JhbmtcIjtcclxuaW1wb3J0IHsgVXRpbE1hdGggfSBmcm9tIFwiLi4vRGF0YS9VdGlsTWF0aFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJbnB1dFJhbmdlUHJvcHMge1xyXG4gICAgYWNjb3VudExpbmVzOiBJQWNjb3VudExpbmVbXTtcclxuICAgIGFsbEFjY291bnRMaW5lczogSUFjY291bnRMaW5lW107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNoYXJ0RGF0YXNldCB7XHJcbiAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgeUF4aXNJRD86IHN0cmluZztcclxuICAgIGRhdGE6IGFueTsvL251bWJlcltdO1xyXG4gICAgcG9pbnRSYWRpdXM/OiBudW1iZXI7XHJcbiAgICBmaWxsPzogYW55O1xyXG4gICAgYm9yZGVyQ29sb3I/OiBzdHJpbmc7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcclxuICAgIGRhdGFsYWJlbHM6IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ2hhcnREYXRhIHtcclxuICAgIGxhYmVsczogc3RyaW5nW107XHJcbiAgICBkYXRhc2V0czogSUNoYXJ0RGF0YXNldFtdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDaGFydE9wdGlvbiB7XHJcbiAgICByZXNwb25zaXZlOiBib29sZWFuO1xyXG4gICAgbWFpbnRhaW5Bc3BlY3RSYXRpbz86IGJvb2xlYW47XHJcbiAgICBzY2FsZXM6IGFueTtcclxuICAgIGFuaW1hdGlvbj86IGFueTtcclxuICAgIGFuaW1hdGlvbnM/OiBhbnk7XHJcbiAgICBwbHVnaW5zOiBhbnk7XHJcbn1cclxuXHJcbkNoYXJ0SlMucmVnaXN0ZXIoXHJcbiAgICBMaW5lYXJTY2FsZSxcclxuICAgIFBvaW50RWxlbWVudCxcclxuICAgIExpbmVFbGVtZW50LFxyXG4gICAgQ2F0ZWdvcnlTY2FsZSxcclxuICAgIEZpbGxlcixcclxuICAgIFRpdGxlLFxyXG4gICAgVG9vbHRpcCxcclxuICAgIExlZ2VuZFxyXG4pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFF1YXJ0aWxlSGlzdG9yeUNoYXJ0KHtcclxuICAgIGFjY291bnRMaW5lcyxcclxuICAgIGFsbEFjY291bnRMaW5lc1xyXG4gICAgfTogSW5wdXRSYW5nZVByb3BzKTogSlNYLkVsZW1lbnQge1xyXG5cclxuICAgIGNvbnN0IFtjaGFydE9wdGlvbiwgc2V0Q2hhcnRPcHRpb25dID0gdXNlU3RhdGU8SUNoYXJ0T3B0aW9uPih7cmVzcG9uc2l2ZTogdHJ1ZSwgYW5pbWF0aW9uOiB7fSwgc2NhbGVzOiB7fSwgcGx1Z2luczoge319KTtcclxuICAgIGNvbnN0IFtjaGFydERhdGEsIHNldENoYXJ0RGF0YV0gPSB1c2VTdGF0ZTxJQ2hhcnREYXRhPih7bGFiZWxzOiBbXSwgZGF0YXNldHM6IFtdfSk7XHJcblxyXG4gICAgY29uc3QgY2hhcnRSZWZlcmVuY2UgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoY2hhcnRSZWZlcmVuY2UpIHtcclxuICAgICAgICAgICAgY29uc3QgY2hhcnQgPSBjaGFydFJlZmVyZW5jZS5jdXJyZW50IGFzIENoYXJ0SlN8bnVsbDtcclxuICAgICAgICAgICAgaWYgKGNoYXJ0ICYmIGNoYXJ0RGF0YS5kYXRhc2V0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB3aWR0aCA9IGNoYXJ0LmN0eC5jYW52YXMucGFyZW50RWxlbWVudD8uc3R5bGUud2lkdGggPyBjaGFydC5jdHguY2FudmFzLndpZHRoIDogMTM3MDtcclxuICAgICAgICAgICAgICAgIGNoYXJ0LnJlc2l6ZSh3aWR0aCwgY2hhcnQuY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICBjaGFydC51cGRhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sW2NoYXJ0UmVmZXJlbmNlLCBjaGFydERhdGFdKTtcclxuXHJcbiAgICAvLyBGaWxsIHNwYWNlIGJldHdlZW4gdHdvIGxpbmVzOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zNzg2Njk5Mi9maWxsaW5nLWFyZWEtYmV0d2Vlbi10d28tbGluZXMtY2hhcnQtanMtdjJcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGFMYWJlbHM6IERhdGVbXSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGhpc3Rvcnk6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgICAgIGlmIChhY2NvdW50TGluZXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIGRhdGFMYWJlbHMucHVzaChhY2NvdW50TGluZXNbMF0uZGF0ZSk7XHJcbiAgICAgICAgICAgIC8vZGF0YUxhYmVscy5wdXNoKGFjY291bnRMaW5lc1swXS5wY3RJbk1vbnRoKVxyXG4gICAgICAgICAgICBoaXN0b3J5LnB1c2goYWNjb3VudExpbmVzWzBdLmJhbGFuY2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChhY2NvdW50TGluZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudERhdGUgPSBhY2NvdW50TGluZXNbMF0uZGF0ZTtcclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMTsgaSA8IGFjY291bnRMaW5lcy5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFjY291bnRMaW5lc1tpXS5kYXRlLmdldFRpbWUoKSAhPT0gY3VycmVudERhdGUuZ2V0VGltZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YUxhYmVscy5wdXNoKGN1cnJlbnREYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAvL2RhdGFMYWJlbHMucHVzaChhY2NvdW50TGluZXNbaS0xXS5wY3RJbk1vbnRoKVxyXG4gICAgICAgICAgICAgICAgICAgIGhpc3RvcnkucHVzaChhY2NvdW50TGluZXNbaS0xXS5iYWxhbmNlKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RGF0ZSA9IGFjY291bnRMaW5lc1tpXS5kYXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaSA9PT0gYWNjb3VudExpbmVzLmxlbmd0aC0xICYmIGFjY291bnRMaW5lc1tpXS5kYXRlLmdldFRpbWUoKSA9PT0gY3VycmVudERhdGUuZ2V0VGltZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YUxhYmVscy5wdXNoKGN1cnJlbnREYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAvL2RhdGFMYWJlbHMucHVzaChhY2NvdW50TGluZXNbaS0xXS5wY3RJbk1vbnRoKVxyXG4gICAgICAgICAgICAgICAgICAgIGhpc3RvcnkucHVzaChhY2NvdW50TGluZXNbaS0xXS5iYWxhbmNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IGFjY291bnRMaW5lc1thY2NvdW50TGluZXMubGVuZ3RoLTFdLmRhdGU7XHJcbiAgICAgICAgY29uc3QgbWF4RGF5c09mTW9udGggPSBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSsxLCAwKS5nZXREYXRlKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJveFBsb3RzID0gZ2V0Qm94UGxvdHNGcm9tTGluZXMoYWxsQWNjb3VudExpbmVzKTtcclxuICAgICAgICBjb25zdCBib3hQbG90TGFiZWxzOiBEYXRlW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJveFBsb3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRheUluTW9udGggPSBNYXRoLnJvdW5kKFV0aWxNYXRoLm1hcChib3hQbG90c1tpXS5wY3RJbk1vbnRoLCAxLCAxMDAsIDEsIG1heERheXNPZk1vbnRoKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGVCb3hQbG90ID0gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRheUluTW9udGgpO1xyXG4gICAgICAgICAgICBib3hQbG90TGFiZWxzLnB1c2goZGF0ZUJveFBsb3QpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBhbGxMYWJlbHM6IERhdGVbXSA9IFsuLi5ib3hQbG90TGFiZWxzXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFMYWJlbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGFsbExhYmVscy5tYXAoKGQpID0+IGQuZ2V0VGltZSgpKS5pbmRleE9mKGRhdGFMYWJlbHNbaV0uZ2V0VGltZSgpKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGFsbExhYmVscy5wdXNoKGRhdGFMYWJlbHNbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFsbExhYmVscy5zb3J0KChhLCBiKSA9PiBhLmdldFRpbWUoKSAtIGIuZ2V0VGltZSgpKTtcclxuXHJcbiAgICAgICAgbGV0IGRhdGFzZXRzOiBJQ2hhcnREYXRhc2V0W10gPSBbXTtcclxuICAgICAgICBsZXQgZGF0YXNldDogSUNoYXJ0RGF0YXNldCA9IHtcclxuICAgICAgICAgICAgbGFiZWw6IFwiQmFsYW5jZVwiLFxyXG4gICAgICAgICAgICB5QXhpc0lEOiAneScsXHJcbiAgICAgICAgICAgIGRhdGE6IGhpc3RvcnkubWFwKChkYXRhLCBpZHgpID0+IHtyZXR1cm4ge3g6IGRhdGFMYWJlbHNbaWR4XS50b0xvY2FsZURhdGVTdHJpbmcoXCJmci1GUlwiKSwgeTogZGF0YX19KSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBDSEFSVF9DT0xPUlNbMF0sXHJcbiAgICAgICAgICAgIGZpbGw6IGZhbHNlLCAvL2ZpbGwgdW50aWwgcHJldmlvdXMgZGF0YXNldFxyXG4gICAgICAgICAgICBkYXRhbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICBhbmNob3I6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgYWxpZ246ICdib3R0b20nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGRhdGFzZXRzLnB1c2goZGF0YXNldCk7XHJcblxyXG4gICAgICAgIGRhdGFzZXQgPSB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIkZpcnN0IFF1YXJ0aWxlXCIsXHJcbiAgICAgICAgICAgIHlBeGlzSUQ6ICd5JyxcclxuICAgICAgICAgICAgZGF0YTogYm94UGxvdHMubWFwKChib3gsIGlkeCkgPT4ge3JldHVybiB7eDogYm94UGxvdExhYmVsc1tpZHhdLnRvTG9jYWxlRGF0ZVN0cmluZyhcImZyLUZSXCIpLCB5OiBib3guZmlyc3RRdWFydGlsZX19KSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBDSEFSVF9DT0xPUlNbMV0sXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBDSEFSVF9DT0xPUlNbMV0sXHJcbiAgICAgICAgICAgIHBvaW50UmFkaXVzOiAwLFxyXG4gICAgICAgICAgICBmaWxsOiBmYWxzZSwgLy9maWxsIHVudGlsIHByZXZpb3VzIGRhdGFzZXRcclxuICAgICAgICAgICAgZGF0YWxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgYW5jaG9yOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIGFsaWduOiAnYm90dG9tJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkYXRhc2V0cy5wdXNoKGRhdGFzZXQpO1xyXG5cclxuICAgICAgICBkYXRhc2V0ID0ge1xyXG4gICAgICAgICAgICBsYWJlbDogXCJUaGlyZCBRdWFydGlsZVwiLFxyXG4gICAgICAgICAgICB5QXhpc0lEOiAneScsXHJcbiAgICAgICAgICAgIGRhdGE6IGJveFBsb3RzLm1hcCgoYm94LCBpZHgpID0+IHtyZXR1cm4ge3g6IGJveFBsb3RMYWJlbHNbaWR4XS50b0xvY2FsZURhdGVTdHJpbmcoXCJmci1GUlwiKSwgeTogYm94LnRoaXJkUXVhcnRpbGV9fSksXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogQ0hBUlRfQ09MT1JTWzFdLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogQ0hBUlRfQ09MT1JTWzFdLFxyXG4gICAgICAgICAgICBwb2ludFJhZGl1czogMCxcclxuICAgICAgICAgICAgZmlsbDoge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiAnLTEnLCAvL2ZpbGwgdW50aWwgcHJldmlvdXMgZGF0YXNldFxyXG4gICAgICAgICAgICAgICAgYWJvdmU6ICdyZ2IoMjM5LCAyNTUsIDApJywgICAvLyBBcmVhIHdpbGwgYmUgcmVkIGFib3ZlIHRoZSBvcmlnaW5cclxuICAgICAgICAgICAgICAgIGJlbG93OiAncmdiKDAsIDAsIDI1NSknICAgIC8vIEFuZCBibHVlIGJlbG93IHRoZSBvcmlnaW5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGF0YWxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgYW5jaG9yOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIGFsaWduOiAnYm90dG9tJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkYXRhc2V0cy5wdXNoKGRhdGFzZXQpO1xyXG5cclxuICAgICAgICBsZXQgZGF0YVRvRGlzcGxheTogSUNoYXJ0RGF0YSA9IHtcclxuICAgICAgICAgICAgbGFiZWxzOiBhbGxMYWJlbHMubWFwKChkYXRlKSA9PiBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImZyLUZSXCIpKSxcclxuICAgICAgICAgICAgZGF0YXNldHM6IGRhdGFzZXRzLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHNldENoYXJ0RGF0YShkYXRhVG9EaXNwbGF5KTtcclxuXHJcbiAgICAgICAgbGV0IG9wdGlvbnM6IElDaGFydE9wdGlvbiA9IHtcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbnM6IGZhbHNlLFxyXG4gICAgICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgICAgICAgIHg6IHtcclxuICAgICAgICAgICAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnRGF0ZSdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeToge1xyXG4gICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdBbW91bnQnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwbHVnaW5zOiB7XHJcbiAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyBhcyBjb25zdCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJDb21wYXJpc29uIG9mIHRoZSBhY2NvdW50J3MgYmFsYW5jZVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGF0YWxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0Q2hhcnRPcHRpb24ob3B0aW9ucyk7XHJcblxyXG4gICB9LCBbYWNjb3VudExpbmVzLCBhbGxBY2NvdW50TGluZXNdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZS1jaGFydC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxMaW5lIHJlZj17Y2hhcnRSZWZlcmVuY2V9IG9wdGlvbnM9e2NoYXJ0T3B0aW9ufSBkYXRhPXtjaGFydERhdGF9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiQ2hhcnQiLCJDaGFydEpTIiwiTGluZWFyU2NhbGUiLCJQb2ludEVsZW1lbnQiLCJMaW5lRWxlbWVudCIsIkNhdGVnb3J5U2NhbGUiLCJUb29sdGlwIiwiVGl0bGUiLCJMZWdlbmQiLCJGaWxsZXIiLCJMaW5lIiwiQ0hBUlRfQ09MT1JTIiwiZ2V0Qm94UGxvdHNGcm9tTGluZXMiLCJVdGlsTWF0aCIsInJlZ2lzdGVyIiwiUXVhcnRpbGVIaXN0b3J5Q2hhcnQiLCJhY2NvdW50TGluZXMiLCJhbGxBY2NvdW50TGluZXMiLCJjaGFydE9wdGlvbiIsInNldENoYXJ0T3B0aW9uIiwicmVzcG9uc2l2ZSIsImFuaW1hdGlvbiIsInNjYWxlcyIsInBsdWdpbnMiLCJjaGFydERhdGEiLCJzZXRDaGFydERhdGEiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImNoYXJ0UmVmZXJlbmNlIiwiY2hhcnQiLCJjdXJyZW50IiwibGVuZ3RoIiwid2lkdGgiLCJjdHgiLCJjYW52YXMiLCJwYXJlbnRFbGVtZW50Iiwic3R5bGUiLCJyZXNpemUiLCJoZWlnaHQiLCJ1cGRhdGUiLCJkYXRhTGFiZWxzIiwiaGlzdG9yeSIsInB1c2giLCJkYXRlIiwiYmFsYW5jZSIsImN1cnJlbnREYXRlIiwiaSIsImdldFRpbWUiLCJtYXhEYXlzT2ZNb250aCIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImJveFBsb3RzIiwiYm94UGxvdExhYmVscyIsImRheUluTW9udGgiLCJNYXRoIiwicm91bmQiLCJtYXAiLCJwY3RJbk1vbnRoIiwiZGF0ZUJveFBsb3QiLCJhbGxMYWJlbHMiLCJkIiwiaW5kZXhPZiIsInNvcnQiLCJhIiwiYiIsImRhdGFzZXQiLCJsYWJlbCIsInlBeGlzSUQiLCJkYXRhIiwiaWR4IiwieCIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmaWxsIiwiZGF0YWxhYmVscyIsImFuY2hvciIsImFsaWduIiwiYm94IiwiZmlyc3RRdWFydGlsZSIsImJvcmRlckNvbG9yIiwicG9pbnRSYWRpdXMiLCJ0aGlyZFF1YXJ0aWxlIiwidGFyZ2V0IiwiYWJvdmUiLCJiZWxvdyIsImRhdGFUb0Rpc3BsYXkiLCJvcHRpb25zIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsImFuaW1hdGlvbnMiLCJiZWdpbkF0WmVybyIsInRpdGxlIiwiZGlzcGxheSIsInRleHQiLCJsZWdlbmQiLCJwb3NpdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Charts/QuartileHistoryChart.tsx\n"));

/***/ })

});