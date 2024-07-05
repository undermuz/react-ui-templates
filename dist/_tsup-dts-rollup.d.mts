import { FC } from 'react';
import { FunctionComponent } from 'react';
import { IScheme } from '@undermuz/react-json-form';
import { MouseEventHandler } from 'react';
import { PartsStyleInterpolation } from '@chakra-ui/styled-system';
import { default as React_2 } from 'react';

export declare type BlockId = string;

export declare type BlockScheme = IScheme;

export declare type BlockValue = BlockValueItem | BlockValueItem[];

export declare type BlockValueItem = Record<string, any>;

export declare const chakraBwTheme: Record<string, any>;

export declare const ChakraBwThemeFonts: () => JSX.Element;

export declare const ChakraThemeBw: {
    theme: Record<string, any>;
    fonts: () => JSX.Element;
};

declare const DEF_VALUE: IFeature1Value_alias_1;
export { DEF_VALUE }
export { DEF_VALUE as default_alias }

declare const DEF_VALUE_2: IFeature1Value_alias_2;
export { DEF_VALUE_2 as DEF_VALUE_alias_1 }
export { DEF_VALUE_2 as default_alias_5 }

declare const DEF_VALUE_3: IFourServicesValue;
export { DEF_VALUE_3 as DEF_VALUE_alias_2 }
export { DEF_VALUE_3 as default_alias_8 }

declare const DEF_VALUE_4: IBlog1Value;
export { DEF_VALUE_4 as DEF_VALUE_alias_3 }
export { DEF_VALUE_4 as default_alias_16 }

declare const DEF_VALUE_5: IPrice1Value;
export { DEF_VALUE_5 as DEF_VALUE_alias_4 }
export { DEF_VALUE_5 as default_alias_28 }

declare const DEF_VALUE_6: IPrice2Value;
export { DEF_VALUE_6 as DEF_VALUE_alias_5 }
export { DEF_VALUE_6 as default_alias_31 }

export declare const DEF_VALUE_LIST: IBlog1ValueListItem[];

export declare const DEF_VALUE_PRICES: IPrice1ValuePrices[];

export declare const DEF_VALUE_PRICES_alias_1: IPrice2ValuePrices[];

export declare const default_alias_1: IBlock;

export declare const default_alias_10: FC<Partial<IFourServices>>;

export declare const default_alias_11: {
    title: string;
    list: {
        title: string;
        subtitle: string;
    }[];
};

export declare const default_alias_12: IBlock;

export declare const default_alias_13: React_2.FC<Partial<IGridText>>;

export declare const default_alias_14: IBlock;

export declare const default_alias_15: React_2.FC<Partial<IGridText_alias_1>>;

export declare const default_alias_17: IBlock;

export declare const default_alias_18: React_2.FC<Partial<IBlog1>>;

export declare const default_alias_19: {
    title: string;
    subtitle: string;
    button_text: string;
    show_button: boolean;
    show_adv: boolean;
    image: null;
    advantage: {
        id: number;
        title: string;
        image: string;
    }[];
};

export declare const default_alias_2: React_2.FC<Partial<IFeature1>>;

export declare const default_alias_20: IBlock;

export declare const default_alias_21: FC<Partial<IOfferBlock>>;

export declare const default_alias_22: {
    title: string;
    subtitle: string;
    button_text: string;
    show_button: boolean;
    show_adv: boolean;
    image: null;
    advantage: {
        id: number;
        title: string;
        subtitle: string;
    }[];
};

export declare const default_alias_23: IBlock;

export declare const default_alias_24: FC<Partial<IOfferBlock_alias_1>>;

export declare const default_alias_25: IPortfolioValue;

export declare const default_alias_26: IBlock;

export declare const default_alias_27: React_2.FC<Partial<IPortfolio>>;

export declare const default_alias_29: IBlock;

export declare const default_alias_3: IBlock;

export declare const default_alias_30: React_2.FC<Partial<IPrice1>>;

