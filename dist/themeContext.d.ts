import { ThemeProps } from './interfaces';
export declare const themeMapping: {
    mainColor: string;
    backgroundColor: string;
    shadowColor: string;
    linkColor: string;
    fontFamily: string;
    height: string;
    sliderWidth: string;
    padding: string;
};
export declare const defaultTheme: ThemeProps;
export declare const useTheme: (theme: ThemeProps) => void;
