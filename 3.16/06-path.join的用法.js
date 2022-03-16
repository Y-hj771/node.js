const path = require('path')
const fs = require('fs')
// // ../可以抵消前面的一层路径
// const pathStr = path.join('/a','/b/c','../','/d')
// console.log(pathStr);
// path.join()进行路径拼接
fs.readFile(path.join(__dirname,'/cj.txt'),'utf8',function(err,dataStr){
    if(err){
        return console.log('读取失败' + err.message);
    }
    console.log('读取成功' + dataStr);
})