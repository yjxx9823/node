var queryString = require("querystring")
// var obj = queryString.parse("name=tom&sex=0&id=1")//将对象转换为字符串
// var obj =queryString.stringify( { name: 'tom', sex: '0', id: '1' })//将字符串转换为对象
// var obj =queryString.escape("name=及防护到位")
var obj =queryString.unescape("name%3D%E5%8F%8A%E9%98%B2%E6%8A%A4%E5%88%B0%E4%BD%8D")
console.log(obj)