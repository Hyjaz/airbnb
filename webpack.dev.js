const configPaths = require('./config.path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry:  configPaths.entry,
  output: {
    filename: 'bundle.js',
    path: configPaths.output
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.css']
  },
  devServer: {
    contentBase: false,
    compress: true,
    port: 9000,
    hot: true,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: configPaths.tsconfig,
            }
          }
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: configPaths.indexTemplate,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug: true,
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ]
}
