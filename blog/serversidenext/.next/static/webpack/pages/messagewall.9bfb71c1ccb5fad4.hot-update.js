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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Messagewall; }\n/* harmony export */ });\n/* harmony import */ var _NEST_quickwebsite_blog_serversidenext_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _NEST_quickwebsite_blog_serversidenext_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_NEST_quickwebsite_blog_serversidenext_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_bloglist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/bloglist */ \"./components/bloglist.js\");\n/* harmony import */ var _css_Main_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/Main.module.css */ \"./css/Main.module.css\");\n/* harmony import */ var _css_Main_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_Main_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ \"./components/header.js\");\n/* harmony import */ var _components_pagelist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/pagelist */ \"./components/pagelist.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar MessageHandler = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(\"\"), inputval = ref[0], setInputval = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function() {\n        console.log(\"value of inputval\", inputval);\n    }, [\n        inputval\n    ]);\n    function postData(url, data) {\n        return _postData.apply(this, arguments);\n    }\n    function _postData() {\n        _postData = _asyncToGenerator(_NEST_quickwebsite_blog_serversidenext_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(url, data) {\n            var response;\n            return _NEST_quickwebsite_blog_serversidenext_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return fetch(url, {\n                            method: \"POST\",\n                            cache: \"no-cache\",\n                            credentials: \"same-origin\",\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            },\n                            redirect: \"follow\",\n                            referrerPolicy: \"no-referrer\",\n                            body: JSON.stringify(data)\n                        });\n                    case 2:\n                        response = _ctx.sent;\n                        return _ctx.abrupt(\"return\", response.json());\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _postData.apply(this, arguments);\n    }\n    var handleEnter = function() {\n        console.log(\"if you are seeing this message it's because this is a work in progress\");\n        postData(\"http://164.92.157.124:3002/api/bridge/golang\", {\n            answer: \"test\"\n        }).then(function(data) {\n            console.log(data); // JSON data parsed by `data.json()` call\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"inline-block\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"textarea\", {\n                    cols: \"40\",\n                    rows: \"20\",\n                    style: {\n                        resize: \"none\"\n                    },\n                    onChange: function(e) {\n                        setInputval(e.target.value);\n                    },\n                    value: inputval\n                }, void 0, false, {\n                    fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                    lineNumber: 42,\n                    columnNumber: 2\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"inline-block\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    style: {\n                        background: \"black\",\n                        color: \"white\"\n                    },\n                    onClick: handleEnter(),\n                    children: \"ENTER\"\n                }, void 0, false, {\n                    fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, _this);\n};\n_s(MessageHandler, \"X84oG7rPwBW3Op/2mv/xhVbwveQ=\");\n_c = MessageHandler;\nfunction Messagewall() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.googleapis.com\"\n                    }, void 0, false, {\n                        fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.gstatic.com\",\n                        crossorigin: true\n                    }, void 0, false, {\n                        fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Roboto+Mono:wght@100&display=swap\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_css_Main_module_css__WEBPACK_IMPORTED_MODULE_7___default().headercontainer),\n                style: {\n                    width: \"100vw\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_css_Main_module_css__WEBPACK_IMPORTED_MODULE_7___default().listcontainerleft),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_bloglist__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_css_Main_module_css__WEBPACK_IMPORTED_MODULE_7___default().pagecontentcontainer),\n                children: [\n                    \"This is the message wall\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MessageHandler, {}, void 0, false, {\n                        fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                        lineNumber: 68,\n                        columnNumber: 2\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_css_Main_module_css__WEBPACK_IMPORTED_MODULE_7___default().listcontainerright),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_pagelist__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/NEST/quickwebsite/blog/serversidenext/pages/messagewall.js\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this);\n};\n_c1 = Messagewall;\nvar _c, _c1;\n$RefreshReg$(_c, \"MessageHandler\");\n$RefreshReg$(_c1, \"Messagewall\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tZXNzYWdld2FsbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QztBQUNGO0FBQ0Y7QUFDSTtBQUNqQjtBQUNhOztBQUV6QyxJQUFNTyxjQUFjLEdBQUcsV0FBTTs7SUFDM0IsSUFBZ0NGLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFSOUMsUUFRaUIsR0FBaUJBLEdBQVksR0FBN0IsRUFSakIsV0FROEIsR0FBSUEsR0FBWSxHQUFoQjtJQUM1QkMsZ0RBQVMsQ0FBQyxXQUFJO1FBQ1pJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQixFQUFFSCxRQUFRLENBQUM7S0FDM0MsRUFBQztRQUFDQSxRQUFRO0tBQUMsQ0FBQzthQUdFSSxRQUFRLENBQUNDLEdBQUcsRUFBRUMsSUFBSTtlQUFsQkYsU0FBUTs7YUFBUkEsU0FBUTtRQUFSQSxTQUFRLEdBQXZCLHFMQUF3QkMsR0FBRyxFQUFFQyxJQUFJLEVBQUM7Z0JBQzFCQyxRQUFROzs7OzsrQkFBU0MsS0FBSyxDQUFDSCxHQUFHLEVBQUU7NEJBQ2hDSSxNQUFNLEVBQUUsTUFBTTs0QkFDZEMsS0FBSyxFQUFFLFVBQVU7NEJBQ2pCQyxXQUFXLEVBQUUsYUFBYTs0QkFDMUJDLE9BQU8sRUFBRTtnQ0FDUCxjQUFjLEVBQUUsa0JBQWtCOzZCQUVuQzs0QkFDREMsUUFBUSxFQUFFLFFBQVE7NEJBQ2xCQyxjQUFjLEVBQUUsYUFBYTs0QkFDN0JDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNYLElBQUksQ0FBQzt5QkFDM0IsQ0FBQzs7d0JBWElDLFFBQVEsWUFXWjtxREFDS0EsUUFBUSxDQUFDVyxJQUFJLEVBQUU7Ozs7OztTQUN2QjtlQWRjZCxTQUFROztJQWdCdkIsSUFBTWUsV0FBVyxHQUFHLFdBQU07UUFDeEJqQixPQUFPLENBQUNDLEdBQUcsQ0FBQyx3RUFBd0UsQ0FBQztRQUNyRkMsUUFBUSxDQUFDLDhDQUE4QyxFQUFFO1lBQUVnQixNQUFNLEVBQUUsTUFBTTtTQUFDLENBQUMsQ0FDekVDLElBQUksQ0FBQ2YsU0FBQUEsSUFBSSxFQUFJO1lBQ2JKLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxJQUFJLENBQUMsQ0FBQyxDQUFDLHlDQUF5QztTQUM3RCxDQUFDLENBQUM7S0FDSjtJQUVELHFCQUNFLDhEQUFDZ0IsS0FBRzs7MEJBQ0YsOERBQUNBLEtBQUc7Z0JBQUNDLEtBQUssRUFBRTtvQkFBQ0MsT0FBTyxFQUFFLGNBQWM7aUJBQUM7MEJBQzFDLDRFQUFDQyxVQUFRO29CQUFDQyxJQUFJLEVBQUMsSUFBSTtvQkFBQ0MsSUFBSSxFQUFDLElBQUk7b0JBQUNKLEtBQUssRUFBRTt3QkFBQ0ssTUFBTSxFQUFFLE1BQU07cUJBQUM7b0JBQUdDLFFBQVEsRUFBRSxTQUFDQyxDQUFDLEVBQUc7d0JBQUM3QixXQUFXLENBQUM2QixDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO3FCQUFDO29CQUFFQSxLQUFLLEVBQUVoQyxRQUFROzs7Ozt5QkFBSTs7Ozs7cUJBQzlHOzBCQUNOLDhEQUFDaUMsSUFBRTs7OztxQkFBRTswQkFDTCw4REFBQ1gsS0FBRztnQkFBQ0MsS0FBSyxFQUFFO29CQUFDQyxPQUFPLEVBQUUsY0FBYztpQkFBQzswQkFDbkMsNEVBQUNGLEtBQUc7b0JBQUNDLEtBQUssRUFBRTt3QkFBQ1csVUFBVSxFQUFFLE9BQU87d0JBQUVDLEtBQUssRUFBRSxPQUFPO3FCQUFDO29CQUFFQyxPQUFPLEVBQUVqQixXQUFXLEVBQUU7OEJBQUUsT0FBSzs7Ozs7eUJBQU07Ozs7O3FCQUNsRjs7Ozs7O2FBQ0YsQ0FDUDtDQUNGO0dBMUNLcEIsY0FBYztBQUFkQSxLQUFBQSxjQUFjO0FBNENMLFNBQVNzQyxXQUFXLEdBQUU7SUFDbkMscUJBQ0UsOERBQUNmLEtBQUc7OzBCQUNGLDhEQUFDMUIsa0RBQUk7O2tDQUNILDhEQUFDMEMsTUFBSTt3QkFBQ0MsR0FBRyxFQUFDLFlBQVk7d0JBQUNDLElBQUksRUFBQyw4QkFBOEI7Ozs7OzRCQUFFO2tDQUM1RCw4REFBQ0YsTUFBSTt3QkFBQ0MsR0FBRyxFQUFDLFlBQVk7d0JBQUNDLElBQUksRUFBQywyQkFBMkI7d0JBQUNDLFdBQVc7Ozs7OzRCQUFFO2tDQUNyRSw4REFBQ0gsTUFBSTt3QkFBQ0UsSUFBSSxFQUFDLGtHQUFrRzt3QkFBQ0QsR0FBRyxFQUFDLFlBQVk7Ozs7OzRCQUFFOzs7Ozs7b0JBQzNIOzBCQUNQLDhEQUFDakIsS0FBRztnQkFBQ29CLFNBQVMsRUFBRWpELDZFQUFzQjtnQkFBRThCLEtBQUssRUFBRTtvQkFBQ3FCLEtBQUssRUFBRSxPQUFPO2lCQUFDOzBCQUM3RCw0RUFBQ2xELDBEQUFNOzs7O3dCQUFFOzs7OztvQkFDTDswQkFDTiw4REFBQzRCLEtBQUc7Z0JBQUNvQixTQUFTLEVBQUVqRCwrRUFBd0I7MEJBQ3RDLDRFQUFDRCw0REFBUTs7Ozt3QkFBRTs7Ozs7b0JBQ1A7MEJBQ04sOERBQUM4QixLQUFHO2dCQUFDb0IsU0FBUyxFQUFFakQsa0ZBQTJCOztvQkFBRSwwQkFFbEQ7a0NBQUEsOERBQUNNLGNBQWM7Ozs7NEJBQUU7Ozs7OztvQkFDTjswQkFDTiw4REFBQ3VCLEtBQUc7Z0JBQUNvQixTQUFTLEVBQUVqRCxnRkFBeUI7MEJBQ3ZDLDRFQUFDRSw0REFBUTs7Ozt3QkFBRTs7Ozs7b0JBQ1A7Ozs7OztZQUNGLENBQ1A7Q0FDRjtBQXZCdUIwQyxNQUFBQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL21lc3NhZ2V3YWxsLmpzP2QxZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJsb2dMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvYmxvZ2xpc3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL2Nzcy9NYWluLm1vZHVsZS5jc3MnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJ1xuaW1wb3J0IFBhZ2VMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvcGFnZWxpc3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBNZXNzYWdlSGFuZGxlciA9ICgpID0+IHtcbiAgY29uc3QgW2lucHV0dmFsLCBzZXRJbnB1dHZhbF0gPSB1c2VTdGF0ZShcIlwiKVxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBjb25zb2xlLmxvZygndmFsdWUgb2YgaW5wdXR2YWwnLCBpbnB1dHZhbClcbiAgfSxbaW5wdXR2YWxdKSBcblxuXG4gIGFzeW5jIGZ1bmN0aW9uIHBvc3REYXRhKHVybCwgZGF0YSl7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLCAvLyAqR0VULCBQT1NULCBQVVQsIERFTEVURSwgZXRjXG4gICAgICBjYWNoZTogJ25vLWNhY2hlJywgLy8gKmRlZmF1bHQsIG5vLWNhY2hlLCByZWxvYWQsIGZvcmNlLWNhY2hlLCBvbmx5LWlmLWNhY2hlZFxuICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsIC8vIGluY2x1ZGUsICpzYW1lLW9yaWdpbiwgb21pdFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIC8vICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgIH0sXG4gICAgICByZWRpcmVjdDogJ2ZvbGxvdycsIC8vIG1hbnVhbCwgKmZvbGxvdywgZXJyb3JcbiAgICAgIHJlZmVycmVyUG9saWN5OiAnbm8tcmVmZXJyZXInLCAvLyBuby1yZWZlcnJlciwgKm5vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlLCBvcmlnaW4sIG9yaWdpbi13aGVuLWNyb3NzLW9yaWdpbiwgc2FtZS1vcmlnaW4sIHN0cmljdC1vcmlnaW4sIHN0cmljdC1vcmlnaW4td2hlbi1jcm9zcy1vcmlnaW4sIHVuc2FmZS11cmxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTsgXG4gIH1cbiBcbiAgY29uc3QgaGFuZGxlRW50ZXIgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJpZiB5b3UgYXJlIHNlZWluZyB0aGlzIG1lc3NhZ2UgaXQncyBiZWNhdXNlIHRoaXMgaXMgYSB3b3JrIGluIHByb2dyZXNzXCIpXG4gICAgcG9zdERhdGEoJ2h0dHA6Ly8xNjQuOTIuMTU3LjEyNDozMDAyL2FwaS9icmlkZ2UvZ29sYW5nJywgeyBhbnN3ZXI6ICd0ZXN0J30pXG4gICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7IC8vIEpTT04gZGF0YSBwYXJzZWQgYnkgYGRhdGEuanNvbigpYCBjYWxsXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4oXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ319PlxuXHQ8dGV4dGFyZWEgY29scz1cIjQwXCIgcm93cz1cIjIwXCIgc3R5bGU9e3tyZXNpemU6ICdub25lJ319ICBvbkNoYW5nZT17KGUpPT57c2V0SW5wdXR2YWwoZS50YXJnZXQudmFsdWUpfX0gdmFsdWU9e2lucHV0dmFsfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnIvPlxuICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdpbmxpbmUtYmxvY2snfX0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kOiAnYmxhY2snLCBjb2xvcjogJ3doaXRlJ319IG9uQ2xpY2s9e2hhbmRsZUVudGVyKCl9PkVOVEVSPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZXNzYWdld2FsbCgpe1xuICByZXR1cm4oXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb21cIi8+XG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiIGNyb3Nzb3JpZ2luLz5cbiAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UHJlc3MrU3RhcnQrMlAmZmFtaWx5PVJvYm90bytNb25vOndnaHRAMTAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIi8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcmNvbnRhaW5lcn0gc3R5bGU9e3t3aWR0aDogJzEwMHZ3J319PlxuICAgICAgICA8SGVhZGVyLz5cbiAgICAgIDwvZGl2PiBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlzdGNvbnRhaW5lcmxlZnR9PlxuICAgICAgICA8QmxvZ0xpc3QvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhZ2Vjb250ZW50Y29udGFpbmVyfT5cbiAgICAgICAgVGhpcyBpcyB0aGUgbWVzc2FnZSB3YWxsXG5cdDxNZXNzYWdlSGFuZGxlci8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlzdGNvbnRhaW5lcnJpZ2h0fT5cbiAgICAgICAgPFBhZ2VMaXN0Lz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiQmxvZ0xpc3QiLCJzdHlsZXMiLCJIZWFkZXIiLCJQYWdlTGlzdCIsIkhlYWQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk1lc3NhZ2VIYW5kbGVyIiwiaW5wdXR2YWwiLCJzZXRJbnB1dHZhbCIsImNvbnNvbGUiLCJsb2ciLCJwb3N0RGF0YSIsInVybCIsImRhdGEiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiY2FjaGUiLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJyZWRpcmVjdCIsInJlZmVycmVyUG9saWN5IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJqc29uIiwiaGFuZGxlRW50ZXIiLCJhbnN3ZXIiLCJ0aGVuIiwiZGl2Iiwic3R5bGUiLCJkaXNwbGF5IiwidGV4dGFyZWEiLCJjb2xzIiwicm93cyIsInJlc2l6ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiYnIiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJvbkNsaWNrIiwiTWVzc2FnZXdhbGwiLCJsaW5rIiwicmVsIiwiaHJlZiIsImNyb3Nzb3JpZ2luIiwiY2xhc3NOYW1lIiwiaGVhZGVyY29udGFpbmVyIiwid2lkdGgiLCJsaXN0Y29udGFpbmVybGVmdCIsInBhZ2Vjb250ZW50Y29udGFpbmVyIiwibGlzdGNvbnRhaW5lcnJpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/messagewall.js\n");

/***/ })

});