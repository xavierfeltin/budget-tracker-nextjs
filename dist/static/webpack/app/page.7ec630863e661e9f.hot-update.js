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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   QuartileHistoryChart: function() { return /* binding */ QuartileHistoryChart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chart.js */ \"(app-pages-browser)/./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-chartjs-2 */ \"(app-pages-browser)/./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var _ColorBank__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColorBank */ \"(app-pages-browser)/./components/Charts/ColorBank.ts\");\n/* harmony import */ var _Data_Bank__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Data/Bank */ \"(app-pages-browser)/./components/Data/Bank.ts\");\n/* harmony import */ var _Data_UtilMath__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Data/UtilMath */ \"(app-pages-browser)/./components/Data/UtilMath.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_5__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_5__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_5__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_5__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_5__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_5__.Filler, chart_js__WEBPACK_IMPORTED_MODULE_5__.Title, chart_js__WEBPACK_IMPORTED_MODULE_5__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_5__.Legend);\nfunction QuartileHistoryChart(param) {\n    let { accountLines, allAccountLines } = param;\n    _s();\n    const [chartOption, setChartOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        responsive: true,\n        animation: {},\n        scales: {},\n        plugins: {}\n    });\n    const [chartData, setChartData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        labels: [],\n        datasets: []\n    });\n    const chartReference = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (chartReference) {\n            const chart = chartReference.current;\n            if (chart && chartData.datasets.length > 0) {\n                var _chart_ctx_canvas_parentElement;\n                const width = ((_chart_ctx_canvas_parentElement = chart.ctx.canvas.parentElement) === null || _chart_ctx_canvas_parentElement === void 0 ? void 0 : _chart_ctx_canvas_parentElement.style.width) ? chart.ctx.canvas.width : 1370;\n                chart.resize(width, chart.canvas.height);\n                chart.update();\n            }\n        }\n    }, [\n        chartReference,\n        chartData\n    ]);\n    // Fill space between two lines: https://stackoverflow.com/questions/37866992/filling-area-between-two-lines-chart-js-v2\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const dataLabels = [];\n        const history = [];\n        if (accountLines.length === 1) {\n            dataLabels.push(accountLines[0].date);\n            //dataLabels.push(accountLines[0].pctInMonth)\n            history.push(accountLines[0].balance);\n        } else if (accountLines.length > 1) {\n            let currentDate = accountLines[0].date;\n            for(let i = 1; i < accountLines.length; i++){\n                if (accountLines[i].date.getTime() !== currentDate.getTime()) {\n                    dataLabels.push(currentDate);\n                    //dataLabels.push(accountLines[i-1].pctInMonth)\n                    history.push(accountLines[i - 1].balance);\n                    currentDate = accountLines[i].date;\n                } else if (i === accountLines.length - 1 && accountLines[i].date.getTime() === currentDate.getTime()) {\n                    dataLabels.push(currentDate);\n                    //dataLabels.push(accountLines[i-1].pctInMonth)\n                    history.push(accountLines[i - 1].balance);\n                }\n            }\n        }\n        const date = accountLines[accountLines.length - 1].date;\n        const maxDaysOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();\n        const boxPlots = (0,_Data_Bank__WEBPACK_IMPORTED_MODULE_3__.getBoxPlotsFromLines)(allAccountLines);\n        const boxPlotLabels = [];\n        for(let i = 0; i < boxPlots.length; i++){\n            const dayInMonth = Math.round(_Data_UtilMath__WEBPACK_IMPORTED_MODULE_4__.UtilMath.map(boxPlots[i].pctInMonth, 1, 100, 1, maxDaysOfMonth));\n            const dateBoxPlot = new Date(date.getFullYear(), date.getMonth(), dayInMonth);\n            boxPlotLabels.push(dateBoxPlot);\n        }\n        const allLabels = [\n            ...boxPlotLabels\n        ];\n        for(let i = 0; i < dataLabels.length; i++){\n            if (allLabels.map((d)=>d.getTime()).indexOf(dataLabels[i].getTime()) === -1) {\n                allLabels.push(dataLabels[i]);\n            }\n        }\n        allLabels.sort((a, b)=>a.getTime() - b.getTime());\n        let datasets = [];\n        let dataset = {\n            label: \"Balance\",\n            yAxisID: \"y\",\n            data: history.map((data, idx)=>{\n                return {\n                    x: dataLabels[idx].toLocaleDateString(\"fr-FR\"),\n                    y: data\n                };\n            }),\n            backgroundColor: _ColorBank__WEBPACK_IMPORTED_MODULE_2__.CHART_COLORS[0],\n            fill: false,\n            datalabels: {\n                anchor: \"center\",\n                align: \"bottom\"\n            }\n        };\n        datasets.push(dataset);\n        dataset = {\n            label: \"First Quartile\",\n            yAxisID: \"y\",\n            data: boxPlots.map((box, idx)=>{\n                return {\n                    x: boxPlotLabels[idx].toLocaleDateString(\"fr-FR\"),\n                    y: box.firstQuartile\n                };\n            }),\n            backgroundColor: _ColorBank__WEBPACK_IMPORTED_MODULE_2__.CHART_COLORS[1],\n            borderColor: _ColorBank__WEBPACK_IMPORTED_MODULE_2__.CHART_COLORS[1],\n            pointRadius: 0,\n            fill: false,\n            datalabels: {\n                anchor: \"center\",\n                align: \"bottom\"\n            }\n        };\n        datasets.push(dataset);\n        dataset = {\n            label: \"Third Quartile\",\n            yAxisID: \"y\",\n            data: boxPlots.map((box, idx)=>{\n                return {\n                    x: boxPlotLabels[idx].toLocaleDateString(\"fr-FR\"),\n                    y: box.thirdQuartile\n                };\n            }),\n            backgroundColor: _ColorBank__WEBPACK_IMPORTED_MODULE_2__.CHART_COLORS[1],\n            borderColor: _ColorBank__WEBPACK_IMPORTED_MODULE_2__.CHART_COLORS[1],\n            pointRadius: 0,\n            fill: \"-1\",\n            datalabels: {\n                anchor: \"center\",\n                align: \"bottom\"\n            }\n        };\n        datasets.push(dataset);\n        let dataToDisplay = {\n            labels: allLabels.map((date)=>date.toLocaleDateString(\"fr-FR\")),\n            datasets: datasets\n        };\n        setChartData(dataToDisplay);\n        let options = {\n            responsive: true,\n            maintainAspectRatio: false,\n            animations: false,\n            scales: {\n                x: {\n                    beginAtZero: true,\n                    title: {\n                        display: true,\n                        text: \"Date\"\n                    }\n                },\n                y: {\n                    beginAtZero: true,\n                    title: {\n                        display: true,\n                        text: \"Amount\"\n                    }\n                }\n            },\n            plugins: {\n                legend: {\n                    position: \"top\"\n                },\n                title: {\n                    display: true,\n                    text: \"Comparison of the account's balance\"\n                },\n                datalabels: {\n                    display: false\n                }\n            }\n        };\n        setChartOption(options);\n    }, [\n        accountLines,\n        allAccountLines\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"time-chart-wrapper\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__.Line, {\n            ref: chartReference,\n            options: chartOption,\n            data: chartData\n        }, void 0, false, {\n            fileName: \"D:\\\\projet\\\\budget-tracker-nextjs\\\\components\\\\Charts\\\\QuartileHistoryChart.tsx\",\n            lineNumber: 218,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\projet\\\\budget-tracker-nextjs\\\\components\\\\Charts\\\\QuartileHistoryChart.tsx\",\n        lineNumber: 217,\n        columnNumber: 9\n    }, this);\n}\n_s(QuartileHistoryChart, \"FoTWsYANwTxhQBbJG1664sLH0eo=\");\n_c = QuartileHistoryChart;\nvar _c;\n$RefreshReg$(_c, \"QuartileHistoryChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ2hhcnRzL1F1YXJ0aWxlSGlzdG9yeUNoYXJ0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFvRDtBQVdoQztBQUNtQjtBQUNJO0FBQ3VCO0FBQ3RCO0FBZ0M1Q0ksMkNBQU9BLENBQUNhLFFBQVEsQ0FDWlosaURBQVdBLEVBQ1hDLGtEQUFZQSxFQUNaQyxpREFBV0EsRUFDWEMsbURBQWFBLEVBQ2JJLDRDQUFNQSxFQUNORiwyQ0FBS0EsRUFDTEQsNkNBQU9BLEVBQ1BFLDRDQUFNQTtBQUdILFNBQVNPLHFCQUFxQixLQUdmO1FBSGUsRUFDakNDLFlBQVksRUFDWkMsZUFBZSxFQUNHLEdBSGU7O0lBS2pDLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHcEIsK0NBQVFBLENBQWU7UUFBQ3FCLFlBQVk7UUFBTUMsV0FBVyxDQUFDO1FBQUdDLFFBQVEsQ0FBQztRQUFHQyxTQUFTLENBQUM7SUFBQztJQUN0SCxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBRzFCLCtDQUFRQSxDQUFhO1FBQUMyQixRQUFRLEVBQUU7UUFBRUMsVUFBVSxFQUFFO0lBQUE7SUFFaEYsTUFBTUMsaUJBQWlCOUIsNkNBQU1BLENBQUM7SUFFOUJELGdEQUFTQSxDQUFDO1FBQ04sSUFBSStCLGdCQUFnQjtZQUNoQixNQUFNQyxRQUFRRCxlQUFlRSxPQUFPO1lBQ3BDLElBQUlELFNBQVNMLFVBQVVHLFFBQVEsQ0FBQ0ksTUFBTSxHQUFHLEdBQUc7b0JBQzFCRjtnQkFBZCxNQUFNRyxRQUFRSCxFQUFBQSxrQ0FBQUEsTUFBTUksR0FBRyxDQUFDQyxNQUFNLENBQUNDLGFBQWEsY0FBOUJOLHNEQUFBQSxnQ0FBZ0NPLEtBQUssQ0FBQ0osS0FBSyxJQUFHSCxNQUFNSSxHQUFHLENBQUNDLE1BQU0sQ0FBQ0YsS0FBSyxHQUFHO2dCQUNyRkgsTUFBTVEsTUFBTSxDQUFDTCxPQUFPSCxNQUFNSyxNQUFNLENBQUNJLE1BQU07Z0JBQ3ZDVCxNQUFNVSxNQUFNO1lBQ2hCO1FBQ0o7SUFDSixHQUFFO1FBQUNYO1FBQWdCSjtLQUFVO0lBRTdCLHdIQUF3SDtJQUN4SDNCLGdEQUFTQSxDQUFDO1FBRU4sTUFBTTJDLGFBQXFCLEVBQUU7UUFDN0IsTUFBTUMsVUFBb0IsRUFBRTtRQUU1QixJQUFJekIsYUFBYWUsTUFBTSxLQUFLLEdBQUc7WUFDM0JTLFdBQVdFLElBQUksQ0FBQzFCLFlBQVksQ0FBQyxFQUFFLENBQUMyQixJQUFJO1lBQ3BDLDZDQUE2QztZQUM3Q0YsUUFBUUMsSUFBSSxDQUFDMUIsWUFBWSxDQUFDLEVBQUUsQ0FBQzRCLE9BQU87UUFDeEMsT0FDSyxJQUFJNUIsYUFBYWUsTUFBTSxHQUFHLEdBQUc7WUFDOUIsSUFBSWMsY0FBYzdCLFlBQVksQ0FBQyxFQUFFLENBQUMyQixJQUFJO1lBQ3RDLElBQUksSUFBSUcsSUFBSSxHQUFHQSxJQUFJOUIsYUFBYWUsTUFBTSxFQUFFZSxJQUN4QztnQkFDSSxJQUFJOUIsWUFBWSxDQUFDOEIsRUFBRSxDQUFDSCxJQUFJLENBQUNJLE9BQU8sT0FBT0YsWUFBWUUsT0FBTyxJQUFJO29CQUMxRFAsV0FBV0UsSUFBSSxDQUFDRztvQkFDaEIsK0NBQStDO29CQUMvQ0osUUFBUUMsSUFBSSxDQUFDMUIsWUFBWSxDQUFDOEIsSUFBRSxFQUFFLENBQUNGLE9BQU87b0JBQ3RDQyxjQUFjN0IsWUFBWSxDQUFDOEIsRUFBRSxDQUFDSCxJQUFJO2dCQUN0QyxPQUNLLElBQUlHLE1BQU05QixhQUFhZSxNQUFNLEdBQUMsS0FBS2YsWUFBWSxDQUFDOEIsRUFBRSxDQUFDSCxJQUFJLENBQUNJLE9BQU8sT0FBT0YsWUFBWUUsT0FBTyxJQUFJO29CQUM5RlAsV0FBV0UsSUFBSSxDQUFDRztvQkFDaEIsK0NBQStDO29CQUMvQ0osUUFBUUMsSUFBSSxDQUFDMUIsWUFBWSxDQUFDOEIsSUFBRSxFQUFFLENBQUNGLE9BQU87Z0JBQzFDO1lBQ0o7UUFDSjtRQUVBLE1BQU1ELE9BQU8zQixZQUFZLENBQUNBLGFBQWFlLE1BQU0sR0FBQyxFQUFFLENBQUNZLElBQUk7UUFDckQsTUFBTUssaUJBQWlCLElBQUlDLEtBQUtOLEtBQUtPLFdBQVcsSUFBSVAsS0FBS1EsUUFBUSxLQUFHLEdBQUcsR0FBR0MsT0FBTztRQUVqRixNQUFNQyxXQUFXekMsZ0VBQW9CQSxDQUFDSztRQUN0QyxNQUFNcUMsZ0JBQXdCLEVBQUU7UUFDaEMsSUFBSyxJQUFJUixJQUFJLEdBQUdBLElBQUlPLFNBQVN0QixNQUFNLEVBQUVlLElBQUs7WUFDdEMsTUFBTVMsYUFBYUMsS0FBS0MsS0FBSyxDQUFDNUMsb0RBQVFBLENBQUM2QyxHQUFHLENBQUNMLFFBQVEsQ0FBQ1AsRUFBRSxDQUFDYSxVQUFVLEVBQUUsR0FBRyxLQUFLLEdBQUdYO1lBQzlFLE1BQU1ZLGNBQWMsSUFBSVgsS0FBS04sS0FBS08sV0FBVyxJQUFJUCxLQUFLUSxRQUFRLElBQUlJO1lBQ2xFRCxjQUFjWixJQUFJLENBQUNrQjtRQUN2QjtRQUVBLE1BQU1DLFlBQW9CO2VBQUlQO1NBQWM7UUFDNUMsSUFBSyxJQUFJUixJQUFJLEdBQUdBLElBQUlOLFdBQVdULE1BQU0sRUFBRWUsSUFBSztZQUN4QyxJQUFJZSxVQUFVSCxHQUFHLENBQUMsQ0FBQ0ksSUFBTUEsRUFBRWYsT0FBTyxJQUFJZ0IsT0FBTyxDQUFDdkIsVUFBVSxDQUFDTSxFQUFFLENBQUNDLE9BQU8sUUFBUSxDQUFDLEdBQUc7Z0JBQzNFYyxVQUFVbkIsSUFBSSxDQUFDRixVQUFVLENBQUNNLEVBQUU7WUFDaEM7UUFDSjtRQUNBZSxVQUFVRyxJQUFJLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTUQsRUFBRWxCLE9BQU8sS0FBS21CLEVBQUVuQixPQUFPO1FBRWhELElBQUlwQixXQUE0QixFQUFFO1FBQ2xDLElBQUl3QyxVQUF5QjtZQUN6QkMsT0FBTztZQUNQQyxTQUFTO1lBQ1RDLE1BQU03QixRQUFRaUIsR0FBRyxDQUFDLENBQUNZLE1BQU1DO2dCQUFTLE9BQU87b0JBQUNDLEdBQUdoQyxVQUFVLENBQUMrQixJQUFJLENBQUNFLGtCQUFrQixDQUFDO29CQUFVQyxHQUFHSjtnQkFBSTtZQUFDO1lBQ2xHSyxpQkFBaUJoRSxvREFBWSxDQUFDLEVBQUU7WUFDaENpRSxNQUFNO1lBQ05DLFlBQVk7Z0JBQ1JDLFFBQVE7Z0JBQ1JDLE9BQU87WUFDWDtRQUNKO1FBQ0FwRCxTQUFTZSxJQUFJLENBQUN5QjtRQUVkQSxVQUFVO1lBQ05DLE9BQU87WUFDUEMsU0FBUztZQUNUQyxNQUFNakIsU0FBU0ssR0FBRyxDQUFDLENBQUNzQixLQUFLVDtnQkFBUyxPQUFPO29CQUFDQyxHQUFHbEIsYUFBYSxDQUFDaUIsSUFBSSxDQUFDRSxrQkFBa0IsQ0FBQztvQkFBVUMsR0FBR00sSUFBSUMsYUFBYTtnQkFBQTtZQUFDO1lBQ2xITixpQkFBaUJoRSxvREFBWSxDQUFDLEVBQUU7WUFDaEN1RSxhQUFhdkUsb0RBQVksQ0FBQyxFQUFFO1lBQzVCd0UsYUFBYTtZQUNiUCxNQUFNO1lBQ05DLFlBQVk7Z0JBQ1JDLFFBQVE7Z0JBQ1JDLE9BQU87WUFDWDtRQUNKO1FBQ0FwRCxTQUFTZSxJQUFJLENBQUN5QjtRQUVkQSxVQUFVO1lBQ05DLE9BQU87WUFDUEMsU0FBUztZQUNUQyxNQUFNakIsU0FBU0ssR0FBRyxDQUFDLENBQUNzQixLQUFLVDtnQkFBUyxPQUFPO29CQUFDQyxHQUFHbEIsYUFBYSxDQUFDaUIsSUFBSSxDQUFDRSxrQkFBa0IsQ0FBQztvQkFBVUMsR0FBR00sSUFBSUksYUFBYTtnQkFBQTtZQUFDO1lBQ2xIVCxpQkFBaUJoRSxvREFBWSxDQUFDLEVBQUU7WUFDaEN1RSxhQUFhdkUsb0RBQVksQ0FBQyxFQUFFO1lBQzVCd0UsYUFBYTtZQUNiUCxNQUFNO1lBQ05DLFlBQVk7Z0JBQ1JDLFFBQVE7Z0JBQ1JDLE9BQU87WUFDWDtRQUNKO1FBQ0FwRCxTQUFTZSxJQUFJLENBQUN5QjtRQUVkLElBQUlrQixnQkFBNEI7WUFDNUIzRCxRQUFRbUMsVUFBVUgsR0FBRyxDQUFDLENBQUNmLE9BQVNBLEtBQUs4QixrQkFBa0IsQ0FBQztZQUN4RDlDLFVBQVVBO1FBQ2Q7UUFFQUYsYUFBYTREO1FBRWIsSUFBSUMsVUFBd0I7WUFDeEJsRSxZQUFZO1lBQ1ptRSxxQkFBcUI7WUFDckJDLFlBQVk7WUFDWmxFLFFBQVE7Z0JBQ0prRCxHQUFHO29CQUNDaUIsYUFBYTtvQkFDYkMsT0FBTzt3QkFDSEMsU0FBUzt3QkFDVEMsTUFBTTtvQkFDVjtnQkFDSjtnQkFDQWxCLEdBQUc7b0JBQ0NlLGFBQWE7b0JBQ2JDLE9BQU87d0JBQ0hDLFNBQVM7d0JBQ1RDLE1BQU07b0JBQ1Y7Z0JBQ0o7WUFDSjtZQUNBckUsU0FBUztnQkFDTHNFLFFBQVE7b0JBQ0xDLFVBQVU7Z0JBQ2I7Z0JBQ0FKLE9BQU87b0JBQ0hDLFNBQVM7b0JBQ1RDLE1BQU07Z0JBQ1Y7Z0JBQ0FmLFlBQVk7b0JBQ1JjLFNBQVM7Z0JBQ2I7WUFDSjtRQUNKO1FBQ0F4RSxlQUFlbUU7SUFFcEIsR0FBRztRQUFDdEU7UUFBY0M7S0FBZ0I7SUFFakMscUJBQ0ksOERBQUM4RTtRQUFJQyxXQUFVO2tCQUNYLDRFQUFDdEYsaURBQUlBO1lBQUN1RixLQUFLckU7WUFBZ0IwRCxTQUFTcEU7WUFBYW9ELE1BQU05Qzs7Ozs7Ozs7Ozs7QUFHbkU7R0FsS2dCVDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NoYXJ0cy9RdWFydGlsZUhpc3RvcnlDaGFydC50c3g/YzdlNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICAgIENoYXJ0IGFzIENoYXJ0SlMsXHJcbiAgICBMaW5lYXJTY2FsZSxcclxuICAgIFBvaW50RWxlbWVudCxcclxuICAgIExpbmVFbGVtZW50LFxyXG4gICAgQ2F0ZWdvcnlTY2FsZSxcclxuICAgIFRvb2x0aXAsXHJcbiAgICBUaXRsZSxcclxuICAgIExlZ2VuZCxcclxuICAgIEZpbGxlclxyXG4gIH0gZnJvbSAnY2hhcnQuanMnO1xyXG5pbXBvcnQgeyBMaW5lIH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJztcclxuaW1wb3J0IHsgQ0hBUlRfQ09MT1JTIH0gZnJvbSBcIi4vQ29sb3JCYW5rXCI7XHJcbmltcG9ydCB7IElBY2NvdW50TGluZSwgZ2V0Qm94UGxvdHNGcm9tTGluZXMgfSBmcm9tIFwiLi4vRGF0YS9CYW5rXCI7XHJcbmltcG9ydCB7IFV0aWxNYXRoIH0gZnJvbSBcIi4uL0RhdGEvVXRpbE1hdGhcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW5wdXRSYW5nZVByb3BzIHtcclxuICAgIGFjY291bnRMaW5lczogSUFjY291bnRMaW5lW107XHJcbiAgICBhbGxBY2NvdW50TGluZXM6IElBY2NvdW50TGluZVtdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDaGFydERhdGFzZXQge1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxuICAgIHlBeGlzSUQ/OiBzdHJpbmc7XHJcbiAgICBkYXRhOiBhbnk7Ly9udW1iZXJbXTtcclxuICAgIHBvaW50UmFkaXVzPzogbnVtYmVyO1xyXG4gICAgZmlsbD86IG51bWJlciB8IHN0cmluZyB8IGJvb2xlYW47XHJcbiAgICBib3JkZXJDb2xvcj86IHN0cmluZztcclxuICAgIGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xyXG4gICAgZGF0YWxhYmVsczogYW55O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDaGFydERhdGEge1xyXG4gICAgbGFiZWxzOiBzdHJpbmdbXTtcclxuICAgIGRhdGFzZXRzOiBJQ2hhcnREYXRhc2V0W107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNoYXJ0T3B0aW9uIHtcclxuICAgIHJlc3BvbnNpdmU6IGJvb2xlYW47XHJcbiAgICBtYWludGFpbkFzcGVjdFJhdGlvPzogYm9vbGVhbjtcclxuICAgIHNjYWxlczogYW55O1xyXG4gICAgYW5pbWF0aW9uPzogYW55O1xyXG4gICAgYW5pbWF0aW9ucz86IGFueTtcclxuICAgIHBsdWdpbnM6IGFueTtcclxufVxyXG5cclxuQ2hhcnRKUy5yZWdpc3RlcihcclxuICAgIExpbmVhclNjYWxlLFxyXG4gICAgUG9pbnRFbGVtZW50LFxyXG4gICAgTGluZUVsZW1lbnQsXHJcbiAgICBDYXRlZ29yeVNjYWxlLFxyXG4gICAgRmlsbGVyLFxyXG4gICAgVGl0bGUsXHJcbiAgICBUb29sdGlwLFxyXG4gICAgTGVnZW5kXHJcbik7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUXVhcnRpbGVIaXN0b3J5Q2hhcnQoe1xyXG4gICAgYWNjb3VudExpbmVzLFxyXG4gICAgYWxsQWNjb3VudExpbmVzXHJcbiAgICB9OiBJbnB1dFJhbmdlUHJvcHMpOiBKU1guRWxlbWVudCB7XHJcblxyXG4gICAgY29uc3QgW2NoYXJ0T3B0aW9uLCBzZXRDaGFydE9wdGlvbl0gPSB1c2VTdGF0ZTxJQ2hhcnRPcHRpb24+KHtyZXNwb25zaXZlOiB0cnVlLCBhbmltYXRpb246IHt9LCBzY2FsZXM6IHt9LCBwbHVnaW5zOiB7fX0pO1xyXG4gICAgY29uc3QgW2NoYXJ0RGF0YSwgc2V0Q2hhcnREYXRhXSA9IHVzZVN0YXRlPElDaGFydERhdGE+KHtsYWJlbHM6IFtdLCBkYXRhc2V0czogW119KTtcclxuXHJcbiAgICBjb25zdCBjaGFydFJlZmVyZW5jZSA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChjaGFydFJlZmVyZW5jZSkge1xyXG4gICAgICAgICAgICBjb25zdCBjaGFydCA9IGNoYXJ0UmVmZXJlbmNlLmN1cnJlbnQgYXMgQ2hhcnRKU3xudWxsO1xyXG4gICAgICAgICAgICBpZiAoY2hhcnQgJiYgY2hhcnREYXRhLmRhdGFzZXRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gY2hhcnQuY3R4LmNhbnZhcy5wYXJlbnRFbGVtZW50Py5zdHlsZS53aWR0aCA/IGNoYXJ0LmN0eC5jYW52YXMud2lkdGggOiAxMzcwO1xyXG4gICAgICAgICAgICAgICAgY2hhcnQucmVzaXplKHdpZHRoLCBjaGFydC5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGNoYXJ0LnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxbY2hhcnRSZWZlcmVuY2UsIGNoYXJ0RGF0YV0pO1xyXG5cclxuICAgIC8vIEZpbGwgc3BhY2UgYmV0d2VlbiB0d28gbGluZXM6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM3ODY2OTkyL2ZpbGxpbmctYXJlYS1iZXR3ZWVuLXR3by1saW5lcy1jaGFydC1qcy12MlxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YUxhYmVsczogRGF0ZVtdID0gW107XHJcbiAgICAgICAgY29uc3QgaGlzdG9yeTogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICAgICAgaWYgKGFjY291bnRMaW5lcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgZGF0YUxhYmVscy5wdXNoKGFjY291bnRMaW5lc1swXS5kYXRlKTtcclxuICAgICAgICAgICAgLy9kYXRhTGFiZWxzLnB1c2goYWNjb3VudExpbmVzWzBdLnBjdEluTW9udGgpXHJcbiAgICAgICAgICAgIGhpc3RvcnkucHVzaChhY2NvdW50TGluZXNbMF0uYmFsYW5jZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGFjY291bnRMaW5lcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50RGF0ZSA9IGFjY291bnRMaW5lc1swXS5kYXRlO1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAxOyBpIDwgYWNjb3VudExpbmVzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWNjb3VudExpbmVzW2ldLmRhdGUuZ2V0VGltZSgpICE9PSBjdXJyZW50RGF0ZS5nZXRUaW1lKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhTGFiZWxzLnB1c2goY3VycmVudERhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vZGF0YUxhYmVscy5wdXNoKGFjY291bnRMaW5lc1tpLTFdLnBjdEluTW9udGgpXHJcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5wdXNoKGFjY291bnRMaW5lc1tpLTFdLmJhbGFuY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnREYXRlID0gYWNjb3VudExpbmVzW2ldLmRhdGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpID09PSBhY2NvdW50TGluZXMubGVuZ3RoLTEgJiYgYWNjb3VudExpbmVzW2ldLmRhdGUuZ2V0VGltZSgpID09PSBjdXJyZW50RGF0ZS5nZXRUaW1lKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhTGFiZWxzLnB1c2goY3VycmVudERhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vZGF0YUxhYmVscy5wdXNoKGFjY291bnRMaW5lc1tpLTFdLnBjdEluTW9udGgpXHJcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5wdXNoKGFjY291bnRMaW5lc1tpLTFdLmJhbGFuY2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBkYXRlID0gYWNjb3VudExpbmVzW2FjY291bnRMaW5lcy5sZW5ndGgtMV0uZGF0ZTtcclxuICAgICAgICBjb25zdCBtYXhEYXlzT2ZNb250aCA9IG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpKzEsIDApLmdldERhdGUoKTtcclxuXHJcbiAgICAgICAgY29uc3QgYm94UGxvdHMgPSBnZXRCb3hQbG90c0Zyb21MaW5lcyhhbGxBY2NvdW50TGluZXMpO1xyXG4gICAgICAgIGNvbnN0IGJveFBsb3RMYWJlbHM6IERhdGVbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm94UGxvdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZGF5SW5Nb250aCA9IE1hdGgucm91bmQoVXRpbE1hdGgubWFwKGJveFBsb3RzW2ldLnBjdEluTW9udGgsIDEsIDEwMCwgMSwgbWF4RGF5c09mTW9udGgpKTtcclxuICAgICAgICAgICAgY29uc3QgZGF0ZUJveFBsb3QgPSBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF5SW5Nb250aCk7XHJcbiAgICAgICAgICAgIGJveFBsb3RMYWJlbHMucHVzaChkYXRlQm94UGxvdClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGFsbExhYmVsczogRGF0ZVtdID0gWy4uLmJveFBsb3RMYWJlbHNdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YUxhYmVscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoYWxsTGFiZWxzLm1hcCgoZCkgPT4gZC5nZXRUaW1lKCkpLmluZGV4T2YoZGF0YUxhYmVsc1tpXS5nZXRUaW1lKCkpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgYWxsTGFiZWxzLnB1c2goZGF0YUxhYmVsc1tpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYWxsTGFiZWxzLnNvcnQoKGEsIGIpID0+IGEuZ2V0VGltZSgpIC0gYi5nZXRUaW1lKCkpO1xyXG5cclxuICAgICAgICBsZXQgZGF0YXNldHM6IElDaGFydERhdGFzZXRbXSA9IFtdO1xyXG4gICAgICAgIGxldCBkYXRhc2V0OiBJQ2hhcnREYXRhc2V0ID0ge1xyXG4gICAgICAgICAgICBsYWJlbDogXCJCYWxhbmNlXCIsXHJcbiAgICAgICAgICAgIHlBeGlzSUQ6ICd5JyxcclxuICAgICAgICAgICAgZGF0YTogaGlzdG9yeS5tYXAoKGRhdGEsIGlkeCkgPT4ge3JldHVybiB7eDogZGF0YUxhYmVsc1tpZHhdLnRvTG9jYWxlRGF0ZVN0cmluZyhcImZyLUZSXCIpLCB5OiBkYXRhfX0pLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IENIQVJUX0NPTE9SU1swXSxcclxuICAgICAgICAgICAgZmlsbDogZmFsc2UsIC8vZmlsbCB1bnRpbCBwcmV2aW91cyBkYXRhc2V0XHJcbiAgICAgICAgICAgIGRhdGFsYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgIGFuY2hvcjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBhbGlnbjogJ2JvdHRvbSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZGF0YXNldHMucHVzaChkYXRhc2V0KTtcclxuXHJcbiAgICAgICAgZGF0YXNldCA9IHtcclxuICAgICAgICAgICAgbGFiZWw6IFwiRmlyc3QgUXVhcnRpbGVcIixcclxuICAgICAgICAgICAgeUF4aXNJRDogJ3knLFxyXG4gICAgICAgICAgICBkYXRhOiBib3hQbG90cy5tYXAoKGJveCwgaWR4KSA9PiB7cmV0dXJuIHt4OiBib3hQbG90TGFiZWxzW2lkeF0udG9Mb2NhbGVEYXRlU3RyaW5nKFwiZnItRlJcIiksIHk6IGJveC5maXJzdFF1YXJ0aWxlfX0pLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IENIQVJUX0NPTE9SU1sxXSxcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IENIQVJUX0NPTE9SU1sxXSxcclxuICAgICAgICAgICAgcG9pbnRSYWRpdXM6IDAsXHJcbiAgICAgICAgICAgIGZpbGw6IGZhbHNlLCAvL2ZpbGwgdW50aWwgcHJldmlvdXMgZGF0YXNldFxyXG4gICAgICAgICAgICBkYXRhbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICBhbmNob3I6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgYWxpZ246ICdib3R0b20nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGRhdGFzZXRzLnB1c2goZGF0YXNldCk7XHJcblxyXG4gICAgICAgIGRhdGFzZXQgPSB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIlRoaXJkIFF1YXJ0aWxlXCIsXHJcbiAgICAgICAgICAgIHlBeGlzSUQ6ICd5JyxcclxuICAgICAgICAgICAgZGF0YTogYm94UGxvdHMubWFwKChib3gsIGlkeCkgPT4ge3JldHVybiB7eDogYm94UGxvdExhYmVsc1tpZHhdLnRvTG9jYWxlRGF0ZVN0cmluZyhcImZyLUZSXCIpLCB5OiBib3gudGhpcmRRdWFydGlsZX19KSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBDSEFSVF9DT0xPUlNbMV0sXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBDSEFSVF9DT0xPUlNbMV0sXHJcbiAgICAgICAgICAgIHBvaW50UmFkaXVzOiAwLFxyXG4gICAgICAgICAgICBmaWxsOiAnLTEnLCAvL2ZpbGwgdW50aWwgcHJldmlvdXMgZGF0YXNldFxyXG4gICAgICAgICAgICBkYXRhbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICBhbmNob3I6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgYWxpZ246ICdib3R0b20nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGRhdGFzZXRzLnB1c2goZGF0YXNldCk7XHJcblxyXG4gICAgICAgIGxldCBkYXRhVG9EaXNwbGF5OiBJQ2hhcnREYXRhID0ge1xyXG4gICAgICAgICAgICBsYWJlbHM6IGFsbExhYmVscy5tYXAoKGRhdGUpID0+IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZnItRlJcIikpLFxyXG4gICAgICAgICAgICBkYXRhc2V0czogZGF0YXNldHMsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgc2V0Q2hhcnREYXRhKGRhdGFUb0Rpc3BsYXkpO1xyXG5cclxuICAgICAgICBsZXQgb3B0aW9uczogSUNoYXJ0T3B0aW9uID0ge1xyXG4gICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcclxuICAgICAgICAgICAgYW5pbWF0aW9uczogZmFsc2UsXHJcbiAgICAgICAgICAgIHNjYWxlczoge1xyXG4gICAgICAgICAgICAgICAgeDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdEYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0Ftb3VudCdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBsdWdpbnM6IHtcclxuICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnIGFzIGNvbnN0LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkNvbXBhcmlzb24gb2YgdGhlIGFjY291bnQncyBiYWxhbmNlXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRDaGFydE9wdGlvbihvcHRpb25zKTtcclxuXHJcbiAgIH0sIFthY2NvdW50TGluZXMsIGFsbEFjY291bnRMaW5lc10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lLWNoYXJ0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPExpbmUgcmVmPXtjaGFydFJlZmVyZW5jZX0gb3B0aW9ucz17Y2hhcnRPcHRpb259IGRhdGE9e2NoYXJ0RGF0YX0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICApXHJcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJDaGFydCIsIkNoYXJ0SlMiLCJMaW5lYXJTY2FsZSIsIlBvaW50RWxlbWVudCIsIkxpbmVFbGVtZW50IiwiQ2F0ZWdvcnlTY2FsZSIsIlRvb2x0aXAiLCJUaXRsZSIsIkxlZ2VuZCIsIkZpbGxlciIsIkxpbmUiLCJDSEFSVF9DT0xPUlMiLCJnZXRCb3hQbG90c0Zyb21MaW5lcyIsIlV0aWxNYXRoIiwicmVnaXN0ZXIiLCJRdWFydGlsZUhpc3RvcnlDaGFydCIsImFjY291bnRMaW5lcyIsImFsbEFjY291bnRMaW5lcyIsImNoYXJ0T3B0aW9uIiwic2V0Q2hhcnRPcHRpb24iLCJyZXNwb25zaXZlIiwiYW5pbWF0aW9uIiwic2NhbGVzIiwicGx1Z2lucyIsImNoYXJ0RGF0YSIsInNldENoYXJ0RGF0YSIsImxhYmVscyIsImRhdGFzZXRzIiwiY2hhcnRSZWZlcmVuY2UiLCJjaGFydCIsImN1cnJlbnQiLCJsZW5ndGgiLCJ3aWR0aCIsImN0eCIsImNhbnZhcyIsInBhcmVudEVsZW1lbnQiLCJzdHlsZSIsInJlc2l6ZSIsImhlaWdodCIsInVwZGF0ZSIsImRhdGFMYWJlbHMiLCJoaXN0b3J5IiwicHVzaCIsImRhdGUiLCJiYWxhbmNlIiwiY3VycmVudERhdGUiLCJpIiwiZ2V0VGltZSIsIm1heERheXNPZk1vbnRoIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiYm94UGxvdHMiLCJib3hQbG90TGFiZWxzIiwiZGF5SW5Nb250aCIsIk1hdGgiLCJyb3VuZCIsIm1hcCIsInBjdEluTW9udGgiLCJkYXRlQm94UGxvdCIsImFsbExhYmVscyIsImQiLCJpbmRleE9mIiwic29ydCIsImEiLCJiIiwiZGF0YXNldCIsImxhYmVsIiwieUF4aXNJRCIsImRhdGEiLCJpZHgiLCJ4IiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwieSIsImJhY2tncm91bmRDb2xvciIsImZpbGwiLCJkYXRhbGFiZWxzIiwiYW5jaG9yIiwiYWxpZ24iLCJib3giLCJmaXJzdFF1YXJ0aWxlIiwiYm9yZGVyQ29sb3IiLCJwb2ludFJhZGl1cyIsInRoaXJkUXVhcnRpbGUiLCJkYXRhVG9EaXNwbGF5Iiwib3B0aW9ucyIsIm1haW50YWluQXNwZWN0UmF0aW8iLCJhbmltYXRpb25zIiwiYmVnaW5BdFplcm8iLCJ0aXRsZSIsImRpc3BsYXkiLCJ0ZXh0IiwibGVnZW5kIiwicG9zaXRpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Charts/QuartileHistoryChart.tsx\n"));

/***/ })

});