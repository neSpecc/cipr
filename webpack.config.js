const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const WebpackOnBuildPlugin = require('on-build-webpack');
const fs = require('fs');

const Config = require('./src/js/config.js');

const isProduction = process.env.NODE_ENV === 'prod';

const plugins = [
    new ExtractTextPlugin({
        filename: 'all.css'
    }),
    new webpack.DefinePlugin({
        IS_PRODUCTION: JSON.stringify(isProduction)
    })

];

if (isProduction) {
    plugins.push(...[
        new UglifyJsPlugin({
            sourceMap: true
        })
    ]);
} else {
    plugins.push(...[
        // new BrowserSyncPlugin({
        //     port: 3040,
        //     host: '0.0.0.0',
        //     server: {
        //         baseDir: './'
        //     },
        //     https: false  ,
        //     ghostMode: false,
        //     notify: false,
        //     scrollProportionally: false,
        //     cors: true
        // })
    ]);
  /**
   * Move bundles to the Osnova
   */
  plugins.push(new WebpackOnBuildPlugin(function(stats) {
    // /Users/specc/cmtt/osnova/src/Components/Specials/Projects/Battlefield/
    const projectInOnsnova = path.resolve(__dirname, '../', 'osnova', 'src', 'Components', 'Specials', 'Projects', 'Battlefield');
    const bundlePath = path.resolve(__dirname, 'dist', 'all.js');
    const cssBundlePath = path.resolve(__dirname, 'dist', 'all.css');

    // copy js
    fs.createReadStream(bundlePath).pipe(fs.createWriteStream(path.resolve(projectInOnsnova, 'js', 'vendor', 'all.js')));

    // copy css
    fs.createReadStream(cssBundlePath).pipe(fs.createWriteStream(path.resolve(projectInOnsnova, 'styles', 'all.css')));
  }))
}

module.exports = {
    entry: {
        js: './src/js/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'all.js',
        library: Config.name,
        libraryTarget: 'umd'
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        presets: [
                            'env'
                        ],
                        plugins: ['transform-object-assign']
                    }
                }, {
                    loader: 'eslint-loader?fix=true&esModules=true'
                }]
            },
            // {
            //     test: /\.styl$/,
            //     exclude: /node_modules/,
            //     use: ExtractTextPlugin.extract({
            //         fallback: 'style-loader',
            //         use: [{
            //                 loader: 'css-loader',
            //                 options: {
            //                     url: false,
            //                     minimize: isProduction
            //                 }
            //             },
            //             {
            //                 loader: 'postcss-loader',
            //                 options: {
            //                     ident: 'postcss',
            //                     sourceMap: true
            //                 }
            //             },
            //             {
            //                 loader: 'stylus-loader'
            //             }
            //         ]
            //     })
            // },
            {
                test: /\.pcss/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            url: false,
                            minimize: isProduction
                        }
                    },
                        {
                            loader: 'postcss-loader',
                            options: {
                                ident: 'postcss',
                                sourceMap: true
                            }
                        },
                    ]
                })
            },
            {
                test: /\.json$/,
                exclude: /node_modules/
            }
        ]
    },
    watch: !isProduction,
    stats: {
        modules: false,
        hash: false,
        version: false
    },
    devtool: !isProduction ? 'source-map' : false,
    plugins
};