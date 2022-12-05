
var user_ = document.getElementsByClassName('user')[0]
var password_ = document.getElementsByClassName('psd')[0]
var checkbox_ = document.getElementsByClassName('checkbox')[0]
var span_ = document.getElementsByClassName('s')
user_.onblur = function () {
    var user__ = user_.value
    var reg = /[a-zA-Z0-9]{1,10}@[a-zA-Z0-9]{1,5}\.[a-zA-Z0-9]{1,5}|^1[3578]\d{9}$|^[\u4e00-\u9fa5]{2,4}$/
    if (!reg.test(user__)) {
        span_[0].style.color = 'red'
        span_[0].innerHTML = '请输入正确的手机号/邮箱/用户名'
    }
    if (user__ == '') {
        span_[0].style.color = 'red'
        span_[0].innerHTML = '用户名不能为空'
    }
    if (reg.test(user__)) {
        span_[0].style.color = 'pink'
        span_[0].innerHTML = '用户名格式正确'
        return true;
    }
}
password_.onblur = function () {
    var pas = password_.value
    var reg = /^\w{6,10}$/
    if (!reg.test(pas)) {
        span_[1].style.color = 'red'
        span_[1].innerHTML = '请输入6-10密码'
    }
    if (pas == '') {
        span_[1].innerHTML = '密码不能为空'
    }
    if (reg.test(pas)) {
        span_[1].innerHTML = '密码格式正确'
        return true;
    }
}
var bt_ = document.getElementsByClassName('bt')[0]
bt_.onclick = function () {
    var user = getCookie('user')
    var password = getCookie('password')
    if (user_.value == user && password_.value == password) {
        alert('登录成功')
        location.href = "http://127.0.0.1:5502/js.blus/%E4%B8%80%E5%8F%B7%E5%BA%97%E6%95%B4%E5%BA%97/index.html"
        var aaa_ = document.getElementById('a')
        aaa_.innerHTML = user.value

    } else {
        alert('用户名或密码不正确')
    }
    if (checkbox_.checked) {
        setCookie('user', user_.value)
        setCookie('password', password_.value)
    } else {
        removeCookie('user')
        removeCookie('password')
    }
}


