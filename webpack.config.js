const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'indeprods.js'
    },
    mode: 'development',
    // mode: 'production',
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
          },
          { 
            test: /\.js$/, 
            exclude: /node_modules/, 
            loader: "babel-loader"
          }
        ]
    }
}