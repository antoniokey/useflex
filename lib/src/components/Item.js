import { createReactElement, fetchItemStyle, fetchItemElementType, fetchItemElementChildren } from '../utils';
export var Item = function (props) {
    var style = fetchItemStyle(props);
    var elementType = fetchItemElementType(props);
    var elementChildren = fetchItemElementChildren(props);
    return createReactElement(elementType, style, props.className ? props.className : '', elementChildren);
};
//# sourceMappingURL=Item.js.map