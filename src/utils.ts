import React, { ReactElement } from 'react';

import Container from './models/container.model';
import Item from './models/item.model';
import { Display, Type } from './enums/element.enum';

export const createReactElement = (
  elementType: string,
  style: any,
  className: string,
  children: any,
): ReactElement => {
  const element = React.createElement(
    elementType,
    {
      style,
      className,
    },
    children,
  );

  return element;
}

export const fetchContainerStyle = (props: Container): any => ({
  display: Display.Flex,
  flexDirection: props.direction,
  width: props.width,
  height: props.height,
  justifyContent: props.justifyContent,
  alignItems: props.alignItems,
  flex: props.flex,
  flexGrow: props.flexGrow,
  flexShrink: props.flexShrink,
  flexBasis: props.flexBasis,
  alignSelf: props.alignSelf,
  flexWrap: props.flexWrap,
  flexFlow: props.flexFlow
    ? props.flexFlow
    : `${props.direction} ${props.flexWrap}`,
  ...props.style,
});

export const fetchContainerElementType = (props: Container): string =>
  props.type
    ? props.type
    : Type.Div;

export const fetchItemStyle = (props: Item): any => ({
  flex: props.flex,
  flexGrow: props.flexGrow,
  flexShrink: props.flexShrink,
  flexBasis: props.flexBasis,
  alignSelf: props.alignSelf,
  height: props.height,
  width: props.width,
  order: props.order,
  ...props.style,
});

export const fetchItemElementType = (props: Item): string =>
  props.type
    ? props.type
    : props.children.type;

export const fetchItemElementChildren = (props: Item): any =>
  props.type
    ? props.children
    : props.children.props.children;
