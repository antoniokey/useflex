import IFlexContainer from './interfaces/flexContainer.interface';
import {
    createReactElement,
    fetchFlexContainerStyle,
    fetchContainerElementType,
} from './utils';

export const FlexContainer = (props: IFlexContainer) => {
    const style = fetchFlexContainerStyle(props);
    const elementType = fetchContainerElementType(props);

    return createReactElement(elementType, style, `flex-container${props.className ? ' ' + props.className : ''}`, props.children);
}
