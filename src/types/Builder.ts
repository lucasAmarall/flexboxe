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
  top: rawProp<number | string>;
  bottom: rawProp<number | string>;
  left: rawProp<number | string>;
  right: rawProp<number | string>;
  vertical: rawProp<number | string>;
  horizontal: rawProp<number | string>;
  all: rawProp<number | string>;
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
  // BORDER RADIUS
  borderTopLeftRadius: number;
  borderTopRightRadius: number;
  borderBottomLeftRadius: number;
  borderBottomRightRadius: number;
  borderRadius: number;
  // BORDER COLORS
  borderTopColor: string;
  borderLeftColor: string;
  borderRightColor: string;
  borderBottomColor: string;
  borderColor: string;
  // BORDER WIDTH
  borderTopWidth: number;
  borderLeftWidth: number;
  borderRightWidth: number;
  borderBottomWidth: number;
  position: 'absolute' | 'relative';
};

export type TBuilder = {
  styles: Partial<TStyles>;
  width: rawProp<number | string>;
  height: rawProp<number | string>;
  minWidth: rawProp<number | string>;
  minHeight: rawProp<number | string>;
  maxWidth: rawProp<number | string>;
  maxHeight: rawProp<number | string>;
  top: rawProp<number | string>;
  left: rawProp<number | string>;
  bottom: rawProp<number | string>;
  right: rawProp<number | string>;
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
  background: {
    color: rawProp<string>;
    image: rawProp<string>;
    position: {
      center: () => TBuilder;
      set: rawProp<string>;
    };
  };
  border: {
    width: {
      all: rawProp<number>;
      top: rawProp<number>;
      left: rawProp<number>;
      right: rawProp<number>;
      bottom: rawProp<number>;
    };
    color: {
      all: rawProp<string>;

      top: rawProp<string>;
      left: rawProp<string>;
      right: rawProp<string>;
      bottom: rawProp<string>;
    };
    radius: {
      all: rawProp<number | string>;
      top: {
        left: rawProp<number | string>;
        right: rawProp<number | string>;
      };
      bottom: {
        left: rawProp<number | string>;
        right: rawProp<number | string>;
      };
    };
  };
  font: {
    color: rawProp<string>;
    family: rawProp<string>;
    size: rawProp<number>;
    lineHeight: rawProp<number | string>;
    spacing: rawProp<number | string>;
    toLowerCase: () => TBuilder;
    toUpperCase: () => TBuilder;
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
