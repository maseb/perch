const path = require('path');
const isProd = process.env.NODE_ENV === 'production';
module.exports = {
    entry: {
        helloWorld: './src/core/HelloWorld.bs.js'
    },
    mode: isProd ? 'production' : 'development',
    output: {
        path: path.join(__dirname, 'dist', 'bundles'),
        filename: '[name]' + (isProd ? '.min' : '') + '.js'
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