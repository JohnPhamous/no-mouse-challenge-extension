const styleEl = document.createElement('style');
// These styles are from marcysutton/no-mouse-days: https://github.com/marcysutton/no-mouse-days/blob/master/index.js
styleEl.textContent = '* { cursor: none !important; } @media (pointer: fine) {* { pointer-events: none !important; } }';

document.head.append(styleEl);
