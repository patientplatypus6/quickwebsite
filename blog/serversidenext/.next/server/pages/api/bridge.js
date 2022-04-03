"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/bridge";
exports.ids = ["pages/api/bridge"];
exports.modules = {

/***/ "(api)/./pages/api/bridge.js":
/*!*****************************!*\
  !*** ./pages/api/bridge.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ golang)\n/* harmony export */ });\n/* harmony import */ var _utility_utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utility/utility */ \"(api)/./utility/utility.js\");\n\nfunction golang(req, res) {\n    console.log(\"value of req.body:\", req.body);\n    console.log(\"value of req.body.message:\", req.body.message);\n    if (req.method == \"POST\") {\n        (0,_utility_utility__WEBPACK_IMPORTED_MODULE_0__.postData)(\"http://164.92.157.124:8082/message/add\", {\n            message: req.body.message\n        }).then((data)=>{\n            console.log(\"return value from golang: \", data); // JSON data parsed by `data.json()` call\n        });\n    }\n    res.status(200).json({\n        name: \"John Doe\"\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYnJpZGdlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQThDO0FBRS9CLFNBQVNDLE1BQU0sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDdkNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixFQUFFSCxHQUFHLENBQUNJLElBQUksQ0FBQztJQUMzQ0YsT0FBTyxDQUFDQyxHQUFHLENBQUMsNEJBQTRCLEVBQUVILEdBQUcsQ0FBQ0ksSUFBSSxDQUFDQyxPQUFPLENBQUM7SUFDM0QsSUFBR0wsR0FBRyxDQUFDTSxNQUFNLElBQUUsTUFBTSxFQUFDO1FBQ3BCUiwwREFBUSxDQUFDLHdDQUF3QyxFQUFFO1lBQUVPLE9BQU8sRUFBRUwsR0FBRyxDQUFDSSxJQUFJLENBQUNDLE9BQU87U0FBQyxDQUFDLENBQy9FRSxJQUFJLENBQUNDLENBQUFBLElBQUksR0FBSTtZQUNaTixPQUFPLENBQUNDLEdBQUcsQ0FBQyw0QkFBNEIsRUFBRUssSUFBSSxDQUFDLENBQUMsQ0FBQyx5Q0FBeUM7U0FDM0YsQ0FBQyxDQUFDO0tBQ0o7SUFDRFAsR0FBRyxDQUFDUSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztRQUFFQyxJQUFJLEVBQUUsVUFBVTtLQUFFLENBQUM7Q0FDM0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYnJpZGdlLmpzP2QxMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtwb3N0RGF0YX0gZnJvbSAnLi4vLi4vdXRpbGl0eS91dGlsaXR5J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnb2xhbmcocmVxLCByZXMpIHtcbiAgY29uc29sZS5sb2coJ3ZhbHVlIG9mIHJlcS5ib2R5OicsIHJlcS5ib2R5KVxuICBjb25zb2xlLmxvZygndmFsdWUgb2YgcmVxLmJvZHkubWVzc2FnZTonLCByZXEuYm9keS5tZXNzYWdlKVxuICBpZihyZXEubWV0aG9kPT1cIlBPU1RcIil7XG4gICAgcG9zdERhdGEoJ2h0dHA6Ly8xNjQuOTIuMTU3LjEyNDo4MDgyL21lc3NhZ2UvYWRkJywgeyBtZXNzYWdlOiByZXEuYm9keS5tZXNzYWdlfSlcbiAgICAudGhlbihkYXRhID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwicmV0dXJuIHZhbHVlIGZyb20gZ29sYW5nOiBcIiwgZGF0YSk7IC8vIEpTT04gZGF0YSBwYXJzZWQgYnkgYGRhdGEuanNvbigpYCBjYWxsXG4gICAgfSk7XG4gIH1cbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBuYW1lOiAnSm9obiBEb2UnIH0pXG59XG4iXSwibmFtZXMiOlsicG9zdERhdGEiLCJnb2xhbmciLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsIm1lc3NhZ2UiLCJtZXRob2QiLCJ0aGVuIiwiZGF0YSIsInN0YXR1cyIsImpzb24iLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/bridge.js\n");

/***/ }),

