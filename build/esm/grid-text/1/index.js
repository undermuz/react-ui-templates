import { EnumSchemeItemType } from "@undermuz/react-json-form";
import GridText from "./view";
import DEF_VALUE from "./defaults";
var WidgetName = "GridText";
var WidgetTitle = "Текстовая сетка";
export var scheme = {
    id: WidgetName,
    scheme: [
        {
            name: "title",
            title: "Заголовок",
            type: EnumSchemeItemType.Text,
            def_value: "",
        },
        {
            name: "list",
            title: "Список",
            type: EnumSchemeItemType.Widget,
            def_value: "",
            multiple: true,
            scheme: [
                {
                    name: "image",
                    title: "Изображение",
                    type: EnumSchemeItemType.Files,
                    def_value: "",
                },
                {
                    name: "title",
                    title: "Заголовок",
                    type: EnumSchemeItemType.Text,
                    def_value: "",
                },
                {
                    name: "subtitle",
                    title: "Подзаголовок",
                    type: EnumSchemeItemType.Text,
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
    scheme: scheme,
    value: DEF_VALUE,
    view: GridText,
};
export default setting;
