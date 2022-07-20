"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var grommet_1 = require("grommet");
var grommet_icons_1 = require("grommet-icons");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var exampleButtonClick = function () {
    alert("click");
};
var PriceItem = function (_a) {
    var data = _a.data, button_text = _a.button_text, _b = _a.onButtonClick, onButtonClick = _b === void 0 ? exampleButtonClick : _b;
    var title = data.title, price = data.price, list = data.list, is_active = data.is_active;
    var color = !is_active ? "light-1" : "accent-2";
    return ((0, jsx_runtime_1.jsxs)(grommet_1.Box, tslib_1.__assign({ pad: "medium", basis: "full", justify: "between", direction: "row", align: "center", alignContent: "center", hoverIndicator: {
            background: {
                color: "accent-1",
            },
        }, background: {
            color: color,
            opacity: "strong",
        }, round: "small" }, { children: [(0, jsx_runtime_1.jsxs)(grommet_1.Box, tslib_1.__assign({ basis: "1/4" }, { children: [(0, jsx_runtime_1.jsx)(grommet_1.Heading, tslib_1.__assign({ level: 3, size: "small", margin: { top: "none", bottom: "small" } }, { children: title })), (0, jsx_runtime_1.jsxs)(grommet_1.Text, tslib_1.__assign({ size: "xlarge", weight: "bolder" }, { children: [price, " \u20BD"] }))] })), (0, jsx_runtime_1.jsx)(grommet_1.Box, tslib_1.__assign({ basis: "2/4", align: "center", alignContent: "center" }, { children: (0, jsx_runtime_1.jsx)(grommet_1.List, tslib_1.__assign({ data: list, basis: "1/2", border: false, pad: { vertical: "xxsmall" }, style: { columns: 2 } }, { children: function (listItem) {
                        return ((0, jsx_runtime_1.jsxs)(grommet_1.Box, tslib_1.__assign({ direction: "row" }, { children: [(0, jsx_runtime_1.jsx)(grommet_icons_1.StatusGood, { size: "medium", color: "brand" }), (0, jsx_runtime_1.jsx)(grommet_1.Text, tslib_1.__assign({ size: "small", margin: { left: "small" } }, { children: listItem.title }), listItem.id)] })));
                    } })) })), (0, jsx_runtime_1.jsx)(grommet_1.Button, { size: "medium", primary: is_active, onClick: onButtonClick, label: button_text })] })));
};
var Price2 = function (props) {
    var _a = props.id, id = _a === void 0 ? 0 : _a, _b = props.value, value = _b === void 0 ? defaults_1.default : _b, _c = props.onButtonClick, onButtonClick = _c === void 0 ? exampleButtonClick : _c;
    var _d = value.title, title = _d === void 0 ? defaults_1.default.title : _d, _e = value.subtitle, subtitle = _e === void 0 ? defaults_1.default.subtitle : _e, _f = value.button_text, button_text = _f === void 0 ? defaults_1.default.button_text : _f, _g = value.prices, prices = _g === void 0 ? defaults_1.default.prices : _g;
    return ((0, jsx_runtime_1.jsx)(grommet_1.Box, tslib_1.__assign({ background: { color: "light-3" }, align: "center" }, { children: (0, jsx_runtime_1.jsxs)(grommet_1.Box, tslib_1.__assign({ width: "xxlarge" }, { children: [(0, jsx_runtime_1.jsxs)(grommet_1.Box, tslib_1.__assign({ width: "100%", pad: "medium", direction: "column", align: "center" }, { children: [(0, jsx_runtime_1.jsx)(grommet_1.Box, { children: (0, jsx_runtime_1.jsx)(grommet_1.Heading, tslib_1.__assign({ level: 2 }, { children: title })) }), (0, jsx_runtime_1.jsx)(grommet_1.Box, { children: (0, jsx_runtime_1.jsx)(grommet_1.Paragraph, { children: subtitle }) })] })), prices.length > 0 && ((0, jsx_runtime_1.jsx)(grommet_1.Box, tslib_1.__assign({ direction: "column", pad: "small", background: "light-3", gap: "medium", basis: "full" }, { children: prices.map(function (item, index) { return ((0, jsx_runtime_1.jsx)(PriceItem, { data: item, button_text: button_text }, item.id)); }) })))] })) })));
};
exports.default = Price2;
