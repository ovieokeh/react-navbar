const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    navbar: './src/index.jsx'
  },
  output: {
    path: path.resolve('lib'),
    filename: 'Navbar.js',
    libraryTarget: 'commonjs2',
    libraryExport: ['Navbar']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: [/node_modules/, /build/, /dist/]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
