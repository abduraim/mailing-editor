const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            publicPath: 'assets/images',
                        }
                    }
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use:
                    [
                        {
                            loader: "style-loader",
                            options:
                                {
                                    sourceMap: true
                                }
                        },
                        {
                            loader: "css-loader",
                                options:
                                    {
                                        sourceMap: true
                                    }
                        },
                        {
                            loader: "sass-loader",
                            options:
                                {
                                    sourceMap: true
                                }
                        }
                    ]
            }
        ]
    }
};