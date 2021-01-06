const http = require('http')
const server = http.createServer()
server.on('request', (req, res) => {
	// req.url是客户端请求的URL地址
	// req.method是客户端请求的method类型
    const str = `你的端口为${req.url},请求方式为 ${req.method}`
    res.setHeader('Content-Type','text/html;charset=utf-8')
	// req.end(str),代表吧str字符串响应到客户端
	res.end(str)
})
server.listen(3000, () => console.log('Server running on http://127.0.0.1:3000'))
