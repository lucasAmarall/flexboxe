const generateDirections = (builder: any) => {
  builder.flexDirection = {};

  builder.flexDirection.row = () => {
    builder.styles.flexDirection = 'row';
    return builder;
  };

  builder.flexDirection.column = () => {
    builder.styles.flexDirection = 'column';
    return builder;
  };
  builder.flexDirection.columnReverse = () => {
    builder.styles.flexDirection = 'column-reverse';
    return builder;
  };
  builder.flexDirection.rowReverse = () => {
    builder.styles.flexDirection = 'row-reverse';
    return builder;
  };
};

export { generateDirections };
