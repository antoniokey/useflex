# useflex
Useflex allows you to make flex layout using React components.
You don't need to create any styles, just install 'useflex' library and start using flex layout.
But if you need some additional styles which are not related to flex you can use style prop with regular js object.
All properties and how to use yoiu can find below.
> 

[![NPM](https://img.shields.io/npm/v/useflex.svg)](https://www.npmjs.com/package/useflex) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save useflex
```

## Usage

Simple usage useflex library just import two components FlexContainer and FlexItem.

```jsx
import React, { Component } from 'react';

import { FlexContainer, FlexItem } from 'useflex';

class Example extends Component {
  render () {
    return (
      <FlexContainer direction='column' justifyContent='space-between' height='200px' width='200px' >
        <FlexItem>
          ...
        </FlexItem>
         
        <FlexItem>
          ...
        </FlexItem>
        <FlexItem>
          ...
        </FlexItem>
      </FlexContainer>
    )
  }
}
```

By default FlexContainer is 'div' element, but you can specify whatever element type you want. 
Just set 'flexContainerElementType' prop to FlexContainer component with a name of an element.

```jsx

import React, { Component } from 'react';

import { FlexContainer, FlexItem } from 'useflex';

class Example extends Component {
  render () {
    return (
      <FlexContainer flexContainerElementType='form' >
        ...
      </FlexContainer>
    )
  }
}

```

Useflex allows you to make inner flex containers as well.

```jsx

import React, { Component } from 'react';

import { FlexContainer, FlexItem } from 'useflex';

class Example extends Component {
  render () {
    return (
      <FlexContainer flexContainerElementType='form' >
        <FlexItem>
          ...
        </FlexItem>
          <FlexContainer>
            <FlexItem>
            ...
          </FlexItem>
          <FlexItem>
            ...
          </FlexItem>
        </FlexContainer>
      </FlexContainer>
    )
  }
}

```

You are allowed to create FlexItems by specifying certain element name as well.
In the example below you will see a flex container with one flex item, which is 'h1' element with 'Useflex' text.

```jsx

import React, { Component } from 'react';

import { FlexContainer, FlexItem } from 'useflex';

class Example extends Component {
  render () {
    return (
      <FlexContainer flexContainerElementType='form' >
        <FlexItem itemType='h1'>Useflex</FlexItem>
      </FlexContainer>
    )
  }
}

```

## FlexContainer props
  * **direction** - Direction of a flex container.
  * **width | height** - Size of a flex container
  * **justifyContent** - Like 'justify-content' in css.
  * **alignItem** - Like 'align-items' in css.
  * **flexBasis | flexShrink | flexGrow | flex** - Like 'flex-basis | flex-shrink | flex-grow | flex' in css.
  * **alignSelf** - Like 'align-self' in css.
  * **flexContainerElementType** - Element's name of a flex container. If not specifying - div.
  * **flexWrap** - Like 'flex-wrap in css.
  * **className** - For specifying class names.
  * **style** = JS object with styles.

## FlexItem props
  * **width | height** - Size of a flex container
  * **flexBasis | flexShrink | flexGrow | flex** - Like 'flex-basis | flex-shrink | flex-grow | flex' in css.
  * **alignSelf** - Like 'align-self' in css.
  * **itemType** - Element's name of a flex container. If not specified you have to provide element inside FlexItem or you'll get an error.
  * **className** - For specifying class names.
  * **style** = JS object with styles.

## License

MIT © [](https://github.com/)
