module.exports = {
  context: __dirname + '/front/src',
  entry: './index',
  output: {
    path: __dirname + '/front/dist',
    filename: 'bundle.js',
  },
  devServer: {
    inline: true,
    contentBase: './front/dist',
    port: 3333
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react'],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
}
