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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BalanceHistoryChart: function() { return /* binding */ BalanceHistoryChart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ \"(app-pages-browser)/./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartjs-2 */ \"(app-pages-browser)/./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var _ColorBank__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColorBank */ \"(app-pages-browser)/./components/Charts/ColorBank.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_3__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_3__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_3__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_3__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.Title, chart_js__WEBPACK_IMPORTED_MODULE_3__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_3__.Legend);\nfunction BalanceHistoryChart(param) {\n    let { accountLines } = param;\n    _s();\n    const [chartOption, setChartOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        responsive: true,\n        animation: {},\n        scales: {},\n        plugins: {}\n    });\n    const [chartData, setChartData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        labels: [],\n        datasets: []\n    });\n    const chartReference = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (chartReference) {\n            const chart = chartReference.current;\n            if (chart) {\n                var _chart_canvas_parentElement;\n                console.log(chart.canvas.width);\n                console.log(chart.canvas.style.width);\n                console.log((_chart_canvas_parentElement = chart.canvas.parentElement) === null || _chart_canvas_parentElement === void 0 ? void 0 : _chart_canvas_parentElement.style.width);\n                chart.resize(chart.canvas.width, chart.canvas.height);\n                chart.ctx;\n                chart.update();\n            }\n        }\n    }, [\n        chartReference\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const dateLabels = [];\n        const history = [];\n        if (accountLines.length === 1) {\n            dateLabels.push(accountLines[0].date.toLocaleDateString(\"fr-FR\"));\n            history.push(accountLines[0].balance);\n        } else if (accountLines.length > 1) {\n            let currentDate = accountLines[0].date;\n            for(let i = 1; i < accountLines.length; i++){\n                if (accountLines[i].date.getTime() !== currentDate.getTime()) {\n                    dateLabels.push(currentDate.toLocaleDateString(\"fr-FR\"));\n                    history.push(accountLines[i - 1].balance);\n                    currentDate = accountLines[i].date;\n                } else if (i === accountLines.length - 1 && accountLines[i].date.getTime() === currentDate.getTime()) {\n                    dateLabels.push(currentDate.toLocaleDateString(\"fr-FR\"));\n                    history.push(accountLines[i - 1].balance);\n                }\n            }\n        }\n        let datasets = [];\n        let dataset = {\n            label: \"Balance\",\n            yAxisID: \"y\",\n            data: history,\n            backgroundColor: _ColorBank__WEBPACK_IMPORTED_MODULE_2__.CHART_COLORS[0],\n            datalabels: {\n                anchor: \"center\",\n                align: \"bottom\"\n            }\n        };\n        datasets.push(dataset);\n        let dataToDisplay = {\n            labels: dateLabels,\n            datasets: datasets\n        };\n        setChartData(dataToDisplay);\n        let options = {\n            responsive: true,\n            maintainAspectRatio: false,\n            animations: false,\n            scales: {\n                x: {\n                    beginAtZero: true,\n                    title: {\n                        display: true,\n                        text: \"Date\"\n                    }\n                },\n                y: {\n                    beginAtZero: true,\n                    title: {\n                        display: true,\n                        text: \"Amount\"\n                    }\n                }\n            },\n            plugins: {\n                legend: {\n                    position: \"top\"\n                },\n                title: {\n                    display: true,\n                    text: \"Evolution of the account's balance\"\n                },\n                datalabels: {\n                    display: false\n                }\n            }\n        };\n        setChartOption(options);\n    }, [\n        accountLines\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"time-chart-wrapper\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Line, {\n            ref: chartReference,\n            options: chartOption,\n            data: chartData\n        }, void 0, false, {\n            fileName: \"D:\\\\projet\\\\budget-tracker-nextjs\\\\components\\\\Charts\\\\BalanceHistoryChart.tsx\",\n            lineNumber: 161,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\projet\\\\budget-tracker-nextjs\\\\components\\\\Charts\\\\BalanceHistoryChart.tsx\",\n        lineNumber: 160,\n        columnNumber: 9\n    }, this);\n}\n_s(BalanceHistoryChart, \"FoTWsYANwTxhQBbJG1664sLH0eo=\");\n_c = BalanceHistoryChart;\nvar _c;\n$RefreshReg$(_c, \"BalanceHistoryChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ2hhcnRzL0JhbGFuY2VIaXN0b3J5Q2hhcnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFvRDtBQVVoQztBQUNtQjtBQUNJO0FBNkIzQ0ksMkNBQU9BLENBQUNVLFFBQVEsQ0FDWlQsaURBQVdBLEVBQ1hDLGtEQUFZQSxFQUNaQyxpREFBV0EsRUFDWEMsbURBQWFBLEVBQ2JFLDJDQUFLQSxFQUNMRCw2Q0FBT0EsRUFDUEUsNENBQU1BO0FBR0gsU0FBU0ksb0JBQW9CLEtBRWQ7UUFGYyxFQUNoQ0MsWUFBWSxFQUNNLEdBRmM7O0lBSWhDLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHaEIsK0NBQVFBLENBQWU7UUFBQ2lCLFlBQVk7UUFBTUMsV0FBVyxDQUFDO1FBQUdDLFFBQVEsQ0FBQztRQUFHQyxTQUFTLENBQUM7SUFBQztJQUN0SCxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR3RCLCtDQUFRQSxDQUFhO1FBQUN1QixRQUFRLEVBQUU7UUFBRUMsVUFBVSxFQUFFO0lBQUE7SUFFaEYsTUFBTUMsaUJBQWlCMUIsNkNBQU1BLENBQUM7SUFHOUJELGdEQUFTQSxDQUFDO1FBQ04sSUFBSTJCLGdCQUFnQjtZQUNoQixNQUFNQyxRQUFRRCxlQUFlRSxPQUFPO1lBQ3BDLElBQUlELE9BQU87b0JBR0tBO2dCQUZaRSxRQUFRQyxHQUFHLENBQUNILE1BQU1JLE1BQU0sQ0FBQ0MsS0FBSztnQkFDOUJILFFBQVFDLEdBQUcsQ0FBQ0gsTUFBTUksTUFBTSxDQUFDRSxLQUFLLENBQUNELEtBQUs7Z0JBQ3BDSCxRQUFRQyxHQUFHLEVBQUNILDhCQUFBQSxNQUFNSSxNQUFNLENBQUNHLGFBQWEsY0FBMUJQLGtEQUFBQSw0QkFBNEJNLEtBQUssQ0FBQ0QsS0FBSztnQkFDbkRMLE1BQU1RLE1BQU0sQ0FBQ1IsTUFBTUksTUFBTSxDQUFDQyxLQUFLLEVBQUVMLE1BQU1JLE1BQU0sQ0FBQ0ssTUFBTTtnQkFDcERULE1BQU1VLEdBQUc7Z0JBQ1RWLE1BQU1XLE1BQU07WUFDaEI7UUFDSjtJQUNKLEdBQUU7UUFBQ1o7S0FBZTtJQUdsQjNCLGdEQUFTQSxDQUFDO1FBRU4sTUFBTXdDLGFBQXVCLEVBQUU7UUFDL0IsTUFBTUMsVUFBb0IsRUFBRTtRQUU1QixJQUFJekIsYUFBYTBCLE1BQU0sS0FBSyxHQUFHO1lBQzNCRixXQUFXRyxJQUFJLENBQUMzQixZQUFZLENBQUMsRUFBRSxDQUFDNEIsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQztZQUN4REosUUFBUUUsSUFBSSxDQUFDM0IsWUFBWSxDQUFDLEVBQUUsQ0FBQzhCLE9BQU87UUFDeEMsT0FDSyxJQUFJOUIsYUFBYTBCLE1BQU0sR0FBRyxHQUFHO1lBQzlCLElBQUlLLGNBQWMvQixZQUFZLENBQUMsRUFBRSxDQUFDNEIsSUFBSTtZQUN0QyxJQUFJLElBQUlJLElBQUksR0FBR0EsSUFBSWhDLGFBQWEwQixNQUFNLEVBQUVNLElBQ3hDO2dCQUNJLElBQUloQyxZQUFZLENBQUNnQyxFQUFFLENBQUNKLElBQUksQ0FBQ0ssT0FBTyxPQUFPRixZQUFZRSxPQUFPLElBQUk7b0JBQzFEVCxXQUFXRyxJQUFJLENBQUNJLFlBQVlGLGtCQUFrQixDQUFDO29CQUMvQ0osUUFBUUUsSUFBSSxDQUFDM0IsWUFBWSxDQUFDZ0MsSUFBRSxFQUFFLENBQUNGLE9BQU87b0JBQ3RDQyxjQUFjL0IsWUFBWSxDQUFDZ0MsRUFBRSxDQUFDSixJQUFJO2dCQUN0QyxPQUNLLElBQUlJLE1BQU1oQyxhQUFhMEIsTUFBTSxHQUFDLEtBQUsxQixZQUFZLENBQUNnQyxFQUFFLENBQUNKLElBQUksQ0FBQ0ssT0FBTyxPQUFPRixZQUFZRSxPQUFPLElBQUk7b0JBQzlGVCxXQUFXRyxJQUFJLENBQUNJLFlBQVlGLGtCQUFrQixDQUFDO29CQUMvQ0osUUFBUUUsSUFBSSxDQUFDM0IsWUFBWSxDQUFDZ0MsSUFBRSxFQUFFLENBQUNGLE9BQU87Z0JBQzFDO1lBQ0o7UUFDSjtRQUVBLElBQUlwQixXQUE0QixFQUFFO1FBQ2xDLElBQUl3QixVQUF5QjtZQUN6QkMsT0FBTztZQUNQQyxTQUFTO1lBQ1RDLE1BQU1aO1lBQ05hLGlCQUFpQnpDLG9EQUFZLENBQUMsRUFBRTtZQUNoQzBDLFlBQVk7Z0JBQ1JDLFFBQVE7Z0JBQ1JDLE9BQU87WUFDWDtRQUNKO1FBQ0EvQixTQUFTaUIsSUFBSSxDQUFDTztRQUVkLElBQUlRLGdCQUE0QjtZQUM1QmpDLFFBQVFlO1lBQ1JkLFVBQVVBO1FBQ2Q7UUFFQUYsYUFBYWtDO1FBRWIsSUFBSUMsVUFBd0I7WUFDeEJ4QyxZQUFZO1lBQ1p5QyxxQkFBcUI7WUFDckJDLFlBQVk7WUFDWnhDLFFBQVE7Z0JBQ0p5QyxHQUFHO29CQUNDQyxhQUFhO29CQUNiQyxPQUFPO3dCQUNIQyxTQUFTO3dCQUNUQyxNQUFNO29CQUNWO2dCQUNKO2dCQUNBQyxHQUFHO29CQUNDSixhQUFhO29CQUNiQyxPQUFPO3dCQUNIQyxTQUFTO3dCQUNUQyxNQUFNO29CQUNWO2dCQUNKO1lBQ0o7WUFDQTVDLFNBQVM7Z0JBQ0w4QyxRQUFRO29CQUNMQyxVQUFVO2dCQUNiO2dCQUNBTCxPQUFPO29CQUNIQyxTQUFTO29CQUNUQyxNQUFNO2dCQUNWO2dCQUNBWCxZQUFZO29CQUNSVSxTQUFTO2dCQUNiO1lBQ0o7UUFDSjtRQUNBL0MsZUFBZXlDO0lBRXBCLEdBQUc7UUFBQzNDO0tBQWE7SUFFaEIscUJBQ0ksOERBQUNzRDtRQUFJQyxXQUFVO2tCQUNYLDRFQUFDM0QsaURBQUlBO1lBQUM0RCxLQUFLN0M7WUFBZ0JnQyxTQUFTMUM7WUFBYW9DLE1BQU05Qjs7Ozs7Ozs7Ozs7QUFHbkU7R0FoSGdCUjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NoYXJ0cy9CYWxhbmNlSGlzdG9yeUNoYXJ0LnRzeD9kYjQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gICAgQ2hhcnQgYXMgQ2hhcnRKUyxcclxuICAgIExpbmVhclNjYWxlLFxyXG4gICAgUG9pbnRFbGVtZW50LFxyXG4gICAgTGluZUVsZW1lbnQsXHJcbiAgICBDYXRlZ29yeVNjYWxlLFxyXG4gICAgVG9vbHRpcCxcclxuICAgIFRpdGxlLFxyXG4gICAgTGVnZW5kXHJcbiAgfSBmcm9tICdjaGFydC5qcyc7XHJcbmltcG9ydCB7IExpbmUgfSBmcm9tICdyZWFjdC1jaGFydGpzLTInO1xyXG5pbXBvcnQgeyBDSEFSVF9DT0xPUlMgfSBmcm9tIFwiLi9Db2xvckJhbmtcIjtcclxuaW1wb3J0IHsgSUFjY291bnRMaW5lIH0gZnJvbSBcIi4uL0RhdGEvQmFua1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJbnB1dFJhbmdlUHJvcHMge1xyXG4gICAgYWNjb3VudExpbmVzOiBJQWNjb3VudExpbmVbXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ2hhcnREYXRhc2V0IHtcclxuICAgIGxhYmVsOiBzdHJpbmc7XHJcbiAgICB5QXhpc0lEPzogc3RyaW5nO1xyXG4gICAgZGF0YTogbnVtYmVyW107XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcclxuICAgIGRhdGFsYWJlbHM6IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ2hhcnREYXRhIHtcclxuICAgIGxhYmVsczogc3RyaW5nW107XHJcbiAgICBkYXRhc2V0czogSUNoYXJ0RGF0YXNldFtdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDaGFydE9wdGlvbiB7XHJcbiAgICByZXNwb25zaXZlOiBib29sZWFuO1xyXG4gICAgbWFpbnRhaW5Bc3BlY3RSYXRpbz86IGJvb2xlYW47XHJcbiAgICBzY2FsZXM6IGFueTtcclxuICAgIGFuaW1hdGlvbj86IGFueTtcclxuICAgIGFuaW1hdGlvbnM/OiBhbnk7XHJcbiAgICBwbHVnaW5zOiBhbnk7XHJcbn1cclxuXHJcbkNoYXJ0SlMucmVnaXN0ZXIoXHJcbiAgICBMaW5lYXJTY2FsZSxcclxuICAgIFBvaW50RWxlbWVudCxcclxuICAgIExpbmVFbGVtZW50LFxyXG4gICAgQ2F0ZWdvcnlTY2FsZSxcclxuICAgIFRpdGxlLFxyXG4gICAgVG9vbHRpcCxcclxuICAgIExlZ2VuZFxyXG4pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEJhbGFuY2VIaXN0b3J5Q2hhcnQoe1xyXG4gICAgYWNjb3VudExpbmVzXHJcbiAgICB9OiBJbnB1dFJhbmdlUHJvcHMpOiBKU1guRWxlbWVudCB7XHJcblxyXG4gICAgY29uc3QgW2NoYXJ0T3B0aW9uLCBzZXRDaGFydE9wdGlvbl0gPSB1c2VTdGF0ZTxJQ2hhcnRPcHRpb24+KHtyZXNwb25zaXZlOiB0cnVlLCBhbmltYXRpb246IHt9LCBzY2FsZXM6IHt9LCBwbHVnaW5zOiB7fX0pO1xyXG4gICAgY29uc3QgW2NoYXJ0RGF0YSwgc2V0Q2hhcnREYXRhXSA9IHVzZVN0YXRlPElDaGFydERhdGE+KHtsYWJlbHM6IFtdLCBkYXRhc2V0czogW119KTtcclxuXHJcbiAgICBjb25zdCBjaGFydFJlZmVyZW5jZSA9IHVzZVJlZihudWxsKTtcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoY2hhcnRSZWZlcmVuY2UpIHtcclxuICAgICAgICAgICAgY29uc3QgY2hhcnQgPSBjaGFydFJlZmVyZW5jZS5jdXJyZW50IGFzIENoYXJ0SlN8bnVsbDtcclxuICAgICAgICAgICAgaWYgKGNoYXJ0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjaGFydC5jYW52YXMud2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY2hhcnQuY2FudmFzLnN0eWxlLndpZHRoKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNoYXJ0LmNhbnZhcy5wYXJlbnRFbGVtZW50Py5zdHlsZS53aWR0aCk7XHJcbiAgICAgICAgICAgICAgICBjaGFydC5yZXNpemUoY2hhcnQuY2FudmFzLndpZHRoLCBjaGFydC5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGNoYXJ0LmN0eFxyXG4gICAgICAgICAgICAgICAgY2hhcnQudXBkYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFtjaGFydFJlZmVyZW5jZV0pO1xyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBkYXRlTGFiZWxzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGhpc3Rvcnk6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgICAgIGlmIChhY2NvdW50TGluZXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIGRhdGVMYWJlbHMucHVzaChhY2NvdW50TGluZXNbMF0uZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJmci1GUlwiKSk7XHJcbiAgICAgICAgICAgIGhpc3RvcnkucHVzaChhY2NvdW50TGluZXNbMF0uYmFsYW5jZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGFjY291bnRMaW5lcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50RGF0ZSA9IGFjY291bnRMaW5lc1swXS5kYXRlO1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAxOyBpIDwgYWNjb3VudExpbmVzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWNjb3VudExpbmVzW2ldLmRhdGUuZ2V0VGltZSgpICE9PSBjdXJyZW50RGF0ZS5nZXRUaW1lKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRlTGFiZWxzLnB1c2goY3VycmVudERhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZnItRlJcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhpc3RvcnkucHVzaChhY2NvdW50TGluZXNbaS0xXS5iYWxhbmNlKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RGF0ZSA9IGFjY291bnRMaW5lc1tpXS5kYXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaSA9PT0gYWNjb3VudExpbmVzLmxlbmd0aC0xICYmIGFjY291bnRMaW5lc1tpXS5kYXRlLmdldFRpbWUoKSA9PT0gY3VycmVudERhdGUuZ2V0VGltZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZUxhYmVscy5wdXNoKGN1cnJlbnREYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImZyLUZSXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LnB1c2goYWNjb3VudExpbmVzW2ktMV0uYmFsYW5jZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBkYXRhc2V0czogSUNoYXJ0RGF0YXNldFtdID0gW107XHJcbiAgICAgICAgbGV0IGRhdGFzZXQ6IElDaGFydERhdGFzZXQgPSB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIkJhbGFuY2VcIixcclxuICAgICAgICAgICAgeUF4aXNJRDogJ3knLFxyXG4gICAgICAgICAgICBkYXRhOiBoaXN0b3J5LFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IENIQVJUX0NPTE9SU1swXSxcclxuICAgICAgICAgICAgZGF0YWxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgYW5jaG9yOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIGFsaWduOiAnYm90dG9tJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkYXRhc2V0cy5wdXNoKGRhdGFzZXQpO1xyXG5cclxuICAgICAgICBsZXQgZGF0YVRvRGlzcGxheTogSUNoYXJ0RGF0YSA9IHtcclxuICAgICAgICAgICAgbGFiZWxzOiBkYXRlTGFiZWxzLFxyXG4gICAgICAgICAgICBkYXRhc2V0czogZGF0YXNldHMsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgc2V0Q2hhcnREYXRhKGRhdGFUb0Rpc3BsYXkpO1xyXG5cclxuICAgICAgICBsZXQgb3B0aW9uczogSUNoYXJ0T3B0aW9uID0ge1xyXG4gICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcclxuICAgICAgICAgICAgYW5pbWF0aW9uczogZmFsc2UsXHJcbiAgICAgICAgICAgIHNjYWxlczoge1xyXG4gICAgICAgICAgICAgICAgeDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdEYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0Ftb3VudCdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBsdWdpbnM6IHtcclxuICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnIGFzIGNvbnN0LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkV2b2x1dGlvbiBvZiB0aGUgYWNjb3VudCdzIGJhbGFuY2VcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRhdGFsYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldENoYXJ0T3B0aW9uKG9wdGlvbnMpO1xyXG5cclxuICAgfSwgW2FjY291bnRMaW5lc10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lLWNoYXJ0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPExpbmUgcmVmPXtjaGFydFJlZmVyZW5jZX0gb3B0aW9ucz17Y2hhcnRPcHRpb259IGRhdGE9e2NoYXJ0RGF0YX0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICApXHJcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJDaGFydCIsIkNoYXJ0SlMiLCJMaW5lYXJTY2FsZSIsIlBvaW50RWxlbWVudCIsIkxpbmVFbGVtZW50IiwiQ2F0ZWdvcnlTY2FsZSIsIlRvb2x0aXAiLCJUaXRsZSIsIkxlZ2VuZCIsIkxpbmUiLCJDSEFSVF9DT0xPUlMiLCJyZWdpc3RlciIsIkJhbGFuY2VIaXN0b3J5Q2hhcnQiLCJhY2NvdW50TGluZXMiLCJjaGFydE9wdGlvbiIsInNldENoYXJ0T3B0aW9uIiwicmVzcG9uc2l2ZSIsImFuaW1hdGlvbiIsInNjYWxlcyIsInBsdWdpbnMiLCJjaGFydERhdGEiLCJzZXRDaGFydERhdGEiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImNoYXJ0UmVmZXJlbmNlIiwiY2hhcnQiLCJjdXJyZW50IiwiY29uc29sZSIsImxvZyIsImNhbnZhcyIsIndpZHRoIiwic3R5bGUiLCJwYXJlbnRFbGVtZW50IiwicmVzaXplIiwiaGVpZ2h0IiwiY3R4IiwidXBkYXRlIiwiZGF0ZUxhYmVscyIsImhpc3RvcnkiLCJsZW5ndGgiLCJwdXNoIiwiZGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImJhbGFuY2UiLCJjdXJyZW50RGF0ZSIsImkiLCJnZXRUaW1lIiwiZGF0YXNldCIsImxhYmVsIiwieUF4aXNJRCIsImRhdGEiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkYXRhbGFiZWxzIiwiYW5jaG9yIiwiYWxpZ24iLCJkYXRhVG9EaXNwbGF5Iiwib3B0aW9ucyIsIm1haW50YWluQXNwZWN0UmF0aW8iLCJhbmltYXRpb25zIiwieCIsImJlZ2luQXRaZXJvIiwidGl0bGUiLCJkaXNwbGF5IiwidGV4dCIsInkiLCJsZWdlbmQiLCJwb3NpdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Charts/BalanceHistoryChart.tsx\n"));

/***/ })

});