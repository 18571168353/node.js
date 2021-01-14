const mysql = require('mysql')

const db = mysql.createPool({
	host: '127.0.0.1',
	user: 'root',
	password: 'root',
	database: 'my_db_01'
})

// const sqlStr = 'select * from ev_users'
// db.query(sqlStr, (err, results) => {
//   // 查询数据失败
//   if (err) return console.log(err.message)
//   // 查询数据成功
//   // 注意：如果执行的是 select 查询语句，则执行的结果是数组
//   console.log(results)
// })

module.exports = db
