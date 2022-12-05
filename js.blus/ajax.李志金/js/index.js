// ajax加载数据

function getData() {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft');
    ajax_.open('get', '../data.json');
    ajax_.send();

    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.staus == 200) {
                console.log(ajax_.responseText);
            } else {
                console.log('加载错误');
            }
        }
    }
}