const express = require('express')
const app = express()
app.use(express.static('./一个文件夹'))
app.listen(80,()=>{
    console.log('web http://127.0.0.1');
})