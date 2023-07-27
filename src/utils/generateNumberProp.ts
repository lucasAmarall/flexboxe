const generateNumberProp = (builder: any, propName: string) => {
  builder[propName] = (v: number) => {
    builder.styles[propName] = v;
    return builder;
  };
};

export { generateNumberProp };
