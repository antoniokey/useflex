import React, { Component } from 'react';
import './index.css';
import { FlexContainer, FlexItem } from 'useflex';

export default class App extends Component {
  render () {
    return (
      <FlexContainer height='200px' width='90%' className='test' style={{ margin: 'auto' }}>
        <FlexContainer flexWrap='wrap' height='100%' justifyContent='space-between' flexGrow={1} alignItems='center'>
          <FlexItem itemType='span'>Image</FlexItem>
          <FlexItem itemType='span'>Header</FlexItem>
          <FlexItem itemType='span'>Description</FlexItem>
          <FlexItem itemType='span'>Button</FlexItem>
        </FlexContainer>
        <FlexContainer flexFlow='column nowrap' height='100%' justifyContent='space-between' flexGrow={1} alignItems='center'>
          <FlexItem itemType='span'>Image</FlexItem>
          <FlexItem itemType='span'>Header</FlexItem>
          <FlexItem itemType='span'>Description</FlexItem>
          <FlexItem itemType='span'>Button</FlexItem>
        </FlexContainer>
        <FlexContainer flexFlow='column nowrap' height='100%' justifyContent='space-between' flexGrow={1} alignItems='center'>
          <FlexItem itemType='span'>Image</FlexItem>
          <FlexItem itemType='span'>Header</FlexItem>
          <FlexItem itemType='span'>Description</FlexItem>
          <FlexItem itemType='span'>Button</FlexItem>
        </FlexContainer>
      </FlexContainer>
    )
  }
}
