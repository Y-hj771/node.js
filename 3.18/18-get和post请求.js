const express = require('express')
const app = express()
// 向客户端响应一个JSON对象
app.get('/user',(req,res)=>{
    res.send({name:'ss',age:10,gender:'男'})
})
// 向客户端响应一个文本字符串
app.post('/user',(req,res)=>{
    res.send('请求成功！')
})
app.listen(80,()=>{
    console.log('visit web http://127.0.0.1');
})