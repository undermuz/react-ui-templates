"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var grommet_1 = require("grommet");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var FourServices = function (props) {
    var _a = props.id, id = _a === void 0 ? 0 : _a, _b = props.value, value = _b === void 0 ? defaults_1.default : _b;
    var _c = value.main, main = _c === void 0 ? defaults_1.default.main : _c, _d = value.services, services = _d === void 0 ? defaults_1.default.services : _d;
    var _e = main.title, title = _e === void 0 ? "" : _e;
    return ((0, jsx_runtime_1.jsx)(grommet_1.Box, tslib_1.__assign({ id: "block-".concat(id) }, { children: (0, jsx_runtime_1.jsxs)(grommet_1.Box, tslib_1.__assign({ width: "large" }, { children: [(0, jsx_runtime_1.jsx)(grommet_1.Box, { children: (0, jsx_runtime_1.jsx)(grommet_1.Heading, tslib_1.__assign({ level: 2 }, { children: title })) }), (0, jsx_runtime_1.jsxs)(grommet_1.Box, { children: [Object.keys(services).map(function (key) {
                            var item = services[key];
                            return ((0, jsx_runtime_1.jsxs)("div", tslib_1.__assign({ className: "block" }, { children: [(0, jsx_runtime_1.jsx)(grommet_1.Heading, tslib_1.__assign({ level: 3 }, { children: item.description })), (0, jsx_runtime_1.jsx)(grommet_1.Box, { children: (0, jsx_runtime_1.jsx)("div", { dangerouslySetInnerHTML: {
                                                __html: item.text,
                                            } }) })] }), key));
                        }), ","] })] })) })));
};
exports.default = FourServices;
