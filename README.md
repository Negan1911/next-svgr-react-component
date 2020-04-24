# next-svg-react-component
This plugin aims to have the same CRA useful behaviour on next regarding SVG.

## Installation

```bash
npm install --save next-svgr-react-component
```

Or using yarn:

```bash
yarn add next-svgr-react-component
```

Then, import the library in your `next.config.js` file.

```js
// next.config.js
const withSVG = require("next-svgr-react-component");

module.exports = withSVG({});
```

or, with `next-compose-plugins`:
```js
const withSVG = require("next-svgr-react-component");

module.exports = withPlugins([withSVG])
```

## Usage:

This plugin allows the usage of SVG in various formats:

As **Static Path**:

```jsx
import starUrl from './star.svg'
 
const App = () => (
  <div>
    <img src={starUrl} alt="star" />
    <Star />
  </div>
)
```

As **React Component**
```jsx
import { ReactComponent as Star } from './star.svg'
 
const App = () => (
  <div>
    <Star />
  </div>
)
```

