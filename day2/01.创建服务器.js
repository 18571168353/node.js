// 导入http模块
const http = require('http')
// 创建web服务器实例
const server = http.createServer()
// 为服务器实例绑定request事件,监听客户端的请求
server.on('request', (request, response) => {
	response.end('ok')
})
// 启动服务器
server.listen(3000, () => console.log('Server running on http://127.0.0.1:3000'))
