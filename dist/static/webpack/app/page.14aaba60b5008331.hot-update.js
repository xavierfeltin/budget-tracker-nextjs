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

/***/ "(app-pages-browser)/./components/Charts/TagMonthlyHistoryChart.tsx":
/*!******************************************************!*\
  !*** ./components/Charts/TagMonthlyHistoryChart.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TagHistoryMonthlyChart: function() { return /* binding */ TagHistoryMonthlyChart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! chart.js */ \"(app-pages-browser)/./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-chartjs-2 */ \"(app-pages-browser)/./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var _ColorBank__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColorBank */ \"(app-pages-browser)/./components/Charts/ColorBank.ts\");\n/* harmony import */ var _Data_Bank__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Data/Bank */ \"(app-pages-browser)/./components/Data/Bank.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_4__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_4__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_4__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_4__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_4__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_4__.BarElement, chart_js__WEBPACK_IMPORTED_MODULE_4__.Title, chart_js__WEBPACK_IMPORTED_MODULE_4__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_4__.Legend);\nfunction TagHistoryMonthlyChart(param) {\n    let { accountLines, tag } = param;\n    _s();\n    const [chartOption, setChartOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        responsive: true,\n        animation: {},\n        scales: {},\n        plugins: {}\n    });\n    const [chartData, setChartData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        labels: [],\n        datasets: []\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let datasets = [];\n        const taggedLines = tag === \"\" ? accountLines : accountLines.filter((line)=>line.tags.indexOf(tag) !== -1);\n        const groupByTag = (0,_Data_Bank__WEBPACK_IMPORTED_MODULE_3__.aggregateByTags)(taggedLines, -1, tag);\n        const tags = Object.keys(groupByTag);\n        const groupByDate = (0,_Data_Bank__WEBPACK_IMPORTED_MODULE_3__.aggregateByDate)(taggedLines, true);\n        const dateLabels = Object.keys(groupByDate).sort((a, b)=>{\n            let dA = new Date(2023, parseInt(a.split(\"/\")[1]) - 1, parseInt(a.split(\"/\")[0]));\n            let dB = new Date(2023, parseInt(b.split(\"/\")[1]) - 1, parseInt(b.split(\"/\")[0]));\n            return dA > dB ? 1 : -1;\n        });\n        /*\r\n        // Dataset to cover the tag\r\n        let tagHistoryDebit = Object.keys(groupByDate).sort((a, b) => {\r\n            let dA = new Date(2023, parseInt(a.split(\"/\")[1]) - 1, parseInt(a.split(\"/\")[0]));\r\n            let dB = new Date(2023, parseInt(b.split(\"/\")[1]) - 1, parseInt(b.split(\"/\")[0]));\r\n            return dA > dB ? 1 : -1;\r\n        }).map((date) => groupByDate[date] ? groupByDate[date].debit : 0);\r\n\r\n        let dataset: IChartDataset = {\r\n            label: tag || \"Tous\",\r\n            yAxisID: 'y',\r\n            data: tagHistoryDebit,\r\n            backgroundColor: CHART_COLORS[0],\r\n\r\n        };\r\n        datasets.push(dataset);\r\n        */ // Datasets to cover the sub tags\n        const processedTags = [];\n        for(let i = 0; i < tags.length; i++){\n            const subTaggedLines = taggedLines.filter((line)=>line.tags.indexOf(tags[i]) !== -1 && !line.tags.some((t)=>processedTags.includes(t)));\n            const groupSubTagByDate = (0,_Data_Bank__WEBPACK_IMPORTED_MODULE_3__.aggregateByDate)(subTaggedLines, true);\n            let historyDebit = Object.keys(groupByDate).sort((a, b)=>{\n                let dA = new Date(2023, parseInt(a.split(\"/\")[1]) - 1, parseInt(a.split(\"/\")[0]));\n                let dB = new Date(2023, parseInt(b.split(\"/\")[1]) - 1, parseInt(b.split(\"/\")[0]));\n                return dA > dB ? 1 : -1;\n            }).map((date)=>groupSubTagByDate[date] ? groupSubTagByDate[date].debit : 0);\n            let dataset = {\n                label: tags[i],\n                yAxisID: \"y\",\n                data: historyDebit,\n                backgroundColor: _ColorBank__WEBPACK_IMPORTED_MODULE_2__.CHART_COLORS[(i + 1) % _ColorBank__WEBPACK_IMPORTED_MODULE_2__.CHART_COLORS.length]\n            };\n            datasets.push(dataset);\n            processedTags.push(tags[i]);\n        }\n        let dataToDisplay = {\n            labels: dateLabels,\n            datasets: datasets\n        };\n        setChartData(dataToDisplay);\n        let options = {\n            responsive: true,\n            maintainAspectRatio: false,\n            animation: {\n                duration: 0\n            },\n            scales: {\n                x: {\n                    beginAtZero: true,\n                    title: {\n                        display: true,\n                        text: \"Date\"\n                    }\n                },\n                y: {\n                    beginAtZero: true,\n                    title: {\n                        display: true,\n                        text: \"Amount\"\n                    }\n                }\n            },\n            plugins: {\n                legend: {\n                    position: \"bottom\"\n                },\n                title: {\n                    display: true,\n                    text: \"Debit monthly history of \" + (tag || \"Tous\"),\n                    padding: {\n                        top: 5,\n                        bottom: 25\n                    }\n                },\n                datalabels: {\n                    align: \"end\",\n                    anchor: \"end\",\n                    color: \"black\",\n                    display: (context)=>{\n                        const val = context.dataset.data[context.dataIndex];\n                        return val > 0;\n                    },\n                    formatter: (value, context)=>{\n                        return Math.round(value).toString();\n                    },\n                    font: {\n                        weight: \"bold\"\n                    },\n                    padding: 6,\n                    textAlign: \"center\"\n                }\n            }\n        };\n        setChartOption(options);\n    }, [\n        accountLines,\n        tag\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"time-chart-wrapper\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_5__.Bar, {\n            options: chartOption,\n            data: chartData\n        }, void 0, false, {\n            fileName: \"D:\\\\projet\\\\budget-tracker-nextjs\\\\components\\\\Charts\\\\TagMonthlyHistoryChart.tsx\",\n            lineNumber: 182,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\projet\\\\budget-tracker-nextjs\\\\components\\\\Charts\\\\TagMonthlyHistoryChart.tsx\",\n        lineNumber: 181,\n        columnNumber: 9\n    }, this);\n}\n_s(TagHistoryMonthlyChart, \"6CaxhMxXEB4iSHPW/sbEIFO3iIg=\");\n_c = TagHistoryMonthlyChart;\nvar _c;\n$RefreshReg$(_c, \"TagHistoryMonthlyChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ2hhcnRzL1RhZ01vbnRobHlIaXN0b3J5Q2hhcnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFXeEI7QUFDa0I7QUFDSztBQUNtQztBQTZCOUVHLDJDQUFPQSxDQUFDYSxRQUFRLENBQ1paLGlEQUFXQSxFQUNYTSxrREFBWUEsRUFDWkQsaURBQVdBLEVBQ1hKLG1EQUFhQSxFQUNiTSxnREFBVUEsRUFDVkosMkNBQUtBLEVBQ0xELDZDQUFPQSxFQUNQRSw0Q0FBTUE7QUFHSCxTQUFTUyx1QkFBdUIsS0FHakI7UUFIaUIsRUFDbkNDLFlBQVksRUFDWkMsR0FBRyxFQUNlLEdBSGlCOztJQUtuQyxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR3BCLCtDQUFRQSxDQUFlO1FBQUNxQixZQUFZO1FBQU1DLFdBQVcsQ0FBQztRQUFHQyxRQUFRLENBQUM7UUFBR0MsU0FBUyxDQUFDO0lBQUM7SUFDdEgsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUcxQiwrQ0FBUUEsQ0FBYTtRQUFDMkIsUUFBUSxFQUFFO1FBQUVDLFVBQVUsRUFBRTtJQUFBO0lBRWhGN0IsZ0RBQVNBLENBQUM7UUFDTixJQUFJNkIsV0FBNEIsRUFBRTtRQUNsQyxNQUFNQyxjQUFjWCxRQUFRLEtBQUtELGVBQWVBLGFBQWFhLE1BQU0sQ0FBQyxDQUFDQyxPQUFTQSxLQUFLQyxJQUFJLENBQUNDLE9BQU8sQ0FBQ2YsU0FBUyxDQUFDO1FBQzFHLE1BQU1nQixhQUFhcEIsMkRBQWVBLENBQUNlLGFBQWEsQ0FBQyxHQUFHWDtRQUNwRCxNQUFNYyxPQUFPRyxPQUFPQyxJQUFJLENBQUNGO1FBRXpCLE1BQU1HLGNBQWN4QiwyREFBZUEsQ0FBQ2dCLGFBQWE7UUFDakQsTUFBTVMsYUFBY0gsT0FBT0MsSUFBSSxDQUFDQyxhQUFhRSxJQUFJLENBQUMsQ0FBQ0MsR0FBR0M7WUFDbEQsSUFBSUMsS0FBSyxJQUFJQyxLQUFLLE1BQU1DLFNB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QUFRRSxTQUFTLENBQUM7d0JBQzNELE9BQU9ELE1BQU07b0JBQ2pCO29CQUNBRSxXQUFXLENBQUNDLE9BQWVKO3dCQUN2QixPQUFPSyxLQUFLQyxLQUFLLENBQUNGLE9BQU9HLFFBQVE7b0JBQ3JDO29CQUNBQyxNQUFNO3dCQUNKQyxRQUFRO29CQUNWO29CQUNBaEIsU0FBUztvQkFDVGlCLFdBQVc7Z0JBQ2Y7WUFDSjtRQUNKO1FBQ0ExRSxlQUFlOEM7SUFFcEIsR0FBRztRQUFDakQ7UUFBY0M7S0FBSTtJQUVyQixxQkFDSSw4REFBQzZFO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNyRixnREFBR0E7WUFBQ3VELFNBQVMvQztZQUFhMkMsTUFBTXJDOzs7Ozs7Ozs7OztBQUc3QztHQWxJZ0JUO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2hhcnRzL1RhZ01vbnRobHlIaXN0b3J5Q2hhcnQudHN4PzJmNjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gICAgQ2hhcnQgYXMgQ2hhcnRKUyxcclxuICAgIExpbmVhclNjYWxlLFxyXG4gICAgQ2F0ZWdvcnlTY2FsZSxcclxuICAgIFRvb2x0aXAsXHJcbiAgICBUaXRsZSxcclxuICAgIExlZ2VuZCxcclxuICAgIExpbmVFbGVtZW50LFxyXG4gICAgUG9pbnRFbGVtZW50LFxyXG4gICAgQmFyRWxlbWVudFxyXG4gIH0gZnJvbSAnY2hhcnQuanMnO1xyXG5pbXBvcnQgeyBCYXIgfSBmcm9tICdyZWFjdC1jaGFydGpzLTInO1xyXG5pbXBvcnQgeyBDSEFSVF9DT0xPUlMgfSBmcm9tIFwiLi9Db2xvckJhbmtcIjtcclxuaW1wb3J0IHsgSUFjY291bnRMaW5lLCBhZ2dyZWdhdGVCeURhdGUsIGFnZ3JlZ2F0ZUJ5VGFncyB9IGZyb20gXCIuLi9EYXRhL0JhbmtcIjtcclxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCJjaGFydGpzLXBsdWdpbi1kYXRhbGFiZWxzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElucHV0UmFuZ2VQcm9wcyB7XHJcbiAgICBhY2NvdW50TGluZXM6IElBY2NvdW50TGluZVtdO1xyXG4gICAgdGFnOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNoYXJ0RGF0YXNldCB7XHJcbiAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgeUF4aXNJRD86IHN0cmluZztcclxuICAgIGRhdGE6IG51bWJlcltdO1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XHJcbiAgICBkYXRhbGFiZWxzPzogYW55O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDaGFydERhdGEge1xyXG4gICAgbGFiZWxzOiBzdHJpbmdbXTtcclxuICAgIGRhdGFzZXRzOiBJQ2hhcnREYXRhc2V0W107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNoYXJ0T3B0aW9uIHtcclxuICAgIHJlc3BvbnNpdmU6IGJvb2xlYW47XHJcbiAgICBtYWludGFpbkFzcGVjdFJhdGlvPzogYm9vbGVhbjtcclxuICAgIHNjYWxlczogYW55O1xyXG4gICAgYW5pbWF0aW9uOiBhbnk7XHJcbiAgICBwbHVnaW5zOiBhbnk7XHJcbn1cclxuXHJcbkNoYXJ0SlMucmVnaXN0ZXIoXHJcbiAgICBMaW5lYXJTY2FsZSxcclxuICAgIFBvaW50RWxlbWVudCxcclxuICAgIExpbmVFbGVtZW50LFxyXG4gICAgQ2F0ZWdvcnlTY2FsZSxcclxuICAgIEJhckVsZW1lbnQsXHJcbiAgICBUaXRsZSxcclxuICAgIFRvb2x0aXAsXHJcbiAgICBMZWdlbmRcclxuKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUYWdIaXN0b3J5TW9udGhseUNoYXJ0KHtcclxuICAgIGFjY291bnRMaW5lcyxcclxuICAgIHRhZyxcclxuICAgIH06IElucHV0UmFuZ2VQcm9wcyk6IEpTWC5FbGVtZW50IHtcclxuXHJcbiAgICBjb25zdCBbY2hhcnRPcHRpb24sIHNldENoYXJ0T3B0aW9uXSA9IHVzZVN0YXRlPElDaGFydE9wdGlvbj4oe3Jlc3BvbnNpdmU6IHRydWUsIGFuaW1hdGlvbjoge30sIHNjYWxlczoge30sIHBsdWdpbnM6IHt9fSk7XHJcbiAgICBjb25zdCBbY2hhcnREYXRhLCBzZXRDaGFydERhdGFdID0gdXNlU3RhdGU8SUNoYXJ0RGF0YT4oe2xhYmVsczogW10sIGRhdGFzZXRzOiBbXX0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGRhdGFzZXRzOiBJQ2hhcnREYXRhc2V0W10gPSBbXTtcclxuICAgICAgICBjb25zdCB0YWdnZWRMaW5lcyA9IHRhZyA9PT0gXCJcIiA/IGFjY291bnRMaW5lcyA6IGFjY291bnRMaW5lcy5maWx0ZXIoKGxpbmUpID0+IGxpbmUudGFncy5pbmRleE9mKHRhZykgIT09IC0xKTtcclxuICAgICAgICBjb25zdCBncm91cEJ5VGFnID0gYWdncmVnYXRlQnlUYWdzKHRhZ2dlZExpbmVzLCAtMSwgdGFnKTtcclxuICAgICAgICBjb25zdCB0YWdzID0gT2JqZWN0LmtleXMoZ3JvdXBCeVRhZyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGdyb3VwQnlEYXRlID0gYWdncmVnYXRlQnlEYXRlKHRhZ2dlZExpbmVzLCB0cnVlKTtcclxuICAgICAgICBjb25zdCBkYXRlTGFiZWxzID0gIE9iamVjdC5rZXlzKGdyb3VwQnlEYXRlKS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBkQSA9IG5ldyBEYXRlKDIwMjMsIHBhcnNlSW50KGEuc3BsaXQoXCIvXCIpWzFdKSAtIDEsIHBhcnNlSW50KGEuc3BsaXQoXCIvXCIpWzBdKSk7XHJcbiAgICAgICAgICAgIGxldCBkQiA9IG5ldyBEYXRlKDIwMjMsIHBhcnNlSW50KGIuc3BsaXQoXCIvXCIpWzFdKSAtIDEsIHBhcnNlSW50KGIuc3BsaXQoXCIvXCIpWzBdKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBkQSA+IGRCID8gMSA6IC0xO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgIC8vIERhdGFzZXQgdG8gY292ZXIgdGhlIHRhZ1xyXG4gICAgICAgIGxldCB0YWdIaXN0b3J5RGViaXQgPSBPYmplY3Qua2V5cyhncm91cEJ5RGF0ZSkuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZEEgPSBuZXcgRGF0ZSgyMDIzLCBwYXJzZUludChhLnNwbGl0KFwiL1wiKVsxXSkgLSAxLCBwYXJzZUludChhLnNwbGl0KFwiL1wiKVswXSkpO1xyXG4gICAgICAgICAgICBsZXQgZEIgPSBuZXcgRGF0ZSgyMDIzLCBwYXJzZUludChiLnNwbGl0KFwiL1wiKVsxXSkgLSAxLCBwYXJzZUludChiLnNwbGl0KFwiL1wiKVswXSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gZEEgPiBkQiA/IDEgOiAtMTtcclxuICAgICAgICB9KS5tYXAoKGRhdGUpID0+IGdyb3VwQnlEYXRlW2RhdGVdID8gZ3JvdXBCeURhdGVbZGF0ZV0uZGViaXQgOiAwKTtcclxuXHJcbiAgICAgICAgbGV0IGRhdGFzZXQ6IElDaGFydERhdGFzZXQgPSB7XHJcbiAgICAgICAgICAgIGxhYmVsOiB0YWcgfHwgXCJUb3VzXCIsXHJcbiAgICAgICAgICAgIHlBeGlzSUQ6ICd5JyxcclxuICAgICAgICAgICAgZGF0YTogdGFnSGlzdG9yeURlYml0LFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IENIQVJUX0NPTE9SU1swXSxcclxuXHJcbiAgICAgICAgfTtcclxuICAgICAgICBkYXRhc2V0cy5wdXNoKGRhdGFzZXQpO1xyXG4gICAgICAgICovXHJcblxyXG4gICAgICAgIC8vIERhdGFzZXRzIHRvIGNvdmVyIHRoZSBzdWIgdGFnc1xyXG4gICAgICAgIGNvbnN0IHByb2Nlc3NlZFRhZ3M6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN1YlRhZ2dlZExpbmVzID0gdGFnZ2VkTGluZXMuZmlsdGVyKChsaW5lKSA9PiBsaW5lLnRhZ3MuaW5kZXhPZih0YWdzW2ldKSAhPT0gLTEgJiYgIWxpbmUudGFncy5zb21lKHQgPT4gcHJvY2Vzc2VkVGFncy5pbmNsdWRlcyh0KSkpO1xyXG4gICAgICAgICAgICBjb25zdCBncm91cFN1YlRhZ0J5RGF0ZSA9IGFnZ3JlZ2F0ZUJ5RGF0ZShzdWJUYWdnZWRMaW5lcywgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgaGlzdG9yeURlYml0ID0gT2JqZWN0LmtleXMoZ3JvdXBCeURhdGUpLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBkQSA9IG5ldyBEYXRlKDIwMjMsIHBhcnNlSW50KGEuc3BsaXQoXCIvXCIpWzFdKSAtIDEsIHBhcnNlSW50KGEuc3BsaXQoXCIvXCIpWzBdKSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZEIgPSBuZXcgRGF0ZSgyMDIzLCBwYXJzZUludChiLnNwbGl0KFwiL1wiKVsxXSkgLSAxLCBwYXJzZUludChiLnNwbGl0KFwiL1wiKVswXSkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRBID4gZEIgPyAxIDogLTE7XHJcbiAgICAgICAgICAgIH0pLm1hcCgoZGF0ZSkgPT4gZ3JvdXBTdWJUYWdCeURhdGVbZGF0ZV0gPyBncm91cFN1YlRhZ0J5RGF0ZVtkYXRlXS5kZWJpdCA6IDApO1xyXG5cclxuICAgICAgICAgICAgbGV0IGRhdGFzZXQ6IElDaGFydERhdGFzZXQgPSB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogdGFnc1tpXSxcclxuICAgICAgICAgICAgICAgIHlBeGlzSUQ6ICd5JyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGhpc3RvcnlEZWJpdCxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogQ0hBUlRfQ09MT1JTWyhpKzEpJUNIQVJUX0NPTE9SUy5sZW5ndGhdXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGRhdGFzZXRzLnB1c2goZGF0YXNldCk7XHJcbiAgICAgICAgICAgIHByb2Nlc3NlZFRhZ3MucHVzaCh0YWdzW2ldKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBkYXRhVG9EaXNwbGF5OiBJQ2hhcnREYXRhID0ge1xyXG4gICAgICAgICAgICBsYWJlbHM6IGRhdGVMYWJlbHMsXHJcbiAgICAgICAgICAgIGRhdGFzZXRzOiBkYXRhc2V0c1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHNldENoYXJ0RGF0YShkYXRhVG9EaXNwbGF5KTtcclxuXHJcbiAgICAgICAgbGV0IG9wdGlvbnM6IElDaGFydE9wdGlvbiA9IHtcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2NhbGVzOiB7XHJcbiAgICAgICAgICAgICAgICB4OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0RhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHk6IHtcclxuICAgICAgICAgICAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQW1vdW50J1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGx1Z2luczoge1xyXG4gICAgICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScgYXMgY29uc3QsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiRGViaXQgbW9udGhseSBoaXN0b3J5IG9mIFwiICsgKHRhZyB8fCBcIlRvdXNcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMjVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGF0YWxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduOiAnZW5kJyxcclxuICAgICAgICAgICAgICAgICAgICBhbmNob3I6ICdlbmQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IChjb250ZXh0OiBDb250ZXh0KTogYm9vbGVhbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbDogbnVtYmVyID0gY29udGV4dC5kYXRhc2V0LmRhdGFbY29udGV4dC5kYXRhSW5kZXhdIGFzIG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbCA+IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6ICh2YWx1ZTogbnVtYmVyLCBjb250ZXh0OiBDb250ZXh0KTogc3RyaW5nID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBmb250OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3ZWlnaHQ6ICdib2xkJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNixcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRDaGFydE9wdGlvbihvcHRpb25zKTtcclxuXHJcbiAgIH0sIFthY2NvdW50TGluZXMsIHRhZ10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lLWNoYXJ0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPEJhciBvcHRpb25zPXtjaGFydE9wdGlvbn0gZGF0YT17Y2hhcnREYXRhfS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgIClcclxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNoYXJ0IiwiQ2hhcnRKUyIsIkxpbmVhclNjYWxlIiwiQ2F0ZWdvcnlTY2FsZSIsIlRvb2x0aXAiLCJUaXRsZSIsIkxlZ2VuZCIsIkxpbmVFbGVtZW50IiwiUG9pbnRFbGVtZW50IiwiQmFyRWxlbWVudCIsIkJhciIsIkNIQVJUX0NPTE9SUyIsImFnZ3JlZ2F0ZUJ5RGF0ZSIsImFnZ3JlZ2F0ZUJ5VGFncyIsInJlZ2lzdGVyIiwiVGFnSGlzdG9yeU1vbnRobHlDaGFydCIsImFjY291bnRMaW5lcyIsInRhZyIsImNoYXJ0T3B0aW9uIiwic2V0Q2hhcnRPcHRpb24iLCJyZXNwb25zaXZlIiwiYW5pbWF0aW9uIiwic2NhbGVzIiwicGx1Z2lucyIsImNoYXJ0RGF0YSIsInNldENoYXJ0RGF0YSIsImxhYmVscyIsImRhdGFzZXRzIiwidGFnZ2VkTGluZXMiLCJmaWx0ZXIiLCJsaW5lIiwidGFncyIsImluZGV4T2YiLCJncm91cEJ5VGFnIiwiT2JqZWN0Iiwia2V5cyIsImdyb3VwQnlEYXRlIiwiZGF0ZUxhYmVscyIsInNvcnQiLCJhIiwiYiIsImRBIiwiRGF0ZSIsInBhcnNlSW50Iiwic3BsaXQiLCJkQiIsInByb2Nlc3NlZFRhZ3MiLCJpIiwibGVuZ3RoIiwic3ViVGFnZ2VkTGluZXMiLCJzb21lIiwidCIsImluY2x1ZGVzIiwiZ3JvdXBTdWJUYWdCeURhdGUiLCJoaXN0b3J5RGViaXQiLCJtYXAiLCJkYXRlIiwiZGViaXQiLCJkYXRhc2V0IiwibGFiZWwiLCJ5QXhpc0lEIiwiZGF0YSIsImJhY2tncm91bmRDb2xvciIsInB1c2giLCJkYXRhVG9EaXNwbGF5Iiwib3B0aW9ucyIsIm1haW50YWluQXNwZWN0UmF0aW8iLCJkdXJhdGlvbiIsIngiLCJiZWdpbkF0WmVybyIsInRpdGxlIiwiZGlzcGxheSIsInRleHQiLCJ5IiwibGVnZW5kIiwicG9zaXRpb24iLCJwYWRkaW5nIiwidG9wIiwiYm90dG9tIiwiZGF0YWxhYmVscyIsImFsaWduIiwiYW5jaG9yIiwiY29sb3IiLCJjb250ZXh0IiwidmFsIiwiZGF0YUluZGV4IiwiZm9ybWF0dGVyIiwidmFsdWUiLCJNYXRoIiwicm91bmQiLCJ0b1N0cmluZyIsImZvbnQiLCJ3ZWlnaHQiLCJ0ZXh0QWxpZ24iLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Charts/TagMonthlyHistoryChart.tsx\n"));

/***/ })

});