import { TAlignContent, TDirection, TWrap } from './Flexboxe';

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
  alignContent: (alignment: TAlignContent) => TBuilder;
  alignItems: (alignment: TAlignContent) => TBuilder;
  alignSelf: (alignment: TAlignContent) => TBuilder;
  justifyContent: (justify: TAlignContent) => TBuilder;
  flexDirection: (alignment: TDirection) => TBuilder;
  wrap: (alignment: TWrap) => TBuilder;
  grow: (grow: number) => TBuilder;
  basis: (basis: number) => TBuilder;
  shrink: (shrink: number) => TBuilder;
  flex: (flex: number) => TBuilder;
  order: (order: number) => TBuilder;
  build: () => Partial<TStyles>;
};
