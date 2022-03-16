const fs = require('fs')
const { resolve } = require('path')
const path = require('path')
// 定义正则表达式 分别匹配<style></style> 和 <script></script> 标签
const regScript = /<script>[\s\S]*<\/script>/
const regStyle = /<style>[\s\S]*<\/style>/

fs.readFile(path.join(__dirname,'./index.html'),'utf8',function(err,dataStr){
    if(err){return console.log('读取失败' + err.message);}
    // console.log('读取成功' + dataStr);
    //读取成功后调用相应的三个方法，分别拆解出css,js,html文件
    resolveCSS(dataStr)
    resolveJS(dataStr)
    resolveHTML(dataStr)
})
//定义处理样式的方法
function resolveCSS(htmlStr){
    //使用正则提取需要的内容
    const r1 = regStyle.exec(htmlStr)
    //将提取出来的字符串进行replace替换操作
    const newCSS = r1[0].replace('<style>','').replace('</style>','')
    //调用fs.writeFile()方法，将提取的样式写入到index.css文件中
    fs.writeFile(path.join(__dirname,'./index.css'),newCSS,function(err){
        if(err){return console.log('写入失败' + err.message);}
        console.log('写入CSS成功');
    })
}
//定义处理js脚本的方法
function resolveJS(htmlStr){
    const r2 = regScript.exec(htmlStr)
    const newJS = r2[0].replace('<script>','').replace('</script>','')
    fs.writeFile(path.join(__dirname,'./index.js'),newJS,function(err){
        if(err){return console.log('写入失败' + err.message);}
        console.log('写入JS成功');
    })
}
//定义处理HTML结构的方法
function resolveHTML(htmlStr){
    const newHTML = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css" />').replace(regScript, '<script src="./index.js"></script>')
    fs.writeFile(path.join(__dirname,'./index1.html'),newHTML,function(err){
        if(err){
            return console.log('写入失败' + err.message);
        }
        console.log('写入html成功');
    })
}