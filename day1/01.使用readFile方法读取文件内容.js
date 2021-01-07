const fs =require('fs');
let str='h'
fs.readFile('./files/1.txt','utf8',(err,data)=>{
    if(err) return console.log('读取失败');
    console.log(data);
    str=data
})
console.log(str);