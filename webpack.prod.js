const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
//Add favicon
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
// Add Service Workers
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: './src/client/index.js',
    mode: 'production',
    output: {
        filename: 'assets/js/[name].js',
        path: path.resolve(__dirname, 'dist_prod'),
        libraryTarget: 'var',
        library: 'Client'
     },
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        publicPath: '../img',
                        outputPath: 'assets/img',
                        useRelativePaths: true
                    }
                }]
            }
        ]
    },
    plugins: [
        new FaviconsWebpackPlugin('./src/client/img/favicon-32x32.png'),
        new HtmlWebPackPlugin({
            template: './src/client/views/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({ filename: 'assets/css/[name].css' }),
        //new WorkboxPlugin.GenerateSW()
    ],
    optimization: {
      minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})],
    }
};
