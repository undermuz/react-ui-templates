import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Grid, Heading, Paragraph, ResponsiveContext } from "grommet";
import { useContext } from "react";
import DEF_VALUE from "./defaults";
var GridText = function (props) {
    var _a = props.id, id = _a === void 0 ? 0 : _a, _b = props.value, value = _b === void 0 ? DEF_VALUE : _b;
    var _c = value.title, title = _c === void 0 ? "" : _c, _d = value.list, list = _d === void 0 ? [] : _d;
    var size = useContext(ResponsiveContext);
    return (_jsxs(Box, __assign({ pad: "large" }, { children: [_jsx(Box, __assign({ align: "center", pad: "large" }, { children: _jsx("h2", { children: title }) })), _jsx(Box, __assign({ pad: "large" }, { children: _jsx(Grid, __assign({ columns: size !== "small" ? "small" : "100%", gap: "small" }, { children: list.map(function (item, index) { return (_jsxs(Box, __assign({ pad: "medium", background: { color: "light-2" }, round: "small" }, { children: [_jsx(Heading, __assign({ level: 4 }, { children: item.title })), _jsx(Paragraph, __assign({ size: "small" }, { children: item.subtitle }))] }), index)); }) })) }))] })));
};
export default GridText;
