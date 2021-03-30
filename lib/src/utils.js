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
export var fetchFlexContainerStyle = function (props) { return (__assign({ display: Display.Flex, flexDirection: props.direction, width: props.width, height: props.height, justifyContent: props.justifyContent, alignItems: props.alignItems, flex: props.flex, flexGrow: props.flexGrow, flexShrink: props.flexShrink, flexBasis: props.flexBasis, alignSelf: props.alignSelf, flexWrap: props.flexWrap, flexFlow: props.flexFlow ? props.flexFlow : props.direction + " " + props.flexWrap }, props.style)); };
export var fetchContainerElementType = function (props) { return props.flexContainerElementType ? props.flexContainerElementType : Type.Div; };
export var fetchFlexItemStyle = function (props) { return (__assign({ flex: props.flex, flexGrow: props.flexGrow, flexShrink: props.flexShrink, flexBasis: props.flexBasis, alignSelf: props.alignSelf, height: props.height, width: props.width, order: props.order }, props.style)); };
export var fetchFlexItemElementType = function (props) { return props.itemType ? props.itemType : props.children.type; };
export var fetchFlexItemElementChildren = function (props) { return props.itemType ? props.children : props.children.props.children; };
//# sourceMappingURL=utils.js.map