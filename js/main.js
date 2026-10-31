(function () {
  'use strict';
  var D = window.PORTFOLIO;
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function logo(file, folder, alt) {
    var d = el('span', 'logo'); var i = el('img');
    i.src = 'assets/' + folder + '/' + file + '.svg'; i.alt = alt || ''; i.loading = 'lazy'; i.decoding = 'async';
    d.appendChild(i); return d;
  }
  function stagger(node, i) { node.style.setProperty('--d', (i % 6) * 70 + 'ms'); }
  function link(cls, label, href) {
    var a = el('a', 'btn ' + cls, label + ' '); a.href = href; a.target = '_blank'; a.rel = 'noopener';
    var s = el('span', null, '↗'); s.setAttribute('aria-hidden', 'true'); a.appendChild(s); return a;
  }

  /* hero name: scale to fit the screen width */
  var name = document.querySelector('.hero__name');
  function fitName() {
    var spans = name.querySelectorAll('span'); if (!spans.length) return;
    name.style.fontSize = '100px';
    var w = spans[spans.length - 1].getBoundingClientRect().right - spans[0].getBoundingClientRect().left;
    var size = Math.min(100 * name.clientWidth / w, 300);
    if (size > 20) name.style.fontSize = (Math.floor(size * 10) / 10) + 'px';
  }
  fitName(); addEventListener('resize', fitName); addEventListener('load', fitName);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitName);

  /* logo strip */
  var track = document.getElementById('strip');
  [0, 1].forEach(function (copy) {
    D.strip.forEach(function (f) {
      var it = el('span', 'marquee__item'); it.appendChild(logo(f, 'tech', copy ? '' : f)); it.appendChild(el('span', null, f.replace('-', ' ')));
      if (copy) it.setAttribute('aria-hidden', 'true'); track.appendChild(it);
    });
  });

  /* skills */
  var skills = document.getElementById('skills-grid'), n = 0;
  D.skills.forEach(function (g) {
    var box = el('div', 'skill rv' + (g.now ? ' skill--now' : '')); box.appendChild(el('h3', null, g.group));
    var ul = el('ul', 'tiles');
    g.items.forEach(function (it) {
      var li = el('li', 'tile'); li.style.setProperty('--i', n++);
      if (it[1]) li.appendChild(logo(it[1], 'tech', ''));
      else li.appendChild(el('span', 'logo logo--mono', it[0].replace(' / ', '/')));
      li.appendChild(el('span', null, it[0])); ul.appendChild(li);
    });
    box.appendChild(ul); skills.appendChild(box);
  });

  /* projects */
  var grid = document.getElementById('grid'), cards = [], live = 0;
  D.projects.forEach(function (p, i) {
    if (p.live) live++;
    var c = el('article', 'card rv' + (p.wide ? ' card--wide' : '')); c.dataset.cat = p.cat; stagger(c, i);
    var top = el('div', 'card__top'); top.appendChild(el('span', 'card__tag', p.tag));
    top.appendChild(el('span', 'badge' + (p.live ? ' badge--live' : ''), p.live ? 'Live' : 'Code only')); c.appendChild(top);
    c.appendChild(el('h3', 'card__title', p.title)); c.appendChild(el('p', 'card__text', p.does));
    if (p.stats && p.stats.length) {
      var st = el('dl', 'card__stats');
      p.stats.forEach(function (s) { var d = el('div'); d.appendChild(el('dd', null, s[0])); d.appendChild(el('dt', null, s[1])); st.appendChild(d); });
      c.appendChild(st);
    }
    if (p.facts && p.facts.length) {
      var f = el('dl', 'card__facts');
      p.facts.forEach(function (r) { var d = el('div'); d.appendChild(el('dt', null, r[0])); d.appendChild(el('dd', null, r[1])); f.appendChild(d); });
      c.appendChild(f);
    }
    var chips = el('ul', 'chips chips--card'); p.stack.forEach(function (x) { chips.appendChild(el('li', null, x)); }); c.appendChild(chips);
    var links = el('div', 'card__links');
    if (p.live) links.appendChild(link('btn--solid', 'Live demo', p.live));
    links.appendChild(link('btn--line', 'Code', p.code)); c.appendChild(links);
    grid.appendChild(c); cards.push(c);
  });
  document.getElementById('proj-sub').textContent = live === D.projects.length
    ? 'Every project here is a live app. Open one to try it, or read its code on GitHub.'
    : live + ' of these run live. Open a demo to try it, or read the code on GitHub.';

  var filters = document.getElementById('filters');
  [{ id: 'all', label: 'All' }].concat(D.categories).forEach(function (cat) {
    var count = cat.id === 'all' ? cards.length : cards.filter(function (c) { return c.dataset.cat === cat.id; }).length;
    var b = el('button', null, cat.label); b.type = 'button'; b.dataset.filter = cat.id; b.setAttribute('aria-pressed', cat.id === 'all' ? 'true' : 'false');
    b.appendChild(el('span', null, String(count))); filters.appendChild(b);
  });
  filters.addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    var f = b.dataset.filter, shown = 0;
    filters.querySelectorAll('button').forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
    cards.forEach(function (c) {
      var ok = f === 'all' || c.dataset.cat === f; c.hidden = !ok;
      c.classList.remove('pop'); if (ok) { c.classList.add('in'); c.style.setProperty('--d', (shown++ * 60) + 'ms'); void c.offsetWidth; c.classList.add('pop'); }
    });
  });

  /* AI tools */
  var ai = document.getElementById('ai'), k = 0;
  D.ai.forEach(function (g) {
    var box = el('div', 'ai__group'); box.appendChild(el('h3', null, g.group));
    var row = el('div', 'ai__row');
    g.items.forEach(function (it) {
      var item = el('div', 'ai__item rv'); stagger(item, k++); item.appendChild(logo(it[1], 'ai', ''));
      var t = el('div'); t.appendChild(el('b', null, it[0])); t.appendChild(el('small', null, it[2])); item.appendChild(t); row.appendChild(item);
    });
    box.appendChild(row); ai.appendChild(box);
  });

  /* certificates + lightbox */
  var certs = document.getElementById('certs'), dlg = document.getElementById('lb'), cur = 0;
  var lbImg = dlg.querySelector('img'), lbT = dlg.querySelector('.lb__t'), lbS = dlg.querySelector('.lb__s'), lbFull = dlg.querySelector('.lb__full');
  function show(i) {
    cur = (i + D.certs.length) % D.certs.length; var c = D.certs[cur];
    lbImg.src = 'assets/certs/' + c.img + '.jpg'; lbImg.alt = c.title + ' certificate from ' + c.issuer;
    lbT.textContent = c.title; lbS.textContent = c.issuer + ' · ' + c.note; lbFull.href = 'assets/certs/' + c.img + '.jpg';
  }
  D.certs.forEach(function (c, i) {
    var b = el('button', 'cert rv'); b.type = 'button'; stagger(b, i); b.setAttribute('aria-label', 'Open ' + c.title + ' certificate');
    var w = el('span', 'cert__img'); var im = el('img'); im.src = 'assets/certs/' + c.img + '-thumb.jpg'; im.alt = ''; im.loading = 'lazy'; w.appendChild(im);
    b.appendChild(w); b.appendChild(el('b', null, c.title)); b.appendChild(el('span', null, c.issuer + ' · ' + c.note)); b.appendChild(el('em', null, 'Click to view'));
    b.addEventListener('click', function () { show(i); dlg.showModal(); document.body.style.overflow = 'hidden'; });
    certs.appendChild(b);
  });
  dlg.querySelector('.lb__x').addEventListener('click', function () { dlg.close(); });
  dlg.querySelector('.lb__prev').addEventListener('click', function () { show(cur - 1); });
  dlg.querySelector('.lb__next').addEventListener('click', function () { show(cur + 1); });
  dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
  dlg.addEventListener('close', function () { document.body.style.overflow = ''; });
  dlg.addEventListener('keydown', function (e) { if (e.key === 'ArrowLeft') show(cur - 1); if (e.key === 'ArrowRight') show(cur + 1); });

  /* journey items reveal */
  document.querySelectorAll('.path li').forEach(function (li, i) { li.classList.add('rv'); stagger(li, i); });

  /* reveal on scroll */
  var rv = document.querySelectorAll('.rv');
  if (!('IntersectionObserver' in window) || reduce) rv.forEach(function (x) { x.classList.add('in'); });
  else {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    rv.forEach(function (x) { io.observe(x); });
  }

  /* active nav link */
  var links = document.querySelectorAll('.nav__links a');
  if ('IntersectionObserver' in window) {
    var so = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) links.forEach(function (a) { a.classList.toggle('on', a.getAttribute('href') === '#' + e.target.id); }); });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('main section[id]').forEach(function (s) { so.observe(s); });
  }

  /* theme toggle */
  var root = document.documentElement, tb = document.getElementById('theme');
  function cur_theme() { return root.getAttribute('data-theme') || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'); }
  function sync() { tb.setAttribute('aria-label', 'Switch to ' + (cur_theme() === 'dark' ? 'light' : 'dark') + ' theme'); }
  tb.addEventListener('click', function () {
    var next = cur_theme() === 'dark' ? 'light' : 'dark'; root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {} sync();
  });
  sync();

  /* copy email */
  var copy = document.getElementById('copy'), mail = document.getElementById('mail');
  copy.addEventListener('click', function () {
    var done = function () { copy.textContent = 'Copied'; setTimeout(function () { copy.textContent = 'Copy email'; }, 1800); };
    var fb = function () { var r = document.createRange(); r.selectNodeContents(mail); var s = getSelection(); s.removeAllRanges(); s.addRange(r); copy.textContent = 'Press Ctrl+C'; };
    try { navigator.clipboard.writeText(mail.textContent).then(done, fb); } catch (e) { fb(); }
  });
  document.getElementById('year').textContent = new Date().getFullYear();
})();