export declare const default_alias_32: IBlock;

export declare const default_alias_33: React_2.FC<Partial<IPrice2>>;

export declare const default_alias_34: IStepperValue;

export declare const default_alias_35: IBlock;

export declare const default_alias_36: React_2.FC<Partial<IStepper>>;

export declare const default_alias_4: React_2.FC<Partial<IFeature1_alias_1>>;

export declare const default_alias_6: IBlock;

export declare const default_alias_7: React_2.FC<Partial<IFeature1_alias_2>>;

export declare const default_alias_9: IBlock;

export declare interface IBlock {
    id: BlockId;
    title: string;
    description: string;
    image: string;
    value: BlockValue;
    scheme: BlockScheme;
    view: FunctionComponent<{
        id?: number;
        value?: any;
    }>;
}

export declare interface IBlockResultValue {
    id: number;
    blockId: BlockId;
    value: BlockValue;
}

export declare interface IBlog1 {
    id: number;
    value: IBlog1Value;
    onButtonClick?: MouseEventHandler<HTMLAnchorElement> & MouseEventHandler<HTMLButtonElement>;
}

export declare interface IBlog1Value {
    title: string;
    subtitle: string;
    list: IBlog1ValueListItem[];
}

export declare interface IBlog1ValueListItem {
    id: number;
    title: string;
    description: string;
    is_active: boolean;
    date: string;
}

export declare interface IFeature1 {
    id: number;
    value: IFeature1Value;
}

export declare interface IFeature1_alias_1 {
    id: number;
    value: IFeature1Value_alias_1;
}

export declare interface IFeature1_alias_2 {
    id: number;
    value: IFeature1Value_alias_2;
}

export declare interface IFeature1Value {
    title: string;
    subtitle: string;
    description: string;
}

export declare interface IFeature1Value_alias_1 {
    title: string;
    subtitle: string;
    description: string;
}

export declare interface IFeature1Value_alias_2 {
    title: string;
    subtitle: string;
    description: string;
}

export declare interface IFourServices {
    id: number;
    value: IFourServicesValue;
    onButtonClick?: MouseEventHandler<HTMLAnchorElement> & MouseEventHandler<HTMLButtonElement>;
}

export declare interface IFourServicesValue {
    main: {
        title: string;
    };
    services: IFourServicesValueServices;
}

export declare interface IFourServicesValueService {
    description: string;
    text: string;
}

export declare interface IFourServicesValueServices {
    first_service: IFourServicesValueService;
    second_service: IFourServicesValueService;
    third_service: IFourServicesValueService;
    fourth_service: IFourServicesValueService;
}

export declare interface IGridText {
    id: number;
    value: IGridTextValue;
}

export declare interface IGridText_alias_1 {
    id: number;
    value: IGridTextValue_alias_1;
}

export declare interface IGridTextValue {
    title: string;
    list: IGridTextValueAdvantage[];
}

export declare interface IGridTextValue_alias_1 {
    title: string;
    list: IGridTextValueAdvantage_alias_1[];
}

export declare interface IGridTextValueAdvantage {
    title: string;
    subtitle: string;
    image?: string;
}

export declare interface IGridTextValueAdvantage_alias_1 {
    title: string;
    subtitle: string;
    image?: string;
}

export declare interface IOfferBlock {
    id: number;
    value: IOfferBlockValue;
    onButtonClick?: MouseEventHandler<HTMLAnchorElement> & MouseEventHandler<HTMLButtonElement>;
}

export declare interface IOfferBlock_alias_1 {
    id: number;
    value: IOfferBlockValue_alias_1;
    onButtonClick?: MouseEventHandler<HTMLAnchorElement> & MouseEventHandler<HTMLButtonElement>;
}

export declare interface IOfferBlockValue {
    title: string;
    subtitle: string;
    show_button: boolean;
    button_text: string;
    show_adv: boolean;
    image: string | null;
    advantage: IOfferBlockValueAdvantage[];
}

