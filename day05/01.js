//public
var express =require("express")
var path =require("path")
var app =express()
//静态资源中间件  express.static   中间件必须通过use去使用，这样才能保证中间件和erpress进行关联
// console.log(__dirname)
var static =path.resolve(__dirname,"public")
// console.log(static)
app.use(express.static(static))
// app.use(express.static("./public"))

app.get("/",async(req,res)=>{
    res.send("服务器搭建成功")
})
app.listen(3000)