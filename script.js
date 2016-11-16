var start = document.getElementById('start');
var reset = document.getElementById('reset');
var pause = document.getElementById('pause');
var hour = 0;
var minute = 0;
var second = 0;
var mSecond = 0;

function resetTimer() {
    start.style.display = 'inline';
    pause.style.display = 'none';
    clearInterval(time);
    hour = 0;
    minute = 0;
    second = 0;
    mSecond = 0;
    document.getElementById('timer').innerText = "00:00:00";
    document.getElementById('timerMsecond').innerText = "00";
}

function pauseTimer() {
    start.style.display = 'inline';
    pause.style.display = 'none';
    clearInterval(time);
}

function runTimer() {
    pause.style.display = 'inline';
    start.style.display = 'none';
    time = setInterval(function timer() {
        mSecond++;
        document.getElementById('timer').innerText = '0' + hour + ':' + '0' + minute + ':' + '0' + second;
        document.getElementById('timerMsecond').innerText = '0' + mSecond;

        if (mSecond > 9) {
            document.getElementById('timer').innerText = '0' + hour + ':' + '0' + minute + ':' + '0' + second;
            document.getElementById('timerMsecond').innerText = mSecond;
        }
        if (second > 9) {
            document.getElementById('timer').innerText = '0' + hour + ':' + '0' + minute + ':' + second;
            document.getElementById('timerMsecond').innerText = mSecond;
        }

        if (minute > 9) {
            document.getElementById('timer').innerText = '0' + hour + ':' + minute + ':' + '0' + second;
            document.getElementById('timerMsecond').innerText = mSecond;
        }

        if (hour > 9) {
            document.getElementById('timer').innerText = hour + ':' + '0' + minute + ':' + '0' + second;
            document.getElementById('timerMsecond').innerText = mSecond;
        }

        if (mSecond > 99) {
            mSecond = 0;
            ++second;
        }

        if (second > 59) {
            second = 0;
            ++minute;
        }
        if (minute > 59) {
            minute = 0;
            ++hour;
        }
    }, 10);
}

start.addEventListener('click', runTimer);
reset.addEventListener('click', resetTimer);
pause.addEventListener('click', pauseTimer);