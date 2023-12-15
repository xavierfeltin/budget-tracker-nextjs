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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CSVBankExtractLoader: function() { return /* binding */ CSVBankExtractLoader; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Data_UtilMath__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Data/UtilMath */ \"(app-pages-browser)/./components/Data/UtilMath.ts\");\n\nvar _s = $RefreshSig$();\n\n\nconst csvFileToArray = (filename, csv)=>{\n    const lineSeperator1 = \"\\r\\n\";\n    const lineSeperator2 = \"\\n\";\n    let lineSeperator = lineSeperator1;\n    const fieldSeparator = \";\";\n    const headers = [\n        \"Date\",\n        \"D\\xe9bit\",\n        \"Cr\\xe9dit\",\n        \"Libell\\xe9\",\n        \"Solde\",\n        \"Tags\"\n    ];\n    let rows = csv.split(lineSeperator1);\n    if (rows.length === 1) {\n        rows = csv.split(lineSeperator2);\n        lineSeperator = lineSeperator2;\n    }\n    // Determine headers order\n    let re = /\"/gi;\n    let csvHeader = rows[0].split(fieldSeparator).map((header)=>header.toLowerCase().replace(re, \"\"));\n    const headersIdx = headers.map((header)=>csvHeader.indexOf(header.toLowerCase()));\n    // Ignore first header\n    let csvRows = rows[1].split(lineSeperator).filter((row)=>row !== \"\");\n    // Ignore first header\n    csvRows = rows.slice(1).filter((row)=>row !== \"\");\n    const lines = csvRows.map((row)=>{\n        const values = row.split(fieldSeparator).map((field)=>field.replace(/['\"]+/g, \"\"));\n        // Expecting dd/mm/yyyy\n        const dateElements = values[headersIdx[0]].split(\"/\").map((elem)=>Number.parseFloat(elem));\n        const date = new Date(dateElements[2], dateElements[1] - 1, dateElements[0]);\n        const maxDaysOfMonth = new Date(dateElements[2], dateElements[1], 0).getDate();\n        const pctInMonth = Math.round(_Data_UtilMath__WEBPACK_IMPORTED_MODULE_2__.UtilMath.map(dateElements[0], 1, maxDaysOfMonth, 1, 100));\n        const dataRow = {\n            date: date,\n            pctInMonth: pctInMonth,\n            debit: values[headersIdx[1]] ? Number.parseFloat(values[headersIdx[1]].replace(\",\", \".\")) * -1 : undefined,\n            credit: values[headersIdx[2]] ? Number.parseFloat(values[headersIdx[2]].replace(\",\", \".\")) : undefined,\n            label: values[headersIdx[3]],\n            balance: Number.parseFloat(values[headersIdx[4]].replace(\",\", \".\")),\n            tags: values[headersIdx[5]] === \"\" ? [] : values[headersIdx[5]].split(\">\")\n        };\n        return dataRow;\n    });\n    const data = {\n        begin: new Date(lines[0].date.getFullYear(), lines[0].date.getMonth(), 1),\n        end: new Date(lines[0].date.getFullYear(), lines[0].date.getMonth() + 1, 0),\n        lines: lines,\n        isAggregated: false\n    };\n    return data;\n};\nfunction CSVBankExtractLoader(param) {\n    let { files, onValuesChange } = param;\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (files.length > 0) {\n            setData([]);\n            for(let i = 0; i < files.length; i++){\n                const file = files[i];\n                const fileReader = new FileReader();\n                fileReader.onload = function(event) {\n                    let content = \"\";\n                    if (event.target !== null) {\n                        content = event.target.result || \"\";\n                    }\n                    const data = csvFileToArray(file.name, content);\n                    setData((prev)=>{\n                        if (prev.findIndex((val)=>val.begin.toLocaleDateString() === data.begin.toLocaleDateString() && val.end.toLocaleDateString() === data.end.toLocaleDateString()) === -1) {\n                            return [\n                                ...prev,\n                                data\n                            ].sort((a, b)=>a.end.getT > b.end ? 1 : -1);\n                        } else {\n                            return [\n                                ...prev\n                            ];\n                        }\n                    });\n                };\n                fileReader.readAsText(file);\n            }\n        }\n    }, [\n        files\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        onValuesChange(data);\n    }, [\n        data,\n        onValuesChange\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n}\n_s(CSVBankExtractLoader, \"MNW7rnkI9oNPb711ySWHHHkbM9Y=\");\n_c = CSVBankExtractLoader;\nvar _c;\n$RefreshReg$(_c, \"CSVBankExtractLoader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTG9hZGVycy9DU1ZCYW5rRXh0cmFjdExvYWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE0QztBQUVBO0FBUTVDLE1BQU1HLGlCQUFpQixDQUFDQyxVQUFrQkM7SUFDdEMsTUFBTUMsaUJBQWlCO0lBQ3ZCLE1BQU1DLGlCQUFpQjtJQUN2QixJQUFJQyxnQkFBZ0JGO0lBQ3BCLE1BQU1HLGlCQUFpQjtJQUN2QixNQUFNQyxVQUFVO1FBQUM7UUFBTztRQUFRO1FBQVM7UUFBVTtRQUFRO0tBQU87SUFDbEUsSUFBSUMsT0FBT04sSUFBSU8sS0FBSyxDQUFDTjtJQUNyQixJQUFJSyxLQUFLRSxNQUFNLEtBQUssR0FBRztRQUNuQkYsT0FBT04sSUFBSU8sS0FBSyxDQUFDTDtRQUNqQkMsZ0JBQWdCRDtJQUNwQjtJQUVBLDBCQUEwQjtJQUMxQixJQUFJTyxLQUFLO0lBQ1QsSUFBSUMsWUFBWUosSUFBSSxDQUFDLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDSCxnQkFBZ0JPLEdBQUcsQ0FBQyxDQUFDQyxTQUFXQSxPQUFPQyxXQUFXLEdBQUdDLE9BQU8sQ0FBQ0wsSUFBSTtJQUMvRixNQUFNTSxhQUFhVixRQUFRTSxHQUFHLENBQUMsQ0FBQ0MsU0FBV0YsVUFBVU0sT0FBTyxDQUFDSixPQUFPQyxXQUFXO0lBRS9FLHNCQUFzQjtJQUN0QixJQUFJSSxVQUFVWCxJQUFJLENBQUMsRUFBRSxDQUFDQyxLQUFLLENBQUNKLGVBQWVlLE1BQU0sQ0FBQyxDQUFDQyxNQUFnQkEsUUFBUTtJQUUzRSxzQkFBc0I7SUFDdEJGLFVBQVVYLEtBQUtjLEtBQUssQ0FBQyxHQUFHRixNQUFNLENBQUMsQ0FBQ0MsTUFBZ0JBLFFBQVE7SUFDeEQsTUFBTUUsUUFBd0JKLFFBQVFOLEdBQUcsQ0FBQ1EsQ0FBQUE7UUFDdEMsTUFBTUcsU0FBU0gsSUFBSVosS0FBSyxDQUFDSCxnQkFBZ0JPLEdBQUcsQ0FBQyxDQUFDWSxRQUFVQSxNQUFN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U0FBUyxDQUFDLENBQUNDLE1BQVFBLElBQUlyQixLQUFLLENBQUNzQixrQkFBa0IsT0FBT3ZCLEtBQUtDLEtBQUssQ0FBQ3NCLGtCQUFrQixNQUFNRCxJQUFJbEIsR0FBRyxDQUFDbUIsa0JBQWtCLE9BQU92QixLQUFLSSxHQUFHLENBQUNtQixrQkFBa0IsUUFBUSxDQUFDLEdBQ3ZLOzRCQUNJLE9BQU87bUNBQUlIO2dDQUFNcEI7NkJBQUssQ0FBQ3dCLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUFNRCxFQUFFckIsR0FBRyxDQUFDdUIsSUFBSSxHQUFHRCxFQUFFdEIsR0FBRyxHQUFHLElBQUksQ0FBQzt3QkFDcEUsT0FDSzs0QkFDRCxPQUFPO21DQUFJZ0I7NkJBQUs7d0JBQ3BCO29CQUNKO2dCQUNKO2dCQUNBUixXQUFXZ0IsVUFBVSxDQUFDakI7WUFDMUI7UUFDSjtJQUNKLEdBQUc7UUFBQ0o7S0FBTTtJQUVWdEQsZ0RBQVNBLENBQUM7UUFDTnVELGVBQWVSO0lBQ25CLEdBQUc7UUFBQ0E7UUFBTVE7S0FBZTtJQUV6QixxQkFDSTtBQUVSO0dBMUNnQkY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2FkZXJzL0NTVkJhbmtFeHRyYWN0TG9hZGVyLnRzeD9iOWNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSUFjY291bnRMaW5lLCBJQWNjb3VudFBlcmlvZCB9IGZyb20gXCIuLi9EYXRhL0JhbmtcIjtcclxuaW1wb3J0IHsgVXRpbE1hdGggfSBmcm9tIFwiLi4vRGF0YS9VdGlsTWF0aFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJbnB1dFJhbmdlUHJvcHMge1xyXG4gICAgZmlsZXM6IEZpbGVbXTtcclxuICAgIGlkRXh0cmFjdDpzdHJpbmc7XHJcbiAgICBvblZhbHVlc0NoYW5nZTogKGxvYWRlZERhdGE6IElBY2NvdW50UGVyaW9kW10pID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IGNzdkZpbGVUb0FycmF5ID0gKGZpbGVuYW1lOiBzdHJpbmcsIGNzdjogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCBsaW5lU2VwZXJhdG9yMSA9IFwiXFxyXFxuXCI7XHJcbiAgICBjb25zdCBsaW5lU2VwZXJhdG9yMiA9IFwiXFxuXCI7XHJcbiAgICBsZXQgbGluZVNlcGVyYXRvciA9IGxpbmVTZXBlcmF0b3IxO1xyXG4gICAgY29uc3QgZmllbGRTZXBhcmF0b3IgPSBcIjtcIjtcclxuICAgIGNvbnN0IGhlYWRlcnMgPSBbXCJEYXRlXCIsXCJEw6liaXRcIixcIkNyw6lkaXRcIixcIkxpYmVsbMOpXCIsXCJTb2xkZVwiLFwiVGFnc1wiXTtcclxuICAgIGxldCByb3dzID0gY3N2LnNwbGl0KGxpbmVTZXBlcmF0b3IxKTtcclxuICAgIGlmIChyb3dzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIHJvd3MgPSBjc3Yuc3BsaXQobGluZVNlcGVyYXRvcjIpO1xyXG4gICAgICAgIGxpbmVTZXBlcmF0b3IgPSBsaW5lU2VwZXJhdG9yMjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEZXRlcm1pbmUgaGVhZGVycyBvcmRlclxyXG4gICAgbGV0IHJlID0gL1wiL2dpO1xyXG4gICAgbGV0IGNzdkhlYWRlciA9IHJvd3NbMF0uc3BsaXQoZmllbGRTZXBhcmF0b3IpLm1hcCgoaGVhZGVyKSA9PiBoZWFkZXIudG9Mb3dlckNhc2UoKS5yZXBsYWNlKHJlLCBcIlwiKSk7XHJcbiAgICBjb25zdCBoZWFkZXJzSWR4ID0gaGVhZGVycy5tYXAoKGhlYWRlcikgPT4gY3N2SGVhZGVyLmluZGV4T2YoaGVhZGVyLnRvTG93ZXJDYXNlKCkpKTtcclxuXHJcbiAgICAvLyBJZ25vcmUgZmlyc3QgaGVhZGVyXHJcbiAgICBsZXQgY3N2Um93cyA9IHJvd3NbMV0uc3BsaXQobGluZVNlcGVyYXRvcikuZmlsdGVyKChyb3c6IHN0cmluZykgPT4gcm93ICE9PSBcIlwiKTtcclxuXHJcbiAgICAvLyBJZ25vcmUgZmlyc3QgaGVhZGVyXHJcbiAgICBjc3ZSb3dzID0gcm93cy5zbGljZSgxKS5maWx0ZXIoKHJvdzogc3RyaW5nKSA9PiByb3cgIT09IFwiXCIpO1xyXG4gICAgY29uc3QgbGluZXM6IElBY2NvdW50TGluZVtdID0gY3N2Um93cy5tYXAocm93ID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZXMgPSByb3cuc3BsaXQoZmllbGRTZXBhcmF0b3IpLm1hcCgoZmllbGQpID0+IGZpZWxkLnJlcGxhY2UoL1snXCJdKy9nLCAnJykpO1xyXG5cclxuICAgICAgICAvLyBFeHBlY3RpbmcgZGQvbW0veXl5eVxyXG4gICAgICAgIGNvbnN0IGRhdGVFbGVtZW50czogbnVtYmVyW10gPSB2YWx1ZXNbaGVhZGVyc0lkeFswXV0uc3BsaXQoXCIvXCIpLm1hcCgoZWxlbSkgPT4gTnVtYmVyLnBhcnNlRmxvYXQoZWxlbSkpO1xyXG5cclxuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0ZUVsZW1lbnRzWzJdLCBkYXRlRWxlbWVudHNbMV0gLSAxLCBkYXRlRWxlbWVudHNbMF0pO1xyXG4gICAgICAgIGNvbnN0IG1heERheXNPZk1vbnRoID0gbmV3IERhdGUoZGF0ZUVsZW1lbnRzWzJdLCBkYXRlRWxlbWVudHNbMV0sIDApLmdldERhdGUoKTtcclxuICAgICAgICBjb25zdCBwY3RJbk1vbnRoID0gTWF0aC5yb3VuZChVdGlsTWF0aC5tYXAoZGF0ZUVsZW1lbnRzWzBdLCAxLCBtYXhEYXlzT2ZNb250aCwgMSwgMTAwKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGFSb3c6IElBY2NvdW50TGluZSA9IHtcclxuICAgICAgICAgIGRhdGU6IGRhdGUsXHJcbiAgICAgICAgICBwY3RJbk1vbnRoOiBwY3RJbk1vbnRoLFxyXG4gICAgICAgICAgZGViaXQ6IHZhbHVlc1toZWFkZXJzSWR4WzFdXSA/IE51bWJlci5wYXJzZUZsb2F0KHZhbHVlc1toZWFkZXJzSWR4WzFdXS5yZXBsYWNlKCcsJywgJy4nKSkgKiAtMSA6IHVuZGVmaW5lZCwgLy8gb25seSBwb3NpdGl2ZSB2YWx1ZXNcclxuICAgICAgICAgIGNyZWRpdDogdmFsdWVzW2hlYWRlcnNJZHhbMl1dID8gTnVtYmVyLnBhcnNlRmxvYXQodmFsdWVzW2hlYWRlcnNJZHhbMl1dLnJlcGxhY2UoJywnLCAnLicpKSA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgIGxhYmVsOiB2YWx1ZXNbaGVhZGVyc0lkeFszXV0sXHJcbiAgICAgICAgICBiYWxhbmNlOiBOdW1iZXIucGFyc2VGbG9hdCh2YWx1ZXNbaGVhZGVyc0lkeFs0XV0ucmVwbGFjZSgnLCcsICcuJykpLFxyXG4gICAgICAgICAgdGFnczogdmFsdWVzW2hlYWRlcnNJZHhbNV1dID09PSBcIlwiID8gW10gOiB2YWx1ZXNbaGVhZGVyc0lkeFs1XV0uc3BsaXQoXCI+XCIpLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBkYXRhUm93O1xyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBkYXRhOiBJQWNjb3VudFBlcmlvZCA9IHtcclxuICAgICAgICBiZWdpbjogbmV3IERhdGUobGluZXNbMF0uZGF0ZS5nZXRGdWxsWWVhcigpLCBsaW5lc1swXS5kYXRlLmdldE1vbnRoKCksIDEpLFxyXG4gICAgICAgIGVuZDogbmV3IERhdGUobGluZXNbMF0uZGF0ZS5nZXRGdWxsWWVhcigpLCBsaW5lc1swXS5kYXRlLmdldE1vbnRoKCkgKyAxLCAwKSxcclxuICAgICAgICBsaW5lczogbGluZXMsXHJcbiAgICAgICAgaXNBZ2dyZWdhdGVkOiBmYWxzZVxyXG4gICAgfTtcclxuICAgIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ1NWQmFua0V4dHJhY3RMb2FkZXIoe1xyXG4gICAgZmlsZXMsXHJcbiAgICBvblZhbHVlc0NoYW5nZX0gOiBJbnB1dFJhbmdlUHJvcHMpIHtcclxuXHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTxJQWNjb3VudFBlcmlvZFtdPihbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoZmlsZXMubGVuZ3RoID4gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNldERhdGEoW10pO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZSA9IGZpbGVzW2ldO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgICAgICAgICBmaWxlUmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChldmVudDogUHJvZ3Jlc3NFdmVudDxGaWxlUmVhZGVyPikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb250ZW50OiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IGV2ZW50LnRhcmdldC5yZXN1bHQgYXMgc3RyaW5nIHx8IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBjc3ZGaWxlVG9BcnJheShmaWxlLm5hbWUsIGNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldERhdGEocHJldiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcmV2LmZpbmRJbmRleCgodmFsKSA9PiB2YWwuYmVnaW4udG9Mb2NhbGVEYXRlU3RyaW5nKCkgPT09IGRhdGEuYmVnaW4udG9Mb2NhbGVEYXRlU3RyaW5nKCkgJiYgdmFsLmVuZC50b0xvY2FsZURhdGVTdHJpbmcoKSA9PT0gZGF0YS5lbmQudG9Mb2NhbGVEYXRlU3RyaW5nKCkpID09PSAtMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsuLi5wcmV2LCBkYXRhXS5zb3J0KChhLCBiKSA9PiBhLmVuZC5nZXRUID4gYi5lbmQgPyAxIDogLTEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWy4uLnByZXZdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgZmlsZVJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2ZpbGVzXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBvblZhbHVlc0NoYW5nZShkYXRhKTtcclxuICAgIH0sIFtkYXRhLCBvblZhbHVlc0NoYW5nZV0pXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+PC8+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJVdGlsTWF0aCIsImNzdkZpbGVUb0FycmF5IiwiZmlsZW5hbWUiLCJjc3YiLCJsaW5lU2VwZXJhdG9yMSIsImxpbmVTZXBlcmF0b3IyIiwibGluZVNlcGVyYXRvciIsImZpZWxkU2VwYXJhdG9yIiwiaGVhZGVycyIsInJvd3MiLCJzcGxpdCIsImxlbmd0aCIsInJlIiwiY3N2SGVhZGVyIiwibWFwIiwiaGVhZGVyIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwiaGVhZGVyc0lkeCIsImluZGV4T2YiLCJjc3ZSb3dzIiwiZmlsdGVyIiwicm93Iiwic2xpY2UiLCJsaW5lcyIsInZhbHVlcyIsImZpZWxkIiwiZGF0ZUVsZW1lbnRzIiwiZWxlbSIsIk51bWJlciIsInBhcnNlRmxvYXQiLCJkYXRlIiwiRGF0ZSIsIm1heERheXNPZk1vbnRoIiwiZ2V0RGF0ZSIsInBjdEluTW9udGgiLCJNYXRoIiwicm91bmQiLCJkYXRhUm93IiwiZGViaXQiLCJ1bmRlZmluZWQiLCJjcmVkaXQiLCJsYWJlbCIsImJhbGFuY2UiLCJ0YWdzIiwiZGF0YSIsImJlZ2luIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImVuZCIsImlzQWdncmVnYXRlZCIsIkNTVkJhbmtFeHRyYWN0TG9hZGVyIiwiZmlsZXMiLCJvblZhbHVlc0NoYW5nZSIsInNldERhdGEiLCJpIiwiZmlsZSIsImZpbGVSZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiZXZlbnQiLCJjb250ZW50IiwidGFyZ2V0IiwicmVzdWx0IiwibmFtZSIsInByZXYiLCJmaW5kSW5kZXgiLCJ2YWwiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJzb3J0IiwiYSIsImIiLCJnZXRUIiwicmVhZEFzVGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Loaders/CSVBankExtractLoader.tsx\n"));

/***/ })

});