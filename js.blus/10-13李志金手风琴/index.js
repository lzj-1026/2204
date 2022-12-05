
function accordion() {

    //1.设置宽高
    var W = 100;//默认宽
    var H = 80;//默认高
    var W_ = 300;//选中宽
    var H_ = 360;//选中高

    var row = 4;//行
    var col = 5;//列


    var ul_ = document.getElementById('imgList')
    ul_.style.width = W * 4 + W_ + "px";

    //循坏遍历
    for (var i = 0; i < ul_.children.length; i++) {
        // 给子元素  设置下标
        ul_.children[i].i_ = i;
        //   鼠标悬浮  赋予下标  出现样式
        ul_.children[i].onmouseenter = function () {

            //调用方法  设置样式
            fn(this.i_);
        }
    }

    // 选中图片的方法
    function fn(index) {
        //下标砖坐标 
        // X轴  因为5列  所以%5
        var x_ = index % col;
        // Y轴  取整于  下标/5  
        var y_ = Math.floor(index / 5)

        //遍历所有坐标   判断是否同行同列
        for (var j = 0; j < col; j++) {
            for (var k = 0; k < row; k++) {
                var index_ = col * k + j;
                if (x_ == j && y_ == k) {
                    // 当前坐标图片被选中
                    ul_.children[index_].style.width = W_ + 'px'
                    ul_.children[index_].style.height = H_ + 'px'
                } else if (x_ == j) {
                    // 同列选中
                    ul_.children[index_].style.width = W_ + 'px'
                    ul_.children[index_].style.height = H + 'px'
                } else if (y_ == k) {
                    // 同行选中
                    ul_.children[index_].style.width = W + 'px'
                    ul_.children[index_].style.height = H_ + 'px'
                } else {
                    ul_.children[index_].style.width = W + 'px'
                    ul_.children[index_].style.height = H + 'px'
                }
            }
        }

    }
    fn(0);
}