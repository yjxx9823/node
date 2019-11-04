//buffer  二进制数据  缓存区
/**
 * 
 * 什么是buffer?
 * 从类型上说，就是一个类数组
 * 从内存来说，就是新开辟的新内存空间
 * 
 * 作用：
 * 处理二进制数据
 * ？ 解决数据传输过大 
 * 案例： 文件流  事件流  Tcp
 * 别名：缓存区（等待区）
 * 
 * 因为buffer 是一个全局对象，所以不需要通过require 加载
 * 
 * buffer可以传输的类型？
 * string  Buffer  ArrayBuffer  Array  Array-like  Object
 * buffer下面有哪些方法？
 * toJson  toString  slice contact  length  
 * 字节 bit byte
 * buffer的编码类型？
 * utf8 base64 hex Ascii unicode
 * buffer 和 cache 的区别？
 * buffer 相当于临时居住地
 * cache 相当于永久的家
 */
//第一种定义buffer的方式
//Buffer。from  把字符串转buffer 
var buf =Buffer.from("node")
//<Buffer 6e 6f 64 65>
// var buf =Buffer.from()



//返回一个初始化的数据，防止生成新的数据包含旧数据
// var buf =Buffer.alloc(10)

//不安全，不推荐使用  未被初始化的buffer 
// var buf=Buffer.allocUnsafe()
console.log(buf.toString("base64"))