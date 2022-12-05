// 1、找到页面需要的元素
var video = document.getElementById('video');// viedeo
var jpPause = document.getElementsByClassName("jp-pause")[0]; // 暂停按钮
var jpPlay = document.getElementsByClassName('jp-play')[0]; // 播放按钮 
var jpSeekBar = document.getElementsByClassName("jp-seek-bar")[0]; // 进度条整体
var jpPlayBar = document.getElementsByClassName("jp-play-bar")[0];// 进度条播放的进度条
var jpDuration = document.getElementsByClassName('jp-duration')[0]; // 总的时间
var jpCurrentTime = document.getElementsByClassName('jp-current-time')[0]; // 当前时间
var jpFullScreen = document.getElementsByClassName('jp-full-screen')[0]; // 全屏元素 点击该元素 全屏


// 2、 给viedeo 绑定事件


video.addEventListener('canplay', function () {
    //3.点击播放按钮
    //  视频播放  播放按钮隐藏  暂停按钮显示
    jpPlay.onclick = function () {
        video.play();
        this.style.display = 'none';
        jpPause.style.display = 'block';
    }

    // 4.暂停按钮   视频暂停  当前按钮隐藏 播放按钮显示
    jpPause.onclick = function () {
        video.pause();
        this.style.display = 'none';
        jpPlay.style.display = 'block';
    }

    //5. 设置总的时间
    jpDuration.innerHTML = formartTime(video.duration);

    //7. 设置当前播放的时间
    //   绑定播放时间更新的时间
    video.ontimeupdate = function () {
        // console.log(video.currentTime);

        //8. 设置当前播放的时间
        jpCurrentTime.innerHTML = formartTime(video.currentTime);

        // 9. 设置播放进度条
        //    根据当前播放时间 / 总的时长  得到比例 比例转为百分比  设置进度条样式

        var scale = video.currentTime / video.duration;
        jpPlayBar.style.width = scale * 100 + '%';


        // 10. 点击播放的进度条 调整播放进度
        jpSeekBar.onclick = function (e) {
            //    1. 播放条的宽度   
            e = e || window.event;
            var scale = e.offsetX / jpSeekBar.offsetWidth;
            jpPlayBar.style.width = scale * 100 + '%';
            // 2. 播放时间 也得更新

            video.currentTime = scale * video.duration;

        }
    }

    //11.全屏
    jpFullScreen.onclick = function () {
        video.webkitRequestFullScreen();
    }


})



// 6.封装一个格式化时间的的方法

function formartTime(time) {
    var m = Math.floor(time / 60);
    m = m >= 10 ? m : '0' + m;

    var s = Math.floor(time % 60);
    s = s >= 10 ? s : '0' + s;
    return `${m}:${s}`
}