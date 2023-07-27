const generateWrap = (builder: any) => {
  builder.wrap = {};

  builder.wrap.nowrap = () => {
    builder.styles.wrap = 'nowrap';
    return builder;
  };
  builder.wrap.wrap = () => {
    builder.styles.wrap = 'wrap';
    return builder;
  };
  builder.wrap.wrapReverse = () => {
    builder.styles.wrap = 'wrap-reverse';
    return builder;
  };
};

export { generateWrap };
