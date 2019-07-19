import React from 'react';
import IFlexContainer from './interfaces/flexContainer.interface';
import IFlexItem from './interfaces/flexItem.interface';
export declare const createReactElement: (elementType: string, style: any, className: string, children: any) => React.ReactElement<{
    style: any;
    className: string;
}, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
export declare const fetchFlexContainerStyle: (props: IFlexContainer) => any;
export declare const fetchContainerElementType: (props: IFlexContainer) => string;
export declare const fetchFlexItemStyle: (props: any) => any;
export declare const fetchFlexItemElementType: (props: IFlexItem) => any;
export declare const fetchFlexItemElementChildren: (props: IFlexItem) => any;
