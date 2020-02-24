var path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const PATHS = {
  dist: path.join(__dirname, 'public'),
  cssSrc: path.join(__dirname, 'styles')
};

module.exports = {
  entry: './index.jsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: { loader: 'babel-loader' },
        resolve: {
          extensions: ['.js', '.jsx']
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devtool: 'eval-source-map',
  plugins: [
    new HtmlWebPackPlugin({
      template: './index.html',
      filename: './index.html'
    })
  ]
};
