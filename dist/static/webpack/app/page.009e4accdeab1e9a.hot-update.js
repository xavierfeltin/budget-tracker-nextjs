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

/***/ "(app-pages-browser)/./components/Charts/TagBudgetConsumptionChart.tsx":
/*!*********************************************************!*\
  !*** ./components/Charts/TagBudgetConsumptionChart.tsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TagBudgetConsumptionChart: function() { return /* binding */ TagBudgetConsumptionChart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ \"(app-pages-browser)/./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartjs-2 */ \"(app-pages-browser)/./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var _ColorBank__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColorBank */ \"(app-pages-browser)/./components/Charts/ColorBank.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_3__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_3__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_3__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_3__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.Title, chart_js__WEBPACK_IMPORTED_MODULE_3__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_3__.Legend);\nfunction TagBudgetConsumptionChart(param) {\n    let { accountLines, allowedAmount, tag } = param;\n    _s();\n    const [chartOption, setChartOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        responsive: true,\n        animation: {},\n        scales: {},\n        plugins: {}\n    });\n    const [chartData, setChartData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        labels: [],\n        datasets: []\n    });\n    const chartReference = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const dateLabels = [];\n        const budgetConsumption = [];\n        let consumed = 0;\n        if (accountLines.length === 1) {\n            dateLabels.push(accountLines[0].date.toLocaleDateString(\"fr-FR\"));\n            consumed = accountLines[0].debit || 0;\n            budgetConsumption.push(consumed);\n        } else if (accountLines.length > 1) {\n            let currentDate = accountLines[0].date;\n            let currentConsumption = accountLines[0].debit || 0;\n            for(let i = 1; i < accountLines.length; i++){\n                if (accountLines[i].date.getTime() !== currentDate.getTime()) {\n                    dateLabels.push(currentDate.toLocaleDateString(\"fr-FR\"));\n                    consumed += currentConsumption;\n                    budgetConsumption.push(consumed);\n                    currentConsumption = accountLines[i].debit || 0;\n                    currentDate = accountLines[i].date;\n                } else {\n                    currentConsumption += accountLines[i].debit || 0;\n                }\n            }\n            // Push last date\n            dateLabels.push(currentDate.toLocaleDateString(\"fr-FR\"));\n            consumed += currentConsumption;\n            budgetConsumption.push(consumed);\n        }\n        let datasets = [];\n        let dataset = {\n            label: \"Evolution\",\n            yAxisID: \"y\",\n            data: budgetConsumption,\n            backgroundColor: _ColorBank__WEBPACK_IMPORTED_MODULE_2__.CHART_COLORS[0],\n            datalabels: {\n                anchor: \"center\",\n                align: \"bottom\"\n            }\n        };\n        datasets.push(dataset);\n        const budgetLimit = Array(dateLabels.length).fill(allowedAmount);\n        dataset = {\n            label: \"Budget limit\",\n            yAxisID: \"y\",\n            data: budgetLimit,\n            borderColor: _ColorBank__WEBPACK_IMPORTED_MODULE_2__.CHART_COLORS[1],\n            backgroundColor: _ColorBank__WEBPACK_IMPORTED_MODULE_2__.CHART_COLORS[1],\n            datalabels: {\n                anchor: \"center\",\n                align: \"bottom\"\n            }\n        };\n        datasets.push(dataset);\n        let dataToDisplay = {\n            labels: dateLabels,\n            datasets: datasets\n        };\n        setChartData(dataToDisplay);\n        let options = {\n            responsive: true,\n            maintainAspectRatio: false,\n            animations: false,\n            scales: {\n                x: {\n                    beginAtZero: true,\n                    title: {\n                        display: true,\n                        text: \"Date\"\n                    }\n                },\n                y: {\n                    beginAtZero: true,\n                    title: {\n                        display: true,\n                        text: \"Amount\"\n                    }\n                }\n            },\n            plugins: {\n                legend: {\n                    position: \"top\"\n                },\n                title: {\n                    display: true,\n                    text: [\n                        \"Budget consumption for \" + tag,\n                        budgetConsumption[budgetConsumption.length - 1].toFixed(2) + \" / \" + allowedAmount.toFixed(2)\n                    ],\n                    color: budgetConsumption[budgetConsumption.length - 1] <= allowedAmount ? \"#039487\" : \"#cc0000\"\n                },\n                datalabels: {\n                    display: false\n                }\n            }\n        };\n        setChartOption(options);\n    }, [\n        accountLines,\n        allowedAmount,\n        tag\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"month-chart-wrapper\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Line, {\n            ref: chartReference,\n            options: chartOption,\n            data: chartData\n        }, void 0, false, {\n            fileName: \"D:\\\\projet\\\\budget-tracker-nextjs\\\\components\\\\Charts\\\\TagBudgetConsumptionChart.tsx\",\n            lineNumber: 175,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\projet\\\\budget-tracker-nextjs\\\\components\\\\Charts\\\\TagBudgetConsumptionChart.tsx\",\n        lineNumber: 174,\n        columnNumber: 9\n    }, this);\n}\n_s(TagBudgetConsumptionChart, \"T+Oor9KV2M3uqH4y78oywKN5AbQ=\");\n_c = TagBudgetConsumptionChart;\nvar _c;\n$RefreshReg$(_c, \"TagBudgetConsumptionChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ2hhcnRzL1RhZ0J1ZGdldENvbnN1bXB0aW9uQ2hhcnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFvRDtBQVVoQztBQUNtQjtBQUNJO0FBK0IzQ0ksMkNBQU9BLENBQUNVLFFBQVEsQ0FDWlQsaURBQVdBLEVBQ1hDLGtEQUFZQSxFQUNaQyxpREFBV0EsRUFDWEMsbURBQWFBLEVBQ2JFLDJDQUFLQSxFQUNMRCw2Q0FBT0EsRUFDUEUsNENBQU1BO0FBR0gsU0FBU0ksMEJBQTBCLEtBSXBCO1FBSm9CLEVBQ3RDQyxZQUFZLEVBQ1pDLGFBQWEsRUFDYkMsR0FBRyxFQUNlLEdBSm9COztJQU10QyxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR2xCLCtDQUFRQSxDQUFlO1FBQUNtQixZQUFZO1FBQU1DLFdBQVcsQ0FBQztRQUFHQyxRQUFRLENBQUM7UUFBR0MsU0FBUyxDQUFDO0lBQUM7SUFDdEgsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUd4QiwrQ0FBUUEsQ0FBYTtRQUFDeUIsUUFBUSxFQUFFO1FBQUVDLFVBQVUsRUFBRTtJQUFBO0lBRWhGLE1BQU1DLGlCQUFpQjVCLDZDQUFNQSxDQUFDO0lBRTlCRCxnREFBU0EsQ0FBQztRQUVOLE1BQU04QixhQUF1QixFQUFFO1FBQy9CLE1BQU1DLG9CQUE4QixFQUFFO1FBQ3RDLElBQUlDLFdBQVc7UUFFZixJQUFJaEIsYUFBYWlCLE1BQU0sS0FBSyxHQUFHO1lBQzNCSCxXQUFXSSxJQUFJLENBQUNsQixZQUFZLENBQUMsRUFBRSxDQUFDbUIsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQztZQUN4REosV0FBV2hCLFlBQVksQ0FBQyxFQUFFLENBQUNxQixLQUFLLElBQUk7WUFDcENOLGtCQUFrQkcsSUFBSSxDQUFDRjtRQUMzQixPQUNLLElBQUloQixhQUFhaUIsTUFBTSxHQUFHLEdBQUc7WUFDOUIsSUFBSUssY0FBY3RCLFlBQVksQ0FBQyxFQUFFLENBQUNtQixJQUFJO1lBQ3RDLElBQUlJLHFCQUFxQnZCLFlBQVksQ0FBQyxFQUFFLENBQUNxQixLQUFLLElBQUk7WUFFbEQsSUFBSSxJQUFJRyxJQUFJLEdBQUdBLElBQUl4QixhQUFhaUIsTUFBTSxFQUFFTyxJQUN4QztnQkFDSSxJQUFJeEIsWUFBWSxDQUFDd0IsRUFBRSxDQUFDTCxJQUFJLENBQUNNLE9BQU8sT0FBT0gsWUFBWUcsT0FBTyxJQUFJO29CQUMxRFgsV0FBV0ksSUFBSSxDQUFDSSxZQUFZRixrQkFBa0IsQ0FBQztvQkFDL0NKLFlBQVlPO29CQUNaUixrQkFBa0JHLElBQUksQ0FBQ0Y7b0JBRXZCTyxxQkFBcUJ2QixZQUFZLENBQUN3QixFQUFFLENBQUNILEtBQUssSUFBSTtvQkFDOUNDLGNBQWN0QixZQUFZLENBQUN3QixFQUFFLENBQUNMLElBQUk7Z0JBQ3RDLE9BQ0s7b0JBQ0RJLHNCQUFzQnZCLFlBQVksQ0FBQ3dCLEVBQUUsQ0FBQ0gsS0FBSyxJQUFJO2dCQUNuRDtZQUNKO1lBRUEsaUJBQWlCO1lBQ2pCUCxXQUFXSSxJQUFJLENBQUNJLFlBQVlGLGtCQUFrQixDQUFDO1lBQy9DSixZQUFZTztZQUNaUixrQkFBa0JHLElBQUksQ0FBQ0Y7UUFDM0I7UUFFQSxJQUFJSixXQUE0QixFQUFFO1FBQ2xDLElBQUljLFVBQXlCO1lBQ3pCQyxPQUFPO1lBQ1BDLFNBQVM7WUFDVEMsTUFBTWQ7WUFDTmUsaUJBQWlCakMsb0RBQVksQ0FBQyxFQUFFO1lBQ2hDa0MsWUFBWTtnQkFDUkMsUUFBUTtnQkFDUkMsT0FBTztZQUNYO1FBQ0o7UUFDQXJCLFNBQVNNLElBQUksQ0FBQ1E7UUFFZCxNQUFNUSxjQUF3QkMsTUFBTXJCLFdBQVdHLE1BQU0sRUFBRW1CLElBQUksQ0FBQ25DO1FBQzVEeUIsVUFBVTtZQUNOQyxPQUFPO1lBQ1BDLFNBQVM7WUFDVEMsTUFBTUs7WUFDTkcsYUFBYXhDLG9EQUFZLENBQUMsRUFBRTtZQUM1QmlDLGlCQUFpQmpDLG9EQUFZLENBQUMsRUFBRTtZQUNoQ2tDLFlBQVk7Z0JBQ1JDLFFBQVE7Z0JBQ1JDLE9BQU87WUFDWDtRQUNKO1FBQ0FyQixTQUFTTSxJQUFJLENBQUNRO1FBRWQsSUFBSVksZ0JBQTRCO1lBQzVCM0IsUUFBUUc7WUFDUkYsVUFBVUE7UUFDZDtRQUVBRixhQUFhNEI7UUFFYixJQUFJQyxVQUF3QjtZQUN4QmxDLFlBQVk7WUFDWm1DLHFCQUFxQjtZQUNyQkMsWUFBWTtZQUNabEMsUUFBUTtnQkFDSm1DLEdBQUc7b0JBQ0NDLGFBQWE7b0JBQ2JDLE9BQU87d0JBQ0hDLFNBQVM7d0JBQ1RDLE1BQU07b0JBQ1Y7Z0JBQ0o7Z0JBQ0FDLEdBQUc7b0JBQ0NKLGFBQWE7b0JBQ2JDLE9BQU87d0JBQ0hDLFNBQVM7d0JBQ1RDLE1BQU07b0JBQ1Y7Z0JBQ0o7WUFDSjtZQUNBdEMsU0FBUztnQkFDTHdDLFFBQVE7b0JBQ0xDLFVBQVU7Z0JBQ2I7Z0JBQ0FMLE9BQU87b0JBQ0hDLFNBQVM7b0JBQ1RDLE1BQU07d0JBQUMsNEJBQTRCNUM7d0JBQUthLGlCQUFpQixDQUFDQSxrQkFBa0JFLE1BQU0sR0FBQyxFQUFFLENBQUNpQyxPQUFPLENBQUMsS0FBSyxRQUFRakQsY0FBY2lELE9BQU8sQ0FBQztxQkFBRztvQkFDcElDLE9BQU9wQyxpQkFBaUIsQ0FBQ0Esa0JBQWtCRSxNQUFNLEdBQUMsRUFBRSxJQUFJaEIsZ0JBQWdCLFlBQVk7Z0JBQ3hGO2dCQUNBOEIsWUFBWTtvQkFDUmMsU0FBUztnQkFDYjtZQUNKO1FBQ0o7UUFDQXpDLGVBQWVtQztJQUVwQixHQUFHO1FBQUN2QztRQUFjQztRQUFlQztLQUFJO0lBRXBDLHFCQUNJLDhEQUFDa0Q7UUFBSUMsV0FBVTtrQkFDWCw0RUFBQ3pELGlEQUFJQTtZQUFDMEQsS0FBS3pDO1lBQWdCMEIsU0FBU3BDO1lBQWEwQixNQUFNcEI7Ozs7Ozs7Ozs7O0FBR25FO0dBNUhnQlY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGFydHMvVGFnQnVkZ2V0Q29uc3VtcHRpb25DaGFydC50c3g/YzI0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICAgIENoYXJ0IGFzIENoYXJ0SlMsXHJcbiAgICBMaW5lYXJTY2FsZSxcclxuICAgIFBvaW50RWxlbWVudCxcclxuICAgIExpbmVFbGVtZW50LFxyXG4gICAgQ2F0ZWdvcnlTY2FsZSxcclxuICAgIFRvb2x0aXAsXHJcbiAgICBUaXRsZSxcclxuICAgIExlZ2VuZFxyXG4gIH0gZnJvbSAnY2hhcnQuanMnO1xyXG5pbXBvcnQgeyBMaW5lIH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJztcclxuaW1wb3J0IHsgQ0hBUlRfQ09MT1JTIH0gZnJvbSBcIi4vQ29sb3JCYW5rXCI7XHJcbmltcG9ydCB7IElBY2NvdW50TGluZSwgVEJ1ZGdldCB9IGZyb20gXCIuLi9EYXRhL0JhbmtcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW5wdXRSYW5nZVByb3BzIHtcclxuICAgIGFjY291bnRMaW5lczogSUFjY291bnRMaW5lW107XHJcbiAgICB0YWc6IHN0cmluZztcclxuICAgIGFsbG93ZWRBbW91bnQ6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ2hhcnREYXRhc2V0IHtcclxuICAgIGxhYmVsOiBzdHJpbmc7XHJcbiAgICB5QXhpc0lEPzogc3RyaW5nO1xyXG4gICAgZGF0YTogbnVtYmVyW107XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcclxuICAgIGRhdGFsYWJlbHM6IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ2hhcnREYXRhIHtcclxuICAgIGxhYmVsczogc3RyaW5nW107XHJcbiAgICBkYXRhc2V0czogSUNoYXJ0RGF0YXNldFtdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDaGFydE9wdGlvbiB7XHJcbiAgICByZXNwb25zaXZlOiBib29sZWFuO1xyXG4gICAgbWFpbnRhaW5Bc3BlY3RSYXRpbz86IGJvb2xlYW47XHJcbiAgICBzY2FsZXM6IGFueTtcclxuICAgIGFuaW1hdGlvbj86IGFueTtcclxuICAgIGFuaW1hdGlvbnM/OiBhbnk7XHJcbiAgICBwbHVnaW5zOiBhbnk7XHJcbn1cclxuXHJcbkNoYXJ0SlMucmVnaXN0ZXIoXHJcbiAgICBMaW5lYXJTY2FsZSxcclxuICAgIFBvaW50RWxlbWVudCxcclxuICAgIExpbmVFbGVtZW50LFxyXG4gICAgQ2F0ZWdvcnlTY2FsZSxcclxuICAgIFRpdGxlLFxyXG4gICAgVG9vbHRpcCxcclxuICAgIExlZ2VuZFxyXG4pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRhZ0J1ZGdldENvbnN1bXB0aW9uQ2hhcnQoe1xyXG4gICAgYWNjb3VudExpbmVzLFxyXG4gICAgYWxsb3dlZEFtb3VudCxcclxuICAgIHRhZ1xyXG4gICAgfTogSW5wdXRSYW5nZVByb3BzKTogSlNYLkVsZW1lbnQge1xyXG5cclxuICAgIGNvbnN0IFtjaGFydE9wdGlvbiwgc2V0Q2hhcnRPcHRpb25dID0gdXNlU3RhdGU8SUNoYXJ0T3B0aW9uPih7cmVzcG9uc2l2ZTogdHJ1ZSwgYW5pbWF0aW9uOiB7fSwgc2NhbGVzOiB7fSwgcGx1Z2luczoge319KTtcclxuICAgIGNvbnN0IFtjaGFydERhdGEsIHNldENoYXJ0RGF0YV0gPSB1c2VTdGF0ZTxJQ2hhcnREYXRhPih7bGFiZWxzOiBbXSwgZGF0YXNldHM6IFtdfSk7XHJcblxyXG4gICAgY29uc3QgY2hhcnRSZWZlcmVuY2UgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0ZUxhYmVsczogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBjb25zdCBidWRnZXRDb25zdW1wdGlvbjogbnVtYmVyW10gPSBbXTtcclxuICAgICAgICBsZXQgY29uc3VtZWQgPSAwO1xyXG5cclxuICAgICAgICBpZiAoYWNjb3VudExpbmVzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICBkYXRlTGFiZWxzLnB1c2goYWNjb3VudExpbmVzWzBdLmRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZnItRlJcIikpO1xyXG4gICAgICAgICAgICBjb25zdW1lZCA9IGFjY291bnRMaW5lc1swXS5kZWJpdCB8fCAwO1xyXG4gICAgICAgICAgICBidWRnZXRDb25zdW1wdGlvbi5wdXNoKGNvbnN1bWVkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYWNjb3VudExpbmVzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnREYXRlID0gYWNjb3VudExpbmVzWzBdLmRhdGU7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50Q29uc3VtcHRpb24gPSBhY2NvdW50TGluZXNbMF0uZGViaXQgfHwgMDtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPCBhY2NvdW50TGluZXMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmIChhY2NvdW50TGluZXNbaV0uZGF0ZS5nZXRUaW1lKCkgIT09IGN1cnJlbnREYXRlLmdldFRpbWUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGVMYWJlbHMucHVzaChjdXJyZW50RGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJmci1GUlwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3VtZWQgKz0gY3VycmVudENvbnN1bXB0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1ZGdldENvbnN1bXB0aW9uLnB1c2goY29uc3VtZWQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q29uc3VtcHRpb24gPSBhY2NvdW50TGluZXNbaV0uZGViaXQgfHwgMDtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RGF0ZSA9IGFjY291bnRMaW5lc1tpXS5kYXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudENvbnN1bXB0aW9uICs9IGFjY291bnRMaW5lc1tpXS5kZWJpdCB8fCAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBQdXNoIGxhc3QgZGF0ZVxyXG4gICAgICAgICAgICBkYXRlTGFiZWxzLnB1c2goY3VycmVudERhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZnItRlJcIikpO1xyXG4gICAgICAgICAgICBjb25zdW1lZCArPSBjdXJyZW50Q29uc3VtcHRpb247XHJcbiAgICAgICAgICAgIGJ1ZGdldENvbnN1bXB0aW9uLnB1c2goY29uc3VtZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGRhdGFzZXRzOiBJQ2hhcnREYXRhc2V0W10gPSBbXTtcclxuICAgICAgICBsZXQgZGF0YXNldDogSUNoYXJ0RGF0YXNldCA9IHtcclxuICAgICAgICAgICAgbGFiZWw6IFwiRXZvbHV0aW9uXCIsXHJcbiAgICAgICAgICAgIHlBeGlzSUQ6ICd5JyxcclxuICAgICAgICAgICAgZGF0YTogYnVkZ2V0Q29uc3VtcHRpb24sXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogQ0hBUlRfQ09MT1JTWzBdLFxyXG4gICAgICAgICAgICBkYXRhbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICBhbmNob3I6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgYWxpZ246ICdib3R0b20nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGRhdGFzZXRzLnB1c2goZGF0YXNldCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ1ZGdldExpbWl0OiBudW1iZXJbXSA9IEFycmF5KGRhdGVMYWJlbHMubGVuZ3RoKS5maWxsKGFsbG93ZWRBbW91bnQpO1xyXG4gICAgICAgIGRhdGFzZXQgPSB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIkJ1ZGdldCBsaW1pdFwiLFxyXG4gICAgICAgICAgICB5QXhpc0lEOiAneScsXHJcbiAgICAgICAgICAgIGRhdGE6IGJ1ZGdldExpbWl0LFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogQ0hBUlRfQ09MT1JTWzFdLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IENIQVJUX0NPTE9SU1sxXSxcclxuICAgICAgICAgICAgZGF0YWxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgYW5jaG9yOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIGFsaWduOiAnYm90dG9tJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkYXRhc2V0cy5wdXNoKGRhdGFzZXQpO1xyXG5cclxuICAgICAgICBsZXQgZGF0YVRvRGlzcGxheTogSUNoYXJ0RGF0YSA9IHtcclxuICAgICAgICAgICAgbGFiZWxzOiBkYXRlTGFiZWxzLFxyXG4gICAgICAgICAgICBkYXRhc2V0czogZGF0YXNldHMsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgc2V0Q2hhcnREYXRhKGRhdGFUb0Rpc3BsYXkpO1xyXG5cclxuICAgICAgICBsZXQgb3B0aW9uczogSUNoYXJ0T3B0aW9uID0ge1xyXG4gICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcclxuICAgICAgICAgICAgYW5pbWF0aW9uczogZmFsc2UsXHJcbiAgICAgICAgICAgIHNjYWxlczoge1xyXG4gICAgICAgICAgICAgICAgeDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdEYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0Ftb3VudCdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBsdWdpbnM6IHtcclxuICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnIGFzIGNvbnN0LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBbXCJCdWRnZXQgY29uc3VtcHRpb24gZm9yIFwiICsgdGFnLCBidWRnZXRDb25zdW1wdGlvbltidWRnZXRDb25zdW1wdGlvbi5sZW5ndGgtMV0udG9GaXhlZCgyKSArIFwiIC8gXCIgKyBhbGxvd2VkQW1vdW50LnRvRml4ZWQoMildLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBidWRnZXRDb25zdW1wdGlvbltidWRnZXRDb25zdW1wdGlvbi5sZW5ndGgtMV0gPD0gYWxsb3dlZEFtb3VudCA/IFwiIzAzOTQ4N1wiIDogXCIjY2MwMDAwXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRDaGFydE9wdGlvbihvcHRpb25zKTtcclxuXHJcbiAgIH0sIFthY2NvdW50TGluZXMsIGFsbG93ZWRBbW91bnQsIHRhZ10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb250aC1jaGFydC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxMaW5lIHJlZj17Y2hhcnRSZWZlcmVuY2V9IG9wdGlvbnM9e2NoYXJ0T3B0aW9ufSBkYXRhPXtjaGFydERhdGF9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiQ2hhcnQiLCJDaGFydEpTIiwiTGluZWFyU2NhbGUiLCJQb2ludEVsZW1lbnQiLCJMaW5lRWxlbWVudCIsIkNhdGVnb3J5U2NhbGUiLCJUb29sdGlwIiwiVGl0bGUiLCJMZWdlbmQiLCJMaW5lIiwiQ0hBUlRfQ09MT1JTIiwicmVnaXN0ZXIiLCJUYWdCdWRnZXRDb25zdW1wdGlvbkNoYXJ0IiwiYWNjb3VudExpbmVzIiwiYWxsb3dlZEFtb3VudCIsInRhZyIsImNoYXJ0T3B0aW9uIiwic2V0Q2hhcnRPcHRpb24iLCJyZXNwb25zaXZlIiwiYW5pbWF0aW9uIiwic2NhbGVzIiwicGx1Z2lucyIsImNoYXJ0RGF0YSIsInNldENoYXJ0RGF0YSIsImxhYmVscyIsImRhdGFzZXRzIiwiY2hhcnRSZWZlcmVuY2UiLCJkYXRlTGFiZWxzIiwiYnVkZ2V0Q29uc3VtcHRpb24iLCJjb25zdW1lZCIsImxlbmd0aCIsInB1c2giLCJkYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiZGViaXQiLCJjdXJyZW50RGF0ZSIsImN1cnJlbnRDb25zdW1wdGlvbiIsImkiLCJnZXRUaW1lIiwiZGF0YXNldCIsImxhYmVsIiwieUF4aXNJRCIsImRhdGEiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkYXRhbGFiZWxzIiwiYW5jaG9yIiwiYWxpZ24iLCJidWRnZXRMaW1pdCIsIkFycmF5IiwiZmlsbCIsImJvcmRlckNvbG9yIiwiZGF0YVRvRGlzcGxheSIsIm9wdGlvbnMiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwiYW5pbWF0aW9ucyIsIngiLCJiZWdpbkF0WmVybyIsInRpdGxlIiwiZGlzcGxheSIsInRleHQiLCJ5IiwibGVnZW5kIiwicG9zaXRpb24iLCJ0b0ZpeGVkIiwiY29sb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Charts/TagBudgetConsumptionChart.tsx\n"));

/***/ })

});