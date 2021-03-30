import { ReactElement } from 'react';
import Container from './models/container.model';
import Item from './models/item.model';
export declare const createReactElement: (elementType: string, style: any, className: string, children: any) => ReactElement;
export declare const fetchContainerStyle: (props: Container) => any;
export declare const fetchContainerElementType: (props: Container) => string;
export declare const fetchItemStyle: (props: Item) => any;
export declare const fetchItemElementType: (props: Item) => string;
export declare const fetchItemElementChildren: (props: Item) => any;
