const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/js/app.tsx',
  output: {
    path: `${__dirname}/dist`,
    filename: 'js/app.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/templates/index.html'
    }),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist/*', '!dist/images/*', '!dist/index.html'],
    }),
    new MiniCssExtractPlugin({
      filename: 'css/app.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      },
      {
        test: /\.(sc|c|sa)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: true,
              importLoaders: 2
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [
                require('autoprefixer')({
                  grid: 'autoplace'
                })
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  // devServer: {
  //   contentBase: path.join(__dirname, 'dist'),
  //   host: '0.0.0.0',
  //   port: 8080,
  //   hot: true,
  //   watchContentBase: true
  // },
}
