const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    'host': './app/host.js',
    'remote': './app/remote.js'
  },
  mode: 'development',
  plugins: [
    new CopyPlugin({
      patterns: [
        {from: 'app/*.html', to:'[name].html'},
        {from: 'app/*.css', to:'[name].css'},
      ]
    })
  ],
  devServer: {
    allowedHosts: 'all',
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
  }
};

