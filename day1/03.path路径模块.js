const path = require('path')
const fpath='/a/b/c/index.html'
// 获取完整文件名
var fullName=path.basename(fpath)
console.log(fullName);
// 获取去除扩展名的
var newfullName=path.basename(fpath,'html')
console.log(newfullName);