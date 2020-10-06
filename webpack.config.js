var webpack = require('webpack');
const path = require('path')

module.exports = {
    entry: "./client/main.js",
    output: {
        path: __dirname + '/public/',
        //publicPath: "public/",    
        filename: "app.js"
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: false,
        port: 9000
    },
    module: {
        rules: [ 
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: [/node_modules/, /public/],
                options: {
                    presets: ['@babel/preset-env','@babel/preset-react']
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader!autoprefixer-loader",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!autoprefixer-loader!less",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.gif$/,
                loader: "url-loader?limit=10000&mimetype=image/gif"
            },
            {
                test: /\.jpg$/,
                loader: "url-loader?limit=10000&mimetype=image/jpg"
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=10000&mimetype=image/png"
            },
            {
                test: /\.svg/,
                loader: "url-loader?limit=26000&mimetype=image/svg+xml"
            },
            {
                test: /\.jsx$/,
                loader: "babel-loader",
                exclude: [/node_modules/, /public/],
                options: {
                    presets: ['@babel/preset-env','@babel/preset-react']
                }
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            }
        ]
    }
}

