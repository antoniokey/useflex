import { createReactElement, fetchFlexItemStyle, fetchFlexItemElementType, fetchFlexItemElementChildren } from '../utils';
export var Item = function (props) {
    var style = fetchFlexItemStyle(props);
    var elementType = fetchFlexItemElementType(props);
    var elementChildren = fetchFlexItemElementChildren(props);
    return createReactElement(elementType, style, props.className ? props.className : '', elementChildren);
};
//# sourceMappingURL=Item.js.map