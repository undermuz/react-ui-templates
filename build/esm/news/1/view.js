import { __assign, __makeTemplateObject } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
import { Box, Heading, Paragraph, Text, Grid } from "grommet";
import DEF_VALUE from "./defaults";
var exampleButtonClick = function () {
    alert("click");
};
var BlogItemSmall = function (_a) {
    var data = _a.data, _b = _a.onButtonClick, onButtonClick = _b === void 0 ? exampleButtonClick : _b;
    var title = data.title, date = data.date, is_active = data.is_active;
    return (_jsxs(Box, __assign({ pad: { horizontal: "medium", vertical: "small" }, 
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
        }, onClick: onButtonClick, round: "small" }, { children: [_jsx(Heading, __assign({ level: 3, size: "small", margin: "none" }, { children: title })), _jsx(Text, __assign({ as: "div", size: "xsmall", margin: { top: "xsmall" } }, { children: date }))] })));
};
var BlogItemBig = function (_a) {
    var data = _a.data, _b = _a.onButtonClick, onButtonClick = _b === void 0 ? exampleButtonClick : _b;
    var title = data.title, description = data.description, date = data.date, is_active = data.is_active;
    return (_jsx(Box, __assign({ direction: "row", margin: { vertical: "xsmall" }, style: {
            gridRow: "1 / 3",
            // aspectRatio: is_active ? "auto" : "1.5"
        }, hoverIndicator: {
            background: {
                color: "accent-1",
            },
        }, background: {
            color: "accent-1",
            opacity: "strong",
        }, onClick: onButtonClick, round: "small", overflow: "hidden" }, { children: _jsxs(Grid, __assign({ width: "100%", columns: ["60%", "1fr"] }, { children: [_jsx(Box, { fill: "vertical", background: { color: "neutral-1" } }), _jsxs(Box, __assign({ pad: { horizontal: "medium", vertical: "small" }, justify: "between" }, { children: [_jsxs(Box, __assign({ fill: "vertical", justify: "center" }, { children: [_jsx(Heading, __assign({ level: 3, size: "small", margin: "none" }, { children: title })), _jsx(Paragraph, __assign({ size: "small" }, { children: description }))] })), _jsx(Text, __assign({ as: "div", size: "xsmall", margin: { top: "xsmall" } }, { children: date }))] }))] })) })));
};
var CustomGrid = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: grid;\n    grid-template: 1fr 1fr / 1fr 30%;\n    gap: 10px;\n"], ["\n    display: grid;\n    grid-template: 1fr 1fr / 1fr 30%;\n    gap: 10px;\n"])));
var Blog1 = function (props) {
    var _a = props.id, id = _a === void 0 ? 0 : _a, _b = props.value, value = _b === void 0 ? DEF_VALUE : _b, _c = props.onButtonClick, onButtonClick = _c === void 0 ? exampleButtonClick : _c;
    var _d = value.title, title = _d === void 0 ? DEF_VALUE.title : _d, _e = value.subtitle, subtitle = _e === void 0 ? DEF_VALUE.subtitle : _e, _f = value.list, list = _f === void 0 ? DEF_VALUE.list : _f;
    return (_jsx(Box, __assign({ background: { color: "light-3" }, align: "center" }, { children: _jsxs(Box, __assign({ width: "xlarge" }, { children: [_jsxs(Box, __assign({ pad: { vertical: "small", horizontal: "medium" }, direction: "column", align: "start" }, { children: [_jsx(Heading, __assign({ level: 2, margin: { vertical: "xsmall" } }, { children: title })), _jsx(Paragraph, __assign({ margin: { vertical: "xsmall" } }, { children: subtitle }))] })), list.length > 0 && (_jsx(Box, __assign({ pad: { vertical: "small", horizontal: "medium" } }, { children: _jsx(Grid, __assign({ columns: ["1fr", "30%"], rows: "small", gap: "small" }, { children: list.map(function (item) {
                            return item.is_active ? (_jsx(BlogItemBig, { data: item }, item.id)) : (_jsx(BlogItemSmall, { data: item }, item.id));
                        }) })) })))] })) })));
};
export default Blog1;
var templateObject_1;
