"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamplePageBuilder = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var grommet_1 = require("grommet");
var view_1 = tslib_1.__importDefault(require("../four-services/1/view"));
var AllBlocksStory = function () {
    return ((0, jsx_runtime_1.jsx)(grommet_1.Box, tslib_1.__assign({ direction: "column", fill: true }, { children: (0, jsx_runtime_1.jsx)(view_1.default, {}) })));
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
