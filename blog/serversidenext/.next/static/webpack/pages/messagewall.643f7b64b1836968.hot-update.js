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

/***/ "./utility/utility.js":
/*!****************************!*\
  !*** ./utility/utility.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"blogs\": function() { return /* binding */ blogs; },\n/* harmony export */   \"postData\": function() { return /* binding */ postData; },\n/* harmony export */   \"getData\": function() { return /* binding */ getData; }\n/* harmony export */ });\n/* harmony import */ var _NEST_quickwebsite_blog_serversidenext_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _NEST_quickwebsite_blog_serversidenext_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_NEST_quickwebsite_blog_serversidenext_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar blogs = {\n    1: {\n        title: \"Driving Places\",\n        route: \"/blog/drivingplaces\",\n        top: true\n    },\n    2: {\n        title: \"Freedom & Discourse\",\n        route: \"/blog/freedomdiscourse\"\n    },\n    3: {\n        title: \"Remaking The Remade Wheel\",\n        route: \"/blog/remakingremadewheel\"\n    },\n    4: {\n        title: \"Wish You Were Her\",\n        route: \"/blog/wishyouwereher\"\n    },\n    5: {\n        title: \"Weird & Wonderful\",\n        route: \"/blog/weirdwonderful\"\n    }\n};\nfunction postData(url, data) {\n    return _postData.apply(this, arguments);\n}\nfunction _postData() {\n    _postData = _asyncToGenerator(_NEST_quickwebsite_blog_serversidenext_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(url, data) {\n        var response;\n        return _NEST_quickwebsite_blog_serversidenext_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch(url, {\n                        method: \"POST\",\n                        cache: \"no-cache\",\n                        credentials: \"same-origin\",\n                        headers: {\n                            \"Content-Type\": \"application/json\"\n                        },\n                        redirect: \"follow\",\n                        referrerPolicy: \"no-referrer\",\n                        body: JSON.stringify(data)\n                    });\n                case 2:\n                    response = _ctx.sent;\n                    return _ctx.abrupt(\"return\", response.json());\n                case 4:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _postData.apply(this, arguments);\n}\nfunction getData(url) {\n    return _getData.apply(this, arguments);\n}\nfunction _getData() {\n    _getData = _asyncToGenerator(_NEST_quickwebsite_blog_serversidenext_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(url) {\n        var response;\n        return _NEST_quickwebsite_blog_serversidenext_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch(url, {\n                        method: \"GET\",\n                        cache: \"no-cache\",\n                        credentials: \"same-origin\",\n                        headers: {\n                            \"Content-Type\": \"application/json\"\n                        },\n                        redirect: \"follow\",\n                        referrerPolicy: \"no-referrer\"\n                    });\n                case 2:\n                    response = _ctx.sent;\n                    return _ctx.abrupt(\"return\", response.json());\n                case 4:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _getData.apply(this, arguments);\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlsaXR5L3V0aWxpdHkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsS0FBSyxHQUFHO0FBQ1YsS0FBQyxFQUFFO1FBQ0NDLEtBQUssRUFBRSxnQkFBZ0I7UUFDdkJDLEtBQUssRUFBRSxxQkFBcUI7UUFDNUJDLEdBQUcsRUFBRSxJQUFJO0tBQ1o7QUFDRCxLQUFDLEVBQUU7UUFDQ0YsS0FBSyxFQUFFLHFCQUFxQjtRQUM1QkMsS0FBSyxFQUFFLHdCQUF3QjtLQUNsQztBQUNELEtBQUMsRUFBRTtRQUNDRCxLQUFLLEVBQUUsMkJBQTJCO1FBQ2xDQyxLQUFLLEVBQUUsMkJBQTJCO0tBQ3JDO0FBQ0QsS0FBQyxFQUFFO1FBQ0NELEtBQUssRUFBRSxtQkFBbUI7UUFDMUJDLEtBQUssRUFBRSxzQkFBc0I7S0FDaEM7QUFDRCxLQUFDLEVBQUU7UUFDQ0QsS0FBSyxFQUFFLG1CQUFtQjtRQUMxQkMsS0FBSyxFQUFFLHNCQUFzQjtLQUNoQztDQUNKO1NBRWNFLFFBQVEsQ0FBQ0MsR0FBRyxFQUFFQyxJQUFJO1dBQWxCRixTQUFROztTQUFSQSxTQUFRO0lBQVJBLFNBQVEsR0FBdkIscUxBQXdCQyxHQUFHLEVBQUVDLElBQUksRUFBQztZQUMxQkMsUUFBUTs7Ozs7MkJBQVNDLEtBQUssQ0FBQ0gsR0FBRyxFQUFFO3dCQUNoQ0ksTUFBTSxFQUFFLE1BQU07d0JBQ2RDLEtBQUssRUFBRSxVQUFVO3dCQUNqQkMsV0FBVyxFQUFFLGFBQWE7d0JBQzFCQyxPQUFPLEVBQUU7NEJBQ1AsY0FBYyxFQUFFLGtCQUFrQjt5QkFFbkM7d0JBQ0RDLFFBQVEsRUFBRSxRQUFRO3dCQUNsQkMsY0FBYyxFQUFFLGFBQWE7d0JBQzdCQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDWCxJQUFJLENBQUM7cUJBQzNCLENBQUM7O29CQVhJQyxRQUFRLFlBV1o7aURBQ0tBLFFBQVEsQ0FBQ1csSUFBSSxFQUFFOzs7Ozs7S0FDdkI7V0FkY2QsU0FBUTs7U0FnQlJlLE9BQU8sQ0FBQ2QsR0FBRztXQUFYYyxRQUFPOztTQUFQQSxRQUFPO0lBQVBBLFFBQU8sR0FBdEIscUxBQXVCZCxHQUFHLEVBQUM7WUFDbkJFLFFBQVE7Ozs7OzJCQUFTQyxLQUFLLENBQUNILEdBQUcsRUFBRTt3QkFDaENJLE1BQU0sRUFBRSxLQUFLO3dCQUNiQyxLQUFLLEVBQUUsVUFBVTt3QkFDakJDLFdBQVcsRUFBRSxhQUFhO3dCQUMxQkMsT0FBTyxFQUFFOzRCQUNQLGNBQWMsRUFBRSxrQkFBa0I7eUJBRW5DO3dCQUNEQyxRQUFRLEVBQUUsUUFBUTt3QkFDbEJDLGNBQWMsRUFBRSxhQUFhO3FCQUM5QixDQUFDOztvQkFWSVAsUUFBUSxZQVVaO2lEQUNLQSxRQUFRLENBQUNXLElBQUksRUFBRTs7Ozs7O0tBQ3ZCO1dBYmNDLFFBQU87O0FBZVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbGl0eS91dGlsaXR5LmpzP2NjZDQiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmNvbnN0IGJsb2dzID0ge1xuICAgIDE6IHtcbiAgICAgICAgdGl0bGU6ICdEcml2aW5nIFBsYWNlcycsXG4gICAgICAgIHJvdXRlOiAnL2Jsb2cvZHJpdmluZ3BsYWNlcycsXG4gICAgICAgIHRvcDogdHJ1ZVxuICAgIH0sXG4gICAgMjoge1xuICAgICAgICB0aXRsZTogJ0ZyZWVkb20gJiBEaXNjb3Vyc2UnLCBcbiAgICAgICAgcm91dGU6ICcvYmxvZy9mcmVlZG9tZGlzY291cnNlJywgXG4gICAgfSxcbiAgICAzOiB7XG4gICAgICAgIHRpdGxlOiAnUmVtYWtpbmcgVGhlIFJlbWFkZSBXaGVlbCcsIFxuICAgICAgICByb3V0ZTogJy9ibG9nL3JlbWFraW5ncmVtYWRld2hlZWwnLCBcbiAgICB9LFxuICAgIDQ6IHtcbiAgICAgICAgdGl0bGU6ICdXaXNoIFlvdSBXZXJlIEhlcicsIFxuICAgICAgICByb3V0ZTogJy9ibG9nL3dpc2h5b3V3ZXJlaGVyJywgXG4gICAgfSxcbiAgICA1OiB7XG4gICAgICAgIHRpdGxlOiAnV2VpcmQgJiBXb25kZXJmdWwnLCBcbiAgICAgICAgcm91dGU6ICcvYmxvZy93ZWlyZHdvbmRlcmZ1bCcsIFxuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gcG9zdERhdGEodXJsLCBkYXRhKXtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICBtZXRob2Q6ICdQT1NUJywgLy8gKkdFVCwgUE9TVCwgUFVULCBERUxFVEUsIGV0Y1xuICAgIGNhY2hlOiAnbm8tY2FjaGUnLCAvLyAqZGVmYXVsdCwgbm8tY2FjaGUsIHJlbG9hZCwgZm9yY2UtY2FjaGUsIG9ubHktaWYtY2FjaGVkXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsIC8vIGluY2x1ZGUsICpzYW1lLW9yaWdpbiwgb21pdFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIC8vICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICB9LFxuICAgIHJlZGlyZWN0OiAnZm9sbG93JywgLy8gbWFudWFsLCAqZm9sbG93LCBlcnJvclxuICAgIHJlZmVycmVyUG9saWN5OiAnbm8tcmVmZXJyZXInLCAvLyBuby1yZWZlcnJlciwgKm5vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlLCBvcmlnaW4sIG9yaWdpbi13aGVuLWNyb3NzLW9yaWdpbiwgc2FtZS1vcmlnaW4sIHN0cmljdC1vcmlnaW4sIHN0cmljdC1vcmlnaW4td2hlbi1jcm9zcy1vcmlnaW4sIHVuc2FmZS11cmxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxuICB9KTtcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YSh1cmwpe1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgY2FjaGU6ICduby1jYWNoZScsIC8vICpkZWZhdWx0LCBuby1jYWNoZSwgcmVsb2FkLCBmb3JjZS1jYWNoZSwgb25seS1pZi1jYWNoZWRcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJywgLy8gaW5jbHVkZSwgKnNhbWUtb3JpZ2luLCBvbWl0XG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgLy8gJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgIH0sXG4gICAgcmVkaXJlY3Q6ICdmb2xsb3cnLCAvLyBtYW51YWwsICpmb2xsb3csIGVycm9yXG4gICAgcmVmZXJyZXJQb2xpY3k6ICduby1yZWZlcnJlcicsIC8vIG5vLXJlZmVycmVyLCAqbm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGUsIG9yaWdpbiwgb3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luLCBzYW1lLW9yaWdpbiwgc3RyaWN0LW9yaWdpbiwgc3RyaWN0LW9yaWdpbi13aGVuLWNyb3NzLW9yaWdpbiwgdW5zYWZlLXVybFxuICB9KTtcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn1cblxuZXhwb3J0IHtibG9ncywgcG9zdERhdGEsIGdldERhdGF9XG4iXSwibmFtZXMiOlsiYmxvZ3MiLCJ0aXRsZSIsInJvdXRlIiwidG9wIiwicG9zdERhdGEiLCJ1cmwiLCJkYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImNhY2hlIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwicmVkaXJlY3QiLCJyZWZlcnJlclBvbGljeSIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwianNvbiIsImdldERhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utility/utility.js\n");

/***/ })

});