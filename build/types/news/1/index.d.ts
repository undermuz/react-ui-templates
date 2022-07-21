import { IScheme } from "@undermuz/react-json-form/build/types/types";
import { MouseEventHandler } from "react";
import { IBlock } from "../../types";
export interface IBlog1ValueListItem {
    id: number;
    title: string;
    description: string;
    is_active: boolean;
    date: string;
}
export interface IBlog1Value {
    title: string;
    subtitle: string;
    list: IBlog1ValueListItem[];
}
export interface IBlog1 {
    id: number;
    value: IBlog1Value;
    onButtonClick?: MouseEventHandler<HTMLAnchorElement> & MouseEventHandler<HTMLButtonElement>;
}
declare const scheme: IScheme;
declare const setting: IBlock;
export { scheme };
export default setting;
