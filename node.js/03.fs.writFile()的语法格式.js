const { fstat } = require("fs");

fstat.writerFile(file, data, [options], callback)
// 参数1：必选，指定文件路径的字符串，表示文件的存放路径
// 参数2：必选，表示要写入的内容
// 参数3：非必选，表示以什么格式写入内容  utf8（默认）
// 参数4：必选，文件写入完成后得的回调函数