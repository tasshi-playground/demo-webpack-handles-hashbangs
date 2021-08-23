# demo-webpack-handles-hashbangs

> hashbangs (`#! ...`) are now handled by webpack

https://github.com/webpack/webpack/releases/v5.50.0

with webpack@5.49.0

```shell
$ yarn build
yarn run v1.22.11
$ webpack --mode production
assets by status 308 bytes [cached] 1 asset
./index.js 51 bytes [built] [code generated] [1 error]

ERROR in ./index.js 1:1
Module parse failed: Unexpected character '!' (1:1)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
> #!/usr/bin/env node
| console.log("Hello, world!!");
|

webpack 5.49.0 compiled with 1 error in 238 ms
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

with webpack@5.50.0

```shell
$ yarn build
yarn run v1.22.11
$ webpack --mode production
asset index.js 30 bytes [compared for emit] [minimized] (name: main)
./index.js 51 bytes [built] [code generated]
webpack 5.51.1 compiled successfully in 261 ms
✨  Done in 1.54s.
```
