var end = new Date('12/16/2016 12:00 AM');

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function showRemaining() {
    var now = new Date();
    var distance = end - now;

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById('timer').innerHTML = '<p><span class="gosee">GO SEE</span></p>';
        return;
    }

    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);

    document.getElementById('days').innerHTML = days + ' Days,';
    document.getElementById('hours').innerHTML = hours + ' Hours,';
    document.getElementById('minutes').innerHTML = minutes + ' Minutes,';
    document.getElementById('seconds').innerHTML = seconds + ' Seconds'
}

document.addEventListener("DOMContentLoaded", function (event) {
    timer = setInterval(showRemaining, 1000);
});

//timer = setInterval(showRemaining, 1000);