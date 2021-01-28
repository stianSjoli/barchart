const path = require('path');

module.exports = {
    entry: {
        barchart:'./src/barchart/barchart.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    performance: {
        hints: 'warning'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
};
