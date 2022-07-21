import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Button, Heading, Paragraph } from "grommet";
import DEF_VALUE from "./defaults";
var exampleButtonClick = function () {
    alert("click");
};
var Offer = function (props) {
    var _a = props.value, value = _a === void 0 ? DEF_VALUE : _a, _b = props.onButtonClick, onButtonClick = _b === void 0 ? exampleButtonClick : _b;
    var _c = value.title, title = _c === void 0 ? DEF_VALUE.title : _c, _d = value.subtitle, subtitle = _d === void 0 ? DEF_VALUE.subtitle : _d, _e = value.show_button, show_button = _e === void 0 ? DEF_VALUE.show_button : _e, _f = value.button_text, button_text = _f === void 0 ? DEF_VALUE.button_text : _f, _g = value.show_adv, show_adv = _g === void 0 ? DEF_VALUE.show_adv : _g, _h = value.advantage, advantage = _h === void 0 ? DEF_VALUE.advantage : _h;
    return (_jsxs(Box, __assign({ background: { color: "neutral-2", opacity: true } }, { children: [_jsxs(Box, __assign({ pad: "xlarge", align: "center" }, { children: [_jsx(Heading, { children: title }), _jsx(Paragraph, { children: subtitle }), show_button && (_jsx(Box, { children: _jsx(Button, { primary: true, size: "large", onClick: onButtonClick, label: button_text }) }))] })), show_adv && advantage.length > 0 && (_jsx(Box, __assign({ pad: "large", background: { color: "neutral-2" } }, { children: _jsx(Box, __assign({ direction: "row", justify: "around" }, { children: advantage.map(function (item, index) { return (_jsxs(Box, { children: [_jsx("img", { src: item.image, alt: "" }), _jsx("span", { children: item.title })] }, index)); }) })) })))] })));
};
export default Offer;
