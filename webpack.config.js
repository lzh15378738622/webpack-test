const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");  //打包的css拆分,将一部分抽离出来
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode:"development",//production none
    entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/dist",//打包后的文件存放的地方
        filename: "[name].js"//打包后输出文件的文件名
    },
   
    module: {
        rules: [{
            test: /\.scss$/,
            // use: [
            //     "style-loader", // creates style nodes from JS strings
            //     "css-loader", // translates CSS into CommonJS
            //     "sass-loader" // compiles Sass to CSS, using Node Sass by default
            // ]
            use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    // you can specify a publicPath here
                    // by default it use publicPath in webpackOptions.output
                    publicPath: '../'
                  }
                },
                "css-loader",
                "sass-loader"
              ]
        }]
        
    },
    plugins: [
        new HtmlWebpackPlugin({
            file:'[name].html',
            template:'app/index.html'
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        // new webpack.ProvidePlugin({
        //     $: 'jquery',
        //     jQuery: 'jquery',
        //     'window.jQuery': 'jquery',
        //     'window.$': 'jquery',
        //   })
          new webpack.ProvidePlugin({
            "$":"n-zepto"
        }),
    
    ],
   
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'10.200.5.224',
        compress:true,
        port:8000,
        inline: true
    },//  配置webpack服务
    
}