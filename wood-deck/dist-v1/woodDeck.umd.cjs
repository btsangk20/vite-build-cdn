(function (e, n) {
  typeof exports == 'object' && typeof module < 'u'
    ? n(exports)
    : typeof define == 'function' && define.amd
    ? define(['exports'], n)
    : ((e = typeof globalThis < 'u' ? globalThis : e || self),
      n((e.WoodDeck = {})));
})(this, function (e) {
  'use strict';
  const n = (o, t) => o + t;
  (e.sum = n),
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' });
});
