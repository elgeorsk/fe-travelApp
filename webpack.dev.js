const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//Add favicon
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
// Add Service Workers
const WorkboxPlugin = require('workbox-webpack-plugin');

// Add devServer and mockData in development mode
const mockAPIResponse = require('./src/server/mockAPI.js');

module.exports = {
    entry: {
        index: './src/client/js/index.js',
        addPlan: './src/client/js/addPlan.js',
        myPlans: './src/client/js/myPlans.js'
    },
    mode: 'development',
    devtool: 'source-map',
    stats: 'verbose',
    output: {
         libraryTarget: 'var',
         library: 'Client'
    },
    module: {
        rules: [
            {
                test:/\.html$/,
                use: ['html-loader']
            },
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new FaviconsWebpackPlugin('./src/client/img/favicon-32x32.png'),
        new HtmlWebPackPlugin({
            template: './src/client/views/index.html',
            inject: true,
            chunks: ['index'],
            filename: './index.html'
        }),
        new HtmlWebPackPlugin({
            template: './src/client/views/addPlan.html',
            inject: true,
            chunks: ['addPlan'],
            filename: './addPlan.html'
        }),
        new HtmlWebPackPlugin({
            template: './src/client/views/myPlans.html',
            inject: true,
            chunks: ['myPlans'],
            filename: './myPlans.html'
        }),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),
        new WorkboxPlugin.GenerateSW()
    ],
    devServer: {
        before: function(app) {
            app.get("/test", function(req, res) {
                res.json(mockAPIResponse);
            });
            },
        open: true,
        port: 8080
      }
};
