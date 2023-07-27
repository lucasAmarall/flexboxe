"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateWrap = void 0;
var generateWrap = function (builder) {
    builder.wrap = {};
    builder.wrap.nowrap = function () {
        builder.styles.wrap = 'nowrap';
        return builder;
    };
    builder.wrap.wrap = function () {
        builder.styles.wrap = 'wrap';
        return builder;
    };
    builder.wrap.wrapReverse = function () {
        builder.styles.wrap = 'wrap-reverse';
        return builder;
    };
};
exports.generateWrap = generateWrap;
