(function () {
  var root = document.querySelector('.stack-rows');
  if (!root || !('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var rows = Array.prototype.slice.call(root.querySelectorAll('.stack-row'));

  // entrance: each row plays once when it scrolls into view
  var enter = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var row = e.target;
      row.classList.add('in');
      enter.unobserve(row);
      var n = row.querySelectorAll('.chips li').length;
      setTimeout(function () { row.classList.add('done'); }, n * 45 + 120 + 600);
    });
  }, { threshold: 0.2 });

  // spotlight: the row crossing the middle of the screen, or under the pointer
  function focus(row) {
    rows.forEach(function (r) { r.classList.toggle('focus', r === row); });
    root.classList.add('has-focus');
  }
  var mid = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) focus(e.target); });
  }, { rootMargin: '-45% 0px -45% 0px' });

  root.classList.add('reveal');
  rows.forEach(function (row) {
    enter.observe(row);
    mid.observe(row);
    row.addEventListener('pointerenter', function (e) { if (e.pointerType === 'mouse') focus(row); });
    row.addEventListener('click', function () { focus(row); });
  });
})();
