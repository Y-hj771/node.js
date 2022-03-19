const username = 'ss'
exports.username = username
exports.age = 10
exports.sayHi=function(){
    console.log('你好');
}
// 最终还是以module.exports所对外共享的对象为准 
// console.log(module.exports === exports);