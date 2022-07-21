import { IScheme } from "@undermuz/react-json-form/build/types/types";
import { IBlock } from "../../types";
export interface IGridTextValueAdvantage {
    title: string;
    subtitle: string;
    image?: string;
}
export interface IGridTextValue {
    title: string;
    list: IGridTextValueAdvantage[];
}
export interface IGridText {
    id: number;
    value: IGridTextValue;
}
export declare const scheme: IScheme;
declare const setting: IBlock;
export default setting;
