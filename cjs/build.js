const webpack = require('webpack')
const path = require('path')

function f1() {
	return webpack({
		entry: './index.js',
		mode: 'none',
		output: {
			iife: false,
			pathinfo: 'verbose' // verbose: 冗余；尽可能的详细
		}
	})
}

f1().run((err, stat) => {
	console.log('.... run ')
})