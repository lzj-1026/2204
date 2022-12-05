var phone = document.getElementsByClassName('phone')[0]
console.log(phone);
var yanzheng = document.getElementsByClassName('yzm')[0]
var span_ = document.getElementsByClassName('s')
var password = document.getElementsByClassName('sz')[0]
var rePassword = document.getElementsByClassName('qr')[0]
var bt_ = document.getElementsByClassName('dianji')[0]
var submit = document.getElementsByClassName('bt')[0]
console.log(submit);
phone.onblur = function () {
    var name = phone.value
    var reg = /^1[3578]\d{9}$/
    if (!reg.test(name)) {
        span_[0].style.color = 'red'
        span_[0].innerHTML = '手机号输入有误'
    }
    if (name == '') {
        span_[0].style.color = 'red'
        span_[0].innerHTML = '手机号不能为空'
    }
    if (reg.test(name)) {
        span_[0].style.color = 'pink'
        span_[0].innerHTML = '输入正确'
        return true;
    }
}
password.onblur = function () {
    var name = password.value
    var reg = /^\w{6,10}$/
    if (!reg.test(name)) {
        span_[2].style.color = 'red'
        span_[2].innerHTML = '请输入6-10位密码'
    }
    if (name == '') {
        span_[2].style.color = 'red'
        span_[2].innerHTML = '不能为空'
    }
    if (reg.test(name)) {
        span_[2].style.color = 'pink'
        span_[2].innerHTML = '密码格式输入正确'
        return true;
    }
}
rePassword.onblur = function () {
    var name = rePassword.value
    var name1 = password.value
    var reg = /^\w{6,10}$/
    if (!reg.test(name)) {
        span_[3].style.color = 'red'
        span_[3].innerHTML = '请输入正确格式'
    }
    if (name !== name1) {
        span_[3].style.color = 'red'
        span_[3].innerHTML = '两次密码不一致'
    }
    // if (name == '') {
    //     span_[3].style.color = 'red'
    //     span_[3].innerHTML = '不能为空'}
    if (name === name1 && name !== '') {
        span_[3].style.color = 'pink'
        span_[3].innerHTML = '密码一致'
        return true;
    }
}
yanzheng.onblur = function () {
    var name = yanzheng.value
    var str = arr.join('')
    console.log(str);
    if (name == '') {
        span_[1].style.color = 'red'
        span_[1].innerHTML = '验证码不能为空'
    }
    if (name !== str) {
        span_[1].style.color = 'red'
        span_[1].innerHTML = '验证码输入错误'
    }

    if (name == str && name !== '') {
        span_[1].style.color = 'pink'
        span_[1].innerHTML = '正确'

        return true;
    }

}
var min = 60;
var timer;
var arr = [];
var flg = true
bt_.onclick = function () {
    clearInterval(timer)
    timer = setInterval(function () {
        min--;
        bt_.value = min + '秒后重新发送'
        if (min == 0) {
            bt_.value = '重新发送'
            min = 3
            clearInterval(timer)
        }
    }, 1000)
    if (flg) {
        flg = false;
        for (var i = 0; i < 4; i++) {
            num = Math.round(Math.random() * 10)
            arr.push(num)
        }
        alert(arr.join(''))
        setTimeout(function () {
            flg = true;
        }, 60000)

    }
}

submit.onclick = function () {
    if (yanzheng.onblur() && rePassword.onblur() && password.onblur() && phone.onblur()) {
        alert('成功')
        location.href = 'http://127.0.0.1:5502/js.blus/%E4%B8%80%E5%8F%B7%E5%BA%97%E6%95%B4%E5%BA%97/register.html'
        var phone1 = document.getElementsByTagName('input')[0].value
        var password1 = document.getElementsByTagName('input')[4].value
        setCookie('user', phone1)
        setCookie('password', password1)



    } else {
        alert('注册失败')

    }

}
function dl_() {
    location.href = 'http://127.0.0.1:5502/js.blus/%E4%B8%80%E5%8F%B7%E5%BA%97%E6%95%B4%E5%BA%97/register.html'

}
