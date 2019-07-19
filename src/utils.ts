import React from 'react';
import IFlexContainer from './interfaces/flexContainer.interface';
import IFlexItem from './interfaces/flexItem.interface';

export const createReactElement = (elementType: string, style: any, className: string, children: any) => {
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

export const fetchFlexContainerStyle = (props: IFlexContainer) => ({
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
    ...props.style,
});

export const fetchContainerElementType = (props: IFlexContainer) => props.flexContainerElementType ? props.flexContainerElementType : 'div';

export const fetchFlexItemStyle = (props: any) => ({
    flex: props.flex,
    flexGrow: props.flexGrow,
    flexShrink: props.flexShrink,
    flexBasis: props.flexBasis,
    alignSelf: props.alignSelf,
    height: props.height,
    width: props.width,
    ...props.style,
});

export const fetchFlexItemElementType = (props: IFlexItem) => props.itemType ? props.itemType : props.children.type;

export const fetchFlexItemElementChildren = (props: IFlexItem) => props.itemType ? props.children : props.children.props.children;
