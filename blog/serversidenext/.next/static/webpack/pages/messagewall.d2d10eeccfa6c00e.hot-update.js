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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Messagewall; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_bloglist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/bloglist */ \"./components/bloglist.js\");\n/* harmony import */ var _css_Main_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/Main.module.css */ \"./css/Main.module.css\");\n/* harmony import */ var _css_Main_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_Main_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header */ \"./components/header.js\");\n/* harmony import */ var _components_pagelist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/pagelist */ \"./components/pagelist.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utility_utility__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utility/utility */ \"./utility/utility.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar MessageHandler = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\"), inputval = ref[0], setInputval = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]), msgs = ref1[0], setMsgs = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        console.log(\"value of inputval\", inputval);\n    }, [\n        inputval\n    ]);\n    var handleEnter = function() {\n        console.log(\"if you are seeing this message it's because this is a work in progress\");\n        (0,_utility_utility__WEBPACK_IMPORTED_MODULE_6__.postData)(\"http://164.92.157.124:3002/api/addmessage\", {\n            message: inputval\n        }).then(function(data) {\n            console.log(\"inside messagewall and data:\", data); // JSON data parsed by `data.json()` call\n            setMsgs(data.messages);\n        });\n    };\n    var displaymessages = function() {\n        var _this2 = _this1;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {},\n            children: [\n                \"hello displaymessages\",\n                msgs.map(function(msg, key) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {},\n                        children: msg\n                    }, key, false, {\n                        fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, _this2);\n                })\n            ]\n        }, void 0, true, {\n            fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, _this1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100%\",\n            background: \"orange\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    float: \"left\",\n                    display: \"inline-block\",\n                    width: \"30vw\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"inline-block\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            cols: \"40\",\n                            rows: \"20\",\n                            style: {\n                                resize: \"none\"\n                            },\n                            onChange: function(e) {\n                                setInputval(e.target.value);\n                            },\n                            value: inputval\n                        }, void 0, false, {\n                            fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"inline-block\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                background: \"black\",\n                                color: \"white\"\n                            },\n                            onClick: function() {\n                                return handleEnter();\n                            },\n                            children: \"ENTER\"\n                        }, void 0, false, {\n                            fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"inline-block\",\n                    width: \"20vw\",\n                    background: \"rgba(0,0,0,0.2)\"\n                },\n                children: displaymessages()\n            }, void 0, false, {\n                fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, _this);\n};\n_s(MessageHandler, \"4RhbPruDqNlnYhBmXTG6LDCKcKA=\");\n_c = MessageHandler;\nfunction Messagewall() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.googleapis.com\"\n                    }, void 0, false, {\n                        fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.gstatic.com\",\n                        crossorigin: true\n                    }, void 0, false, {\n                        fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Roboto+Mono:wght@100&display=swap\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_css_Main_module_css__WEBPACK_IMPORTED_MODULE_7___default().headercontainer),\n                style: {\n                    width: \"100vw\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_css_Main_module_css__WEBPACK_IMPORTED_MODULE_7___default().listcontainerleft),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_bloglist__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_css_Main_module_css__WEBPACK_IMPORTED_MODULE_7___default().pagecontentcontainer),\n                children: [\n                    \"This is the message wall\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MessageHandler, {}, void 0, false, {\n                        fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                        lineNumber: 78,\n                        columnNumber: 2\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_css_Main_module_css__WEBPACK_IMPORTED_MODULE_7___default().listcontainerright),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pagelist__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, this);\n};\n_c1 = Messagewall;\nvar _c, _c1;\n$RefreshReg$(_c, \"MessageHandler\");\n$RefreshReg$(_c1, \"Messagewall\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QnNDLE1BQUFBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWVzc2FnZXdhbGwuanM/ZDFkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmxvZ0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9ibG9nbGlzdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vY3NzL01haW4ubW9kdWxlLmNzcydcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInXG5pbXBvcnQgUGFnZUxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9wYWdlbGlzdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge3Bvc3REYXRhfSBmcm9tICcuLi91dGlsaXR5L3V0aWxpdHknXG5cbmNvbnN0IE1lc3NhZ2VIYW5kbGVyID0gKCkgPT4ge1xuICBjb25zdCBbaW5wdXR2YWwsIHNldElucHV0dmFsXSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFttc2dzLCBzZXRNc2dzXSA9IHVzZVN0YXRlKFtdKVxuXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGNvbnNvbGUubG9nKCd2YWx1ZSBvZiBpbnB1dHZhbCcsIGlucHV0dmFsKVxuICB9LFtpbnB1dHZhbF0pIFxuIFxuICBjb25zdCBoYW5kbGVFbnRlciA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImlmIHlvdSBhcmUgc2VlaW5nIHRoaXMgbWVzc2FnZSBpdCdzIGJlY2F1c2UgdGhpcyBpcyBhIHdvcmsgaW4gcHJvZ3Jlc3NcIilcbiAgICBwb3N0RGF0YSgnaHR0cDovLzE2NC45Mi4xNTcuMTI0OjMwMDIvYXBpL2FkZG1lc3NhZ2UnLCB7IG1lc3NhZ2U6IGlucHV0dmFsfSlcbiAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcImluc2lkZSBtZXNzYWdld2FsbCBhbmQgZGF0YTpcIiwgZGF0YSk7IC8vIEpTT04gZGF0YSBwYXJzZWQgYnkgYGRhdGEuanNvbigpYCBjYWxsXG4gICAgICBzZXRNc2dzKGRhdGEubWVzc2FnZXMpXG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBkaXNwbGF5bWVzc2FnZXMgPSAoKSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBzdHlsZT17e319PlxuXHRoZWxsbyBkaXNwbGF5bWVzc2FnZXNcbiAgICAgICAge21zZ3MubWFwKChtc2csIGtleSk9PntcbiAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgc3R5bGU9e3t9fVxuICAgICAgICAgICAga2V5PXtrZXl9PlxuICAgICAgICAgICAgICB7bXNnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICkgICBcbiAgfVxuXG4gIHJldHVybihcbiAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZDogJ29yYW5nZSd9fT5cdFxuICAgICAgPGRpdiBzdHlsZT17e2Zsb2F0OiAnbGVmdCcsIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCB3aWR0aDogJzMwdncnfX0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ319PlxuICAgICAgICAgIDx0ZXh0YXJlYSBjb2xzPVwiNDBcIiByb3dzPVwiMjBcIiBzdHlsZT17e3Jlc2l6ZTogJ25vbmUnfX0gIG9uQ2hhbmdlPXsoZSk9PntzZXRJbnB1dHZhbChlLnRhcmdldC52YWx1ZSl9fSB2YWx1ZT17aW5wdXR2YWx9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnIvPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2lubGluZS1ibG9jayd9fT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZDogJ2JsYWNrJywgY29sb3I6ICd3aGl0ZSd9fSBvbkNsaWNrPXsoKT0+aGFuZGxlRW50ZXIoKX0+RU5URVI8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgd2lkdGg6ICcyMHZ3JywgYmFja2dyb3VuZDoncmdiYSgwLDAsMCwwLjIpJ319PlxuICAgICAgICB7ZGlzcGxheW1lc3NhZ2VzKCl9ICBcbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lc3NhZ2V3YWxsKCl7XG4gIHJldHVybihcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbVwiLz5cbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgY3Jvc3NvcmlnaW4vPlxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QcmVzcytTdGFydCsyUCZmYW1pbHk9Um9ib3RvK01vbm86d2dodEAxMDAmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyY29udGFpbmVyfSBzdHlsZT17e3dpZHRoOiAnMTAwdncnfX0+XG4gICAgICAgIDxIZWFkZXIvPlxuICAgICAgPC9kaXY+IFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saXN0Y29udGFpbmVybGVmdH0+XG4gICAgICAgIDxCbG9nTGlzdC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnZWNvbnRlbnRjb250YWluZXJ9PlxuICAgICAgICBUaGlzIGlzIHRoZSBtZXNzYWdlIHdhbGxcblx0PE1lc3NhZ2VIYW5kbGVyLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saXN0Y29udGFpbmVycmlnaHR9PlxuICAgICAgICA8UGFnZUxpc3QvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJCbG9nTGlzdCIsInN0eWxlcyIsIkhlYWRlciIsIlBhZ2VMaXN0IiwiSGVhZCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwicG9zdERhdGEiLCJNZXNzYWdlSGFuZGxlciIsImlucHV0dmFsIiwic2V0SW5wdXR2YWwiLCJtc2dzIiwic2V0TXNncyIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVFbnRlciIsIm1lc3NhZ2UiLCJ0aGVuIiwiZGF0YSIsIm1lc3NhZ2VzIiwiZGlzcGxheW1lc3NhZ2VzIiwiZGl2Iiwic3R5bGUiLCJtYXAiLCJtc2ciLCJrZXkiLCJ3aWR0aCIsImJhY2tncm91bmQiLCJmbG9hdCIsImRpc3BsYXkiLCJ0ZXh0YXJlYSIsImNvbHMiLCJyb3dzIiwicmVzaXplIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJiciIsImNvbG9yIiwib25DbGljayIsIk1lc3NhZ2V3YWxsIiwibGluayIsInJlbCIsImhyZWYiLCJjcm9zc29yaWdpbiIsImNsYXNzTmFtZSIsImhlYWRlcmNvbnRhaW5lciIsImxpc3Rjb250YWluZXJsZWZ0IiwicGFnZWNvbnRlbnRjb250YWluZXIiLCJsaXN0Y29udGFpbmVycmlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/messagewall.js\n");

/***/ })

});