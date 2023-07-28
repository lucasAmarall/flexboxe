const generateBorders = (builder: any) => {
  builder.border = {};
  builder.border.width = {};
  builder.border.radius = {};
  builder.border.color = {};
  builder.border.radius.top = {};
  builder.border.radius.bottom = {};

  // BORDER WIDTH
  builder.border.width.top = (v: number) => {
    builder.styles.borderStyle = 'solid';
    builder.styles.borderTopWidth = v;
    return builder;
  };

  builder.border.width.bottom = (v: number) => {
    builder.styles.borderStyle = 'solid';
    builder.styles.borderBottomWidth = v;
    return builder;
  };

  builder.border.width.left = (v: number) => {
    builder.styles.borderStyle = 'solid';
    builder.styles.borderLeftWidth = v;
    return builder;
  };

  builder.border.width.right = (v: number) => {
    builder.styles.borderStyle = 'solid';
    builder.styles.borderRightWidth = v;
    return builder;
  };

  builder.border.width.all = (v: number) => {
    builder.styles.borderStyle = 'solid';
    builder.styles.borderTopWidth = v;
    builder.styles.borderBottomWidth = v;
    builder.styles.borderLeftWidth = v;
    builder.styles.borderRightWidth = v;
    return builder;
  };

  // BORDER COLOR
  builder.border.color.top = (v: number) => {
    builder.styles.borderTopColor = v;
    return builder;
  };

  builder.border.color.bottom = (v: number) => {
    builder.styles.borderBottomColor = v;
    return builder;
  };

  builder.border.color.left = (v: number) => {
    builder.styles.borderLeftColor = v;
    return builder;
  };

  builder.border.color.right = (v: number) => {
    builder.styles.borderRightColor = v;
    return builder;
  };

  builder.border.color.all = (v: number) => {
    builder.styles.borderTopColor = v;
    builder.styles.borderBottomColor = v;
    builder.styles.borderLeftColor = v;
    builder.styles.borderRightColor = v;
    return builder;
  };

  // BORDER RADIUS
  builder.border.radius.top.left = (v: number) => {
    builder.styles.borderTopLeftRadius = v;
    return builder;
  };

  builder.border.radius.top.right = (v: number) => {
    builder.styles.borderTopRightRadius = v;
    return builder;
  };

  builder.border.radius.bottom.left = (v: number) => {
    builder.styles.borderBottomLeftRadius = v;
    return builder;
  };

  builder.border.radius.bottom.right = (v: number) => {
    builder.styles.borderBottomRightRadius = v;
    return builder;
  };

  builder.border.radius.all = (v: number) => {
    builder.styles.borderTopLeftRadius = v;
    builder.styles.borderTopRightRadius = v;
    builder.styles.borderBottomLeftRadius = v;
    builder.styles.borderBottomRightRadius = v;
    return builder;
  };
};

export { generateBorders };
