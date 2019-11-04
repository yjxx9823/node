/**
 * 
 * 1.定义一个路由文件 router.js
 * 2.在router中定义3个路由视图
 * 3.在03.js通过路径进行访问路由视图
 */

 var http = require("http")
 var fs = require("fs")
 var router =require()
 http.createServer((req,res)=>{
     req.url
     if(req.url=="/"){
         router.home(req,res)
     }else if(req.url=="/about"){
         router.about(req,res)
     }else if(req,url=="/news"){
         router.news(req,res)
     }else{
         res.end("404")
     }
 })