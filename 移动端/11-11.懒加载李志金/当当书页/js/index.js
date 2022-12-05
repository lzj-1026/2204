function show() {
    // 获取已经加载的区域
    var j_h = document.documentElement.scrollTop || document.body.scrollTop;
    // 获取设备高度
    var p_h = document.documentElement.clientHeight || document.body.clientHeight;

    // 获取 图片节点
    var imgs = document.getElementsByClassName('imgs');
    // console.log(imgs);
    var flg = true;
    for (let img of imgs) {
        if (flg) {
            if (((img.offsetTop + 100) <= (j_h + p_h)) && (img.getAttribute('data-New'))) {
                var New = img.getAttribute('data-New');
                console.log(New);
                img.src = New;
                console.log(img);
                img.removeAttribute('data-New')
                setTimeout(function () {
                    flag = true;
                }, 300)
            }
        }
    }
}
window.onload = show;
window.onscroll = show;