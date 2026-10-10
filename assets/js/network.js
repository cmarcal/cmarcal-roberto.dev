(function () {
  var c = document.getElementById('bg');
  if (!c || !c.getContext) return;
  var ctx = c.getContext('2d');
  var still = matchMedia('(prefers-reduced-motion: reduce)');
  var saver = navigator.connection && navigator.connection.saveData;
  var w = 0, h = 0, link = 120, nodes = [], raf = 0, last = 0;

  function make() {
    return { x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.22, vy: (Math.random() - 0.5) * 0.22, r: 1 + Math.random() * 1.4, p: Math.random() < 0.15 };
  }

  function size() {
    var dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    w = innerWidth;
    h = Math.max(innerHeight, screen.height || 0);
    c.width = w * dpr; c.height = h * dpr;
    c.style.width = w + 'px'; c.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    link = w < 600 ? 105 : 130;
    var n = Math.round(Math.min(60, Math.max(22, (w * h) / 21000)));
    while (nodes.length < n) nodes.push(make());
    nodes.length = n;
  }

  function draw(move) {
    ctx.clearRect(0, 0, w, h);
    var i, j, a, b, dx, dy, d2, l2 = link * link;
    if (move) {
      for (i = 0; i < nodes.length; i++) {
        a = nodes[i]; a.x += a.vx; a.y += a.vy;
        if (a.x < -10) a.x = w + 10; else if (a.x > w + 10) a.x = -10;
        if (a.y < -10) a.y = h + 10; else if (a.y > h + 10) a.y = -10;
      }
    }
    ctx.lineWidth = 1;
    for (i = 0; i < nodes.length; i++) {
      for (j = i + 1; j < nodes.length; j++) {
        a = nodes[i]; b = nodes[j]; dx = a.x - b.x; dy = a.y - b.y; d2 = dx * dx + dy * dy;
        if (d2 < l2) {
          ctx.strokeStyle = 'rgba(141,178,217,' + ((1 - Math.sqrt(d2) / link) * 0.16).toFixed(3) + ')';
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
    }
    for (i = 0; i < nodes.length; i++) {
      a = nodes[i];
      ctx.fillStyle = a.p ? 'rgba(176,124,216,0.5)' : 'rgba(141,178,217,0.55)';
      ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, 6.2832); ctx.fill();
    }
  }

  function frame(t) {
    raf = requestAnimationFrame(frame);
    if (t - last < 33) return; // about 30 fps keeps phones cool
    last = t; draw(true);
  }
  function start() { if (!raf) raf = requestAnimationFrame(frame); }
  function stop() { if (raf) { cancelAnimationFrame(raf); raf = 0; } }
  function animated() { return !still.matches && !saver; }

  size(); draw(false);
  if (animated()) start();

  document.addEventListener('visibilitychange', function () {
    if (document.hidden) stop(); else if (animated()) start();
  });
  var t;
  addEventListener('resize', function () {
    clearTimeout(t);
    t = setTimeout(function () {
      // ignore the small height changes caused by mobile browser bars
      if (innerWidth !== w || innerHeight > h + 150) { size(); if (!raf) draw(false); }
    }, 200);
  });
  still.addEventListener && still.addEventListener('change', function () { if (animated()) start(); else stop(); });
})();