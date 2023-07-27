"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDirections = void 0;
var generateDirections = function (builder) {
    builder.flexDirection = {};
    builder.flexDirection.row = function () {
        builder.styles.flexDirection = 'row';
        return builder;
    };
    builder.flexDirection.column = function () {
        builder.styles.flexDirection = 'column';
        return builder;
    };
    builder.flexDirection.columnReverse = function () {
        builder.styles.flexDirection = 'column-reverse';
        return builder;
    };
    builder.flexDirection.rowReverse = function () {
        builder.styles.flexDirection = 'row-reverse';
        return builder;
    };
};
exports.generateDirections = generateDirections;
