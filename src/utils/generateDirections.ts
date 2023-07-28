const generateDirections = (builder: any) => {
  builder.direction = {};

  builder.direction.row = () => {
    builder.styles.flexDirection = 'row';
    return builder;
  };
  builder.direction.column = () => {
    builder.styles.flexDirection = 'column';
    return builder;
  };
  builder.direction.columnReverse = () => {
    builder.styles.flexDirection = 'column-reverse';
    return builder;
  };
  builder.direction.rowReverse = () => {
    builder.styles.flexDirection = 'row-reverse';
    return builder;
  };
};

export { generateDirections };
