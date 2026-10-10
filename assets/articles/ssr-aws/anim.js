const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('svg').forEach((s) => reduce && s.pauseAnimations && s.pauseAnimations());

document.querySelectorAll('[data-toggle]').forEach((seg) => {
  const group = seg.dataset.toggle;
  seg.querySelectorAll('button').forEach((b) => {
    b.addEventListener('click', () => {
      seg.querySelectorAll('button').forEach((x) => x.setAttribute('aria-pressed', x === b));
      document.querySelectorAll(`[data-for="${group}"]`).forEach((el) => {
        const on = el.dataset.show.split(' ').includes(b.dataset.value);
        el.classList.toggle('on', on);
        if (el.classList.contains('panel')) el.hidden = !on;
      });
    });
  });
  seg.querySelector('button').click();
});

const io = new IntersectionObserver((es) => es.forEach((e) => {
  if (!e.isIntersecting) return;
  e.target.classList.add('in');
  e.target.querySelectorAll('.mark').forEach((m) => (m.style.left = m.dataset.pos));
  e.target.querySelectorAll('.race').forEach((r) => r.classList.add('go'));
}), { threshold: 0.3 });
document.querySelectorAll('.fadein').forEach((el) => io.observe(el));

document.querySelectorAll('.replay').forEach((b) => b.addEventListener('click', () => {
  const r = document.getElementById(b.dataset.target);
  r.classList.remove('go');
  void r.offsetWidth;
  r.classList.add('go');
}));
