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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Messagewall; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_bloglist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/bloglist */ \"./components/bloglist.js\");\n/* harmony import */ var _css_Main_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/Main.module.css */ \"./css/Main.module.css\");\n/* harmony import */ var _css_Main_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_Main_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header */ \"./components/header.js\");\n/* harmony import */ var _components_pagelist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/pagelist */ \"./components/pagelist.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utility_utility__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utility/utility */ \"./utility/utility.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar MessageHandler = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\"), inputval = ref[0], setInputval = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]), msgs = ref1[0], setMsgs = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        console.log(\"value of inputval\", inputval);\n    }, [\n        inputval\n    ]);\n    var handleEnter = function() {\n        console.log(\"if you are seeing this message it's because this is a work in progress\");\n        (0,_utility_utility__WEBPACK_IMPORTED_MODULE_6__.postData)(\"http://164.92.157.124:3002/api/addmessage\", {\n            message: inputval\n        }).then(function(data) {\n            console.log(\"inside messagewall and data:\", data); // JSON data parsed by `data.json()` call\n            setMsgs(data.messages);\n        });\n    };\n    var displaymessages = function() {\n        var _this2 = _this1;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {},\n            children: [\n                \"hello displaymessages\",\n                msgs.map(function(msg, key) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {},\n                        children: msg\n                    }, key, false, {\n                        fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, _this2);\n                })\n            ]\n        }, void 0, true, {\n            fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, _this1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"calc(100% - 20px)\",\n            background: \"orange\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    float: \"left\",\n                    display: \"inline-block\",\n                    width: \"50%\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"inline-block\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            cols: \"40\",\n                            rows: \"20\",\n                            style: {\n                                resize: \"none\"\n                            },\n                            onChange: function(e) {\n                                setInputval(e.target.value);\n                            },\n                            value: inputval\n                        }, void 0, false, {\n                            fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"inline-block\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                background: \"black\",\n                                color: \"white\"\n                            },\n                            onClick: function() {\n                                return handleEnter();\n                            },\n                            children: \"ENTER\"\n                        }, void 0, false, {\n                            fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"inline-block\",\n                    width: \"50%\",\n                    background: \"rgba(0,0,0,0.2)\"\n                },\n                children: displaymessages()\n            }, void 0, false, {\n                fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, _this);\n};\n_s(MessageHandler, \"4RhbPruDqNlnYhBmXTG6LDCKcKA=\");\n_c = MessageHandler;\nfunction Messagewall() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.googleapis.com\"\n                    }, void 0, false, {\n                        fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.gstatic.com\",\n                        crossorigin: true\n                    }, void 0, false, {\n                        fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Roboto+Mono:wght@100&display=swap\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_css_Main_module_css__WEBPACK_IMPORTED_MODULE_7___default().headercontainer),\n                style: {\n                    width: \"100vw\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_css_Main_module_css__WEBPACK_IMPORTED_MODULE_7___default().listcontainerleft),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_bloglist__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_css_Main_module_css__WEBPACK_IMPORTED_MODULE_7___default().pagecontentcontainer),\n                children: [\n                    \"This is the message wall\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MessageHandler, {}, void 0, false, {\n                        fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                        lineNumber: 78,\n                        columnNumber: 2\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_css_Main_module_css__WEBPACK_IMPORTED_MODULE_7___default().listcontainerright),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pagelist__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, this);\n};\n_c1 = Messagewall;\nvar _c, _c1;\n$RefreshReg$(_c, \"MessageHandler\");\n$RefreshReg$(_c1, \"Messagewall\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QnVCc0MsTUFBQUEsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9tZXNzYWdld2FsbC5qcz9kMWQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCbG9nTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2Jsb2dsaXN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9jc3MvTWFpbi5tb2R1bGUuY3NzJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcidcbmltcG9ydCBQYWdlTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL3BhZ2VsaXN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7cG9zdERhdGF9IGZyb20gJy4uL3V0aWxpdHkvdXRpbGl0eSdcblxuY29uc3QgTWVzc2FnZUhhbmRsZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtpbnB1dHZhbCwgc2V0SW5wdXR2YWxdID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgW21zZ3MsIHNldE1zZ3NdID0gdXNlU3RhdGUoW10pXG5cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgY29uc29sZS5sb2coJ3ZhbHVlIG9mIGlucHV0dmFsJywgaW5wdXR2YWwpXG4gIH0sW2lucHV0dmFsXSkgXG4gXG4gIGNvbnN0IGhhbmRsZUVudGVyID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiaWYgeW91IGFyZSBzZWVpbmcgdGhpcyBtZXNzYWdlIGl0J3MgYmVjYXVzZSB0aGlzIGlzIGEgd29yayBpbiBwcm9ncmVzc1wiKVxuICAgIHBvc3REYXRhKCdodHRwOi8vMTY0LjkyLjE1Ny4xMjQ6MzAwMi9hcGkvYWRkbWVzc2FnZScsIHsgbWVzc2FnZTogaW5wdXR2YWx9KVxuICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiaW5zaWRlIG1lc3NhZ2V3YWxsIGFuZCBkYXRhOlwiLCBkYXRhKTsgLy8gSlNPTiBkYXRhIHBhcnNlZCBieSBgZGF0YS5qc29uKClgIGNhbGxcbiAgICAgIHNldE1zZ3MoZGF0YS5tZXNzYWdlcylcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGRpc3BsYXltZXNzYWdlcyA9ICgpID0+IHtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IHN0eWxlPXt7fX0+XG5cdGhlbGxvIGRpc3BsYXltZXNzYWdlc1xuICAgICAgICB7bXNncy5tYXAoKG1zZywga2V5KT0+e1xuICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICBzdHlsZT17e319XG4gICAgICAgICAgICBrZXk9e2tleX0+XG4gICAgICAgICAgICAgIHttc2d9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKSAgIFxuICB9XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogJ2NhbGMoMTAwJSAtIDIwcHgpJywgYmFja2dyb3VuZDogJ29yYW5nZSd9fT5cdFxuICAgICAgPGRpdiBzdHlsZT17e2Zsb2F0OiAnbGVmdCcsIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCB3aWR0aDogJzUwJSd9fT5cbiAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdpbmxpbmUtYmxvY2snfX0+XG4gICAgICAgICAgPHRleHRhcmVhIGNvbHM9XCI0MFwiIHJvd3M9XCIyMFwiIHN0eWxlPXt7cmVzaXplOiAnbm9uZSd9fSAgb25DaGFuZ2U9eyhlKT0+e3NldElucHV0dmFsKGUudGFyZ2V0LnZhbHVlKX19IHZhbHVlPXtpbnB1dHZhbH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxici8+XG4gICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ319PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kOiAnYmxhY2snLCBjb2xvcjogJ3doaXRlJ319IG9uQ2xpY2s9eygpPT5oYW5kbGVFbnRlcigpfT5FTlRFUjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCB3aWR0aDogJzUwJScsIGJhY2tncm91bmQ6J3JnYmEoMCwwLDAsMC4yKSd9fT5cbiAgICAgICAge2Rpc3BsYXltZXNzYWdlcygpfSAgXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZXNzYWdld2FsbCgpe1xuICByZXR1cm4oXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb21cIi8+XG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiIGNyb3Nzb3JpZ2luLz5cbiAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UHJlc3MrU3RhcnQrMlAmZmFtaWx5PVJvYm90bytNb25vOndnaHRAMTAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIi8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcmNvbnRhaW5lcn0gc3R5bGU9e3t3aWR0aDogJzEwMHZ3J319PlxuICAgICAgICA8SGVhZGVyLz5cbiAgICAgIDwvZGl2PiBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlzdGNvbnRhaW5lcmxlZnR9PlxuICAgICAgICA8QmxvZ0xpc3QvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhZ2Vjb250ZW50Y29udGFpbmVyfT5cbiAgICAgICAgVGhpcyBpcyB0aGUgbWVzc2FnZSB3YWxsXG5cdDxNZXNzYWdlSGFuZGxlci8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlzdGNvbnRhaW5lcnJpZ2h0fT5cbiAgICAgICAgPFBhZ2VMaXN0Lz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiQmxvZ0xpc3QiLCJzdHlsZXMiLCJIZWFkZXIiLCJQYWdlTGlzdCIsIkhlYWQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInBvc3REYXRhIiwiTWVzc2FnZUhhbmRsZXIiLCJpbnB1dHZhbCIsInNldElucHV0dmFsIiwibXNncyIsInNldE1zZ3MiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlRW50ZXIiLCJtZXNzYWdlIiwidGhlbiIsImRhdGEiLCJtZXNzYWdlcyIsImRpc3BsYXltZXNzYWdlcyIsImRpdiIsInN0eWxlIiwibWFwIiwibXNnIiwia2V5Iiwid2lkdGgiLCJiYWNrZ3JvdW5kIiwiZmxvYXQiLCJkaXNwbGF5IiwidGV4dGFyZWEiLCJjb2xzIiwicm93cyIsInJlc2l6ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiYnIiLCJjb2xvciIsIm9uQ2xpY2siLCJNZXNzYWdld2FsbCIsImxpbmsiLCJyZWwiLCJocmVmIiwiY3Jvc3NvcmlnaW4iLCJjbGFzc05hbWUiLCJoZWFkZXJjb250YWluZXIiLCJsaXN0Y29udGFpbmVybGVmdCIsInBhZ2Vjb250ZW50Y29udGFpbmVyIiwibGlzdGNvbnRhaW5lcnJpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/messagewall.js\n");

/***/ })

});