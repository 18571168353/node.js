// 引入 express
const express = require('express')

// 创建服务器对象
const app = express()
// 通过express.json()这个中间件,解析表单中的JSON数据格式的数据
app.use(express.json())
// 通过express.urlencoded()这个中间件,来解析表单中的url-encoded格式的数据
app.use(express.urlencoded({extended:false}))
// TODO:
app.post('/user',(req,res)=>{
    console.log(req.body);
    res.send('ok')
})
app.post('/book',(req,res)=>{
    console.log(req.body);
    res.send('ok')
})

// 监听端口
app.listen(80, function () {
	console.log('http://127.0.0.1')
})
