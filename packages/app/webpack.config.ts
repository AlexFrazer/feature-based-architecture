import * as path from 'path';
import { Configuration, EnvironmentPlugin } from 'webpack';
import HTMLPlugin from 'html-webpack-plugin';

const srcPath = path.resolve(path.join(__dirname, 'src'));

const config: Configuration = {
  entry: [
    '@babel/polyfill',
    'react-hot-loader/patch',
    'typeface-roboto',
    srcPath,
  ],
  output: {
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: {
      '~': srcPath,
      // This is required to make Lerna work appropriately
      'react': require.resolve('react'),
      'react-dom': require.resolve('@hot-loader/react-dom'),
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.woff2?$/,
        use: 'file-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HTMLPlugin({
      title: 'Example app',
      template: path.join(srcPath, 'index.html'),
      inject: 'body',
    }),
  ]
};

export default config;
