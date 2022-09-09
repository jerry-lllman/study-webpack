const webpack = require('webpack')

function f1() {
	return webpack({
		entry: './index.js',
		mode: 'none',
	})
}

f1().run((err, stat) => {
	console.log('构建完成')
})