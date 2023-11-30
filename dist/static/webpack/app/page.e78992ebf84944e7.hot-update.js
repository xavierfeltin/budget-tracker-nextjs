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

/***/ "(app-pages-browser)/./components/Data/Bank.ts":
/*!*********************************!*\
  !*** ./components/Data/Bank.ts ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EDocumentType: function() { return /* binding */ EDocumentType; },\n/* harmony export */   aggregateByDate: function() { return /* binding */ aggregateByDate; },\n/* harmony export */   aggregateByTag: function() { return /* binding */ aggregateByTag; },\n/* harmony export */   aggregateByTags: function() { return /* binding */ aggregateByTags; },\n/* harmony export */   extractIdFromLabel: function() { return /* binding */ extractIdFromLabel; },\n/* harmony export */   extractTags: function() { return /* binding */ extractTags; },\n/* harmony export */   extractTagsWithCount: function() { return /* binding */ extractTagsWithCount; },\n/* harmony export */   getAccountPeriodStr: function() { return /* binding */ getAccountPeriodStr; },\n/* harmony export */   getBankTransferId: function() { return /* binding */ getBankTransferId; },\n/* harmony export */   getDirectDebitId: function() { return /* binding */ getDirectDebitId; },\n/* harmony export */   getPaymentId: function() { return /* binding */ getPaymentId; },\n/* harmony export */   getWholePeriod: function() { return /* binding */ getWholePeriod; },\n/* harmony export */   getWithdrawalId: function() { return /* binding */ getWithdrawalId; },\n/* harmony export */   isBankTransferLabel: function() { return /* binding */ isBankTransferLabel; },\n/* harmony export */   isDirectDebitLabel: function() { return /* binding */ isDirectDebitLabel; },\n/* harmony export */   isPaymentLabel: function() { return /* binding */ isPaymentLabel; },\n/* harmony export */   isWithdrawalLabel: function() { return /* binding */ isWithdrawalLabel; },\n/* harmony export */   tagPeriods: function() { return /* binding */ tagPeriods; }\n/* harmony export */ });\nvar EDocumentType;\n(function(EDocumentType) {\n    EDocumentType[\"ACCOUNT\"] = \"ACCOUNT\";\n    EDocumentType[\"MAPPING\"] = \"MAPP\";\n})(EDocumentType || (EDocumentType = {}));\nfunction aggregateByTags(lines, tagLevel, excludeTag) {\n    let agregate = {};\n    let isRecursive = tagLevel < 0;\n    for(let i = 0; i < lines.length; i++){\n        const line = lines[i];\n        let idx = excludeTag === \"\" ? 0 : line.tags.indexOf(excludeTag);\n        let level = isRecursive ? idx % line.tags.length : tagLevel;\n        let tag = line.tags[level];\n        if (tag === excludeTag && level < line.tags.length - 1) {\n            tag = line.tags[level + 1];\n        } else if (tag === excludeTag && level === line.tags.length - 1) {\n            tag = isRecursive ? line.tags[0] : \"Undefined\";\n        }\n        if (tag in agregate) {\n            var _line_credit;\n            agregate[tag].credit += (_line_credit = line.credit) !== null && _line_credit !== void 0 ? _line_credit : 0;\n            var _line_debit;\n            agregate[tag].debit += (_line_debit = line.debit) !== null && _line_debit !== void 0 ? _line_debit : 0;\n        } else {\n            var _line_credit1, _line_debit1;\n            agregate[tag] = {\n                credit: (_line_credit1 = line.credit) !== null && _line_credit1 !== void 0 ? _line_credit1 : 0,\n                debit: (_line_debit1 = line.debit) !== null && _line_debit1 !== void 0 ? _line_debit1 : 0,\n                subTags: {}\n            };\n        }\n    }\n    return agregate;\n}\nfunction extractTags(lines) {\n    let tags = [];\n    for(let i = 0; i < lines.length; i++){\n        tags.push(...lines[i].tags);\n    }\n    // Remove duplicates\n    tags = tags.filter(function(tag, idx) {\n        return tags.indexOf(tag) === idx;\n    });\n    return tags.sort();\n}\nfunction extractTagsWithCount(lines) {\n    let tags = [];\n    for(let i = 0; i < lines.length; i++){\n        for(let j = 0; j < lines[i].tags.length; j++){\n            const tagIdx = tags.findIndex((tag)=>tag.tag === lines[i].tags[j]);\n            if (tagIdx === -1) {\n                tags.push({\n                    tag: lines[i].tags[j],\n                    count: 1,\n                    frequency: 1 / lines.length\n                });\n            } else {\n                tags[tagIdx].count++;\n                tags[tagIdx].frequency = tags[tagIdx].count / lines.length;\n            }\n        }\n    }\n    return tags.sort((a, b)=>{\n        const freqA = Math.floor(a.frequency * 100);\n        const freqB = Math.floor(b.frequency * 100);\n        if (freqA === freqB) {\n            return a.tag > b.tag ? 1 : -1;\n        }\n        return Math.floor(b.frequency * 100) - Math.floor(a.frequency * 100);\n    });\n}\nfunction aggregateByTag(lines, tag) {\n    let agregate = {};\n    const taggedLines = tag === \"\" ? lines : lines.filter((line)=>line.tags.indexOf(tag) !== -1);\n    for(let i = 0; i < taggedLines.length; i++){\n        const line = taggedLines[i];\n        if (tag in agregate) {\n            var _line_credit;\n            agregate[tag].credit += (_line_credit = line.credit) !== null && _line_credit !== void 0 ? _line_credit : 0;\n            var _line_debit;\n            agregate[tag].debit += (_line_debit = line.debit) !== null && _line_debit !== void 0 ? _line_debit : 0;\n        } else {\n            var _line_credit1, _line_debit1;\n            agregate[tag] = {\n                credit: (_line_credit1 = line.credit) !== null && _line_credit1 !== void 0 ? _line_credit1 : 0,\n                debit: (_line_debit1 = line.debit) !== null && _line_debit1 !== void 0 ? _line_debit1 : 0,\n                subTags: {}\n            };\n        }\n    }\n    agregate[tag].subTags = aggregateByTags(taggedLines, 0, tag);\n    return agregate;\n}\nfunction aggregateByDate(lines) {\n    let monthly = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;\n    let agregate = {};\n    for(let i = 0; i < lines.length; i++){\n        const line = lines[i];\n        let strDate = line.date.toLocaleDateString(\"fr-FR\");\n        if (monthly) {\n            strDate = strDate.slice(strDate.indexOf(\"/\") + 1);\n        }\n        if (strDate in agregate) {\n            var _line_credit;\n            agregate[strDate].credit += (_line_credit = line.credit) !== null && _line_credit !== void 0 ? _line_credit : 0;\n            var _line_debit;\n            agregate[strDate].debit += (_line_debit = line.debit) !== null && _line_debit !== void 0 ? _line_debit : 0;\n        } else {\n            var _line_credit1, _line_debit1;\n            agregate[strDate] = {\n                credit: (_line_credit1 = line.credit) !== null && _line_credit1 !== void 0 ? _line_credit1 : 0,\n                debit: (_line_debit1 = line.debit) !== null && _line_debit1 !== void 0 ? _line_debit1 : 0,\n                subTags: {}\n            };\n        }\n    }\n    return agregate;\n}\nfunction getAccountPeriodStr(account) {\n    let aggregatedMention = account.isAggregated ? \" (Aggregated) \" : \"\";\n    return account.begin.toLocaleDateString() + \" - \" + account.end.toLocaleDateString() + aggregatedMention;\n}\nfunction getWholePeriod(accounts) {\n    const wholePeriod = accounts.reduce((result, period)=>{\n        return {\n            ...result,\n            begin: period.begin < result.begin ? period.begin : result.begin,\n            end: period.begin > result.begin ? period.begin : result.begin,\n            lines: [\n                ...result.lines,\n                ...period.lines\n            ],\n            isAggregated: true\n        };\n    });\n    wholePeriod.lines.sort((a, b)=>{\n        return a.date > b.date ? 1 : -1;\n    });\n    return wholePeriod;\n}\nfunction isPaymentLabel(label) {\n    const regExp = new RegExp(/(PAIEMENT\\s)/);\n    const test = regExp.test(label.toUpperCase());\n    return test;\n}\nfunction isDirectDebitLabel(label) {\n    const regExp = new RegExp(/(PRLV\\sSEPA\\s)/);\n    const test = regExp.test(label.toUpperCase());\n    return test;\n}\nfunction isBankTransferLabel(label) {\n    const regExp = new RegExp(/(VIR\\s)/);\n    const test = regExp.test(label.toUpperCase());\n    return test;\n}\nfunction isWithdrawalLabel(label) {\n    const regExp = new RegExp(/(RETRAIT\\sDAB\\s)/);\n    const test = regExp.test(label.toUpperCase());\n    return test;\n}\nfunction getPaymentId(label) {\n    //PAIEMENT CB 3007 FR LYON LA-BARGE CARTE 2178\n    const matches = label.toUpperCase().match(/(?:PAIEMENT\\s(?:CB|PSC)\\s\\d\\d\\d\\d\\s)(([a-zA-Z]|-|_|\\d+|\\/|\\*|\\s)+)(?:CARTE\\s\\d\\d\\d\\d)/);\n    return matches ? matches[1] : \"\";\n}\nfunction getDirectDebitId(label) {\n    const matches = label.toUpperCase().match(/(?:PRLV\\sSEPA\\s)(([a-zA-Z]|-|_|\\s)+)/);\n    return matches ? matches[1] : \"\";\n}\nfunction getBankTransferId(label) {\n    const matches = label.toUpperCase().match(/(?:VIR\\s)(([a-zA-Z]|-|_|\\s)+)/);\n    return matches ? matches[1] : \"\";\n}\nfunction getWithdrawalId(label) {\n    const matches = label.toUpperCase().match(/RETRAIT DAB/);\n    return matches ? matches[0] : \"\";\n}\nfunction extractIdFromLabel(label) {\n    if (isBankTransferLabel(label)) {\n        return getBankTransferId(label).trim();\n    }\n    if (isPaymentLabel(label)) {\n        return getPaymentId(label).trim();\n    }\n    if (isDirectDebitLabel(label)) {\n        return getDirectDebitId(label).trim();\n    }\n    if (isWithdrawalLabel(label)) {\n        return getWithdrawalId(label).trim();\n    }\n    return label.trim();\n}\nfunction tagPeriods(periods, mapping) {\n    const taggedPeriods = [\n        ...periods\n    ];\n    for(let i = 0; i < taggedPeriods.length; i++){\n        const period = taggedPeriods[i];\n        for(let j = 0; j < period.lines.length; j++){\n            const line = period.lines[j];\n            const id = extractIdFromLabel(line.label);\n            if (mapping[id]) {\n                line.tags = mapping[id].split(\">\");\n            }\n        }\n    }\n    return taggedPeriods;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRGF0YS9CYW5rLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUEwQ1lBOzs7R0FBQUEsa0JBQUFBO0FBS0wsU0FBU0MsZ0JBQWdCQyxLQUFxQixFQUFFQyxRQUFnQixFQUFFQyxVQUFrQjtJQUN2RixJQUFJQyxXQUFvQixDQUFDO0lBQ3pCLElBQUlDLGNBQWNILFdBQVc7SUFFN0IsSUFBSyxJQUFJSSxJQUFJLEdBQUdBLElBQUlMLE1BQU1NLE1BQU0sRUFBRUQsSUFBSztRQUNuQyxNQUFNRSxPQUFPUCxLQUFLLENBQUNLLEVBQUU7UUFFckIsSUFBSUcsTUFBTU4sZUFBZSxLQUFLLElBQUlLLEtBQUtFLElBQUksQ0FBQ0MsT0FBTyxDQUFDUjtRQUNwRCxJQUFJUyxRQUFRUCxjQUFlSSxNQUFNRCxLQUFLRSxJQUFJLENBQUNILE1BQU0sR0FBSUw7UUFDckQsSUFBSVcsTUFBTUwsS0FBS0UsSUFBSSxDQUFDRSxNQUFNO1FBRTFCLElBQUlDLFFBQVFWLGNBQWNTLFFBQVNKLEtBQUtFLElBQUksQ0FBQ0gsTUFBTSxHQUFHLEdBQUk7WUFDdERNLE1BQU1MLEtBQUtFLElBQUksQ0FBQ0UsUUFBUSxFQUFFO1FBQzlCLE9BQ0ssSUFBSUMsUUFBUVYsY0FBY1MsVUFBV0osS0FBS0UsSUFBSSxDQUFDSCxNQUFNLEdBQUcsR0FBSTtZQUM3RE0sTUFBTVIsY0FBY0csS0FBS0UsSUFBSSxDQUFDLEVBQUUsR0FBRztRQUN2QztRQUVBLElBQUlHLE9BQU9ULFVBQVU7Z0JBQ09JO1lBQXhCSixRQUFRLENBQUNTLElBQUksQ0FBQ0MsTUFBTSxJQUFJTixDQUFBQSxlQUFBQSxLQUFLTSxNQUFNLGNBQVhOLDBCQUFBQSxlQUFlO2dCQUNoQkE7WUFBdkJKLFFBQVEsQ0FBQ1MsSUFBSSxDQUFDRSxLQUFLLElBQUlQLENBQUFBLGNBQUFBLEtBQUtPLEtBQUssY0FBVlAseUJBQUFBLGNBQWM7UUFDekMsT0FDSztn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QztJQUVBLElBQUlWLG1CQUFtQkwsUUFBUTtRQUMzQixPQUFPVyxpQkFBaUJYLE9BQU9lLElBQUk7SUFDdkM7SUFFQSxJQUFJUixrQkFBa0JQLFFBQVE7UUFDMUIsT0FBT2EsZ0JBQWdCYixPQUFPZSxJQUFJO0lBQ3RDO0lBRUEsT0FBT2YsTUFBTWUsSUFBSTtBQUNyQjtBQUVPLFNBQVNDLFdBQVdDLE9BQXlCLEVBQUVDLE9BQWlCO0lBQ25FLE1BQU1DLGdCQUFnQjtXQUFJRjtLQUFRO0lBQ2xDLElBQUssSUFBSWpFLElBQUksR0FBR0EsSUFBSW1FLGNBQWNsRSxNQUFNLEVBQUVELElBQUs7UUFDM0MsTUFBTThDLFNBQVNxQixhQUFhLENBQUNuRSxFQUFFO1FBQy9CLElBQUssSUFBSWdCLElBQUksR0FBR0EsSUFBSThCLE9BQU9uRCxLQUFLLENBQUNNLE1BQU0sRUFBRWUsSUFBSztZQUMxQyxNQUFNZCxPQUFPNEMsT0FBT25ELEtBQUssQ0FBQ3FCLEVBQUU7WUFDNUIsTUFBTW9ELEtBQUtOLG1CQUFtQjVELEtBQUs4QyxLQUFLO1lBQ3hDLElBQUlrQixPQUFPLENBQUNFLEdBQUcsRUFBRTtnQkFDYmxFLEtBQUtFLElBQUksR0FBRzhELE9BQU8sQ0FBQ0UsR0FBRyxDQUFDQyxLQUFLLENBQUM7WUFDbEM7UUFDSjtJQUNKO0lBQ0EsT0FBT0Y7QUFDWCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0RhdGEvQmFuay50cz82NzJkIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgSUFjY291bnRMaW5lIHtcclxuICAgIGRhdGU6IERhdGU7XHJcbiAgICBkZWJpdDogbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG4gICAgY3JlZGl0OiBudW1iZXIgfCB1bmRlZmluZWQ7XHJcbiAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgYmFsYW5jZTogbnVtYmVyO1xyXG4gICAgdGFnczogc3RyaW5nW107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFjY291bnRMaW5lcyB7XHJcbiAgICBsaW5lczogSUFjY291bnRMaW5lW107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFjY291bnRQZXJpb2Qge1xyXG4gICAgYmVnaW46IERhdGU7XHJcbiAgICBlbmQ6IERhdGU7XHJcbiAgICBsaW5lczogSUFjY291bnRMaW5lW107XHJcbiAgICBpc0FnZ3JlZ2F0ZWQ6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFRNYXBwaW5nID0ge1ttYXRjaDogc3RyaW5nXTogc3RyaW5nfVxyXG5leHBvcnQgaW50ZXJmYWNlIElNYXBwaW5nTGluZSB7XHJcbiAgICBtYXRjaDogc3RyaW5nO1xyXG4gICAgdGFnczogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCB0eXBlIFRhZ0xpbmUgPSB7W2lkOiBzdHJpbmddOiB7Y3JlZGl0OiBudW1iZXIsIGRlYml0OiBudW1iZXIsIHN1YlRhZ3M6IFRhZ0xpbmV9OyB9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUYWcge1xyXG4gICAgdGFnOiBzdHJpbmc7XHJcbiAgICBjb3VudDogbnVtYmVyO1xyXG4gICAgZnJlcXVlbmN5OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFRCdWRnZXQgPSB7W3RhZzogc3RyaW5nXTogbnVtYmVyfVxyXG5leHBvcnQgaW50ZXJmYWNlIElUYWdCdWRnZXQge1xyXG4gICAgdGFnOiBzdHJpbmc7XHJcbiAgICBhbGxvd2VkOiBudW1iZXI7XHJcbiAgICBjb25zdW1lZDogbnVtYmVyO1xyXG4gICAgbGluZXM6IElBY2NvdW50TGluZVtdO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGVudW0gRURvY3VtZW50VHlwZSB7XHJcbiAgICBBQ0NPVU5UID0gXCJBQ0NPVU5UXCIsXHJcbiAgICBNQVBQSU5HID0gXCJNQVBQXCJcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFnZ3JlZ2F0ZUJ5VGFncyhsaW5lczogSUFjY291bnRMaW5lW10sIHRhZ0xldmVsOiBudW1iZXIsIGV4Y2x1ZGVUYWc6IHN0cmluZyk6IFRhZ0xpbmUge1xyXG4gICAgbGV0IGFncmVnYXRlOiBUYWdMaW5lID0ge307XHJcbiAgICBsZXQgaXNSZWN1cnNpdmUgPSB0YWdMZXZlbCA8IDA7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXTtcclxuXHJcbiAgICAgICAgbGV0IGlkeCA9IGV4Y2x1ZGVUYWcgPT09IFwiXCIgPyAwIDogbGluZS50YWdzLmluZGV4T2YoZXhjbHVkZVRhZyk7XHJcbiAgICAgICAgbGV0IGxldmVsID0gaXNSZWN1cnNpdmUgPyAoaWR4ICUgbGluZS50YWdzLmxlbmd0aCkgOiB0YWdMZXZlbDtcclxuICAgICAgICBsZXQgdGFnID0gbGluZS50YWdzW2xldmVsXTtcclxuXHJcbiAgICAgICAgaWYgKHRhZyA9PT0gZXhjbHVkZVRhZyAmJiBsZXZlbCA8IChsaW5lLnRhZ3MubGVuZ3RoIC0gMSkpIHtcclxuICAgICAgICAgICAgdGFnID0gbGluZS50YWdzW2xldmVsICsgMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRhZyA9PT0gZXhjbHVkZVRhZyAmJiBsZXZlbCA9PT0gKGxpbmUudGFncy5sZW5ndGggLSAxKSkge1xyXG4gICAgICAgICAgICB0YWcgPSBpc1JlY3Vyc2l2ZSA/IGxpbmUudGFnc1swXSA6IFwiVW5kZWZpbmVkXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGFnIGluIGFncmVnYXRlKSB7XHJcbiAgICAgICAgICAgIGFncmVnYXRlW3RhZ10uY3JlZGl0ICs9IGxpbmUuY3JlZGl0ID8/IDA7XHJcbiAgICAgICAgICAgIGFncmVnYXRlW3RhZ10uZGViaXQgKz0gbGluZS5kZWJpdCA/PyAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYWdyZWdhdGVbdGFnXSA9IHtcclxuICAgICAgICAgICAgICAgIGNyZWRpdDogbGluZS5jcmVkaXQgPz8gMCxcclxuICAgICAgICAgICAgICAgIGRlYml0OiBsaW5lLmRlYml0ID8/IDAsXHJcbiAgICAgICAgICAgICAgICBzdWJUYWdzOiB7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhZ3JlZ2F0ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RUYWdzKGxpbmVzOiBJQWNjb3VudExpbmVbXSk6IHN0cmluZ1tdIHtcclxuICAgIGxldCB0YWdzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRhZ3MucHVzaCguLi5saW5lc1tpXS50YWdzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZW1vdmUgZHVwbGljYXRlc1xyXG4gICAgdGFncyA9IHRhZ3MuZmlsdGVyKGZ1bmN0aW9uKHRhZywgaWR4KSB7XHJcbiAgICAgICAgcmV0dXJuIHRhZ3MuaW5kZXhPZih0YWcpID09PSBpZHg7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdGFncy5zb3J0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0VGFnc1dpdGhDb3VudChsaW5lczogSUFjY291bnRMaW5lW10pOiBJVGFnW10ge1xyXG4gICAgbGV0IHRhZ3M6IElUYWdbXSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGluZXNbaV0udGFncy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBjb25zdCB0YWdJZHggPSB0YWdzLmZpbmRJbmRleCgodGFnKSA9PiB0YWcudGFnID09PSBsaW5lc1tpXS50YWdzW2pdKTtcclxuICAgICAgICAgICAgaWYgKHRhZ0lkeCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRhZ3MucHVzaCh7dGFnOiBsaW5lc1tpXS50YWdzW2pdLCBjb3VudDogMSwgZnJlcXVlbmN5OiAxL2xpbmVzLmxlbmd0aH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGFnc1t0YWdJZHhdLmNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICB0YWdzW3RhZ0lkeF0uZnJlcXVlbmN5ID0gdGFnc1t0YWdJZHhdLmNvdW50L2xpbmVzLmxlbmd0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGFncy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZnJlcUEgPSBNYXRoLmZsb29yKGEuZnJlcXVlbmN5ICogMTAwKTtcclxuICAgICAgICBjb25zdCBmcmVxQiA9IE1hdGguZmxvb3IoYi5mcmVxdWVuY3kgKiAxMDApO1xyXG4gICAgICAgIGlmIChmcmVxQSA9PT0gZnJlcUIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGEudGFnID4gYi50YWcgPyAxIDogLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoTWF0aC5mbG9vcihiLmZyZXF1ZW5jeSAqIDEwMCkgLSBNYXRoLmZsb29yKGEuZnJlcXVlbmN5ICogMTAwKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFnZ3JlZ2F0ZUJ5VGFnKGxpbmVzOiBJQWNjb3VudExpbmVbXSwgdGFnOiBzdHJpbmcpOiBUYWdMaW5lIHtcclxuICAgIGxldCBhZ3JlZ2F0ZTogVGFnTGluZSA9IHt9O1xyXG4gICAgY29uc3QgdGFnZ2VkTGluZXMgPSB0YWcgPT09IFwiXCIgPyBsaW5lcyA6IGxpbmVzLmZpbHRlcigobGluZSkgPT4gbGluZS50YWdzLmluZGV4T2YodGFnKSAhPT0gLTEpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFnZ2VkTGluZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBsaW5lID0gdGFnZ2VkTGluZXNbaV07XHJcbiAgICAgICAgaWYgKHRhZyBpbiBhZ3JlZ2F0ZSkge1xyXG4gICAgICAgICAgICBhZ3JlZ2F0ZVt0YWddLmNyZWRpdCArPSBsaW5lLmNyZWRpdCA/PyAwO1xyXG4gICAgICAgICAgICBhZ3JlZ2F0ZVt0YWddLmRlYml0ICs9IGxpbmUuZGViaXQgPz8gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGFncmVnYXRlW3RhZ10gPSB7XHJcbiAgICAgICAgICAgICAgICBjcmVkaXQ6IGxpbmUuY3JlZGl0ID8/IDAsXHJcbiAgICAgICAgICAgICAgICBkZWJpdDogbGluZS5kZWJpdCA/PyAwLFxyXG4gICAgICAgICAgICAgICAgc3ViVGFnczoge31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFncmVnYXRlW3RhZ10uc3ViVGFncyA9IGFnZ3JlZ2F0ZUJ5VGFncyh0YWdnZWRMaW5lcywgMCwgdGFnKTtcclxuICAgIHJldHVybiBhZ3JlZ2F0ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFnZ3JlZ2F0ZUJ5RGF0ZShsaW5lczogSUFjY291bnRMaW5lW10sIG1vbnRobHk6IGJvb2xlYW4gPSBmYWxzZSk6IFRhZ0xpbmUge1xyXG4gICAgbGV0IGFncmVnYXRlOiBUYWdMaW5lID0ge307XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXTtcclxuICAgICAgICBsZXQgc3RyRGF0ZSA9IGxpbmUuZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJmci1GUlwiKTtcclxuICAgICAgICBpZiAobW9udGhseSkge1xyXG4gICAgICAgICAgICBzdHJEYXRlID0gc3RyRGF0ZS5zbGljZShzdHJEYXRlLmluZGV4T2YoXCIvXCIpKzEpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc3RyRGF0ZSBpbiBhZ3JlZ2F0ZSkge1xyXG4gICAgICAgICAgICBhZ3JlZ2F0ZVtzdHJEYXRlXS5jcmVkaXQgKz0gbGluZS5jcmVkaXQgPz8gMDtcclxuICAgICAgICAgICAgYWdyZWdhdGVbc3RyRGF0ZV0uZGViaXQgKz0gbGluZS5kZWJpdCA/PyAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYWdyZWdhdGVbc3RyRGF0ZV0gPSB7XHJcbiAgICAgICAgICAgICAgICBjcmVkaXQ6IGxpbmUuY3JlZGl0ID8/IDAsXHJcbiAgICAgICAgICAgICAgICBkZWJpdDogbGluZS5kZWJpdCA/PyAwLFxyXG4gICAgICAgICAgICAgICAgc3ViVGFnczoge31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBhZ3JlZ2F0ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFjY291bnRQZXJpb2RTdHIoYWNjb3VudDogSUFjY291bnRQZXJpb2QpOiBzdHJpbmcge1xyXG4gICAgbGV0IGFnZ3JlZ2F0ZWRNZW50aW9uID0gYWNjb3VudC5pc0FnZ3JlZ2F0ZWQgPyBcIiAoQWdncmVnYXRlZCkgXCIgOiBcIlwiO1xyXG4gICAgcmV0dXJuIGFjY291bnQuYmVnaW4udG9Mb2NhbGVEYXRlU3RyaW5nKCkgKyBcIiAtIFwiICsgYWNjb3VudC5lbmQudG9Mb2NhbGVEYXRlU3RyaW5nKCkgKyBhZ2dyZWdhdGVkTWVudGlvbjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFdob2xlUGVyaW9kKGFjY291bnRzOiBJQWNjb3VudFBlcmlvZFtdKTogSUFjY291bnRQZXJpb2Qge1xyXG4gICAgY29uc3Qgd2hvbGVQZXJpb2Q6IElBY2NvdW50UGVyaW9kID0gYWNjb3VudHMucmVkdWNlKChyZXN1bHQsIHBlcmlvZCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB7Li4ucmVzdWx0LFxyXG4gICAgICAgICAgICBiZWdpbjogcGVyaW9kLmJlZ2luIDwgcmVzdWx0LmJlZ2luID8gcGVyaW9kLmJlZ2luIDogcmVzdWx0LmJlZ2luLFxyXG4gICAgICAgICAgICBlbmQ6IHBlcmlvZC5iZWdpbiA+IHJlc3VsdC5iZWdpbiA/IHBlcmlvZC5iZWdpbiA6IHJlc3VsdC5iZWdpbixcclxuICAgICAgICAgICAgbGluZXM6IFsuLi5yZXN1bHQubGluZXMsIC4uLnBlcmlvZC5saW5lc10sXHJcbiAgICAgICAgICAgIGlzQWdncmVnYXRlZDogdHJ1ZX1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICB3aG9sZVBlcmlvZC5saW5lcy5zb3J0KChhOiBJQWNjb3VudExpbmUsIGI6IElBY2NvdW50TGluZSkgPT4ge3JldHVybiBhLmRhdGUgPiBiLmRhdGUgPyAxIDogLTE7fSk7XHJcbiAgICByZXR1cm4gd2hvbGVQZXJpb2Q7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNQYXltZW50TGFiZWwobGFiZWw6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgcmVnRXhwID0gbmV3IFJlZ0V4cCgvKFBBSUVNRU5UXFxzKS8pO1xyXG4gICAgY29uc3QgdGVzdCA9IHJlZ0V4cC50ZXN0KGxhYmVsLnRvVXBwZXJDYXNlKCkpO1xyXG4gICAgcmV0dXJuIHRlc3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0RpcmVjdERlYml0TGFiZWwobGFiZWw6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgcmVnRXhwID0gbmV3IFJlZ0V4cCgvKFBSTFZcXHNTRVBBXFxzKS8pO1xyXG4gICAgY29uc3QgdGVzdCA9IHJlZ0V4cC50ZXN0KGxhYmVsLnRvVXBwZXJDYXNlKCkpO1xyXG4gICAgcmV0dXJuIHRlc3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0JhbmtUcmFuc2ZlckxhYmVsKGxhYmVsOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHJlZ0V4cCA9IG5ldyBSZWdFeHAoLyhWSVJcXHMpLyk7XHJcbiAgICBjb25zdCB0ZXN0ID0gcmVnRXhwLnRlc3QobGFiZWwudG9VcHBlckNhc2UoKSk7XHJcbiAgICByZXR1cm4gdGVzdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzV2l0aGRyYXdhbExhYmVsKGxhYmVsOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHJlZ0V4cCA9IG5ldyBSZWdFeHAoLyhSRVRSQUlUXFxzREFCXFxzKS8pO1xyXG4gICAgY29uc3QgdGVzdCA9IHJlZ0V4cC50ZXN0KGxhYmVsLnRvVXBwZXJDYXNlKCkpO1xyXG4gICAgcmV0dXJuIHRlc3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXltZW50SWQobGFiZWw6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAvL1BBSUVNRU5UIENCIDMwMDcgRlIgTFlPTiBMQS1CQVJHRSBDQVJURSAyMTc4XHJcbiAgICBjb25zdCBtYXRjaGVzID0gbGFiZWwudG9VcHBlckNhc2UoKS5tYXRjaCgvKD86UEFJRU1FTlRcXHMoPzpDQnxQU0MpXFxzXFxkXFxkXFxkXFxkXFxzKSgoW2EtekEtWl18LXxffFxcZCt8XFwvfFxcKnxcXHMpKykoPzpDQVJURVxcc1xcZFxcZFxcZFxcZCkvKTtcclxuICAgIHJldHVybiBtYXRjaGVzID8gbWF0Y2hlc1sxXSA6IFwiXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREaXJlY3REZWJpdElkKGxhYmVsOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgbWF0Y2hlcyA9IGxhYmVsLnRvVXBwZXJDYXNlKCkubWF0Y2goLyg/OlBSTFZcXHNTRVBBXFxzKSgoW2EtekEtWl18LXxffFxccykrKS8pO1xyXG4gICAgcmV0dXJuIG1hdGNoZXMgPyBtYXRjaGVzWzFdIDogXCJcIjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEJhbmtUcmFuc2ZlcklkKGxhYmVsOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgbWF0Y2hlcyA9IGxhYmVsLnRvVXBwZXJDYXNlKCkubWF0Y2goLyg/OlZJUlxccykoKFthLXpBLVpdfC18X3xcXHMpKykvKTtcclxuICAgIHJldHVybiBtYXRjaGVzID8gbWF0Y2hlc1sxXSA6IFwiXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRXaXRoZHJhd2FsSWQobGFiZWw6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBtYXRjaGVzID0gbGFiZWwudG9VcHBlckNhc2UoKS5tYXRjaCgvUkVUUkFJVCBEQUIvKTtcclxuICAgIHJldHVybiBtYXRjaGVzID8gbWF0Y2hlc1swXSA6IFwiXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0SWRGcm9tTGFiZWwobGFiZWw6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoaXNCYW5rVHJhbnNmZXJMYWJlbChsYWJlbCkpIHtcclxuICAgICAgICByZXR1cm4gZ2V0QmFua1RyYW5zZmVySWQobGFiZWwpLnRyaW0oKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNQYXltZW50TGFiZWwobGFiZWwpKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldFBheW1lbnRJZChsYWJlbCkudHJpbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc0RpcmVjdERlYml0TGFiZWwobGFiZWwpKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldERpcmVjdERlYml0SWQobGFiZWwpLnRyaW0oKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNXaXRoZHJhd2FsTGFiZWwobGFiZWwpKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldFdpdGhkcmF3YWxJZChsYWJlbCkudHJpbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBsYWJlbC50cmltKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0YWdQZXJpb2RzKHBlcmlvZHM6IElBY2NvdW50UGVyaW9kW10sIG1hcHBpbmc6IFRNYXBwaW5nKTogSUFjY291bnRQZXJpb2RbXSB7XHJcbiAgICBjb25zdCB0YWdnZWRQZXJpb2RzID0gWy4uLnBlcmlvZHNdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWdnZWRQZXJpb2RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgcGVyaW9kID0gdGFnZ2VkUGVyaW9kc1tpXTtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBlcmlvZC5saW5lcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBjb25zdCBsaW5lID0gcGVyaW9kLmxpbmVzW2pdO1xyXG4gICAgICAgICAgICBjb25zdCBpZCA9IGV4dHJhY3RJZEZyb21MYWJlbChsaW5lLmxhYmVsKTtcclxuICAgICAgICAgICAgaWYgKG1hcHBpbmdbaWRdKSB7XHJcbiAgICAgICAgICAgICAgICBsaW5lLnRhZ3MgPSBtYXBwaW5nW2lkXS5zcGxpdCgnPicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRhZ2dlZFBlcmlvZHM7XHJcbn0iXSwibmFtZXMiOlsiRURvY3VtZW50VHlwZSIsImFnZ3JlZ2F0ZUJ5VGFncyIsImxpbmVzIiwidGFnTGV2ZWwiLCJleGNsdWRlVGFnIiwiYWdyZWdhdGUiLCJpc1JlY3Vyc2l2ZSIsImkiLCJsZW5ndGgiLCJsaW5lIiwiaWR4IiwidGFncyIsImluZGV4T2YiLCJsZXZlbCIsInRhZyIsImNyZWRpdCIsImRlYml0Iiwic3ViVGFncyIsImV4dHJhY3RUYWdzIiwicHVzaCIsImZpbHRlciIsInNvcnQiLCJleHRyYWN0VGFnc1dpdGhDb3VudCIsImoiLCJ0YWdJZHgiLCJmaW5kSW5kZXgiLCJjb3VudCIsImZyZXF1ZW5jeSIsImEiLCJiIiwiZnJlcUEiLCJNYXRoIiwiZmxvb3IiLCJmcmVxQiIsImFnZ3JlZ2F0ZUJ5VGFnIiwidGFnZ2VkTGluZXMiLCJhZ2dyZWdhdGVCeURhdGUiLCJtb250aGx5Iiwic3RyRGF0ZSIsImRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJzbGljZSIsImdldEFjY291bnRQZXJpb2RTdHIiLCJhY2NvdW50IiwiYWdncmVnYXRlZE1lbnRpb24iLCJpc0FnZ3JlZ2F0ZWQiLCJiZWdpbiIsImVuZCIsImdldFdob2xlUGVyaW9kIiwiYWNjb3VudHMiLCJ3aG9sZVBlcmlvZCIsInJlZHVjZSIsInJlc3VsdCIsInBlcmlvZCIsImlzUGF5bWVudExhYmVsIiwibGFiZWwiLCJyZWdFeHAiLCJSZWdFeHAiLCJ0ZXN0IiwidG9VcHBlckNhc2UiLCJpc0RpcmVjdERlYml0TGFiZWwiLCJpc0JhbmtUcmFuc2ZlckxhYmVsIiwiaXNXaXRoZHJhd2FsTGFiZWwiLCJnZXRQYXltZW50SWQiLCJtYXRjaGVzIiwibWF0Y2giLCJnZXREaXJlY3REZWJpdElkIiwiZ2V0QmFua1RyYW5zZmVySWQiLCJnZXRXaXRoZHJhd2FsSWQiLCJleHRyYWN0SWRGcm9tTGFiZWwiLCJ0cmltIiwidGFnUGVyaW9kcyIsInBlcmlvZHMiLCJtYXBwaW5nIiwidGFnZ2VkUGVyaW9kcyIsImlkIiwic3BsaXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Data/Bank.ts\n"));

/***/ })

});