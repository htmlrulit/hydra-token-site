const path = require('path');

module.exports = {
    // Ваша текущая конфигурация...
    module: {
        rules: [
            // Ваши текущие правила...
            {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
                exclude: /node_modules\/react-image/, // Исключить react-image
            },
        ],
    },
    resolve: {
        fallback: {
            "fs": false
        }
    }
};
