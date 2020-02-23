# @taystack/use-timeout

> Get a boolean value after an arbitrary timeout. Useful for rendering mounting components.

![UseTimeout](https://github.com/taystack/use-timeout/blob/master/logo.png?raw=true)
[![NPM](https://img.shields.io/npm/v/@taystack/use-timeout.svg)](https://www.npmjs.com/package/@taystack/use-timeout) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![codecov](https://codecov.io/gh/taystack/use-timeout/branch/master/graph/badge.svg)](https://codecov.io/gh/taystack/use-timeout)

## Install

```bash
yarn add @taystack/use-timeout
```

## Usage
The most basic use case here was to provide a hook for a loaded component.
In the example below, <Example /> will appear gradually.
Any time Example.props.show changes, we reset the timeout for the next time


```jsx
import React from "react";

import useTimeout from "@taystack/use-timeout";


const Example = ({ show }) => {

  const [isDone, startTimeout, onUnmount] = useTransitionTimeout(100, show);
  // [false, fn, fn];
  // 100ms later
  // [true, fn, fn];

  const styles = {
    opacity: show ? isDone ? 1 : 0 : 0,
    transition: "opacity 150ms",
  };

  return (
    <div style={style}>Shows gradually in 100 milliseconds</div>
  );

}
```

## License

MIT © [taystack](https://github.com/taystack)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
