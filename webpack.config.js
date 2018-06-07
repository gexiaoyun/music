const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
    entry: {
        app: './src/index.js'
    },
    output:{
        filename:'bundle.[hash].js',
        path: path.join(__dirname, '/dist') 
    },
    resolve:{
        extensions:['.js','.jsx','.less']
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader:"babel-loader"
                }
            },
            {
                test: /\.less$/,
                use:[
                    'style-loader','css-loader','less-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template: './src/template/index.html'
        }),
        new cleanWebpackPlugin(['dist'])
    ]
}