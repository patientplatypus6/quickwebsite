"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/messagewall",{

/***/ "./pages/messagewall.js":
/*!******************************!*\
  !*** ./pages/messagewall.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Messagewall; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_bloglist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/bloglist */ \"./components/bloglist.js\");\n/* harmony import */ var _css_Main_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/Main.module.css */ \"./css/Main.module.css\");\n/* harmony import */ var _css_Main_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_Main_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header */ \"./components/header.js\");\n/* harmony import */ var _components_pagelist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/pagelist */ \"./components/pagelist.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utility_utility__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utility/utility */ \"./utility/utility.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar MessageHandler = function(msgprops) {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\"), inputval = ref[0], setInputval = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]), msgs = ref1[0], setMsgs = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        console.log(\"value of inputval\", inputval);\n    }, [\n        inputval\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        console.log(\"value of msgprops\", msgprops);\n        setMsgs(msgprops);\n    }, []);\n    // useEffect(()=>{ \n    //   getData('http://164.92.157.124:3002/api/getmessages')\n    //    .then(data => {\n    //     console.log(\"inside messagewall and data:\", data); // JSON data parsed by `data.json()` call\n    //     setMsgs(data.messages)\n    //   });\n    //  }\n    // , [])\n    var handleEnter = function() {\n        console.log(\"if you are seeing this message it's because this is a work in progress\");\n        (0,_utility_utility__WEBPACK_IMPORTED_MODULE_6__.postData)(\"http://164.92.157.124:3002/api/addmessage\", {\n            message: inputval\n        }).then(function(data) {\n            console.log(\"inside messagewall and data:\", data); // JSON data parsed by `data.json()` call\n            setMsgs(data.messages);\n        });\n    };\n    var displaymessages = function() {\n        var _this2 = _this1;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                padding: \"5px\"\n            },\n            children: [\n                \"hello displaymessages\",\n                msgs.map(function(msg, key) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {},\n                        children: msg\n                    }, key, false, {\n                        fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, _this2);\n                })\n            ]\n        }, void 0, true, {\n            fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, _this1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"calc(100% - 20px)\",\n            background: \"\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    float: \"left\",\n                    display: \"inline-block\",\n                    width: \"50%\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"inline-block\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            cols: \"40\",\n                            rows: \"20\",\n                            style: {\n                                resize: \"none\"\n                            },\n                            onChange: function(e) {\n                                setInputval(e.target.value);\n                            },\n                            value: inputval\n                        }, void 0, false, {\n                            fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"inline-block\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                background: \"black\",\n                                color: \"white\"\n                            },\n                            onClick: function() {\n                                return handleEnter();\n                            },\n                            children: \"ENTER\"\n                        }, void 0, false, {\n                            fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"inline-block\",\n                    width: \"50%\",\n                    background: \"rgba(0,0,0,0.2)\"\n                },\n                children: displaymessages()\n            }, void 0, false, {\n                fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, _this);\n};\n_s(MessageHandler, \"tjKjsNwbSbWDUK2LuGWZXJnys20=\");\n_c = MessageHandler;\nvar __N_SSG = true;\nfunction Messagewall(msgprops) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.googleapis.com\"\n                    }, void 0, false, {\n                        fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.gstatic.com\",\n                        crossorigin: true\n                    }, void 0, false, {\n                        fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Roboto+Mono:wght@100&display=swap\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_css_Main_module_css__WEBPACK_IMPORTED_MODULE_7___default().headercontainer),\n                style: {\n                    width: \"100vw\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                    lineNumber: 85,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_css_Main_module_css__WEBPACK_IMPORTED_MODULE_7___default().listcontainerleft),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_bloglist__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_css_Main_module_css__WEBPACK_IMPORTED_MODULE_7___default().pagecontentcontainer),\n                children: [\n                    \"This is the message wall\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MessageHandler, {\n                        msgprops: msgprops\n                    }, void 0, false, {\n                        fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                        lineNumber: 92,\n                        columnNumber: 2\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_css_Main_module_css__WEBPACK_IMPORTED_MODULE_7___default().listcontainerright),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pagelist__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                    lineNumber: 95,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n        lineNumber: 78,\n        columnNumber: 5\n    }, this);\n};\n_c1 = Messagewall;\nvar _c, _c1;\n$RefreshReg$(_c, \"MessageHandler\");\n$RefreshReg$(_c1, \"Messagewall\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBUyxFQUFFL0MsK0VBQXdCOzBCQUN0Qyw0RUFBQ0QsNERBQVE7Ozs7d0JBQUU7Ozs7O29CQUNQOzBCQUNOLDhEQUFDc0IsS0FBRztnQkFBQzBCLFNBQVMsRUFBRS9DLGtGQUEyQjs7b0JBQUUsMEJBRWxEO2tDQUFBLDhEQUFDTyxjQUFjO3dCQUFDQyxRQUFRLEVBQUVBLFFBQVE7Ozs7OzRCQUFHOzs7Ozs7b0JBQzFCOzBCQUNOLDhEQUFDYSxLQUFHO2dCQUFDMEIsU0FBUyxFQUFFL0MsZ0ZBQXlCOzBCQUN2Qyw0RUFBQ0UsNERBQVE7Ozs7d0JBQUU7Ozs7O29CQUNQOzs7Ozs7WUFDRixDQUNQO0NBQ0Y7QUF2QnVCd0MsTUFBQUEsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9tZXNzYWdld2FsbC5qcz9kMWQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCbG9nTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2Jsb2dsaXN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9jc3MvTWFpbi5tb2R1bGUuY3NzJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcidcbmltcG9ydCBQYWdlTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL3BhZ2VsaXN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7cG9zdERhdGEsIGdldERhdGF9IGZyb20gJy4uL3V0aWxpdHkvdXRpbGl0eSdcblxuY29uc3QgTWVzc2FnZUhhbmRsZXIgPSAobXNncHJvcHMpID0+IHtcbiAgY29uc3QgW2lucHV0dmFsLCBzZXRJbnB1dHZhbF0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBbbXNncywgc2V0TXNnc10gPSB1c2VTdGF0ZShbXSlcblxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBjb25zb2xlLmxvZygndmFsdWUgb2YgaW5wdXR2YWwnLCBpbnB1dHZhbClcbiAgfSxbaW5wdXR2YWxdKSBcblxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBjb25zb2xlLmxvZygndmFsdWUgb2YgbXNncHJvcHMnLCBtc2dwcm9wcylcbiAgICBzZXRNc2dzKG1zZ3Byb3BzKVxuICB9LCBbXSlcbiBcbiAvLyB1c2VFZmZlY3QoKCk9PnsgXG4gLy8gICBnZXREYXRhKCdodHRwOi8vMTY0LjkyLjE1Ny4xMjQ6MzAwMi9hcGkvZ2V0bWVzc2FnZXMnKVxuIC8vICAgIC50aGVuKGRhdGEgPT4ge1xuIC8vICAgICBjb25zb2xlLmxvZyhcImluc2lkZSBtZXNzYWdld2FsbCBhbmQgZGF0YTpcIiwgZGF0YSk7IC8vIEpTT04gZGF0YSBwYXJzZWQgYnkgYGRhdGEuanNvbigpYCBjYWxsXG4gLy8gICAgIHNldE1zZ3MoZGF0YS5tZXNzYWdlcylcbiAvLyAgIH0pO1xuIC8vICB9XG4gLy8gLCBbXSlcblxuICBjb25zdCBoYW5kbGVFbnRlciA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImlmIHlvdSBhcmUgc2VlaW5nIHRoaXMgbWVzc2FnZSBpdCdzIGJlY2F1c2UgdGhpcyBpcyBhIHdvcmsgaW4gcHJvZ3Jlc3NcIilcbiAgICBwb3N0RGF0YSgnaHR0cDovLzE2NC45Mi4xNTcuMTI0OjMwMDIvYXBpL2FkZG1lc3NhZ2UnLCB7IG1lc3NhZ2U6IGlucHV0dmFsfSlcbiAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcImluc2lkZSBtZXNzYWdld2FsbCBhbmQgZGF0YTpcIiwgZGF0YSk7IC8vIEpTT04gZGF0YSBwYXJzZWQgYnkgYGRhdGEuanNvbigpYCBjYWxsXG4gICAgICBzZXRNc2dzKGRhdGEubWVzc2FnZXMpXG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBkaXNwbGF5bWVzc2FnZXMgPSAoKSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmc6ICc1cHgnfX0+XG5cdGhlbGxvIGRpc3BsYXltZXNzYWdlc1xuICAgICAgICB7bXNncy5tYXAoKG1zZywga2V5KT0+e1xuICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICBzdHlsZT17e319XG4gICAgICAgICAgICBrZXk9e2tleX0+XG4gICAgICAgICAgICAgIHttc2d9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKSAgIFxuICB9XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogJ2NhbGMoMTAwJSAtIDIwcHgpJywgYmFja2dyb3VuZDogJyd9fT5cdFxuICAgICAgPGRpdiBzdHlsZT17e2Zsb2F0OiAnbGVmdCcsIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCB3aWR0aDogJzUwJSd9fT5cbiAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdpbmxpbmUtYmxvY2snfX0+XG4gICAgICAgICAgPHRleHRhcmVhIGNvbHM9XCI0MFwiIHJvd3M9XCIyMFwiIHN0eWxlPXt7cmVzaXplOiAnbm9uZSd9fSAgb25DaGFuZ2U9eyhlKT0+e3NldElucHV0dmFsKGUudGFyZ2V0LnZhbHVlKX19IHZhbHVlPXtpbnB1dHZhbH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxici8+XG4gICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ319PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kOiAnYmxhY2snLCBjb2xvcjogJ3doaXRlJ319IG9uQ2xpY2s9eygpPT5oYW5kbGVFbnRlcigpfT5FTlRFUjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCB3aWR0aDogJzUwJScsIGJhY2tncm91bmQ6J3JnYmEoMCwwLDAsMC4yKSd9fT5cbiAgICAgICAge2Rpc3BsYXltZXNzYWdlcygpfSAgXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZXNzYWdld2FsbChtc2dwcm9wcyl7XG4gIHJldHVybihcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbVwiLz5cbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgY3Jvc3NvcmlnaW4vPlxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QcmVzcytTdGFydCsyUCZmYW1pbHk9Um9ib3RvK01vbm86d2dodEAxMDAmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyY29udGFpbmVyfSBzdHlsZT17e3dpZHRoOiAnMTAwdncnfX0+XG4gICAgICAgIDxIZWFkZXIvPlxuICAgICAgPC9kaXY+IFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saXN0Y29udGFpbmVybGVmdH0+XG4gICAgICAgIDxCbG9nTGlzdC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnZWNvbnRlbnRjb250YWluZXJ9PlxuICAgICAgICBUaGlzIGlzIHRoZSBtZXNzYWdlIHdhbGxcblx0PE1lc3NhZ2VIYW5kbGVyIG1zZ3Byb3BzPXttc2dwcm9wc30vPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpc3Rjb250YWluZXJyaWdodH0+XG4gICAgICAgIDxQYWdlTGlzdC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCl7XG4gIGNvbnN0IG1zZ3Byb3BzID0gYXdhaXQgZ2V0RGF0YSgnaHR0cDovLzE2NC45Mi4xNTcuMTI0OjMwMDIvYXBpL2dldG1lc3NhZ2VzJylcbiAgY29uc29sZS5sb2coJ3ZhbHVlIG9mIG1zZ3MgZnJvbSBnZXREYXRhOiAnLCBtc2dwcm9wcylcbiAgcmV0dXJue1xuICAgIHByb3BzOiB7XG4gICAgICBtc2dwcm9wc1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbIkJsb2dMaXN0Iiwic3R5bGVzIiwiSGVhZGVyIiwiUGFnZUxpc3QiLCJIZWFkIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJwb3N0RGF0YSIsIk1lc3NhZ2VIYW5kbGVyIiwibXNncHJvcHMiLCJpbnB1dHZhbCIsInNldElucHV0dmFsIiwibXNncyIsInNldE1zZ3MiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlRW50ZXIiLCJtZXNzYWdlIiwidGhlbiIsImRhdGEiLCJtZXNzYWdlcyIsImRpc3BsYXltZXNzYWdlcyIsImRpdiIsInN0eWxlIiwicGFkZGluZyIsIm1hcCIsIm1zZyIsImtleSIsIndpZHRoIiwiYmFja2dyb3VuZCIsImZsb2F0IiwiZGlzcGxheSIsInRleHRhcmVhIiwiY29scyIsInJvd3MiLCJyZXNpemUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJyIiwiY29sb3IiLCJvbkNsaWNrIiwiTWVzc2FnZXdhbGwiLCJsaW5rIiwicmVsIiwiaHJlZiIsImNyb3Nzb3JpZ2luIiwiY2xhc3NOYW1lIiwiaGVhZGVyY29udGFpbmVyIiwibGlzdGNvbnRhaW5lcmxlZnQiLCJwYWdlY29udGVudGNvbnRhaW5lciIsImxpc3Rjb250YWluZXJyaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/messagewall.js\n");

/***/ })

});