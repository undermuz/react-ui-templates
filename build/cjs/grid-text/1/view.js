"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var grommet_1 = require("grommet");
var react_1 = require("react");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var GridText = function (props) {
    var _a = props.id, id = _a === void 0 ? 0 : _a, _b = props.value, value = _b === void 0 ? defaults_1.default : _b;
    var _c = value.title, title = _c === void 0 ? "" : _c, _d = value.list, list = _d === void 0 ? [] : _d;
    var size = (0, react_1.useContext)(grommet_1.ResponsiveContext);
    return ((0, jsx_runtime_1.jsxs)(grommet_1.Box, tslib_1.__assign({ pad: "large" }, { children: [(0, jsx_runtime_1.jsx)(grommet_1.Box, tslib_1.__assign({ align: "center", pad: "large" }, { children: (0, jsx_runtime_1.jsx)("h2", { children: title }) })), (0, jsx_runtime_1.jsx)(grommet_1.Box, tslib_1.__assign({ pad: "large" }, { children: (0, jsx_runtime_1.jsx)(grommet_1.Grid, tslib_1.__assign({ columns: size !== "small" ? "small" : "100%", gap: "small" }, { children: list.map(function (item, index) { return ((0, jsx_runtime_1.jsxs)(grommet_1.Box, tslib_1.__assign({ pad: "medium", background: { color: "light-2" }, round: "small" }, { children: [(0, jsx_runtime_1.jsx)(grommet_1.Heading, tslib_1.__assign({ level: 4 }, { children: item.title })), (0, jsx_runtime_1.jsx)(grommet_1.Paragraph, tslib_1.__assign({ size: "small" }, { children: item.subtitle }))] }), index)); }) })) }))] })));
};
exports.default = GridText;
