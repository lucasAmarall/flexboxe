"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateNumberProp = void 0;
var generateNumberProp = function (builder, propName) {
    builder[propName] = function (v) {
        builder.styles[propName] = v;
        return builder;
    };
};
exports.generateNumberProp = generateNumberProp;
