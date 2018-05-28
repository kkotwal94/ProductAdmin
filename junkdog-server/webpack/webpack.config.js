const PATHS = require('./paths');
const rules = require('./rules');
const plugins = require('./plugins');
const externals = require('./externals');
const resolve = require('./resolve');

module.exports = (env = {}) => {
  const isProduction = process.env.NODE_ENV === 'production';
  const isBrowser = env.browser;

  console.log(
    `Running webpack in ${process.env.NODE_ENV} mode on ${isBrowser ? 'browser' : 'server'}`
  );

  const hotMiddlewareScript = 'webpack-hot-middleware/client';
  const node = { __dirname: true, __filename: true };

  const prodServerRender = {
    mode: 'production',
    devtool: 'source-map',
    context: PATHS.app,
    entry: { server: ['../server/server', 'babel-polyfill'] },
    target: 'node',
    node,
    externals,
    output: {
      path: PATHS.compiled,
      filename: 'server.js',
      publicPath: PATHS.public,
      libraryTarget: 'commonjs2',
    },
    module: { rules: rules({ production: true, browser: false }) },
    resolve,
    plugins: plugins({ production: true, browser: false }),
  };

  const devServerRender = {
    mode: 'development',
    devtool: 'sourcemap',
    context: PATHS.app,
    entry: { server: ['../server/server', 'babel-polyfill'] },
    target: 'node',
    node,
    externals,
    output: {
      path: PATHS.compiled,
      filename: '[name].dev.js',
      publicPath: PATHS.public,
      libraryTarget: 'commonjs2',
    },
    module: { rules: rules({ production: false, browser: false }) },
    resolve,
    plugins: plugins({ production: false, browser: false }),
  };
  const prodConfig = prodServerRender;
  const devConfig = devServerRender;
  const configuration = isProduction ? prodConfig : devConfig;

  return configuration;
};
