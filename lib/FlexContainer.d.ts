/// <reference types="react" />
interface FlexContainerProps {
    className?: string;
    width?: string;
    height?: string;
    flex?: string;
    type?: "horizontal" | "vertical";
    alignSelf?: "auto" | "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
    alignItems?: "auto" | "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
    wrap?: "nowrap" | "wrap" | "wrap-reverse";
    minWidth?: string;
    minHeight?: string;
    overflow?: string;
    padding?: number;
    margin?: number;
    gap?: number;
    style?: any;
    getsize?: any;
    children?: any;
}
export declare const FlexContainer: (props?: FlexContainerProps) => JSX.Element;
export default FlexContainer;
