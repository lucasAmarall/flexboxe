const generateFont = (builder: any) => {
  builder.font = {};

  builder.font.family = (family: string) => {
    builder.styles.fontFamily = family;
    return builder;
  };
  builder.font.size = (size: string) => {
    builder.styles.fontSize = size;
    return builder;
  };
  builder.font.spacing = (spacing: string) => {
    builder.styles.letterSpacing = spacing;
    return builder;
  };
  builder.font.lineHeight = (lineHeight: string) => {
    builder.styles.lineHeight = lineHeight;
    return builder;
  };
};

export { generateFont };
