(() => {
// Apdex calculator: move T and watch the same samples change zone
document.querySelectorAll('[data-apdex]').forEach((root) => {
  const samples = JSON.parse(root.dataset.samples); // null = failed request
  const range = root.querySelector('input[type=range]');
  const tval = root.querySelector('.tval');
  const grid = root.querySelector('.agrid');
  const score = root.querySelector('.ascore');
  const counts = root.querySelector('.acounts');
  const formula = root.querySelector('.aformula');
  const D = root.dataset;

  const cells = samples.map((ms) => {
    const c = document.createElement('span');
    c.textContent = ms === null ? D.err : `${ms}ms`;
    grid.appendChild(c);
    return c;
  });

  const draw = () => {
    const T = Number(range.value);
    tval.textContent = `${T}ms`;
    let s = 0;
    let t = 0;
    let f = 0;
    samples.forEach((ms, i) => {
      let zone = 'zf';
      if (ms !== null && ms <= T) zone = 'zs';
      else if (ms !== null && ms <= 4 * T) zone = 'zt';
      cells[i].className = zone;
      if (zone === 'zs') s++;
      else if (zone === 'zt') t++;
      else f++;
    });
    const n = samples.length;
    const value = ((s + t / 2) / n).toFixed(2);
    score.textContent = `Apdex ${value}`;
    counts.textContent = D.counts.replace('{s}', s).replace('{t}', t).replace('{f}', f).replace('{lim}', `${4 * T}ms`);
    formula.textContent = `(${s} + ${t} / 2) / ${n} = ${value}`;
  };

  range.addEventListener('input', draw);
  draw();
});

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

// cause/fix rows: animate <details> open and close instead of snapping
document.querySelectorAll('.fixes details').forEach((d) => {
  const body = d.querySelector('.fbody');
  let anim = null;
  let closing = false;

  const run = (from, to, ms, done) => {
    if (anim) anim.cancel();
    body.style.overflow = 'hidden';
    const a = body.animate([from, to], { duration: ms, easing: 'cubic-bezier(.2,.7,.2,1)' });
    anim = a;
    a.onfinish = a.oncancel = () => {
      if (anim !== a) return;
      body.style.overflow = '';
      anim = null;
      if (done) done();
    };
  };

  d.querySelector('summary').addEventListener('click', (e) => {
    if (reduce || !body.animate) return;
    e.preventDefault();
    const opening = closing || !d.open;
    if (opening) {
      closing = false;
      d.classList.remove('closing');
      d.open = true;
      const cs = getComputedStyle(body);
      const pad = parseFloat(cs.paddingBottom);
      const h = body.scrollHeight - pad;
      run(
        { height: '0px', paddingBottom: '0px', opacity: 0 },
        { height: `${h}px`, paddingBottom: `${pad}px`, opacity: 1 },
        280,
      );
    } else {
      closing = true;
      d.classList.add('closing');
      const cs = getComputedStyle(body);
      const pad = parseFloat(cs.paddingBottom);
      const h = body.offsetHeight - pad;
      run(
        { height: `${h}px`, paddingBottom: `${pad}px`, opacity: 1 },
        { height: '0px', paddingBottom: '0px', opacity: 0 },
        220,
        () => {
          if (closing) d.open = false;
          closing = false;
          d.classList.remove('closing');
        },
      );
    }
  });
});

// read both signals: pick the state of each, get the likely story
document.querySelectorAll('[data-matrix]').forEach((root) => {
  const state = { cwv: null, apdex: null };
  const cases = [...root.querySelectorAll('[data-case]')];
  const idle = root.querySelector('[data-idle]');

  const show = () => {
    const key = `${state.cwv}-${state.apdex}`;
    idle.hidden = state.cwv !== null && state.apdex !== null;
    cases.forEach((p) => (p.hidden = p.dataset.case !== key));
  };

  root.querySelectorAll('.seg').forEach((seg) => {
    seg.querySelectorAll('button').forEach((b) => {
      b.addEventListener('click', () => {
        seg.querySelectorAll('button').forEach((x) => x.setAttribute('aria-pressed', x === b));
        state[seg.dataset.axis] = b.dataset.value;
        show();
      });
    });
  });
  show();
});
})();
