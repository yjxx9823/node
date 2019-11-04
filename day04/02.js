var express =require("express")
var app =express()
//get 指代的是get亲求
app.get("/",(req,res)=>{
    console.log(arguments)
    res.end({"success":"ok","data":[{"name":"tom","age":"15"}]})
})
app.post("/list",(req,res)=>{
    res.send({"success":"post请求成功给你","data":[{"name":"tom","age":"15"}]})
})
// all 代表的是所有
//什么情况下会使用app.all  解答:控制全局的功能时需要使用all
app.all("/",(req,res)=>{
    res.send({"data":"数据请求"})
})
app.listen(3000)