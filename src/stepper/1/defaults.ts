import { IStepperValue, IStepperList } from "./chakra"

const DEF_VALUE_LIST: IStepperList[] = [
    {
        title: "Tilda - дизайн и сборка",
        image: "",
        list: [
            {
                id: 1,
                image: "",
                title: "Знакомство и брифинг",
            },
            {
                id: 5,
                image: "",
                title: "Составление ТЗ и подписание договора",
            },
            {
                id: 2,
                image: "",
                title: "Анализ целевой аудитории и конкурентов",
            },
            {
                id: 6,
                image: "",
                title: "Письменный прототипа",
            },
            {
                id: 3,
                image: "",
                title: "Создание пользовательского сценария",
            },
            {
                id: 7,
                image: "",
                title: "Создание прототипа",
            },
            {
                id: 4,
                image: "",
                title: "Дизайн",
            },
            {
                id: 8,
                image: "",
                title: "Адаптив",
            },
        ],
    },
    {
        title: "Дизайн",
        image: "",
        list: [
            {
                id: 1,
                image: "",
                title: "Кейс 3",
            },
            {
                id: 2,
                image: "",
                title: "Кейс 4",
            },
        ],
    },
]

const DEF_VALUE: IStepperValue = {
    title: "Этапы работы",
    list: DEF_VALUE_LIST,
}

export default DEF_VALUE
