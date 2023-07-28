const generateAlignmentProp = (builder: any, propName: string) => {
  builder[propName] = {};

  builder[propName].start = () => {
    builder.styles[propName] = 'flex-start';
    return builder;
  };
  builder[propName].end = () => {
    builder.styles[propName] = 'flex-end';
    return builder;
  };
  builder[propName].center = () => {
    builder.styles[propName] = 'center';
    return builder;
  };
  builder[propName].stretch = () => {
    builder.styles[propName] = 'stretch';
    return builder;
  };
  builder[propName].between = () => {
    builder.styles[propName] = 'space-between';
    return builder;
  };
  builder[propName].around = () => {
    builder.styles[propName] = 'space-around';
    return builder;
  };
};
export { generateAlignmentProp };