export declare interface IOfferBlockValue_alias_1 {
    title: string;
    subtitle: string;
    show_button: boolean;
    button_text: string;
    show_adv: boolean;
    image: string | null;
    advantage: IOfferBlockValueAdvantage_alias_1[];
}

export declare interface IOfferBlockValueAdvantage {
    title: string;
    image: string;
}

export declare interface IOfferBlockValueAdvantage_alias_1 {
    title: string;
    subtitle: string;
}

export declare interface IPortfolio {
    id: number;
    value: IPortfolioValue;
}

export declare interface IPortfolioItems {
    id: string | number;
    title: string;
    subtitle: string;
    subtitle2?: string;
    description: string;
    tags: Array<{
        title: string;
    }>;
}

export declare interface IPortfolioList {
    title: string;
    list: IPortfolioItems[];
    isActive?: boolean;
}

export declare interface IPortfolioValue {
    title: string;
    list: IPortfolioList[];
}

export declare interface IPrice1 {
    id: number;
    value: IPrice1Value;
    onButtonClick?: MouseEventHandler<HTMLAnchorElement> & MouseEventHandler<HTMLButtonElement>;
}

export declare interface IPrice1Value {
    title: string;
    subtitle: string;
    button_text: string;
    prices: IPrice1ValuePrices[];
}

export declare interface IPrice1ValuePrices {
    id: number;
    title: string;
    price: number;
    is_active: boolean;
    list: IPrice1ValuePricesItem[];
}

export declare interface IPrice1ValuePricesItem {
    id: number;
    title: string;
}

export declare interface IPrice2 {
    id: number;
    value: IPrice2Value;
    onButtonClick?: MouseEventHandler<HTMLAnchorElement> & MouseEventHandler<HTMLButtonElement>;
}

export declare interface IPrice2Value {
    title: string;
    subtitle: string;
    button_text: string;
    prices: IPrice2ValuePrices[];
}

export declare interface IPrice2ValuePrices {
    id: number;
    title: string;
    price: number;
    is_active: boolean;
    list: IPrice2ValuePricesItem[];
}

export declare interface IPrice2ValuePricesItem {
    id: number;
    title: string;
}

export declare interface IStepper {
    id: number;
    value: IStepperValue;
}

export declare interface IStepperItems {
    id: string | number;
    title: string;
    image: string;
}

export declare interface IStepperList {
    title: string;
    image: string;
    list: IStepperItems[];
}

export declare interface IStepperValue {
    title: string;
    list: IStepperList[];
}

export declare const scheme: IScheme;

export declare const scheme_alias_1: IScheme;

export declare const scheme_alias_10: IScheme;

export declare const scheme_alias_2: IScheme;

export declare const scheme_alias_3: IScheme;

export declare const scheme_alias_4: IScheme;

export declare const scheme_alias_5: IScheme;

export declare const scheme_alias_6: IScheme;

export declare const scheme_alias_7: IScheme;

export declare const scheme_alias_8: IScheme;

export declare const scheme_alias_9: IScheme;

export declare const tabsTheme: {
    baseStyle?: {
        tab: {};
        tabpanel: {};
    } | undefined;
    sizes?: {
        xl: {
            root: {
                gap: string;
            };
            tab: {
                fontFamily: string;
                fontWeight: string;
                fontSize: string;
                paddingTop: string;
                paddingBottom: string;
                px: string;
            };
            tabpanel: {
                py: string;
                px: string;
            };
            tablist: {
                gap: string;
            };
        };
    } | undefined;
    variants?: {
        [key: string]: PartsStyleInterpolation<    {
        keys: ("tab" | "tablist" | "tabpanel" | "root" | "tabpanels" | "indicator")[];
        }>;
    } | undefined;
    defaultProps?: {
        size?: "xl" | undefined;
        variant?: string | number | undefined;
        colorScheme?: string | undefined;
    } | undefined;
    parts: ("tab" | "tablist" | "tabpanel" | "root" | "tabpanels" | "indicator")[];
};

export { }
