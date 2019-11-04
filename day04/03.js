//接受get 请求传输的参数
var express =require("express")
var app =express()
app.get("/",(req,res)=>{
    console.log("接收到的参数为:"+req.query.username)
    res.send({"data":req.query})
})
app.get("/getid/:id",(req,res)=>{
    console.log(req.params.id)
    res.end({"data":"接受的id为"+req.params.id})
    console.log(params.id)
})
app.listen(3000)