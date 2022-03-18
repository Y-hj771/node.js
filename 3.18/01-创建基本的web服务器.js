// 导入http模块
const http = require('http')
// 创建web服务器实例
const server = http.createServer()
// 为服务器实例绑定require事件，监听客户端的请求
server.on('request',function(req,res){
    console.log('someone visit the web');
})
// 启动服务器
server.listen(8080,function(){
    console.log('someone visit http://127.0.0.1:8080');
})