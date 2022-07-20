"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var grommet_1 = require("grommet");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var exampleButtonClick = function () {
    alert("click");
};
var PriceItem = function (_a) {
    var data = _a.data, button_text = _a.button_text, _b = _a.onButtonClick, onButtonClick = _b === void 0 ? exampleButtonClick : _b;
    var title = data.title, price = data.price, list = data.list, is_active = data.is_active;
    var color = !is_active ? "light-1" : "accent-1";
    return ((0, jsx_runtime_1.jsxs)(grommet_1.Box, tslib_1.__assign({ pad: "medium", basis: "1/3", justify: "center", align: "center", hoverIndicator: {
            background: {
                color: "accent-1",
            },
        }, background: {
            color: color,
            opacity: "strong",
        }, round: "small" }, { children: [(0, jsx_runtime_1.jsx)(grommet_1.Heading, tslib_1.__assign({ level: 3, size: "small", textAlign: "center", margin: { top: "none", bottom: "small" } }, { children: title })), (0, jsx_runtime_1.jsxs)(grommet_1.Text, tslib_1.__assign({ size: "xlarge", textAlign: "center", weight: "bolder" }, { children: [price, " \u20BD"] })), (0, jsx_runtime_1.jsx)(grommet_1.Text, tslib_1.__assign({ as: "div", size: "small", textAlign: "center", margin: { top: "small" } }, { children: (0, jsx_runtime_1.jsx)(grommet_1.List, tslib_1.__assign({ alignSelf: "center", data: list, border: false, pad: { vertical: "xxsmall" } }, { children: function (listItem) {
                        return (0, jsx_runtime_1.jsx)(grommet_1.Text, { children: listItem.title }, listItem.id);
                    } })) })), (0, jsx_runtime_1.jsx)(grommet_1.Button, { margin: { top: "medium" }, size: "medium", primary: is_active, onClick: onButtonClick, label: button_text })] })));
};
var Price1 = function (props) {
    var _a = props.id, id = _a === void 0 ? 0 : _a, _b = props.value, value = _b === void 0 ? defaults_1.default : _b, _c = props.onButtonClick, onButtonClick = _c === void 0 ? exampleButtonClick : _c;
    var _d = value.title, title = _d === void 0 ? defaults_1.default.title : _d, _e = value.subtitle, subtitle = _e === void 0 ? defaults_1.default.subtitle : _e, _f = value.button_text, button_text = _f === void 0 ? defaults_1.default.button_text : _f, _g = value.prices, prices = _g === void 0 ? defaults_1.default.prices : _g;
    return ((0, jsx_runtime_1.jsx)(grommet_1.Box, tslib_1.__assign({ background: { color: "light-3" }, align: "center" }, { children: (0, jsx_runtime_1.jsxs)(grommet_1.Box, tslib_1.__assign({ width: "xxlarge" }, { children: [(0, jsx_runtime_1.jsxs)(grommet_1.Box, tslib_1.__assign({ pad: "medium", direction: "column", align: "center" }, { children: [(0, jsx_runtime_1.jsx)(grommet_1.Box, tslib_1.__assign({ align: "center" }, { children: (0, jsx_runtime_1.jsx)(grommet_1.Heading, tslib_1.__assign({ level: 2 }, { children: title })) })), (0, jsx_runtime_1.jsx)(grommet_1.Box, tslib_1.__assign({ align: "center" }, { children: (0, jsx_runtime_1.jsx)(grommet_1.Paragraph, { children: subtitle }) }))] })), prices.length > 0 && ((0, jsx_runtime_1.jsx)(grommet_1.Box, tslib_1.__assign({ direction: "row-responsive", justify: "center", align: "start", pad: "small", background: "light-3", gap: "medium", basis: "full", width: "100%" }, { children: prices.map(function (item, index) { return ((0, jsx_runtime_1.jsx)(PriceItem, { data: item, button_text: button_text }, item.id)); }) })))] })) })));
};
exports.default = Price1;
