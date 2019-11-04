// fs  file system 文件系统
// require 加载
var http = require("http")
var fs = require("fs")
http.createServer((req,res)=>{
    fs.readFile("day01\wenzi.txt", function(err,data){
        if(err){
            return console.log(err);
        }
        console.log("异步读取:"+data.toString());
    })
}).listen(3000)