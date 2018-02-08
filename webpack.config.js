var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var bootStrapEntryPoint = require('./webpack.bootstrap.config')
var isProd = process.env.NODE_ENV === "production";
console.log("Process ENV : " + process.env.NODE_ENV);
console.log("NODE_ENV is PROD : "+isProd);

var BOOTSTRAP_CONFIG = isProd ? bootStrapEntryPoint.prod : bootStrapEntryPoint.dev;
var TARGET_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src/js');

var htmlPluging = new HtmlWebpackPlugin({
    title: 'React App',
    template: 'src/index.html'
});
var extractPlugin = new ExtractTextPlugin({
    filename: 'css/[name].bundle.css',
    disable: false,
    allChunks: true
});

const cssDev = [
    'style-loader',
    'css-loader?sourceMap',
    'sass-loader',
    {
        loader: 'sass-resources-loader',
        options: {
            // Provide path to the file with resources
            resources: [
                'resources.scss'
            ],
        },
    }
];
const cssProd = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: ['css-loader', 'sass-loader', {
        loader: 'sass-resources-loader',
        options: {
            // Provide path to the file with resources
            resources: [
                'resources.scss'
            ],
        },
    }],
    publicPath: '/dist'
})

const cssConfig = isProd ? cssProd : cssDev;

module.exports = {
    entry: {
        app: APP_DIR + '/main.js',
        bootStrap: BOOTSTRAP_CONFIG
    },
    output: {
        path: TARGET_DIR,
        filename: '[name].bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                include: APP_DIR,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
                }
            },
            {
                test: /\.scss$/,
                use: cssConfig
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(jpg|png)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img/',
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|svg)$/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.(ttf|eot)$/,
                loader: 'url-loader?limit=100000'
            },
            // Bootstrap 3
            {
                test: /bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/,
                loader: 'imports-loader?jQuery=jquery'
            }
        ]
    },
    plugins: [
        extractPlugin, htmlPluging,
        new CleanWebpackPlugin(['dist']),
        new CopyWebpackPlugin([
            { from: 'src/img', to: TARGET_DIR + '/img' }
        ]),
    ]
}