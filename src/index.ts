import { TBuilder } from './types/Builder';
import { generateAlignmentProp } from './utils/generateAlignmentProp';
import { generateAllDirectionsProp } from './utils/generateAllDirectionsProp';
import { generateDirections } from './utils/generateDirections';
import { generateNumberProp } from './utils/generateNumberProp';
import { generateWrap } from './utils/generateWrap';

const flexboxe = () => {
  const builder: TBuilder = {
    styles: {
      display: 'flex',
      flexDirection: 'column',
    },
  } as TBuilder;

  generateNumberProp(builder, 'flex');
  generateNumberProp(builder, 'order');
  generateNumberProp(builder, 'shrink');
  generateNumberProp(builder, 'basis');
  generateNumberProp(builder, 'grow');
  generateAlignmentProp(builder, 'justifyContent');
  generateAlignmentProp(builder, 'alignContent');
  generateAlignmentProp(builder, 'alignItems');
  generateDirections(builder);
  generateAllDirectionsProp(builder, 'margin');
  generateAllDirectionsProp(builder, 'padding');
  generateWrap(builder);

  builder.build = () => {
    return builder.styles;
  };

  return builder;
};

export default flexboxe;
