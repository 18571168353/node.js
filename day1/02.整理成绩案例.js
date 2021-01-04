const fs = require('fs')
fs.readFile('./成绩.txt', 'utf8', function (err, dataStr) {
  if (err) {
    return console.log('文件读取失败' + err.message)
  }
  const newStr = dataStr.replace(/=/g, ':').replace(/\s/g, '\n')
  fs.writeFile('./files/成绩-ok.txt', newStr, function (err) {
    if (err) return console.log('写入文件失败!' + err.message)
    console.log('写入文件成功')
  })
})
