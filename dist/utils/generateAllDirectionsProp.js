"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAllDirectionsProp = void 0;
var generateAllDirectionsProp = function (builder, propName) {
    builder[propName] = {};
    builder[propName]['top'] = function (v) {
        builder.styles[propName + 'Top'] = v;
        return builder;
    };
    builder[propName]['left'] = function (v) {
        builder.styles[propName + 'Left'] = v;
        return builder;
    };
    builder[propName]['right'] = function (v) {
        builder.styles[propName + 'Right'] = v;
        return builder;
    };
    builder[propName]['bottom'] = function (v) {
        builder.styles[propName + 'Bottom'] = v;
        return builder;
    };
    builder[propName]['vertical'] = function (v) {
        builder[propName].bottom(v);
        builder[propName].top(v);
        return builder;
    };
    builder[propName]['horizontal'] = function (v) {
        builder[propName].left(v);
        builder[propName].right(v);
        return builder;
    };
};
exports.generateAllDirectionsProp = generateAllDirectionsProp;
