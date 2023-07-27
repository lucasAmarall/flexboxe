"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var flexboxe = function () {
    var builder = {
        styles: {
            display: 'flex',
        },
    };
    builder.flexDirection = function (direction) {
        builder.styles.flexDirection = direction;
        return builder;
    };
    builder.wrap = function (wrap) {
        builder.styles.flexWrap = wrap;
        return builder;
    };
    builder.justifyContent = function (justify) {
        builder.styles.justifyContent = justify;
        return builder;
    };
    builder.alignItems = function (alignment) {
        builder.styles.alignItems = alignment;
        return builder;
    };
    builder.alignContent = function (alignment) {
        builder.styles.alignContent = alignment;
        return builder;
    };
    builder.grow = function (grow) {
        builder.styles.flexGrow = grow;
        return builder;
    };
    builder.basis = function (basis) {
        builder.styles.flexBasis = basis;
        return builder;
    };
    builder.shrink = function (shrink) {
        builder.styles.flexShrink = shrink;
        return builder;
    };
    builder.flex = function (flex) {
        builder.styles.flex = flex;
        return builder;
    };
    builder.order = function (order) {
        builder.styles.order = order;
        return builder;
    };
    builder.alignSelf = function (alignment) {
        builder.styles.alignSelf = alignment;
        return builder;
    };
    builder.build = function () {
        return builder.styles;
    };
    return builder;
};
exports.default = flexboxe;
