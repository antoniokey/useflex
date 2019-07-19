import { createReactElement, fetchFlexContainerStyle, fetchContainerElementType, } from './utils';
export var FlexContainer = function (props) {
    var style = fetchFlexContainerStyle(props);
    var elementType = fetchContainerElementType(props);
    return createReactElement(elementType, style, "flex-container" + (props.className ? ' ' + props.className : ''), props.children);
};
//# sourceMappingURL=FlexContainer.js.map