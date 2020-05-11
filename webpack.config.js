const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './index.js',
   output: {
      path: path.join(__dirname, './public'),
      filename: 'bundle.js'
   },
   devServer: {
      inline: true,
      port: 8001
   },
   module: {
      rules: [
         {  
            test: /\.jsx?$/, 
            exclude: /node_modules/, 
            loader: 'babel-loader', 
         },
         {
            test: /\.css$/,
            use: [
               // css-loader
               { loader: 'css-loader'}
            ]
         }
      ]
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: './public/index.html'
      })
   ]
}