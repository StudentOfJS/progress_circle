// percent = number, speed = number, strokePathEL = SVGElement, textEl = SVGElement
// textEl and interval are optional
// lower interval value === higher speed

function animatePath(percent, interval, strokePathEl, textEl) {
  if (!strokePathEl || !percent) {
    return;
  }
  // lower is faster
  var interval = interval ? interval : 10;
  var count = 0;
  // length of svg path
  var len = strokePathEl.getTotalLength();
  // < more accuracy, > faster
  var increment = 1;
  var inc = len / 360;
  // interval is saved to variable
  var timer = setInterval(function() {
    // adds stroke-dasharray and increments, so optional in html
    strokePathEl.setAttribute('stroke-dasharray', count * inc + ', 20000');
    if (textEl) {
      // update text with percent
      textEl.innerHTML = parseInt((count / 360) * 100) + '%';
    }
    if (count >= percent * 3.6) {
      // clear interval on completion
      clearInterval(timer);
    }
    // increment count
    count += increment;
  }, interval);
}

function onLoadAnimatePath() {
  var meters = document.querySelectorAll('.meter');
  if (meters) {
    var i = 0;
    var len = meters.length;
    for (i; i < len; i++) {
      var percent = parseInt(meters[i].dataset.percent);
      var interval = parseInt(meters[i].dataset.interval);
      var fill = meters[i].querySelector('.fill');
      var count = meters[i].querySelector('.count');
      animatePath(percent, interval, fill, count);
    }
  }
}
// if window object available
window.addEventListener('load', function() {
  onLoadAnimatePath();
});
