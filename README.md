<div align="center">

  # Zeal

  [![DeepSource](https://deepsource.io/gh/deepsourcelabs/zeal.svg/?label=active+issues&show_trend=true&token=JIW55GPf1_QuPsjkJSkhKBct)](https://deepsource.io/gh/deepsourcelabs/zeal/?ref=repository-badge) [![DeepSource](https://deepsource.io/gh/deepsourcelabs/zeal.svg/?label=resolved+issues&show_trend=true&token=JIW55GPf1_QuPsjkJSkhKBct)](https://deepsource.io/gh/deepsourcelabs/zeal/?ref=repository-badge)

  <p>Zeal is the component system used across DeepSource Assets</p>

</div>

## Using in another library

Add this in the tailwind.config.js

```
// tailwind.config.js
module.exports = {
  // import the tailwind config from Zeal.
  presets: [require('@deepsourcelabs/zeal/tailwind.config')],
  // Don't purge zeal styles
  purge: {
    enabled: true,
    content: ['./pages/**/*', './components/**/*', './node_modules/@deepsourcelabs/**/*.vue']
  }
}
```

## Dev Setup

1. Clone the Repo using `git clone https://github.com/deepsourcelabs/zeal`
2. Run `yarn` to install all dependencies
3. Run `yarn storybook:serve` to run the dev server and storybook for development

### Building the library

The following NPM scripts help building the library

1. **`yarn build-lib`**: This will build the library with `main.ts` as the input file
2. **`yarn build-storybook`**: This will build the Storybook
3. **`yarn build_icons`**: This will fetch the svg icons from the `src/icons` and build a JSON file
4. **`yarn build:css`**: This will run post css and generate the CSS files for tailwind and other components
5. **`yarn build-lib-icons`**: This will build the library, css files and the icons

### Publishing

1. Bump the version in `package.json` and commit that change
2. Remove `private: true` from the `package.json` (revert after publishing)
3. Run `yarn test && yarn build-lib-icons`
4. On successful test and build run `npm publish`

> Note: Add `private: true` back after publishing
