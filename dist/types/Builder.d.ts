import { TAlignContent, TDirection, TWrap } from './Flexboxe';
type rawProp<T> = (t: T) => TBuilder;
type TAlignmentFactory = {
    start: () => TBuilder;
    end: () => TBuilder;
    center: () => TBuilder;
    stretch: () => TBuilder;
    between: () => TBuilder;
    around: () => TBuilder;
};
type AllDirectionProps = {
    top: rawProp<number>;
    bottom: rawProp<number>;
    left: rawProp<number>;
    right: rawProp<number>;
    vertical: rawProp<number>;
    horizontal: rawProp<number>;
};
type TStyles = {
    display: 'flex';
    alignItems: TAlignContent;
    alignContent: TAlignContent;
    alignSelf: TAlignContent;
    justifyContent: TAlignContent;
    flexDirection: TDirection;
    flexWrap: TWrap;
    flexGrow: number;
    flexBasis: number;
    flex: number;
    flexShrink: number;
    order: number;
    top: number;
    left: number;
    bottom: number;
    right: number;
    fontSize: number;
    lineHeight: number;
    letterSpacing: number;
    fontFamily: string;
    position: 'absolute' | 'relative';
};
export type TBuilder = {
    styles: Partial<TStyles>;
    width: rawProp<number | string>;
    height: rawProp<number | string>;
    top: rawProp<number>;
    left: rawProp<number>;
    bottom: rawProp<number>;
    right: rawProp<number>;
    grow: rawProp<number>;
    basis: rawProp<number>;
    shrink: rawProp<number>;
    flex: rawProp<number>;
    order: rawProp<number>;
    build: () => any;
    alignItems: TAlignmentFactory;
    alignContent: TAlignmentFactory;
    justifyContent: TAlignmentFactory;
    margin: AllDirectionProps;
    padding: AllDirectionProps;
    font: {
        family: rawProp<string>;
        size: rawProp<number>;
        lineHeight: rawProp<number>;
        spacing: rawProp<number>;
    };
    direction: {
        row: () => TBuilder;
        column: () => TBuilder;
        columnReverse: () => TBuilder;
        rowReverse: () => TBuilder;
    };
    position: {
        relative: () => TBuilder;
        absolute: () => TBuilder;
        fullFill: () => TBuilder;
    };
    wrap: {
        wrap: () => TBuilder;
        nowrap: () => TBuilder;
        wrapReverse: () => TBuilder;
    };
};
export {};
