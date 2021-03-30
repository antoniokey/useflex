import { AlignSelf } from '../enums/flex.enum';

export default interface Item {
  width?: string,
  height?: string,
  flexBasis?: string | number,
  flexShrink?: string | number,
  flexGrow?: string | number,
  flex?: string | number,
  alignSelf?: AlignSelf,
  order?: number,
  type?: string,
  className?: string,
  children?: any,
  style?: any,
}
