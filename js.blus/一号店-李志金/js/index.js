var mb_ = document.getElementsByClassName("nnn")[0]
var bl_ = document.getElementsByClassName("mb")[0]
function yiru() {
    // mb_.style.position.absolute.left = "25px"
    bl_.style.display = 'block';
}
function yichu() {
    bl_.style.display = 'none';
}
var nav = document.getElementsByClassName('nav_a')[0]
// console.log(nav);
var xian_ = document.getElementsByClassName('xian')[0]
xian_.onmouseenter = function () {

    nav.style.display = 'block'
}
xian_.onmouseleave = function () {
    nav.style.display = 'none'
}

// 购物车
var inner_ = document.getElementsByClassName('inner')[0];
// console.log(inner_);
var in_s = document.getElementsByClassName('in_s')[0];
// console.log(in_s);
function fn() {
    inner_.style.display = 'block'
}
function fn_() {
    inner_.style.display = 'none'
}
// var in_a_ = document.getElementsByClassName('in_a')[0]
// // console.log(in_a);
// var sc_ = document.getElementsByClassName('sc')[0]
// // console.log(sc_);
var kong_ = document.querySelector('.kong')
console.log(kong_);
// var in_a_ = Array.from(in_a)
var ul = document.getElementById('i_ul')
// console.log(ul.length);
var jia = document.querySelectorAll('.jia')
console.log(jia);
// console.log(jia);
var shu = document.querySelectorAll('.shu')
// console.log(shu);
var jian = document.querySelectorAll('.jian')
// console.log(jian);
var danjia = document.querySelectorAll('.danjia')
console.log(danjia);
var sum_ = document.getElementById('sum')
// sum_.innerHTML = 1
console.log(sum);
var je = document.getElementById('je')
console.log(je.innerHTML);
var li = document.querySelectorAll('.in_a')
console.log(li.length);
var box = document.querySelector('.in_s')
var x = document.querySelectorAll('.sc')
var money = [];
for (let i = 0; i < danjia.length; i++) {
    var arr = danjia[i].innerHTML - 0;
    console.log(arr);
    // console.log(typeof arr);
    money.push(arr);
    console.log(money);
    console.log(typeof money);
    jia[i].onclick = function () {
        shu[i].value++;
        danjia[i].innerHTML = money[i] * shu[i].value;
        console.log(money[i]);//单个商品价格
        console.log(shu[i].value);//单个商品价格
        zong()
    }
    jian[i].onclick = function () {
        shu[i].value--;
        if (shu[i].value <= 0) {
            alert('您确认删除这件宝贝吗？')
            ul.removeChild(this.parentNode.parentNode.parentNode.parentNode);
            li.length--;
            if (li.length == 0) {
                box.parentNode.removeChild(box)
            }
        }
        danjia[i].innerHTML = money[i] * shu[i].value;//单个商品价格
        zong()
    }
    x[i].onclick = function () {
        ul.removeChild(this.parentNode.parentNode.parentNode.parentNode);
        alert('您确认删除这件宝贝吗？')
        li.length--;
        // console.log(x[i]);
        if (li.length == 0) {

            box.parentNode.removeChild(box)
            in_s.style.display = "none";
            kong_.style.display = "block";
        }
    }
}

function zong() {
    var danjia = document.querySelectorAll('.danjia')
    var shu = document.querySelectorAll('.shu')
    var sum = 0
    var num = 0

    for (i = 0; i < danjia.length; i++) {
        sum = sum + Number(danjia[i].innerHTML);
        // console.log(typeof sum);
        num = num + Number(shu[i].value);
    }
    sum_.innerHTML = '合计（' + sum + ') '
    // console.log(sum);
    je.innerHTML = '立即结算（' + num + ')'
    // console.log(je.innerHTML);
}
zong()