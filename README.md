# @taystack/use-timeout

> Get a boolean value after an arbitrary timeout. Useful for rendering mounting components.

[![NPM](https://img.shields.io/npm/v/@taystack/use-timeout.svg)](https://www.npmjs.com/package/@taystack/use-timeout) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add @taystack/use-timeout
```

## Usage

```jsx
import React from "react"

import useTimeout from "@taystack/use-timeout"

const Example = () => {

  const [isDone, startTimeout, onUnmount] = useTransitionTimeout(100);
  // [false, fn, fn];
  // 100ms later
  // [true, fn, fn];

  const styles = {
    opacity: isDone ? 1 : 0,
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
