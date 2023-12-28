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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   QuartileHistoryChart: function() { return /* binding */ QuartileHistoryChart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chart.js */ \"(app-pages-browser)/./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-chartjs-2 */ \"(app-pages-browser)/./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var _ColorBank__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColorBank */ \"(app-pages-browser)/./components/Charts/ColorBank.ts\");\n/* harmony import */ var _Data_Bank__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Data/Bank */ \"(app-pages-browser)/./components/Data/Bank.ts\");\n/* harmony import */ var _Data_UtilMath__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Data/UtilMath */ \"(app-pages-browser)/./components/Data/UtilMath.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_5__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_5__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_5__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_5__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_5__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_5__.Filler, chart_js__WEBPACK_IMPORTED_MODULE_5__.Title, chart_js__WEBPACK_IMPORTED_MODULE_5__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_5__.Legend);\nfunction QuartileHistoryChart(param) {\n    let { accountLines, allAccountLines } = param;\n    _s();\n    const [chartOption, setChartOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        responsive: true,\n        animation: {},\n        scales: {},\n        plugins: {}\n    });\n    const [chartData, setChartData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        labels: [],\n        datasets: []\n    });\n    const chartReference = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (chartReference) {\n            const chart = chartReference.current;\n            if (chart && chartData.datasets.length > 0) {\n                var _chart_ctx_canvas_parentElement;\n                const width = ((_chart_ctx_canvas_parentElement = chart.ctx.canvas.parentElement) === null || _chart_ctx_canvas_parentElement === void 0 ? void 0 : _chart_ctx_canvas_parentElement.style.width) ? chart.ctx.canvas.width : 1370;\n                chart.resize(width, chart.canvas.height);\n                chart.update();\n            }\n        }\n    }, [\n        chartReference,\n        chartData\n    ]);\n    // Fill space between two lines: https://stackoverflow.com/questions/37866992/filling-area-between-two-lines-chart-js-v2\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const dataLabels = [];\n        const history = [];\n        debugger;\n        if (accountLines.length === 1) {\n            dataLabels.push(accountLines[0].date);\n            history.push(accountLines[0].balance);\n        } else if (accountLines.length > 1) {\n            let currentDate = accountLines[0].date;\n            for(let i = 1; i < accountLines.length; i++){\n                if (i < accountLines.length - 1 && accountLines[i].date.getTime() !== currentDate.getTime()) {\n                    dataLabels.push(currentDate);\n                    history.push(accountLines[i - 1].balance);\n                    currentDate = accountLines[i].date;\n                } else if (i === accountLines.length - 1 && accountLines[i].date.getTime() !== currentDate.getTime()) {\n                    dataLabels.push(currentDate);\n                    history.push(accountLines[i - 1].balance);\n                    currentDate = accountLines[i].date;\n                    dataLabels.push(accountLines[i].date);\n                    history.push(accountLines[i].balance);\n                } else if (i === accountLines.length - 1 && accountLines[i].date.getTime() === currentDate.getTime()) {\n                    dataLabels.push(currentDate);\n                    history.push(accountLines[i - 1].balance);\n                }\n            }\n        }\n        const date = accountLines[accountLines.length - 1].date;\n        const maxDaysOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();\n        const boxPlots = (0,_Data_Bank__WEBPACK_IMPORTED_MODULE_3__.getBoxPlotsFromLines)(allAccountLines);\n        const boxPlotLabels = [];\n        for(let i = 0; i < boxPlots.length; i++){\n            const dayInMonth = Math.round(_Data_UtilMath__WEBPACK_IMPORTED_MODULE_4__.UtilMath.map(boxPlots[i].pctInMonth, 1, 100, 1, maxDaysOfMonth));\n            const dateBoxPlot = new Date(date.getFullYear(), date.getMonth(), dayInMonth);\n            boxPlotLabels.push(dateBoxPlot);\n        }\n        const allLabels = [\n            ...boxPlotLabels\n        ];\n        for(let i = 0; i < dataLabels.length; i++){\n            if (allLabels.map((d)=>d.getTime()).indexOf(dataLabels[i].getTime()) === -1) {\n                allLabels.push(dataLabels[i]);\n            }\n        }\n        allLabels.sort((a, b)=>a.getTime() - b.getTime());\n        let datasets = [];\n        let dataset = {\n            label: \"Balance\",\n            yAxisID: \"y\",\n            data: history.map((data, idx)=>{\n                return {\n                    x: dataLabels[idx].toLocaleDateString(\"fr-FR\"),\n                    y: data\n                };\n            }),\n            backgroundColor: _ColorBank__WEBPACK_IMPORTED_MODULE_2__.CHART_COLORS[0],\n            fill: false,\n            datalabels: {\n                anchor: \"center\",\n                align: \"bottom\"\n            }\n        };\n        datasets.push(dataset);\n        dataset = {\n            label: \"First Quartile\",\n            yAxisID: \"y\",\n            data: boxPlots.map((box, idx)=>{\n                return {\n                    x: boxPlotLabels[idx].toLocaleDateString(\"fr-FR\"),\n                    y: box.firstQuartile\n                };\n            }),\n            backgroundColor: \"rgb(239, 248, 255)\",\n            borderColor: \"rgb(239, 248, 255)\",\n            pointRadius: 0,\n            fill: false,\n            datalabels: {\n                anchor: \"center\",\n                align: \"bottom\"\n            }\n        };\n        datasets.push(dataset);\n        dataset = {\n            label: \"Third Quartile\",\n            yAxisID: \"y\",\n            data: boxPlots.map((box, idx)=>{\n                return {\n                    x: boxPlotLabels[idx].toLocaleDateString(\"fr-FR\"),\n                    y: box.thirdQuartile\n                };\n            }),\n            backgroundColor: \"rgb(239, 248, 255)\",\n            borderColor: \"rgb(239, 248, 255)\",\n            pointRadius: 0,\n            fill: {\n                target: \"-1\",\n                above: \"rgb(239, 248, 255)\"\n            },\n            datalabels: {\n                anchor: \"center\",\n                align: \"bottom\"\n            }\n        };\n        datasets.push(dataset);\n        let dataToDisplay = {\n            labels: allLabels.map((date)=>date.toLocaleDateString(\"fr-FR\")),\n            datasets: datasets\n        };\n        setChartData(dataToDisplay);\n        let options = {\n            responsive: true,\n            maintainAspectRatio: false,\n            animations: false,\n            scales: {\n                x: {\n                    beginAtZero: true,\n                    title: {\n                        display: true,\n                        text: \"Date\"\n                    }\n                },\n                y: {\n                    beginAtZero: true,\n                    title: {\n                        display: true,\n                        text: \"Amount\"\n                    }\n                }\n            },\n            plugins: {\n                legend: {\n                    position: \"top\"\n                },\n                title: {\n                    display: true,\n                    text: \"Comparison of the account's balance\"\n                },\n                datalabels: {\n                    display: false\n                }\n            }\n        };\n        setChartOption(options);\n    }, [\n        accountLines,\n        allAccountLines\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"time-chart-wrapper\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__.Line, {\n            ref: chartReference,\n            options: chartOption,\n            data: chartData\n        }, void 0, false, {\n            fileName: \"D:\\\\projet\\\\budget-tracker-nextjs\\\\components\\\\Charts\\\\QuartileHistoryChart.tsx\",\n            lineNumber: 228,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\projet\\\\budget-tracker-nextjs\\\\components\\\\Charts\\\\QuartileHistoryChart.tsx\",\n        lineNumber: 227,\n        columnNumber: 9\n    }, this);\n}\n_s(QuartileHistoryChart, \"FoTWsYANwTxhQBbJG1664sLH0eo=\");\n_c = QuartileHistoryChart;\nvar _c;\n$RefreshReg$(_c, \"QuartileHistoryChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ2hhcnRzL1F1YXJ0aWxlSGlzdG9yeUNoYXJ0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFvRDtBQVdoQztBQUNtQjtBQUNJO0FBQ3VCO0FBQ3RCO0FBZ0M1Q0ksMkNBQU9BLENBQUNhLFFBQVEsQ0FDWlosaURBQVdBLEVBQ1hDLGtEQUFZQSxFQUNaQyxpREFBV0EsRUFDWEMsbURBQWFBLEVBQ2JJLDRDQUFNQSxFQUNORiwyQ0FBS0EsRUFDTEQsNkNBQU9BLEVBQ1BFLDRDQUFNQTtBQUdILFNBQVNPLHFCQUFxQixLQUdmO1FBSGUsRUFDakNDLFlBQVksRUFDWkMsZUFBZSxFQUNHLEdBSGU7O0lBS2pDLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHcEIsK0NBQVFBLENBQWU7UUFBQ3FCLFlBQVk7UUFBTUMsV0FBVyxDQUFDO1FBQUdDLFFBQVEsQ0FBQztRQUFHQyxTQUFTLENBQUM7SUFBQztJQUN0SCxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBRzFCLCtDQUFRQSxDQUFhO1FBQUMyQixRQUFRLEVBQUU7UUFBRUMsVUFBVSxFQUFFO0lBQUE7SUFFaEYsTUFBTUMsaUJBQWlCOUIsNkNBQU1BLENBQUM7SUFFOUJELGdEQUFTQSxDQUFDO1FBQ04sSUFBSStCLGdCQUFnQjtZQUNoQixNQUFNQyxRQUFRRCxlQUFlRSxPQUFPO1lBQ3BDLElBQUlELFNBQVNMLFVBQVVHLFFBQVEsQ0FBQ0ksTUFBTSxHQUFHLEdBQUc7b0JBQzFCRjtnQkFBZCxNQUFNRyxRQUFRSCxFQUFBQSxrQ0FBQUEsTUFBTUksR0FBRyxDQUFDQyxNQUFNLENBQUNDLGFBQWEsY0FBOUJOLHNEQUFBQSxnQ0FBZ0NPLEtBQUssQ0FBQ0osS0FBSyxJQUFHSCxNQUFNSSxHQUFHLENBQUNDLE1BQU0sQ0FBQ0YsS0FBSyxHQUFHO2dCQUNyRkgsTUFBTVEsTUFBTSxDQUFDTCxPQUFPSCxNQUFNSyxNQUFNLENBQUNJLE1BQU07Z0JBQ3ZDVCxNQUFNVSxNQUFNO1lBQ2hCO1FBQ0o7SUFDSixHQUFFO1FBQUNYO1FBQWdCSjtLQUFVO0lBRTdCLHdIQUF3SDtJQUN4SDNCLGdEQUFTQSxDQUFDO1FBRU4sTUFBTTJDLGFBQXFCLEVBQUU7UUFDN0IsTUFBTUMsVUFBb0IsRUFBRTtRQUU1QixRQUFTO1FBQ1QsSUFBSXpCLGFBQWFlLE1BQU0sS0FBSyxHQUFHO1lBQzNCUyxXQUFXRSxJQUFJLENBQUMxQixZQUFZLENBQUMsRUFBRSxDQUFDMkIsSUFBSTtZQUNwQ0YsUUFBUUMsSUFBSSxDQUFDMUIsWUFBWSxDQUFDLEVBQUUsQ0FBQzRCLE9BQU87UUFDeEMsT0FDSyxJQUFJNUIsYUFBYWUsTUFBTSxHQUFHLEdBQUc7WUFDOUIsSUFBSWMsY0FBYzdCLFlBQVksQ0FBQyxFQUFFLENBQUMyQixJQUFJO1lBRXRDLElBQUksSUFBSUcsSUFBSSxHQUFHQSxJQUFJOUIsYUFBYWUsTUFBTSxFQUFFZSxJQUN4QztnQkFDSSxJQUFJQSxJQUFJOUIsYUFBYWUsTUFBTSxHQUFDLEtBQUtmLFlBQVksQ0FBQzhCLEVBQUUsQ0FBQ0gsSUFBSSxDQUFDSSxPQUFPLE9BQU9GLFlBQVlFLE9BQU8sSUFBSTtvQkFDdkZQLFdBQVdFLElBQUksQ0FBQ0c7b0JBQ2hCSixRQUFRQyxJQUFJLENBQUMxQixZQUFZLENBQUM4QixJQUFFLEVBQUUsQ0FBQ0YsT0FBTztvQkFDdENDLGNBQWM3QixZQUFZLENBQUM4QixFQUFFLENBQUNILElBQUk7Z0JBQ3RDLE9BQ0ssSUFBSUcsTUFBTTlCLGFBQWFlLE1BQU0sR0FBQyxLQUFLZixZQUFZLENBQUM4QixFQUFFLENBQUNILElBQUksQ0FBQ0ksT0FBTyxPQUFPRixZQUFZRSxPQUFPLElBQUk7b0JBQzlGUCxXQUFXRSxJQUFJLENBQUNHO29CQUNoQkosUUFBUUMsSUFBSSxDQUFDMUIsWUFBWSxDQUFDOEIsSUFBRSxFQUFFLENBQUNGLE9BQU87b0JBQ3RDQyxjQUFjN0IsWUFBWSxDQUFDOEIsRUFBRSxDQUFDSCxJQUFJO29CQUVsQ0gsV0FBV0UsSUFBSSxDQUFDMUIsWUFBWSxDQUFDOEIsRUFBRSxDQUFDSCxJQUFJO29CQUNwQ0YsUUFBUUMsSUFBSSxDQUFDMUIsWUFBWSxDQUFDOEIsRUFBRSxDQUFDRixPQUFPO2dCQUN4QyxPQUNLLElBQUlFLE1BQU05QixhQUFhZSxNQUFNLEdBQUMsS0FBS2YsWUFBWSxDQUFDOEIsRUFBRSxDQUFDSCxJQUFJLENBQUNJLE9BQU8sT0FBT0YsWUFBWUUsT0FBTyxJQUFJO29CQUM5RlAsV0FBV0UsSUFBSSxDQUFDRztvQkFDaEJKLFFBQVFDLElBQUksQ0FBQzFCLFlBQVksQ0FBQzhCLElBQUUsRUFBRSxDQUFDRixPQUFPO2dCQUMxQztZQUNKO1FBQ0o7UUFFQSxNQUFNRCxPQUFPM0IsWUFBWSxDQUFDQSxhQUFhZSxNQUFNLEdBQUMsRUFBRSxDQUFDWSxJQUFJO1FBQ3JELE1BQU1LLGlCQUFpQixJQUFJQyxLQUFLTixLQUFLTyxXQUFXLElBQUlQLEtBQUtRLFFBQVEsS0FBRyxHQUFHLEdBQUdDLE9BQU87UUFFakYsTUFBTUMsV0FBV3pDLGdFQUFvQkEsQ0FBQ0s7UUFDdEMsTUFBTXFDLGdCQUF3QixFQUFFO1FBQ2hDLElBQUssSUFBSVIsSUFBSSxHQUFHQSxJQUFJTyxTQUFTdEIsTUFBTSxFQUFFZSxJQUFLO1lBQ3RDLE1BQU1TLGFBQWFDLEtBQUtDLEtBQUssQ0FBQzVDLG9EQUFRQSxDQUFDNkMsR0FBRyxDQUFDTCxRQUFRLENBQUNQLEVBQUUsQ0FBQ2EsVUFBVSxFQUFFLEdBQUcsS0FBSyxHQUFHWDtZQUM5RSxNQUFNWSxjQUFjLElBQUlYLEtBQUtOLEtBQUtPLFdBQVcsSUFBSVAsS0FBS1EsUUFBUSxJQUFJSTtZQUNsRUQsY0FBY1osSUFBSSxDQUFDa0I7UUFDdkI7UUFFQSxNQUFNQyxZQUFvQjtlQUFJUDtTQUFjO1FBQzVDLElBQUssSUFBSVIsSUFBSSxHQUFHQSxJQUFJTixXQUFXVCxNQUFNLEVBQUVlLElBQUs7WUFDeEMsSUFBSWUsVUFBVUgsR0FBRyxDQUFDLENBQUNJLElBQU1BLEVBQUVmLE9BQU8sSUFBSWdCLE9BQU8sQ0FBQ3ZCLFVBQVUsQ0FBQ00sRUFBRSxDQUFDQyxPQUFPLFFBQVEsQ0FBQyxHQUFHO2dCQUMzRWMsVUFBVW5CLElBQUksQ0FBQ0YsVUFBVSxDQUFDTSxFQUFFO1lBQ2hDO1FBQ0o7UUFDQWUsVUFBVUcsSUFBSSxDQUFDLENBQUNDLEdBQUdDLElBQU1ELEVBQUVsQixPQUFPLEtBQUttQixFQUFFbkIsT0FBTztRQUVoRCxJQUFJcEIsV0FBNEIsRUFBRTtRQUNsQyxJQUFJd0MsVUFBeUI7WUFDekJDLE9BQU87WUFDUEMsU0FBUztZQUNUQyxNQUFNN0IsUUFBUWlCLEdBQUcsQ0FBQyxDQUFDWSxNQUFNQztnQkFBUyxPQUFPO29CQUFDQyxHQUFHaEMsVUFBVSxDQUFDK0IsSUFBSSxDQUFDRSxrQkFBa0IsQ0FBQztvQkFBVUMsR0FBR0o7Z0JBQUk7WUFBQztZQUNsR0ssaUJBQWlCaEUsb0RBQVksQ0FBQyxFQUFFO1lBQ2hDaUUsTUFBTTtZQUNOQyxZQUFZO2dCQUNSQyxRQUFRO2dCQUNSQyxPQUFPO1lBQ1g7UUFDSjtRQUNBcEQsU0FBU2UsSUFBSSxDQUFDeUI7UUFFZEEsVUFBVTtZQUNOQyxPQUFPO1lBQ1BDLFNBQVM7WUFDVEMsTUFBTWpCLFNBQVNLLEdBQUcsQ0FBQyxDQUFDc0IsS0FBS1Q7Z0JBQVMsT0FBTztvQkFBQ0MsR0FBR2xCLGFBQWEsQ0FBQ2lCLElBQUksQ0FBQ0Usa0JBQWtCLENBQUM7b0JBQVVDLEdBQUdNLElBQUlDLGFBQWE7Z0JBQUE7WUFBQztZQUNsSE4saUJBQWlCO1lBQ2pCTyxhQUFhO1lBQ2JDLGFBQWE7WUFDYlAsTUFBTTtZQUNOQyxZQUFZO2dCQUNSQyxRQUFRO2dCQUNSQyxPQUFPO1lBQ1g7UUFDSjtRQUNBcEQsU0FBU2UsSUFBSSxDQUFDeUI7UUFFZEEsVUFBVTtZQUNOQyxPQUFPO1lBQ1BDLFNBQVM7WUFDVEMsTUFBTWpCLFNBQVNLLEdBQUcsQ0FBQyxDQUFDc0IsS0FBS1Q7Z0JBQVMsT0FBTztvQkFBQ0MsR0FBR2xCLGFBQWEsQ0FBQ2lCLElBQUksQ0FBQ0Usa0JBQWtCLENBQUM7b0JBQVVDLEdBQUdNLElBQUlJLGFBQWE7Z0JBQUE7WUFBQztZQUNsSFQsaUJBQWlCO1lBQ2pCTyxhQUFhO1lBQ2JDLGFBQWE7WUFDYlAsTUFBTTtnQkFDRlMsUUFBUTtnQkFDUkMsT0FBTztZQUNYO1lBQ0FULFlBQVk7Z0JBQ1JDLFFBQVE7Z0JBQ1JDLE9BQU87WUFDWDtRQUNKO1FBQ0FwRCxTQUFTZSxJQUFJLENBQUN5QjtRQUVkLElBQUlvQixnQkFBNEI7WUFDNUI3RCxRQUFRbUMsVUFBVUgsR0FBRyxDQUFDLENBQUNmLE9BQVNBLEtBQUs4QixrQkFBa0IsQ0FBQztZQUN4RDlDLFVBQVVBO1FBQ2Q7UUFFQUYsYUFBYThEO1FBRWIsSUFBSUMsVUFBd0I7WUFDeEJwRSxZQUFZO1lBQ1pxRSxxQkFBcUI7WUFDckJDLFlBQVk7WUFDWnBFLFFBQVE7Z0JBQ0prRCxHQUFHO29CQUNDbUIsYUFBYTtvQkFDYkMsT0FBTzt3QkFDSEMsU0FBUzt3QkFDVEMsTUFBTTtvQkFDVjtnQkFDSjtnQkFDQXBCLEdBQUc7b0JBQ0NpQixhQUFhO29CQUNiQyxPQUFPO3dCQUNIQyxTQUFTO3dCQUNUQyxNQUFNO29CQUNWO2dCQUNKO1lBQ0o7WUFDQXZFLFNBQVM7Z0JBQ0x3RSxRQUFRO29CQUNMQyxVQUFVO2dCQUNiO2dCQUNBSixPQUFPO29CQUNIQyxTQUFTO29CQUNUQyxNQUFNO2dCQUNWO2dCQUNBakIsWUFBWTtvQkFDUmdCLFNBQVM7Z0JBQ2I7WUFDSjtRQUNKO1FBQ0ExRSxlQUFlcUU7SUFFcEIsR0FBRztRQUFDeEU7UUFBY0M7S0FBZ0I7SUFFakMscUJBQ0ksOERBQUNnRjtRQUFJQyxXQUFVO2tCQUNYLDRFQUFDeEYsaURBQUlBO1lBQUN5RixLQUFLdkU7WUFBZ0I0RCxTQUFTdEU7WUFBYW9ELE1BQU05Qzs7Ozs7Ozs7Ozs7QUFHbkU7R0E1S2dCVDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NoYXJ0cy9RdWFydGlsZUhpc3RvcnlDaGFydC50c3g/YzdlNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICAgIENoYXJ0IGFzIENoYXJ0SlMsXHJcbiAgICBMaW5lYXJTY2FsZSxcclxuICAgIFBvaW50RWxlbWVudCxcclxuICAgIExpbmVFbGVtZW50LFxyXG4gICAgQ2F0ZWdvcnlTY2FsZSxcclxuICAgIFRvb2x0aXAsXHJcbiAgICBUaXRsZSxcclxuICAgIExlZ2VuZCxcclxuICAgIEZpbGxlclxyXG4gIH0gZnJvbSAnY2hhcnQuanMnO1xyXG5pbXBvcnQgeyBMaW5lIH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJztcclxuaW1wb3J0IHsgQ0hBUlRfQ09MT1JTIH0gZnJvbSBcIi4vQ29sb3JCYW5rXCI7XHJcbmltcG9ydCB7IElBY2NvdW50TGluZSwgZ2V0Qm94UGxvdHNGcm9tTGluZXMgfSBmcm9tIFwiLi4vRGF0YS9CYW5rXCI7XHJcbmltcG9ydCB7IFV0aWxNYXRoIH0gZnJvbSBcIi4uL0RhdGEvVXRpbE1hdGhcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW5wdXRSYW5nZVByb3BzIHtcclxuICAgIGFjY291bnRMaW5lczogSUFjY291bnRMaW5lW107XHJcbiAgICBhbGxBY2NvdW50TGluZXM6IElBY2NvdW50TGluZVtdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDaGFydERhdGFzZXQge1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxuICAgIHlBeGlzSUQ/OiBzdHJpbmc7XHJcbiAgICBkYXRhOiBhbnk7Ly9udW1iZXJbXTtcclxuICAgIHBvaW50UmFkaXVzPzogbnVtYmVyO1xyXG4gICAgZmlsbD86IGFueTtcclxuICAgIGJvcmRlckNvbG9yPzogc3RyaW5nO1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XHJcbiAgICBkYXRhbGFiZWxzOiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNoYXJ0RGF0YSB7XHJcbiAgICBsYWJlbHM6IHN0cmluZ1tdO1xyXG4gICAgZGF0YXNldHM6IElDaGFydERhdGFzZXRbXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ2hhcnRPcHRpb24ge1xyXG4gICAgcmVzcG9uc2l2ZTogYm9vbGVhbjtcclxuICAgIG1haW50YWluQXNwZWN0UmF0aW8/OiBib29sZWFuO1xyXG4gICAgc2NhbGVzOiBhbnk7XHJcbiAgICBhbmltYXRpb24/OiBhbnk7XHJcbiAgICBhbmltYXRpb25zPzogYW55O1xyXG4gICAgcGx1Z2luczogYW55O1xyXG59XHJcblxyXG5DaGFydEpTLnJlZ2lzdGVyKFxyXG4gICAgTGluZWFyU2NhbGUsXHJcbiAgICBQb2ludEVsZW1lbnQsXHJcbiAgICBMaW5lRWxlbWVudCxcclxuICAgIENhdGVnb3J5U2NhbGUsXHJcbiAgICBGaWxsZXIsXHJcbiAgICBUaXRsZSxcclxuICAgIFRvb2x0aXAsXHJcbiAgICBMZWdlbmRcclxuKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBRdWFydGlsZUhpc3RvcnlDaGFydCh7XHJcbiAgICBhY2NvdW50TGluZXMsXHJcbiAgICBhbGxBY2NvdW50TGluZXNcclxuICAgIH06IElucHV0UmFuZ2VQcm9wcyk6IEpTWC5FbGVtZW50IHtcclxuXHJcbiAgICBjb25zdCBbY2hhcnRPcHRpb24sIHNldENoYXJ0T3B0aW9uXSA9IHVzZVN0YXRlPElDaGFydE9wdGlvbj4oe3Jlc3BvbnNpdmU6IHRydWUsIGFuaW1hdGlvbjoge30sIHNjYWxlczoge30sIHBsdWdpbnM6IHt9fSk7XHJcbiAgICBjb25zdCBbY2hhcnREYXRhLCBzZXRDaGFydERhdGFdID0gdXNlU3RhdGU8SUNoYXJ0RGF0YT4oe2xhYmVsczogW10sIGRhdGFzZXRzOiBbXX0pO1xyXG5cclxuICAgIGNvbnN0IGNoYXJ0UmVmZXJlbmNlID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNoYXJ0UmVmZXJlbmNlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoYXJ0ID0gY2hhcnRSZWZlcmVuY2UuY3VycmVudCBhcyBDaGFydEpTfG51bGw7XHJcbiAgICAgICAgICAgIGlmIChjaGFydCAmJiBjaGFydERhdGEuZGF0YXNldHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBjaGFydC5jdHguY2FudmFzLnBhcmVudEVsZW1lbnQ/LnN0eWxlLndpZHRoID8gY2hhcnQuY3R4LmNhbnZhcy53aWR0aCA6IDEzNzA7XHJcbiAgICAgICAgICAgICAgICBjaGFydC5yZXNpemUod2lkdGgsIGNoYXJ0LmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgY2hhcnQudXBkYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFtjaGFydFJlZmVyZW5jZSwgY2hhcnREYXRhXSk7XHJcblxyXG4gICAgLy8gRmlsbCBzcGFjZSBiZXR3ZWVuIHR3byBsaW5lczogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzc4NjY5OTIvZmlsbGluZy1hcmVhLWJldHdlZW4tdHdvLWxpbmVzLWNoYXJ0LWpzLXYyXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBkYXRhTGFiZWxzOiBEYXRlW10gPSBbXTtcclxuICAgICAgICBjb25zdCBoaXN0b3J5OiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICBpZiAoYWNjb3VudExpbmVzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICBkYXRhTGFiZWxzLnB1c2goYWNjb3VudExpbmVzWzBdLmRhdGUpO1xyXG4gICAgICAgICAgICBoaXN0b3J5LnB1c2goYWNjb3VudExpbmVzWzBdLmJhbGFuY2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChhY2NvdW50TGluZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudERhdGUgPSBhY2NvdW50TGluZXNbMF0uZGF0ZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPCBhY2NvdW50TGluZXMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmIChpIDwgYWNjb3VudExpbmVzLmxlbmd0aC0xICYmIGFjY291bnRMaW5lc1tpXS5kYXRlLmdldFRpbWUoKSAhPT0gY3VycmVudERhdGUuZ2V0VGltZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YUxhYmVscy5wdXNoKGN1cnJlbnREYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LnB1c2goYWNjb3VudExpbmVzW2ktMV0uYmFsYW5jZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudERhdGUgPSBhY2NvdW50TGluZXNbaV0uZGF0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGkgPT09IGFjY291bnRMaW5lcy5sZW5ndGgtMSAmJiBhY2NvdW50TGluZXNbaV0uZGF0ZS5nZXRUaW1lKCkgIT09IGN1cnJlbnREYXRlLmdldFRpbWUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFMYWJlbHMucHVzaChjdXJyZW50RGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5wdXNoKGFjY291bnRMaW5lc1tpLTFdLmJhbGFuY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnREYXRlID0gYWNjb3VudExpbmVzW2ldLmRhdGU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFMYWJlbHMucHVzaChhY2NvdW50TGluZXNbaV0uZGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5wdXNoKGFjY291bnRMaW5lc1tpXS5iYWxhbmNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGkgPT09IGFjY291bnRMaW5lcy5sZW5ndGgtMSAmJiBhY2NvdW50TGluZXNbaV0uZGF0ZS5nZXRUaW1lKCkgPT09IGN1cnJlbnREYXRlLmdldFRpbWUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFMYWJlbHMucHVzaChjdXJyZW50RGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5wdXNoKGFjY291bnRMaW5lc1tpLTFdLmJhbGFuY2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBkYXRlID0gYWNjb3VudExpbmVzW2FjY291bnRMaW5lcy5sZW5ndGgtMV0uZGF0ZTtcclxuICAgICAgICBjb25zdCBtYXhEYXlzT2ZNb250aCA9IG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpKzEsIDApLmdldERhdGUoKTtcclxuXHJcbiAgICAgICAgY29uc3QgYm94UGxvdHMgPSBnZXRCb3hQbG90c0Zyb21MaW5lcyhhbGxBY2NvdW50TGluZXMpO1xyXG4gICAgICAgIGNvbnN0IGJveFBsb3RMYWJlbHM6IERhdGVbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm94UGxvdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZGF5SW5Nb250aCA9IE1hdGgucm91bmQoVXRpbE1hdGgubWFwKGJveFBsb3RzW2ldLnBjdEluTW9udGgsIDEsIDEwMCwgMSwgbWF4RGF5c09mTW9udGgpKTtcclxuICAgICAgICAgICAgY29uc3QgZGF0ZUJveFBsb3QgPSBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF5SW5Nb250aCk7XHJcbiAgICAgICAgICAgIGJveFBsb3RMYWJlbHMucHVzaChkYXRlQm94UGxvdClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGFsbExhYmVsczogRGF0ZVtdID0gWy4uLmJveFBsb3RMYWJlbHNdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YUxhYmVscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoYWxsTGFiZWxzLm1hcCgoZCkgPT4gZC5nZXRUaW1lKCkpLmluZGV4T2YoZGF0YUxhYmVsc1tpXS5nZXRUaW1lKCkpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgYWxsTGFiZWxzLnB1c2goZGF0YUxhYmVsc1tpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYWxsTGFiZWxzLnNvcnQoKGEsIGIpID0+IGEuZ2V0VGltZSgpIC0gYi5nZXRUaW1lKCkpO1xyXG5cclxuICAgICAgICBsZXQgZGF0YXNldHM6IElDaGFydERhdGFzZXRbXSA9IFtdO1xyXG4gICAgICAgIGxldCBkYXRhc2V0OiBJQ2hhcnREYXRhc2V0ID0ge1xyXG4gICAgICAgICAgICBsYWJlbDogXCJCYWxhbmNlXCIsXHJcbiAgICAgICAgICAgIHlBeGlzSUQ6ICd5JyxcclxuICAgICAgICAgICAgZGF0YTogaGlzdG9yeS5tYXAoKGRhdGEsIGlkeCkgPT4ge3JldHVybiB7eDogZGF0YUxhYmVsc1tpZHhdLnRvTG9jYWxlRGF0ZVN0cmluZyhcImZyLUZSXCIpLCB5OiBkYXRhfX0pLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IENIQVJUX0NPTE9SU1swXSxcclxuICAgICAgICAgICAgZmlsbDogZmFsc2UsIC8vZmlsbCB1bnRpbCBwcmV2aW91cyBkYXRhc2V0XHJcbiAgICAgICAgICAgIGRhdGFsYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgIGFuY2hvcjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBhbGlnbjogJ2JvdHRvbSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZGF0YXNldHMucHVzaChkYXRhc2V0KTtcclxuXHJcbiAgICAgICAgZGF0YXNldCA9IHtcclxuICAgICAgICAgICAgbGFiZWw6IFwiRmlyc3QgUXVhcnRpbGVcIixcclxuICAgICAgICAgICAgeUF4aXNJRDogJ3knLFxyXG4gICAgICAgICAgICBkYXRhOiBib3hQbG90cy5tYXAoKGJveCwgaWR4KSA9PiB7cmV0dXJuIHt4OiBib3hQbG90TGFiZWxzW2lkeF0udG9Mb2NhbGVEYXRlU3RyaW5nKFwiZnItRlJcIiksIHk6IGJveC5maXJzdFF1YXJ0aWxlfX0pLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjM5LCAyNDgsIDI1NSknLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYigyMzksIDI0OCwgMjU1KScsXHJcbiAgICAgICAgICAgIHBvaW50UmFkaXVzOiAwLFxyXG4gICAgICAgICAgICBmaWxsOiBmYWxzZSwgLy9maWxsIHVudGlsIHByZXZpb3VzIGRhdGFzZXRcclxuICAgICAgICAgICAgZGF0YWxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgYW5jaG9yOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIGFsaWduOiAnYm90dG9tJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkYXRhc2V0cy5wdXNoKGRhdGFzZXQpO1xyXG5cclxuICAgICAgICBkYXRhc2V0ID0ge1xyXG4gICAgICAgICAgICBsYWJlbDogXCJUaGlyZCBRdWFydGlsZVwiLFxyXG4gICAgICAgICAgICB5QXhpc0lEOiAneScsXHJcbiAgICAgICAgICAgIGRhdGE6IGJveFBsb3RzLm1hcCgoYm94LCBpZHgpID0+IHtyZXR1cm4ge3g6IGJveFBsb3RMYWJlbHNbaWR4XS50b0xvY2FsZURhdGVTdHJpbmcoXCJmci1GUlwiKSwgeTogYm94LnRoaXJkUXVhcnRpbGV9fSksXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigyMzksIDI0OCwgMjU1KScsXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiKDIzOSwgMjQ4LCAyNTUpJyxcclxuICAgICAgICAgICAgcG9pbnRSYWRpdXM6IDAsXHJcbiAgICAgICAgICAgIGZpbGw6IHtcclxuICAgICAgICAgICAgICAgIHRhcmdldDogJy0xJywgLy9maWxsIHVudGlsIHByZXZpb3VzIGRhdGFzZXRcclxuICAgICAgICAgICAgICAgIGFib3ZlOiAncmdiKDIzOSwgMjQ4LCAyNTUpJywgICAvLyBBcmVhIHdpbGwgYmUgcmVkIGFib3ZlIHRoZSBvcmlnaW5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGF0YWxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgYW5jaG9yOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIGFsaWduOiAnYm90dG9tJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkYXRhc2V0cy5wdXNoKGRhdGFzZXQpO1xyXG5cclxuICAgICAgICBsZXQgZGF0YVRvRGlzcGxheTogSUNoYXJ0RGF0YSA9IHtcclxuICAgICAgICAgICAgbGFiZWxzOiBhbGxMYWJlbHMubWFwKChkYXRlKSA9PiBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImZyLUZSXCIpKSxcclxuICAgICAgICAgICAgZGF0YXNldHM6IGRhdGFzZXRzLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHNldENoYXJ0RGF0YShkYXRhVG9EaXNwbGF5KTtcclxuXHJcbiAgICAgICAgbGV0IG9wdGlvbnM6IElDaGFydE9wdGlvbiA9IHtcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbnM6IGZhbHNlLFxyXG4gICAgICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgICAgICAgIHg6IHtcclxuICAgICAgICAgICAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnRGF0ZSdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeToge1xyXG4gICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdBbW91bnQnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwbHVnaW5zOiB7XHJcbiAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyBhcyBjb25zdCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJDb21wYXJpc29uIG9mIHRoZSBhY2NvdW50J3MgYmFsYW5jZVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGF0YWxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0Q2hhcnRPcHRpb24ob3B0aW9ucyk7XHJcblxyXG4gICB9LCBbYWNjb3VudExpbmVzLCBhbGxBY2NvdW50TGluZXNdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZS1jaGFydC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxMaW5lIHJlZj17Y2hhcnRSZWZlcmVuY2V9IG9wdGlvbnM9e2NoYXJ0T3B0aW9ufSBkYXRhPXtjaGFydERhdGF9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiQ2hhcnQiLCJDaGFydEpTIiwiTGluZWFyU2NhbGUiLCJQb2ludEVsZW1lbnQiLCJMaW5lRWxlbWVudCIsIkNhdGVnb3J5U2NhbGUiLCJUb29sdGlwIiwiVGl0bGUiLCJMZWdlbmQiLCJGaWxsZXIiLCJMaW5lIiwiQ0hBUlRfQ09MT1JTIiwiZ2V0Qm94UGxvdHNGcm9tTGluZXMiLCJVdGlsTWF0aCIsInJlZ2lzdGVyIiwiUXVhcnRpbGVIaXN0b3J5Q2hhcnQiLCJhY2NvdW50TGluZXMiLCJhbGxBY2NvdW50TGluZXMiLCJjaGFydE9wdGlvbiIsInNldENoYXJ0T3B0aW9uIiwicmVzcG9uc2l2ZSIsImFuaW1hdGlvbiIsInNjYWxlcyIsInBsdWdpbnMiLCJjaGFydERhdGEiLCJzZXRDaGFydERhdGEiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImNoYXJ0UmVmZXJlbmNlIiwiY2hhcnQiLCJjdXJyZW50IiwibGVuZ3RoIiwid2lkdGgiLCJjdHgiLCJjYW52YXMiLCJwYXJlbnRFbGVtZW50Iiwic3R5bGUiLCJyZXNpemUiLCJoZWlnaHQiLCJ1cGRhdGUiLCJkYXRhTGFiZWxzIiwiaGlzdG9yeSIsInB1c2giLCJkYXRlIiwiYmFsYW5jZSIsImN1cnJlbnREYXRlIiwiaSIsImdldFRpbWUiLCJtYXhEYXlzT2ZNb250aCIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImJveFBsb3RzIiwiYm94UGxvdExhYmVscyIsImRheUluTW9udGgiLCJNYXRoIiwicm91bmQiLCJtYXAiLCJwY3RJbk1vbnRoIiwiZGF0ZUJveFBsb3QiLCJhbGxMYWJlbHMiLCJkIiwiaW5kZXhPZiIsInNvcnQiLCJhIiwiYiIsImRhdGFzZXQiLCJsYWJlbCIsInlBeGlzSUQiLCJkYXRhIiwiaWR4IiwieCIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmaWxsIiwiZGF0YWxhYmVscyIsImFuY2hvciIsImFsaWduIiwiYm94IiwiZmlyc3RRdWFydGlsZSIsImJvcmRlckNvbG9yIiwicG9pbnRSYWRpdXMiLCJ0aGlyZFF1YXJ0aWxlIiwidGFyZ2V0IiwiYWJvdmUiLCJkYXRhVG9EaXNwbGF5Iiwib3B0aW9ucyIsIm1haW50YWluQXNwZWN0UmF0aW8iLCJhbmltYXRpb25zIiwiYmVnaW5BdFplcm8iLCJ0aXRsZSIsImRpc3BsYXkiLCJ0ZXh0IiwibGVnZW5kIiwicG9zaXRpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Charts/QuartileHistoryChart.tsx\n"));

/***/ })

});