var flg = true;
function show() {
    var ui_w = 375;
    if (flg)
        var client_w = document.documentElement.clientWidth || document.body.clientWidth;
    var html = document.querySelector('html');
    html.style.fontSize = (client_w / ui_w) * 10 + 'px';
    setTimeout(function () {
        flg = true;
    }, 9000)
}

window.onresize = show;
window.onload = show;