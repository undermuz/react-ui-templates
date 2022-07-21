"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamplePageBuilder = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var grommet_1 = require("grommet");
var view_1 = tslib_1.__importDefault(require("../offer/1/view"));
var view_2 = tslib_1.__importDefault(require("../grid-text/1/view"));
var view_3 = tslib_1.__importDefault(require("../prices/1/view"));
var view_4 = tslib_1.__importDefault(require("../prices/2/view"));
var view_5 = tslib_1.__importDefault(require("../features/1/view"));
var view_6 = tslib_1.__importDefault(require("../news/1/view"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var UiContainer = (0, styled_components_1.default)(grommet_1.Box)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n    @import url(\"https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap\");\n\n    * {\n        font-family: \"Roboto\", sans-serif;\n    }\n"], ["\n    @import url(\"https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap\");\n\n    * {\n        font-family: \"Roboto\", sans-serif;\n    }\n"])));
var AllBlocksStory = function () {
    return ((0, jsx_runtime_1.jsx)(grommet_1.Grommet, { children: (0, jsx_runtime_1.jsxs)(UiContainer, tslib_1.__assign({ direction: "column", fill: true }, { children: [(0, jsx_runtime_1.jsx)(view_1.default, {}), (0, jsx_runtime_1.jsx)(view_2.default, {}), (0, jsx_runtime_1.jsx)(view_3.default, {}), (0, jsx_runtime_1.jsx)(view_4.default, {}), (0, jsx_runtime_1.jsx)(view_5.default, {}), (0, jsx_runtime_1.jsx)(view_6.default, {})] })) }));
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
var Template = function (args) {
    return (0, jsx_runtime_1.jsx)(AllBlocksStory, tslib_1.__assign({}, args));
};
exports.ExamplePageBuilder = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
exports.ExamplePageBuilder.args = {};
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
exports.default = {
    title: "Example/All blocks",
    component: AllBlocksStory,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //     backgroundColor: { control: "color" },
    // },
};
var templateObject_1;
