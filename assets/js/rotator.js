(function () {
  var el = document.querySelector('.rot-word');
  if (!el || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var words;
  try { words = JSON.parse(el.getAttribute('data-words')); } catch (e) { return; }
  if (!words || words.length < 2) return;
  var i = 0, timer = 0;
  function next() {
    el.classList.add('out');
    setTimeout(function () {
      i = (i + 1) % words.length;
      el.textContent = words[i];
      el.classList.remove('out');
    }, 260);
  }
  function start() { if (!timer) timer = setInterval(next, 2800); }
  function stop() { clearInterval(timer); timer = 0; }
  document.addEventListener('visibilitychange', function () { document.hidden ? stop() : start(); });
  start();
})();