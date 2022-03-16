const path = require("path")

const fpath = '/a/b/c/index.html'
var dom = path.basename(fpath)
console.log(dom);//index.html
var dd = path.basename(fpath,'html')
console.log(dd);//index