export function _timer(callback) {
  let time = 0;
  let mode = 0;
  let status = 0;
  let timer_id;

  this.start = function (interval, input) {
    interval = typeof interval !== "undefined" ? interval : 1000;
    time = convertDurationToSeconds(input);

    if (status == 0) {
      status = 1;
      timer_id = setInterval(function () {
        switch (mode) {
          case 0:
            if (time) {
              time--;
              generateTime();
              if (typeof callback === "function") callback(time);
            }
            break;

          case 1:
            if (time < 86400) {
              time++;
              generateTime();
              if (typeof callback === "function") callback(time);
            }
            break;
        }
      }, interval);
    }
  };
  this.stop = function () {
    if (status == 1) {
      status = 0;
      clearInterval(timer_id);
    }
  };

  this.reset = function (sec) {
    sec = typeof sec !== "undefined" ? sec : 0;
    time = sec;
    generateTime(time);
  };

  function convertDurationToSeconds(duration) {
    const [hours, minutes, seconds] = duration.split(":");
    return Number(hours) * 60 * 60 + Number(minutes) * 60 + Number(seconds);
  }

  function generateTime() {
    let second = time % 60;
    let minute = Math.floor(time / 60) % 60;
    let hour = Math.floor(time / 3600) % 60;

    second = second < 10 ? "0" + second : second;
    minute = minute < 10 ? "0" + minute : minute;
    hour = hour < 10 ? "0" + hour : hour;

    let updateTime = document.querySelector('input[type="time"]');

    if (hour && minute && second === "00") {
      updateTime.value = hour + ":" + minute + ":" + second;
      let sound = new Howl({
        src: ["src/sound/timer_ringtone.wav"],
      });
      sound.play();
    } else {
      updateTime.value = hour + ":" + minute + ":" + second;
    }
  }
}
