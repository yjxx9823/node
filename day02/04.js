var fs=require("fs")
var http =require("http")
http.createServer((req,res)=>{
    //读文件  异步读取
    // fs.readFile("./static/读文件.txt",(err,data)=>{
    //     res.end(data)
    // })
    //读文件 同步读取
    // var a =fs.readFileSync("./static/1.txt")
    // red.end(a)
    //写文件 writeFile
    fs.writeFile("./static/1.")
}).listen(3000)