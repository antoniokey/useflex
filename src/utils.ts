import React, { ReactElement } from 'react';
import Container from './models/container.model';
import Item from './models/item.model';
import { Display, Type } from './enums/element.enum';

export const createReactElement = (elementType: string, style: any, className: string, children: any): ReactElement => {
  const el = React.createElement(
    elementType,
    {
      style,
      className,
    },
    children,
  );

  return el;
}

export const fetchFlexContainerStyle = (props: Container): any => ({
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
  flexFlow: props.flexFlow ? props.flexFlow : `${props.direction} ${props.flexWrap}`,
  ...props.style,
});

export const fetchContainerElementType = (props: Container): string => props.flexContainerElementType ? props.flexContainerElementType : Type.Div;

export const fetchFlexItemStyle = (props: Item): any => ({
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

export const fetchFlexItemElementType = (props: Item): string => props.itemType ? props.itemType : props.children.type;

export const fetchFlexItemElementChildren = (props: Item): any => props.itemType ? props.children : props.children.props.children;
