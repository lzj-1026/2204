//setCookie()创建cookie
//键名  值  日期
function setCookie(key, val, time) {
    //存值
    var date = new Date();
    date.setDate(date.getDate() + time);
    document.cookie = `${key}=${val};expires=${date}`
}

//getCookie()  获取数据

function getCookie(key) {
    var arr = document.cookie.split('; ')
    for (var i = 0; i < arr.length; i++) {
        var newArr = arr[i].split('=');
        if (newArr[0] == key) {
            return newArr[1];
        }
    }
}

//removeCookie() 删除cookie
function removeCookie(key) {
    //设置 过期时间  
    this.setCookie(key, '', -1);
}

//clearCookie() 清空cookie
function clearCookie() {
    var arr = document.cookie.split('; ')
    for (var i = 0; i < arr.length; i++) {
        var newArr = arr[i].split("=");
        this.setCookie(newArr[0], '', -1)
    }
}