import "./sum.css"

import(/* webpackChunkName: "add" */ './add').then(m => {
	console.log(m.default(1,2))
})


const sum = (...args) => args.reduce((x, y) => x + y, 0)


export default sum