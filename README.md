<div align="center">

# Zeal

[![DeepSource](https://app.deepsource.com/gh/DeepSourceCorp/zeal.svg/?label=active+issues&show_trend=true&token=omkRhJZzuS3w0dBXsP_rrwNH)](https://app.deepsource.com/gh/DeepSourceCorp/zeal/?ref=repository-badge)[![DeepSource](https://app.deepsource.com/gh/DeepSourceCorp/zeal.svg/?label=resolved+issues&show_trend=true&token=omkRhJZzuS3w0dBXsP_rrwNH)](https://app.deepsource.com/gh/DeepSourceCorp/zeal/?ref=repository-badge)

  <p>Zeal is the component system used across DeepSource Assets</p>

</div>

## Using in another library

#### Setting up tailwind

Add this in the tailwind.config.js

```javascript
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

## Dev setup

### Required Versions

1. Node: v14@latest
2. yarn: v1

### Local setup instructions

1. Clone the Repo using `git clone https://github.com/DeepSourceCorp/zeal`
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

Before you begin, ensure you have the `.npmrc` file setup.

1. Bump the version in `package.json` and commit that change
2. Remove `private: true` from the `package.json` (revert after publishing)
3. Run `yarn test:unit && yarn build-lib-icons`
4. On successful test and build run `npm publish`

> Note: Add `private: true` back after publishing. In CI, don't forget to run yarn before step 3

## Adding icons

1. For generic icons, replace all custom colors added to the SVG file with `currentColor`
2. Optimize the SVG using [SVGOMG](https://jakearchibald.github.io/svgomg/)
3. Create a new SVG file unde the `src/icons` folder and paste the optimized SVG into it
4. Run `yarn build_icons` to update the `icons.json` file
5. Verify the icons look alright by starting the storybook locally using `yarn storybook:serve`
6. Make a pull request for it with the screenshots of the icon preview in storybook
