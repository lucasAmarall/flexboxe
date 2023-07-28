import { TAlignContent, TDirection, TWrap } from './Flexboxe';

type NumberProp = (n: number) => TBuilder;
type StrProp = (t: string) => TBuilder;

type TAlignmentFactory = {
  start: () => TBuilder;
  end: () => TBuilder;
  center: () => TBuilder;
  stretch: () => TBuilder;
  between: () => TBuilder;
  around: () => TBuilder;
};

type AllDirectionProps = {
  top: NumberProp;
  bottom: NumberProp;
  left: NumberProp;
  right: NumberProp;
  vertical: NumberProp;
  horizontal: NumberProp;
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
  top: NumberProp;
  left: NumberProp;
  bottom: NumberProp;
  right: NumberProp;
  grow: NumberProp;
  basis: NumberProp;
  shrink: NumberProp;
  flex: NumberProp;
  order: NumberProp;
  build: () => any;

  alignItems: TAlignmentFactory;
  alignContent: TAlignmentFactory;
  justifyContent: TAlignmentFactory;
  margin: AllDirectionProps;
  padding: AllDirectionProps;
  font: {
    family: StrProp;
    size: NumberProp;
    lineHeight: NumberProp;
    spacing: NumberProp;
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
