const path = require('path');
const isProd = process.env.NODE_ENV === 'production';
module.exports = {
    entry: {
        editor: './src/core/PCEditorRoot.bs.js'
    },
    mode: isProd ? 'production' : 'development',
    output: {
        path: path.join(__dirname, 'dist', 'bundles'),
        filename: '[name]' + (isProd ? '.min' : '') + '.js'
    },
    devServer: {
        publicPath: "/js/build/",
        contentBase: path.join(__dirname, "resources", "public")
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            ]
        }]
    }
};