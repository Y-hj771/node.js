const http = require('http')
const fs = require('fs')
const path = require('path')
const server = http.createServer()

server.on('request',(req,res)=>{
    const url = req.url
    // const fpath = path.join(__dirname,url)
    // 预定义一个空白存放路径
    let fpath = ''
    if(fpath === '/'){
        fpath = path.join(__dirname,'./clock/index.html')
    }else{
        fpath = path.join(__dirname,'/clock',url)
    }
    fs.readFile(fpath,'utf8',(err,dataStr)=>{
        if(err){return res.end('Not found 404')}
        res.end(dataStr)
    })
})

server.listen(80,()=>{
    console.log('running web http://127.0.0.1');
})