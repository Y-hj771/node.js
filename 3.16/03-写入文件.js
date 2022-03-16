const fs = require('fs')
fs.writeFile('./2.txt','我加入进来了',function(err){
    console.log(err);
})