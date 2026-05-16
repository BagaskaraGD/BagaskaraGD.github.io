// ===========================================================
// Bagaskara — Personal Developer Hub
// Lightweight interactions for the home page prototype
// ===========================================================

// --- Mobile menu toggle ---
(function () {
  const btn = document.getElementById('mobileToggle');
  const menu = document.getElementById('mobileMenu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-hidden', String(!open));
  });

  // close on link click
  menu.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-hidden', 'true');
    })
  );
})();

// --- Scroll reveal ---
(function () {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );
  els.forEach((el) => io.observe(el));
})();

// --- Active nav link based on scroll position ---
(function () {
  const sections = ['home', 'about', 'portfolio', 'services', 'devnotes', 'contact']
    .map((id) => document.getElementById(id))
    .filter(Boolean);
  const links = document.querySelectorAll('.nav-links a');
  if (!sections.length || !links.length) return;

  const linkMap = {};
  links.forEach((l) => {
    const id = l.getAttribute('href').slice(1);
    linkMap[id] = l;
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          links.forEach((l) => l.classList.remove('is-active'));
          const link = linkMap[e.target.id];
          if (link) link.classList.add('is-active');
        }
      });
    },
    { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
  );
  sections.forEach((s) => io.observe(s));
})();

// --- Terminal typed cursor blink already handled via CSS;
//     animate the bar fills on first reveal ---
(function () {
  const bars = document.querySelectorAll('.bar-fill');
  bars.forEach((b) => {
    const target = b.style.width;
    b.style.width = '0%';
    requestAnimationFrame(() => {
      setTimeout(() => {
        b.style.transition = 'width 1.2s cubic-bezier(.2,.8,.2,1)';
        b.style.width = target;
      }, 250);
    });
  });
})();

// --- Generate drifting fireflies / magical motes ---
(function () {
  const host = document.getElementById('bgMotes');
  if (!host) return;
  const tints = ['', 'purple', 'emerald', 'amber', '', '', 'purple'];
  // Distribute across the viewport, weighted toward the mid-band where the world sits
  const count = 32;
  for (let i = 0; i < count; i++) {
    const m = document.createElement('span');
    const small = Math.random() < 0.45;
    m.className = 'mote' + (small ? ' sm' : '') + (tints[i % tints.length] ? ' ' + tints[i % tints.length] : '');
    m.style.left = Math.random() * 100 + '%';
    // bias vertical position to 30%–95% range so they sit in/near the landscape
    m.style.top = 30 + Math.random() * 65 + '%';
    m.style.animationDelay = (-Math.random() * 9).toFixed(2) + 's';
    m.style.animationDuration = (7 + Math.random() * 6).toFixed(2) + 's';
    host.appendChild(m);
  }
})();

// --- Subtle scroll parallax on landscape layers ---
(function () {
  const layers = [
    { el: document.querySelector('.bg-stars'),    factor: 0.04 },
    { el: document.querySelector('.bg-mtn-far'),  factor: 0.08 },
    { el: document.querySelector('.bg-mtn-mid'),  factor: 0.12 },
    { el: document.querySelector('.bg-hills'),    factor: 0.18 },
    { el: document.querySelector('.bg-forest'),   factor: 0.26 },
    { el: document.querySelector('.bg-fore'),     factor: 0.36 },
  ].filter((l) => l.el);

  let ticking = false;
  function update() {
    const y = window.scrollY || 0;
    for (const { el, factor } of layers) {
      el.style.transform = `translate3d(0, ${(-y * factor).toFixed(1)}px, 0)`;
    }
    ticking = false;
  }
  if (layers.length) {
    window.addEventListener(
      'scroll',
      () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(update);
        }
      },
      { passive: true }
    );
    update();
  }
})();

/* =========================================================
   SKY CYCLE ENGINE
   Each section alternates night ↔ day. As you scroll through
   a section, the moon (or sun) arcs across the sky. At the
   section boundary the bodies hand off and the palette
   transitions through dawn or dusk.
   ========================================================= */
