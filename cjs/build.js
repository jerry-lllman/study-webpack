const webpack = require('webpack')

function f1() {
	return webpack({
		entry: './index.js',
		mode: 'none',
		output: {
			filename: 'main.js'
		}
	})
}

f1().run((err, stat) => {
	if (err) throw err
	console.log('本次构建用时：', stat.endTime - stat.startTime)
})