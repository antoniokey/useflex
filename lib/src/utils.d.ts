import { ReactElement } from 'react';
import Container from './models/container.model';
import Item from './models/item.model';
export declare const createReactElement: (elementType: string, style: any, className: string, children: any) => ReactElement;
export declare const fetchFlexContainerStyle: (props: Container) => any;
export declare const fetchContainerElementType: (props: Container) => string;
export declare const fetchFlexItemStyle: (props: Item) => any;
export declare const fetchFlexItemElementType: (props: Item) => string;
export declare const fetchFlexItemElementChildren: (props: Item) => any;
