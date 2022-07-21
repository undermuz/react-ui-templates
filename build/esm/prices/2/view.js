import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Button, Heading, Paragraph, Text, List } from "grommet";
import { StatusGood } from "grommet-icons";
import DEF_VALUE from "./defaults";
var exampleButtonClick = function () {
    alert("click");
};
var PriceItem = function (_a) {
    var data = _a.data, button_text = _a.button_text, _b = _a.onButtonClick, onButtonClick = _b === void 0 ? exampleButtonClick : _b;
    var title = data.title, price = data.price, list = data.list, is_active = data.is_active;
    var color = !is_active ? "light-1" : "accent-2";
    return (_jsxs(Box, __assign({ pad: "medium", basis: "full", justify: "between", direction: "row", align: "center", alignContent: "center", hoverIndicator: {
            background: {
                color: "accent-1",
            },
        }, background: {
            color: color,
            opacity: "strong",
        }, round: "small" }, { children: [_jsxs(Box, __assign({ basis: "1/4" }, { children: [_jsx(Heading, __assign({ level: 3, size: "small", margin: { top: "none", bottom: "small" } }, { children: title })), _jsxs(Text, __assign({ size: "xlarge", weight: "bolder" }, { children: [price, " \u20BD"] }))] })), _jsx(Box, __assign({ basis: "2/4", align: "center", alignContent: "center" }, { children: _jsx(List, __assign({ data: list, basis: "1/2", border: false, pad: { vertical: "xxsmall" }, style: { columns: 2 } }, { children: function (listItem) {
                        return (_jsxs(Box, __assign({ direction: "row" }, { children: [_jsx(StatusGood, { size: "medium", color: "brand" }), _jsx(Text, __assign({ size: "small", margin: { left: "small" } }, { children: listItem.title }), listItem.id)] })));
                    } })) })), _jsx(Button, { size: "medium", primary: is_active, onClick: onButtonClick, label: button_text })] })));
};
var Price2 = function (props) {
    var _a = props.id, id = _a === void 0 ? 0 : _a, _b = props.value, value = _b === void 0 ? DEF_VALUE : _b, _c = props.onButtonClick, onButtonClick = _c === void 0 ? exampleButtonClick : _c;
    var _d = value.title, title = _d === void 0 ? DEF_VALUE.title : _d, _e = value.subtitle, subtitle = _e === void 0 ? DEF_VALUE.subtitle : _e, _f = value.button_text, button_text = _f === void 0 ? DEF_VALUE.button_text : _f, _g = value.prices, prices = _g === void 0 ? DEF_VALUE.prices : _g;
    return (_jsx(Box, __assign({ background: { color: "light-3" }, align: "center" }, { children: _jsxs(Box, __assign({ width: "xxlarge" }, { children: [_jsxs(Box, __assign({ width: "100%", pad: "medium", direction: "column", align: "center" }, { children: [_jsx(Box, { children: _jsx(Heading, __assign({ level: 2 }, { children: title })) }), _jsx(Box, { children: _jsx(Paragraph, { children: subtitle }) })] })), prices.length > 0 && (_jsx(Box, __assign({ direction: "column", pad: "small", background: "light-3", gap: "medium", basis: "full" }, { children: prices.map(function (item, index) { return (_jsx(PriceItem, { data: item, button_text: button_text }, item.id)); }) })))] })) })));
};
export default Price2;
