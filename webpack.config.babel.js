import dotenv from 'dotenv';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

dotenv.config();

export default {
  entry: ['./src/client'],
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'R | E | G',
      template: 'public/index.html',
    }),
  ],
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: [/node_modules/, /build/, /__test__/],
      },
      {
        oneOf: [
          {
            test: /\.(js|jsx)$/,
            use: 'babel-loader',
            exclude: /node_modules/,
          },
          {
            test: /\.(mp4|webm)$/,
            use: {
              loader: 'url-loader',
              options: {
                limit: 10000,
              },
            },
          },
          {
            test: /\.(eot|svg|otf|ttf|woff|woff2)$/,
            use: 'file-loader',
          },
          {
            test: /\.(jpg|png|gif)$/,
            use: [
              'file-loader',
              {
                loader: 'image-webpack-loader',
                options: {
                  gifsicle: {
                    interlaced: false,
                    optimizationLevel: 7,
                  },
                  mozjpeg: {
                    progressive: true,
                  },
                  optipng: {
                    optimizationLevel: 7,
                  },
                  pngquant: {
                    quality: '65-90',
                    speed: 4,
                  },
                },
              },
            ],
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: process.env.WDS_PORT,
    proxy: {
      '/': `http://localhost:${process.env.PORT}`,
    },
  },
};
