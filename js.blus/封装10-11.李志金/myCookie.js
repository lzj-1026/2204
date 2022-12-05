function Cookie() { }
Cookie.prototype.setCookie = function (key, val, time) {
    //存值
    var date = new Date();
    date.setDate(date.getDate() + time);
    document.cookie = `${key}=${val};expires=${date}`
}
//获取数据
Cookie.prototype.getCookie = function (key) {
    var arr = document.cookie.split('; ')
    for (var i = 0; i < arr.length; i++) {
        var newArr = arr[i].split('=');
        if (newArr[0] == key) {
            return newArr[1];
        }
    }
}
//删除
Cookie.prototype.removeCookie = function (key) {
    //设置 过期时间  
    this.setCookie(key, '', -1);
}
//清空
Cookie.prototype.clearCookie = function clearCookie() {
    var arr = document.cookie.split('; ')
    for (var i = 0; i < arr.length; i++) {
        var newArr = arr[i].split("=");
        this.setCookie(newArr[0], '', -1)
    }
}