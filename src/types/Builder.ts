import { TAlignContent, TDirection, TWrap } from './Flexboxe';

type NumberProp = (grow: number) => TBuilder;
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
};

export type TBuilder = {
  styles: Partial<TStyles>;
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
  flexDirection: {
    row: () => TBuilder;
    column: () => TBuilder;
    columnReverse: () => TBuilder;
    rowReverse: () => TBuilder;
  };
  wrap: {
    wrap: () => TBuilder;
    nowrap: () => TBuilder;
    wrapReverse: () => TBuilder;
  };
};
