const http = require('http')
const server = http.createServer()
server.on('request', (request, response) => {
	response.end('ok')
})
server.listen(3000, () => console.log('Server running on http://127.0.0.1:3000'))
