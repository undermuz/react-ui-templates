import { EnumSchemeItemType } from "@undermuz/react-json-form";
import DEF_VALUE from "./defaults";
import view from "./view";
/*SCHEME BEGIN*/
var WidgetName = "Blog1";
var WidgetTitle = "Блог/Новости 1";
var scheme = {
    id: WidgetName,
    scheme: [
        {
            name: "title",
            title: "Заголовок",
            type: EnumSchemeItemType.Text,
            def_value: DEF_VALUE.title,
        },
        {
            name: "subtitle",
            title: "Подзаголовок",
            type: EnumSchemeItemType.TextBlock,
            def_value: DEF_VALUE.subtitle,
        },
        {
            name: "list",
            title: "Новости",
            type: EnumSchemeItemType.Widget,
            multiple: true,
            def_value: DEF_VALUE.list,
            scheme: [
                {
                    name: "title",
                    title: "Заголовок",
                    type: EnumSchemeItemType.Text,
                    def_value: "",
                },
                {
                    name: "description",
                    title: "Описание",
                    type: EnumSchemeItemType.Text,
                    def_value: "",
                },
                {
                    name: "date",
                    title: "Дата",
                    type: EnumSchemeItemType.Text,
                    def_value: "",
                },
                {
                    name: "is_active",
                    title: "Активная?",
                    type: EnumSchemeItemType.Checkbox,
                    def_value: false,
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
    description: "\u0411\u043B\u043E\u0433/\u041D\u043E\u0432\u043E\u0441\u0442\u0438 1",
    image: "/pic/5aec67ad9e3e1ee17dc8717d1e23e8c5zXnwX.png",
    value: DEF_VALUE,
    scheme: scheme,
    view: view,
};
export { scheme };
export default setting;
/*SCHEME END*/
