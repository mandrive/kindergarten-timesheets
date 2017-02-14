'use strict';

/**
 * Default dev server configuration.
 */
const webpack = require('webpack');
const WebpackBaseConfig = require('./Base');

class WebpackDevConfig extends WebpackBaseConfig {

  constructor() {
    super();
    var devServerEntry = 'webpack-dev-server/client?http://' + (process.env.HOST || '0.0.0.0') +':' + (process.env.PORT || 8001) + '/';
    this.config = {
      devtool: 'cheap-module-source-map',
      entry: [
        devServerEntry,
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        './client.js'
      ],
      plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            tether: 'tether',
            Tether: 'tether',
            'window.Tether': 'tether',
        })
      ]
    };
  }
}

module.exports = WebpackDevConfig;
