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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   QuartileHistoryChart: function() { return /* binding */ QuartileHistoryChart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chart.js */ \"(app-pages-browser)/./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-chartjs-2 */ \"(app-pages-browser)/./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var _ColorBank__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColorBank */ \"(app-pages-browser)/./components/Charts/ColorBank.ts\");\n/* harmony import */ var _Data_Bank__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Data/Bank */ \"(app-pages-browser)/./components/Data/Bank.ts\");\n/* harmony import */ var _Data_UtilMath__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Data/UtilMath */ \"(app-pages-browser)/./components/Data/UtilMath.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_5__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_5__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_5__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_5__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_5__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_5__.Filler, chart_js__WEBPACK_IMPORTED_MODULE_5__.Title, chart_js__WEBPACK_IMPORTED_MODULE_5__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_5__.Legend);\nfunction QuartileHistoryChart(param) {\n    let { accountLines, allAccountLines } = param;\n    _s();\n    const [chartOption, setChartOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        responsive: true,\n        animation: {},\n        scales: {},\n        plugins: {}\n    });\n    const [chartData, setChartData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        labels: [],\n        datasets: []\n    });\n    const chartReference = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (chartReference) {\n            const chart = chartReference.current;\n            if (chart && chartData.datasets.length > 0) {\n                var _chart_ctx_canvas_parentElement;\n                const width = ((_chart_ctx_canvas_parentElement = chart.ctx.canvas.parentElement) === null || _chart_ctx_canvas_parentElement === void 0 ? void 0 : _chart_ctx_canvas_parentElement.style.width) ? chart.ctx.canvas.width : 1370;\n                chart.resize(width, chart.canvas.height);\n                chart.update();\n            }\n        }\n    }, [\n        chartReference,\n        chartData\n    ]);\n    // Fill space between two lines: https://stackoverflow.com/questions/37866992/filling-area-between-two-lines-chart-js-v2\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const dataLabels = [];\n        const history = [];\n        debugger;\n        if (accountLines.length === 1) {\n            dataLabels.push(accountLines[0].date);\n            history.push(accountLines[0].balance);\n        } else if (accountLines.length > 1) {\n            let currentDate = accountLines[0].date;\n            const idxLastLine = accountLines.length - 1;\n            for(let i = 1; i < accountLines.length; i++){\n                if (accountLines[i].date.getTime() !== currentDate.getTime()) {\n                    dataLabels.push(currentDate);\n                    history.push(accountLines[i - 1].balance);\n                    currentDate = accountLines[i].date;\n                }\n            }\n            dataLabels.push(currentDate);\n            history.push(accountLines[accountLines.length - 1].balance);\n            for(let i = 1; i < accountLines.length; i++){\n                if (i < idxLastLine && accountLines[i].date.getTime() !== currentDate.getTime()) {\n                    dataLabels.push(currentDate);\n                    history.push(accountLines[i - 1].balance);\n                    currentDate = accountLines[i].date;\n                } else if (i === idxLastLine && accountLines[i].date.getTime() !== currentDate.getTime()) {\n                    dataLabels.push(currentDate);\n                    history.push(accountLines[i - 1].balance);\n                    currentDate = accountLines[i].date;\n                    // Push last line as well\n                    dataLabels.push(accountLines[i].date);\n                    history.push(accountLines[i].balance);\n                } else if (i === idxLastLine && accountLines[i].date.getTime() === currentDate.getTime()) {\n                    dataLabels.push(currentDate);\n                    history.push(accountLines[i - 1].balance);\n                }\n            }\n        }\n        const date = accountLines[accountLines.length - 1].date;\n        const maxDaysOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();\n        const boxPlots = (0,_Data_Bank__WEBPACK_IMPORTED_MODULE_3__.getBoxPlotsFromLines)(allAccountLines);\n        const boxPlotLabels = [];\n        for(let i = 0; i < boxPlots.length; i++){\n            const dayInMonth = Math.round(_Data_UtilMath__WEBPACK_IMPORTED_MODULE_4__.UtilMath.map(boxPlots[i].pctInMonth, 1, 100, 1, maxDaysOfMonth));\n            const dateBoxPlot = new Date(date.getFullYear(), date.getMonth(), dayInMonth);\n            boxPlotLabels.push(dateBoxPlot);\n        }\n        const allLabels = [\n            ...boxPlotLabels\n        ];\n        for(let i = 0; i < dataLabels.length; i++){\n            if (allLabels.map((d)=>d.getTime()).indexOf(dataLabels[i].getTime()) === -1) {\n                allLabels.push(dataLabels[i]);\n            }\n        }\n        allLabels.sort((a, b)=>a.getTime() - b.getTime());\n        let datasets = [];\n        let dataset = {\n            label: \"Balance\",\n            yAxisID: \"y\",\n            data: history.map((data, idx)=>{\n                return {\n                    x: dataLabels[idx].toLocaleDateString(\"fr-FR\"),\n                    y: data\n                };\n            }),\n            backgroundColor: _ColorBank__WEBPACK_IMPORTED_MODULE_2__.CHART_COLORS[0],\n            fill: false,\n            datalabels: {\n                anchor: \"center\",\n                align: \"bottom\"\n            }\n        };\n        datasets.push(dataset);\n        dataset = {\n            label: \"First Quartile\",\n            yAxisID: \"y\",\n            data: boxPlots.map((box, idx)=>{\n                return {\n                    x: boxPlotLabels[idx].toLocaleDateString(\"fr-FR\"),\n                    y: box.firstQuartile\n                };\n            }),\n            backgroundColor: \"rgb(239, 248, 255)\",\n            borderColor: \"rgb(239, 248, 255)\",\n            pointRadius: 0,\n            fill: false,\n            datalabels: {\n                anchor: \"center\",\n                align: \"bottom\"\n            }\n        };\n        datasets.push(dataset);\n        dataset = {\n            label: \"Third Quartile\",\n            yAxisID: \"y\",\n            data: boxPlots.map((box, idx)=>{\n                return {\n                    x: boxPlotLabels[idx].toLocaleDateString(\"fr-FR\"),\n                    y: box.thirdQuartile\n                };\n            }),\n            backgroundColor: \"rgb(239, 248, 255)\",\n            borderColor: \"rgb(239, 248, 255)\",\n            pointRadius: 0,\n            fill: {\n                target: \"-1\",\n                above: \"rgb(239, 248, 255)\"\n            },\n            datalabels: {\n                anchor: \"center\",\n                align: \"bottom\"\n            }\n        };\n        datasets.push(dataset);\n        let dataToDisplay = {\n            labels: allLabels.map((date)=>date.toLocaleDateString(\"fr-FR\")),\n            datasets: datasets\n        };\n        setChartData(dataToDisplay);\n        let options = {\n            responsive: true,\n            maintainAspectRatio: false,\n            animations: false,\n            scales: {\n                x: {\n                    beginAtZero: true,\n                    title: {\n                        display: true,\n                        text: \"Date\"\n                    }\n                },\n                y: {\n                    beginAtZero: true,\n                    title: {\n                        display: true,\n                        text: \"Amount\"\n                    }\n                }\n            },\n            plugins: {\n                legend: {\n                    position: \"top\"\n                },\n                title: {\n                    display: true,\n                    text: \"Comparison of the account's balance\"\n                },\n                datalabels: {\n                    display: false\n                }\n            }\n        };\n        setChartOption(options);\n    }, [\n        accountLines,\n        allAccountLines\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"time-chart-wrapper\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__.Line, {\n            ref: chartReference,\n            options: chartOption,\n            data: chartData\n        }, void 0, false, {\n            fileName: \"D:\\\\projet\\\\budget-tracker-nextjs\\\\components\\\\Charts\\\\QuartileHistoryChart.tsx\",\n            lineNumber: 244,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\projet\\\\budget-tracker-nextjs\\\\components\\\\Charts\\\\QuartileHistoryChart.tsx\",\n        lineNumber: 243,\n        columnNumber: 9\n    }, this);\n}\n_s(QuartileHistoryChart, \"FoTWsYANwTxhQBbJG1664sLH0eo=\");\n_c = QuartileHistoryChart;\nvar _c;\n$RefreshReg$(_c, \"QuartileHistoryChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ2hhcnRzL1F1YXJ0aWxlSGlzdG9yeUNoYXJ0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFvRDtBQVdoQztBQUNtQjtBQUNJO0FBQ3VCO0FBQ3RCO0FBZ0M1Q0ksMkNBQU9BLENBQUNhLFFBQVEsQ0FDWlosaURBQVdBLEVBQ1hDLGtEQUFZQSxFQUNaQyxpREFBV0EsRUFDWEMsbURBQWFBLEVBQ2JJLDRDQUFNQSxFQUNORiwyQ0FBS0EsRUFDTEQsNkNBQU9BLEVBQ1BFLDRDQUFNQTtBQUdILFNBQVNPLHFCQUFxQixLQUdmO1FBSGUsRUFDakNDLFlBQVksRUFDWkMsZUFBZSxFQUNHLEdBSGU7O0lBS2pDLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHcEIsK0NBQVFBLENBQWU7UUFBQ3FCLFlBQVk7UUFBTUMsV0FBVyxDQUFDO1FBQUdDLFFBQVEsQ0FBQztRQUFHQyxTQUFTLENBQUM7SUFBQztJQUN0SCxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBRzFCLCtDQUFRQSxDQUFhO1FBQUMyQixRQUFRLEVBQUU7UUFBRUMsVUFBVSxFQUFFO0lBQUE7SUFFaEYsTUFBTUMsaUJBQWlCOUIsNkNBQU1BLENBQUM7SUFFOUJELGdEQUFTQSxDQUFDO1FBQ04sSUFBSStCLGdCQUFnQjtZQUNoQixNQUFNQyxRQUFRRCxlQUFlRSxPQUFPO1lBQ3BDLElBQUlELFNBQVNMLFVBQVVHLFFBQVEsQ0FBQ0ksTUFBTSxHQUFHLEdBQUc7b0JBQzFCRjtnQkFBZCxNQUFNRyxRQUFRSCxFQUFBQSxrQ0FBQUEsTUFBTUksR0FBRyxDQUFDQyxNQUFNLENBQUNDLGFBQWEsY0FBOUJOLHNEQUFBQSxnQ0FBZ0NPLEtBQUssQ0FBQ0osS0FBSyxJQUFHSCxNQUFNSSxHQUFHLENBQUNDLE1BQU0sQ0FBQ0YsS0FBSyxHQUFHO2dCQUNyRkgsTUFBTVEsTUFBTSxDQUFDTCxPQUFPSCxNQUFNSyxNQUFNLENBQUNJLE1BQU07Z0JBQ3ZD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QXhFLFNBQVM7Z0JBQ0x5RSxRQUFRO29CQUNMQyxVQUFVO2dCQUNiO2dCQUNBSixPQUFPO29CQUNIQyxTQUFTO29CQUNUQyxNQUFNO2dCQUNWO2dCQUNBakIsWUFBWTtvQkFDUmdCLFNBQVM7Z0JBQ2I7WUFDSjtRQUNKO1FBQ0EzRSxlQUFlc0U7SUFFcEIsR0FBRztRQUFDekU7UUFBY0M7S0FBZ0I7SUFFakMscUJBQ0ksOERBQUNpRjtRQUFJQyxXQUFVO2tCQUNYLDRFQUFDekYsaURBQUlBO1lBQUMwRixLQUFLeEU7WUFBZ0I2RCxTQUFTdkU7WUFBYXFELE1BQU0vQzs7Ozs7Ozs7Ozs7QUFHbkU7R0E1TGdCVDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NoYXJ0cy9RdWFydGlsZUhpc3RvcnlDaGFydC50c3g/YzdlNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICAgIENoYXJ0IGFzIENoYXJ0SlMsXHJcbiAgICBMaW5lYXJTY2FsZSxcclxuICAgIFBvaW50RWxlbWVudCxcclxuICAgIExpbmVFbGVtZW50LFxyXG4gICAgQ2F0ZWdvcnlTY2FsZSxcclxuICAgIFRvb2x0aXAsXHJcbiAgICBUaXRsZSxcclxuICAgIExlZ2VuZCxcclxuICAgIEZpbGxlclxyXG4gIH0gZnJvbSAnY2hhcnQuanMnO1xyXG5pbXBvcnQgeyBMaW5lIH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJztcclxuaW1wb3J0IHsgQ0hBUlRfQ09MT1JTIH0gZnJvbSBcIi4vQ29sb3JCYW5rXCI7XHJcbmltcG9ydCB7IElBY2NvdW50TGluZSwgZ2V0Qm94UGxvdHNGcm9tTGluZXMgfSBmcm9tIFwiLi4vRGF0YS9CYW5rXCI7XHJcbmltcG9ydCB7IFV0aWxNYXRoIH0gZnJvbSBcIi4uL0RhdGEvVXRpbE1hdGhcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW5wdXRSYW5nZVByb3BzIHtcclxuICAgIGFjY291bnRMaW5lczogSUFjY291bnRMaW5lW107XHJcbiAgICBhbGxBY2NvdW50TGluZXM6IElBY2NvdW50TGluZVtdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDaGFydERhdGFzZXQge1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxuICAgIHlBeGlzSUQ/OiBzdHJpbmc7XHJcbiAgICBkYXRhOiBhbnk7Ly9udW1iZXJbXTtcclxuICAgIHBvaW50UmFkaXVzPzogbnVtYmVyO1xyXG4gICAgZmlsbD86IGFueTtcclxuICAgIGJvcmRlckNvbG9yPzogc3RyaW5nO1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XHJcbiAgICBkYXRhbGFiZWxzOiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNoYXJ0RGF0YSB7XHJcbiAgICBsYWJlbHM6IHN0cmluZ1tdO1xyXG4gICAgZGF0YXNldHM6IElDaGFydERhdGFzZXRbXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ2hhcnRPcHRpb24ge1xyXG4gICAgcmVzcG9uc2l2ZTogYm9vbGVhbjtcclxuICAgIG1haW50YWluQXNwZWN0UmF0aW8/OiBib29sZWFuO1xyXG4gICAgc2NhbGVzOiBhbnk7XHJcbiAgICBhbmltYXRpb24/OiBhbnk7XHJcbiAgICBhbmltYXRpb25zPzogYW55O1xyXG4gICAgcGx1Z2luczogYW55O1xyXG59XHJcblxyXG5DaGFydEpTLnJlZ2lzdGVyKFxyXG4gICAgTGluZWFyU2NhbGUsXHJcbiAgICBQb2ludEVsZW1lbnQsXHJcbiAgICBMaW5lRWxlbWVudCxcclxuICAgIENhdGVnb3J5U2NhbGUsXHJcbiAgICBGaWxsZXIsXHJcbiAgICBUaXRsZSxcclxuICAgIFRvb2x0aXAsXHJcbiAgICBMZWdlbmRcclxuKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBRdWFydGlsZUhpc3RvcnlDaGFydCh7XHJcbiAgICBhY2NvdW50TGluZXMsXHJcbiAgICBhbGxBY2NvdW50TGluZXNcclxuICAgIH06IElucHV0UmFuZ2VQcm9wcyk6IEpTWC5FbGVtZW50IHtcclxuXHJcbiAgICBjb25zdCBbY2hhcnRPcHRpb24sIHNldENoYXJ0T3B0aW9uXSA9IHVzZVN0YXRlPElDaGFydE9wdGlvbj4oe3Jlc3BvbnNpdmU6IHRydWUsIGFuaW1hdGlvbjoge30sIHNjYWxlczoge30sIHBsdWdpbnM6IHt9fSk7XHJcbiAgICBjb25zdCBbY2hhcnREYXRhLCBzZXRDaGFydERhdGFdID0gdXNlU3RhdGU8SUNoYXJ0RGF0YT4oe2xhYmVsczogW10sIGRhdGFzZXRzOiBbXX0pO1xyXG5cclxuICAgIGNvbnN0IGNoYXJ0UmVmZXJlbmNlID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNoYXJ0UmVmZXJlbmNlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoYXJ0ID0gY2hhcnRSZWZlcmVuY2UuY3VycmVudCBhcyBDaGFydEpTfG51bGw7XHJcbiAgICAgICAgICAgIGlmIChjaGFydCAmJiBjaGFydERhdGEuZGF0YXNldHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBjaGFydC5jdHguY2FudmFzLnBhcmVudEVsZW1lbnQ/LnN0eWxlLndpZHRoID8gY2hhcnQuY3R4LmNhbnZhcy53aWR0aCA6IDEzNzA7XHJcbiAgICAgICAgICAgICAgICBjaGFydC5yZXNpemUod2lkdGgsIGNoYXJ0LmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgY2hhcnQudXBkYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFtjaGFydFJlZmVyZW5jZSwgY2hhcnREYXRhXSk7XHJcblxyXG4gICAgLy8gRmlsbCBzcGFjZSBiZXR3ZWVuIHR3byBsaW5lczogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzc4NjY5OTIvZmlsbGluZy1hcmVhLWJldHdlZW4tdHdvLWxpbmVzLWNoYXJ0LWpzLXYyXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBkYXRhTGFiZWxzOiBEYXRlW10gPSBbXTtcclxuICAgICAgICBjb25zdCBoaXN0b3J5OiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICBpZiAoYWNjb3VudExpbmVzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICBkYXRhTGFiZWxzLnB1c2goYWNjb3VudExpbmVzWzBdLmRhdGUpO1xyXG4gICAgICAgICAgICBoaXN0b3J5LnB1c2goYWNjb3VudExpbmVzWzBdLmJhbGFuY2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChhY2NvdW50TGluZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudERhdGUgPSBhY2NvdW50TGluZXNbMF0uZGF0ZTtcclxuICAgICAgICAgICAgY29uc3QgaWR4TGFzdExpbmUgPSBhY2NvdW50TGluZXMubGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPCBhY2NvdW50TGluZXMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmIChhY2NvdW50TGluZXNbaV0uZGF0ZS5nZXRUaW1lKCkgIT09IGN1cnJlbnREYXRlLmdldFRpbWUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFMYWJlbHMucHVzaChjdXJyZW50RGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5wdXNoKGFjY291bnRMaW5lc1tpLTFdLmJhbGFuY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnREYXRlID0gYWNjb3VudExpbmVzW2ldLmRhdGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRhdGFMYWJlbHMucHVzaChjdXJyZW50RGF0ZSk7XHJcbiAgICAgICAgICAgIGhpc3RvcnkucHVzaChhY2NvdW50TGluZXNbYWNjb3VudExpbmVzLmxlbmd0aCAtIDFdLmJhbGFuY2UpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAxOyBpIDwgYWNjb3VudExpbmVzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA8IGlkeExhc3RMaW5lICYmIGFjY291bnRMaW5lc1tpXS5kYXRlLmdldFRpbWUoKSAhPT0gY3VycmVudERhdGUuZ2V0VGltZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YUxhYmVscy5wdXNoKGN1cnJlbnREYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LnB1c2goYWNjb3VudExpbmVzW2ktMV0uYmFsYW5jZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudERhdGUgPSBhY2NvdW50TGluZXNbaV0uZGF0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGkgPT09IGlkeExhc3RMaW5lICYmIGFjY291bnRMaW5lc1tpXS5kYXRlLmdldFRpbWUoKSAhPT0gY3VycmVudERhdGUuZ2V0VGltZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YUxhYmVscy5wdXNoKGN1cnJlbnREYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LnB1c2goYWNjb3VudExpbmVzW2ktMV0uYmFsYW5jZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudERhdGUgPSBhY2NvdW50TGluZXNbaV0uZGF0ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUHVzaCBsYXN0IGxpbmUgYXMgd2VsbFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFMYWJlbHMucHVzaChhY2NvdW50TGluZXNbaV0uZGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5wdXNoKGFjY291bnRMaW5lc1tpXS5iYWxhbmNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGkgPT09IGlkeExhc3RMaW5lICYmIGFjY291bnRMaW5lc1tpXS5kYXRlLmdldFRpbWUoKSA9PT0gY3VycmVudERhdGUuZ2V0VGltZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YUxhYmVscy5wdXNoKGN1cnJlbnREYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LnB1c2goYWNjb3VudExpbmVzW2ktMV0uYmFsYW5jZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBhY2NvdW50TGluZXNbYWNjb3VudExpbmVzLmxlbmd0aC0xXS5kYXRlO1xyXG4gICAgICAgIGNvbnN0IG1heERheXNPZk1vbnRoID0gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCkrMSwgMCkuZ2V0RGF0ZSgpO1xyXG5cclxuICAgICAgICBjb25zdCBib3hQbG90cyA9IGdldEJveFBsb3RzRnJvbUxpbmVzKGFsbEFjY291bnRMaW5lcyk7XHJcbiAgICAgICAgY29uc3QgYm94UGxvdExhYmVsczogRGF0ZVtdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3hQbG90cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBkYXlJbk1vbnRoID0gTWF0aC5yb3VuZChVdGlsTWF0aC5tYXAoYm94UGxvdHNbaV0ucGN0SW5Nb250aCwgMSwgMTAwLCAxLCBtYXhEYXlzT2ZNb250aCkpO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRlQm94UGxvdCA9IG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXlJbk1vbnRoKTtcclxuICAgICAgICAgICAgYm94UGxvdExhYmVscy5wdXNoKGRhdGVCb3hQbG90KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYWxsTGFiZWxzOiBEYXRlW10gPSBbLi4uYm94UGxvdExhYmVsc107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhTGFiZWxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChhbGxMYWJlbHMubWFwKChkKSA9PiBkLmdldFRpbWUoKSkuaW5kZXhPZihkYXRhTGFiZWxzW2ldLmdldFRpbWUoKSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBhbGxMYWJlbHMucHVzaChkYXRhTGFiZWxzW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhbGxMYWJlbHMuc29ydCgoYSwgYikgPT4gYS5nZXRUaW1lKCkgLSBiLmdldFRpbWUoKSk7XHJcblxyXG4gICAgICAgIGxldCBkYXRhc2V0czogSUNoYXJ0RGF0YXNldFtdID0gW107XHJcbiAgICAgICAgbGV0IGRhdGFzZXQ6IElDaGFydERhdGFzZXQgPSB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIkJhbGFuY2VcIixcclxuICAgICAgICAgICAgeUF4aXNJRDogJ3knLFxyXG4gICAgICAgICAgICBkYXRhOiBoaXN0b3J5Lm1hcCgoZGF0YSwgaWR4KSA9PiB7cmV0dXJuIHt4OiBkYXRhTGFiZWxzW2lkeF0udG9Mb2NhbGVEYXRlU3RyaW5nKFwiZnItRlJcIiksIHk6IGRhdGF9fSksXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogQ0hBUlRfQ09MT1JTWzBdLFxyXG4gICAgICAgICAgICBmaWxsOiBmYWxzZSwgLy9maWxsIHVudGlsIHByZXZpb3VzIGRhdGFzZXRcclxuICAgICAgICAgICAgZGF0YWxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgYW5jaG9yOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIGFsaWduOiAnYm90dG9tJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkYXRhc2V0cy5wdXNoKGRhdGFzZXQpO1xyXG5cclxuICAgICAgICBkYXRhc2V0ID0ge1xyXG4gICAgICAgICAgICBsYWJlbDogXCJGaXJzdCBRdWFydGlsZVwiLFxyXG4gICAgICAgICAgICB5QXhpc0lEOiAneScsXHJcbiAgICAgICAgICAgIGRhdGE6IGJveFBsb3RzLm1hcCgoYm94LCBpZHgpID0+IHtyZXR1cm4ge3g6IGJveFBsb3RMYWJlbHNbaWR4XS50b0xvY2FsZURhdGVTdHJpbmcoXCJmci1GUlwiKSwgeTogYm94LmZpcnN0UXVhcnRpbGV9fSksXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigyMzksIDI0OCwgMjU1KScsXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiKDIzOSwgMjQ4LCAyNTUpJyxcclxuICAgICAgICAgICAgcG9pbnRSYWRpdXM6IDAsXHJcbiAgICAgICAgICAgIGZpbGw6IGZhbHNlLCAvL2ZpbGwgdW50aWwgcHJldmlvdXMgZGF0YXNldFxyXG4gICAgICAgICAgICBkYXRhbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICBhbmNob3I6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgYWxpZ246ICdib3R0b20nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGRhdGFzZXRzLnB1c2goZGF0YXNldCk7XHJcblxyXG4gICAgICAgIGRhdGFzZXQgPSB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIlRoaXJkIFF1YXJ0aWxlXCIsXHJcbiAgICAgICAgICAgIHlBeGlzSUQ6ICd5JyxcclxuICAgICAgICAgICAgZGF0YTogYm94UGxvdHMubWFwKChib3gsIGlkeCkgPT4ge3JldHVybiB7eDogYm94UGxvdExhYmVsc1tpZHhdLnRvTG9jYWxlRGF0ZVN0cmluZyhcImZyLUZSXCIpLCB5OiBib3gudGhpcmRRdWFydGlsZX19KSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDIzOSwgMjQ4LCAyNTUpJyxcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2IoMjM5LCAyNDgsIDI1NSknLFxyXG4gICAgICAgICAgICBwb2ludFJhZGl1czogMCxcclxuICAgICAgICAgICAgZmlsbDoge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiAnLTEnLCAvL2ZpbGwgdW50aWwgcHJldmlvdXMgZGF0YXNldFxyXG4gICAgICAgICAgICAgICAgYWJvdmU6ICdyZ2IoMjM5LCAyNDgsIDI1NSknLCAgIC8vIEFyZWEgd2lsbCBiZSByZWQgYWJvdmUgdGhlIG9yaWdpblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkYXRhbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICBhbmNob3I6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgYWxpZ246ICdib3R0b20nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGRhdGFzZXRzLnB1c2goZGF0YXNldCk7XHJcblxyXG4gICAgICAgIGxldCBkYXRhVG9EaXNwbGF5OiBJQ2hhcnREYXRhID0ge1xyXG4gICAgICAgICAgICBsYWJlbHM6IGFsbExhYmVscy5tYXAoKGRhdGUpID0+IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZnItRlJcIikpLFxyXG4gICAgICAgICAgICBkYXRhc2V0czogZGF0YXNldHMsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgc2V0Q2hhcnREYXRhKGRhdGFUb0Rpc3BsYXkpO1xyXG5cclxuICAgICAgICBsZXQgb3B0aW9uczogSUNoYXJ0T3B0aW9uID0ge1xyXG4gICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcclxuICAgICAgICAgICAgYW5pbWF0aW9uczogZmFsc2UsXHJcbiAgICAgICAgICAgIHNjYWxlczoge1xyXG4gICAgICAgICAgICAgICAgeDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdEYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0Ftb3VudCdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBsdWdpbnM6IHtcclxuICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnIGFzIGNvbnN0LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkNvbXBhcmlzb24gb2YgdGhlIGFjY291bnQncyBiYWxhbmNlXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRDaGFydE9wdGlvbihvcHRpb25zKTtcclxuXHJcbiAgIH0sIFthY2NvdW50TGluZXMsIGFsbEFjY291bnRMaW5lc10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lLWNoYXJ0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPExpbmUgcmVmPXtjaGFydFJlZmVyZW5jZX0gb3B0aW9ucz17Y2hhcnRPcHRpb259IGRhdGE9e2NoYXJ0RGF0YX0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICApXHJcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJDaGFydCIsIkNoYXJ0SlMiLCJMaW5lYXJTY2FsZSIsIlBvaW50RWxlbWVudCIsIkxpbmVFbGVtZW50IiwiQ2F0ZWdvcnlTY2FsZSIsIlRvb2x0aXAiLCJUaXRsZSIsIkxlZ2VuZCIsIkZpbGxlciIsIkxpbmUiLCJDSEFSVF9DT0xPUlMiLCJnZXRCb3hQbG90c0Zyb21MaW5lcyIsIlV0aWxNYXRoIiwicmVnaXN0ZXIiLCJRdWFydGlsZUhpc3RvcnlDaGFydCIsImFjY291bnRMaW5lcyIsImFsbEFjY291bnRMaW5lcyIsImNoYXJ0T3B0aW9uIiwic2V0Q2hhcnRPcHRpb24iLCJyZXNwb25zaXZlIiwiYW5pbWF0aW9uIiwic2NhbGVzIiwicGx1Z2lucyIsImNoYXJ0RGF0YSIsInNldENoYXJ0RGF0YSIsImxhYmVscyIsImRhdGFzZXRzIiwiY2hhcnRSZWZlcmVuY2UiLCJjaGFydCIsImN1cnJlbnQiLCJsZW5ndGgiLCJ3aWR0aCIsImN0eCIsImNhbnZhcyIsInBhcmVudEVsZW1lbnQiLCJzdHlsZSIsInJlc2l6ZSIsImhlaWdodCIsInVwZGF0ZSIsImRhdGFMYWJlbHMiLCJoaXN0b3J5IiwicHVzaCIsImRhdGUiLCJiYWxhbmNlIiwiY3VycmVudERhdGUiLCJpZHhMYXN0TGluZSIsImkiLCJnZXRUaW1lIiwibWF4RGF5c09mTW9udGgiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImdldERhdGUiLCJib3hQbG90cyIsImJveFBsb3RMYWJlbHMiLCJkYXlJbk1vbnRoIiwiTWF0aCIsInJvdW5kIiwibWFwIiwicGN0SW5Nb250aCIsImRhdGVCb3hQbG90IiwiYWxsTGFiZWxzIiwiZCIsImluZGV4T2YiLCJzb3J0IiwiYSIsImIiLCJkYXRhc2V0IiwibGFiZWwiLCJ5QXhpc0lEIiwiZGF0YSIsImlkeCIsIngiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ5IiwiYmFja2dyb3VuZENvbG9yIiwiZmlsbCIsImRhdGFsYWJlbHMiLCJhbmNob3IiLCJhbGlnbiIsImJveCIsImZpcnN0UXVhcnRpbGUiLCJib3JkZXJDb2xvciIsInBvaW50UmFkaXVzIiwidGhpcmRRdWFydGlsZSIsInRhcmdldCIsImFib3ZlIiwiZGF0YVRvRGlzcGxheSIsIm9wdGlvbnMiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwiYW5pbWF0aW9ucyIsImJlZ2luQXRaZXJvIiwidGl0bGUiLCJkaXNwbGF5IiwidGV4dCIsImxlZ2VuZCIsInBvc2l0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Charts/QuartileHistoryChart.tsx\n"));

/***/ })

});