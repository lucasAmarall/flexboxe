"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateFont = void 0;
var generateFont = function (builder) {
    builder.font = {};
    builder.font.family = function (family) {
        builder.styles.fontFamily = family;
        return builder;
    };
    builder.font.size = function (size) {
        builder.styles.fontSize = size;
        return builder;
    };
    builder.font.spacing = function (spacing) {
        builder.styles.letterSpacing = spacing;
        return builder;
    };
    builder.font.lineHeight = function (lineHeight) {
        builder.styles.lineHeight = lineHeight;
        return builder;
    };
};
exports.generateFont = generateFont;
