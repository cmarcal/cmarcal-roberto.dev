// Side table of contents for every article: built from the h2/h3 headings that have an id,
// sticky on wide screens, highlights the section being read.
(() => {
  const root = document.querySelector('.ax');
  if (!root) return;
  const heads = [...root.querySelectorAll('h2[id], h3[id]')];
  if (!heads.length) return;
  const label = document.querySelector('[data-toc-label]')?.dataset.tocLabel || 'On this page';

  const nav = document.createElement('nav');
  nav.className = 'sidetoc';
  nav.setAttribute('aria-label', label);
  const inner = document.createElement('div');
  inner.className = 'sidetoc-in';
  const title = document.createElement('p');
  title.className = 'sidetoc-title';
  title.textContent = label;
  const list = document.createElement('ul');
  const links = heads.map((h) => {
    const c = h.cloneNode(true);
    c.querySelectorAll('.hash').forEach((x) => x.remove());
    const li = document.createElement('li');
    li.className = h.tagName === 'H2' ? 'l2' : 'l3';
    const a = document.createElement('a');
    a.href = `#${h.id}`;
    a.textContent = c.textContent.trim();
    li.appendChild(a);
    list.appendChild(li);
    return a;
  });
  inner.append(title, list);
  nav.appendChild(inner);
  root.appendChild(nav);
  root.classList.add('has-sidetoc');

  let active = -1;
  let ticking = false;
  const update = () => {
    ticking = false;
    const line = window.innerHeight * 0.3;
    let idx = 0;
    heads.forEach((h, i) => {
      if (h.getBoundingClientRect().top <= line) idx = i;
    });
    if (idx === active) return;
    if (active >= 0) links[active].removeAttribute('aria-current');
    links[idx].setAttribute('aria-current', 'location');
    active = idx;
  };
  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll);
  update();
})();
