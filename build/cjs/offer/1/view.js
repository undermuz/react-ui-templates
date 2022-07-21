"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var grommet_1 = require("grommet");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var exampleButtonClick = function () {
    alert("click");
};
var Offer = function (props) {
    var _a = props.value, value = _a === void 0 ? defaults_1.default : _a, _b = props.onButtonClick, onButtonClick = _b === void 0 ? exampleButtonClick : _b;
    var _c = value.title, title = _c === void 0 ? defaults_1.default.title : _c, _d = value.subtitle, subtitle = _d === void 0 ? defaults_1.default.subtitle : _d, _e = value.show_button, show_button = _e === void 0 ? defaults_1.default.show_button : _e, _f = value.button_text, button_text = _f === void 0 ? defaults_1.default.button_text : _f, _g = value.show_adv, show_adv = _g === void 0 ? defaults_1.default.show_adv : _g, _h = value.advantage, advantage = _h === void 0 ? defaults_1.default.advantage : _h;
    return ((0, jsx_runtime_1.jsxs)(grommet_1.Box, tslib_1.__assign({ background: { color: "neutral-2", opacity: true } }, { children: [(0, jsx_runtime_1.jsxs)(grommet_1.Box, tslib_1.__assign({ pad: "xlarge", align: "center" }, { children: [(0, jsx_runtime_1.jsx)(grommet_1.Heading, { children: title }), (0, jsx_runtime_1.jsx)(grommet_1.Paragraph, { children: subtitle }), show_button && ((0, jsx_runtime_1.jsx)(grommet_1.Box, { children: (0, jsx_runtime_1.jsx)(grommet_1.Button, { primary: true, size: "large", onClick: onButtonClick, label: button_text }) }))] })), show_adv && advantage.length > 0 && ((0, jsx_runtime_1.jsx)(grommet_1.Box, tslib_1.__assign({ pad: "large", background: { color: "neutral-2" } }, { children: (0, jsx_runtime_1.jsx)(grommet_1.Box, tslib_1.__assign({ direction: "row", justify: "around" }, { children: advantage.map(function (item, index) { return ((0, jsx_runtime_1.jsxs)(grommet_1.Box, { children: [(0, jsx_runtime_1.jsx)("img", { src: item.image, alt: "" }), (0, jsx_runtime_1.jsx)("span", { children: item.title })] }, index)); }) })) })))] })));
};
exports.default = Offer;
