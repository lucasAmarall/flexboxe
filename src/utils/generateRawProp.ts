const generateRawProp = <T>(builder: any, propName: string) => {
  builder[propName] = (v: T) => {
    builder.styles[propName] = v;
    return builder;
  };
};

export { generateRawProp };
