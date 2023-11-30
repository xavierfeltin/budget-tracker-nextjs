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

/***/ "(app-pages-browser)/./components/Loaders/GoogleCSVUploader.tsx":
/*!**************************************************!*\
  !*** ./components/Loaders/GoogleCSVUploader.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GoogleCSVUploader: function() { return /* binding */ GoogleCSVUploader; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Components_AccountFilesSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/AccountFilesSelector */ \"(app-pages-browser)/./components/Components/AccountFilesSelector.tsx\");\n/* harmony import */ var _Data_Bank__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Data/Bank */ \"(app-pages-browser)/./components/Data/Bank.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction GoogleCSVUploader(param) {\n    let { documentType, handleFiles } = param;\n    _s();\n    const [listedFiles, setListedFiles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const getAccountFolderId = async ()=>{\n        let response;\n        try {\n            //@ts-ignore\n            response = await gapi.client.drive.files.list({\n                \"pageSize\": 2,\n                \"corpora\": \"user\",\n                \"includeItemsFromAllDrives\": true,\n                \"supportsAllDrives\": true,\n                \"orderBy\": \"name\",\n                \"q\": \"name='Comptes' and mimeType = 'application/vnd.google-apps.folder'\",\n                \"fields\": \"files(id, name)\"\n            });\n        } catch (err) {\n            console.error(err);\n            return \"\";\n        }\n        const files = response.result.files;\n        if (!files || files.length == 0) {\n            console.warn(\"No files found\");\n            return \"\";\n        }\n        if (files.length > 1) {\n            console.warn(\"Too many folders found\");\n            return \"\";\n        }\n        return files[0].id;\n    };\n    const listFilesInFolder = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (folderId)=>{\n        let response;\n        try {\n            //@ts-ignore\n            response = await gapi.client.drive.files.list({\n                \"pageSize\": 10,\n                \"corpora\": \"user\",\n                \"includeItemsFromAllDrives\": true,\n                \"supportsAllDrives\": true,\n                \"orderBy\": \"name\",\n                \"q\": documentType === _Data_Bank__WEBPACK_IMPORTED_MODULE_3__.EDocumentType.MAPPING ? \"'\" + folderId + \"' in parents and mimeType='text/csv' and name contains 'mapping'\" : \"'\" + folderId + \"' in parents and mimeType='text/csv' and not name contains 'mapping'\",\n                \"fields\": \"files(id, name)\"\n            });\n        } catch (err) {\n            console.error(err);\n            return;\n        }\n        const files = response.result.files;\n        if (!files || files.length == 0) {\n            console.warn(\"No files found\");\n            return;\n        }\n        setListedFiles(files);\n    }, [\n        documentType\n    ]);\n    const getCSVFileContent = async (file)=>{\n        console.log(\"Get content for id \" + file.id + \", name: \" + file.name);\n        let response;\n        try {\n            //@ts-ignore\n            response = await gapi.client.drive.files.get({\n                \"fileId\": file.id,\n                supportAllDrives: true,\n                \"alt\": \"media\"\n            });\n        } catch (err) {\n            console.error(err);\n            return;\n        }\n        console.log(JSON.stringify(response.body));\n        const content = response.body;\n        const blob = new Blob([\n            content\n        ]);\n        const f = new File([\n            blob\n        ], file.name);\n        return f;\n    };\n    const handleSelection = async (selectedFiles)=>{\n        const files = [];\n        console.log(\"Handle Selection: \" + JSON.stringify(selectedFiles));\n        for(let i = 0; i < selectedFiles.length; i++){\n            console.log(\"Get: \" + JSON.stringify(selectedFiles[i]));\n            const file = await getCSVFileContent(selectedFiles[i]);\n            if (file) {\n                files.push(file);\n            }\n        }\n        console.log(\"All files have been loaded\");\n        handleFiles(files, searchMapping);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getAccountFolderId().then((folderId)=>{\n            listFilesInFolder(folderId);\n        });\n    }, [\n        listFilesInFolder\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_AccountFilesSelector__WEBPACK_IMPORTED_MODULE_2__.AccountFilesSelector, {\n        formId: searchMapping ? \"load-mapping\" : \"load-account\",\n        files: listedFiles,\n        handleSelection: handleSelection\n    }, void 0, false, {\n        fileName: \"D:\\\\projet\\\\budget-tracker-nextjs\\\\components\\\\Loaders\\\\GoogleCSVUploader.tsx\",\n        lineNumber: 120,\n        columnNumber: 9\n    }, this);\n}\n_s(GoogleCSVUploader, \"mnmbT3ePJ8cv0b7YbdC8GiFoLeg=\");\n_c = GoogleCSVUploader;\nvar _c;\n$RefreshReg$(_c, \"GoogleCSVUploader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTG9hZGVycy9Hb29nbGVDU1ZVcGxvYWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBeUQ7QUFDaUI7QUFDN0I7QUFRdEMsU0FBU0ssa0JBQWtCLEtBRUE7UUFGQSxFQUM5QkMsWUFBWSxFQUNaQyxXQUFXLEVBQW1CLEdBRkE7O0lBSTlCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHUCwrQ0FBUUEsQ0FBK0IsRUFBRTtJQUUvRSxNQUFNUSxxQkFBcUI7UUFDdkIsSUFBSUM7UUFDSixJQUFJO1lBQ0EsWUFBWTtZQUNaQSxXQUFXLE1BQU1DLEtBQUtDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDQyxLQUFLLENBQUNDLElBQUksQ0FBQztnQkFDOUMsWUFBWTtnQkFDWixXQUFXO2dCQUNYLDZCQUE2QjtnQkFDN0IscUJBQXFCO2dCQUNyQixXQUFXO2dCQUNYLEtBQUs7Z0JBQ0wsVUFBVTtZQUNWO1FBQ0osRUFBRSxPQUFPQyxLQUFLO1lBQ1ZDLFFBQVFDLEtBQUssQ0FBQ0Y7WUFDZCxPQUFPO1FBQ1g7UUFDQSxNQUFNRixRQUFRSixTQUFTUyxNQUFNLENBQUNMLEtBQUs7UUFDbkMsSUFBSSxDQUFDQSxTQUFTQSxNQUFNTSxNQUFNLElBQUksR0FBRztZQUM3QkgsUUFBUUksSUFBSSxDQUFDO1lBQ2IsT0FBTztRQUNYO1FBRUEsSUFBSVAsTUFBTU0sTUFBTSxHQUFHLEdBQUc7WUFDbEJILFFBQVFJLElBQUksQ0FBQztZQUNiLE9BQU87UUFDWDtRQUVBLE9BQU9QLEtBQUssQ0FBQyxFQUFFLENBQUNRLEVBQUU7SUFDdEI7SUFFQSxNQUFNQyxvQkFBb0J4QixrREFBV0EsQ0FBQyxPQUFPeUI7UUFDekMsSUFBSWQ7UUFDSixJQUFJO1lBQ0EsWUFBWTtZQUNaQSxXQUFXLE1BQU1DLEtBQUtDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDQyxLQUFLLENBQUNDLElBQUksQ0FBQztnQkFDOUMsWUFBWTtnQkFDWixXQUFXO2dCQUNYLDZCQUE2QjtnQkFDN0IscUJBQXFCO2dCQUNyQixXQUFXO2dCQUNYLEtBQUtWLGlCQUFpQkYscURBQWFBLENBQUNzQixPQUFPLEdBQUcsTUFBTUQsV0FBVyxxRUFBcUUsTUFBTUEsV0FBVztnQkFDckosVUFBVTtZQUNWO1FBQ0osRUFBRSxPQUFPUixLQUFLO1lBQ1ZDLFFBQVFDLEtBQUssQ0FBQ0Y7WUFDZDtRQUNKO1FBQ0EsTUFBTUYsUUFBc0NKLFNBQVNTLE1BQU0sQ0FBQ0wsS0FBSztRQUNqRSxJQUFJLENBQUNBLFNBQVNBLE1BQU1NLE1BQU0sSUFBSSxHQUFHO1lBQzdCSCxRQUFRSSxJQUFJLENBQUM7WUFDYjtRQUNKO1FBQ0FiLGVBQWVNO0lBQ25CLEdBQUc7UUFBQ1Q7S0FBYTtJQUVqQixNQUFNcUIsb0JBQW9CLE9BQU9DO1FBQzdCVixRQUFRVyxHQUFHLENBQUMsd0JBQXdCRCxLQUFLTCxFQUFFLEdBQUcsYUFBYUssS0FBS0UsSUFBSTtRQUVwRSxJQUFJbkI7UUFDSixJQUFJO1lBQ0YsWUFBWTtZQUNaQSxXQUFXLE1BQU1DLEtBQUtDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDQyxLQUFLLENBQUNnQixHQUFHLENBQUM7Z0JBQzNDLFVBQVVILEtBQUtMLEVBQUU7Z0JBQ2pCUyxrQkFBa0I7Z0JBQ2xCLE9BQU87WUFDVDtRQUNGLEVBQUUsT0FBT2YsS0FBSztZQUNaQyxRQUFRQyxLQUFLLENBQUNGO1lBQ2Q7UUFDRjtRQUVBQyxRQUFRVyxHQUFHLENBQUNJLEtBQUtDLFNBQVMsQ0FBQ3ZCLFNBQVN3QixJQUFJO1FBQ3hDLE1BQU1DLFVBQWtCekIsU0FBU3dCLElBQUk7UUFDckMsTUFBTUUsT0FBTyxJQUFJQyxLQUFLO1lBQUNGO1NBQVE7UUFDL0IsTUFBTUcsSUFBSSxJQUFJQyxLQUFLO1lBQUNIO1NBQUssRUFBRVQsS0FBS0UsSUFBSTtRQUVwQyxPQUFPUztJQUNYO0lBRUEsTUFBTUUsa0JBQWtCLE9BQU9DO1FBQzNCLE1BQU0zQixRQUFnQixFQUFFO1FBQ3hCRyxRQUFRVyxHQUFHLENBQUMsdUJBQXVCSSxLQUFLQyxTQUFTLENBQUNRO1FBRWxELElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJRCxjQUFjckIsTUFBTSxFQUFFc0IsSUFBSztZQUMzQ3pCLFFBQVFXLEdBQUcsQ0FBQyxVQUFVSSxLQUFLQyxTQUFTLENBQUNRLGFBQWEsQ0FBQ0MsRUFBRTtZQUNyRCxNQUFNZixPQUFPLE1BQU1ELGtCQUFrQmUsYUFBYSxDQUFDQyxFQUFFO1lBQ3JELElBQUlmLE1BQU07Z0JBQ05iLE1BQU02QixJQUFJLENBQUNoQjtZQUNmO1FBQ0o7UUFFQVYsUUFBUVcsR0FBRyxDQUFDO1FBQ1p0QixZQUFZUSxPQUFPOEI7SUFDdkI7SUFFQTVDLGdEQUFTQSxDQUFDO1FBQ05TLHFCQUFxQm9DLElBQUksQ0FBQyxDQUFDckI7WUFDdkJELGtCQUFrQkM7UUFDdEI7SUFDSixHQUFHO1FBQUNEO0tBQWtCO0lBRXRCLHFCQUNJLDhEQUFDckIsa0ZBQW9CQTtRQUFDNEMsUUFBUUYsZ0JBQWdCLGlCQUFpQjtRQUFlOUIsT0FBT1A7UUFBYWlDLGlCQUFpQkE7Ozs7OztBQUUzSDtHQS9HZ0JwQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xvYWRlcnMvR29vZ2xlQ1NWVXBsb2FkZXIudHN4PzI1OWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEFjY291bnRGaWxlc1NlbGVjdG9yIH0gZnJvbSAnLi4vQ29tcG9uZW50cy9BY2NvdW50RmlsZXNTZWxlY3Rvcic7XHJcbmltcG9ydCB7IEVEb2N1bWVudFR5cGUgfSBmcm9tICcuLi9EYXRhL0JhbmsnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJbnB1dFJhbmdlUHJvcHMge1xyXG4gICAgLy9saXN0ZWRGaWxlczoge2lkOiBzdHJpbmcsIG5hbWU6IHN0cmluZ31bXTtcclxuICAgIGRvY3VtZW50VHlwZTogRURvY3VtZW50VHlwZTtcclxuICAgIGhhbmRsZUZpbGVzOiAoZmlsZXM6IEZpbGVbXSwgZG9jdW1lbnRUeXBlOiBFRG9jdW1lbnRUeXBlKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR29vZ2xlQ1NWVXBsb2FkZXIoe1xyXG4gICAgZG9jdW1lbnRUeXBlLFxyXG4gICAgaGFuZGxlRmlsZXN9IDogSW5wdXRSYW5nZVByb3BzKSB7XHJcblxyXG4gICAgY29uc3QgW2xpc3RlZEZpbGVzLCBzZXRMaXN0ZWRGaWxlc10gPSB1c2VTdGF0ZTx7aWQ6IHN0cmluZywgbmFtZTogc3RyaW5nfVtdPihbXSk7XHJcblxyXG4gICAgY29uc3QgZ2V0QWNjb3VudEZvbGRlcklkID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGxldCByZXNwb25zZTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCBnYXBpLmNsaWVudC5kcml2ZS5maWxlcy5saXN0KHtcclxuICAgICAgICAgICAgJ3BhZ2VTaXplJzogMixcclxuICAgICAgICAgICAgJ2NvcnBvcmEnOiAndXNlcicsXHJcbiAgICAgICAgICAgICdpbmNsdWRlSXRlbXNGcm9tQWxsRHJpdmVzJzogdHJ1ZSxcclxuICAgICAgICAgICAgJ3N1cHBvcnRzQWxsRHJpdmVzJzogdHJ1ZSxcclxuICAgICAgICAgICAgJ29yZGVyQnknOiAnbmFtZScsXHJcbiAgICAgICAgICAgICdxJzogXCJuYW1lPSdDb21wdGVzJyBhbmQgbWltZVR5cGUgPSAnYXBwbGljYXRpb24vdm5kLmdvb2dsZS1hcHBzLmZvbGRlcidcIixcclxuICAgICAgICAgICAgJ2ZpZWxkcyc6ICdmaWxlcyhpZCwgbmFtZSknXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBmaWxlcyA9IHJlc3BvbnNlLnJlc3VsdC5maWxlcztcclxuICAgICAgICBpZiAoIWZpbGVzIHx8IGZpbGVzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignTm8gZmlsZXMgZm91bmQnKTtcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZmlsZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1RvbyBtYW55IGZvbGRlcnMgZm91bmQnKTtcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmlsZXNbMF0uaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbGlzdEZpbGVzSW5Gb2xkZXIgPSB1c2VDYWxsYmFjayhhc3luYyAoZm9sZGVySWQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGxldCByZXNwb25zZTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCBnYXBpLmNsaWVudC5kcml2ZS5maWxlcy5saXN0KHtcclxuICAgICAgICAgICAgJ3BhZ2VTaXplJzogMTAsXHJcbiAgICAgICAgICAgICdjb3Jwb3JhJzogJ3VzZXInLFxyXG4gICAgICAgICAgICAnaW5jbHVkZUl0ZW1zRnJvbUFsbERyaXZlcyc6IHRydWUsXHJcbiAgICAgICAgICAgICdzdXBwb3J0c0FsbERyaXZlcyc6IHRydWUsXHJcbiAgICAgICAgICAgICdvcmRlckJ5JzogJ25hbWUnLFxyXG4gICAgICAgICAgICAncSc6IGRvY3VtZW50VHlwZSA9PT0gRURvY3VtZW50VHlwZS5NQVBQSU5HID8gXCInXCIgKyBmb2xkZXJJZCArIFwiJyBpbiBwYXJlbnRzIGFuZCBtaW1lVHlwZT0ndGV4dC9jc3YnIGFuZCBuYW1lIGNvbnRhaW5zICdtYXBwaW5nJ1wiIDogXCInXCIgKyBmb2xkZXJJZCArIFwiJyBpbiBwYXJlbnRzIGFuZCBtaW1lVHlwZT0ndGV4dC9jc3YnIGFuZCBub3QgbmFtZSBjb250YWlucyAnbWFwcGluZydcIixcclxuICAgICAgICAgICAgJ2ZpZWxkcyc6ICdmaWxlcyhpZCwgbmFtZSknXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZmlsZXM6IHtpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmd9W10gPSByZXNwb25zZS5yZXN1bHQuZmlsZXM7XHJcbiAgICAgICAgaWYgKCFmaWxlcyB8fCBmaWxlcy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ05vIGZpbGVzIGZvdW5kJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0TGlzdGVkRmlsZXMoZmlsZXMpO1xyXG4gICAgfSwgW2RvY3VtZW50VHlwZV0pO1xyXG5cclxuICAgIGNvbnN0IGdldENTVkZpbGVDb250ZW50ID0gYXN5bmMgKGZpbGU6IHtpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmd9KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJHZXQgY29udGVudCBmb3IgaWQgXCIgKyBmaWxlLmlkICsgXCIsIG5hbWU6IFwiICsgZmlsZS5uYW1lKTtcclxuXHJcbiAgICAgICAgbGV0IHJlc3BvbnNlO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgZ2FwaS5jbGllbnQuZHJpdmUuZmlsZXMuZ2V0KHtcclxuICAgICAgICAgICAgJ2ZpbGVJZCc6IGZpbGUuaWQsXHJcbiAgICAgICAgICAgIHN1cHBvcnRBbGxEcml2ZXM6IHRydWUsXHJcbiAgICAgICAgICAgICdhbHQnOiAnbWVkaWEnXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLmJvZHkpKTtcclxuICAgICAgICBjb25zdCBjb250ZW50OiBzdHJpbmcgPSByZXNwb25zZS5ib2R5IGFzIHN0cmluZztcclxuICAgICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2NvbnRlbnRdKTtcclxuICAgICAgICBjb25zdCBmID0gbmV3IEZpbGUoW2Jsb2JdLCBmaWxlLm5hbWUpXHJcblxyXG4gICAgICAgIHJldHVybiBmO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNlbGVjdGlvbiA9IGFzeW5jIChzZWxlY3RlZEZpbGVzOiB7aWQ6IHN0cmluZywgbmFtZTogc3RyaW5nfVtdKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmlsZXM6IEZpbGVbXSA9IFtdO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSGFuZGxlIFNlbGVjdGlvbjogXCIgKyBKU09OLnN0cmluZ2lmeShzZWxlY3RlZEZpbGVzKSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0ZWRGaWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdldDogXCIgKyBKU09OLnN0cmluZ2lmeShzZWxlY3RlZEZpbGVzW2ldKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBhd2FpdCBnZXRDU1ZGaWxlQ29udGVudChzZWxlY3RlZEZpbGVzW2ldKTtcclxuICAgICAgICAgICAgaWYgKGZpbGUpIHtcclxuICAgICAgICAgICAgICAgIGZpbGVzLnB1c2goZmlsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQWxsIGZpbGVzIGhhdmUgYmVlbiBsb2FkZWRcIik7XHJcbiAgICAgICAgaGFuZGxlRmlsZXMoZmlsZXMsIHNlYXJjaE1hcHBpbmcpO1xyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldEFjY291bnRGb2xkZXJJZCgpLnRoZW4oKGZvbGRlcklkOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgbGlzdEZpbGVzSW5Gb2xkZXIoZm9sZGVySWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW2xpc3RGaWxlc0luRm9sZGVyXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBY2NvdW50RmlsZXNTZWxlY3RvciBmb3JtSWQ9e3NlYXJjaE1hcHBpbmcgPyBcImxvYWQtbWFwcGluZ1wiIDogXCJsb2FkLWFjY291bnRcIn1maWxlcz17bGlzdGVkRmlsZXN9IGhhbmRsZVNlbGVjdGlvbj17aGFuZGxlU2VsZWN0aW9ufT48L0FjY291bnRGaWxlc1NlbGVjdG9yPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBY2NvdW50RmlsZXNTZWxlY3RvciIsIkVEb2N1bWVudFR5cGUiLCJHb29nbGVDU1ZVcGxvYWRlciIsImRvY3VtZW50VHlwZSIsImhhbmRsZUZpbGVzIiwibGlzdGVkRmlsZXMiLCJzZXRMaXN0ZWRGaWxlcyIsImdldEFjY291bnRGb2xkZXJJZCIsInJlc3BvbnNlIiwiZ2FwaSIsImNsaWVudCIsImRyaXZlIiwiZmlsZXMiLCJsaXN0IiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwicmVzdWx0IiwibGVuZ3RoIiwid2FybiIsImlkIiwibGlzdEZpbGVzSW5Gb2xkZXIiLCJmb2xkZXJJZCIsIk1BUFBJTkciLCJnZXRDU1ZGaWxlQ29udGVudCIsImZpbGUiLCJsb2ciLCJuYW1lIiwiZ2V0Iiwic3VwcG9ydEFsbERyaXZlcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJib2R5IiwiY29udGVudCIsImJsb2IiLCJCbG9iIiwiZiIsIkZpbGUiLCJoYW5kbGVTZWxlY3Rpb24iLCJzZWxlY3RlZEZpbGVzIiwiaSIsInB1c2giLCJzZWFyY2hNYXBwaW5nIiwidGhlbiIsImZvcm1JZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Loaders/GoogleCSVUploader.tsx\n"));

/***/ })

});