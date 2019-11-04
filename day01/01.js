//初始服务器
//node 模块
// 加载http 模块
var http =require("http")
//创建服务器
var server = http.createServer(function(req,res){
    //req request 请求 res response 响应
    //结束响应 =》响应客服端 
    res.end("hello node")
})
server.listen(3000,function(){
    console.log("服务器已经挂起")
})