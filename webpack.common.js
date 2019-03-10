const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: {
        app: './src/index.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Production',
            template: 'src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "style.css",
            chunkFilename: "[id].css"
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                    {
                      loader: 'image-webpack-loader',
                      options: {
                        pngquant: {
                          quality: '65-90',
                          speed: 4
                        },
                      },
                    },
                ]
            },
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
              }
            },
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader
                      },
                      {
                        loader: 'css-loader',
                        options: {
                          importLoaders: 1,
                        }
                      },
                      {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: (loader) => [
                              require('postcss-import')({ root: loader.resourcePath }),
                              require('postcss-preset-env')(),
                              require('cssnano')()
                            ]
                          }
                      }
                ]
            },
            {  
               test: /\.(woff|woff2|eot|ttf|otf)$/,
               use: [
                 'file-loader'
               ]
            }
        ],
    }
};