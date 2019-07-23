import IFlexContainer from './interfaces/flexContainer.interface';
import {
    createReactElement,
    fetchFlexContainerStyle,
    fetchContainerElementType,
} from './utils';
import { ReactElement } from 'react';

export const FlexContainer = (props: IFlexContainer): ReactElement => {
    const style = fetchFlexContainerStyle(props);
    const elementType = fetchContainerElementType(props);

    return createReactElement(elementType, style, `flex-container${props.className ? ' ' + props.className : ''}`, props.children);
}
