import { __assign, __makeTemplateObject } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Heading, Paragraph, Grid } from "grommet";
import styled from "styled-components";
import DEF_VALUE from "./defaults";
var UiImageBox = styled(Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    aspect-ratio: 1;\n"], ["\n    aspect-ratio: 1;\n"])));
var ImageBox = function () {
    return (_jsx(UiImageBox, { fill: "horizontal", background: { color: "light-3" }, round: "small" }));
};
var GridBox = function () {
    return (_jsx(Box, __assign({ fill: "horizontal" }, { children: _jsx(ImageBox, {}) })));
};
var Feature1 = function (props) {
    var _a = props.value, value = _a === void 0 ? DEF_VALUE : _a;
    var _b = value.title, title = _b === void 0 ? DEF_VALUE.title : _b, _c = value.subtitle, subtitle = _c === void 0 ? DEF_VALUE.subtitle : _c, _d = value.description, description = _d === void 0 ? DEF_VALUE.description : _d;
    return (_jsx(Box, __assign({ align: "center", fill: "horizontal" }, { children: _jsx(Box, __assign({ width: "xlarge" }, { children: _jsxs(Box, __assign({ direction: "row", gap: "xlarge", pad: { vertical: "medium" } }, { children: [_jsxs(Box, __assign({ direction: "column", justify: "center", fill: "horizontal" }, { children: [_jsx(Paragraph, __assign({ color: "dark-3", fill: true, size: "small", margin: { top: "none", bottom: "medium" }, style: {
                                    textTransform: "uppercase",
                                } }, { children: _jsx("strong", { children: subtitle }) })), _jsx(Heading, __assign({ color: "dark-1", level: 2, size: "medium", margin: { top: "none", bottom: "medium" } }, { children: title })), _jsx(Paragraph, __assign({ color: "dark-2", margin: { top: "xsmall", bottom: "xsmall" }, fill: true, size: "medium", style: {
                                    lineHeight: "30px",
                                } }, { children: description }))] })), _jsxs(Grid, __assign({ justify: "center", fill: "horizontal", rows: ["1fr", "1fr"], columns: ["1fr", "1fr"], gap: "medium" }, { children: [_jsx(GridBox, {}), _jsx(GridBox, {}), _jsx(GridBox, {}), _jsx(GridBox, {})] }))] })) })) })));
};
export default Feature1;
var templateObject_1;
