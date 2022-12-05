var jp_play = document.getElementsByClassName('jp-play')[0]//播放按钮
var jp_pause = document.getElementsByClassName('jp-pause')[0]//暂停按钮
var jp_seek_bar = document.getElementsByClassName('jp-seek-bar')[0]//总进度
var jp_play_bar = document.getElementsByClassName('jp-play-bar')[0]//进度条
var jp_duration = document.getElementsByClassName('jp-duration')[0]//总时长
var jp_current_time = document.getElementsByClassName('jp-current-time')[0]//进度时长
var jp_volume_bar = document.getElementsByClassName('jp-volume-bar')[0]//总音量
var jp_volume_bar_value = document.getElementsByClassName('jp-volume-bar-value')[0]//调节音量
var jp_full_screen = document.getElementsByClassName('jp-full-screen')[0]//全屏

video.addEventListener('canplay', function () {
  jp_play.onclick = function () {
    video.play();
    this.style.display = "none";
    jp_pause.style.display = "block";
  }
  jp_pause.onclick = function () {
    video.pause();
    this.style.display = "none";
    jp_play.style.display = "block";
  }
  jp_duration.innerHTML = zhuan(video.duration);

  video.ontimeupdate = function () {
    //当前播放时间
    jp_current_time.innerHTML = zhuan(video.currentTime);

    var tiao = video.currentTime / video.duration;
    jp_play_bar.style.width = tiao * 100 + '%'
    //点击加载进度
    jp_seek_bar.onclick = function (e) {
      e = e || window.event;
      var dian = e.offsetX / jp_seek_bar.offsetWidth;
      jp_play_bar.style.width = dian * 100 + "%";
      video.currentTime = dian * video.duration;
    }


  }
  jp_full_screen.onclick = function () {
    video.webkitRequestFullScreen();
  }
  //音量调节
  jp_volume_bar.onclick = function (e) {
    e = e || window.event;
    var scale = e.offsetX / this.offsetWidth;
    jp_volume_bar_value.style.width = scale * 100 + '%'
    video.volume = scale;
  }
})


function zhuan(time) {
  var m = Math.floor(time / 60);//分
  var s = Math.floor(time % 60);//秒
  m = m > 9 ? m : '0' + m
  s = s > 9 ? s : '0' + s
  return `${m}:${s}`
}