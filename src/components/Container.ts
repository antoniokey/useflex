import { ReactElement } from 'react';
import Container from '../models/container.model';
import { createReactElement, fetchFlexContainerStyle, fetchContainerElementType } from '../utils';

export const Container = (props: Container): ReactElement => {
  const style = fetchFlexContainerStyle(props);
  const elementType = fetchContainerElementType(props);

  return createReactElement(elementType, style, `flex-container${props.className ? ' ' + props.className : ''}`, props.children);
};
