const path = require('path');

module.exports = {
    entry: './src/barchart.js',
    output: {
        filename: 'barchart.js',
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
