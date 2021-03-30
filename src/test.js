import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Container } from '../lib/src/components/Container';
import { Item } from '../lib/src/components/Item';
import {
  fetchContainerElementType,
  fetchContainerStyle,
  fetchItemElementType,
  fetchItemStyle
} from '../lib/src/utils';

Enzyme.configure({ adapter: new Adapter() });

describe('Container', () => {

  it ('Container with parent div container block', () => {
    const el = shallow(<Container />);

    expect(el.find('div')).toHaveLength(1);
  });

  it ('Container with parent h1 container block', () => {
    const el = shallow(<Container type='h1' />);

    expect(el.find('h1')).toHaveLength(1);
  });

  it ('Container correct displaying Container tree without type', () => {
    const el = shallow(
      <Container>
        <div>
          <span>Test</span>
        </div>
      </Container>
    );

    expect(el.find('div').find('div').find('span').text()).toBe('Test');
  });

  it ('Container correct displaying Container tree with type', () => {
    const el = shallow(
      <Container type='h1'>
        <span>Test</span>
      </Container>
    );

    expect(el.find('h1').find('span').text()).toBe('Test');
  });

  it ('Container correct displaying container styles', () => {
    const el = shallow(<Container className='flex-container-test' />);

    expect(el.hasClass('flex-container flex-container-test')).toBe(true);
  });

});

describe('Item', () => {

  it ('Item with type', () => {
    const el = shallow(<Item type='span' />);

    expect(el.find('span')).toHaveLength(1);
  });

  it ('Item without type, but with children elements', () => {
    const el = shallow(
      <Item>
        <div>
          <h1></h1>
        </div>
      </Item>
    );

    expect(el.find('div')).toHaveLength(1);
  });

  it ('Item correct displaying Item tree without type', () => {
    const el = shallow(
      <Item>
        <div>
          <span>Test</span>
        </div>
      </Item>
    );

    expect(el.find('div').find('span').text()).toBe('Test');
  });

  it ('Item correct displaying Item tree with type', () => {
    const el = shallow(
      <Item type='div'>
        <span>Test</span>
      </Item>
    );

    expect(el.find('div').find('span').text()).toBe('Test');
  });

  it ('Item correct displaying Item styles', () => {
    const el = shallow(<Item type='h3' className='flex-item-test' />);

    expect(el.hasClass('flex-item-test')).toBe(true);
  });

});

describe ('Utils', () => {

  it ('Utils fetchContainerStyle returns correct styles', () => {
    const styles = fetchContainerStyle({
      width: '',
      height: '',
      direction: '',
      flexGrow: '',
      justifyContent: '',
      alignItems: '',
    });

    expect(Object.keys(styles).length).toBe(13);
  });

  it ('Utils fetchItemStyle returns correct styles', () => {
    const styles = fetchItemStyle({
      width: '',
      height: '',
      flexGrow: '',
      alignSelf: '',
    });

    expect(Object.keys(styles).length).toBe(8);
  });

  it ('Utils fetchContainerElementType returns correct type with type', () => {
    const type = fetchContainerElementType({ type: 'table' });

    expect(type).toBe('table');
  });

  it ('Utils fetchContainerElementType returns correct type without type', () => {
    const type = fetchContainerElementType({});

    expect(type).toBe('div');
  });

  it ('Utils fetchItemElementType returns correct type with type', () => {
    const type = fetchItemElementType({ type: 'table' });

    expect(type).toBe('table');
  });

  it ('Utils fetchItemElementType returns correct type without type', () => {
    const type = fetchItemElementType({ children: {} });

    expect(type).toBe(undefined);
  });

});
