var express =require("express")
var app=express()
var path =require("path")
//cookie中间件
var cookieparser =require("cookie-parser")
//让express 和 cookie建立关系
app.use(cookieparser())
var static =path.resolve(__dirname,"public")
app.use(express,static(static))

app.get("/",(req,res)=>{
    console.log("首页中获取:"+req.cookies)
    res.send({"data":"login中的cookie为:"+req.cookies})
})
//设置 setcookie
app.get("/login",(req,res)=>{
    var obj =req.query.username
    res.send({"data":obj})
    //req.cookies.cookiename=obj
    //设置cookie  maxAge 过期时长  httpOnly  只允许在服务器端修改cookie值
    //signed 是否生产签名  damain  域名  
    res.cookie("username",obj,{maxAge:90000,httpOnly:true})
    res.send({"data":req.query.username})
})
//获取getcookie
app.get("/list",(req,res)=>{
    console.log("获取"+req.cookies.username)
    res.send()
})
app.listen(3000)

/**
 *一. 什么是cookie？
 * cookie是存在访问者计算机中的一个变量，便于访问同一域名或服务器存储的用户信息
 *二. cookie的优缺点？
 * 优点:1.协助服务端承载压力 2.存在过期时间,不便于攻击者进行攻击
 * 缺点:有长度限制，安全性比较低，存储量小
 *三. cookie的存储的大小？
 * 4kb
 * 四.cookie的安全性?
 * 相对比较低，
 *五. 如何解决?
 * 生成签名
 *六.cookie的特点?
 * cookie保存在浏览器本地
 * cookie默认不加密，用户之间可以看到
 * cookie支持被删除
 * cookie便于用于攻击
 * cookie易被篡改
 */