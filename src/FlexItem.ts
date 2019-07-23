import IFlexItem from './interfaces/flexItem.interface';
import {
    createReactElement,
    fetchFlexItemStyle, 
    fetchFlexItemElementType,
    fetchFlexItemElementChildren,
} from './utils';
import { ReactElement } from 'react';

export const FlexItem = (props: IFlexItem): ReactElement => {
    const style = fetchFlexItemStyle(props);
    const elementType = fetchFlexItemElementType(props);
    const elementChildren = fetchFlexItemElementChildren(props);
    
    return createReactElement(elementType, style, props.className ? props.className : '', elementChildren);
}
