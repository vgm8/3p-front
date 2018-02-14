const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['*', 'scss', '.js', '.styl'],
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

      // {
      //   test: /\.styl$/,
      //   use: [
      //     'style-loader',
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         modules: true,
      //         // localIdentName: '[local]'
      //         localIdentName: '[name]__[local]___[hash:base64:5]'
      //       }
      //     },
      //     'stylus-loader'
      //   ]
      // },
      {
          test: /\.styl$/,
          use: [
            'style-loader',
            'css-loader',
            'stylus-loader'
          ]
      },
      // {
      //   test: /\.(css|scss)$/,
      //   loader:  ExtractTextPlugin.extract({
      //     fallback: 'style-loader',
      //     use: [
      //      'style-loader', // creates style nodes from JS strings
      //      'css-loader', // translates CSS into CommonJS
      //      'sass-loader' // compiles Sass to CSS
      //     ]
      //    })
      // },

      {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss$/,
        use:  [
          'style-loader', // translates CSS into CommonJS
          'css-loader', // translates CSS into CommonJS
          'sass-loader'
        ]
      },
      // {
      //   test: /\.scss$/,
      //   loader: ExtractTextPlugin.extract({
      //     fallback: 'style-loader',
      //       use: [
      //        'css-loader', // translates CSS into CommonJS
      //        'sass-loader' // compiles Sass to CSS
      //     ]
      //   })
      // },
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
    // new ExtractTextPlugin("styles.css"),
    new HtmlWebpackPlugin ({
      inject: true,
      template: 'src/index.html.tmpl'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9000,
    historyApiFallback: true,
  }
};