(function () {
  // ----- Palettes (4 keyframes per full day-night cycle) -----
  const NIGHT = {
    '--sky-0': '#03050f', '--sky-1': '#060c22', '--sky-2': '#091434',
    '--sky-3': '#0a1b3e', '--sky-4': '#0c2046',
    '--mtn-far-top': '#2a3666', '--mtn-far-bot': '#161f44',
    '--mtn-mid-top': '#1b2750', '--mtn-mid-bot': '#0b1530',
    '--hills-top':   '#0e1a3a', '--hills-bot':   '#070d24',
    '--forest-bg-top':'#091022','--forest-bg-bot':'#04081a',
    '--forest-front':'#02050d', '--forest-back':'#06112a',
    '--fore-top':'#02050e',     '--fore-bot':'#01030a',
    '--rim-far': 'rgba(167,139,250,0.35)',
    '--rim-mid': 'rgba(34,211,238,0.55)',
    '--snow':    'rgba(228,239,255,0.85)',
    '--castle-window': 'rgba(251,191,36,0.92)',
    '--grass-stroke':  'rgba(34,211,238,0.25)',
    '--horizon-a': 'rgba(34,211,238,0.55)',
    '--horizon-b': 'rgba(167,139,250,0.40)',
    '--fog-tint':  'rgba(196,220,255,0.16)',
    '--star-op': 0.9,
    '--cloud-op': 0,
  };
  const DAWN = {
    '--sky-0': '#241638', '--sky-1': '#48244f', '--sky-2': '#9b3f5c',
    '--sky-3': '#d97d5a', '--sky-4': '#f5b478',
    '--mtn-far-top': '#54466a', '--mtn-far-bot': '#2e2548',
    '--mtn-mid-top': '#4a3556', '--mtn-mid-bot': '#241a3a',
    '--hills-top':   '#3a2845', '--hills-bot':   '#180a22',
    '--forest-bg-top':'#1f0f2a','--forest-bg-bot':'#0a040f',
    '--forest-front':'#0c0612', '--forest-back':'#1e1428',
    '--fore-top':'#0a0410',     '--fore-bot':'#02010a',
    '--rim-far': 'rgba(255,165,90,0.50)',
    '--rim-mid': 'rgba(251,191,36,0.60)',
    '--snow':    'rgba(255,210,170,0.92)',
    '--castle-window': 'rgba(251,191,36,0.85)',
    '--grass-stroke':  'rgba(251,191,36,0.35)',
    '--horizon-a': 'rgba(255,140,90,0.60)',
    '--horizon-b': 'rgba(251,191,36,0.50)',
    '--fog-tint':  'rgba(255,200,170,0.18)',
    '--star-op': 0.20,
    '--cloud-op': 0.6,
  };
  const DAY = {
    '--sky-0': '#5ea7dc', '--sky-1': '#86c4ea', '--sky-2': '#b8def0',
    '--sky-3': '#d4e9d8', '--sky-4': '#a8cd92',
    '--mtn-far-top': '#7a9fc0', '--mtn-far-bot': '#4f7090',
    '--mtn-mid-top': '#5c80a6', '--mtn-mid-bot': '#3a5780',
    '--hills-top':   '#46844e', '--hills-bot':   '#1f4e2e',
    '--forest-bg-top':'#1d4730','--forest-bg-bot':'#0e2c1c',
    '--forest-front':'#0d2818', '--forest-back':'#1c4830',
    '--fore-top':'#1a4424',     '--fore-bot':'#082010',
    '--rim-far': 'rgba(255,255,250,0.55)',
    '--rim-mid': 'rgba(255,255,255,0.85)',
    '--snow':    'rgba(255,255,255,0.98)',
    '--castle-window': 'rgba(120,140,160,0.65)',
    '--grass-stroke':  'rgba(180,255,150,0.55)',
    '--horizon-a': 'rgba(255,255,255,0.65)',
    '--horizon-b': 'rgba(200,232,210,0.55)',
    '--fog-tint':  'rgba(255,255,255,0.22)',
    '--star-op': 0,
    '--cloud-op': 1,
  };
  const DUSK = {
    '--sky-0': '#1a0a30', '--sky-1': '#3e1c4a', '--sky-2': '#92355a',
    '--sky-3': '#dc6650', '--sky-4': '#f08c54',
    '--mtn-far-top': '#503560', '--mtn-far-bot': '#28204a',
    '--mtn-mid-top': '#3e2952', '--mtn-mid-bot': '#1f1838',
    '--hills-top':   '#2c1c34', '--hills-bot':   '#10081c',
    '--forest-bg-top':'#1a0e22','--forest-bg-bot':'#07040c',
    '--forest-front':'#08040e', '--forest-back':'#1a0d20',
    '--fore-top':'#080410',     '--fore-bot':'#02010a',
    '--rim-far': 'rgba(251,140,90,0.55)',
    '--rim-mid': 'rgba(244,114,82,0.60)',
    '--snow':    'rgba(255,170,140,0.92)',
    '--castle-window': 'rgba(251,191,36,0.90)',
    '--grass-stroke':  'rgba(244,114,82,0.40)',
    '--horizon-a': 'rgba(244,114,82,0.60)',
    '--horizon-b': 'rgba(252,165,99,0.50)',
    '--fog-tint':  'rgba(255,180,150,0.18)',
    '--star-op': 0.20,
    '--cloud-op': 0.7,
  };

  // ----- Color interpolation helpers -----
  function hexToRgb(hex) {
    hex = hex.replace('#', '');
    if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
    return {
      r: parseInt(hex.slice(0, 2), 16),
      g: parseInt(hex.slice(2, 4), 16),
      b: parseInt(hex.slice(4, 6), 16),
    };
  }
  function rgbToHex(r, g, b) {
    return '#' + [r, g, b]
      .map(v => Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, '0'))
      .join('');
  }
  function lerp(a, b, t) { return a + (b - a) * t; }
  function lerpHex(a, b, t) {
    const A = hexToRgb(a), B = hexToRgb(b);
    return rgbToHex(lerp(A.r, B.r, t), lerp(A.g, B.g, t), lerp(A.b, B.b, t));
  }
  function parseRgba(s) {
    const m = String(s).match(/rgba?\(([^)]+)\)/);
    if (!m) return null;
    const parts = m[1].split(',').map(x => parseFloat(x.trim()));
    return {
      r: parts[0] || 0, g: parts[1] || 0, b: parts[2] || 0,
      a: parts.length >= 4 ? parts[3] : 1,
    };
  }
  function lerpRgba(a, b, t) {
    const A = parseRgba(a), B = parseRgba(b);
    return `rgba(${Math.round(lerp(A.r, B.r, t))}, ${Math.round(lerp(A.g, B.g, t))}, ${Math.round(lerp(A.b, B.b, t))}, ${lerp(A.a, B.a, t).toFixed(3)})`;
  }
  function lerpPalette(a, b, t) {
    const out = {};
    for (const k of Object.keys(a)) {
      const av = a[k], bv = b[k];
      if (typeof av === 'number') out[k] = lerp(av, bv, t);
      else if (String(av).startsWith('#')) out[k] = lerpHex(av, bv, t);
      else if (String(av).startsWith('rgb')) out[k] = lerpRgba(av, bv, t);
      else out[k] = bv;
    }
    return out;
  }
  function applyPalette(p) {
    const root = document.documentElement.style;
    for (const k of Object.keys(p)) {
      root.setProperty(k, String(p[k]));
    }
  }
  function smoothstep(t) { t = Math.max(0, Math.min(1, t)); return t * t * (3 - 2 * t); }

  // ----- Sections + state -----
  const SECTION_IDS = ['home', 'about', 'portfolio', 'services', 'devnotes', 'skilltree', 'contact'];
  const sections = SECTION_IDS.map(id => document.getElementById(id)).filter(Boolean);
  if (sections.length < 2) return;

  const root = document.documentElement;

  // Cached section rects (refreshed on resize / DOM growth)
  let rects = [];
  function measure() {
    rects = sections.map((s) => ({ el: s, top: s.offsetTop, height: s.offsetHeight }));
  }
  measure();
  window.addEventListener('resize', measure);
  // re-measure after late-loading content (fonts, images) finishes
  window.addEventListener('load', measure);
  setTimeout(measure, 600);
  setTimeout(measure, 1500);

  const EDGE = 0.20; // 20% of section height on each side is the transition zone
  const isNight = (i) => i % 2 === 0;
  const stateOf  = (i) => (isNight(i) ? NIGHT : DAY);

  function findCurrent() {
    const anchor = window.scrollY + window.innerHeight * 0.5;
    for (let i = 0; i < rects.length; i++) {
      const r = rects[i];
      const next = rects[i + 1];
      const top = r.top;
      const bot = next ? next.top : (r.top + r.height);
      if (anchor < top) return { i: Math.max(0, i - 1), p: 1 };
      if (anchor < bot) return { i, p: Math.max(0, Math.min(1, (anchor - top) / (bot - top))) };
    }
    return { i: rects.length - 1, p: 1 };
  }

  // Returns the body's arc progress [-EDGE, 1+EDGE] for its owning section,
  // or null if not currently visible.
  function bodyProgressFor(ownerType, curIdx, curProgress) {
    // ownerType: 'night' | 'day'
    // Find nearest section of matching type and return fractional progress.
    const wantNight = ownerType === 'night';
    const frac = curIdx + curProgress;
    for (let i = 0; i < sections.length; i++) {
      if (isNight(i) !== wantNight) continue;
      const start = i - EDGE;
      const end   = i + 1 + EDGE;
      if (frac >= start && frac <= end) return frac - i; // may be in [-EDGE, 1+EDGE]
    }
    return null;
  }

  function update() {
    const { i, p } = findCurrent();
    const target = stateOf(i);

    // Palette interpolation through twilight midpoint at edges
    let palette;
    if (p < EDGE && i > 0) {
      const prevState = stateOf(i - 1);
      const mid = isNight(i) ? DUSK : DAWN; // entering current FROM previous
      const t = smoothstep(p / EDGE);
      palette = t < 0.5 ? lerpPalette(prevState, mid, t * 2) : lerpPalette(mid, target, (t - 0.5) * 2);
    } else if (p > 1 - EDGE && i < sections.length - 1) {
      const nextState = stateOf(i + 1);
      const mid = isNight(i) ? DUSK : DAWN; // leaving current TOWARD next-of-opposite-type
      const t = smoothstep((p - (1 - EDGE)) / EDGE);
      palette = t < 0.5 ? lerpPalette(target, mid, t * 2) : lerpPalette(mid, nextState, (t - 0.5) * 2);
    } else {
      palette = target;
    }
    applyPalette(palette);

    // Body positions — track moon + sun independently
    const radiusX = window.innerWidth  * 0.34;
    const radiusY = window.innerHeight * 0.32;

    const setBody = (prefix, prog) => {
      if (prog == null) {
        root.style.setProperty(`--${prefix}-op`, '0');
        return;
      }
      const pp = Math.max(-EDGE, Math.min(1 + EDGE, prog));
      const angle = Math.PI * pp;          // 0 → π
      const x = -Math.cos(angle) * radiusX; // left → right
      const y = -Math.sin(angle) * radiusY; // 0 → -peak → 0
      // Opacity: full across the arc with soft fade at the two horizons.
      let op;
      if (pp < 0)        op = 1 - smoothstep(-pp / EDGE);            // rising fade-in
      else if (pp > 1)   op = 1 - smoothstep((pp - 1) / EDGE);        // setting fade-out
      else               op = Math.min(1, Math.sin(angle) * 1.35 + 0.05); // belly of arc
      root.style.setProperty(`--${prefix}-x`, x.toFixed(1) + 'px');
      root.style.setProperty(`--${prefix}-y`, y.toFixed(1) + 'px');
      root.style.setProperty(`--${prefix}-op`, op.toFixed(3));
    };

    setBody('moon', bodyProgressFor('night', i, p));
    setBody('sun',  bodyProgressFor('day',   i, p));
  }

  let ticking = false;
  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(() => { update(); ticking = false; });
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();
})();
