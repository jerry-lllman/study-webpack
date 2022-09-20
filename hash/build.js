const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin  =  require("mini-css-extract-plugin")

// 通过配置 deterministic，可获得确定的 moduleId 与 chunkId
// 从而优化代码修改导致大部分chunkId的变更，导致依赖该chunkId 的文件的hash值也被修改使得webpack需要重新构建文件，及浏览器缓存失效的问题
function f1() {
  return webpack({
    entry: '.src/index.js',
    mode: 'none',
    output: {
      filename: '[name].[contenthash].js',
      chunkFilename: 'chunk.[name].[id].[contenthash].js',
      path: path.resolve(__dirname, 'dist/deterministic')
    },
    optimization: { // 设置为 deterministic(确定的) 生产环境下默认设为 deterministic
      moduleIds: 'deterministic', // 能够确定每个模块 的 id 
      chunkIds: 'deterministic' // 能够确定每个chunk 的 id
    }
  })
}


// 当 runtimeChunk 设置为 true 时，将单独把 webpack 的运行时给独立出来

const moduleConfig = {
  rules: [
    {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: {
            importLoaders: 1
          }
        },
      ]
    },
  ]
}

function f2() {
  return webpack([
    {
      entry: './src/index.js',
      mode: 'none',
      module: moduleConfig,
      output: {
        filename: '[name].[fullhash].js',
        path: path.resolve(__dirname, 'dist/fullhash'),
        clean: true
      },
      plugins: [
				new MiniCssExtractPlugin({
					// css 输出添加hash
					filename: '[name].[fullhash].css'
				})
      ]
    },
    {
      entry: './src/index.js',
      mode: 'none',
      module: moduleConfig,
      output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist/chunkhash'),
        clean: true
      },
      plugins: [
				new MiniCssExtractPlugin({
					// css 输出添加hash
					filename: '[name].[chunkhash].css'
				})
      ]
    },
    {
      entry: './src/index.js',
      mode: 'none',
      module: moduleConfig,
      output: {
        filename: '[name].[contenthash].js',
        // chunkFilename: '[name].[contenthash].chunk.js',
        path: path.resolve(__dirname, 'dist/contenthash'),
        clean: true,
        chunkLoading: 'import',
        chunkFormat: 'module'
      },
      plugins: [
				new MiniCssExtractPlugin({
					// css 输出添加hash
					filename: '[name].[contenthash].css'
				})
      ]
      // optimization: {
      //   moduleIds: 'deterministic',
      //   chunkIds: 'deterministic',
      //   runtimeChunk: true
      // }
    },
  ])
}


f2().run(() => {
  console.log('✅')
})