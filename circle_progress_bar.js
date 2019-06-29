function onLoad() {
  var meters = document.querySelectorAll('.meter');
  function animatePath(percent, progressEl, timerEl) {
    var interval = 30;
    var angle = 0;
    var angle_increment = 6;
    var timer = window.setInterval(function() {
      progressEl.setAttribute('stroke-dasharray', angle + ', 20000');
      timerEl.innerHTML = parseInt((angle / 360) * 100) + '%';
      if (angle >= percent * 3.6) {
        window.clearInterval(timer);
      }
      angle += angle_increment;
    }, interval);
  }
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
