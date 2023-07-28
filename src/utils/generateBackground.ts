const generateBackground = (builder: any) => {
  builder.background = {};
  builder.background.position = {};

  builder.background.color = (color: string) => {
    builder.styles.backgroundColor = color;
    return builder;
  };
  builder.background.image = (url: string) => {
    builder.styles.backgroundImage = `url('${url}')`;
    return builder;
  };

  builder.background.position.center = () => {
    builder.styles.backgroundPosition = 'center';
    return builder;
  };

  builder.background.position.set = (v: string) => {
    builder.styles.backgroundPosition = v;
    return builder;
  };
};

export { generateBackground };
