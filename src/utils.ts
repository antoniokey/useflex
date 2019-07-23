import React, { ReactElement } from 'react';
import IFlexContainer from './interfaces/flexContainer.interface';
import IFlexItem from './interfaces/flexItem.interface';

export const createReactElement = (elementType: string, style: any, className: string, children: any): ReactElement => {
    const el = React.createElement(
        elementType,
        { 
            style,
            className,
        },
        children,
    )

    return el;
}

export const fetchFlexContainerStyle = (props: IFlexContainer): any => ({
    display: 'flex',
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
    flexFlow: props.flexFlow ? props.flexFlow : `${props.direction} ${props.flexWrap}` ,
    ...props.style,
});

export const fetchContainerElementType = (props: IFlexContainer): string => props.flexContainerElementType ? props.flexContainerElementType : 'div';

export const fetchFlexItemStyle = (props: IFlexItem): any => ({
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

export const fetchFlexItemElementType = (props: IFlexItem): string => props.itemType ? props.itemType : props.children.type;

export const fetchFlexItemElementChildren = (props: IFlexItem): any => props.itemType ? props.children : props.children.props.children;
