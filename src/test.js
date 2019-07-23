import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { FlexContainer } from '../lib/src/FlexContainer';
import { FlexItem } from '../lib/src/FlexItem';
import {
  fetchFlexContainerStyle,
  fetchFlexItemStyle,
  fetchContainerElementType,
  fetchFlexItemElementType,
} from '../lib/src/utils';

Enzyme.configure({ adapter: new Adapter() });

describe('FlexContainer', () => {

  it ('FlexContainer with parent div container block', () => {
    const el = shallow(<FlexContainer />);

    expect(el.find('div')).toHaveLength(1);
  });

  it ('FlexContainer with parent h1 container block', () => {
    const el = shallow(<FlexContainer flexContainerElementType='h1' />);

    expect(el.find('h1')).toHaveLength(1);
  });

  it ('FlexContainer correct displaying flexContainer tree without flexContainerElementType', () => {
    const el = shallow(
      <FlexContainer>
        <div>
          <span>Test</span>
        </div>
      </FlexContainer>
    );

    expect(el.find('div').find('div').find('span').text()).toBe('Test');
  });

  it ('FlexContainer correct displaying flexContainer tree with flexContainerElementType', () => {
    const el = shallow(
      <FlexContainer flexContainerElementType='h1'>
        <span>Test</span>
      </FlexContainer>
    );

    expect(el.find('h1').find('span').text()).toBe('Test');
  });

  it ('FlexContainer correct displaying container styles', () => {
    const el = shallow(<FlexContainer className='flex-container-test' />);

    expect(el.hasClass('flex-container flex-container-test')).toBe(true);
  });

});

describe('FlexItem', () => {

  it ('FlexItem with itemType', () => {
    const el = shallow(<FlexItem itemType='span' />);

    expect(el.find('span')).toHaveLength(1);
  });

  it ('FlexItem without itemType, but with children elements', () => {
    const el = shallow(
      <FlexItem>
        <div>
          <h1></h1>
        </div>
      </FlexItem>
    );

    expect(el.find('div')).toHaveLength(1);
  });

  it ('FlexItem correct displaying flexItem tree without itemType', () => {
    const el = shallow(
      <FlexItem>
        <div>
          <span>Test</span>
        </div>
      </FlexItem>
    );

    expect(el.find('div').find('span').text()).toBe('Test');
  });

  it ('FlexItem correct displaying flexItem tree with itemType', () => {
    const el = shallow(
      <FlexItem itemType='div'>
        <span>Test</span>
      </FlexItem>
    );

    expect(el.find('div').find('span').text()).toBe('Test');
  });

  it ('FlexItem correct displaying flexItem styles', () => {
    const el = shallow(<FlexItem itemType='h3' className='flex-item-test' />);

    expect(el.hasClass('flex-item-test')).toBe(true);
  });

});

describe ('Utils', () => {

  it ('Utils fetchFlexContainerStyle returns correct styles', () => {
    const styles = fetchFlexContainerStyle({
      width: '',
      height: '',
      direction: '',
      flexGrow: '',
      justifyContent: '',
      alignItems: '',
    });

    expect(Object.keys(styles).length).toBe(13);
  });

  it ('Utils fetchFlexItemStyle returns correct styles', () => {
    const styles = fetchFlexItemStyle({
      width: '',
      height: '',
      flexGrow: '',
      alignSelf: '',
    });

    expect(Object.keys(styles).length).toBe(8);
  });

  it ('Utils fetchContainerElementType returns correct type with flexContainerElementType', () => {
    const type = fetchContainerElementType({ flexContainerElementType: 'table' });

    expect(type).toBe('table');
  });

  it ('Utils fetchContainerElementType returns correct type without flexContainerElementType', () => {
    const type = fetchContainerElementType({});

    expect(type).toBe('div');
  });

  it ('Utils fetchFlexItemElementType returns correct type with itemType', () => {
    const type = fetchFlexItemElementType({ itemType: 'table' });

    expect(type).toBe('table');
  });

  it ('Utils fetchFlexItemElementType returns correct type without itemType', () => {
    const type = fetchFlexItemElementType({ children: {} });

    expect(type).toBe(undefined);
  });

});
