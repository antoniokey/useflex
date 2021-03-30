import { ReactElement } from 'react';
import Item from '../models/item.model';
import { createReactElement, fetchFlexItemStyle, fetchFlexItemElementType, fetchFlexItemElementChildren } from '../utils';

export const Item = (props: Item): ReactElement => {
  const style = fetchFlexItemStyle(props);
  const elementType = fetchFlexItemElementType(props);
  const elementChildren = fetchFlexItemElementChildren(props);

  return createReactElement(elementType, style, props.className ? props.className : '', elementChildren);
};
