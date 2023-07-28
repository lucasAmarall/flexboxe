const position = (builder: any) => {
  builder.position = {};

  builder.position.absolute = () => {
    builder.styles.position = 'absolute';
    return builder;
  };
  builder.position.relative = () => {
    builder.styles.position = 'relative';
    return builder;
  };
  builder.position.fullFill = () => {
    builder.position.absolute();
    builder.top(0);
    builder.left(0);
    builder.right(0);
    builder.bottom(0);
    return builder;
  };
};

export { position };
