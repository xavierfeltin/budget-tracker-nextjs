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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   QuartileHistoryChart: function() { return /* binding */ QuartileHistoryChart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chart.js */ \"(app-pages-browser)/./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-chartjs-2 */ \"(app-pages-browser)/./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var _ColorBank__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColorBank */ \"(app-pages-browser)/./components/Charts/ColorBank.ts\");\n/* harmony import */ var _Data_Bank__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Data/Bank */ \"(app-pages-browser)/./components/Data/Bank.ts\");\n/* harmony import */ var _Data_UtilMath__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Data/UtilMath */ \"(app-pages-browser)/./components/Data/UtilMath.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_5__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_5__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_5__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_5__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_5__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_5__.Filler, chart_js__WEBPACK_IMPORTED_MODULE_5__.Title, chart_js__WEBPACK_IMPORTED_MODULE_5__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_5__.Legend);\nfunction QuartileHistoryChart(param) {\n    let { accountLines, allAccountLines } = param;\n    _s();\n    const [chartOption, setChartOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        responsive: true,\n        animation: {},\n        scales: {},\n        plugins: {}\n    });\n    const [chartData, setChartData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        labels: [],\n        datasets: []\n    });\n    const chartReference = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (chartReference) {\n            const chart = chartReference.current;\n            if (chart && chartData.datasets.length > 0) {\n                var _chart_ctx_canvas_parentElement;\n                const width = ((_chart_ctx_canvas_parentElement = chart.ctx.canvas.parentElement) === null || _chart_ctx_canvas_parentElement === void 0 ? void 0 : _chart_ctx_canvas_parentElement.style.width) ? chart.ctx.canvas.width : 1370;\n                chart.resize(width, chart.canvas.height);\n                chart.update();\n            }\n        }\n    }, [\n        chartReference,\n        chartData\n    ]);\n    // Fill space between two lines: https://stackoverflow.com/questions/37866992/filling-area-between-two-lines-chart-js-v2\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const dataLabels = [];\n        const history = [];\n        debugger;\n        if (accountLines.length === 1) {\n            dataLabels.push(accountLines[0].date);\n            history.push(accountLines[0].balance);\n        } else if (accountLines.length > 1) {\n            let currentDate = accountLines[0].date;\n            for(let i = 1; i < accountLines.length; i++){\n                if (i < accountLines.length - 1 && accountLines[i].date.getTime() !== currentDate.getTime()) {\n                    dataLabels.push(currentDate);\n                    history.push(accountLines[i - 1].balance);\n                    currentDate = accountLines[i].date;\n                }\n                if (i === accountLines.length - 1 && accountLines[i].date.getTime() !== currentDate.getTime()) {\n                    dataLabels.push(currentDate);\n                    history.push(accountLines[i - 1].balance);\n                    currentDate = accountLines[i].date;\n                } else if (i === accountLines.length - 1 && accountLines[i].date.getTime() === currentDate.getTime()) {\n                    dataLabels.push(currentDate);\n                    history.push(accountLines[i - 1].balance);\n                }\n            }\n        }\n        const date = accountLines[accountLines.length - 1].date;\n        const maxDaysOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();\n        const boxPlots = (0,_Data_Bank__WEBPACK_IMPORTED_MODULE_3__.getBoxPlotsFromLines)(allAccountLines);\n        const boxPlotLabels = [];\n        for(let i = 0; i < boxPlots.length; i++){\n            const dayInMonth = Math.round(_Data_UtilMath__WEBPACK_IMPORTED_MODULE_4__.UtilMath.map(boxPlots[i].pctInMonth, 1, 100, 1, maxDaysOfMonth));\n            const dateBoxPlot = new Date(date.getFullYear(), date.getMonth(), dayInMonth);\n            boxPlotLabels.push(dateBoxPlot);\n        }\n        const allLabels = [\n            ...boxPlotLabels\n        ];\n        for(let i = 0; i < dataLabels.length; i++){\n            if (allLabels.map((d)=>d.getTime()).indexOf(dataLabels[i].getTime()) === -1) {\n                allLabels.push(dataLabels[i]);\n            }\n        }\n        allLabels.sort((a, b)=>a.getTime() - b.getTime());\n        let datasets = [];\n        let dataset = {\n            label: \"Balance\",\n            yAxisID: \"y\",\n            data: history.map((data, idx)=>{\n                return {\n                    x: dataLabels[idx].toLocaleDateString(\"fr-FR\"),\n                    y: data\n                };\n            }),\n            backgroundColor: _ColorBank__WEBPACK_IMPORTED_MODULE_2__.CHART_COLORS[0],\n            fill: false,\n            datalabels: {\n                anchor: \"center\",\n                align: \"bottom\"\n            }\n        };\n        datasets.push(dataset);\n        dataset = {\n            label: \"First Quartile\",\n            yAxisID: \"y\",\n            data: boxPlots.map((box, idx)=>{\n                return {\n                    x: boxPlotLabels[idx].toLocaleDateString(\"fr-FR\"),\n                    y: box.firstQuartile\n                };\n            }),\n            backgroundColor: \"rgb(239, 248, 255)\",\n            borderColor: \"rgb(239, 248, 255)\",\n            pointRadius: 0,\n            fill: false,\n            datalabels: {\n                anchor: \"center\",\n                align: \"bottom\"\n            }\n        };\n        datasets.push(dataset);\n        dataset = {\n            label: \"Third Quartile\",\n            yAxisID: \"y\",\n            data: boxPlots.map((box, idx)=>{\n                return {\n                    x: boxPlotLabels[idx].toLocaleDateString(\"fr-FR\"),\n                    y: box.thirdQuartile\n                };\n            }),\n            backgroundColor: \"rgb(239, 248, 255)\",\n            borderColor: \"rgb(239, 248, 255)\",\n            pointRadius: 0,\n            fill: {\n                target: \"-1\",\n                above: \"rgb(239, 248, 255)\"\n            },\n            datalabels: {\n                anchor: \"center\",\n                align: \"bottom\"\n            }\n        };\n        datasets.push(dataset);\n        let dataToDisplay = {\n            labels: allLabels.map((date)=>date.toLocaleDateString(\"fr-FR\")),\n            datasets: datasets\n        };\n        setChartData(dataToDisplay);\n        let options = {\n            responsive: true,\n            maintainAspectRatio: false,\n            animations: false,\n            scales: {\n                x: {\n                    beginAtZero: true,\n                    title: {\n                        display: true,\n                        text: \"Date\"\n                    }\n                },\n                y: {\n                    beginAtZero: true,\n                    title: {\n                        display: true,\n                        text: \"Amount\"\n                    }\n                }\n            },\n            plugins: {\n                legend: {\n                    position: \"top\"\n                },\n                title: {\n                    display: true,\n                    text: \"Comparison of the account's balance\"\n                },\n                datalabels: {\n                    display: false\n                }\n            }\n        };\n        setChartOption(options);\n    }, [\n        accountLines,\n        allAccountLines\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"time-chart-wrapper\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__.Line, {\n            ref: chartReference,\n            options: chartOption,\n            data: chartData\n        }, void 0, false, {\n            fileName: \"D:\\\\projet\\\\budget-tracker-nextjs\\\\components\\\\Charts\\\\QuartileHistoryChart.tsx\",\n            lineNumber: 226,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\projet\\\\budget-tracker-nextjs\\\\components\\\\Charts\\\\QuartileHistoryChart.tsx\",\n        lineNumber: 225,\n        columnNumber: 9\n    }, this);\n}\n_s(QuartileHistoryChart, \"FoTWsYANwTxhQBbJG1664sLH0eo=\");\n_c = QuartileHistoryChart;\nvar _c;\n$RefreshReg$(_c, \"QuartileHistoryChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ2hhcnRzL1F1YXJ0aWxlSGlzdG9yeUNoYXJ0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFvRDtBQVdoQztBQUNtQjtBQUNJO0FBQ3VCO0FBQ3RCO0FBZ0M1Q0ksMkNBQU9BLENBQUNhLFFBQVEsQ0FDWlosaURBQVdBLEVBQ1hDLGtEQUFZQSxFQUNaQyxpREFBV0EsRUFDWEMsbURBQWFBLEVBQ2JJLDRDQUFNQSxFQUNORiwyQ0FBS0EsRUFDTEQsNkNBQU9BLEVBQ1BFLDRDQUFNQTtBQUdILFNBQVNPLHFCQUFxQixLQUdmO1FBSGUsRUFDakNDLFlBQVksRUFDWkMsZUFBZSxFQUNHLEdBSGU7O0lBS2pDLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHcEIsK0NBQVFBLENBQWU7UUFBQ3FCLFlBQVk7UUFBTUMsV0FBVyxDQUFDO1FBQUdDLFFBQVEsQ0FBQztRQUFHQyxTQUFTLENBQUM7SUFBQztJQUN0SCxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBRzFCLCtDQUFRQSxDQUFhO1FBQUMyQixRQUFRLEVBQUU7UUFBRUMsVUFBVSxFQUFFO0lBQUE7SUFFaEYsTUFBTUMsaUJBQWlCOUIsNkNBQU1BLENBQUM7SUFFOUJELGdEQUFTQSxDQUFDO1FBQ04sSUFBSStCLGdCQUFnQjtZQUNoQixNQUFNQyxRQUFRRCxlQUFlRSxPQUFPO1lBQ3BDLElBQUlELFNBQVNMLFVBQVVHLFFBQVEsQ0FBQ0ksTUFBTSxHQUFHLEdBQUc7b0JBQzFCRjtnQkFBZCxNQUFNRyxRQUFRSCxFQUFBQSxrQ0FBQUEsTUFBTUksR0FBRyxDQUFDQyxNQUFNLENBQUNDLGFBQWEsY0FBOUJOLHNEQUFBQSxnQ0FBZ0NPLEtBQUssQ0FBQ0osS0FBSyxJQUFHSCxNQUFNSSxHQUFHLENBQUNDLE1BQU0sQ0FBQ0YsS0FBSyxHQUFHO2dCQUNyRkgsTUFBTVEsTUFBTSxDQUFDTCxPQUFPSCxNQUFNSyxNQUFNLENBQUNJLE1BQU07Z0JBQ3ZD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Z0JBQ1JDLE9BQU87WUFDWDtZQUNBVCxZQUFZO2dCQUNSQyxRQUFRO2dCQUNSQyxPQUFPO1lBQ1g7UUFDSjtRQUNBcEQsU0FBU2UsSUFBSSxDQUFDeUI7UUFFZCxJQUFJb0IsZ0JBQTRCO1lBQzVCN0QsUUFBUW1DLFVBQVVILEdBQUcsQ0FBQyxDQUFDZixPQUFTQSxLQUFLOEIsa0JBQWtCLENBQUM7WUFDeEQ5QyxVQUFVQTtRQUNkO1FBRUFGLGFBQWE4RDtRQUViLElBQUlDLFVBQXdCO1lBQ3hCcEUsWUFBWTtZQUNacUUscUJBQXFCO1lBQ3JCQyxZQUFZO1lBQ1pwRSxRQUFRO2dCQUNKa0QsR0FBRztvQkFDQ21CLGFBQWE7b0JBQ2JDLE9BQU87d0JBQ0hDLFNBQVM7d0JBQ1RDLE1BQU07b0JBQ1Y7Z0JBQ0o7Z0JBQ0FwQixHQUFHO29CQUNDaUIsYUFBYTtvQkFDYkMsT0FBTzt3QkFDSEMsU0FBUzt3QkFDVEMsTUFBTTtvQkFDVjtnQkFDSjtZQUNKO1lBQ0F2RSxTQUFTO2dCQUNMd0UsUUFBUTtvQkFDTEMsVUFBVTtnQkFDYjtnQkFDQUosT0FBTztvQkFDSEMsU0FBUztvQkFDVEMsTUFBTTtnQkFDVjtnQkFDQWpCLFlBQVk7b0JBQ1JnQixTQUFTO2dCQUNiO1lBQ0o7UUFDSjtRQUNBMUUsZUFBZXFFO0lBRXBCLEdBQUc7UUFBQ3hFO1FBQWNDO0tBQWdCO0lBRWpDLHFCQUNJLDhEQUFDZ0Y7UUFBSUMsV0FBVTtrQkFDWCw0RUFBQ3hGLGlEQUFJQTtZQUFDeUYsS0FBS3ZFO1lBQWdCNEQsU0FBU3RFO1lBQWFvRCxNQUFNOUM7Ozs7Ozs7Ozs7O0FBR25FO0dBMUtnQlQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGFydHMvUXVhcnRpbGVIaXN0b3J5Q2hhcnQudHN4P2M3ZTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgICBDaGFydCBhcyBDaGFydEpTLFxyXG4gICAgTGluZWFyU2NhbGUsXHJcbiAgICBQb2ludEVsZW1lbnQsXHJcbiAgICBMaW5lRWxlbWVudCxcclxuICAgIENhdGVnb3J5U2NhbGUsXHJcbiAgICBUb29sdGlwLFxyXG4gICAgVGl0bGUsXHJcbiAgICBMZWdlbmQsXHJcbiAgICBGaWxsZXJcclxuICB9IGZyb20gJ2NoYXJ0LmpzJztcclxuaW1wb3J0IHsgTGluZSB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XHJcbmltcG9ydCB7IENIQVJUX0NPTE9SUyB9IGZyb20gXCIuL0NvbG9yQmFua1wiO1xyXG5pbXBvcnQgeyBJQWNjb3VudExpbmUsIGdldEJveFBsb3RzRnJvbUxpbmVzIH0gZnJvbSBcIi4uL0RhdGEvQmFua1wiO1xyXG5pbXBvcnQgeyBVdGlsTWF0aCB9IGZyb20gXCIuLi9EYXRhL1V0aWxNYXRoXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElucHV0UmFuZ2VQcm9wcyB7XHJcbiAgICBhY2NvdW50TGluZXM6IElBY2NvdW50TGluZVtdO1xyXG4gICAgYWxsQWNjb3VudExpbmVzOiBJQWNjb3VudExpbmVbXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ2hhcnREYXRhc2V0IHtcclxuICAgIGxhYmVsOiBzdHJpbmc7XHJcbiAgICB5QXhpc0lEPzogc3RyaW5nO1xyXG4gICAgZGF0YTogYW55Oy8vbnVtYmVyW107XHJcbiAgICBwb2ludFJhZGl1cz86IG51bWJlcjtcclxuICAgIGZpbGw/OiBhbnk7XHJcbiAgICBib3JkZXJDb2xvcj86IHN0cmluZztcclxuICAgIGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xyXG4gICAgZGF0YWxhYmVsczogYW55O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDaGFydERhdGEge1xyXG4gICAgbGFiZWxzOiBzdHJpbmdbXTtcclxuICAgIGRhdGFzZXRzOiBJQ2hhcnREYXRhc2V0W107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNoYXJ0T3B0aW9uIHtcclxuICAgIHJlc3BvbnNpdmU6IGJvb2xlYW47XHJcbiAgICBtYWludGFpbkFzcGVjdFJhdGlvPzogYm9vbGVhbjtcclxuICAgIHNjYWxlczogYW55O1xyXG4gICAgYW5pbWF0aW9uPzogYW55O1xyXG4gICAgYW5pbWF0aW9ucz86IGFueTtcclxuICAgIHBsdWdpbnM6IGFueTtcclxufVxyXG5cclxuQ2hhcnRKUy5yZWdpc3RlcihcclxuICAgIExpbmVhclNjYWxlLFxyXG4gICAgUG9pbnRFbGVtZW50LFxyXG4gICAgTGluZUVsZW1lbnQsXHJcbiAgICBDYXRlZ29yeVNjYWxlLFxyXG4gICAgRmlsbGVyLFxyXG4gICAgVGl0bGUsXHJcbiAgICBUb29sdGlwLFxyXG4gICAgTGVnZW5kXHJcbik7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUXVhcnRpbGVIaXN0b3J5Q2hhcnQoe1xyXG4gICAgYWNjb3VudExpbmVzLFxyXG4gICAgYWxsQWNjb3VudExpbmVzXHJcbiAgICB9OiBJbnB1dFJhbmdlUHJvcHMpOiBKU1guRWxlbWVudCB7XHJcblxyXG4gICAgY29uc3QgW2NoYXJ0T3B0aW9uLCBzZXRDaGFydE9wdGlvbl0gPSB1c2VTdGF0ZTxJQ2hhcnRPcHRpb24+KHtyZXNwb25zaXZlOiB0cnVlLCBhbmltYXRpb246IHt9LCBzY2FsZXM6IHt9LCBwbHVnaW5zOiB7fX0pO1xyXG4gICAgY29uc3QgW2NoYXJ0RGF0YSwgc2V0Q2hhcnREYXRhXSA9IHVzZVN0YXRlPElDaGFydERhdGE+KHtsYWJlbHM6IFtdLCBkYXRhc2V0czogW119KTtcclxuXHJcbiAgICBjb25zdCBjaGFydFJlZmVyZW5jZSA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChjaGFydFJlZmVyZW5jZSkge1xyXG4gICAgICAgICAgICBjb25zdCBjaGFydCA9IGNoYXJ0UmVmZXJlbmNlLmN1cnJlbnQgYXMgQ2hhcnRKU3xudWxsO1xyXG4gICAgICAgICAgICBpZiAoY2hhcnQgJiYgY2hhcnREYXRhLmRhdGFzZXRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gY2hhcnQuY3R4LmNhbnZhcy5wYXJlbnRFbGVtZW50Py5zdHlsZS53aWR0aCA/IGNoYXJ0LmN0eC5jYW52YXMud2lkdGggOiAxMzcwO1xyXG4gICAgICAgICAgICAgICAgY2hhcnQucmVzaXplKHdpZHRoLCBjaGFydC5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGNoYXJ0LnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxbY2hhcnRSZWZlcmVuY2UsIGNoYXJ0RGF0YV0pO1xyXG5cclxuICAgIC8vIEZpbGwgc3BhY2UgYmV0d2VlbiB0d28gbGluZXM6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM3ODY2OTkyL2ZpbGxpbmctYXJlYS1iZXR3ZWVuLXR3by1saW5lcy1jaGFydC1qcy12MlxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YUxhYmVsczogRGF0ZVtdID0gW107XHJcbiAgICAgICAgY29uc3QgaGlzdG9yeTogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgaWYgKGFjY291bnRMaW5lcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgZGF0YUxhYmVscy5wdXNoKGFjY291bnRMaW5lc1swXS5kYXRlKTtcclxuICAgICAgICAgICAgaGlzdG9yeS5wdXNoKGFjY291bnRMaW5lc1swXS5iYWxhbmNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYWNjb3VudExpbmVzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnREYXRlID0gYWNjb3VudExpbmVzWzBdLmRhdGU7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPCBhY2NvdW50TGluZXMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmIChpIDwgYWNjb3VudExpbmVzLmxlbmd0aC0xICYmIGFjY291bnRMaW5lc1tpXS5kYXRlLmdldFRpbWUoKSAhPT0gY3VycmVudERhdGUuZ2V0VGltZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YUxhYmVscy5wdXNoKGN1cnJlbnREYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LnB1c2goYWNjb3VudExpbmVzW2ktMV0uYmFsYW5jZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudERhdGUgPSBhY2NvdW50TGluZXNbaV0uZGF0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChpID09PSBhY2NvdW50TGluZXMubGVuZ3RoLTEgJiYgYWNjb3VudExpbmVzW2ldLmRhdGUuZ2V0VGltZSgpICE9PSBjdXJyZW50RGF0ZS5nZXRUaW1lKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhTGFiZWxzLnB1c2goY3VycmVudERhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhpc3RvcnkucHVzaChhY2NvdW50TGluZXNbaS0xXS5iYWxhbmNlKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RGF0ZSA9IGFjY291bnRMaW5lc1tpXS5kYXRlO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpID09PSBhY2NvdW50TGluZXMubGVuZ3RoLTEgJiYgYWNjb3VudExpbmVzW2ldLmRhdGUuZ2V0VGltZSgpID09PSBjdXJyZW50RGF0ZS5nZXRUaW1lKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhTGFiZWxzLnB1c2goY3VycmVudERhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhpc3RvcnkucHVzaChhY2NvdW50TGluZXNbaS0xXS5iYWxhbmNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IGFjY291bnRMaW5lc1thY2NvdW50TGluZXMubGVuZ3RoLTFdLmRhdGU7XHJcbiAgICAgICAgY29uc3QgbWF4RGF5c09mTW9udGggPSBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSsxLCAwKS5nZXREYXRlKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJveFBsb3RzID0gZ2V0Qm94UGxvdHNGcm9tTGluZXMoYWxsQWNjb3VudExpbmVzKTtcclxuICAgICAgICBjb25zdCBib3hQbG90TGFiZWxzOiBEYXRlW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJveFBsb3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRheUluTW9udGggPSBNYXRoLnJvdW5kKFV0aWxNYXRoLm1hcChib3hQbG90c1tpXS5wY3RJbk1vbnRoLCAxLCAxMDAsIDEsIG1heERheXNPZk1vbnRoKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGVCb3hQbG90ID0gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRheUluTW9udGgpO1xyXG4gICAgICAgICAgICBib3hQbG90TGFiZWxzLnB1c2goZGF0ZUJveFBsb3QpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBhbGxMYWJlbHM6IERhdGVbXSA9IFsuLi5ib3hQbG90TGFiZWxzXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFMYWJlbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGFsbExhYmVscy5tYXAoKGQpID0+IGQuZ2V0VGltZSgpKS5pbmRleE9mKGRhdGFMYWJlbHNbaV0uZ2V0VGltZSgpKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGFsbExhYmVscy5wdXNoKGRhdGFMYWJlbHNbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFsbExhYmVscy5zb3J0KChhLCBiKSA9PiBhLmdldFRpbWUoKSAtIGIuZ2V0VGltZSgpKTtcclxuXHJcbiAgICAgICAgbGV0IGRhdGFzZXRzOiBJQ2hhcnREYXRhc2V0W10gPSBbXTtcclxuICAgICAgICBsZXQgZGF0YXNldDogSUNoYXJ0RGF0YXNldCA9IHtcclxuICAgICAgICAgICAgbGFiZWw6IFwiQmFsYW5jZVwiLFxyXG4gICAgICAgICAgICB5QXhpc0lEOiAneScsXHJcbiAgICAgICAgICAgIGRhdGE6IGhpc3RvcnkubWFwKChkYXRhLCBpZHgpID0+IHtyZXR1cm4ge3g6IGRhdGFMYWJlbHNbaWR4XS50b0xvY2FsZURhdGVTdHJpbmcoXCJmci1GUlwiKSwgeTogZGF0YX19KSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBDSEFSVF9DT0xPUlNbMF0sXHJcbiAgICAgICAgICAgIGZpbGw6IGZhbHNlLCAvL2ZpbGwgdW50aWwgcHJldmlvdXMgZGF0YXNldFxyXG4gICAgICAgICAgICBkYXRhbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICBhbmNob3I6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgYWxpZ246ICdib3R0b20nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGRhdGFzZXRzLnB1c2goZGF0YXNldCk7XHJcblxyXG4gICAgICAgIGRhdGFzZXQgPSB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIkZpcnN0IFF1YXJ0aWxlXCIsXHJcbiAgICAgICAgICAgIHlBeGlzSUQ6ICd5JyxcclxuICAgICAgICAgICAgZGF0YTogYm94UGxvdHMubWFwKChib3gsIGlkeCkgPT4ge3JldHVybiB7eDogYm94UGxvdExhYmVsc1tpZHhdLnRvTG9jYWxlRGF0ZVN0cmluZyhcImZyLUZSXCIpLCB5OiBib3guZmlyc3RRdWFydGlsZX19KSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDIzOSwgMjQ4LCAyNTUpJyxcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2IoMjM5LCAyNDgsIDI1NSknLFxyXG4gICAgICAgICAgICBwb2ludFJhZGl1czogMCxcclxuICAgICAgICAgICAgZmlsbDogZmFsc2UsIC8vZmlsbCB1bnRpbCBwcmV2aW91cyBkYXRhc2V0XHJcbiAgICAgICAgICAgIGRhdGFsYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgIGFuY2hvcjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBhbGlnbjogJ2JvdHRvbSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZGF0YXNldHMucHVzaChkYXRhc2V0KTtcclxuXHJcbiAgICAgICAgZGF0YXNldCA9IHtcclxuICAgICAgICAgICAgbGFiZWw6IFwiVGhpcmQgUXVhcnRpbGVcIixcclxuICAgICAgICAgICAgeUF4aXNJRDogJ3knLFxyXG4gICAgICAgICAgICBkYXRhOiBib3hQbG90cy5tYXAoKGJveCwgaWR4KSA9PiB7cmV0dXJuIHt4OiBib3hQbG90TGFiZWxzW2lkeF0udG9Mb2NhbGVEYXRlU3RyaW5nKFwiZnItRlJcIiksIHk6IGJveC50aGlyZFF1YXJ0aWxlfX0pLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjM5LCAyNDgsIDI1NSknLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYigyMzksIDI0OCwgMjU1KScsXHJcbiAgICAgICAgICAgIHBvaW50UmFkaXVzOiAwLFxyXG4gICAgICAgICAgICBmaWxsOiB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6ICctMScsIC8vZmlsbCB1bnRpbCBwcmV2aW91cyBkYXRhc2V0XHJcbiAgICAgICAgICAgICAgICBhYm92ZTogJ3JnYigyMzksIDI0OCwgMjU1KScsICAgLy8gQXJlYSB3aWxsIGJlIHJlZCBhYm92ZSB0aGUgb3JpZ2luXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRhdGFsYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgIGFuY2hvcjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBhbGlnbjogJ2JvdHRvbSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZGF0YXNldHMucHVzaChkYXRhc2V0KTtcclxuXHJcbiAgICAgICAgbGV0IGRhdGFUb0Rpc3BsYXk6IElDaGFydERhdGEgPSB7XHJcbiAgICAgICAgICAgIGxhYmVsczogYWxsTGFiZWxzLm1hcCgoZGF0ZSkgPT4gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJmci1GUlwiKSksXHJcbiAgICAgICAgICAgIGRhdGFzZXRzOiBkYXRhc2V0cyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBzZXRDaGFydERhdGEoZGF0YVRvRGlzcGxheSk7XHJcblxyXG4gICAgICAgIGxldCBvcHRpb25zOiBJQ2hhcnRPcHRpb24gPSB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxyXG4gICAgICAgICAgICBhbmltYXRpb25zOiBmYWxzZSxcclxuICAgICAgICAgICAgc2NhbGVzOiB7XHJcbiAgICAgICAgICAgICAgICB4OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0RhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHk6IHtcclxuICAgICAgICAgICAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQW1vdW50J1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGx1Z2luczoge1xyXG4gICAgICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcgYXMgY29uc3QsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiQ29tcGFyaXNvbiBvZiB0aGUgYWNjb3VudCdzIGJhbGFuY2VcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRhdGFsYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldENoYXJ0T3B0aW9uKG9wdGlvbnMpO1xyXG5cclxuICAgfSwgW2FjY291bnRMaW5lcywgYWxsQWNjb3VudExpbmVzXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWUtY2hhcnQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8TGluZSByZWY9e2NoYXJ0UmVmZXJlbmNlfSBvcHRpb25zPXtjaGFydE9wdGlvbn0gZGF0YT17Y2hhcnREYXRhfS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgIClcclxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkNoYXJ0IiwiQ2hhcnRKUyIsIkxpbmVhclNjYWxlIiwiUG9pbnRFbGVtZW50IiwiTGluZUVsZW1lbnQiLCJDYXRlZ29yeVNjYWxlIiwiVG9vbHRpcCIsIlRpdGxlIiwiTGVnZW5kIiwiRmlsbGVyIiwiTGluZSIsIkNIQVJUX0NPTE9SUyIsImdldEJveFBsb3RzRnJvbUxpbmVzIiwiVXRpbE1hdGgiLCJyZWdpc3RlciIsIlF1YXJ0aWxlSGlzdG9yeUNoYXJ0IiwiYWNjb3VudExpbmVzIiwiYWxsQWNjb3VudExpbmVzIiwiY2hhcnRPcHRpb24iLCJzZXRDaGFydE9wdGlvbiIsInJlc3BvbnNpdmUiLCJhbmltYXRpb24iLCJzY2FsZXMiLCJwbHVnaW5zIiwiY2hhcnREYXRhIiwic2V0Q2hhcnREYXRhIiwibGFiZWxzIiwiZGF0YXNldHMiLCJjaGFydFJlZmVyZW5jZSIsImNoYXJ0IiwiY3VycmVudCIsImxlbmd0aCIsIndpZHRoIiwiY3R4IiwiY2FudmFzIiwicGFyZW50RWxlbWVudCIsInN0eWxlIiwicmVzaXplIiwiaGVpZ2h0IiwidXBkYXRlIiwiZGF0YUxhYmVscyIsImhpc3RvcnkiLCJwdXNoIiwiZGF0ZSIsImJhbGFuY2UiLCJjdXJyZW50RGF0ZSIsImkiLCJnZXRUaW1lIiwibWF4RGF5c09mTW9udGgiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImdldERhdGUiLCJib3hQbG90cyIsImJveFBsb3RMYWJlbHMiLCJkYXlJbk1vbnRoIiwiTWF0aCIsInJvdW5kIiwibWFwIiwicGN0SW5Nb250aCIsImRhdGVCb3hQbG90IiwiYWxsTGFiZWxzIiwiZCIsImluZGV4T2YiLCJzb3J0IiwiYSIsImIiLCJkYXRhc2V0IiwibGFiZWwiLCJ5QXhpc0lEIiwiZGF0YSIsImlkeCIsIngiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ5IiwiYmFja2dyb3VuZENvbG9yIiwiZmlsbCIsImRhdGFsYWJlbHMiLCJhbmNob3IiLCJhbGlnbiIsImJveCIsImZpcnN0UXVhcnRpbGUiLCJib3JkZXJDb2xvciIsInBvaW50UmFkaXVzIiwidGhpcmRRdWFydGlsZSIsInRhcmdldCIsImFib3ZlIiwiZGF0YVRvRGlzcGxheSIsIm9wdGlvbnMiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwiYW5pbWF0aW9ucyIsImJlZ2luQXRaZXJvIiwidGl0bGUiLCJkaXNwbGF5IiwidGV4dCIsImxlZ2VuZCIsInBvc2l0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Charts/QuartileHistoryChart.tsx\n"));

/***/ })

});