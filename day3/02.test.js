const test = require('./gk-tools')
const m = test.dateFormat(new Date())
console.log(m)
const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>'
const str=test.htmlEscape(htmlStr)
console.log(str);
const str1=test.htmlUnEscape(str)
console.log(str1);
