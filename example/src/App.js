import React, { Component } from 'react';
import './index.css';
import { Container, Item } from 'useflex';

export default class App extends Component {
  render () {
    return (
      <Container height='200px' width='90%' className='test' style={{ margin: 'auto' }}>
        <Container flexWrap='wrap' height='100%' justifyContent='space-between' flexGrow={1} alignItems='center'>
          <Item type='span'>Image</Item>
          <Item type='span'>Header</Item>
          <Item type='span'>Description</Item>
          <Item type='span'>Button</Item>
        </Container>
        <Container flexFlow='column nowrap' height='100%' justifyContent='space-between' flexGrow={1} alignItems='center'>
          <Item type='span'>Image</Item>
          <Item type='span'>Header</Item>
          <Item type='span'>Description</Item>
          <Item type='span'>Button</Item>
        </Container>
        <Container flexFlow='column nowrap' height='100%' justifyContent='space-between' flexGrow={1} alignItems='center'>
          <Item type='span'>Image</Item>
          <Item type='span'>Header</Item>
          <Item type='span'>Description</Item>
          <Item type='span'>Button</Item>
        </Container>
      </Container>
    );
  }
}
