import { TBuilder } from './interfaces/Builder';

const flexboxe = () => {
  const builder: TBuilder = {
    styles: {
      display: 'flex',
    },
  } as TBuilder;

  builder.flexDirection = (direction) => {
    builder.styles.flexDirection = direction;
    return builder;
  };

  builder.wrap = (wrap) => {
    builder.styles.flexWrap = wrap;
    return builder;
  };

  builder.justifyContent = (justify) => {
    builder.styles.justifyContent = justify;
    return builder;
  };

  builder.alignItems = (alignment) => {
    builder.styles.alignItems = alignment;
    return builder;
  };

  builder.alignContent = (alignment) => {
    builder.styles.alignContent = alignment;
    return builder;
  };

  builder.grow = (grow) => {
    builder.styles.flexGrow = grow;
    return builder;
  };

  builder.basis = (basis) => {
    builder.styles.flexBasis = basis;
    return builder;
  };

  builder.shrink = (shrink) => {
    builder.styles.flexShrink = shrink;
    return builder;
  };

  builder.flex = (flex) => {
    builder.styles.flex = flex;
    return builder;
  };

  builder.order = (order) => {
    builder.styles.order = order;
    return builder;
  };

  builder.alignSelf = (alignment) => {
    builder.styles.alignSelf = alignment;
    return builder;
  };

  builder.build = () => {
    return builder.styles;
  };

  return builder;
};

export default flexboxe;
