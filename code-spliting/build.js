const webpack = require('webpack')
const path = require('path')

function f1() {
	return webpack({
		entry: './index.js',
		mode: 'none',
		output: {
			filename: 'main.[contenthash].js',
			chunkFilename: '[name].chunk.[contenthash].js',
			path: path.resolve(__dirname, 'dist/contenthash'),
			clean: true
		}
	})
}

function f2() {
	return webpack({
		entry: './index.js',
		mode: 'none',
		output: {
			filename: 'main.[contenthash].js',
			chunkFilename: '[name].chunk.[contenthash].js',
			path: path.resolve(__dirname, 'dist/import'),
			clean: true,
			chunkLoading: 'import',
			chunkFormat: 'module'
		}
	})
}

f2().run((err, stat) => {
	console.log(stat.toJson())
})