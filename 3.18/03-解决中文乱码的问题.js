const http = require('http')
const server = http.createServer()
server.on('request',(req,res)=>{
    const str = '你好啊服务器'
    res.setHeader('Content-Type','text/html;charset=utf-8')
    // console.log(str);
    res.end(str)
})
server.listen(8080,()=>{
    console.log('start web http://127.0.0.1:8080');
})