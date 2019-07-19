import IFlexItem from './interfaces/flexItem.interface';
import {
    createReactElement,
    fetchFlexItemStyle, 
    fetchFlexItemElementType,
    fetchFlexItemElementChildren,
} from './utils';

export const FlexItem = (props: IFlexItem) => {
    const style = fetchFlexItemStyle(props);
    const elementType = fetchFlexItemElementType(props);
    const elementChildren = fetchFlexItemElementChildren(props);
    
    return createReactElement(elementType, style, props.className ? props.className : '', elementChildren);
}
