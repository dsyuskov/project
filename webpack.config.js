const path = require('path');
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
                test: /\.scss$/,                          
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
};