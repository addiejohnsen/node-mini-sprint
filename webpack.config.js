const path = require('path')

const entry = path.join(__dirname, 'client', 'index.js');

module.exports = {
  entry: entry,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'client'),
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/i,
      //   use: ['style-loader', 'css-loader'],
      // },

      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        },
      }
    ]
  },
  mode: 'development',
  watch: true,
  resolve: {
    extensions: ['.js', '.jsx']
  }
}