//1.导入fs模块，来操作文件
const fs = require('fs')
// 2.调用fs.readFile（）方法来读取文件
// 参数一：读取文件存放的路径
// 参数二：读取文件采用的编码格式，一般指定utf8
// 参数三：回调函数，拿到读取失败和成功的结果  err  dataStr
fs.readFile('./测试js/1.txt', 'utf8', function (err, dataStr) {
    // 2.1打印失败的结果
    // 如果读取成功  则err   的值为   null
    // 如果读取失败 则err的值  为错误对象，dataStr的值为underfind
    console.log(err);
    console.log('-------');
    // 2.2打印成功的结果
    console.log(dataStr);
})