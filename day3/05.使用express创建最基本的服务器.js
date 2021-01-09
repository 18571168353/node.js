// 1.导入express
const express = require('express')
// 2.创建web服务器
const app = express()

// 4.监听客户端的GET和POST请求,并向客户端响应具体的内容
app.get('/user', (req, res) => {
	res.send({
		name: 'zs',
		age: '30',
		gender: '男'
	})
})
app.post('/user', (req, res) => {
	res.send('请求成功!')
})

app.get('/',(req,res)=>{
console.log(req.query);
res.send(req.query)
})

app.get('/user/:id',(req,res)=>{
    console.log(req.params);
    res.send(req.params)
})

// 3.启动web服务器
app.listen(80, () => {
	console.log('express server running at http://127.0.0.1')
})
