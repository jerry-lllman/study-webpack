const webpack = require('webpack')
const path = require('path')

function f1() {
	return webpack([
		{
			entry: './src/comment/index.js',
			mode: 'none',
			output: {
				filename: '[name].[contenthash].js',
				chunkFilename: '[name].[id].chunk.[contenthash].js',
				path: path.resolve(__dirname, 'dist/comment'),
				clean: true
			}
		},
		{
			entry: './src/prefetch/index.js',
			mode: 'none',
			output: {
				filename: '[name].[contenthash].js',
				chunkFilename: '[name].[id].chunk.[contenthash].js',
				path: path.resolve(__dirname, 'dist/prefetch'),
				clean: true
			}
		},
		{
			entry: './src/preload/index.js',
			mode: 'none',
			output: {
				filename: '[name].[contenthash].js',
				chunkFilename: '[name].[id].chunk.[contenthash].js',
				path: path.resolve(__dirname, 'dist/preload'),
				clean: true
			}
		}
	])
}

f1().run(() => {
	console.log('✅')
})