"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.position = void 0;
var position = function (builder) {
    builder.position = {};
    builder.position.absolute = function () {
        builder.styles.position = 'absolute';
        return builder;
    };
    builder.position.relative = function () {
        builder.styles.position = 'relative';
        return builder;
    };
    builder.position.fullFill = function () {
        builder.position.absolute();
        builder.top(0);
        builder.left(0);
        builder.right(0);
        builder.bottom(0);
        return builder;
    };
};
exports.position = position;
