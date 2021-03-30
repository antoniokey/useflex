import { ReactElement } from 'react';
import Item from '../models/item.model';
import { createReactElement, fetchItemStyle, fetchItemElementType, fetchItemElementChildren } from '../utils';

export const Item = (props: Item): ReactElement => {
  const style = fetchItemStyle(props);
  const elementType = fetchItemElementType(props);
  const elementChildren = fetchItemElementChildren(props);

  return createReactElement(elementType, style, props.className ? props.className : '', elementChildren);
};
