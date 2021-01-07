// 1.1 导入fs模块
const fs = require('fs')
// 1.2导入path模块
const path = require('path')
// 1.3定义正则表达式,分别匹配<style></style>和<script></script>标签
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

// 2.1调用fs.readFile()方法读取文件
fs.readFile(path.join(__dirname, './index.html'), 'utf8', function (err, dataStr) {
  // 2.2读取HTML文件失败
  if (err) return console.log('读取HTML文件失败!' + err.message)
  // 2.3读取文件成功后,调用对应的三个方法,分别拆解出css,js,html文件
  resolveCSS(dataStr)
  resolvejs(dataStr)
  resolveHTML(dataStr)
})
// 3.1定义处理css样式的方法
function resolveCSS(htmlStr) {
  // 3.2使用正则提取所需的内容
  const r1 = regStyle.exec(htmlStr)
  // console.log(r1);
  // 3.3将提取出来的样式字符串,进行字符串的replace替换操作
  const newCss = r1[0].replace('<style>', '').replace('</style>', '')
  // console.log(newCss)
  // 3.4调用fs.witeFile()方法,将提取到的样式,写入到clock目录中index.css里面
  fs.writeFile(path.join(__dirname, './clock/index.css'), newCss, function (err) {
    if (err) return console.log('写入css样式失败!' + err.message)
    console.log('写入样式成功!')
  })
}
// 4.1定义处理js脚本的方法
function resolvejs(htmlStr) {
  // 4.2使用正则提取所需的内容
  const r2 = regScript.exec(htmlStr)
  // console.log(r1);
  // 4.3将提取出来的样式字符串,进行字符串的replace替换操作
  const newJS = r2[0].replace('<script>', '').replace('</script>', '')
  // console.log(newCss)
  // 4.4调用fs.witeFile()方法,将提取到的样式,写入到clock目录中index.css里面
  fs.writeFile(path.join(__dirname, './clock/index.js'), newJS, function (err) {
    if (err) return console.log('写入JS脚本失败!' + err.message)
    console.log('写入JS脚本成功!')
  })
}
// 5.1定义处理HTML结构的方法
function resolveHTML(htmlStr) {
  const newHTML = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css">').replace(regScript, '<script src="./index.js"></script>')
  fs.writeFile(path.join(__dirname, './clock/index.html'), newHTML, function (err) {
    if (err) return console.log('写入HTML文件失败!' + err.message)
    console.log('写入文件成功!')
  })
}
