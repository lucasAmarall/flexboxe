"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generateAlignmentProp_1 = require("./utils/generateAlignmentProp");
var generateAllDirectionsProp_1 = require("./utils/generateAllDirectionsProp");
var generateBackground_1 = require("./utils/generateBackground");
var generateBorders_1 = require("./utils/generateBorders");
var generateDirections_1 = require("./utils/generateDirections");
var generateFontProp_1 = require("./utils/generateFontProp");
var generateRawProp_1 = require("./utils/generateRawProp");
var generateWrap_1 = require("./utils/generateWrap");
var position_1 = require("./utils/position");
var flexboxe = function () {
    var builder = {
        styles: {
            display: 'flex',
            flexDirection: 'column',
        },
        position: {},
    };
    (0, generateRawProp_1.generateRawProp)(builder, 'width');
    (0, generateRawProp_1.generateRawProp)(builder, 'height');
    (0, generateRawProp_1.generateRawProp)(builder, 'minWidth');
    (0, generateRawProp_1.generateRawProp)(builder, 'minHeight');
    (0, generateRawProp_1.generateRawProp)(builder, 'maxWidth');
    (0, generateRawProp_1.generateRawProp)(builder, 'maxHeight');
    (0, generateRawProp_1.generateRawProp)(builder, 'top');
    (0, generateRawProp_1.generateRawProp)(builder, 'left');
    (0, generateRawProp_1.generateRawProp)(builder, 'bottom');
    (0, generateRawProp_1.generateRawProp)(builder, 'right');
    (0, generateRawProp_1.generateRawProp)(builder, 'flex');
    (0, generateRawProp_1.generateRawProp)(builder, 'order');
    (0, generateRawProp_1.generateRawProp)(builder, 'shrink');
    (0, generateRawProp_1.generateRawProp)(builder, 'basis');
    (0, generateRawProp_1.generateRawProp)(builder, 'grow');
    (0, generateAlignmentProp_1.generateAlignmentProp)(builder, 'justifyContent');
    (0, generateAlignmentProp_1.generateAlignmentProp)(builder, 'alignContent');
    (0, generateAlignmentProp_1.generateAlignmentProp)(builder, 'alignItems');
    (0, position_1.position)(builder);
    (0, generateDirections_1.generateDirections)(builder);
    (0, generateAllDirectionsProp_1.generateAllDirectionsProp)(builder, 'margin');
    (0, generateAllDirectionsProp_1.generateAllDirectionsProp)(builder, 'padding');
    (0, generateWrap_1.generateWrap)(builder);
    (0, generateBorders_1.generateBorders)(builder);
    (0, generateFontProp_1.generateFont)(builder);
    (0, generateBackground_1.generateBackground)(builder);
    builder.build = function () {
        return builder.styles;
    };
    return builder;
};
exports.default = flexboxe;
