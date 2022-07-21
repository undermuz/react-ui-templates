import { IBlock } from "@undermuz/react-page-builder/build/types/types";
import { MouseEventHandler } from "react";
export interface IOfferBlockValueAdvantage {
    title: string;
    image: string;
}
export interface IOfferBlockValue {
    title: string;
    subtitle: string;
    show_button: boolean;
    button_text: string;
    show_adv: boolean;
    image: string | null;
    advantage: IOfferBlockValueAdvantage[];
}
export interface IOfferBlock {
    id: number;
    value: IOfferBlockValue;
    onButtonClick?: MouseEventHandler<HTMLAnchorElement> & MouseEventHandler<HTMLButtonElement>;
}
declare const Offer: IBlock;
export default Offer;
