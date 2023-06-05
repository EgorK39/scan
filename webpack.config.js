const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
    devtool: 'inline-source-map',
    entry: {
        main: path.resolve(__dirname, './src/index.tsx'),
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/src/index.html'),
        }),
        new CopyPlugin({
            patterns: [
                {from: "./src/images/", to: "images"},

            ],
        }),
    ],
    resolve: {
        extensions: [
            '.js', '.jsx', '.json', '.ts', '.tsx'
        ]
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: path.join(__dirname, '/node_modules/'),
                use: {
                    loader: 'ts-loader'
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource',
            },
            {
                test: /\.svg/,
                type: 'asset/inline'
            }
        ]
    }
}