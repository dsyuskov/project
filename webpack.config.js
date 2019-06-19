const path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    source: path.join(__dirname,'src'),
    build: path.join(__dirname,'build')
};

module.exports = {
    entry: {
        'index': PATHS.source + '/pages/index.js',        
    },
    output: {
        path: PATHS.build,
        filename: './js/[name].js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['index'],
            template: PATHS.source+'/pages/index.pug',
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
          }),
                
    ],
    module:{
        rules: [
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options:{
                    pretty: true
                }
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'file-loader', 
                options: {
                    name: 'images/[name].[ext]'
                }               
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'file-loader?name=./fonts/[name].[ext]'
            },
            {
                test: /\.scss$/,                          
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },            
        ]
    }
};
   