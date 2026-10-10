document.querySelectorAll('[data-stepper]').forEach((root) => {
  const btns = [...root.querySelectorAll('.steps button')];
  const title = root.querySelector('.stepbody h3');
  const body = root.querySelector('.stepbody div');
  const back = root.querySelector('.back');
  const next = root.querySelector('.next-step');
  const play = root.querySelector('.play');
  let i = 0;
  let timer = null;

  const show = (n) => {
    i = n;
    const b = btns[n];
    root.classList.add('on');
    btns.forEach((x) => x.removeAttribute('aria-current'));
    b.setAttribute('aria-current', 'step');
    const nodes = b.dataset.nodes.split(' ');
    const edges = (b.dataset.edges || '').split(' ');
    root.querySelectorAll('[data-n]').forEach((el) => el.classList.toggle('hot', nodes.includes(el.dataset.n)));
    root.querySelectorAll('[data-e]').forEach((el) => el.classList.toggle('hot', edges.includes(el.dataset.e)));
    title.textContent = `${n + 1}. ${b.dataset.title}`;
    body.innerHTML = b.querySelector('template').innerHTML;
    back.disabled = n === 0;
    next.disabled = n === btns.length - 1;
  };

  const stop = () => {
    clearInterval(timer);
    timer = null;
    play.textContent = '▶ Play';
  };

  btns.forEach((b, n) => b.addEventListener('click', () => { stop(); show(n); }));
  back.addEventListener('click', () => { stop(); show(i - 1); });
  next.addEventListener('click', () => { stop(); show(i + 1); });
  play.addEventListener('click', () => {
    if (timer) return stop();
    if (i === btns.length - 1) show(0);
    play.textContent = '❚❚ Pause';
    timer = setInterval(() => (i < btns.length - 1 ? show(i + 1) : stop()), 4500);
  });
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) play.hidden = true;
  show(0);
});
