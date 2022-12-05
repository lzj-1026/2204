var kuang = document.querySelectorAll(".ab")
var dui = document.querySelectorAll(".dui")
var money = document.getElementById("money")
var money_ = document.getElementById("money_")
console.log(money);
for (let i = 0; i < kuang.length; i++) {
    kuang[i].setAttribute("nb", i)
    kuang[i].onclick = function () {
        var nb = this.getAttribute('nb')
        for (var j = 0; j < kuang.length; j++) {
            kuang[j].className = ''
            kuang[nb].className = 'nb'
        }
        money.innerHTML = Math.round(Math.random() * 10000)
        money_.innerHTML = Math.round(Math.random() * 10000)

    }
    dui[i].setAttribute("nb", i)
    dui[i].onclick = function () {
        var nb = this.getAttribute('nb')
        for (var j = 0; j < dui.length; j++) {
            dui[j].className = ''
            dui[nb].className = 'nb'
        }
        money.innerHTML = Math.round(Math.random() * 10000)
        money_.innerHTML = Math.round(Math.random() * 10000)
    }
}

