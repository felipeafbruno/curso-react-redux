const modoDev = process.env.MODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssertsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production', // Modo do Ambiente 
    entry: './src/principal.js', // Caminho do arquivo de execução de uma Aplicação 
    output: {
        filename: 'principal.js', // Nome do arquivo de saída
        path: __dirname + '/public' // cCaminho onde será gerado o arquivo 
    }, 
    devServer: {
        contentBase: './plubic',
        port: 9000
    },
    plugins: [ 
        new MiniCssExtractPlugin({
            filename: 'estilo.css'
        })
    ],
    optimization: {
        minimizer: [ // Plugins para minificar stylesheets e arquivos .js
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssertsPlugin({})
        ]
    },
    module: { // Dentro de module temos rules onde é descrito os loaders 
        rules: [
            { // Loader responsável por ler arquivos .css
                test: /\.s?[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader, // Plugin extrai o CSS
                    // 'style-loader', // Loader responsável por adicionar o CCS na DOM injetando a tag <style>
                    'css-loader', // Loader responsável por interpretar @import, url()...
                    'sass-loader',
                ] 
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            }
        ]
    }
}