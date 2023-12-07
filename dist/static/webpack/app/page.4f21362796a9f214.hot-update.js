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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TagBudgetConsumptionChart: function() { return /* binding */ TagBudgetConsumptionChart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ \"(app-pages-browser)/./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartjs-2 */ \"(app-pages-browser)/./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var _ColorBank__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColorBank */ \"(app-pages-browser)/./components/Charts/ColorBank.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_3__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_3__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_3__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_3__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.Title, chart_js__WEBPACK_IMPORTED_MODULE_3__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_3__.Legend);\nfunction TagBudgetConsumptionChart(param) {\n    let { accountLines, allowedAmount, tag } = param;\n    _s();\n    const [chartOption, setChartOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        responsive: true,\n        animation: {},\n        scales: {},\n        plugins: {}\n    });\n    const [chartData, setChartData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        labels: [],\n        datasets: []\n    });\n    const chartReference = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const dateLabels = [];\n        const budgetConsumption = [];\n        let consumed = 0;\n        const taggedLines = tag === \"\" ? accountLines : accountLines.filter((line)=>line.tags.indexOf(tag) !== -1);\n        if (taggedLines.length === 1) {\n            dateLabels.push(taggedLines[0].date.toLocaleDateString(\"fr-FR\"));\n            consumed = taggedLines[0].debit || 0;\n            budgetConsumption.push(consumed);\n        } else if (taggedLines.length > 1) {\n            let currentDate = taggedLines[0].date;\n            let currentConsumption = taggedLines[0].debit || 0;\n            for(let i = 1; i < taggedLines.length; i++){\n                if (taggedLines[i].date.getTime() !== currentDate.getTime()) {\n                    dateLabels.push(currentDate.toLocaleDateString(\"fr-FR\"));\n                    consumed += currentConsumption;\n                    budgetConsumption.push(consumed);\n                    currentConsumption = taggedLines[i].debit || 0;\n                    currentDate = taggedLines[i].date;\n                } else {\n                    currentConsumption += taggedLines[i].debit || 0;\n                }\n            }\n            // Push last date\n            dateLabels.push(currentDate.toLocaleDateString(\"fr-FR\"));\n            consumed += currentConsumption;\n            budgetConsumption.push(consumed);\n        }\n        let datasets = [];\n        let dataset = {\n            label: \"Evolution\",\n            yAxisID: \"y\",\n            data: budgetConsumption,\n            backgroundColor: _ColorBank__WEBPACK_IMPORTED_MODULE_2__.CHART_COLORS[0],\n            datalabels: {\n                anchor: \"center\",\n                align: \"bottom\"\n            }\n        };\n        datasets.push(dataset);\n        if (allowedAmount > 0) {\n            const budgetLimit = Array(dateLabels.length).fill(allowedAmount);\n            dataset = {\n                label: \"Budget limit\",\n                yAxisID: \"y\",\n                data: budgetLimit,\n                pointRadius: 0,\n                borderColor: _ColorBank__WEBPACK_IMPORTED_MODULE_2__.CHART_COLORS[1],\n                backgroundColor: _ColorBank__WEBPACK_IMPORTED_MODULE_2__.CHART_COLORS[1],\n                datalabels: {\n                    anchor: \"center\",\n                    align: \"bottom\"\n                }\n            };\n            datasets.push(dataset);\n        }\n        let dataToDisplay = {\n            labels: dateLabels,\n            datasets: datasets\n        };\n        setChartData(dataToDisplay);\n        const chartTitle = [\n            \"Budget consumption for \" + tag\n        ];\n        if (budgetConsumption.length > 0) {\n            chartTitle.push(budgetConsumption[budgetConsumption.length - 1].toFixed(2) + \" / \" + allowedAmount.toFixed(2));\n        }\n        let options = {\n            responsive: true,\n            maintainAspectRatio: false,\n            animations: false,\n            scales: {\n                x: {\n                    beginAtZero: true,\n                    title: {\n                        display: true,\n                        text: \"Date\"\n                    }\n                },\n                y: {\n                    beginAtZero: true,\n                    title: {\n                        display: true,\n                        text: \"Amount\"\n                    },\n                    grace: \"5%\"\n                }\n            },\n            plugins: {\n                legend: {\n                    position: \"top\"\n                },\n                title: {\n                    display: true,\n                    text: [\n                        \"Budget consumption for \" + tag,\n                        budgetConsumption[budgetConsumption.length - 1].toFixed(2) + \" / \" + allowedAmount.toFixed(2)\n                    ],\n                    color: budgetConsumption[budgetConsumption.length - 1] <= allowedAmount ? \"#039487\" : \"#cc0000\"\n                },\n                datalabels: {\n                    display: false\n                }\n            }\n        };\n        setChartOption(options);\n    }, [\n        accountLines,\n        allowedAmount,\n        tag\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"month-chart-wrapper\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Line, {\n            ref: chartReference,\n            options: chartOption,\n            data: chartData\n        }, void 0, false, {\n            fileName: \"D:\\\\projet\\\\budget-tracker-nextjs\\\\components\\\\Charts\\\\TagBudgetConsumptionChart.tsx\",\n            lineNumber: 188,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\projet\\\\budget-tracker-nextjs\\\\components\\\\Charts\\\\TagBudgetConsumptionChart.tsx\",\n        lineNumber: 187,\n        columnNumber: 9\n    }, this);\n}\n_s(TagBudgetConsumptionChart, \"T+Oor9KV2M3uqH4y78oywKN5AbQ=\");\n_c = TagBudgetConsumptionChart;\nvar _c;\n$RefreshReg$(_c, \"TagBudgetConsumptionChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ2hhcnRzL1RhZ0J1ZGdldENvbnN1bXB0aW9uQ2hhcnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFvRDtBQVVoQztBQUNtQjtBQUNJO0FBaUMzQ0ksMkNBQU9BLENBQUNVLFFBQVEsQ0FDWlQsaURBQVdBLEVBQ1hDLGtEQUFZQSxFQUNaQyxpREFBV0EsRUFDWEMsbURBQWFBLEVBQ2JFLDJDQUFLQSxFQUNMRCw2Q0FBT0EsRUFDUEUsNENBQU1BO0FBR0gsU0FBU0ksMEJBQTBCLEtBSXBCO1FBSm9CLEVBQ3RDQyxZQUFZLEVBQ1pDLGFBQWEsRUFDYkMsR0FBRyxFQUNlLEdBSm9COztJQU10QyxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR2xCLCtDQUFRQSxDQUFlO1FBQUNtQixZQUFZO1FBQU1DLFdBQVcsQ0FBQztRQUFHQyxRQUFRLENBQUM7UUFBR0MsU0FBUyxDQUFDO0lBQUM7SUFDdEgsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUd4QiwrQ0FBUUEsQ0FBYTtRQUFDeUIsUUFBUSxFQUFFO1FBQUVDLFVBQVUsRUFBRTtJQUFBO0lBRWhGLE1BQU1DLGlCQUFpQjVCLDZDQUFNQSxDQUFDO0lBRTlCRCxnREFBU0EsQ0FBQztRQUVOLE1BQU04QixhQUF1QixFQUFFO1FBQy9CLE1BQU1DLG9CQUE4QixFQUFFO1FBQ3RDLElBQUlDLFdBQVc7UUFFZixNQUFNQyxjQUFjZixRQUFRLEtBQUtGLGVBQWVBLGFBQWFrQixNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0MsSUFBSSxDQUFDQyxPQUFPLENBQUNuQixTQUFTLENBQUM7UUFFMUcsSUFBSWUsWUFBWUssTUFBTSxLQUFLLEdBQUc7WUFDMUJSLFdBQVdTLElBQUksQ0FBQ04sV0FBVyxDQUFDLEVBQUUsQ0FBQ08sSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQztZQUN2RFQsV0FBV0MsV0FBVyxDQUFDLEVBQUUsQ0FBQ1MsS0FBSyxJQUFJO1lBQ25DWCxr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QUFFLElBQUlyQixnQkFBZ0IsWUFBWTtnQkFDeEY7Z0JBQ0FtQyxZQUFZO29CQUNSaUIsU0FBUztnQkFDYjtZQUNKO1FBQ0o7UUFDQWpELGVBQWUyQztJQUVwQixHQUFHO1FBQUMvQztRQUFjQztRQUFlQztLQUFJO0lBRXBDLHFCQUNJLDhEQUFDMEQ7UUFBSUMsV0FBVTtrQkFDWCw0RUFBQ2pFLGlEQUFJQTtZQUFDa0UsS0FBS2pEO1lBQWdCa0MsU0FBUzVDO1lBQWErQixNQUFNekI7Ozs7Ozs7Ozs7O0FBR25FO0dBdklnQlY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGFydHMvVGFnQnVkZ2V0Q29uc3VtcHRpb25DaGFydC50c3g/YzI0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICAgIENoYXJ0IGFzIENoYXJ0SlMsXHJcbiAgICBMaW5lYXJTY2FsZSxcclxuICAgIFBvaW50RWxlbWVudCxcclxuICAgIExpbmVFbGVtZW50LFxyXG4gICAgQ2F0ZWdvcnlTY2FsZSxcclxuICAgIFRvb2x0aXAsXHJcbiAgICBUaXRsZSxcclxuICAgIExlZ2VuZFxyXG4gIH0gZnJvbSAnY2hhcnQuanMnO1xyXG5pbXBvcnQgeyBMaW5lIH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJztcclxuaW1wb3J0IHsgQ0hBUlRfQ09MT1JTIH0gZnJvbSBcIi4vQ29sb3JCYW5rXCI7XHJcbmltcG9ydCB7IElBY2NvdW50TGluZSwgVEJ1ZGdldCB9IGZyb20gXCIuLi9EYXRhL0JhbmtcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW5wdXRSYW5nZVByb3BzIHtcclxuICAgIGFjY291bnRMaW5lczogSUFjY291bnRMaW5lW107XHJcbiAgICB0YWc6IHN0cmluZztcclxuICAgIGFsbG93ZWRBbW91bnQ6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ2hhcnREYXRhc2V0IHtcclxuICAgIGxhYmVsOiBzdHJpbmc7XHJcbiAgICB5QXhpc0lEPzogc3RyaW5nO1xyXG4gICAgZGF0YTogbnVtYmVyW107XHJcbiAgICBwb2ludFJhZGl1cz86IG51bWJlcjtcclxuICAgIGJvcmRlckNvbG9yPzogc3RyaW5nO1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XHJcbiAgICBkYXRhbGFiZWxzOiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNoYXJ0RGF0YSB7XHJcbiAgICBsYWJlbHM6IHN0cmluZ1tdO1xyXG4gICAgZGF0YXNldHM6IElDaGFydERhdGFzZXRbXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ2hhcnRPcHRpb24ge1xyXG4gICAgcmVzcG9uc2l2ZTogYm9vbGVhbjtcclxuICAgIG1haW50YWluQXNwZWN0UmF0aW8/OiBib29sZWFuO1xyXG4gICAgc2NhbGVzOiBhbnk7XHJcbiAgICBhbmltYXRpb24/OiBhbnk7XHJcbiAgICBhbmltYXRpb25zPzogYW55O1xyXG4gICAgcGx1Z2luczogYW55O1xyXG59XHJcblxyXG5DaGFydEpTLnJlZ2lzdGVyKFxyXG4gICAgTGluZWFyU2NhbGUsXHJcbiAgICBQb2ludEVsZW1lbnQsXHJcbiAgICBMaW5lRWxlbWVudCxcclxuICAgIENhdGVnb3J5U2NhbGUsXHJcbiAgICBUaXRsZSxcclxuICAgIFRvb2x0aXAsXHJcbiAgICBMZWdlbmRcclxuKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUYWdCdWRnZXRDb25zdW1wdGlvbkNoYXJ0KHtcclxuICAgIGFjY291bnRMaW5lcyxcclxuICAgIGFsbG93ZWRBbW91bnQsXHJcbiAgICB0YWdcclxuICAgIH06IElucHV0UmFuZ2VQcm9wcyk6IEpTWC5FbGVtZW50IHtcclxuXHJcbiAgICBjb25zdCBbY2hhcnRPcHRpb24sIHNldENoYXJ0T3B0aW9uXSA9IHVzZVN0YXRlPElDaGFydE9wdGlvbj4oe3Jlc3BvbnNpdmU6IHRydWUsIGFuaW1hdGlvbjoge30sIHNjYWxlczoge30sIHBsdWdpbnM6IHt9fSk7XHJcbiAgICBjb25zdCBbY2hhcnREYXRhLCBzZXRDaGFydERhdGFdID0gdXNlU3RhdGU8SUNoYXJ0RGF0YT4oe2xhYmVsczogW10sIGRhdGFzZXRzOiBbXX0pO1xyXG5cclxuICAgIGNvbnN0IGNoYXJ0UmVmZXJlbmNlID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGVMYWJlbHM6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgY29uc3QgYnVkZ2V0Q29uc3VtcHRpb246IG51bWJlcltdID0gW107XHJcbiAgICAgICAgbGV0IGNvbnN1bWVkID0gMDtcclxuXHJcbiAgICAgICAgY29uc3QgdGFnZ2VkTGluZXMgPSB0YWcgPT09IFwiXCIgPyBhY2NvdW50TGluZXMgOiBhY2NvdW50TGluZXMuZmlsdGVyKChsaW5lKSA9PiBsaW5lLnRhZ3MuaW5kZXhPZih0YWcpICE9PSAtMSk7XHJcblxyXG4gICAgICAgIGlmICh0YWdnZWRMaW5lcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgZGF0ZUxhYmVscy5wdXNoKHRhZ2dlZExpbmVzWzBdLmRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZnItRlJcIikpO1xyXG4gICAgICAgICAgICBjb25zdW1lZCA9IHRhZ2dlZExpbmVzWzBdLmRlYml0IHx8IDA7XHJcbiAgICAgICAgICAgIGJ1ZGdldENvbnN1bXB0aW9uLnB1c2goY29uc3VtZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0YWdnZWRMaW5lcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50RGF0ZSA9IHRhZ2dlZExpbmVzWzBdLmRhdGU7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50Q29uc3VtcHRpb24gPSB0YWdnZWRMaW5lc1swXS5kZWJpdCB8fCAwO1xyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMTsgaSA8IHRhZ2dlZExpbmVzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFnZ2VkTGluZXNbaV0uZGF0ZS5nZXRUaW1lKCkgIT09IGN1cnJlbnREYXRlLmdldFRpbWUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGVMYWJlbHMucHVzaChjdXJyZW50RGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJmci1GUlwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3VtZWQgKz0gY3VycmVudENvbnN1bXB0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1ZGdldENvbnN1bXB0aW9uLnB1c2goY29uc3VtZWQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q29uc3VtcHRpb24gPSB0YWdnZWRMaW5lc1tpXS5kZWJpdCB8fCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnREYXRlID0gdGFnZ2VkTGluZXNbaV0uZGF0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDb25zdW1wdGlvbiArPSB0YWdnZWRMaW5lc1tpXS5kZWJpdCB8fCAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBQdXNoIGxhc3QgZGF0ZVxyXG4gICAgICAgICAgICBkYXRlTGFiZWxzLnB1c2goY3VycmVudERhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZnItRlJcIikpO1xyXG4gICAgICAgICAgICBjb25zdW1lZCArPSBjdXJyZW50Q29uc3VtcHRpb247XHJcbiAgICAgICAgICAgIGJ1ZGdldENvbnN1bXB0aW9uLnB1c2goY29uc3VtZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGRhdGFzZXRzOiBJQ2hhcnREYXRhc2V0W10gPSBbXTtcclxuICAgICAgICBsZXQgZGF0YXNldDogSUNoYXJ0RGF0YXNldCA9IHtcclxuICAgICAgICAgICAgbGFiZWw6IFwiRXZvbHV0aW9uXCIsXHJcbiAgICAgICAgICAgIHlBeGlzSUQ6ICd5JyxcclxuICAgICAgICAgICAgZGF0YTogYnVkZ2V0Q29uc3VtcHRpb24sXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogQ0hBUlRfQ09MT1JTWzBdLFxyXG4gICAgICAgICAgICBkYXRhbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICBhbmNob3I6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgYWxpZ246ICdib3R0b20nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGRhdGFzZXRzLnB1c2goZGF0YXNldCk7XHJcblxyXG4gICAgICAgIGlmIChhbGxvd2VkQW1vdW50ID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBidWRnZXRMaW1pdDogbnVtYmVyW10gPSBBcnJheShkYXRlTGFiZWxzLmxlbmd0aCkuZmlsbChhbGxvd2VkQW1vdW50KTtcclxuICAgICAgICAgICAgZGF0YXNldCA9IHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIkJ1ZGdldCBsaW1pdFwiLFxyXG4gICAgICAgICAgICAgICAgeUF4aXNJRDogJ3knLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogYnVkZ2V0TGltaXQsXHJcbiAgICAgICAgICAgICAgICBwb2ludFJhZGl1czogMCxcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBDSEFSVF9DT0xPUlNbMV0sXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IENIQVJUX0NPTE9SU1sxXSxcclxuICAgICAgICAgICAgICAgIGRhdGFsYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBhbmNob3I6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduOiAnYm90dG9tJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBkYXRhc2V0cy5wdXNoKGRhdGFzZXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGRhdGFUb0Rpc3BsYXk6IElDaGFydERhdGEgPSB7XHJcbiAgICAgICAgICAgIGxhYmVsczogZGF0ZUxhYmVscyxcclxuICAgICAgICAgICAgZGF0YXNldHM6IGRhdGFzZXRzLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHNldENoYXJ0RGF0YShkYXRhVG9EaXNwbGF5KTtcclxuXHJcbiAgICAgICAgY29uc3QgY2hhcnRUaXRsZSA9IFtcIkJ1ZGdldCBjb25zdW1wdGlvbiBmb3IgXCIgKyB0YWddO1xyXG4gICAgICAgIGlmIChidWRnZXRDb25zdW1wdGlvbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNoYXJ0VGl0bGUucHVzaChidWRnZXRDb25zdW1wdGlvbltidWRnZXRDb25zdW1wdGlvbi5sZW5ndGgtMV0udG9GaXhlZCgyKSArIFwiIC8gXCIgKyBhbGxvd2VkQW1vdW50LnRvRml4ZWQoMikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG9wdGlvbnM6IElDaGFydE9wdGlvbiA9IHtcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbnM6IGZhbHNlLFxyXG4gICAgICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgICAgICAgIHg6IHtcclxuICAgICAgICAgICAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnRGF0ZSdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeToge1xyXG4gICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdBbW91bnQnXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBncmFjZTogJzUlJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwbHVnaW5zOiB7XHJcbiAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyBhcyBjb25zdCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogW1wiQnVkZ2V0IGNvbnN1bXB0aW9uIGZvciBcIiArIHRhZywgYnVkZ2V0Q29uc3VtcHRpb25bYnVkZ2V0Q29uc3VtcHRpb24ubGVuZ3RoLTFdLnRvRml4ZWQoMikgKyBcIiAvIFwiICsgYWxsb3dlZEFtb3VudC50b0ZpeGVkKDIpXSxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYnVkZ2V0Q29uc3VtcHRpb25bYnVkZ2V0Q29uc3VtcHRpb24ubGVuZ3RoLTFdIDw9IGFsbG93ZWRBbW91bnQgPyBcIiMwMzk0ODdcIiA6IFwiI2NjMDAwMFwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGF0YWxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0Q2hhcnRPcHRpb24ob3B0aW9ucyk7XHJcblxyXG4gICB9LCBbYWNjb3VudExpbmVzLCBhbGxvd2VkQW1vdW50LCB0YWddKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9udGgtY2hhcnQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8TGluZSByZWY9e2NoYXJ0UmVmZXJlbmNlfSBvcHRpb25zPXtjaGFydE9wdGlvbn0gZGF0YT17Y2hhcnREYXRhfS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgIClcclxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkNoYXJ0IiwiQ2hhcnRKUyIsIkxpbmVhclNjYWxlIiwiUG9pbnRFbGVtZW50IiwiTGluZUVsZW1lbnQiLCJDYXRlZ29yeVNjYWxlIiwiVG9vbHRpcCIsIlRpdGxlIiwiTGVnZW5kIiwiTGluZSIsIkNIQVJUX0NPTE9SUyIsInJlZ2lzdGVyIiwiVGFnQnVkZ2V0Q29uc3VtcHRpb25DaGFydCIsImFjY291bnRMaW5lcyIsImFsbG93ZWRBbW91bnQiLCJ0YWciLCJjaGFydE9wdGlvbiIsInNldENoYXJ0T3B0aW9uIiwicmVzcG9uc2l2ZSIsImFuaW1hdGlvbiIsInNjYWxlcyIsInBsdWdpbnMiLCJjaGFydERhdGEiLCJzZXRDaGFydERhdGEiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImNoYXJ0UmVmZXJlbmNlIiwiZGF0ZUxhYmVscyIsImJ1ZGdldENvbnN1bXB0aW9uIiwiY29uc3VtZWQiLCJ0YWdnZWRMaW5lcyIsImZpbHRlciIsImxpbmUiLCJ0YWdzIiwiaW5kZXhPZiIsImxlbmd0aCIsInB1c2giLCJkYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiZGViaXQiLCJjdXJyZW50RGF0ZSIsImN1cnJlbnRDb25zdW1wdGlvbiIsImkiLCJnZXRUaW1lIiwiZGF0YXNldCIsImxhYmVsIiwieUF4aXNJRCIsImRhdGEiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkYXRhbGFiZWxzIiwiYW5jaG9yIiwiYWxpZ24iLCJidWRnZXRMaW1pdCIsIkFycmF5IiwiZmlsbCIsInBvaW50UmFkaXVzIiwiYm9yZGVyQ29sb3IiLCJkYXRhVG9EaXNwbGF5IiwiY2hhcnRUaXRsZSIsInRvRml4ZWQiLCJvcHRpb25zIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsImFuaW1hdGlvbnMiLCJ4IiwiYmVnaW5BdFplcm8iLCJ0aXRsZSIsImRpc3BsYXkiLCJ0ZXh0IiwieSIsImdyYWNlIiwibGVnZW5kIiwicG9zaXRpb24iLCJjb2xvciIsImRpdiIsImNsYXNzTmFtZSIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Charts/TagBudgetConsumptionChart.tsx\n"));

/***/ })

});