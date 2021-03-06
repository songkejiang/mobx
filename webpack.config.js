const path = require('path')
const config = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env'],
                        plugins: [ 
                            [
                                "@babel/plugin-proposal-decorators",
                                {
                                "legacy": true
                                }
                            ],
                            [
                                "@babel/plugin-proposal-class-properties",
                                {
                                "loose": true
                                }
                            ]
                        ]
                    }
                }
            }
        ]
    },
    devtool: 'inline-source-map'
}
module.exports = config