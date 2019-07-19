"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
exports.FlexItem = function (props) {
    var style = utils_1.fetchFlexItemStyle(props);
    var elementType = utils_1.fetchFlexItemElementType(props);
    var elementChildren = utils_1.fetchFlexItemElementChildren(props);
    return utils_1.createReactElement(elementType, style, props.className ? props.className : '', elementChildren);
};
