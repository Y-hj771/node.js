const express = require('express')
const app = express()
// 向客户端响应一个JSON对象
app.get('/',(req,res)=>{
    console.log(req.query);
    res.send(req.query)
})

app.get('/user/:id',(req,res)=>{
    // :参数名 合理合法即可
    // req.params默认是一个空对象 动态匹配到参数值
    console.log(req.params);
    res.send(req.params)
})

app.listen(80,()=>{
    console.log('visit web http://127.0.0.1');
})