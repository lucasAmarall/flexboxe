"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRawProp = void 0;
var generateRawProp = function (builder, propName) {
    builder[propName] = function (v) {
        builder.styles[propName] = v;
        return builder;
    };
};
exports.generateRawProp = generateRawProp;
