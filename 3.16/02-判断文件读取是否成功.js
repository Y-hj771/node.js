const fs = require('fs')
fs.readFile('./1.txt','utf8',function(err,dataStr){
    if(err){
       return  console.log('读取失败'+err.message);
    }
    console.log('读取成功'+dataStr);
})