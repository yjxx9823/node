var http =require("http")
var fs =require("fs")
var art =require("art-template")

http.createServer((req,res)=>{
    fs.readFile("../day04/static/index.art",(err,data)=>{
        //获取art-template 模板
        var template = data.toString() //buffer
        //render  模板  数据
        //定义数据
        var list =["tom","a","s"]
        var htmlData = art.render(template,{a:list})
        console.log(data)
        res.end(htmlData)
    })
}).listen(3000)