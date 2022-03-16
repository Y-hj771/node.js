const fs = require('fs')
fs.readFile('./3.txt','utf8',function(err,dataStr){
    if(err){
        console.log('读取失败' + err.message);
    }
    // console.log('读取成功' + dataStr);
    // 先把成绩按照逗号分隔开
    const arrOld = dataStr.split(' ')
    // 循环分割后的数组，对每一项数据。进行字符串的替换操作
    const arrNew = []
    arrOld.forEach(item=>{
        arrNew.push(item.replace('=',':'))
    })
    // 把新数组中的每一项进行合并，得到一个新的字符串   
    const newStr = arrNew.join('\r\n')
    // console.log(newStr);

    // 将整理好的成绩写入指定文档中
    fs.writeFile('./cj.txt',newStr,function(err){
        if(err){
            return console.log('写入失败' + err.message);
        }
        console.log('写入成功！');
    })
})