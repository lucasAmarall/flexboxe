import { TBuilder } from './types/Builder';
import { generateAlignmentProp } from './utils/generateAlignmentProp';
import { generateAllDirectionsProp } from './utils/generateAllDirectionsProp';
import { generateBackground } from './utils/generateBackground';
import { generateBorders } from './utils/generateBorders';
import { generateDirections } from './utils/generateDirections';
import { generateFont } from './utils/generateFontProp';
import { generateRawProp } from './utils/generateRawProp';
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

  generateRawProp<number | string>(builder, 'width');
  generateRawProp<number | string>(builder, 'height');
  generateRawProp<number | string>(builder, 'minWidth');
  generateRawProp<number | string>(builder, 'minHeight');
  generateRawProp<number | string>(builder, 'maxWidth');
  generateRawProp<number | string>(builder, 'maxHeight');
  generateRawProp<number>(builder, 'top');
  generateRawProp<number>(builder, 'left');
  generateRawProp<number>(builder, 'bottom');
  generateRawProp<number>(builder, 'right');
  generateRawProp<number>(builder, 'flex');
  generateRawProp<number>(builder, 'order');
  generateRawProp<number>(builder, 'shrink');
  generateRawProp<number>(builder, 'basis');
  generateRawProp<number>(builder, 'grow');
  generateAlignmentProp(builder, 'justifyContent');
  generateAlignmentProp(builder, 'alignContent');
  generateAlignmentProp(builder, 'alignItems');
  position(builder);
  generateDirections(builder);
  generateAllDirectionsProp(builder, 'margin');
  generateAllDirectionsProp(builder, 'padding');
  generateWrap(builder);
  generateBorders(builder);
  generateFont(builder);
  generateBackground(builder);
  builder.build = () => {
    return builder.styles;
  };

  return builder;
};

export default flexboxe;
