"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generateAlignmentProp_1 = require("./utils/generateAlignmentProp");
var generateAllDirectionsProp_1 = require("./utils/generateAllDirectionsProp");
var generateDirections_1 = require("./utils/generateDirections");
var generateNumberProp_1 = require("./utils/generateNumberProp");
var generateWrap_1 = require("./utils/generateWrap");
var flexboxe = function () {
    var builder = {
        styles: {
            display: 'flex',
            flexDirection: 'column',
        },
    };
    (0, generateNumberProp_1.generateNumberProp)(builder, 'flex');
    (0, generateNumberProp_1.generateNumberProp)(builder, 'order');
    (0, generateNumberProp_1.generateNumberProp)(builder, 'shrink');
    (0, generateNumberProp_1.generateNumberProp)(builder, 'basis');
    (0, generateNumberProp_1.generateNumberProp)(builder, 'grow');
    (0, generateAlignmentProp_1.generateAlignmentProp)(builder, 'justifyContent');
    (0, generateAlignmentProp_1.generateAlignmentProp)(builder, 'alignContent');
    (0, generateAlignmentProp_1.generateAlignmentProp)(builder, 'alignItems');
    (0, generateDirections_1.generateDirections)(builder);
    (0, generateAllDirectionsProp_1.generateAllDirectionsProp)(builder, 'margin');
    (0, generateAllDirectionsProp_1.generateAllDirectionsProp)(builder, 'padding');
    (0, generateWrap_1.generateWrap)(builder);
    builder.build = function () {
        return builder.styles;
    };
    return builder;
};
exports.default = flexboxe;
