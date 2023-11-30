const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/index.js',   //  打包入口文件
    output: {
        filename: '[name]123.js',  //  输出文件的文件名
    },

    // entry: {
    // 	main: './src/main.js',
    // 	app: './src/app.js',
    // },
    // output: { 
    //     filename: '[name]-[id]-[hash]-[chunkhash].js',  //每个chunk会通过这个函数拼接输出的文件名称
    //     path: __dirname + '/dist',  // 输出文件存放在本地的目录，必须是string类型的绝对路径
    // },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
          template: './index.html',
          filename: 'index.html'
        }),
        // new CleanWebpackPlugin(),
    ],
  
    // loader的规则
    module: {
        rules: [ 
          {
              test: /\.less$/,
              use: [ "style-loader", "css-loader", 'less-loader']  // use数组里从右向左运行
          },
          {
            test: /\.css$/,
            use: [ "style-loader", "css-loader"]
          },
          // {
          //   test: /\.(png|jpg|gif|jpeg)$/i,
          //   use: [
          //     {
          //       loader: 'url-loader', // 匹配文件, 尝试转base64字符串打包到js中
          //       options: {
          //         limit: 8 * 1024, // 8k
          //       },
          //     },
          //   ],
          // },
          {
            test: /\.(png|jpg|gif|jpeg)$/i,
            type: 'asset'
          },

        //   {
        //     test: /\.js$/,
        //     type: 'babel-loader',
        //     exclude: '/node_modules/',
        //     use: {
        //         loader: 'babel-loader',
        //         options: {
        //             presets: [
        //                 ['@babel/preset-env']
        //             ],
        //             plugins: [],
        //         }
        //     }
        //   },

        ]
    },

    // webpack-dev-server 开发时的配置，一般用于development模式
    devServer: {
        hot: true,
        port: 8080,
        static: "./dist",  // 指定存放静态资源
    },

    // 优化
    optimization: {
        // 使用 ES module 方式引用的模块将被 tree shaking 优化
        usedExports: true,
    },


    // 文件监听
    watch: true,
    watchOptions: {
        aggregateTimeout: 200, 
        ignored: /node_modules/, // 忽略一些不需要监听的庞大文件，比如 node_modules，可以优化性能。
        poll: 1000, // 指定轮询的时间间隔。
    },
   
}





