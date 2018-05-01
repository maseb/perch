# perch-sandbox-reasonreact

## Run Project in dev mode

```sh
npm install
npm build:w
# in another tab
npm run start:dev
```

**For more elaborate ReasonReact examples**, please see https://github.com/reasonml-community/reason-react-example

## Build for Production

```sh
npm run build
npm run webpack:production
```

This will replace the development artifact `build/js/app.js` for an optimized version.

**To enable dead code elimination**, change `bsconfig.json`'s `package-specs` `module` from `"commonjs"` to `"es6"`. Then re-run the above 2 commands. This will allow Webpack to remove unused code.
