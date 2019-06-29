function animatePath(percent, strokePathEl, textEl) {
  var interval = 10;
  var angle = 0;
  var len = strokePathEl.getTotalLength();
  var angle_increment = 1;
  var inc = len / 360;

  var timer = window.setInterval(function() {
    strokePathEl.setAttribute('stroke-dasharray', angle * inc + ', 20000');

    textEl.innerHTML = parseInt((angle / 360) * 100) + '%';
    if (angle >= percent * 3.6) {
      window.clearInterval(timer);
    }
    angle += angle_increment;
  }, interval);
}

function onLoadAnimatePath() {
  var meters = document.querySelectorAll('.meter');
  if (meters) {
    var i = 0;
    var len = meters.length;
    for (i; i < len; i++) {
      var percent = parseInt(meters[i].dataset.percent);
      var fill = meters[i].querySelector('.fill');
      var count = meters[i].querySelector('.count');
      animatePath(percent, fill, count);
    }
  }
}
