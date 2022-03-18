const http = require('http')
const server = http.createServer()
// req是请求对象 它包含了与客户端相关的数据和属性
server.on('request',(req,res)=>{
    const url = req.url
    const method = req.method
    const str = 'you request url is' + url +',and request method is' + method
    console.log(str);
    // res.end()向客户端发送指定的内容，并结束本次处理
    res.end(str)
})
server.listen(8080,()=>{
    console.log('start web http://127.0.0.1:8080');
})