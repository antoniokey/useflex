import { __assign } from "tslib";
import React from 'react';
import { Display, Type } from './enums/element.enum';
export var createReactElement = function (elementType, style, className, children) {
    var el = React.createElement(elementType, {
        style: style,
        className: className,
    }, children);
    return el;
};
export var fetchContainerStyle = function (props) { return (__assign({ display: Display.Flex, flexDirection: props.direction, width: props.width, height: props.height, justifyContent: props.justifyContent, alignItems: props.alignItems, flex: props.flex, flexGrow: props.flexGrow, flexShrink: props.flexShrink, flexBasis: props.flexBasis, alignSelf: props.alignSelf, flexWrap: props.flexWrap, flexFlow: props.flexFlow ? props.flexFlow : props.direction + " " + props.flexWrap }, props.style)); };
export var fetchContainerElementType = function (props) { return props.type ? props.type : Type.Div; };
export var fetchItemStyle = function (props) { return (__assign({ flex: props.flex, flexGrow: props.flexGrow, flexShrink: props.flexShrink, flexBasis: props.flexBasis, alignSelf: props.alignSelf, height: props.height, width: props.width, order: props.order }, props.style)); };
export var fetchItemElementType = function (props) { return props.type ? props.type : props.children.type; };
export var fetchItemElementChildren = function (props) { return props.type ? props.children : props.children.props.children; };
//# sourceMappingURL=utils.js.map