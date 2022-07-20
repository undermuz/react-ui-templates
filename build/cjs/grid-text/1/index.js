"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scheme = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var grommet_1 = require("grommet");
var react_1 = require("react");
var types_1 = require("../widget-builder/types");
var WidgetName = "GridText";
var WidgetTitle = "Текстовая сетка";
var DEF_VALUE_LIST = [
    {
        title: "Надежность",
        subtitle: "ываываа ываыа вы выа  аыаыавыаывавыаыва выа ывавыавыа вы авы аыва",
    },
    {
        title: "Скорость",
        subtitle: "ываываа ываыа вы выа  аыаыавыаывавыаыва выа ывавыавыа вы авы аыва",
    },
    {
        title: "Эффективность",
        subtitle: "ываываа ываыа вы выа  аыаыавыаывавыаыва выа ывавыавыа вы авы аыва",
    },
    {
        title: "Цена",
        subtitle: "ываываа ываыа вы выа  аыаыавыаывавыаыва выа ывавыавыа вы авы аыва",
    },
    {
        title: "Гарантия",
        subtitle: "ываываа ываыа вы выа  аыаыавыаывавыаыва выа ывавыавыа вы авы аыва",
    },
    {
        title: "Справедливость",
        subtitle: "ываываа ываыа вы выа  аыаыавыаывавыаыва выа ывавыавыа вы авы аыва",
    },
];
var DEF_VALUE = {
    title: "Приемущества",
    list: DEF_VALUE_LIST,
};
var GridText = function (props) {
    var _a = props.id, id = _a === void 0 ? 0 : _a, _b = props.value, value = _b === void 0 ? DEF_VALUE : _b;
    var _c = value.title, title = _c === void 0 ? "" : _c, _d = value.list, list = _d === void 0 ? [] : _d;
    var size = (0, react_1.useContext)(grommet_1.ResponsiveContext);
    return ((0, jsx_runtime_1.jsxs)(grommet_1.Box, tslib_1.__assign({ pad: "large" }, { children: [(0, jsx_runtime_1.jsx)(grommet_1.Box, tslib_1.__assign({ align: "center", pad: "large" }, { children: (0, jsx_runtime_1.jsx)("h2", { children: title }) })), (0, jsx_runtime_1.jsx)(grommet_1.Box, tslib_1.__assign({ pad: "large" }, { children: (0, jsx_runtime_1.jsx)(grommet_1.Grid, tslib_1.__assign({ columns: size !== "small" ? "small" : "100%", gap: "small" }, { children: list.map(function (item, index) { return ((0, jsx_runtime_1.jsx)(grommet_1.Card, tslib_1.__assign({ pad: "medium" }, { children: (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(grommet_1.Heading, tslib_1.__assign({ level: 4 }, { children: item.title })), (0, jsx_runtime_1.jsx)(grommet_1.Paragraph, tslib_1.__assign({ size: "small" }, { children: item.subtitle }))] }) }), index)); }) })) }))] })));
};
exports.scheme = {
    id: WidgetName,
    scheme: [
        {
            name: "title",
            title: "Заголовок",
            type: types_1.EnumSchemeItemType.Text,
            def_value: "",
        },
        {
            name: "list",
            title: "Список",
            type: types_1.EnumSchemeItemType.Widget,
            def_value: "",
            multiple: true,
            scheme: [
                {
                    name: "image",
                    title: "Изображение",
                    type: types_1.EnumSchemeItemType.Files,
                    def_value: "",
                },
                {
                    name: "title",
                    title: "Заголовок",
                    type: types_1.EnumSchemeItemType.Text,
                    def_value: "",
                },
                {
                    name: "subtitle",
                    title: "Подзаголовок",
                    type: types_1.EnumSchemeItemType.Text,
                    def_value: "",
                },
            ],
        },
    ],
    single: true,
    multiple: false,
    title: WidgetTitle,
    name: WidgetName,
};
var setting = {
    id: WidgetName,
    title: WidgetTitle,
    description: "\u0414\u043B\u044F \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432",
    image: "/pic/7baf806ceff92c3c9f65c8c029cdd73eOabFY.png",
    scheme: exports.scheme,
    value: DEF_VALUE,
    view: GridText,
};
exports.default = setting;
