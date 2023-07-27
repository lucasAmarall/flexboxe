"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAlignmentProp = void 0;
var generateAlignmentProp = function (builder, propName) {
    builder[propName] = {};
    builder[propName].start = function () {
        builder.styles[propName] = 'flex-start';
        return builder;
    };
    builder[propName].end = function () {
        builder.styles[propName] = 'flex-end';
        return builder;
    };
    builder[propName].center = function () {
        builder.styles[propName] = 'center';
        return builder;
    };
    builder[propName].stretch = function () {
        builder.styles[propName] = 'stretch';
        return builder;
    };
    builder[propName].between = function () {
        builder.styles[propName] = 'space-between';
        return builder;
    };
    builder[propName].around = function () {
        builder.styles[propName] = 'space-around';
        return builder;
    };
};
exports.generateAlignmentProp = generateAlignmentProp;
