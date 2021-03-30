import { JustifyContent, AlignItems, AlignSelf, Wrap } from '../enums/flex.enum';
export default interface Container {
    direction?: string;
    width?: string;
    height?: string;
    justifyContent?: JustifyContent;
    alignItems?: AlignItems;
    flexBasis?: string;
    flexShrink?: string;
    flexGrow?: string;
    flex?: string;
    alignSelf?: AlignSelf;
    type?: string;
    className?: string;
    flexWrap?: Wrap;
    flexFlow?: string;
    children?: any;
    style?: any;
}
