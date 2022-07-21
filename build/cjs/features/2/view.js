"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var grommet_1 = require("grommet");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var Feature1 = function (props) {
    var _a = props.value, value = _a === void 0 ? defaults_1.default : _a;
    var _b = value.title, title = _b === void 0 ? defaults_1.default.title : _b, _c = value.subtitle, subtitle = _c === void 0 ? defaults_1.default.subtitle : _c, _d = value.description, description = _d === void 0 ? defaults_1.default.description : _d;
    return ((0, jsx_runtime_1.jsx)(grommet_1.Box, tslib_1.__assign({ align: "center", fill: "horizontal" }, { children: (0, jsx_runtime_1.jsx)(grommet_1.Box, tslib_1.__assign({ width: "xlarge" }, { children: (0, jsx_runtime_1.jsxs)(grommet_1.Box, tslib_1.__assign({ direction: "row", gap: "xlarge", pad: { vertical: "medium" } }, { children: [(0, jsx_runtime_1.jsx)(grommet_1.Box, {}), (0, jsx_runtime_1.jsxs)(grommet_1.Box, tslib_1.__assign({ direction: "column", justify: "center", fill: "horizontal" }, { children: [(0, jsx_runtime_1.jsx)(grommet_1.Heading, tslib_1.__assign({ color: "dark-1", level: 2, size: "medium", margin: { top: "none", bottom: "medium" } }, { children: title })), (0, jsx_runtime_1.jsx)(grommet_1.Paragraph, tslib_1.__assign({ color: "dark-2", margin: { top: "xsmall", bottom: "xsmall" }, fill: true, size: "medium", style: {
                                    lineHeight: "30px",
                                } }, { children: description }))] }))] })) })) })));
};
exports.default = Feature1;
