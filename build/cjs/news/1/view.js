"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var grommet_1 = require("grommet");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var exampleButtonClick = function () {
    alert("click");
};
var BlogItemSmall = function (_a) {
    var data = _a.data, _b = _a.onButtonClick, onButtonClick = _b === void 0 ? exampleButtonClick : _b;
    var title = data.title, date = data.date, is_active = data.is_active;
    return ((0, jsx_runtime_1.jsxs)(grommet_1.Box, tslib_1.__assign({ pad: { horizontal: "medium", vertical: "small" }, 
        // basis="fill"
        justify: "end", margin: { vertical: "xsmall" }, 
        // fill="vertical"
        hoverIndicator: {
            background: {
                color: "accent-1",
            },
        }, background: {
            color: "light-1",
            opacity: "strong",
        }, onClick: onButtonClick, round: "small" }, { children: [(0, jsx_runtime_1.jsx)(grommet_1.Heading, tslib_1.__assign({ level: 3, size: "small", margin: "none" }, { children: title })), (0, jsx_runtime_1.jsx)(grommet_1.Text, tslib_1.__assign({ as: "div", size: "xsmall", margin: { top: "xsmall" } }, { children: date }))] })));
};
var BlogItemBig = function (_a) {
    var data = _a.data, _b = _a.onButtonClick, onButtonClick = _b === void 0 ? exampleButtonClick : _b;
    var title = data.title, description = data.description, date = data.date, is_active = data.is_active;
    return ((0, jsx_runtime_1.jsx)(grommet_1.Box, tslib_1.__assign({ direction: "row", margin: { vertical: "xsmall" }, style: {
            gridRow: "1 / 3",
            // aspectRatio: is_active ? "auto" : "1.5"
        }, hoverIndicator: {
            background: {
                color: "accent-1",
            },
        }, background: {
            color: "accent-1",
            opacity: "strong",
        }, onClick: onButtonClick, round: "small", overflow: "hidden" }, { children: (0, jsx_runtime_1.jsxs)(grommet_1.Grid, tslib_1.__assign({ width: "100%", columns: ["60%", "1fr"] }, { children: [(0, jsx_runtime_1.jsx)(grommet_1.Box, { fill: "vertical", background: { color: "neutral-1" } }), (0, jsx_runtime_1.jsxs)(grommet_1.Box, tslib_1.__assign({ pad: { horizontal: "medium", vertical: "small" }, justify: "between" }, { children: [(0, jsx_runtime_1.jsxs)(grommet_1.Box, tslib_1.__assign({ fill: "vertical", justify: "center" }, { children: [(0, jsx_runtime_1.jsx)(grommet_1.Heading, tslib_1.__assign({ level: 3, size: "small", margin: "none" }, { children: title })), (0, jsx_runtime_1.jsx)(grommet_1.Paragraph, tslib_1.__assign({ size: "small" }, { children: description }))] })), (0, jsx_runtime_1.jsx)(grommet_1.Text, tslib_1.__assign({ as: "div", size: "xsmall", margin: { top: "xsmall" } }, { children: date }))] }))] })) })));
};
var CustomGrid = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n    display: grid;\n    grid-template: 1fr 1fr / 1fr 30%;\n    gap: 10px;\n"], ["\n    display: grid;\n    grid-template: 1fr 1fr / 1fr 30%;\n    gap: 10px;\n"])));
var Blog1 = function (props) {
    var _a = props.id, id = _a === void 0 ? 0 : _a, _b = props.value, value = _b === void 0 ? defaults_1.default : _b, _c = props.onButtonClick, onButtonClick = _c === void 0 ? exampleButtonClick : _c;
    var _d = value.title, title = _d === void 0 ? defaults_1.default.title : _d, _e = value.subtitle, subtitle = _e === void 0 ? defaults_1.default.subtitle : _e, _f = value.list, list = _f === void 0 ? defaults_1.default.list : _f;
    return ((0, jsx_runtime_1.jsx)(grommet_1.Box, tslib_1.__assign({ background: { color: "light-3" }, align: "center" }, { children: (0, jsx_runtime_1.jsxs)(grommet_1.Box, tslib_1.__assign({ width: "xlarge" }, { children: [(0, jsx_runtime_1.jsxs)(grommet_1.Box, tslib_1.__assign({ pad: { vertical: "small", horizontal: "medium" }, direction: "column", align: "start" }, { children: [(0, jsx_runtime_1.jsx)(grommet_1.Heading, tslib_1.__assign({ level: 2, margin: { vertical: "xsmall" } }, { children: title })), (0, jsx_runtime_1.jsx)(grommet_1.Paragraph, tslib_1.__assign({ margin: { vertical: "xsmall" } }, { children: subtitle }))] })), list.length > 0 && ((0, jsx_runtime_1.jsx)(grommet_1.Box, tslib_1.__assign({ pad: { vertical: "small", horizontal: "medium" } }, { children: (0, jsx_runtime_1.jsx)(grommet_1.Grid, tslib_1.__assign({ columns: ["1fr", "30%"], rows: "small", gap: "small" }, { children: list.map(function (item) {
                            return item.is_active ? ((0, jsx_runtime_1.jsx)(BlogItemBig, { data: item }, item.id)) : ((0, jsx_runtime_1.jsx)(BlogItemSmall, { data: item }, item.id));
                        }) })) })))] })) })));
};
exports.default = Blog1;
var templateObject_1;
