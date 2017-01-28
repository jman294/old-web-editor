// element.textContent polyfill for ie8
if (Object.defineProperty &&
  Object.getOwnPropertyDescriptor &&
  Object.getOwnPropertyDescriptor(Element.prototype, "textContent") &&
  !Object.getOwnPropertyDescriptor(Element.prototype, "textContent").get) {
  (function() {
    var innerText = Object.getOwnPropertyDescriptor(Element.prototype, "innerText");
    Object.defineProperty(Element.prototype, "textContent", {
      get: function() {
        return innerText.get.call(this);
      },
      set: function(s) {
        return innerText.set.call(this, s);
      }
    });
  })();
}

// indexOf polyfill
Array.prototype.indexOf || (Array.prototype.indexOf = function(d, e) {
  var a;
  if (null == this) throw new TypeError('"this" is null or not defined');
  var c = Object(this),
    b = c.length >>> 0;
  if (0 === b) return -1;
  a = +e || 0;
  Infinity === Math.abs(a) && (a = 0);
  if (a >= b) return -1;
  for (a = Math.max(0 <= a ? a : b - Math.abs(a), 0); a < b;) {
    if (a in c && c[a] === d) return a;
    a++
  }
  return -1
});
