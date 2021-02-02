const express = require('express')
const router = express.Router()
router.get('/get', (req, res) => {
	const query = req.query
	res.send({
		status: 0,
		mag: 'GET请求成功!',
		data: query
	})
})
router.post('/post', (req, res) => {
	res.send({
		status: 0,
		mag: 'POST请求成功!',
		data: req.body
	})
})
router.delete('/delete', (req, res) => {
	res.send({
		status: 0,
		msg: 'DELETE 请求成功!',
		data: {
			test: 'success'
		}
	})
})
module.exports = router
