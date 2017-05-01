module.exports = {
  context: __dirname + '/server/src',
  entry: './index',
  output: {
    path: __dirname + '/server/dist',
    filename: 'bundle.js',
  },
}
