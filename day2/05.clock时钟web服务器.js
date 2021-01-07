// 导入模块
const http = require('http')
const fs = require('fs')
const path = require('path')

// 创建web服务器
const server = http.createServer()

//监听web服务器的req事件
server.on('request', (req, res) => {
	// 获取客户端请求的URL地址
	const url = req.url
	// 吧请求的url地址,映射到本地文件的存放路径
	// const fpath = path.join(__dirname, url)
	let fpath = ''
	if (url === '/') {
		fpath = path.join(__dirname, './clock/index.html')
	} else {
		fpath = path.join(__dirname, '/clock', url)
	}

	fs.readFile(fpath, 'utf8', (err, dataStr) => {
		if (err) return res.end('404 Not found')
		res.end(dataStr)
	})
})
// 启动服务器
server.listen(80, () => {
	console.log('server running at http://127.0.0.1')
})
