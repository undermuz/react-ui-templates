import { __assign, __makeTemplateObject } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Grommet } from "grommet";
import Offer1 from "../offer/1/view";
import GridText1 from "../grid-text/1/view";
import Price1 from "../prices/1/view";
import Price2 from "../prices/2/view";
import Feature1 from "../features/1/view";
import News1 from "../news/1/view";
import styled from "styled-components";
var UiContainer = styled(Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    @import url(\"https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap\");\n\n    * {\n        font-family: \"Roboto\", sans-serif;\n    }\n"], ["\n    @import url(\"https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap\");\n\n    * {\n        font-family: \"Roboto\", sans-serif;\n    }\n"])));
var AllBlocksStory = function () {
    return (_jsx(Grommet, { children: _jsxs(UiContainer, __assign({ direction: "column", fill: true }, { children: [_jsx(Offer1, {}), _jsx(GridText1, {}), _jsx(Price1, {}), _jsx(Price2, {}), _jsx(Feature1, {}), _jsx(News1, {})] })) }));
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
var Template = function (args) {
    return _jsx(AllBlocksStory, __assign({}, args));
};
export var ExamplePageBuilder = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ExamplePageBuilder.args = {};
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Example/All blocks",
    component: AllBlocksStory,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //     backgroundColor: { control: "color" },
    // },
};
var templateObject_1;
