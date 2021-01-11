const express = require('express')
const app = express()
// 定义路由
app.get('/', (req, res) => {
	throw new Error('服务器内发生错误')
	res.send('Home page.')
})
// 定义错误级别发中间件 铺货整个项目的异常错误 从而阻止程序异常崩溃
app.use((err, req, res, next) => {
	console.log('发生了错误!' + err.message)
	res.send('Error:' + err.message)
})

app.listen(80, function () {
	console.log('http://127.0.0.1')
})
