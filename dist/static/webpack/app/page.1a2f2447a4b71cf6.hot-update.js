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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TagBudgetConsumptionChart: function() { return /* binding */ TagBudgetConsumptionChart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ \"(app-pages-browser)/./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartjs-2 */ \"(app-pages-browser)/./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var _ColorBank__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColorBank */ \"(app-pages-browser)/./components/Charts/ColorBank.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_3__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_3__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_3__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_3__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.Title, chart_js__WEBPACK_IMPORTED_MODULE_3__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_3__.Legend);\nfunction TagBudgetConsumptionChart(param) {\n    let { accountLines, allowedAmount, tag } = param;\n    _s();\n    const [chartOption, setChartOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        responsive: true,\n        animation: {},\n        scales: {},\n        plugins: {}\n    });\n    const [chartData, setChartData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        labels: [],\n        datasets: []\n    });\n    const chartReference = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const dateLabels = [];\n        const budgetConsumption = [];\n        let consumed = 0;\n        const taggedLines = tag === \"\" ? accountLines : accountLines.filter((line)=>line.tags.indexOf(tag) !== -1);\n        if (taggedLines.length === 1) {\n            dateLabels.push(taggedLines[0].date.toLocaleDateString(\"fr-FR\"));\n            consumed = taggedLines[0].debit || 0;\n            budgetConsumption.push(consumed);\n        } else if (taggedLines.length > 1) {\n            let currentDate = taggedLines[0].date;\n            let currentConsumption = taggedLines[0].debit || 0;\n            for(let i = 1; i < taggedLines.length; i++){\n                if (taggedLines[i].date.getTime() !== currentDate.getTime()) {\n                    dateLabels.push(currentDate.toLocaleDateString(\"fr-FR\"));\n                    consumed += currentConsumption;\n                    budgetConsumption.push(consumed);\n                    currentConsumption = taggedLines[i].debit || 0;\n                    currentDate = taggedLines[i].date;\n                } else {\n                    currentConsumption += taggedLines[i].debit || 0;\n                }\n            }\n            // Push last date\n            dateLabels.push(currentDate.toLocaleDateString(\"fr-FR\"));\n            consumed += currentConsumption;\n            budgetConsumption.push(consumed);\n        }\n        let datasets = [];\n        let dataset = {\n            label: \"Evolution\",\n            yAxisID: \"y\",\n            data: budgetConsumption,\n            backgroundColor: _ColorBank__WEBPACK_IMPORTED_MODULE_2__.CHART_COLORS[0],\n            datalabels: {\n                anchor: \"center\",\n                align: \"bottom\"\n            }\n        };\n        datasets.push(dataset);\n        if (allowedAmount > 0) {\n            const budgetLimit = Array(dateLabels.length).fill(allowedAmount);\n            dataset = {\n                label: \"Budget limit\",\n                yAxisID: \"y\",\n                data: budgetLimit,\n                pointRadius: 0,\n                borderColor: _ColorBank__WEBPACK_IMPORTED_MODULE_2__.CHART_COLORS[1],\n                backgroundColor: _ColorBank__WEBPACK_IMPORTED_MODULE_2__.CHART_COLORS[1],\n                datalabels: {\n                    anchor: \"center\",\n                    align: \"bottom\"\n                }\n            };\n            datasets.push(dataset);\n        }\n        let dataToDisplay = {\n            labels: dateLabels,\n            datasets: datasets\n        };\n        setChartData(dataToDisplay);\n        const chartTitle = [\n            \"Budget consumption for \" + tag\n        ];\n        let titleColor = \"\";\n        if (allowedAmount.length > 0) {\n            chartTitle.push(budgetConsumption[budgetConsumption.length - 1].toFixed(2) + \" / \" + allowedAmount.toFixed(2));\n            titleColor = budgetConsumption[budgetConsumption.length - 1] <= allowedAmount ? \"#039487\" : \"#cc0000\";\n        }\n        let options = {\n            responsive: true,\n            maintainAspectRatio: false,\n            animations: false,\n            scales: {\n                x: {\n                    beginAtZero: true,\n                    title: {\n                        display: true,\n                        text: \"Date\"\n                    }\n                },\n                y: {\n                    beginAtZero: true,\n                    title: {\n                        display: true,\n                        text: \"Amount\"\n                    },\n                    grace: \"5%\"\n                }\n            },\n            plugins: {\n                legend: {\n                    position: \"top\"\n                },\n                title: {\n                    display: true,\n                    text: chartTitle,\n                    color: titleColor\n                },\n                datalabels: {\n                    display: false\n                }\n            }\n        };\n        setChartOption(options);\n    }, [\n        accountLines,\n        allowedAmount,\n        tag\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"month-chart-wrapper\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Line, {\n            ref: chartReference,\n            options: chartOption,\n            data: chartData\n        }, void 0, false, {\n            fileName: \"D:\\\\projet\\\\budget-tracker-nextjs\\\\components\\\\Charts\\\\TagBudgetConsumptionChart.tsx\",\n            lineNumber: 190,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\projet\\\\budget-tracker-nextjs\\\\components\\\\Charts\\\\TagBudgetConsumptionChart.tsx\",\n        lineNumber: 189,\n        columnNumber: 9\n    }, this);\n}\n_s(TagBudgetConsumptionChart, \"T+Oor9KV2M3uqH4y78oywKN5AbQ=\");\n_c = TagBudgetConsumptionChart;\nvar _c;\n$RefreshReg$(_c, \"TagBudgetConsumptionChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ2hhcnRzL1RhZ0J1ZGdldENvbnN1bXB0aW9uQ2hhcnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFvRDtBQVVoQztBQUNtQjtBQUNJO0FBaUMzQ0ksMkNBQU9BLENBQUNVLFFBQVEsQ0FDWlQsaURBQVdBLEVBQ1hDLGtEQUFZQSxFQUNaQyxpREFBV0EsRUFDWEMsbURBQWFBLEVBQ2JFLDJDQUFLQSxFQUNMRCw2Q0FBT0EsRUFDUEUsNENBQU1BO0FBR0gsU0FBU0ksMEJBQTBCLEtBSXBCO1FBSm9CLEVBQ3RDQyxZQUFZLEVBQ1pDLGFBQWEsRUFDYkMsR0FBRyxFQUNlLEdBSm9COztJQU10QyxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR2xCLCtDQUFRQSxDQUFlO1FBQUNtQixZQUFZO1FBQU1DLFdBQVcsQ0FBQztRQUFHQyxRQUFRLENBQUM7UUFBR0MsU0FBUyxDQUFDO0lBQUM7SUFDdEgsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUd4QiwrQ0FBUUEsQ0FBYTtRQUFDeUIsUUFBUSxFQUFFO1FBQUVDLFVBQVUsRUFBRTtJQUFBO0lBRWhGLE1BQU1DLGlCQUFpQjVCLDZDQUFNQSxDQUFDO0lBRTlCRCxnREFBU0EsQ0FBQztRQUVOLE1BQU04QixhQUF1QixFQUFFO1FBQy9CLE1BQU1DLG9CQUE4QixFQUFFO1FBQ3RDLElBQUlDLFdBQVc7UUFFZixNQUFNQyxjQUFjZixRQUFRLEtBQUtGLGVBQWVBLGFBQWFrQixNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0MsSUFBSSxDQUFDQyxPQUFPLENBQUNuQixTQUFTLENBQUM7UUFFMUcsSUFBSWUsWUFBWUssTUFBTSxLQUFLLEdBQUc7WUFDMUJSLFdBQVdTLElBQUksQ0FBQ04sV0FBVyxDQUFDLEVBQUUsQ0FBQ08sSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQztZQUN2RFQsV0FBV0MsV0FBVyxDQUFDLEVBQUUsQ0FBQ1MsS0FBSyxJQUFJO1lBQ25DWCxr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QUFlNEM7SUFFcEIsR0FBRztRQUFDaEQ7UUFBY0M7UUFBZUM7S0FBSTtJQUVwQyxxQkFDSSw4REFBQzJEO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNsRSxpREFBSUE7WUFBQ21FLEtBQUtsRDtZQUFnQm1DLFNBQVM3QztZQUFhK0IsTUFBTXpCOzs7Ozs7Ozs7OztBQUduRTtHQXpJZ0JWO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2hhcnRzL1RhZ0J1ZGdldENvbnN1bXB0aW9uQ2hhcnQudHN4P2MyNGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgICBDaGFydCBhcyBDaGFydEpTLFxyXG4gICAgTGluZWFyU2NhbGUsXHJcbiAgICBQb2ludEVsZW1lbnQsXHJcbiAgICBMaW5lRWxlbWVudCxcclxuICAgIENhdGVnb3J5U2NhbGUsXHJcbiAgICBUb29sdGlwLFxyXG4gICAgVGl0bGUsXHJcbiAgICBMZWdlbmRcclxuICB9IGZyb20gJ2NoYXJ0LmpzJztcclxuaW1wb3J0IHsgTGluZSB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XHJcbmltcG9ydCB7IENIQVJUX0NPTE9SUyB9IGZyb20gXCIuL0NvbG9yQmFua1wiO1xyXG5pbXBvcnQgeyBJQWNjb3VudExpbmUgfSBmcm9tIFwiLi4vRGF0YS9CYW5rXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElucHV0UmFuZ2VQcm9wcyB7XHJcbiAgICBhY2NvdW50TGluZXM6IElBY2NvdW50TGluZVtdO1xyXG4gICAgdGFnOiBzdHJpbmc7XHJcbiAgICBhbGxvd2VkQW1vdW50OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNoYXJ0RGF0YXNldCB7XHJcbiAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgeUF4aXNJRD86IHN0cmluZztcclxuICAgIGRhdGE6IG51bWJlcltdO1xyXG4gICAgcG9pbnRSYWRpdXM/OiBudW1iZXI7XHJcbiAgICBib3JkZXJDb2xvcj86IHN0cmluZztcclxuICAgIGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xyXG4gICAgZGF0YWxhYmVsczogYW55O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDaGFydERhdGEge1xyXG4gICAgbGFiZWxzOiBzdHJpbmdbXTtcclxuICAgIGRhdGFzZXRzOiBJQ2hhcnREYXRhc2V0W107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNoYXJ0T3B0aW9uIHtcclxuICAgIHJlc3BvbnNpdmU6IGJvb2xlYW47XHJcbiAgICBtYWludGFpbkFzcGVjdFJhdGlvPzogYm9vbGVhbjtcclxuICAgIHNjYWxlczogYW55O1xyXG4gICAgYW5pbWF0aW9uPzogYW55O1xyXG4gICAgYW5pbWF0aW9ucz86IGFueTtcclxuICAgIHBsdWdpbnM6IGFueTtcclxufVxyXG5cclxuQ2hhcnRKUy5yZWdpc3RlcihcclxuICAgIExpbmVhclNjYWxlLFxyXG4gICAgUG9pbnRFbGVtZW50LFxyXG4gICAgTGluZUVsZW1lbnQsXHJcbiAgICBDYXRlZ29yeVNjYWxlLFxyXG4gICAgVGl0bGUsXHJcbiAgICBUb29sdGlwLFxyXG4gICAgTGVnZW5kXHJcbik7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVGFnQnVkZ2V0Q29uc3VtcHRpb25DaGFydCh7XHJcbiAgICBhY2NvdW50TGluZXMsXHJcbiAgICBhbGxvd2VkQW1vdW50LFxyXG4gICAgdGFnXHJcbiAgICB9OiBJbnB1dFJhbmdlUHJvcHMpOiBKU1guRWxlbWVudCB7XHJcblxyXG4gICAgY29uc3QgW2NoYXJ0T3B0aW9uLCBzZXRDaGFydE9wdGlvbl0gPSB1c2VTdGF0ZTxJQ2hhcnRPcHRpb24+KHtyZXNwb25zaXZlOiB0cnVlLCBhbmltYXRpb246IHt9LCBzY2FsZXM6IHt9LCBwbHVnaW5zOiB7fX0pO1xyXG4gICAgY29uc3QgW2NoYXJ0RGF0YSwgc2V0Q2hhcnREYXRhXSA9IHVzZVN0YXRlPElDaGFydERhdGE+KHtsYWJlbHM6IFtdLCBkYXRhc2V0czogW119KTtcclxuXHJcbiAgICBjb25zdCBjaGFydFJlZmVyZW5jZSA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBkYXRlTGFiZWxzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGJ1ZGdldENvbnN1bXB0aW9uOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICAgIGxldCBjb25zdW1lZCA9IDA7XHJcblxyXG4gICAgICAgIGNvbnN0IHRhZ2dlZExpbmVzID0gdGFnID09PSBcIlwiID8gYWNjb3VudExpbmVzIDogYWNjb3VudExpbmVzLmZpbHRlcigobGluZSkgPT4gbGluZS50YWdzLmluZGV4T2YodGFnKSAhPT0gLTEpO1xyXG5cclxuICAgICAgICBpZiAodGFnZ2VkTGluZXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIGRhdGVMYWJlbHMucHVzaCh0YWdnZWRMaW5lc1swXS5kYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImZyLUZSXCIpKTtcclxuICAgICAgICAgICAgY29uc3VtZWQgPSB0YWdnZWRMaW5lc1swXS5kZWJpdCB8fCAwO1xyXG4gICAgICAgICAgICBidWRnZXRDb25zdW1wdGlvbi5wdXNoKGNvbnN1bWVkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGFnZ2VkTGluZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudERhdGUgPSB0YWdnZWRMaW5lc1swXS5kYXRlO1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudENvbnN1bXB0aW9uID0gdGFnZ2VkTGluZXNbMF0uZGViaXQgfHwgMDtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPCB0YWdnZWRMaW5lcy5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhZ2dlZExpbmVzW2ldLmRhdGUuZ2V0VGltZSgpICE9PSBjdXJyZW50RGF0ZS5nZXRUaW1lKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRlTGFiZWxzLnB1c2goY3VycmVudERhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZnItRlJcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN1bWVkICs9IGN1cnJlbnRDb25zdW1wdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICBidWRnZXRDb25zdW1wdGlvbi5wdXNoKGNvbnN1bWVkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudENvbnN1bXB0aW9uID0gdGFnZ2VkTGluZXNbaV0uZGViaXQgfHwgMDtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RGF0ZSA9IHRhZ2dlZExpbmVzW2ldLmRhdGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q29uc3VtcHRpb24gKz0gdGFnZ2VkTGluZXNbaV0uZGViaXQgfHwgMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gUHVzaCBsYXN0IGRhdGVcclxuICAgICAgICAgICAgZGF0ZUxhYmVscy5wdXNoKGN1cnJlbnREYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImZyLUZSXCIpKTtcclxuICAgICAgICAgICAgY29uc3VtZWQgKz0gY3VycmVudENvbnN1bXB0aW9uO1xyXG4gICAgICAgICAgICBidWRnZXRDb25zdW1wdGlvbi5wdXNoKGNvbnN1bWVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBkYXRhc2V0czogSUNoYXJ0RGF0YXNldFtdID0gW107XHJcbiAgICAgICAgbGV0IGRhdGFzZXQ6IElDaGFydERhdGFzZXQgPSB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIkV2b2x1dGlvblwiLFxyXG4gICAgICAgICAgICB5QXhpc0lEOiAneScsXHJcbiAgICAgICAgICAgIGRhdGE6IGJ1ZGdldENvbnN1bXB0aW9uLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IENIQVJUX0NPTE9SU1swXSxcclxuICAgICAgICAgICAgZGF0YWxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgYW5jaG9yOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIGFsaWduOiAnYm90dG9tJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkYXRhc2V0cy5wdXNoKGRhdGFzZXQpO1xyXG5cclxuICAgICAgICBpZiAoYWxsb3dlZEFtb3VudCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgYnVkZ2V0TGltaXQ6IG51bWJlcltdID0gQXJyYXkoZGF0ZUxhYmVscy5sZW5ndGgpLmZpbGwoYWxsb3dlZEFtb3VudCk7XHJcbiAgICAgICAgICAgIGRhdGFzZXQgPSB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJCdWRnZXQgbGltaXRcIixcclxuICAgICAgICAgICAgICAgIHlBeGlzSUQ6ICd5JyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGJ1ZGdldExpbWl0LFxyXG4gICAgICAgICAgICAgICAgcG9pbnRSYWRpdXM6IDAsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogQ0hBUlRfQ09MT1JTWzFdLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBDSEFSVF9DT0xPUlNbMV0sXHJcbiAgICAgICAgICAgICAgICBkYXRhbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5jaG9yOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbjogJ2JvdHRvbSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZGF0YXNldHMucHVzaChkYXRhc2V0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBkYXRhVG9EaXNwbGF5OiBJQ2hhcnREYXRhID0ge1xyXG4gICAgICAgICAgICBsYWJlbHM6IGRhdGVMYWJlbHMsXHJcbiAgICAgICAgICAgIGRhdGFzZXRzOiBkYXRhc2V0cyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBzZXRDaGFydERhdGEoZGF0YVRvRGlzcGxheSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNoYXJ0VGl0bGUgPSBbXCJCdWRnZXQgY29uc3VtcHRpb24gZm9yIFwiICsgdGFnXTtcclxuICAgICAgICBsZXQgdGl0bGVDb2xvciA9IFwiXCI7XHJcbiAgICAgICAgaWYgKGFsbG93ZWRBbW91bnQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjaGFydFRpdGxlLnB1c2goYnVkZ2V0Q29uc3VtcHRpb25bYnVkZ2V0Q29uc3VtcHRpb24ubGVuZ3RoLTFdLnRvRml4ZWQoMikgKyBcIiAvIFwiICsgYWxsb3dlZEFtb3VudC50b0ZpeGVkKDIpKTtcclxuICAgICAgICAgICAgdGl0bGVDb2xvciA9IGJ1ZGdldENvbnN1bXB0aW9uW2J1ZGdldENvbnN1bXB0aW9uLmxlbmd0aC0xXSA8PSBhbGxvd2VkQW1vdW50ID8gXCIjMDM5NDg3XCIgOiBcIiNjYzAwMDBcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBvcHRpb25zOiBJQ2hhcnRPcHRpb24gPSB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxyXG4gICAgICAgICAgICBhbmltYXRpb25zOiBmYWxzZSxcclxuICAgICAgICAgICAgc2NhbGVzOiB7XHJcbiAgICAgICAgICAgICAgICB4OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0RhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHk6IHtcclxuICAgICAgICAgICAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQW1vdW50J1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhY2U6ICc1JSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGx1Z2luczoge1xyXG4gICAgICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcgYXMgY29uc3QsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGNoYXJ0VGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRpdGxlQ29sb3JcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRDaGFydE9wdGlvbihvcHRpb25zKTtcclxuXHJcbiAgIH0sIFthY2NvdW50TGluZXMsIGFsbG93ZWRBbW91bnQsIHRhZ10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb250aC1jaGFydC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxMaW5lIHJlZj17Y2hhcnRSZWZlcmVuY2V9IG9wdGlvbnM9e2NoYXJ0T3B0aW9ufSBkYXRhPXtjaGFydERhdGF9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiQ2hhcnQiLCJDaGFydEpTIiwiTGluZWFyU2NhbGUiLCJQb2ludEVsZW1lbnQiLCJMaW5lRWxlbWVudCIsIkNhdGVnb3J5U2NhbGUiLCJUb29sdGlwIiwiVGl0bGUiLCJMZWdlbmQiLCJMaW5lIiwiQ0hBUlRfQ09MT1JTIiwicmVnaXN0ZXIiLCJUYWdCdWRnZXRDb25zdW1wdGlvbkNoYXJ0IiwiYWNjb3VudExpbmVzIiwiYWxsb3dlZEFtb3VudCIsInRhZyIsImNoYXJ0T3B0aW9uIiwic2V0Q2hhcnRPcHRpb24iLCJyZXNwb25zaXZlIiwiYW5pbWF0aW9uIiwic2NhbGVzIiwicGx1Z2lucyIsImNoYXJ0RGF0YSIsInNldENoYXJ0RGF0YSIsImxhYmVscyIsImRhdGFzZXRzIiwiY2hhcnRSZWZlcmVuY2UiLCJkYXRlTGFiZWxzIiwiYnVkZ2V0Q29uc3VtcHRpb24iLCJjb25zdW1lZCIsInRhZ2dlZExpbmVzIiwiZmlsdGVyIiwibGluZSIsInRhZ3MiLCJpbmRleE9mIiwibGVuZ3RoIiwicHVzaCIsImRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJkZWJpdCIsImN1cnJlbnREYXRlIiwiY3VycmVudENvbnN1bXB0aW9uIiwiaSIsImdldFRpbWUiLCJkYXRhc2V0IiwibGFiZWwiLCJ5QXhpc0lEIiwiZGF0YSIsImJhY2tncm91bmRDb2xvciIsImRhdGFsYWJlbHMiLCJhbmNob3IiLCJhbGlnbiIsImJ1ZGdldExpbWl0IiwiQXJyYXkiLCJmaWxsIiwicG9pbnRSYWRpdXMiLCJib3JkZXJDb2xvciIsImRhdGFUb0Rpc3BsYXkiLCJjaGFydFRpdGxlIiwidGl0bGVDb2xvciIsInRvRml4ZWQiLCJvcHRpb25zIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsImFuaW1hdGlvbnMiLCJ4IiwiYmVnaW5BdFplcm8iLCJ0aXRsZSIsImRpc3BsYXkiLCJ0ZXh0IiwieSIsImdyYWNlIiwibGVnZW5kIiwicG9zaXRpb24iLCJjb2xvciIsImRpdiIsImNsYXNzTmFtZSIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Charts/TagBudgetConsumptionChart.tsx\n"));

/***/ })

});