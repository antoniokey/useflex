export default interface IFlexItem {
    width?: string;
    height?: string;
    flexBasis?: string | number;
    flexShrink?: string | number;
    flexGrow?: string | number;
    flex?: string | number;
    alignSelf?: AlignSelf;
    itemType?: string;
    className?: string;
    children?: any;
    style?: any;
}
