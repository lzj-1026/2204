// 节流
var flag = true;
function setRem() {
    if (flg) {
        flg = false;
        var ui_w = 375;
        var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
        var html_ = document.getElementsByTagName('html')[0];
        html_.style.fontSize = (clientWidth / ui_w) * 10 + 'px';
        setTimeout(function () {
            flg = true;
        }, 300)
    }
}

window.onresize = setRem;
window.onload = setRem;




// 防抖
function setRem() {
    var ui_w = 375;
    // 获取屏幕的宽度
    var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
    console.log(ui_w, clientWidth);

    // 通过js动态改变html根节点字体大小
    var html_ = document.getElementsByTagName('html')[0];
    html_.style.fontSize = (clientWidth / ui_w) * 100 + 'px';
}
// window.onresize 浏览器被重置大小执行事件
var timer = null;
window.onresize = function () {
    clearTimeout(timer);
    timer = setTimeout(setRem, 300);
};
window.onresize = setRem;
