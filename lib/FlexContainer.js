"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
exports.FlexContainer = function (props) {
    var style = utils_1.fetchFlexContainerStyle(props);
    var elementType = utils_1.fetchContainerElementType(props);
    return utils_1.createReactElement(elementType, style, "flex-container" + (props.className ? ' ' + props.className : ''), props.children);
};
