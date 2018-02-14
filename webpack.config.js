const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        }
      },
      {
        test: /\.(gif|jpg|jpeg|png)$/,
        use: 'url-loader?limit=2000'
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]'
              // localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          'stylus-loader'
        ]
      },
      {
          test: /\.scss$/,
          use: [{
              loader: "style-loader" // creates style nodes from JS strings
          }, {
              loader: "css-loader" // translates CSS into CommonJS
          }, {
              loader: "sass-loader" // compiles Sass to CSS
          }]
      },
      {
         test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
         use: [{
           loader: 'file-loader',
           options: {
             name: '[name].[ext]',
             outputPath: 'fonts/',    // where the fonts will go
             publicPath: '../'       // override the default path
           }
         }]
       },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin ({
      inject: true,
      template: 'src/index.html'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9000,
    historyApiFallback: true,
  }
};