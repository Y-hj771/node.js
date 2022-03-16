// 1.导入fs模块，来操作文件
const fs = require('fs')
// 2.调用fs.readFile()方法读取文件
// 参数一：读取文件的存储路径
// 参数二：读取文件采用的编码格式，一般为utf8
// 参数三：回调函数，拿到读取失败和成功的结果 err和dataStr
fs.readFile('./1.txt','utf8',function(err,dataStr){
    // 如果读取成功 则err的值为null
    // 如果读取失败 则dataStr的值为 undefined
    console.log('err');
    console.log('-------');
    console.log(dataStr);
})