// percent = number, speed = number, strokePathEL = SVGElement, textEl = SVGElement
// textEl and interval are optional
// lower interval value === higher speed

function onLoadAnimatePath() {
  var meters = document.querySelectorAll('.meter');
  if (meters) {
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
      var interval = setInterval(function() {
        // adds stroke-dasharray and increments, so optional in html
        strokePathEl.setAttribute('stroke-dasharray', count * inc + ', 20000');
        if (textEl) {
          // update text with percent
          textEl.innerHTML = parseInt((count / 360) * 100) + '%';
        }
        if (count >= percent * 3.6) {
          // clear interval on completion
          clearInterval(interval);
        }
        // increment count
        count += increment;
      }, interval);
    }
    var i = 0;
    for (i; i < meters.length; i++) {
      var percent = parseInt(meters[i].dataset.percent);
      var interval = parseInt(meters[i].dataset.interval);
      var fill = meters[i].querySelector('.fill');
      var count = meters[i].querySelector('.count');
      animatePath(percent, interval, fill, count, i);
    }
  }
}
// if window object available
window.addEventListener(
  'DOMContentLoaded',
  function() {
    onLoadAnimatePath();
  },
  true
);
