"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_Ryan_OneDrive_Documents_Github_warframe_market_webscraper_warscrapper_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Ryan_OneDrive_Documents_Github_warframe_market_webscraper_warscrapper_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Ryan_OneDrive_Documents_Github_warframe_market_webscraper_warscrapper_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar getData = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(C_Users_Ryan_OneDrive_Documents_Github_warframe_market_webscraper_warscrapper_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(item_name) {\n        var res, data;\n        return C_Users_Ryan_OneDrive_Documents_Github_warframe_market_webscraper_warscrapper_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch(\"http://localhost:3000/api/items/\" + item_name);\n                case 2:\n                    res = _ctx.sent;\n                    _ctx.next = 5;\n                    return res.json();\n                case 5:\n                    data = _ctx.sent;\n                    return _ctx.abrupt(\"return\", data);\n                case 7:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function getData(item_name) {\n        return _ref.apply(this, arguments);\n    };\n}();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]), data = ref[0], setData = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        getData().then(function(data) {\n            return setData(data);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"War Scrapper\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ryan\\\\OneDrive\\\\Documents\\\\Github\\\\warframe.market-webscraper\\\\warscrapper\\\\pages\\\\index.js\",\n                        lineNumber: 22,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"A website to get the lowest prices of items for trading\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ryan\\\\OneDrive\\\\Documents\\\\Github\\\\warframe.market-webscraper\\\\warscrapper\\\\pages\\\\index.js\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ryan\\\\OneDrive\\\\Documents\\\\Github\\\\warframe.market-webscraper\\\\warscrapper\\\\pages\\\\index.js\",\n                        lineNumber: 24,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Ryan\\\\OneDrive\\\\Documents\\\\Github\\\\warframe.market-webscraper\\\\warscrapper\\\\pages\\\\index.js\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().navbar),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().navbar_left),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                            href: \"/\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                src: \"vercel.svg\",\n                                alt: \"logo\",\n                                width: 100,\n                                height: 100\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ryan\\\\OneDrive\\\\Documents\\\\Github\\\\warframe.market-webscraper\\\\warscrapper\\\\pages\\\\index.js\",\n                                lineNumber: 30,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Ryan\\\\OneDrive\\\\Documents\\\\Github\\\\warframe.market-webscraper\\\\warscrapper\\\\pages\\\\index.js\",\n                            lineNumber: 29,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ryan\\\\OneDrive\\\\Documents\\\\Github\\\\warframe.market-webscraper\\\\warscrapper\\\\pages\\\\index.js\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().navbar_right),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                href: \"/\",\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ryan\\\\OneDrive\\\\Documents\\\\Github\\\\warframe.market-webscraper\\\\warscrapper\\\\pages\\\\index.js\",\n                                lineNumber: 34,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                href: \"/about\",\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ryan\\\\OneDrive\\\\Documents\\\\Github\\\\warframe.market-webscraper\\\\warscrapper\\\\pages\\\\index.js\",\n                                lineNumber: 35,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                href: \"/contact\",\n                                children: \"Contact\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ryan\\\\OneDrive\\\\Documents\\\\Github\\\\warframe.market-webscraper\\\\warscrapper\\\\pages\\\\index.js\",\n                                lineNumber: 36,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Ryan\\\\OneDrive\\\\Documents\\\\Github\\\\warframe.market-webscraper\\\\warscrapper\\\\pages\\\\index.js\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Ryan\\\\OneDrive\\\\Documents\\\\Github\\\\warframe.market-webscraper\\\\warscrapper\\\\pages\\\\index.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().bluefilter)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ryan\\\\OneDrive\\\\Documents\\\\Github\\\\warframe.market-webscraper\\\\warscrapper\\\\pages\\\\index.js\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().image),\n                        src: \"/wrBg2.jpg\",\n                        alt: \"War Scrapper Background\",\n                        width: 1920,\n                        height: 590\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ryan\\\\OneDrive\\\\Documents\\\\Github\\\\warframe.market-webscraper\\\\warscrapper\\\\pages\\\\index.js\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Ryan\\\\OneDrive\\\\Documents\\\\Github\\\\warframe.market-webscraper\\\\warscrapper\\\\pages\\\\index.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().footer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().copyright),\n                        children: \"2022 \\xa9 WarScrapper\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ryan\\\\OneDrive\\\\Documents\\\\Github\\\\warframe.market-webscraper\\\\warscrapper\\\\pages\\\\index.js\",\n                        lineNumber: 47,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                        href: \"#\",\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().tos),\n                        children: \"Terms of Service\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ryan\\\\OneDrive\\\\Documents\\\\Github\\\\warframe.market-webscraper\\\\warscrapper\\\\pages\\\\index.js\",\n                        lineNumber: 50,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                        href: \"https://warframe.market\",\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().warframemarket),\n                        children: \"Warframe Market\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ryan\\\\OneDrive\\\\Documents\\\\Github\\\\warframe.market-webscraper\\\\warscrapper\\\\pages\\\\index.js\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Ryan\\\\OneDrive\\\\Documents\\\\Github\\\\warframe.market-webscraper\\\\warscrapper\\\\pages\\\\index.js\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Ryan\\\\OneDrive\\\\Documents\\\\Github\\\\warframe.market-webscraper\\\\warscrapper\\\\pages\\\\index.js\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, this);\n};\n_s(Home, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUViLG9FQUFVO2tDQUFFLGtCQUVuQzs7Ozs7NEJBQUk7a0NBQ0osOERBQUN3QixHQUFDO3dCQUFDSCxJQUFJLEVBQUMseUJBQXlCO3dCQUFDUixTQUFTLEVBQUViLCtFQUFxQjtrQ0FBRSxpQkFFcEU7Ozs7OzRCQUFJOzs7Ozs7b0JBQ0M7Ozs7OztZQUNQLENBQ1Q7Q0FDSjtHQTlDdUJTLElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBnZXREYXRhID0gYXN5bmMgKGl0ZW1fbmFtZSkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvaXRlbXMvJyArIGl0ZW1fbmFtZSlcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICByZXR1cm4gZGF0YVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldERhdGEoKS50aGVuKGRhdGEgPT4gc2V0RGF0YShkYXRhKSlcclxuICAgIH0sIFtdKVxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5XYXIgU2NyYXBwZXI8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkEgd2Vic2l0ZSB0byBnZXQgdGhlIGxvd2VzdCBwcmljZXMgb2YgaXRlbXMgZm9yIHRyYWRpbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIHsvKiBuYXYgYmFyICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmJhcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmJhcl9sZWZ0fT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwidmVyY2VsLnN2Z1wiIGFsdD1cImxvZ29cIiB3aWR0aD17MTAwfSBoZWlnaHQ9ezEwMH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2YmFyX3JpZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPkhvbWU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9hYm91dFwiPkFib3V0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvY29udGFjdFwiPkNvbnRhY3Q8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ibHVlZmlsdGVyfT48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9IHNyYz1cIi93ckJnMi5qcGdcIiBhbHQ9XCJXYXIgU2NyYXBwZXIgQmFja2dyb3VuZFwiIHdpZHRoPXsxOTIwfSBoZWlnaHQ9ezU5MH0gLz5cclxuXHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuXHJcbiAgICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29weXJpZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICAyMDIyIMKpIFdhclNjcmFwcGVyXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9JyMnIGNsYXNzTmFtZT17c3R5bGVzLnRvc30+XHJcbiAgICAgICAgICAgICAgICAgICAgVGVybXMgb2YgU2VydmljZVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly93YXJmcmFtZS5tYXJrZXQnIGNsYXNzTmFtZT17c3R5bGVzLndhcmZyYW1lbWFya2V0fT5cclxuICAgICAgICAgICAgICAgICAgICBXYXJmcmFtZSBNYXJrZXRcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwic3R5bGVzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJnZXREYXRhIiwiaXRlbV9uYW1lIiwicmVzIiwiZGF0YSIsImZldGNoIiwianNvbiIsIkhvbWUiLCJzZXREYXRhIiwidGhlbiIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJuYXZiYXIiLCJuYXZiYXJfbGVmdCIsImEiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsIm5hdmJhcl9yaWdodCIsIm1haW4iLCJibHVlZmlsdGVyIiwiaW1hZ2UiLCJmb290ZXIiLCJjb3B5cmlnaHQiLCJ0b3MiLCJ3YXJmcmFtZW1hcmtldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});