"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDirections = void 0;
var generateDirections = function (builder) {
    builder.direction = {};
    builder.direction.row = function () {
        builder.styles.flexDirection = 'row';
        return builder;
    };
    builder.direction.column = function () {
        builder.styles.flexDirection = 'column';
        return builder;
    };
    builder.direction.columnReverse = function () {
        builder.styles.flexDirection = 'column-reverse';
        return builder;
    };
    builder.direction.rowReverse = function () {
        builder.styles.flexDirection = 'row-reverse';
        return builder;
    };
};
exports.generateDirections = generateDirections;
