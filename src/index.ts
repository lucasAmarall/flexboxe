import { TBuilder } from './types/Builder';
import { generateAlignmentProp } from './utils/generateAlignmentProp';
import { generateAllDirectionsProp } from './utils/generateAllDirectionsProp';
import { generateDirections } from './utils/generateDirections';
import { generateFont } from './utils/generateFontProp';
import { generateNumberProp } from './utils/generateNumberProp';
import { generateWrap } from './utils/generateWrap';
import { position } from './utils/position';

const flexboxe = () => {
  const builder: TBuilder = {
    styles: {
      display: 'flex',
      flexDirection: 'column',
    },
    position: {},
  } as TBuilder;

  generateNumberProp(builder, 'top');
  generateNumberProp(builder, 'left');
  generateNumberProp(builder, 'bottom');
  generateNumberProp(builder, 'right');
  generateNumberProp(builder, 'flex');
  generateNumberProp(builder, 'order');
  generateNumberProp(builder, 'shrink');
  generateNumberProp(builder, 'basis');
  generateNumberProp(builder, 'grow');
  generateAlignmentProp(builder, 'justifyContent');
  generateAlignmentProp(builder, 'alignContent');
  generateAlignmentProp(builder, 'alignItems');
  position(builder);
  generateDirections(builder);
  generateAllDirectionsProp(builder, 'margin');
  generateAllDirectionsProp(builder, 'padding');
  generateWrap(builder);
  generateFont(builder);

  builder.build = () => {
    return builder.styles;
  };

  return builder;
};

export default flexboxe;
