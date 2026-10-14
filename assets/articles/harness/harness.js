(() => {
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

// heading permalinks
document.querySelectorAll('.ax h2[id], .ax h3[id]').forEach((h) => {
  const a = document.createElement('a');
  a.className = 'hash';
  a.href = `#${h.id}`;
  a.textContent = '#';
  const pt = document.documentElement.lang.toLowerCase().startsWith('pt');
  a.setAttribute('aria-label', `${pt ? 'Link para' : 'Link to'} ${h.textContent}`);
  h.appendChild(a);
});

// verify simulator: one red sensor, fixed at the cause, rerun
document.querySelectorAll('[data-verify]').forEach((root) => {
  const items = [...root.querySelectorAll('.vlist li')];
  const sum = root.querySelector('.vsum');
  const run = root.querySelector('.run');
  const fix = root.querySelector('.fix');
  const cheat = root.querySelector('.cheat');
  const T = root.dataset;
  let fixed = false;
  let busy = false;
  const wait = (ms) => new Promise((r) => setTimeout(r, reduce ? 0 : ms));

  const reset = () => {
    items.forEach((li) => (li.className = 'idle'));
    sum.className = 'vsum';
    sum.textContent = '';
  };

  const go = async () => {
    if (busy) return;
    busy = true;
    run.disabled = fix.disabled = cheat.disabled = true;
    reset();
    let red = null;
    for (const li of items) {
      li.className = 'run';
      await wait(170);
      const bad = li.dataset.fails && !fixed;
      li.className = bad ? 'no' : 'ok';
      if (bad && !red) red = li.dataset.name;
    }
    if (red) {
      sum.className = 'vsum bad';
      sum.textContent = T.failed.replace('{sensor}', red);
      fix.disabled = cheat.disabled = false;
    } else {
      sum.className = 'vsum good';
      sum.textContent = T.passed;
    }
    run.disabled = false;
    busy = false;
  };

  const again = root.querySelector('.reset');
  again.addEventListener('click', () => {
    if (busy) return;
    fixed = false;
    fix.disabled = cheat.disabled = true;
    reset();
  });

  run.addEventListener('click', go);
  fix.addEventListener('click', () => {
    fixed = true;
    go();
  });
  cheat.addEventListener('click', () => {
    sum.className = 'vsum bad';
    sum.textContent = T.cheat;
  });
  reset();
});
})();
