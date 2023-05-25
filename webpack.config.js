const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


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
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}