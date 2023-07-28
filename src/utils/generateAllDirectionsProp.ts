const generateAllDirectionsProp = (builder: any, propName: string) => {
  builder[propName] = {};

  builder[propName]['top'] = (v: number) => {
    builder.styles[propName + 'Top'] = v;
    return builder;
  };
  builder[propName]['left'] = (v: number) => {
    builder.styles[propName + 'Left'] = v;
    return builder;
  };
  builder[propName]['right'] = (v: number) => {
    builder.styles[propName + 'Right'] = v;
    return builder;
  };
  builder[propName]['bottom'] = (v: number) => {
    builder.styles[propName + 'Bottom'] = v;
    return builder;
  };

  builder[propName]['vertical'] = (v: number) => {
    builder[propName].bottom(v);
    builder[propName].top(v);
    return builder;
  };

  builder[propName]['horizontal'] = (v: number) => {
    builder[propName].left(v);
    builder[propName].right(v);
    return builder;
  };

  builder[propName]['all'] = (v: number) => {
    builder[propName].left(v);
    builder[propName].right(v);
    builder[propName].bottom(v);
    builder[propName].top(v);
    return builder;
  };
};

export { generateAllDirectionsProp };
