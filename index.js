if(window.localStorage.getItem('current'== null)) {
  window.localStorage.setItem('current', Date.now() / 1000);
}

function cried() {
  document.getElementById("time").innerHTML = "00:00:00:00";
  window.localStorage.setItem('current', Date.now() / 1000);
}

setInterval( function() {
    var current = Math.floor(window.localStorage.getItem('current'));
    var now = Math.floor(Date.now() / 1000);
    var diff = now - current;
    var d = pad(Math.floor(diff / 86400));
    var h = pad(Math.floor(diff / 3600));
    var m = pad(Math.floor(diff / 60));
    var s = pad(Math.floor(diff % 60));
    document.getElementById("time").innerHTML = d + ":" + h + ":" + m + ":" + s;
  }, 1000);


function pad(time) {
    if (time < 10) {
      time = "0" + time;
    }
    return time;
}
