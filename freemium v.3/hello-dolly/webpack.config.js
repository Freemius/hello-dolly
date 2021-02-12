const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const IgnoreEmitPlugin = require('ignore-emit-webpack-plugin');

module.exports = (env, argv) => {

  const mode = argv.mode;
  const loaders = [
    MiniCssExtractPlugin.loader,
    'css-loader',
    {
      loader: 'postcss-loader',
      options: {
        plugins: [require('autoprefixer')],
      },
    },
    'sass-loader'
  ];

  return {
    entry: {
      './assets/js/block.editor': './src/blocks/index.js',
      './assets/css/block.styles': './src/blocks/style.scss',
    },
    output: {
      path: path.resolve(__dirname),
      filename: '[name].js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /style\.s?css$/,
          use: loaders,
        }
      ],
    },
    externals: {
      wp: 'wp',
      react: 'React',
      'react-dom': 'ReactDOM',
      jquery: 'jQuery', // import $ from 'jquery'; // Use jQuery from WP after enqueuing it.
      lodash: 'lodash', // Lodash is there in Gutenberg.
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
      new IgnoreEmitPlugin(['block.styles.pro.js', 'block.editor.styles.pro.js', 'frontend.js', 'admin-settings.js', /styles\.js$/]) // ignore extra emitted JS files from the CSS extraction process
    ],
  }
};
