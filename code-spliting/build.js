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

f1().run((err, stat) => {
	console.log(stat.toJson())
})