import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Heading } from "grommet";
import DEF_VALUE from "./defaults";
var FourServices = function (props) {
    var _a = props.id, id = _a === void 0 ? 0 : _a, _b = props.value, value = _b === void 0 ? DEF_VALUE : _b;
    var _c = value.main, main = _c === void 0 ? DEF_VALUE.main : _c, _d = value.services, services = _d === void 0 ? DEF_VALUE.services : _d;
    var _e = main.title, title = _e === void 0 ? "" : _e;
    return (_jsx(Box, __assign({ id: "block-".concat(id) }, { children: _jsxs(Box, __assign({ width: "large" }, { children: [_jsx(Box, { children: _jsx(Heading, __assign({ level: 2 }, { children: title })) }), _jsxs(Box, { children: [Object.keys(services).map(function (key) {
                            var item = services[key];
                            return (_jsxs("div", __assign({ className: "block" }, { children: [_jsx(Heading, __assign({ level: 3 }, { children: item.description })), _jsx(Box, { children: _jsx("div", { dangerouslySetInnerHTML: {
                                                __html: item.text,
                                            } }) })] }), key));
                        }), ","] })] })) })));
};
export default FourServices;
