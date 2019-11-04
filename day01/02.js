//解决乱码
var http = require("http")
http.createServer((req,res)=>{
    //设置响应头   
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    res.end("中国")     
}).listen(3000)
