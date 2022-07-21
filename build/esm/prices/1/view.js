import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Button, Heading, Paragraph, Text, List } from "grommet";
import DEF_VALUE from "./defaults";
var exampleButtonClick = function () {
    alert("click");
};
var PriceItem = function (_a) {
    var data = _a.data, button_text = _a.button_text, _b = _a.onButtonClick, onButtonClick = _b === void 0 ? exampleButtonClick : _b;
    var title = data.title, price = data.price, list = data.list, is_active = data.is_active;
    var color = !is_active ? "light-1" : "accent-1";
    return (_jsxs(Box, __assign({ pad: "medium", basis: "1/3", justify: "center", align: "center", hoverIndicator: {
            background: {
                color: "accent-1",
            },
        }, background: {
            color: color,
            opacity: "strong",
        }, round: "small" }, { children: [_jsx(Heading, __assign({ level: 3, size: "small", textAlign: "center", margin: { top: "none", bottom: "small" } }, { children: title })), _jsxs(Text, __assign({ size: "xlarge", textAlign: "center", weight: "bolder" }, { children: [price, " \u20BD"] })), _jsx(Text, __assign({ as: "div", size: "small", textAlign: "center", margin: { top: "small" } }, { children: _jsx(List, __assign({ alignSelf: "center", data: list, border: false, pad: { vertical: "xxsmall" } }, { children: function (listItem) {
                        return _jsx(Text, { children: listItem.title }, listItem.id);
                    } })) })), _jsx(Button, { margin: { top: "medium" }, size: "medium", primary: is_active, onClick: onButtonClick, label: button_text })] })));
};
var Price1 = function (props) {
    var _a = props.id, id = _a === void 0 ? 0 : _a, _b = props.value, value = _b === void 0 ? DEF_VALUE : _b, _c = props.onButtonClick, onButtonClick = _c === void 0 ? exampleButtonClick : _c;
    var _d = value.title, title = _d === void 0 ? DEF_VALUE.title : _d, _e = value.subtitle, subtitle = _e === void 0 ? DEF_VALUE.subtitle : _e, _f = value.button_text, button_text = _f === void 0 ? DEF_VALUE.button_text : _f, _g = value.prices, prices = _g === void 0 ? DEF_VALUE.prices : _g;
    return (_jsx(Box, __assign({ background: { color: "light-3" }, align: "center" }, { children: _jsxs(Box, __assign({ width: "xxlarge" }, { children: [_jsxs(Box, __assign({ pad: "medium", direction: "column", align: "center" }, { children: [_jsx(Box, __assign({ align: "center" }, { children: _jsx(Heading, __assign({ level: 2 }, { children: title })) })), _jsx(Box, __assign({ align: "center" }, { children: _jsx(Paragraph, { children: subtitle }) }))] })), prices.length > 0 && (_jsx(Box, __assign({ direction: "row-responsive", justify: "center", align: "start", pad: "small", background: "light-3", gap: "medium", basis: "full", width: "100%" }, { children: prices.map(function (item, index) { return (_jsx(PriceItem, { data: item, button_text: button_text }, item.id)); }) })))] })) })));
};
export default Price1;
