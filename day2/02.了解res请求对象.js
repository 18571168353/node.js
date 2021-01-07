const http = require('http')
const server = http.createServer()
server.on('request', (req, res) => {
	// req.url是客户端请求的URL地址
	// req.method是客户端请求的method类型
	const str = `Your request url is${req.url},and request method is ${req.method}`
	// req.end(str),代表吧str字符串响应到客户端
	res.end(str)
})
server.listen(3000, () => console.log('Server running on http://127.0.0.1:3000'))
