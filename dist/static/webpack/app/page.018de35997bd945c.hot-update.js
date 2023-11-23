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

/***/ "(app-pages-browser)/./components/Charts/TagRepartitionChart.tsx":
/*!***************************************************!*\
  !*** ./components/Charts/TagRepartitionChart.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TagRepartitionChart: function() { return /* binding */ TagRepartitionChart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chart.js */ \"(app-pages-browser)/./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-chartjs-2 */ \"(app-pages-browser)/./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chartjs-plugin-datalabels */ \"(app-pages-browser)/./node_modules/chartjs-plugin-datalabels/dist/chartjs-plugin-datalabels.esm.js\");\n/* harmony import */ var _ColorBank__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ColorBank */ \"(app-pages-browser)/./components/Charts/ColorBank.ts\");\n/* harmony import */ var _Data_Bank__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Data/Bank */ \"(app-pages-browser)/./components/Data/Bank.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_5__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_5__.ArcElement, chart_js__WEBPACK_IMPORTED_MODULE_5__.Title, chart_js__WEBPACK_IMPORTED_MODULE_5__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_5__.Legend, chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nfunction TagRepartitionChart(param) {\n    let { accountLines, tag } = param;\n    _s();\n    const [chartOption, setChartOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        responsive: true,\n        animation: {},\n        plugins: {},\n        layout: {}\n    });\n    const [chartData, setChartData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        labels: [],\n        datasets: []\n    });\n    const chartReference = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (chartReference) {\n            const chart = chartReference.current;\n            if (chart && chartData.datasets.length > 0) {\n                var _chart_ctx_canvas_parentElement;\n                const width = ((_chart_ctx_canvas_parentElement = chart.ctx.canvas.parentElement) === null || _chart_ctx_canvas_parentElement === void 0 ? void 0 : _chart_ctx_canvas_parentElement.style.width) ? chart.ctx.canvas.width : 1370;\n                chart.resize(width, chart.canvas.height);\n                chart.update();\n            }\n        }\n    }, [\n        chartReference,\n        chartData\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const taggedLines = tag === \"\" ? accountLines : accountLines.filter((line)=>line.tags.indexOf(tag) !== -1);\n        const groupByTag = (0,_Data_Bank__WEBPACK_IMPORTED_MODULE_4__.aggregateByTags)(taggedLines, -1, tag);\n        // Datasets to cover the sub tags\n        const tags = Object.keys(groupByTag).filter((subTag)=>groupByTag[subTag].debit !== 0).sort();\n        const processedTags = [];\n        const data = [];\n        for(let i = 0; i < tags.length; i++){\n            const subTaggedLines = taggedLines.filter((line)=>line.tags.indexOf(tags[i]) !== -1 && !line.tags.some((t)=>processedTags.includes(t)));\n            const debits = subTaggedLines.map((line)=>line.debit || 0);\n            const tagData = debits.length > 0 ? debits.reduce((a, sum)=>a + sum) : 0;\n            data.push(tagData);\n            processedTags.push(tags[i]);\n        }\n        let datasets = [];\n        let dataset = {\n            data: data,\n            backgroundColor: _ColorBank__WEBPACK_IMPORTED_MODULE_3__.PIE_BACKGROUND_COLORS,\n            borderColor: _ColorBank__WEBPACK_IMPORTED_MODULE_3__.PIE_BORDER_COLORS,\n            datalabels: {\n                anchor: \"end\",\n                align: \"bottom\"\n            }\n        };\n        datasets.push(dataset);\n        let dataToDisplay = {\n            labels: tags,\n            datasets: datasets\n        };\n        setChartData(dataToDisplay);\n        let options = {\n            responsive: true,\n            animation: {\n                duration: 0\n            },\n            layout: {\n                padding: {\n                    left: 40,\n                    right: 40,\n                    top: 40,\n                    bottom: 40\n                }\n            },\n            plugins: {\n                legend: {\n                    position: \"top\",\n                    display: false\n                },\n                title: {\n                    display: false,\n                    text: \"Repartition of \" + (tag || \"Tous\")\n                },\n                datalabels: {\n                    borderRadius: 25,\n                    borderWidth: 2,\n                    color: \"black\",\n                    font: {\n                        weight: \"bold\"\n                    },\n                    padding: 6,\n                    formatter: function(value, context) {\n                        const currentLabel = context.chart.data.labels ? context.chart.data.labels[context.dataIndex] : \"\";\n                        return currentLabel + \"\\n\" + Math.round(value).toString();\n                    },\n                    textAlign: \"center\"\n                }\n            }\n        };\n        setChartOption(options);\n    }, [\n        accountLines,\n        tag\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"month-chart-wrapper\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__.Pie, {\n            className: \"centered-canvas\",\n            options: chartOption,\n            data: chartData\n        }, void 0, false, {\n            fileName: \"D:\\\\projet\\\\budget-tracker-nextjs\\\\components\\\\Charts\\\\TagRepartitionChart.tsx\",\n            lineNumber: 148,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\projet\\\\budget-tracker-nextjs\\\\components\\\\Charts\\\\TagRepartitionChart.tsx\",\n        lineNumber: 147,\n        columnNumber: 9\n    }, this);\n}\n_s(TagRepartitionChart, \"9SmJPQOrAoMni9J6jPOBtcWGdDE=\");\n_c = TagRepartitionChart;\nvar _c;\n$RefreshReg$(_c, \"TagRepartitionChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ2hhcnRzL1RhZ1JlcGFydGl0aW9uQ2hhcnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQW9EO0FBT2hDO0FBQ2tCO0FBRWtCO0FBQ2U7QUFDVjtBQTBCN0RJLDJDQUFPQSxDQUFDVSxRQUFRLENBQ1pULGdEQUFVQSxFQUNWRSwyQ0FBS0EsRUFDTEQsNkNBQU9BLEVBQ1BFLDRDQUFNQSxFQUNORSxpRUFBZUE7QUFHWixTQUFTSyxvQkFBb0IsS0FHZDtRQUhjLEVBQ2hDQyxZQUFZLEVBQ1pDLEdBQUcsRUFDZSxHQUhjOztJQUtoQyxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR2pCLCtDQUFRQSxDQUFlO1FBQUNrQixZQUFZO1FBQU1DLFdBQVcsQ0FBQztRQUFHQyxTQUFTLENBQUM7UUFBR0MsUUFBUSxDQUFDO0lBQUM7SUFDdEgsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUd2QiwrQ0FBUUEsQ0FBYTtRQUFDd0IsUUFBUSxFQUFFO1FBQUVDLFVBQVUsRUFBRTtJQUFBO0lBRWhGLE1BQU1DLGlCQUFpQjNCLDZDQUFNQSxDQUFDO0lBRTlCRCxnREFBU0EsQ0FBQztRQUNOLElBQUk0QixnQkFBZ0I7WUFDaEIsTUFBTUMsUUFBUUQsZUFBZUUsT0FBTztZQUNwQyxJQUFJRCxTQUFTTCxVQUFVRyxRQUFRLENBQUNJLE1BQU0sR0FBRyxHQUFHO29CQUMxQkY7Z0JBQWQsTUFBTUcsUUFBUUgsRUFBQUEsa0NBQUFBLE1BQU1JLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDQyxhQUFhLGNBQTlCTixzREFBQUEsZ0NBQWdDTyxLQUFLLENBQUNKLEtBQUssSUFBR0gsTUFBTUksR0FBRyxDQUFDQyxNQUFNLENBQUNGLEtBQUssR0FBRztnQkFDckZILE1BQU1RLE1BQU0sQ0FBQ0wsT0FBT0gsTUFBTUssTUFBTSxDQUFDSSxNQUFNO2dCQUN2Q1QsTUFBTVUsTUFBTTtZQUNoQjtRQUNKO0lBQ0osR0FBRTtRQUFDWDtR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Z0JUO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2hhcnRzL1RhZ1JlcGFydGl0aW9uQ2hhcnQudHN4PzRmNmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgICBDaGFydCBhcyBDaGFydEpTLFxyXG4gICAgQXJjRWxlbWVudCxcclxuICAgIFRvb2x0aXAsXHJcbiAgICBUaXRsZSxcclxuICAgIExlZ2VuZFxyXG4gIH0gZnJvbSAnY2hhcnQuanMnO1xyXG5pbXBvcnQgeyBQaWUgfSBmcm9tICdyZWFjdC1jaGFydGpzLTInO1xyXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnY2hhcnRqcy1wbHVnaW4tZGF0YWxhYmVscyc7XHJcbmltcG9ydCBDaGFydERhdGFMYWJlbHMgZnJvbSAnY2hhcnRqcy1wbHVnaW4tZGF0YWxhYmVscyc7XHJcbmltcG9ydCB7IFBJRV9CQUNLR1JPVU5EX0NPTE9SUywgUElFX0JPUkRFUl9DT0xPUlMgfSBmcm9tIFwiLi9Db2xvckJhbmtcIjtcclxuaW1wb3J0IHsgSUFjY291bnRMaW5lLCBhZ2dyZWdhdGVCeVRhZ3MgfSBmcm9tIFwiLi4vRGF0YS9CYW5rXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElucHV0UmFuZ2VQcm9wcyB7XHJcbiAgICBhY2NvdW50TGluZXM6IElBY2NvdW50TGluZVtdO1xyXG4gICAgdGFnOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNoYXJ0RGF0YXNldCB7XHJcbiAgICBkYXRhOiBudW1iZXJbXTtcclxuICAgIGJhY2tncm91bmRDb2xvcjogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICBib3JkZXJDb2xvcj86IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgZGF0YWxhYmVscz86IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ2hhcnREYXRhIHtcclxuICAgIGxhYmVsczogc3RyaW5nW107XHJcbiAgICBkYXRhc2V0czogSUNoYXJ0RGF0YXNldFtdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDaGFydE9wdGlvbiB7XHJcbiAgICByZXNwb25zaXZlOiBib29sZWFuO1xyXG4gICAgYW5pbWF0aW9uOiBhbnk7XHJcbiAgICBwbHVnaW5zOiBhbnk7XHJcbiAgICBsYXlvdXQ6IGFueTtcclxufVxyXG5cclxuQ2hhcnRKUy5yZWdpc3RlcihcclxuICAgIEFyY0VsZW1lbnQsXHJcbiAgICBUaXRsZSxcclxuICAgIFRvb2x0aXAsXHJcbiAgICBMZWdlbmQsXHJcbiAgICBDaGFydERhdGFMYWJlbHNcclxuKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUYWdSZXBhcnRpdGlvbkNoYXJ0KHtcclxuICAgIGFjY291bnRMaW5lcyxcclxuICAgIHRhZyxcclxuICAgIH06IElucHV0UmFuZ2VQcm9wcyk6IEpTWC5FbGVtZW50IHtcclxuXHJcbiAgICBjb25zdCBbY2hhcnRPcHRpb24sIHNldENoYXJ0T3B0aW9uXSA9IHVzZVN0YXRlPElDaGFydE9wdGlvbj4oe3Jlc3BvbnNpdmU6IHRydWUsIGFuaW1hdGlvbjoge30sIHBsdWdpbnM6IHt9LCBsYXlvdXQ6IHt9fSk7XHJcbiAgICBjb25zdCBbY2hhcnREYXRhLCBzZXRDaGFydERhdGFdID0gdXNlU3RhdGU8SUNoYXJ0RGF0YT4oe2xhYmVsczogW10sIGRhdGFzZXRzOiBbXX0pO1xyXG5cclxuICAgIGNvbnN0IGNoYXJ0UmVmZXJlbmNlID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNoYXJ0UmVmZXJlbmNlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoYXJ0ID0gY2hhcnRSZWZlcmVuY2UuY3VycmVudCBhcyBDaGFydEpTfG51bGw7XHJcbiAgICAgICAgICAgIGlmIChjaGFydCAmJiBjaGFydERhdGEuZGF0YXNldHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBjaGFydC5jdHguY2FudmFzLnBhcmVudEVsZW1lbnQ/LnN0eWxlLndpZHRoID8gY2hhcnQuY3R4LmNhbnZhcy53aWR0aCA6IDEzNzA7XHJcbiAgICAgICAgICAgICAgICBjaGFydC5yZXNpemUod2lkdGgsIGNoYXJ0LmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgY2hhcnQudXBkYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFtjaGFydFJlZmVyZW5jZSwgY2hhcnREYXRhXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCB0YWdnZWRMaW5lcyA9IHRhZyA9PT0gXCJcIiA/IGFjY291bnRMaW5lcyA6IGFjY291bnRMaW5lcy5maWx0ZXIoKGxpbmUpID0+IGxpbmUudGFncy5pbmRleE9mKHRhZykgIT09IC0xKTtcclxuICAgICAgICBjb25zdCBncm91cEJ5VGFnID0gYWdncmVnYXRlQnlUYWdzKHRhZ2dlZExpbmVzLCAtMSwgdGFnKTtcclxuXHJcbiAgICAgICAgLy8gRGF0YXNldHMgdG8gY292ZXIgdGhlIHN1YiB0YWdzXHJcbiAgICAgICAgY29uc3QgdGFncyA9IE9iamVjdC5rZXlzKGdyb3VwQnlUYWcpLmZpbHRlcigoc3ViVGFnKSA9PiBncm91cEJ5VGFnW3N1YlRhZ10uZGViaXQgIT09IDApLnNvcnQoKTtcclxuICAgICAgICBjb25zdCBwcm9jZXNzZWRUYWdzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGRhdGE6IG51bWJlcltdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN1YlRhZ2dlZExpbmVzID0gdGFnZ2VkTGluZXMuZmlsdGVyKChsaW5lKSA9PiBsaW5lLnRhZ3MuaW5kZXhPZih0YWdzW2ldKSAhPT0gLTEgJiYgIWxpbmUudGFncy5zb21lKHQgPT4gcHJvY2Vzc2VkVGFncy5pbmNsdWRlcyh0KSkpO1xyXG4gICAgICAgICAgICBjb25zdCBkZWJpdHMgPSBzdWJUYWdnZWRMaW5lcy5tYXAoKGxpbmUpID0+IGxpbmUuZGViaXQgfHwgMCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhZ0RhdGE6IG51bWJlciA9IGRlYml0cy5sZW5ndGggPiAwID8gZGViaXRzLnJlZHVjZSgoYSwgc3VtKSA9PiBhICsgc3VtKSA6IDA7XHJcbiAgICAgICAgICAgIGRhdGEucHVzaCh0YWdEYXRhKTtcclxuICAgICAgICAgICAgcHJvY2Vzc2VkVGFncy5wdXNoKHRhZ3NbaV0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGRhdGFzZXRzOiBJQ2hhcnREYXRhc2V0W10gPSBbXTtcclxuICAgICAgICBsZXQgZGF0YXNldDogSUNoYXJ0RGF0YXNldCA9IHtcclxuICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBQSUVfQkFDS0dST1VORF9DT0xPUlMsXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBQSUVfQk9SREVSX0NPTE9SUyxcclxuICAgICAgICAgICAgZGF0YWxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgYW5jaG9yOiAnZW5kJyxcclxuICAgICAgICAgICAgICAgIGFsaWduOiAnYm90dG9tJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkYXRhc2V0cy5wdXNoKGRhdGFzZXQpO1xyXG5cclxuXHJcbiAgICAgICAgbGV0IGRhdGFUb0Rpc3BsYXk6IElDaGFydERhdGEgPSB7XHJcbiAgICAgICAgICAgIGxhYmVsczogdGFncyxcclxuICAgICAgICAgICAgZGF0YXNldHM6IGRhdGFzZXRzXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgc2V0Q2hhcnREYXRhKGRhdGFUb0Rpc3BsYXkpO1xyXG5cclxuICAgICAgICBsZXQgb3B0aW9uczogSUNoYXJ0T3B0aW9uID0ge1xyXG4gICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICBhbmltYXRpb246IHtcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxheW91dDoge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDQwLFxyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiA0MCxcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDQwLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogNDBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGx1Z2luczoge1xyXG4gICAgICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcgYXMgY29uc3QsXHJcbiAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJSZXBhcnRpdGlvbiBvZiBcIiArICh0YWcgfHwgXCJUb3VzXCIpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGF0YWxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2VpZ2h0OiAnYm9sZCdcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDYsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbih2YWx1ZTogbnVtYmVyLCBjb250ZXh0OiBDb250ZXh0KTogc3RyaW5nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudExhYmVsID0gY29udGV4dC5jaGFydC5kYXRhLmxhYmVscyA/IGNvbnRleHQuY2hhcnQuZGF0YS5sYWJlbHNbY29udGV4dC5kYXRhSW5kZXhdIDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRMYWJlbCArIFwiXFxuXCIgKyBNYXRoLnJvdW5kKHZhbHVlKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0Q2hhcnRPcHRpb24ob3B0aW9ucyk7XHJcblxyXG4gICB9LCBbYWNjb3VudExpbmVzLCB0YWddKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9udGgtY2hhcnQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8UGllIGNsYXNzTmFtZT1cImNlbnRlcmVkLWNhbnZhc1wiIG9wdGlvbnM9e2NoYXJ0T3B0aW9ufSBkYXRhPXtjaGFydERhdGF9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiQ2hhcnQiLCJDaGFydEpTIiwiQXJjRWxlbWVudCIsIlRvb2x0aXAiLCJUaXRsZSIsIkxlZ2VuZCIsIlBpZSIsIkNoYXJ0RGF0YUxhYmVscyIsIlBJRV9CQUNLR1JPVU5EX0NPTE9SUyIsIlBJRV9CT1JERVJfQ09MT1JTIiwiYWdncmVnYXRlQnlUYWdzIiwicmVnaXN0ZXIiLCJUYWdSZXBhcnRpdGlvbkNoYXJ0IiwiYWNjb3VudExpbmVzIiwidGFnIiwiY2hhcnRPcHRpb24iLCJzZXRDaGFydE9wdGlvbiIsInJlc3BvbnNpdmUiLCJhbmltYXRpb24iLCJwbHVnaW5zIiwibGF5b3V0IiwiY2hhcnREYXRhIiwic2V0Q2hhcnREYXRhIiwibGFiZWxzIiwiZGF0YXNldHMiLCJjaGFydFJlZmVyZW5jZSIsImNoYXJ0IiwiY3VycmVudCIsImxlbmd0aCIsIndpZHRoIiwiY3R4IiwiY2FudmFzIiwicGFyZW50RWxlbWVudCIsInN0eWxlIiwicmVzaXplIiwiaGVpZ2h0IiwidXBkYXRlIiwidGFnZ2VkTGluZXMiLCJmaWx0ZXIiLCJsaW5lIiwidGFncyIsImluZGV4T2YiLCJncm91cEJ5VGFnIiwiT2JqZWN0Iiwia2V5cyIsInN1YlRhZyIsImRlYml0Iiwic29ydCIsInByb2Nlc3NlZFRhZ3MiLCJkYXRhIiwiaSIsInN1YlRhZ2dlZExpbmVzIiwic29tZSIsInQiLCJpbmNsdWRlcyIsImRlYml0cyIsIm1hcCIsInRhZ0RhdGEiLCJyZWR1Y2UiLCJhIiwic3VtIiwicHVzaCIsImRhdGFzZXQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImRhdGFsYWJlbHMiLCJhbmNob3IiLCJhbGlnbiIsImRhdGFUb0Rpc3BsYXkiLCJvcHRpb25zIiwiZHVyYXRpb24iLCJwYWRkaW5nIiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwibGVnZW5kIiwicG9zaXRpb24iLCJkaXNwbGF5IiwidGl0bGUiLCJ0ZXh0IiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyV2lkdGgiLCJjb2xvciIsImZvbnQiLCJ3ZWlnaHQiLCJmb3JtYXR0ZXIiLCJ2YWx1ZSIsImNvbnRleHQiLCJjdXJyZW50TGFiZWwiLCJkYXRhSW5kZXgiLCJNYXRoIiwicm91bmQiLCJ0b1N0cmluZyIsInRleHRBbGlnbiIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Charts/TagRepartitionChart.tsx\n"));

/***/ })

});