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

/***/ "(app-pages-browser)/./components/Loaders/CSVBankExtractLoader.tsx":
/*!*****************************************************!*\
  !*** ./components/Loaders/CSVBankExtractLoader.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CSVBankExtractLoader: function() { return /* binding */ CSVBankExtractLoader; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Data_UtilMath__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Data/UtilMath */ \"(app-pages-browser)/./components/Data/UtilMath.ts\");\n\nvar _s = $RefreshSig$();\n\n\nconst csvFileToArray = (filename, csv)=>{\n    const lineSeperator1 = \"\\r\\n\";\n    const lineSeperator2 = \"\\n\";\n    let lineSeperator = lineSeperator1;\n    const fieldSeparator = \";\";\n    const headers = [\n        \"Date\",\n        \"D\\xe9bit\",\n        \"Cr\\xe9dit\",\n        \"Libell\\xe9\",\n        \"Solde\",\n        \"Tags\"\n    ];\n    let rows = csv.split(lineSeperator1);\n    if (rows.length === 1) {\n        rows = csv.split(lineSeperator2);\n        lineSeperator = lineSeperator2;\n    }\n    // Determine headers order\n    let re = /\"/gi;\n    let csvHeader = rows[0].split(fieldSeparator).map((header)=>header.toLowerCase().replace(re, \"\"));\n    const headersIdx = headers.map((header)=>csvHeader.indexOf(header.toLowerCase()));\n    // Ignore first header\n    let csvRows = rows[1].split(lineSeperator).filter((row)=>row !== \"\");\n    // Ignore first header\n    csvRows = rows.slice(1).filter((row)=>row !== \"\");\n    const lines = csvRows.map((row)=>{\n        const values = row.split(fieldSeparator).map((field)=>field.replace(/['\"]+/g, \"\"));\n        // Expecting dd/mm/yyyy\n        const dateElements = values[headersIdx[0]].split(\"/\").map((elem)=>Number.parseFloat(elem));\n        const date = new Date(dateElements[2], dateElements[1] - 1, dateElements[0]);\n        const maxDaysOfMonth = new Date(dateElements[2], dateElements[1], 0).getDate();\n        const pctInMonth = Math.round(_Data_UtilMath__WEBPACK_IMPORTED_MODULE_2__.UtilMath.map(dateElements[0], 1, maxDaysOfMonth, 1, 100));\n        const dataRow = {\n            date: date,\n            pctInMonth: pctInMonth,\n            debit: values[headersIdx[1]] ? Number.parseFloat(values[headersIdx[1]].replace(\",\", \".\")) * -1 : undefined,\n            credit: values[headersIdx[2]] ? Number.parseFloat(values[headersIdx[2]].replace(\",\", \".\")) : undefined,\n            label: values[headersIdx[3]],\n            balance: Number.parseFloat(values[headersIdx[4]].replace(\",\", \".\")),\n            tags: values[headersIdx[5]] === \"\" ? [] : values[headersIdx[5]].split(\">\")\n        };\n        return dataRow;\n    });\n    const data = {\n        begin: new Date(lines[0].date.getFullYear(), lines[0].date.getMonth(), 1),\n        end: new Date(lines[0].date.getFullYear(), lines[0].date.getMonth() + 1, 0),\n        lines: lines.sort((a, b)=>a.date.getTime() - b.date.getTime()),\n        isAggregated: false\n    };\n    return data;\n};\nfunction CSVBankExtractLoader(param) {\n    let { files, onValuesChange } = param;\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (files.length > 0) {\n            setData([]);\n            for(let i = 0; i < files.length; i++){\n                const file = files[i];\n                const fileReader = new FileReader();\n                fileReader.onload = function(event) {\n                    let content = \"\";\n                    if (event.target !== null) {\n                        content = event.target.result || \"\";\n                    }\n                    const data = csvFileToArray(file.name, content);\n                    setData((prev)=>{\n                        if (prev.findIndex((val)=>val.begin.toLocaleDateString() === data.begin.toLocaleDateString() && val.end.toLocaleDateString() === data.end.toLocaleDateString()) === -1) {\n                            return [\n                                ...prev,\n                                data\n                            ].sort((a, b)=>a.end.getTime() - b.end.getTime());\n                        } else {\n                            return [\n                                ...prev\n                            ];\n                        }\n                    });\n                };\n                fileReader.readAsText(file);\n            }\n        }\n    }, [\n        files\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        onValuesChange(data);\n    }, [\n        data,\n        onValuesChange\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n}\n_s(CSVBankExtractLoader, \"MNW7rnkI9oNPb711ySWHHHkbM9Y=\");\n_c = CSVBankExtractLoader;\nvar _c;\n$RefreshReg$(_c, \"CSVBankExtractLoader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTG9hZGVycy9DU1ZCYW5rRXh0cmFjdExvYWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE0QztBQUVBO0FBUTVDLE1BQU1HLGlCQUFpQixDQUFDQyxVQUFrQkM7SUFDdEMsTUFBTUMsaUJBQWlCO0lBQ3ZCLE1BQU1DLGlCQUFpQjtJQUN2QixJQUFJQyxnQkFBZ0JGO0lBQ3BCLE1BQU1HLGlCQUFpQjtJQUN2QixNQUFNQyxVQUFVO1FBQUM7UUFBTztRQUFRO1FBQVM7UUFBVTtRQUFRO0tBQU87SUFDbEUsSUFBSUMsT0FBT04sSUFBSU8sS0FBSyxDQUFDTjtJQUNyQixJQUFJSyxLQUFLRSxNQUFNLEtBQUssR0FBRztRQUNuQkYsT0FBT04sSUFBSU8sS0FBSyxDQUFDTDtRQUNqQkMsZ0JBQWdCRDtJQUNwQjtJQUVBLDBCQUEwQjtJQUMxQixJQUFJTyxLQUFLO0lBQ1QsSUFBSUMsWUFBWUosSUFBSSxDQUFDLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDSCxnQkFBZ0JPLEdBQUcsQ0FBQyxDQUFDQyxTQUFXQSxPQUFPQyxXQUFXLEdBQUdDLE9BQU8sQ0FBQ0wsSUFBSTtJQUMvRixNQUFNTSxhQUFhVixRQUFRTSxHQUFHLENBQUMsQ0FBQ0MsU0FBV0YsVUFBVU0sT0FBTyxDQUFDSixPQUFPQyxXQUFXO0lBRS9FLHNCQUFzQjtJQUN0QixJQUFJSSxVQUFVWCxJQUFJLENBQUMsRUFBRSxDQUFDQyxLQUFLLENBQUNKLGVBQWVlLE1BQU0sQ0FBQyxDQUFDQyxNQUFnQkEsUUFBUTtJQUUzRSxzQkFBc0I7SUFDdEJGLFVBQVVYLEtBQUtjLEtBQUssQ0FBQyxHQUFHRixNQUFNLENBQUMsQ0FBQ0MsTUFBZ0JBLFFBQVE7SUFDeEQsTUFBTUUsUUFBd0JKLFFBQVFOLEdBQUcsQ0FBQ1EsQ0FBQUE7UUFDdEMsTUFBTUcsU0FBU0gsSUFBSVosS0FBSyxDQUFDSCxnQkFBZ0JPLEdBQUcsQ0FBQyxDQUFDWSxRQUFVQSxNQUFN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b0JBQy9DO29CQUNBLE1BQU10QixPQUFPNUMsZUFBZTJELEtBQUtRLElBQUksRUFBRUg7b0JBQ3ZDUCxRQUFRVyxDQUFBQTt3QkFDSixJQUFJQSxLQUFLQyxTQUFTLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSXpCLEtBQUssQ0FBQzBCLGtCQUFrQixPQUFPM0IsS0FBS0MsS0FBSyxDQUFDMEIsa0JBQWtCLE1BQU1ELElBQUl0QixHQUFHLENBQUN1QixrQkFBa0IsT0FBTzNCLEtBQUtJLEdBQUcsQ0FBQ3VCLGtCQUFrQixRQUFRLENBQUMsR0FDdks7NEJBQ0ksT0FBTzttQ0FBSUg7Z0NBQU14Qjs2QkFBSyxDQUFDSyxJQUFJLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTUQsRUFBRUYsR0FBRyxDQUFDSSxPQUFPLEtBQUtELEVBQUVILEdBQUcsQ0FBQ0ksT0FBTzt3QkFDekUsT0FDSzs0QkFDRCxPQUFPO21DQUFJZ0I7NkJBQUs7d0JBQ3BCO29CQUNKO2dCQUNKO2dCQUNBUixXQUFXWSxVQUFVLENBQUNiO1lBQzFCO1FBQ0o7SUFDSixHQUFHO1FBQUNKO0tBQU07SUFFVjFELGdEQUFTQSxDQUFDO1FBQ04yRCxlQUFlWjtJQUNuQixHQUFHO1FBQUNBO1FBQU1ZO0tBQWU7SUFFekIscUJBQ0k7QUFFUjtHQTFDZ0JGO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTG9hZGVycy9DU1ZCYW5rRXh0cmFjdExvYWRlci50c3g/YjljZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IElBY2NvdW50TGluZSwgSUFjY291bnRQZXJpb2QgfSBmcm9tIFwiLi4vRGF0YS9CYW5rXCI7XHJcbmltcG9ydCB7IFV0aWxNYXRoIH0gZnJvbSBcIi4uL0RhdGEvVXRpbE1hdGhcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW5wdXRSYW5nZVByb3BzIHtcclxuICAgIGZpbGVzOiBGaWxlW107XHJcbiAgICBpZEV4dHJhY3Q6c3RyaW5nO1xyXG4gICAgb25WYWx1ZXNDaGFuZ2U6IChsb2FkZWREYXRhOiBJQWNjb3VudFBlcmlvZFtdKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBjc3ZGaWxlVG9BcnJheSA9IChmaWxlbmFtZTogc3RyaW5nLCBjc3Y6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgbGluZVNlcGVyYXRvcjEgPSBcIlxcclxcblwiO1xyXG4gICAgY29uc3QgbGluZVNlcGVyYXRvcjIgPSBcIlxcblwiO1xyXG4gICAgbGV0IGxpbmVTZXBlcmF0b3IgPSBsaW5lU2VwZXJhdG9yMTtcclxuICAgIGNvbnN0IGZpZWxkU2VwYXJhdG9yID0gXCI7XCI7XHJcbiAgICBjb25zdCBoZWFkZXJzID0gW1wiRGF0ZVwiLFwiRMOpYml0XCIsXCJDcsOpZGl0XCIsXCJMaWJlbGzDqVwiLFwiU29sZGVcIixcIlRhZ3NcIl07XHJcbiAgICBsZXQgcm93cyA9IGNzdi5zcGxpdChsaW5lU2VwZXJhdG9yMSk7XHJcbiAgICBpZiAocm93cy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICByb3dzID0gY3N2LnNwbGl0KGxpbmVTZXBlcmF0b3IyKTtcclxuICAgICAgICBsaW5lU2VwZXJhdG9yID0gbGluZVNlcGVyYXRvcjI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGV0ZXJtaW5lIGhlYWRlcnMgb3JkZXJcclxuICAgIGxldCByZSA9IC9cIi9naTtcclxuICAgIGxldCBjc3ZIZWFkZXIgPSByb3dzWzBdLnNwbGl0KGZpZWxkU2VwYXJhdG9yKS5tYXAoKGhlYWRlcikgPT4gaGVhZGVyLnRvTG93ZXJDYXNlKCkucmVwbGFjZShyZSwgXCJcIikpO1xyXG4gICAgY29uc3QgaGVhZGVyc0lkeCA9IGhlYWRlcnMubWFwKChoZWFkZXIpID0+IGNzdkhlYWRlci5pbmRleE9mKGhlYWRlci50b0xvd2VyQ2FzZSgpKSk7XHJcblxyXG4gICAgLy8gSWdub3JlIGZpcnN0IGhlYWRlclxyXG4gICAgbGV0IGNzdlJvd3MgPSByb3dzWzFdLnNwbGl0KGxpbmVTZXBlcmF0b3IpLmZpbHRlcigocm93OiBzdHJpbmcpID0+IHJvdyAhPT0gXCJcIik7XHJcblxyXG4gICAgLy8gSWdub3JlIGZpcnN0IGhlYWRlclxyXG4gICAgY3N2Um93cyA9IHJvd3Muc2xpY2UoMSkuZmlsdGVyKChyb3c6IHN0cmluZykgPT4gcm93ICE9PSBcIlwiKTtcclxuICAgIGNvbnN0IGxpbmVzOiBJQWNjb3VudExpbmVbXSA9IGNzdlJvd3MubWFwKHJvdyA9PiB7XHJcbiAgICAgICAgY29uc3QgdmFsdWVzID0gcm93LnNwbGl0KGZpZWxkU2VwYXJhdG9yKS5tYXAoKGZpZWxkKSA9PiBmaWVsZC5yZXBsYWNlKC9bJ1wiXSsvZywgJycpKTtcclxuXHJcbiAgICAgICAgLy8gRXhwZWN0aW5nIGRkL21tL3l5eXlcclxuICAgICAgICBjb25zdCBkYXRlRWxlbWVudHM6IG51bWJlcltdID0gdmFsdWVzW2hlYWRlcnNJZHhbMF1dLnNwbGl0KFwiL1wiKS5tYXAoKGVsZW0pID0+IE51bWJlci5wYXJzZUZsb2F0KGVsZW0pKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVFbGVtZW50c1syXSwgZGF0ZUVsZW1lbnRzWzFdIC0gMSwgZGF0ZUVsZW1lbnRzWzBdKTtcclxuICAgICAgICBjb25zdCBtYXhEYXlzT2ZNb250aCA9IG5ldyBEYXRlKGRhdGVFbGVtZW50c1syXSwgZGF0ZUVsZW1lbnRzWzFdLCAwKS5nZXREYXRlKCk7XHJcbiAgICAgICAgY29uc3QgcGN0SW5Nb250aCA9IE1hdGgucm91bmQoVXRpbE1hdGgubWFwKGRhdGVFbGVtZW50c1swXSwgMSwgbWF4RGF5c09mTW9udGgsIDEsIDEwMCkpO1xyXG5cclxuICAgICAgICBjb25zdCBkYXRhUm93OiBJQWNjb3VudExpbmUgPSB7XHJcbiAgICAgICAgICBkYXRlOiBkYXRlLFxyXG4gICAgICAgICAgcGN0SW5Nb250aDogcGN0SW5Nb250aCxcclxuICAgICAgICAgIGRlYml0OiB2YWx1ZXNbaGVhZGVyc0lkeFsxXV0gPyBOdW1iZXIucGFyc2VGbG9hdCh2YWx1ZXNbaGVhZGVyc0lkeFsxXV0ucmVwbGFjZSgnLCcsICcuJykpICogLTEgOiB1bmRlZmluZWQsIC8vIG9ubHkgcG9zaXRpdmUgdmFsdWVzXHJcbiAgICAgICAgICBjcmVkaXQ6IHZhbHVlc1toZWFkZXJzSWR4WzJdXSA/IE51bWJlci5wYXJzZUZsb2F0KHZhbHVlc1toZWFkZXJzSWR4WzJdXS5yZXBsYWNlKCcsJywgJy4nKSkgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICBsYWJlbDogdmFsdWVzW2hlYWRlcnNJZHhbM11dLFxyXG4gICAgICAgICAgYmFsYW5jZTogTnVtYmVyLnBhcnNlRmxvYXQodmFsdWVzW2hlYWRlcnNJZHhbNF1dLnJlcGxhY2UoJywnLCAnLicpKSxcclxuICAgICAgICAgIHRhZ3M6IHZhbHVlc1toZWFkZXJzSWR4WzVdXSA9PT0gXCJcIiA/IFtdIDogdmFsdWVzW2hlYWRlcnNJZHhbNV1dLnNwbGl0KFwiPlwiKSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gZGF0YVJvdztcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgZGF0YTogSUFjY291bnRQZXJpb2QgPSB7XHJcbiAgICAgICAgYmVnaW46IG5ldyBEYXRlKGxpbmVzWzBdLmRhdGUuZ2V0RnVsbFllYXIoKSwgbGluZXNbMF0uZGF0ZS5nZXRNb250aCgpLCAxKSxcclxuICAgICAgICBlbmQ6IG5ldyBEYXRlKGxpbmVzWzBdLmRhdGUuZ2V0RnVsbFllYXIoKSwgbGluZXNbMF0uZGF0ZS5nZXRNb250aCgpICsgMSwgMCksXHJcbiAgICAgICAgbGluZXM6IGxpbmVzLnNvcnQoKGEsIGIpID0+IGEuZGF0ZS5nZXRUaW1lKCkgLSBiLmRhdGUuZ2V0VGltZSgpKSxcclxuICAgICAgICBpc0FnZ3JlZ2F0ZWQ6IGZhbHNlXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDU1ZCYW5rRXh0cmFjdExvYWRlcih7XHJcbiAgICBmaWxlcyxcclxuICAgIG9uVmFsdWVzQ2hhbmdlfSA6IElucHV0UmFuZ2VQcm9wcykge1xyXG5cclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPElBY2NvdW50UGVyaW9kW10+KFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChmaWxlcy5sZW5ndGggPiAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2V0RGF0YShbXSk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gZmlsZXNbaV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgICAgIGZpbGVSZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGV2ZW50OiBQcm9ncmVzc0V2ZW50PEZpbGVSZWFkZXI+KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRlbnQ6IHN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50ID0gZXZlbnQudGFyZ2V0LnJlc3VsdCBhcyBzdHJpbmcgfHwgXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGNzdkZpbGVUb0FycmF5KGZpbGUubmFtZSwgY29udGVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RGF0YShwcmV2ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByZXYuZmluZEluZGV4KCh2YWwpID0+IHZhbC5iZWdpbi50b0xvY2FsZURhdGVTdHJpbmcoKSA9PT0gZGF0YS5iZWdpbi50b0xvY2FsZURhdGVTdHJpbmcoKSAmJiB2YWwuZW5kLnRvTG9jYWxlRGF0ZVN0cmluZygpID09PSBkYXRhLmVuZC50b0xvY2FsZURhdGVTdHJpbmcoKSkgPT09IC0xKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWy4uLnByZXYsIGRhdGFdLnNvcnQoKGEsIGIpID0+IGEuZW5kLmdldFRpbWUoKSAtIGIuZW5kLmdldFRpbWUoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbLi4ucHJldl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBmaWxlUmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbZmlsZXNdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIG9uVmFsdWVzQ2hhbmdlKGRhdGEpO1xyXG4gICAgfSwgW2RhdGEsIG9uVmFsdWVzQ2hhbmdlXSlcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD48Lz5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlV0aWxNYXRoIiwiY3N2RmlsZVRvQXJyYXkiLCJmaWxlbmFtZSIsImNzdiIsImxpbmVTZXBlcmF0b3IxIiwibGluZVNlcGVyYXRvcjIiLCJsaW5lU2VwZXJhdG9yIiwiZmllbGRTZXBhcmF0b3IiLCJoZWFkZXJzIiwicm93cyIsInNwbGl0IiwibGVuZ3RoIiwicmUiLCJjc3ZIZWFkZXIiLCJtYXAiLCJoZWFkZXIiLCJ0b0xvd2VyQ2FzZSIsInJlcGxhY2UiLCJoZWFkZXJzSWR4IiwiaW5kZXhPZiIsImNzdlJvd3MiLCJmaWx0ZXIiLCJyb3ciLCJzbGljZSIsImxpbmVzIiwidmFsdWVzIiwiZmllbGQiLCJkYXRlRWxlbWVudHMiLCJlbGVtIiwiTnVtYmVyIiwicGFyc2VGbG9hdCIsImRhdGUiLCJEYXRlIiwibWF4RGF5c09mTW9udGgiLCJnZXREYXRlIiwicGN0SW5Nb250aCIsIk1hdGgiLCJyb3VuZCIsImRhdGFSb3ciLCJkZWJpdCIsInVuZGVmaW5lZCIsImNyZWRpdCIsImxhYmVsIiwiYmFsYW5jZSIsInRhZ3MiLCJkYXRhIiwiYmVnaW4iLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZW5kIiwic29ydCIsImEiLCJiIiwiZ2V0VGltZSIsImlzQWdncmVnYXRlZCIsIkNTVkJhbmtFeHRyYWN0TG9hZGVyIiwiZmlsZXMiLCJvblZhbHVlc0NoYW5nZSIsInNldERhdGEiLCJpIiwiZmlsZSIsImZpbGVSZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiZXZlbnQiLCJjb250ZW50IiwidGFyZ2V0IiwicmVzdWx0IiwibmFtZSIsInByZXYiLCJmaW5kSW5kZXgiLCJ2YWwiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJyZWFkQXNUZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Loaders/CSVBankExtractLoader.tsx\n"));

/***/ })

});