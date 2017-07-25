/*
    ./webpack.config.js
*/

const path = require( 'path' );
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './benjlaud1/public/views/index.html',
    filename: 'index.html',
    inject: 'body'
})

module.exports = {
    entry: './benjlaud1/server/app.js',
    output: {
        path: path.resolve('dist'),
        filename: 'app_bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig
    ]
}