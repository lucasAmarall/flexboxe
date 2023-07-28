const generateFont = (builder: any) => {
  builder.font = {};

  builder.font.color = (color: string) => {
    builder.styles.color = color;
    return builder;
  };
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
  builder.font.toLowerCase = () => {
    builder.styles.textTransform = 'lowercase';
    return builder;
  };
  builder.font.toUpperCase = () => {
    builder.styles.textTransform = 'uppercase';
    return builder;
  };
};

export { generateFont };
