function setRem() {
    var ui_w = 375;
    var client_w = document.documentElement.clientWidth || document.body.clientWidth;

    // 如果设备宽度大于600  等于600  如果设备宽度小于250  等于250  
    client_w = client_w > 600 ? 600 : client_w;
    client_w = client_w < 400 ? 400 : client_w;

    var html = document.getElementsByTagName('html')[0];
    html.style.fontSize = (client_w / ui_w) * 10 + 'px';
}

var timer = null;
window.onresize = function () {
    clearTimeout(timer);
    timer = setTimeout(setRem, 300);
};
// 当页面加载的时候  也要调用一下setRem 目的  默认 把html 根节点的字体大小 设置为10px
window.onload = setRem;

// 点击事件

// 获取图片
var tu_ = document.getElementById('tt1');
// 找到蒙版
var mb_ = document.getElementById('mb');
// 蒙版另一半
var right = document.getElementById('right')
tu_.onclick = function animate() {

    mb_.style.left = '0'
}
right.onclick = function () {
    mb_.style.left = "-100%"

}


