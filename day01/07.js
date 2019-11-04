var http = require("http")
var url = require("url")
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    // url.parse().querry  可以处理get请求
    var obj =url.parse(req.url,true).query
    res.end("接收的username是:"+obj.username)
}).listen(3000)