var flg = true;
function setRem() {
    if (flg) {
        flg = false;
        var ui_W = 375;
        var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
        clientWidth = clientWidth > 800 ? 800 : clientWidth;
        clientWidth = clientWidth < 250 ? 250 : clientWidth;
        var html_ = document.getElementsByTagName('html')[0];
        html_.style.fontSize = (clientWidth / ui_W) * 10 + 'px';

        setTimeout(function () {
            flg = true;
        }, 1000)
    }
}
window.onresize = setRem;
window.onload = setRem;