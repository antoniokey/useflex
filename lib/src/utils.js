import * as tslib_1 from "tslib";
import React from 'react';
export var createReactElement = function (elementType, style, className, children) {
    var el = React.createElement(elementType, {
        style: style,
        className: className,
    }, children);
    return el;
};
export var fetchFlexContainerStyle = function (props) { return (tslib_1.__assign({ display: 'flex', flexDirection: props.direction, width: props.width, height: props.height, justifyContent: props.justifyContent, alignItems: props.alignItems, flex: props.flex, flexGrow: props.flexGrow, flexShrink: props.flexShrink, flexBasis: props.flexBasis, alignSelf: props.alignSelf, flexWrap: props.flexWrap }, props.style)); };
export var fetchContainerElementType = function (props) { return props.flexContainerElementType ? props.flexContainerElementType : 'div'; };
export var fetchFlexItemStyle = function (props) { return (tslib_1.__assign({ flex: props.flex, flexGrow: props.flexGrow, flexShrink: props.flexShrink, flexBasis: props.flexBasis, alignSelf: props.alignSelf, height: props.height, width: props.width }, props.style)); };
export var fetchFlexItemElementType = function (props) { return props.itemType ? props.itemType : props.children.type; };
export var fetchFlexItemElementChildren = function (props) { return props.itemType ? props.children : props.children.props.children; };
//# sourceMappingURL=utils.js.map