import { createReactElement, fetchContainerStyle, fetchContainerElementType } from '../utils';
export var Container = function (props) {
    var style = fetchContainerStyle(props);
    var elementType = fetchContainerElementType(props);
    return createReactElement(elementType, style, "flex-container" + (props.className ? ' ' + props.className : ''), props.children);
};
//# sourceMappingURL=Container.js.map