/***/ "(api)/./utility/utility.js":
/*!****************************!*\
  !*** ./utility/utility.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"blogs\": () => (/* binding */ blogs),\n/* harmony export */   \"postData\": () => (/* binding */ postData)\n/* harmony export */ });\nconst blogs = {\n    1: {\n        title: \"Driving Places\",\n        route: \"/blog/drivingplaces\",\n        top: true\n    },\n    2: {\n        title: \"Freedom & Discourse\",\n        route: \"/blog/freedomdiscourse\"\n    },\n    3: {\n        title: \"Remaking The Remade Wheel\",\n        route: \"/blog/remakingremadewheel\"\n    },\n    4: {\n        title: \"Wish You Were Her\",\n        route: \"/blog/wishyouwereher\"\n    },\n    5: {\n        title: \"Weird & Wonderful\",\n        route: \"/blog/weirdwonderful\"\n    }\n};\nasync function postData(url, data) {\n    const response = await fetch(url, {\n        method: \"POST\",\n        cache: \"no-cache\",\n        credentials: \"same-origin\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        redirect: \"follow\",\n        referrerPolicy: \"no-referrer\",\n        body: JSON.stringify(data)\n    });\n    return response.json();\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlsaXR5L3V0aWxpdHkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxNQUFNQSxLQUFLLEdBQUc7QUFDVixLQUFDLEVBQUU7UUFDQ0MsS0FBSyxFQUFFLGdCQUFnQjtRQUN2QkMsS0FBSyxFQUFFLHFCQUFxQjtRQUM1QkMsR0FBRyxFQUFFLElBQUk7S0FDWjtBQUNELEtBQUMsRUFBRTtRQUNDRixLQUFLLEVBQUUscUJBQXFCO1FBQzVCQyxLQUFLLEVBQUUsd0JBQXdCO0tBQ2xDO0FBQ0QsS0FBQyxFQUFFO1FBQ0NELEtBQUssRUFBRSwyQkFBMkI7UUFDbENDLEtBQUssRUFBRSwyQkFBMkI7S0FDckM7QUFDRCxLQUFDLEVBQUU7UUFDQ0QsS0FBSyxFQUFFLG1CQUFtQjtRQUMxQkMsS0FBSyxFQUFFLHNCQUFzQjtLQUNoQztBQUNELEtBQUMsRUFBRTtRQUNDRCxLQUFLLEVBQUUsbUJBQW1CO1FBQzFCQyxLQUFLLEVBQUUsc0JBQXNCO0tBQ2hDO0NBQ0o7QUFFRCxlQUFlRSxRQUFRLENBQUNDLEdBQUcsRUFBRUMsSUFBSSxFQUFDO0lBQ2hDLE1BQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNILEdBQUcsRUFBRTtRQUNoQ0ksTUFBTSxFQUFFLE1BQU07UUFDZEMsS0FBSyxFQUFFLFVBQVU7UUFDakJDLFdBQVcsRUFBRSxhQUFhO1FBQzFCQyxPQUFPLEVBQUU7WUFDUCxjQUFjLEVBQUUsa0JBQWtCO1NBRW5DO1FBQ0RDLFFBQVEsRUFBRSxRQUFRO1FBQ2xCQyxjQUFjLEVBQUUsYUFBYTtRQUM3QkMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ1gsSUFBSSxDQUFDO0tBQzNCLENBQUM7SUFDRixPQUFPQyxRQUFRLENBQUNXLElBQUksRUFBRSxDQUFDO0NBQ3hCO0FBRXVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdXRpbGl0eS91dGlsaXR5LmpzP2NjZDQiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmNvbnN0IGJsb2dzID0ge1xuICAgIDE6IHtcbiAgICAgICAgdGl0bGU6ICdEcml2aW5nIFBsYWNlcycsXG4gICAgICAgIHJvdXRlOiAnL2Jsb2cvZHJpdmluZ3BsYWNlcycsXG4gICAgICAgIHRvcDogdHJ1ZVxuICAgIH0sXG4gICAgMjoge1xuICAgICAgICB0aXRsZTogJ0ZyZWVkb20gJiBEaXNjb3Vyc2UnLCBcbiAgICAgICAgcm91dGU6ICcvYmxvZy9mcmVlZG9tZGlzY291cnNlJywgXG4gICAgfSxcbiAgICAzOiB7XG4gICAgICAgIHRpdGxlOiAnUmVtYWtpbmcgVGhlIFJlbWFkZSBXaGVlbCcsIFxuICAgICAgICByb3V0ZTogJy9ibG9nL3JlbWFraW5ncmVtYWRld2hlZWwnLCBcbiAgICB9LFxuICAgIDQ6IHtcbiAgICAgICAgdGl0bGU6ICdXaXNoIFlvdSBXZXJlIEhlcicsIFxuICAgICAgICByb3V0ZTogJy9ibG9nL3dpc2h5b3V3ZXJlaGVyJywgXG4gICAgfSxcbiAgICA1OiB7XG4gICAgICAgIHRpdGxlOiAnV2VpcmQgJiBXb25kZXJmdWwnLCBcbiAgICAgICAgcm91dGU6ICcvYmxvZy93ZWlyZHdvbmRlcmZ1bCcsIFxuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gcG9zdERhdGEodXJsLCBkYXRhKXtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICBtZXRob2Q6ICdQT1NUJywgLy8gKkdFVCwgUE9TVCwgUFVULCBERUxFVEUsIGV0Y1xuICAgIGNhY2hlOiAnbm8tY2FjaGUnLCAvLyAqZGVmYXVsdCwgbm8tY2FjaGUsIHJlbG9hZCwgZm9yY2UtY2FjaGUsIG9ubHktaWYtY2FjaGVkXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsIC8vIGluY2x1ZGUsICpzYW1lLW9yaWdpbiwgb21pdFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIC8vICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICB9LFxuICAgIHJlZGlyZWN0OiAnZm9sbG93JywgLy8gbWFudWFsLCAqZm9sbG93LCBlcnJvclxuICAgIHJlZmVycmVyUG9saWN5OiAnbm8tcmVmZXJyZXInLCAvLyBuby1yZWZlcnJlciwgKm5vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlLCBvcmlnaW4sIG9yaWdpbi13aGVuLWNyb3NzLW9yaWdpbiwgc2FtZS1vcmlnaW4sIHN0cmljdC1vcmlnaW4sIHN0cmljdC1vcmlnaW4td2hlbi1jcm9zcy1vcmlnaW4sIHVuc2FmZS11cmxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxuICB9KTtcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn1cblxuZXhwb3J0IHtibG9ncywgcG9zdERhdGF9XG4iXSwibmFtZXMiOlsiYmxvZ3MiLCJ0aXRsZSIsInJvdXRlIiwidG9wIiwicG9zdERhdGEiLCJ1cmwiLCJkYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImNhY2hlIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwicmVkaXJlY3QiLCJyZWZlcnJlclBvbGljeSIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utility/utility.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/bridge.js"));
module.exports = __webpack_exports__;

})();