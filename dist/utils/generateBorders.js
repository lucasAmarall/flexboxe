"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateBorders = void 0;
var generateBorders = function (builder) {
    builder.border = {};
    builder.border.width = {};
    builder.border.radius = {};
    builder.border.color = {};
    builder.border.radius.top = {};
    builder.border.radius.bottom = {};
    // BORDER WIDTH
    builder.border.width.top = function (v) {
        builder.styles.borderStyle = 'solid';
        builder.styles.borderTopWidth = v;
        return builder;
    };
    builder.border.width.bottom = function (v) {
        builder.styles.borderStyle = 'solid';
        builder.styles.borderBottomWidth = v;
        return builder;
    };
    builder.border.width.left = function (v) {
        builder.styles.borderStyle = 'solid';
        builder.styles.borderLeftWidth = v;
        return builder;
    };
    builder.border.width.right = function (v) {
        builder.styles.borderStyle = 'solid';
        builder.styles.borderRightWidth = v;
        return builder;
    };
    builder.border.width.all = function (v) {
        builder.styles.borderStyle = 'solid';
        builder.styles.borderTopWidth = v;
        builder.styles.borderBottomWidth = v;
        builder.styles.borderLeftWidth = v;
        builder.styles.borderRightWidth = v;
        return builder;
    };
    // BORDER COLOR
    builder.border.color.top = function (v) {
        builder.styles.borderTopColor = v;
        return builder;
    };
    builder.border.color.bottom = function (v) {
        builder.styles.borderBottomColor = v;
        return builder;
    };
    builder.border.color.left = function (v) {
        builder.styles.borderLeftColor = v;
        return builder;
    };
    builder.border.color.right = function (v) {
        builder.styles.borderRightColor = v;
        return builder;
    };
    builder.border.color.all = function (v) {
        builder.styles.borderTopColor = v;
        builder.styles.borderBottomColor = v;
        builder.styles.borderLeftColor = v;
        builder.styles.borderRightColor = v;
        return builder;
    };
    // BORDER RADIUS
    builder.border.radius.top.left = function (v) {
        builder.styles.borderTopLeftRadius = v;
        return builder;
    };
    builder.border.radius.top.right = function (v) {
        builder.styles.borderTopRightRadius = v;
        return builder;
    };
    builder.border.radius.bottom.left = function (v) {
        builder.styles.borderBottomLeftRadius = v;
        return builder;
    };
    builder.border.radius.bottom.right = function (v) {
        builder.styles.borderBottomRightRadius = v;
        return builder;
    };
    builder.border.radius.all = function (v) {
        builder.styles.borderTopLeftRadius = v;
        builder.styles.borderTopRightRadius = v;
        builder.styles.borderBottomLeftRadius = v;
        builder.styles.borderBottomRightRadius = v;
        return builder;
    };
};
exports.generateBorders = generateBorders;
