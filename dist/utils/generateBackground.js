"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateBackground = void 0;
var generateBackground = function (builder) {
    builder.background = {};
    builder.background.position = {};
    builder.background.color = function (color) {
        builder.styles.backgroundColor = color;
        return builder;
    };
    builder.background.image = function (url) {
        builder.styles.backgroundImage = "url('".concat(url, "')");
        return builder;
    };
    builder.background.position.center = function () {
        builder.styles.backgroundPosition = 'center';
        return builder;
    };
    builder.background.position.set = function (v) {
        builder.styles.backgroundPosition = v;
        return builder;
    };
};
exports.generateBackground = generateBackground;
