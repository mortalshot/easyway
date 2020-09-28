"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function o(i, s, l) {
  function u(t, e) {
    if (!s[t]) {
      if (!i[t]) {
        var n = "function" == typeof require && require;
        if (!e && n) return n(t, !0);
        if (c) return c(t, !0);
        var r = new Error("Cannot find module '" + t + "'");
        throw r.code = "MODULE_NOT_FOUND", r;
      }

      var a = s[t] = {
        exports: {}
      };
      i[t][0].call(a.exports, function (e) {
        return u(i[t][1][e] || e);
      }, a, a.exports, o, i, s, l);
    }

    return s[t].exports;
  }

  for (var c = "function" == typeof require && require, e = 0; e < l.length; e++) {
    u(l[e]);
  }

  return u;
}({
  1: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.addCSSRule = function (e, t, n, r) {
      "insertRule" in e ? e.insertRule(t + "{" + n + "}", r) : e.addRule(t, n, r);
    };
    e("./raf.js");
  }, {
    "./raf.js": 30
  }],
  2: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.addClass = void 0;
    var r = e("./hasClass.js"),
        a = r.classListSupport ? function (e, t) {
      (0, r.hasClass)(e, t) || e.classList.add(t);
    } : function (e, t) {
      (0, r.hasClass)(e, t) || (e.className += " " + t);
    };
    n.addClass = a;
  }, {
    "./hasClass.js": 22
  }],
  3: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.addEvents = function (e, t, n) {
      for (var r in t) {
        var a = 0 <= ["touchstart", "touchmove"].indexOf(r) && !n && o.passiveOption;
        e.addEventListener(r, t[r], a);
      }
    };
    var o = e("./passiveOption.js");
  }, {
    "./passiveOption.js": 28
  }],
  4: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.arrayFromNodeList = function (e) {
      for (var t = [], n = 0, r = e.length; n < r; n++) {
        t.push(e[n]);
      }

      return t;
    };
  }, {}],
  5: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.caf = void 0;

    var r = window,
        a = r.cancelAnimationFrame || r.mozCancelAnimationFrame || function (e) {
      clearTimeout(e);
    };

    n.caf = a;
  }, {}],
  6: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.calc = function () {
      var e = document,
          t = (0, u.getBody)(),
          n = (0, c.setFakeBody)(t),
          r = e.createElement("div"),
          a = !1;
      t.appendChild(r);

      try {
        for (var o, i = "(10px * 10)", s = ["calc" + i, "-moz-calc" + i, "-webkit-calc" + i], l = 0; l < 3; l++) {
          if (o = s[l], r.style.width = o, 100 === r.offsetWidth) {
            a = o.replace(i, "");
            break;
          }
        }
      } catch (e) {}

      return t.fake ? (0, d.resetFakeBody)(t, n) : r.remove(), a;
    };
    var u = e("./getBody.js"),
        c = e("./setFakeBody.js"),
        d = e("./resetFakeBody.js");
  }, {
    "./getBody.js": 15,
    "./resetFakeBody.js": 35,
    "./setFakeBody.js": 37
  }],
  7: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.checkStorageValue = function (e) {
      return 0 <= ["true", "false"].indexOf(e) ? JSON.parse(e) : e;
    };
  }, {}],
  8: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.classListSupport = void 0;
    var r = ("classList" in document.createElement("_"));
    n.classListSupport = r;
  }, {}],
  9: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.createStyleSheet = function (e, t) {
      var n = document.createElement("style");
      e && n.setAttribute("media", e);
      t && n.setAttribute("nonce", t);
      return document.querySelector("head").appendChild(n), n.sheet ? n.sheet : n.styleSheet;
    };
  }, {}],
  10: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.docElement = void 0;
    var r = document.documentElement;
    n.docElement = r;
  }, {}],
  11: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.Events = function () {
      return {
        topics: {},
        on: function on(e, t) {
          this.topics[e] = this.topics[e] || [], this.topics[e].push(t);
        },
        off: function off(e, t) {
          if (this.topics[e]) for (var n = 0; n < this.topics[e].length; n++) {
            if (this.topics[e][n] === t) {
              this.topics[e].splice(n, 1);
              break;
            }
          }
        },
        emit: function emit(t, n) {
          n.type = t, this.topics[t] && this.topics[t].forEach(function (e) {
            e(n, t);
          });
        }
      };
    };
  }, {}],
  12: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.extend = function () {
      for (var e, t, n, r = arguments[0] || {}, a = 1, o = arguments.length; a < o; a++) {
        if (null !== (e = arguments[a])) for (t in e) {
          n = e[t], r !== n && void 0 !== n && (r[t] = n);
        }
      }

      return r;
    };
  }, {}],
  13: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.forEach = function (e, t, n) {
      for (var r = 0, a = e.length; r < a; r++) {
        t.call(n, e[r], r);
      }
    };
  }, {}],
  14: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.getAttr = function (e, t) {
      return e.getAttribute(t);
    };
  }, {}],
  15: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.getBody = function () {
      var e = document,
          t = e.body;
      t || ((t = e.createElement("body")).fake = !0);
      return t;
    };
  }, {}],
  16: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.getCssRulesLength = function (e) {
      return ("insertRule" in e ? e.cssRules : e.rules).length;
    };
  }, {}],
  17: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.getEndProperty = function (e, t) {
      var n = !1;
      /^Webkit/.test(e) ? n = "webkit" + t + "End" : /^O/.test(e) ? n = "o" + t + "End" : e && (n = t.toLowerCase() + "end");
      return n;
    };
  }, {}],
  18: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.getSlideId = function () {
      var e = window.tnsId;
      return window.tnsId = e ? e + 1 : 1, "tns" + window.tnsId;
    };
  }, {}],
  19: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.getTouchDirection = function (e, t) {
      var n = !1,
          r = Math.abs(90 - Math.abs(e));
      90 - t <= r ? n = "horizontal" : r <= t && (n = "vertical");
      return n;
    };
  }, {}],
  20: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.has3DTransforms = function (e) {
      if (!e) return !1;
      if (!window.getComputedStyle) return !1;
      var t,
          n = document,
          r = (0, s.getBody)(),
          a = (0, l.setFakeBody)(r),
          o = n.createElement("p"),
          i = 9 < e.length ? "-" + e.slice(0, -9).toLowerCase() + "-" : "";
      return i += "transform", r.insertBefore(o, null), o.style[e] = "translate3d(1px,1px,1px)", t = window.getComputedStyle(o).getPropertyValue(i), r.fake ? (0, u.resetFakeBody)(r, a) : o.remove(), void 0 !== t && 0 < t.length && "none" !== t;
    };
    var s = e("./getBody.js"),
        l = e("./setFakeBody.js"),
        u = e("./resetFakeBody.js");
  }, {
    "./getBody.js": 15,
    "./resetFakeBody.js": 35,
    "./setFakeBody.js": 37
  }],
  21: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.hasAttr = function (e, t) {
      return e.hasAttribute(t);
    };
  }, {}],
  22: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), Object.defineProperty(n, "classListSupport", {
      enumerable: !0,
      get: function get() {
        return r.classListSupport;
      }
    }), n.hasClass = void 0;
    var r = e("./classListSupport.js"),
        a = r.classListSupport ? function (e, t) {
      return e.classList.contains(t);
    } : function (e, t) {
      return 0 <= e.className.indexOf(t);
    };
    n.hasClass = a;
  }, {
    "./classListSupport.js": 8
  }],
  23: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.hideElement = function (e, t) {
      "none" !== e.style.display && (e.style.display = "none");
    };
  }, {}],
  24: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.isNodeList = function (e) {
      return void 0 !== e.item;
    };
  }, {}],
  25: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.isVisible = function (e) {
      return "none" !== window.getComputedStyle(e).display;
    };
  }, {}],
  26: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.jsTransform = function (t, n, r, a, e, o, i) {
      var s = Math.min(o, 10),
          l = 0 <= e.indexOf("%") ? "%" : "px",
          e = e.replace(l, ""),
          u = Number(t.style[n].replace(r, "").replace(a, "").replace(l, "")),
          c = (e - u) / o * s;
      setTimeout(function e() {
        o -= s, u += c, t.style[n] = r + u + l + a, 0 < o ? setTimeout(e, s) : i();
      }, s);
    };
  }, {}],
  27: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.mediaquerySupport = function () {
      if (window.matchMedia || window.msMatchMedia) return !0;
      var e,
          t = document,
          n = (0, s.getBody)(),
          r = (0, l.setFakeBody)(n),
          a = t.createElement("div"),
          o = t.createElement("style"),
          i = "@media all and (min-width:1px){.tns-mq-test{position:absolute}}";
      o.type = "text/css", a.className = "tns-mq-test", n.appendChild(o), n.appendChild(a), o.styleSheet ? o.styleSheet.cssText = i : o.appendChild(t.createTextNode(i));
      return e = window.getComputedStyle ? window.getComputedStyle(a).position : a.currentStyle.position, n.fake ? (0, u.resetFakeBody)(n, r) : a.remove(), "absolute" === e;
    };
    var s = e("./getBody.js"),
        l = e("./setFakeBody.js"),
        u = e("./resetFakeBody.js");
  }, {
    "./getBody.js": 15,
    "./resetFakeBody.js": 35,
    "./setFakeBody.js": 37
  }],
  28: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.passiveOption = void 0;
    var r = !1;

    try {
      var a = Object.defineProperty({}, "passive", {
        get: function get() {
          r = !0;
        }
      });
      window.addEventListener("test", null, a);
    } catch (e) {}

    var o = !!r && {
      passive: !0
    };
    n.passiveOption = o;
  }, {}],
  29: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.percentageLayout = function () {
      var e = document,
          t = (0, l.getBody)(),
          n = (0, u.setFakeBody)(t),
          r = e.createElement("div"),
          a = e.createElement("div"),
          o = "",
          i = !1;
      r.className = "tns-t-subp2", a.className = "tns-t-ct";

      for (var s = 0; s < 70; s++) {
        o += "<div></div>";
      }

      return a.innerHTML = o, r.appendChild(a), t.appendChild(r), i = Math.abs(r.getBoundingClientRect().left - a.children[67].getBoundingClientRect().left) < 2, t.fake ? (0, c.resetFakeBody)(t, n) : r.remove(), i;
    };
    var l = e("./getBody.js"),
        u = e("./setFakeBody.js"),
        c = e("./resetFakeBody.js");
  }, {
    "./getBody.js": 15,
    "./resetFakeBody.js": 35,
    "./setFakeBody.js": 37
  }],
  30: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.raf = void 0;

    var r = window,
        a = r.requestAnimationFrame || r.webkitRequestAnimationFrame || r.mozRequestAnimationFrame || r.msRequestAnimationFrame || function (e) {
      return setTimeout(e, 16);
    };

    n.raf = a;
  }, {}],
  31: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.removeAttrs = function (e, t) {
      e = (0, o.isNodeList)(e) || e instanceof Array ? e : [e];

      for (var n = (t = t instanceof Array ? t : [t]).length, r = e.length; r--;) {
        for (var a = n; a--;) {
          e[r].removeAttribute(t[a]);
        }
      }
    };
    var o = e("./isNodeList.js");
  }, {
    "./isNodeList.js": 24
  }],
  32: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.removeCSSRule = function (e, t) {
      "deleteRule" in e ? e.deleteRule(t) : e.removeRule(t);
    };
    e("./raf.js");
  }, {
    "./raf.js": 30
  }],
  33: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.removeClass = void 0;
    var r = e("./hasClass.js"),
        a = r.classListSupport ? function (e, t) {
      (0, r.hasClass)(e, t) && e.classList.remove(t);
    } : function (e, t) {
      (0, r.hasClass)(e, t) && (e.className = e.className.replace(t, ""));
    };
    n.removeClass = a;
  }, {
    "./hasClass.js": 22
  }],
  34: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.removeEvents = function (e, t) {
      for (var n in t) {
        var r = 0 <= ["touchstart", "touchmove"].indexOf(n) && a.passiveOption;
        e.removeEventListener(n, t[n], r);
      }
    };
    var a = e("./passiveOption.js");
  }, {
    "./passiveOption.js": 28
  }],
  35: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.resetFakeBody = function (e, t) {
      e.fake && (e.remove(), r.docElement.style.overflow = t, r.docElement.offsetHeight);
    };
    var r = e("./docElement.js");
  }, {
    "./docElement.js": 10
  }],
  36: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.setAttrs = function (e, t) {
      if (e = (0, a.isNodeList)(e) || e instanceof Array ? e : [e], "[object Object]" !== Object.prototype.toString.call(t)) return;

      for (var n = e.length; n--;) {
        for (var r in t) {
          e[n].setAttribute(r, t[r]);
        }
      }
    };
    var a = e("./isNodeList.js");
  }, {
    "./isNodeList.js": 24
  }],
  37: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.setFakeBody = function (e) {
      var t = "";
      e.fake && (t = r.docElement.style.overflow, e.style.background = "", e.style.overflow = r.docElement.style.overflow = "hidden", r.docElement.appendChild(e));
      return t;
    };
    var r = e("./docElement.js");
  }, {
    "./docElement.js": 10
  }],
  38: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.setLocalStorage = function (e, t, n, r) {
      if (r) try {
        e.setItem(t, n);
      } catch (e) {}
      return n;
    };
  }, {}],
  39: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.showElement = function (e, t) {
      "none" === e.style.display && (e.style.display = "");
    };
  }, {}],
  40: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.toDegree = function (e, t) {
      return Math.atan2(e, t) * (180 / Math.PI);
    };
  }, {}],
  41: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.whichProperty = function (t) {
      {
        var n, r;
        "string" == typeof t && (n = [t], r = t.charAt(0).toUpperCase() + t.substr(1), ["Webkit", "Moz", "ms", "O"].forEach(function (e) {
          "ms" === e && "transform" !== t || n.push(e + r);
        }), t = n);
      }

      for (var e = document.createElement("fakeelement"), a = (t.length, 0); a < t.length; a++) {
        var o = t[a];
        if (void 0 !== e.style[o]) return o;
      }

      return !1;
    };
  }, {}],
  42: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.tns = void 0;

    var jr = e("./helpers/raf.js"),
        Lr = e("./helpers/caf.js"),
        wr = e("./helpers/extend.js"),
        kr = e("./helpers/checkStorageValue.js"),
        Ar = e("./helpers/setLocalStorage.js"),
        _r = e("./helpers/getSlideId.js"),
        Mr = e("./helpers/calc.js"),
        xr = e("./helpers/percentageLayout.js"),
        Tr = e("./helpers/mediaquerySupport.js"),
        Or = e("./helpers/createStyleSheet.js"),
        Pr = e("./helpers/addCSSRule.js"),
        Br = e("./helpers/removeCSSRule.js"),
        zr = e("./helpers/getCssRulesLength.js"),
        Nr = e("./helpers/toDegree.js"),
        Rr = e("./helpers/getTouchDirection.js"),
        qr = e("./helpers/forEach.js"),
        Dr = e("./helpers/hasClass.js"),
        Ir = e("./helpers/addClass.js"),
        Fr = e("./helpers/removeClass.js"),
        Hr = e("./helpers/hasAttr.js"),
        Vr = e("./helpers/getAttr.js"),
        Wr = e("./helpers/setAttrs.js"),
        Gr = e("./helpers/removeAttrs.js"),
        Ur = e("./helpers/arrayFromNodeList.js"),
        Qr = e("./helpers/hideElement.js"),
        Xr = e("./helpers/showElement.js"),
        Yr = e("./helpers/isVisible.js"),
        Kr = e("./helpers/whichProperty.js"),
        Jr = e("./helpers/has3DTransforms.js"),
        $r = e("./helpers/getEndProperty.js"),
        Zr = e("./helpers/addEvents.js"),
        ea = e("./helpers/removeEvents.js"),
        ta = e("./helpers/events.js"),
        na = e("./helpers/jsTransform.js");

    function ra(e) {
      return (ra = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      })(e);
    }

    Object.keys || (Object.keys = function (e) {
      var t = [];

      for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
      }

      return t;
    }), "remove" in Element.prototype || (Element.prototype.remove = function () {
      this.parentNode && this.parentNode.removeChild(this);
    });

    n.tns = function e(M) {
      M = (0, wr.extend)({
        container: ".slider",
        mode: "carousel",
        axis: "horizontal",
        items: 1,
        gutter: 0,
        edgePadding: 0,
        fixedWidth: !1,
        autoWidth: !1,
        viewportMax: !1,
        slideBy: 1,
        center: !1,
        controls: !0,
        controlsPosition: "top",
        controlsText: ["prev", "next"],
        controlsContainer: !1,
        prevButton: !1,
        nextButton: !1,
        nav: !0,
        navPosition: "top",
        navContainer: !1,
        navAsThumbnails: !1,
        arrowKeys: !1,
        speed: 300,
        autoplay: !1,
        autoplayPosition: "top",
        autoplayTimeout: 5e3,
        autoplayDirection: "forward",
        autoplayText: ["start", "stop"],
        autoplayHoverPause: !1,
        autoplayButton: !1,
        autoplayButtonOutput: !0,
        autoplayResetOnVisibility: !0,
        animateIn: "tns-fadeIn",
        animateOut: "tns-fadeOut",
        animateNormal: "tns-normal",
        animateDelay: !1,
        loop: !0,
        rewind: !1,
        autoHeight: !1,
        responsive: !1,
        lazyload: !1,
        lazyloadSelector: ".tns-lazy-img",
        touch: !0,
        mouseDrag: !1,
        swipeAngle: 15,
        nested: !1,
        preventActionWhenRunning: !1,
        preventScrollOnTouch: !1,
        freezable: !0,
        onInit: !1,
        useLocalStorage: !0,
        nonce: !1
      }, M || {});
      var x = document,
          m = window,
          a = {
        ENTER: 13,
        SPACE: 32,
        LEFT: 37,
        RIGHT: 39
      },
          t = {},
          n = M.useLocalStorage;

      if (n) {
        var r = navigator.userAgent,
            o = new Date();

        try {
          (t = m.localStorage) ? (t.setItem(o, o), n = t.getItem(o) == o, t.removeItem(o)) : n = !1, n || (t = {});
        } catch (e) {
          n = !1;
        }

        n && (t.tnsApp && t.tnsApp !== r && ["tC", "tPL", "tMQ", "tTf", "t3D", "tTDu", "tTDe", "tADu", "tADe", "tTE", "tAE"].forEach(function (e) {
          t.removeItem(e);
        }), localStorage.tnsApp = r);
      }

      var y = t.tC ? (0, kr.checkStorageValue)(t.tC) : (0, Ar.setLocalStorage)(t, "tC", (0, Mr.calc)(), n),
          g = t.tPL ? (0, kr.checkStorageValue)(t.tPL) : (0, Ar.setLocalStorage)(t, "tPL", (0, xr.percentageLayout)(), n),
          T = t.tMQ ? (0, kr.checkStorageValue)(t.tMQ) : (0, Ar.setLocalStorage)(t, "tMQ", (0, Tr.mediaquerySupport)(), n),
          i = t.tTf ? (0, kr.checkStorageValue)(t.tTf) : (0, Ar.setLocalStorage)(t, "tTf", (0, Kr.whichProperty)("transform"), n),
          s = t.t3D ? (0, kr.checkStorageValue)(t.t3D) : (0, Ar.setLocalStorage)(t, "t3D", (0, Jr.has3DTransforms)(i), n),
          b = t.tTDu ? (0, kr.checkStorageValue)(t.tTDu) : (0, Ar.setLocalStorage)(t, "tTDu", (0, Kr.whichProperty)("transitionDuration"), n),
          l = t.tTDe ? (0, kr.checkStorageValue)(t.tTDe) : (0, Ar.setLocalStorage)(t, "tTDe", (0, Kr.whichProperty)("transitionDelay"), n),
          S = t.tADu ? (0, kr.checkStorageValue)(t.tADu) : (0, Ar.setLocalStorage)(t, "tADu", (0, Kr.whichProperty)("animationDuration"), n),
          u = t.tADe ? (0, kr.checkStorageValue)(t.tADe) : (0, Ar.setLocalStorage)(t, "tADe", (0, Kr.whichProperty)("animationDelay"), n),
          c = t.tTE ? (0, kr.checkStorageValue)(t.tTE) : (0, Ar.setLocalStorage)(t, "tTE", (0, $r.getEndProperty)(b, "Transition"), n),
          d = t.tAE ? (0, kr.checkStorageValue)(t.tAE) : (0, Ar.setLocalStorage)(t, "tAE", (0, $r.getEndProperty)(S, "Animation"), n),
          f = m.console && "function" == typeof m.console.warn,
          v = ["container", "controlsContainer", "prevButton", "nextButton", "navContainer", "autoplayButton"],
          h = {};

      if (v.forEach(function (e) {
        if ("string" == typeof M[e]) {
          var t = M[e],
              n = x.querySelector(t);
          if (h[e] = t, !n || !n.nodeName) return void (f && console.warn("Can't find", M[e]));
          M[e] = n;
        }
      }), !(M.container.children.length < 1)) {
        var O,
            P,
            p,
            B,
            z = M.responsive,
            N = M.nested,
            R = "carousel" === M.mode;

        if (z) {
          0 in z && (M = (0, wr.extend)(M, z[0]), delete z[0]);
          var C = {};

          for (var E in z) {
            var j = "number" == typeof (j = z[E]) ? {
              items: j
            } : j;
            C[E] = j;
          }

          z = C, C = null;
        }

        R || !function e(t) {
          for (var n in t) {
            R || ("slideBy" === n && (t[n] = "page"), "edgePadding" === n && (t[n] = !1), "autoHeight" === n && (t[n] = !1)), "responsive" === n && e(t[n]);
          }
        }(M), R || (M.axis = "horizontal", M.slideBy = "page", M.edgePadding = !1, O = M.animateIn, P = M.animateOut, p = M.animateDelay, B = M.animateNormal);
        var L,
            q,
            D = "horizontal" === M.axis,
            w = x.createElement("div"),
            I = x.createElement("div"),
            F = M.container,
            k = F.parentNode,
            A = F.outerHTML,
            H = F.children,
            V = H.length,
            W = tn(),
            G = !1;
        z && En(), R && (F.className += " tns-vpfix");

        var _,
            U,
            Q,
            X,
            Y,
            K,
            J,
            $,
            Z,
            ee,
            te,
            ne,
            re,
            ae,
            oe,
            ie,
            se,
            le,
            ue,
            ce,
            de,
            fe,
            ve,
            he,
            pe,
            me,
            ye,
            ge,
            be,
            Se,
            Ce,
            Ee,
            je,
            Le,
            we,
            ke,
            Ae,
            _e,
            Me,
            xe = M.autoWidth,
            Te = on("fixedWidth"),
            Oe = on("edgePadding"),
            Pe = on("gutter"),
            Be = rn(),
            ze = on("center"),
            Ne = xe ? 1 : Math.floor(on("items")),
            Re = on("slideBy"),
            qe = M.viewportMax || M.fixedWidthViewportWidth,
            De = on("arrowKeys"),
            Ie = on("speed"),
            Fe = M.rewind,
            He = !Fe && M.loop,
            Ve = on("autoHeight"),
            We = on("controls"),
            Ge = on("controlsText"),
            Ue = on("nav"),
            Qe = on("touch"),
            Xe = on("mouseDrag"),
            Ye = on("autoplay"),
            Ke = on("autoplayTimeout"),
            Je = on("autoplayText"),
            $e = on("autoplayHoverPause"),
            Ze = on("autoplayResetOnVisibility"),
            et = (0, Or.createStyleSheet)(null, on("nonce")),
            tt = M.lazyload,
            nt = M.lazyloadSelector,
            rt = [],
            at = He ? (X = function () {
          {
            if (xe || Te && !qe) return V - 1;
            var e = Te ? "fixedWidth" : "items",
                t = [];
            if ((Te || M[e] < V) && t.push(M[e]), z) for (var n in z) {
              var r = z[n][e];
              r && (Te || r < V) && t.push(r);
            }
            return t.length || t.push(0), Math.ceil(Te ? qe / Math.min.apply(null, t) : Math.max.apply(null, t));
          }
        }(), Y = R ? Math.ceil((5 * X - V) / 2) : 4 * X - V, Y = Math.max(X, Y), an("edgePadding") ? Y + 1 : Y) : 0,
            ot = R ? V + 2 * at : V + at,
            it = !(!Te && !xe || He),
            st = Te ? Xn() : null,
            lt = !R || !He,
            ut = D ? "left" : "top",
            ct = "",
            dt = "",
            ft = Te ? function () {
          return ze && !He ? V - 1 : Math.ceil(-st / (Te + Pe));
        } : xe ? function () {
          for (var e = 0; e < ot; e++) {
            if (_[e] >= -st) return e;
          }
        } : function () {
          return ze && R && !He ? V - 1 : He || R ? Math.max(0, ot - Math.ceil(Ne)) : ot - 1;
        },
            vt = $t(on("startIndex")),
            ht = vt,
            pt = (Jt(), 0),
            mt = xe ? null : ft(),
            yt = M.preventActionWhenRunning,
            gt = M.swipeAngle,
            bt = !gt || "?",
            St = !1,
            Ct = M.onInit,
            Et = new ta.Events(),
            jt = " tns-slider tns-" + M.mode,
            Lt = F.id || (0, _r.getSlideId)(),
            wt = on("disable"),
            kt = !1,
            At = M.freezable,
            _t = !(!At || xe) && Cn(),
            Mt = !1,
            xt = {
          click: rr,
          keydown: function keydown(e) {
            e = dr(e);
            var t = [a.LEFT, a.RIGHT].indexOf(e.keyCode);
            0 <= t && (0 === t ? $.disabled || rr(e, -1) : Z.disabled || rr(e, 1));
          }
        },
            Tt = {
          click: function click(e) {
            if (St) {
              if (yt) return;
              tr();
            }

            var t = fr(e = dr(e));

            for (; t !== ae && !(0, Hr.hasAttr)(t, "data-nav");) {
              t = t.parentNode;
            }

            {
              var n, r;
              (0, Hr.hasAttr)(t, "data-nav") && (n = ue = Number((0, Vr.getAttr)(t, "data-nav")), r = Te || xe ? n * V / se : n * Ne, nr(Dt ? n : Math.min(Math.ceil(r), V - 1), e), ce === n && (Se && lr(), ue = -1));
            }
          },
          keydown: function keydown(e) {
            e = dr(e);
            var t = x.activeElement;
            if (!(0, Hr.hasAttr)(t, "data-nav")) return;
            var n = [a.LEFT, a.RIGHT, a.ENTER, a.SPACE].indexOf(e.keyCode),
                r = Number((0, Vr.getAttr)(t, "data-nav"));
            0 <= n && (0 === n ? 0 < r && cr(ie[r - 1]) : 1 === n ? r < se - 1 && cr(ie[r + 1]) : nr(ue = r, e));
          }
        },
            Ot = {
          mouseover: function mouseover() {
            Se && (or(), Ce = !0);
          },
          mouseout: function mouseout() {
            Ce && (ar(), Ce = !1);
          }
        },
            Pt = {
          visibilitychange: function visibilitychange() {
            x.hidden ? Se && (or(), je = !0) : je && (ar(), je = !1);
          }
        },
            Bt = {
          keydown: function keydown(e) {
            e = dr(e);
            var t = [a.LEFT, a.RIGHT].indexOf(e.keyCode);
            0 <= t && rr(e, 0 === t ? -1 : 1);
          }
        },
            zt = {
          touchstart: mr,
          touchmove: yr,
          touchend: gr,
          touchcancel: gr
        },
            Nt = {
          mousedown: mr,
          mousemove: yr,
          mouseup: gr,
          mouseleave: gr
        },
            Rt = an("controls"),
            qt = an("nav"),
            Dt = !!xe || M.navAsThumbnails,
            It = an("autoplay"),
            Ft = an("touch"),
            Ht = an("mouseDrag"),
            Vt = "tns-slide-active",
            Wt = "tns-slide-cloned",
            Gt = "tns-complete",
            Ut = {
          load: function load(e) {
            Tn(fr(e));
          },
          error: function error(e) {
            !function (e) {
              (0, Ir.addClass)(e, "failed"), On(e);
            }(fr(e));
          }
        },
            Qt = "force" === M.preventScrollOnTouch;

        Rt && (K = M.controlsContainer, J = M.controlsContainer ? M.controlsContainer.outerHTML : "", $ = M.prevButton, Z = M.nextButton, ee = M.prevButton ? M.prevButton.outerHTML : "", te = M.nextButton ? M.nextButton.outerHTML : ""), qt && (ae = M.navContainer, oe = M.navContainer ? M.navContainer.outerHTML : "", se = xe ? V : Sr(), le = 0, ue = -1, ce = en(), de = ce, fe = "tns-nav-active", ve = "Carousel Page ", he = " (Current Slide)"), It && (pe = "forward" === M.autoplayDirection ? 1 : -1, me = M.autoplayButton, ye = M.autoplayButton ? M.autoplayButton.outerHTML : "", ge = ["<span class='tns-visually-hidden'>", " animation</span>"]), (Ft || Ht) && (Le = {}, Ae = !(we = {}), Me = D ? function (e, t) {
          return e.x - t.x;
        } : function (e, t) {
          return e.y - t.y;
        }), xe || Kt(wt || _t), i && (ut = i, ct = "translate", dt = s ? (ct += D ? "3d(" : "3d(0px, ", D ? ", 0px, 0px)" : ", 0px)") : (ct += D ? "X(" : "Y(", ")")), R && (F.className = F.className.replace("tns-vpfix", "")), function () {
          an("gutter");
          w.className = "tns-outer", I.className = "tns-inner", w.id = Lt + "-ow", I.id = Lt + "-iw", "" === F.id && (F.id = Lt);
          jt += g || xe ? " tns-subpixel" : " tns-no-subpixel", jt += y ? " tns-calc" : " tns-no-calc", xe && (jt += " tns-autowidth");
          jt += " tns-" + M.axis, F.className += jt, R ? ((L = x.createElement("div")).id = Lt + "-mw", L.className = "tns-ovh", w.appendChild(L), L.appendChild(I)) : w.appendChild(I);
          {
            Ve && ((L || I).className += " tns-ah");
          }

          if (k.insertBefore(w, F), I.appendChild(F), (0, qr.forEach)(H, function (e, t) {
            (0, Ir.addClass)(e, "tns-item"), e.id || (e.id = Lt + "-item" + t), !R && B && (0, Ir.addClass)(e, B), (0, Wr.setAttrs)(e, {
              "aria-hidden": "true",
              tabindex: "-1"
            });
          }), at) {
            for (var e = x.createDocumentFragment(), t = x.createDocumentFragment(), n = at; n--;) {
              var r,
                  a = n % V,
                  o = H[a].cloneNode(!0);
              (0, Ir.addClass)(o, Wt), (0, Gr.removeAttrs)(o, "id"), t.insertBefore(o, t.firstChild), R && (r = H[V - 1 - a].cloneNode(!0), (0, Ir.addClass)(r, Wt), (0, Gr.removeAttrs)(r, "id"), e.appendChild(r));
            }

            F.insertBefore(e, F.firstChild), F.appendChild(t), H = F.children;
          }
        }(), function () {
          if (!R) for (var e = vt, t = vt + Math.min(V, Ne); e < t; e++) {
            var n = H[e];
            n.style.left = 100 * (e - vt) / Ne + "%", (0, Ir.addClass)(n, O), (0, Fr.removeClass)(n, B);
          }
          D && (g || xe ? ((0, Pr.addCSSRule)(et, "#" + Lt + " > .tns-item", "font-size:" + m.getComputedStyle(H[0]).fontSize + ";", (0, zr.getCssRulesLength)(et)), (0, Pr.addCSSRule)(et, "#" + Lt, "font-size:0;", (0, zr.getCssRulesLength)(et))) : R && (0, qr.forEach)(H, function (e, t) {
            var n;
            e.style.marginLeft = (n = t, y ? y + "(" + 100 * n + "% / " + ot + ")" : 100 * n / ot + "%");
          }));
          {
            T ? (b && (o = L && M.autoHeight ? fn(M.speed) : "", (0, Pr.addCSSRule)(et, "#" + Lt + "-mw", o, (0, zr.getCssRulesLength)(et))), o = sn(M.edgePadding, M.gutter, M.fixedWidth, M.speed, M.autoHeight), (0, Pr.addCSSRule)(et, "#" + Lt + "-iw", o, (0, zr.getCssRulesLength)(et)), R && (o = D && !xe ? "width:" + ln(M.fixedWidth, M.gutter, M.items) + ";" : "", b && (o += fn(Ie)), (0, Pr.addCSSRule)(et, "#" + Lt, o, (0, zr.getCssRulesLength)(et))), o = D && !xe ? un(M.fixedWidth, M.gutter, M.items) : "", M.gutter && (o += cn(M.gutter)), R || (b && (o += fn(Ie)), S && (o += vn(Ie)))) : (R && Ve && (L.style[b] = Ie / 1e3 + "s"), I.style.cssText = sn(Oe, Pe, Te, Ve), R && D && !xe && (F.style.width = ln(Te, Pe, Ne)), o = D && !xe ? un(Te, Pe, Ne) : "", Pe && (o += cn(Pe))), o && (0, Pr.addCSSRule)(et, "#" + Lt + " > .tns-item", o, (0, zr.getCssRulesLength)(et));
          }
          if (z && T) for (var r in z) {
            r = parseInt(r);
            var a = z[r],
                o = "",
                i = "",
                s = "",
                l = "",
                u = "",
                c = xe ? null : on("items", r),
                d = on("fixedWidth", r),
                f = on("speed", r),
                v = on("edgePadding", r),
                h = on("autoHeight", r),
                p = on("gutter", r);
            b && L && on("autoHeight", r) && "speed" in a && (i = "#" + Lt + "-mw{" + fn(f) + "}"), ("edgePadding" in a || "gutter" in a) && (s = "#" + Lt + "-iw{" + sn(v, p, d, f, h) + "}"), R && D && !xe && ("fixedWidth" in a || "items" in a || Te && "gutter" in a) && (l = "width:" + ln(d, p, c) + ";"), b && "speed" in a && (l += fn(f)), l = l && "#" + Lt + "{" + l + "}", ("fixedWidth" in a || Te && "gutter" in a || !R && "items" in a) && (u += un(d, p, c)), "gutter" in a && (u += cn(p)), !R && "speed" in a && (b && (u += fn(f)), S && (u += vn(f))), (o = i + s + l + (u = u && "#" + Lt + " > .tns-item{" + u + "}")) && et.insertRule("@media (min-width: " + r / 16 + "em) {" + o + "}", et.cssRules.length);
          }
        }(), hn();
        var Xt = He ? R ? function () {
          var e = pt,
              t = mt;
          e += Re, t -= Re, Oe ? (e += 1, --t) : Te && (Be + Pe) % (Te + Pe) && --t, at && (t < vt ? vt -= V : vt < e && (vt += V));
        } : function () {
          if (mt < vt) for (; pt + V <= vt;) {
            vt -= V;
          } else if (vt < pt) for (; vt <= mt - V;) {
            vt += V;
          }
        } : function () {
          vt = Math.max(pt, Math.min(mt, vt));
        },
            Yt = R ? function () {
          Un(F, ""), b || !Ie ? (Jn(), Ie && (0, Yr.isVisible)(F) || tr()) : (0, na.jsTransform)(F, ut, ct, dt, Yn(), Ie, tr), D || br();
        } : function () {
          rt = [];
          var e = {};
          e[c] = e[d] = tr, (0, ea.removeEvents)(H[ht], e), (0, Zr.addEvents)(H[vt], e), $n(ht, O, P, !0), $n(vt, B, O), c && d && Ie && (0, Yr.isVisible)(F) || tr();
        };
        return {
          version: "2.9.3",
          getInfo: Er,
          events: Et,
          goTo: nr,
          play: function play() {
            Ye && !Se && (sr(), Ee = !1);
          },
          pause: function pause() {
            Se && (lr(), Ee = !0);
          },
          isOn: G,
          updateSliderHeight: qn,
          refresh: hn,
          destroy: function destroy() {
            var e;
            et.disabled = !0, et.ownerNode && et.ownerNode.remove(), (0, ea.removeEvents)(m, {
              resize: bn
            }), De && (0, ea.removeEvents)(x, Bt), K && (0, ea.removeEvents)(K, xt), ae && (0, ea.removeEvents)(ae, Tt), (0, ea.removeEvents)(F, Ot), (0, ea.removeEvents)(F, Pt), me && (0, ea.removeEvents)(me, {
              click: ur
            }), Ye && clearInterval(be), R && c && ((e = {})[c] = tr, (0, ea.removeEvents)(F, e)), Qe && (0, ea.removeEvents)(F, zt), Xe && (0, ea.removeEvents)(F, Nt);
            var o = [A, J, ee, te, oe, ye];

            for (var t in v.forEach(function (e, t) {
              var n,
                  r,
                  a = "container" === e ? w : M[e];
              "object" === ra(a) && a && (n = !!a.previousElementSibling && a.previousElementSibling, r = a.parentNode, a.outerHTML = o[t], M[e] = n ? n.nextElementSibling : r.firstElementChild);
            }), v = O = P = p = B = D = w = I = F = k = A = H = V = q = W = xe = Te = Oe = Pe = Be = Ne = Re = qe = De = Ie = Fe = He = Ve = et = tt = _ = rt = at = ot = it = st = lt = ut = ct = dt = ft = vt = ht = pt = mt = gt = bt = St = Ct = Et = jt = Lt = wt = kt = At = _t = Mt = xt = Tt = Ot = Pt = Bt = zt = Nt = Rt = qt = Dt = It = Ht = Vt = Gt = Ut = U = We = Ge = K = J = $ = Z = ne = re = Ue = ae = oe = ie = se = le = ue = ce = de = fe = ve = he = Ye = Ke = pe = Je = $e = me = ye = Ze = ge = be = Se = Ce = Ee = je = Le = we = ke = Ae = _e = Me = Qe = Xe = null, this) {
              "rebuild" !== t && (this[t] = null);
            }

            G = !1;
          },
          rebuild: function rebuild() {
            return e((0, wr.extend)(M, h));
          }
        };
      }

      function Kt(e) {
        e && (We = Ue = Qe = Xe = De = Ye = $e = Ze = !1);
      }

      function Jt() {
        for (var e = R ? vt - at : vt; e < 0;) {
          e += V;
        }

        return e % V + 1;
      }

      function $t(e) {
        return e = e ? Math.max(0, Math.min(He ? V - 1 : V - Ne, e)) : 0, R ? e + at : e;
      }

      function Zt(e) {
        for (null == e && (e = vt), R && (e -= at); e < 0;) {
          e += V;
        }

        return Math.floor(e % V);
      }

      function en() {
        var e = Zt(),
            t = Dt ? e : Te || xe ? Math.ceil((e + 1) * se / V - 1) : Math.floor(e / Ne);
        return !He && R && vt === mt && (t = se - 1), t;
      }

      function tn() {
        return m.innerWidth || x.documentElement.clientWidth || x.body.clientWidth;
      }

      function nn(e) {
        return "top" === e ? "afterbegin" : "beforeend";
      }

      function rn() {
        var e = Oe ? 2 * Oe - Pe : 0;
        return function e(t) {
          if (null != t) {
            var n,
                r,
                a = x.createElement("div");
            return t.appendChild(a), r = (n = a.getBoundingClientRect()).right - n.left, a.remove(), r || e(t.parentNode);
          }
        }(k) - e;
      }

      function an(e) {
        if (M[e]) return !0;
        if (z) for (var t in z) {
          if (z[t][e]) return !0;
        }
        return !1;
      }

      function on(e, t) {
        if (null == t && (t = W), "items" === e && Te) return Math.floor((Be + Pe) / (Te + Pe)) || 1;
        var n = M[e];
        if (z) for (var r in z) {
          t >= parseInt(r) && e in z[r] && (n = z[r][e]);
        }
        return "slideBy" === e && "page" === n && (n = on("items")), R || "slideBy" !== e && "items" !== e || (n = Math.floor(n)), n;
      }

      function sn(e, t, n, r, a) {
        var o,
            i,
            s = "";
        return void 0 !== e ? (o = e, t && (o -= t), s = D ? "margin: 0 " + o + "px 0 " + e + "px;" : "margin: " + e + "px 0 " + o + "px 0;") : t && !n && (i = "-" + t + "px", s = "margin: 0 " + (D ? i + " 0 0" : "0 " + i + " 0") + ";"), !R && a && b && r && (s += fn(r)), s;
      }

      function ln(e, t, n) {
        return e ? (e + t) * ot + "px" : y ? y + "(" + 100 * ot + "% / " + n + ")" : 100 * ot / n + "%";
      }

      function un(e, t, n) {
        var r, a;
        return a = "width:" + (a = e ? e + t + "px" : (R || (n = Math.floor(n)), r = R ? ot : n, y ? y + "(100% / " + r + ")" : 100 / r + "%")), "inner" !== N ? a + ";" : a + " !important;";
      }

      function cn(e) {
        return !1 !== e ? (D ? "padding-" : "margin-") + (D ? "right" : "bottom") + ": " + e + "px;" : "";
      }

      function dn(e, t) {
        var n = e.substring(0, e.length - t).toLowerCase();
        return n = n && "-" + n + "-";
      }

      function fn(e) {
        return dn(b, 18) + "transition-duration:" + e / 1e3 + "s;";
      }

      function vn(e) {
        return dn(S, 17) + "animation-duration:" + e / 1e3 + "s;";
      }

      function hn() {
        var e;
        an("autoHeight") || xe || !D ? (e = F.querySelectorAll("img"), (0, qr.forEach)(e, function (e) {
          var t = e.src;
          tt || (t && t.indexOf("data:image") < 0 ? ((e.src = "", Zr.addEvents)(e, Ut), (0, Ir.addClass)(e, "loading"), e.src = t) : Tn(e));
        }), (0, jr.raf)(function () {
          zn((0, Ur.arrayFromNodeList)(e), function () {
            U = !0;
          });
        }), an("autoHeight") && (e = Pn(vt, Math.min(vt + Ne - 1, ot - 1))), tt ? pn() : (0, jr.raf)(function () {
          zn((0, Ur.arrayFromNodeList)(e), pn);
        })) : (R && Kn(), yn(), gn());
      }

      function pn() {
        var r;
        xe && 1 < V ? (r = He ? vt : V - 1, function e() {
          var t = H[r].getBoundingClientRect().left,
              n = H[r - 1].getBoundingClientRect().right;
          Math.abs(t - n) <= 1 ? mn() : setTimeout(function () {
            e();
          }, 16);
        }()) : mn();
      }

      function mn() {
        D && !xe || (Dn(), xe ? (st = Xn(), At && (_t = Cn()), mt = ft(), Kt(wt || _t)) : br()), R && Kn(), yn(), gn();
      }

      function yn() {
        var e;

        if (In(), w.insertAdjacentHTML("afterbegin", '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + _n() + "</span>  of " + V + "</div>"), Q = w.querySelector(".tns-liveregion .current"), It && (e = Ye ? "stop" : "start", me ? (0, Wr.setAttrs)(me, {
          "data-action": e
        }) : M.autoplayButtonOutput && (w.insertAdjacentHTML(nn(M.autoplayPosition), '<button type="button" data-action="' + e + '">' + ge[0] + e + ge[1] + Je[0] + "</button>"), me = w.querySelector("[data-action]")), me && (0, Zr.addEvents)(me, {
          click: ur
        }), Ye && (sr(), $e && (0, Zr.addEvents)(F, Ot), Ze && (0, Zr.addEvents)(F, Pt))), qt) {
          var t, n;
          if (ae) (0, Wr.setAttrs)(ae, {
            "aria-label": "Carousel Pagination"
          }), ie = ae.children, (0, qr.forEach)(ie, function (e, t) {
            (0, Wr.setAttrs)(e, {
              "data-nav": t,
              tabindex: "-1",
              "aria-label": ve + (t + 1),
              "aria-controls": Lt
            });
          });else {
            for (var r = "", a = Dt ? "" : 'style="display:none"', o = 0; o < V; o++) {
              r += '<button type="button" data-nav="' + o + '" tabindex="-1" aria-controls="' + Lt + '" ' + a + ' aria-label="' + ve + (o + 1) + '"></button>';
            }

            r = '<div class="tns-nav" aria-label="Carousel Pagination">' + r + "</div>", w.insertAdjacentHTML(nn(M.navPosition), r), ae = w.querySelector(".tns-nav"), ie = ae.children;
          }
          Cr(), b && (t = b.substring(0, b.length - 18).toLowerCase(), n = "transition: all " + Ie / 1e3 + "s", t && (n = "-" + t + "-" + n), (0, Pr.addCSSRule)(et, "[aria-controls^=" + Lt + "-item]", n, (0, zr.getCssRulesLength)(et))), (0, Wr.setAttrs)(ie[ce], {
            "aria-label": ve + (ce + 1) + he
          }), (0, Gr.removeAttrs)(ie[ce], "tabindex"), (0, Ir.addClass)(ie[ce], fe), (0, Zr.addEvents)(ae, Tt);
        }

        Rt && (K || $ && Z || (w.insertAdjacentHTML(nn(M.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' + Lt + '">' + Ge[0] + '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' + Lt + '">' + Ge[1] + "</button></div>"), K = w.querySelector(".tns-controls")), $ && Z || ($ = K.children[0], Z = K.children[1]), M.controlsContainer && (0, Wr.setAttrs)(K, {
          "aria-label": "Carousel Navigation",
          tabindex: "0"
        }), (M.controlsContainer || M.prevButton && M.nextButton) && (0, Wr.setAttrs)([$, Z], {
          "aria-controls": Lt,
          tabindex: "-1"
        }), (M.controlsContainer || M.prevButton && M.nextButton) && ((0, Wr.setAttrs)($, {
          "data-controls": "prev"
        }), (0, Wr.setAttrs)(Z, {
          "data-controls": "next"
        })), ne = Hn($), re = Hn(Z), Gn(), K ? (0, Zr.addEvents)(K, xt) : ((0, Zr.addEvents)($, xt), (0, Zr.addEvents)(Z, xt))), jn();
      }

      function gn() {
        var e;
        R && c && ((e = {})[c] = tr, (0, Zr.addEvents)(F, e)), Qe && (0, Zr.addEvents)(F, zt, M.preventScrollOnTouch), Xe && (0, Zr.addEvents)(F, Nt), De && (0, Zr.addEvents)(x, Bt), "inner" === N ? Et.on("outerResized", function () {
          Sn(), Et.emit("innerLoaded", Er());
        }) : (z || Te || xe || Ve || !D) && (0, Zr.addEvents)(m, {
          resize: bn
        }), Ve && ("outer" === N ? Et.on("innerLoaded", Bn) : wt || Bn()), xn(), wt ? kn() : _t && wn(), Et.on("indexChanged", Nn), "inner" === N && Et.emit("innerLoaded", Er()), "function" == typeof Ct && Ct(Er()), G = !0;
      }

      function bn(e) {
        (0, jr.raf)(function () {
          Sn(dr(e));
        });
      }

      function Sn(e) {
        var t, n, r, a, o, i, s, l, u, c, d, f, v, h, p, m, y, g, b, S, C, E, j, L, w, k, A, _;

        G && ("outer" === N && Et.emit("outerResized", Er(e)), W = tn(), n = q, r = !1, z && (En(), (t = n !== q) && Et.emit("newBreakpointStart", Er(e))), i = Ne, s = wt, l = _t, u = De, c = We, d = Ue, f = Qe, v = Xe, h = Ye, p = $e, m = Ze, y = vt, t && (g = Te, b = Ve, S = Ge, C = ze, E = Je, T || (j = Pe, L = Oe)), De = on("arrowKeys"), We = on("controls"), Ue = on("nav"), Qe = on("touch"), ze = on("center"), Xe = on("mouseDrag"), Ye = on("autoplay"), $e = on("autoplayHoverPause"), Ze = on("autoplayResetOnVisibility"), t && (wt = on("disable"), Te = on("fixedWidth"), Ie = on("speed"), Ve = on("autoHeight"), Ge = on("controlsText"), Je = on("autoplayText"), Ke = on("autoplayTimeout"), T || (Oe = on("edgePadding"), Pe = on("gutter"))), Kt(wt), Be = rn(), D && !xe || wt || (Dn(), D || (br(), r = !0)), (Te || xe) && (st = Xn(), mt = ft()), (t || Te) && (Ne = on("items"), Re = on("slideBy"), (o = Ne !== i) && (Te || xe || (mt = ft()), Xt())), t && wt !== s && (wt ? kn : function () {
          if (!kt) return;
          if (et.disabled = !1, F.className += jt, Kn(), He) for (var e = at; e--;) {
            R && (0, Xr.showElement)(H[e]), (0, Xr.showElement)(H[ot - e - 1]);
          }
          if (!R) for (var t = vt, n = vt + V; t < n; t++) {
            var r = H[t],
                a = t < vt + Ne ? O : B;
            r.style.left = 100 * (t - vt) / Ne + "%", (0, Ir.addClass)(r, a);
          }
          Ln(), kt = !1;
        })(), At && (t || Te || xe) && (_t = Cn()) !== l && (_t ? (Jn(Yn($t(0))), wn()) : (function () {
          if (!Mt) return;
          Oe && T && (I.style.margin = "");
          if (at) for (var e = "tns-transparent", t = at; t--;) {
            R && (0, Fr.removeClass)(H[t], e), (0, Fr.removeClass)(H[ot - t - 1], e);
          }
          Ln(), Mt = !1;
        }(), r = !0)), Kt(wt || _t), Ye || ($e = Ze = !1), De !== u && (De ? (0, Zr.addEvents) : (0, ea.removeEvents))(x, Bt), We !== c && (We ? K ? (0, Xr.showElement)(K) : ($ && (0, Xr.showElement)($), Z && (0, Xr.showElement)(Z)) : K ? (0, Qr.hideElement)(K) : ($ && (0, Qr.hideElement)($), Z && (0, Qr.hideElement)(Z))), Ue !== d && (Ue ? ((0, Xr.showElement)(ae), Cr()) : (0, Qr.hideElement)(ae)), Qe !== f && (Qe ? (0, Zr.addEvents)(F, zt, M.preventScrollOnTouch) : (0, ea.removeEvents)(F, zt)), Xe !== v && (Xe ? (0, Zr.addEvents) : (0, ea.removeEvents))(F, Nt), Ye !== h && (Ye ? (me && (0, Xr.showElement)(me), Se || Ee || sr()) : (me && (0, Qr.hideElement)(me), Se && lr())), $e !== p && ($e ? (0, Zr.addEvents) : (0, ea.removeEvents))(F, Ot), Ze !== m && (Ze ? (0, Zr.addEvents) : (0, ea.removeEvents))(x, Pt), t ? (Te === g && ze === C || (r = !0), Ve !== b && (Ve || (I.style.height = "")), We && Ge !== S && ($.innerHTML = Ge[0], Z.innerHTML = Ge[1]), me && Je !== E && (w = Ye ? 1 : 0, A = (k = me.innerHTML).length - E[w].length, k.substring(A) === E[w] && (me.innerHTML = k.substring(0, A) + Je[w]))) : ze && (Te || xe) && (r = !0), (o || Te && !xe) && (se = Sr(), Cr()), (a = vt !== y) ? (Et.emit("indexChanged", Er()), r = !0) : o ? a || Nn() : (Te || xe) && (xn(), In(), An()), o && !R && function () {
          for (var e = vt + Math.min(V, Ne), t = ot; t--;) {
            var n = H[t];
            vt <= t && t < e ? ((0, Ir.addClass)(n, "tns-moving"), n.style.left = 100 * (t - vt) / Ne + "%", (0, Ir.addClass)(n, O), (0, Fr.removeClass)(n, B)) : n.style.left && ((n.style.left = "", Ir.addClass)(n, B), (0, Fr.removeClass)(n, O)), (0, Fr.removeClass)(n, P);
          }

          setTimeout(function () {
            (0, qr.forEach)(H, function (e) {
              (0, Fr.removeClass)(e, "tns-moving");
            });
          }, 300);
        }(), wt || _t || (t && !T && (Oe === L && Pe === j || (I.style.cssText = sn(Oe, Pe, Te, Ie, Ve)), D && (R && (F.style.width = ln(Te, Pe, Ne)), _ = un(Te, Pe, Ne) + cn(Pe), (0, Br.removeCSSRule)(et, (0, zr.getCssRulesLength)(et) - 1), (0, Pr.addCSSRule)(et, "#" + Lt + " > .tns-item", _, (0, zr.getCssRulesLength)(et)))), Ve && Bn(), r && (Kn(), ht = vt)), t && Et.emit("newBreakpointEnd", Er(e)));
      }

      function Cn() {
        if (!Te && !xe) return V <= (ze ? Ne - (Ne - 1) / 2 : Ne);
        var e = Te ? (Te + Pe) * V : _[V],
            t = Oe ? Be + 2 * Oe : Be + Pe;
        return ze && (t -= Te ? (Be - Te) / 2 : (Be - (_[vt + 1] - _[vt] - Pe)) / 2), e <= t;
      }

      function En() {
        for (var e in q = 0, z) {
          (e = parseInt(e)) <= W && (q = e);
        }
      }

      function jn() {
        !Ye && me && (0, Qr.hideElement)(me), !Ue && ae && (0, Qr.hideElement)(ae), We || (K ? (0, Qr.hideElement)(K) : ($ && (0, Qr.hideElement)($), Z && (0, Qr.hideElement)(Z)));
      }

      function Ln() {
        Ye && me && (0, Xr.showElement)(me), Ue && ae && (0, Xr.showElement)(ae), We && (K ? (0, Xr.showElement)(K) : ($ && (0, Xr.showElement)($), Z && (0, Xr.showElement)(Z)));
      }

      function wn() {
        if (!Mt) {
          if (Oe && (I.style.margin = "0px"), at) for (var e = "tns-transparent", t = at; t--;) {
            R && (0, Ir.addClass)(H[t], e), (0, Ir.addClass)(H[ot - t - 1], e);
          }
          jn(), Mt = !0;
        }
      }

      function kn() {
        if (!kt) {
          if (et.disabled = !0, F.className = F.className.replace(jt.substring(1), ""), (0, Gr.removeAttrs)(F, ["style"]), He) for (var e = at; e--;) {
            R && (0, Qr.hideElement)(H[e]), (0, Qr.hideElement)(H[ot - e - 1]);
          }
          if (D && R || (0, Gr.removeAttrs)(I, ["style"]), !R) for (var t = vt, n = vt + V; t < n; t++) {
            var r = H[t];
            (0, Gr.removeAttrs)(r, ["style"]), (0, Fr.removeClass)(r, O), (0, Fr.removeClass)(r, B);
          }
          jn(), kt = !0;
        }
      }

      function An() {
        var e = _n();

        Q.innerHTML !== e && (Q.innerHTML = e);
      }

      function _n() {
        var e = Mn(),
            t = e[0] + 1,
            n = e[1] + 1;
        return t === n ? t + "" : t + " to " + n;
      }

      function Mn(e) {
        null == e && (e = Yn());
        var n,
            r,
            t,
            a,
            o,
            i,
            s = vt;
        return ze || Oe ? (xe || Te) && (n = -(parseFloat(e) + Oe), r = n + Be + 2 * Oe) : xe && (n = _[vt], r = n + Be), xe ? _.forEach(function (e, t) {
          t < ot && ((ze || Oe) && e <= n + .5 && (s = t), .5 <= r - e && (a = t));
        }) : (a = Te ? (t = Te + Pe, ze || Oe ? (s = Math.floor(n / t), Math.ceil(r / t - 1)) : s + Math.ceil(Be / t) - 1) : ze || Oe ? (o = Ne - 1, a = ze ? (s -= o / 2, vt + o / 2) : vt + o, Oe && (s -= i = Oe * Ne / Be, a += i), s = Math.floor(s), Math.ceil(a)) : s + Ne - 1, s = Math.max(s, 0), a = Math.min(a, ot - 1)), [s, a];
      }

      function xn() {
        var e;
        tt && !wt && ((e = Mn()).push(nt), Pn.apply(null, e).forEach(function (e) {
          var t, n;
          (0, Dr.hasClass)(e, Gt) || ((t = {})[c] = function (e) {
            e.stopPropagation();
          }, (0, Zr.addEvents)(e, t), (0, Zr.addEvents)(e, Ut), e.src = (0, Vr.getAttr)(e, "data-src"), (n = (0, Vr.getAttr)(e, "data-srcset")) && (e.srcset = n), (0, Ir.addClass)(e, "loading"));
        }));
      }

      function Tn(e) {
        (0, Ir.addClass)(e, "loaded"), On(e);
      }

      function On(e) {
        (0, Ir.addClass)(e, Gt), (0, Fr.removeClass)(e, "loading"), (0, ea.removeEvents)(e, Ut);
      }

      function Pn(e, t, n) {
        var r = [];

        for (n = n || "img"; e <= t;) {
          (0, qr.forEach)(H[e].querySelectorAll(n), function (e) {
            r.push(e);
          }), e++;
        }

        return r;
      }

      function Bn() {
        var e = Pn.apply(null, Mn());
        (0, jr.raf)(function () {
          zn(e, qn);
        });
      }

      function zn(n, e) {
        return U ? e() : (n.forEach(function (e, t) {
          !tt && e.complete && On(e), (0, Dr.hasClass)(e, Gt) && n.splice(t, 1);
        }), n.length ? void (0, jr.raf)(function () {
          zn(n, e);
        }) : e());
      }

      function Nn() {
        xn(), In(), An(), Gn(), function () {
          {
            var e, t;
            Ue && (ce = 0 <= ue ? ue : en(), ue = -1, ce !== de && (e = ie[de], t = ie[ce], (0, Wr.setAttrs)(e, {
              tabindex: "-1",
              "aria-label": ve + (de + 1)
            }), (0, Fr.removeClass)(e, fe), (0, Wr.setAttrs)(t, {
              "aria-label": ve + (ce + 1) + he
            }), (0, Gr.removeAttrs)(t, "tabindex"), (0, Ir.addClass)(t, fe), de = ce));
          }
        }();
      }

      function Rn(e, t) {
        for (var n = [], r = e, a = Math.min(e + t, ot); r < a; r++) {
          n.push(H[r].offsetHeight);
        }

        return Math.max.apply(null, n);
      }

      function qn() {
        var e = Ve ? Rn(vt, Ne) : Rn(at, V),
            t = L || I;
        t.style.height !== e && (t.style.height = e + "px");
      }

      function Dn() {
        _ = [0];
        var n = D ? "left" : "top",
            r = D ? "right" : "bottom",
            a = H[0].getBoundingClientRect()[n];
        (0, qr.forEach)(H, function (e, t) {
          t && _.push(e.getBoundingClientRect()[n] - a), t === ot - 1 && _.push(e.getBoundingClientRect()[r] - a);
        });
      }

      function In() {
        var e = Mn(),
            n = e[0],
            r = e[1];
        (0, qr.forEach)(H, function (e, t) {
          n <= t && t <= r ? (0, Hr.hasAttr)(e, "aria-hidden") && ((0, Gr.removeAttrs)(e, ["aria-hidden", "tabindex"]), (0, Ir.addClass)(e, Vt)) : (0, Hr.hasAttr)(e, "aria-hidden") || ((0, Wr.setAttrs)(e, {
            "aria-hidden": "true",
            tabindex: "-1"
          }), (0, Fr.removeClass)(e, Vt));
        });
      }

      function Fn(e) {
        return e.nodeName.toLowerCase();
      }

      function Hn(e) {
        return "button" === Fn(e);
      }

      function Vn(e) {
        return "true" === e.getAttribute("aria-disabled");
      }

      function Wn(e, t, n) {
        e ? t.disabled = n : t.setAttribute("aria-disabled", n.toString());
      }

      function Gn() {
        var e, t, n, r;
        !We || Fe || He || (e = ne ? $.disabled : Vn($), t = re ? Z.disabled : Vn(Z), r = !Fe && mt <= vt, (n = vt <= pt) && !e && Wn(ne, $, !0), !n && e && Wn(ne, $, !1), r && !t && Wn(re, Z, !0), !r && t && Wn(re, Z, !1));
      }

      function Un(e, t) {
        b && (e.style[b] = t);
      }

      function Qn(e) {
        return null == e && (e = vt), xe ? (Be - (Oe ? Pe : 0) - (_[e + 1] - _[e] - Pe)) / 2 : Te ? (Be - Te) / 2 : (Ne - 1) / 2;
      }

      function Xn() {
        var e = Be + (Oe ? Pe : 0) - (Te ? (Te + Pe) * ot : _[ot]);
        return ze && !He && (e = Te ? -(Te + Pe) * (ot - 1) - Qn() : Qn(ot - 1) - _[ot - 1]), 0 < e && (e = 0), e;
      }

      function Yn(e) {
        var t, n;
        return null == e && (e = vt), D && !xe ? Te ? (t = -(Te + Pe) * e, ze && (t += Qn())) : (n = i ? ot : Ne, ze && (e -= Qn()), t = 100 * -e / n) : (t = -_[e], ze && xe && (t += Qn())), it && (t = Math.max(t, st)), t += !D || xe || Te ? "px" : "%";
      }

      function Kn(e) {
        Un(F, "0s"), Jn(e);
      }

      function Jn(e) {
        null == e && (e = Yn()), F.style[ut] = ct + e + dt;
      }

      function $n(e, t, n, r) {
        var a = e + Ne;
        He || (a = Math.min(a, ot));

        for (var o = e; o < a; o++) {
          var i = H[o];
          r || (i.style.left = 100 * (o - vt) / Ne + "%"), p && l && (i.style[l] = i.style[u] = p * (o - e) / 1e3 + "s"), (0, Fr.removeClass)(i, t), (0, Ir.addClass)(i, n), r && rt.push(i);
        }
      }

      function Zn(e, t) {
        lt && Xt(), vt === ht && !t || (Et.emit("indexChanged", Er()), Et.emit("transitionStart", Er()), Ve && Bn(), Se && e && 0 <= ["click", "keydown"].indexOf(e.type) && lr(), St = !0, Yt());
      }

      function er(e) {
        return e.toLowerCase().replace(/-/g, "");
      }

      function tr(e) {
        if (R || St) {
          if (Et.emit("transitionEnd", Er(e)), !R && 0 < rt.length) for (var t = 0; t < rt.length; t++) {
            var n = rt[t];
            n.style.left = "", u && l && (n.style[u] = "", n.style[l] = ""), (0, Fr.removeClass)(n, P), (0, Ir.addClass)(n, B);
          }
          var r;
          (!e || !R && e.target.parentNode === F || e.target === F && er(e.propertyName) === er(ut)) && (lt || (r = vt, Xt(), vt !== r && (Et.emit("indexChanged", Er()), Kn())), "inner" === N && Et.emit("innerLoaded", Er()), St = !1, ht = vt);
        }
      }

      function nr(e, t) {
        if (!_t) if ("prev" === e) rr(t, -1);else if ("next" === e) rr(t, 1);else {
          if (St) {
            if (yt) return;
            tr();
          }

          var n,
              r = Zt(),
              a = 0;
          "first" === e ? a = -r : "last" === e ? a = R ? V - Ne - r : V - 1 - r : ("number" != typeof e && (e = parseInt(e)), isNaN(e) || (t || (e = Math.max(0, Math.min(V - 1, e))), a = e - r)), !R && a && Math.abs(a) < Ne && (n = 0 < a ? 1 : -1, a += pt <= vt + a - V ? V * n : 2 * V * n * -1), vt += a, R && He && (vt < pt && (vt += V), mt < vt && (vt -= V)), Zt(vt) !== Zt(ht) && Zn(t);
        }
      }

      function rr(e, t) {
        if (St) {
          if (yt) return;
          tr();
        }

        var n;

        if (!t) {
          for (var r = fr(e = dr(e)); r !== K && [$, Z].indexOf(r) < 0;) {
            r = r.parentNode;
          }

          var a = [$, Z].indexOf(r);
          0 <= a && (n = !0, t = 0 === a ? -1 : 1);
        }

        if (Fe) {
          if (vt === pt && -1 === t) return void nr("last", e);
          if (vt === mt && 1 === t) return void nr("first", e);
        }

        t && (vt += Re * t, xe && (vt = Math.floor(vt)), Zn(n || e && "keydown" === e.type ? e : null));
      }

      function ar() {
        be = setInterval(function () {
          rr(null, pe);
        }, Ke), Se = !0;
      }

      function or() {
        clearInterval(be), Se = !1;
      }

      function ir(e, t) {
        (0, Wr.setAttrs)(me, {
          "data-action": e
        }), me.innerHTML = ge[0] + e + ge[1] + t;
      }

      function sr() {
        ar(), me && ir("stop", Je[1]);
      }

      function lr() {
        or(), me && ir("start", Je[0]);
      }

      function ur() {
        Ee = Se ? (lr(), !0) : (sr(), !1);
      }

      function cr(e) {
        e.focus();
      }

      function dr(e) {
        return vr(e = e || m.event) ? e.changedTouches[0] : e;
      }

      function fr(e) {
        return e.target || m.event.srcElement;
      }

      function vr(e) {
        return 0 <= e.type.indexOf("touch");
      }

      function hr(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = !1;
      }

      function pr() {
        return (0, Rr.getTouchDirection)((0, Nr.toDegree)(we.y - Le.y, we.x - Le.x), gt) === M.axis;
      }

      function mr(e) {
        if (St) {
          if (yt) return;
          tr();
        }

        Ye && Se && or(), Ae = !0, _e && ((0, Lr.caf)(_e), _e = null);
        var t = dr(e);
        Et.emit(vr(e) ? "touchStart" : "dragStart", Er(e)), !vr(e) && 0 <= ["img", "a"].indexOf(Fn(fr(e))) && hr(e), we.x = Le.x = t.clientX, we.y = Le.y = t.clientY, R && (ke = parseFloat(F.style[ut].replace(ct, "")), Un(F, "0s"));
      }

      function yr(e) {
        var t;
        Ae && (t = dr(e), we.x = t.clientX, we.y = t.clientY, R ? _e = _e || (0, jr.raf)(function () {
          !function e(t) {
            if (!bt) return void (Ae = !1);
            (0, Lr.caf)(_e);
            Ae && (_e = (0, jr.raf)(function () {
              e(t);
            }));
            "?" === bt && (bt = pr());

            if (bt) {
              !Qt && vr(t) && (Qt = !0);

              try {
                t.type && Et.emit(vr(t) ? "touchMove" : "dragMove", Er(t));
              } catch (e) {}

              var n = ke,
                  r = Me(we, Le);
              !D || Te || xe ? (n += r, n += "px") : (n += i ? r * Ne * 100 / ((Be + Pe) * ot) : 100 * r / (Be + Pe), n += "%"), F.style[ut] = ct + n + dt;
            }
          }(e);
        }) : ("?" === bt && (bt = pr()), bt && (Qt = !0)), ("boolean" != typeof e.cancelable || e.cancelable) && Qt && e.preventDefault());
      }

      function gr(r) {
        var e, a, n;
        Ae && (_e && ((0, Lr.caf)(_e), _e = null), R && Un(F, ""), Ae = !1, e = dr(r), we.x = e.clientX, we.y = e.clientY, a = Me(we, Le), Math.abs(a) && (vr(r) || (n = fr(r), (0, Zr.addEvents)(n, {
          click: function e(t) {
            hr(t), (0, ea.removeEvents)(n, {
              click: e
            });
          }
        })), R ? _e = (0, jr.raf)(function () {
          if (D && !xe) {
            var e = -a * Ne / (Be + Pe),
                e = 0 < a ? Math.floor(e) : Math.ceil(e);
            vt += e;
          } else {
            var t = -(ke + a);
            if (t <= 0) vt = pt;else if (t >= _[ot - 1]) vt = mt;else for (var n = 0; n < ot && t >= _[n];) {
              t > _[vt = n] && a < 0 && (vt += 1), n++;
            }
          }

          Zn(r, a), Et.emit(vr(r) ? "touchEnd" : "dragEnd", Er(r));
        }) : bt && rr(r, 0 < a ? -1 : 1))), "auto" === M.preventScrollOnTouch && (Qt = !1), gt && (bt = "?"), Ye && !Se && ar();
      }

      function br() {
        (L || I).style.height = _[vt + Ne] - _[vt] + "px";
      }

      function Sr() {
        var e = Te ? (Te + Pe) * V / Be : V / Ne;
        return Math.min(Math.ceil(e), V);
      }

      function Cr() {
        if (Ue && !Dt && se !== le) {
          var e = le,
              t = se,
              n = Xr.showElement;

          for (se < le && (e = se, t = le, n = Qr.hideElement); e < t;) {
            n(ie[e]), e++;
          }

          le = se;
        }
      }

      function Er(e) {
        return {
          container: F,
          slideItems: H,
          navContainer: ae,
          navItems: ie,
          controlsContainer: K,
          hasControls: Rt,
          prevButton: $,
          nextButton: Z,
          items: Ne,
          slideBy: Re,
          cloneCount: at,
          slideCount: V,
          slideCountNew: ot,
          index: vt,
          indexCached: ht,
          displayIndex: Jt(),
          navCurrentIndex: ce,
          navCurrentIndexCached: de,
          pages: se,
          pagesCached: le,
          sheet: et,
          isOn: G,
          event: e || {}
        };
      }

      f && console.warn("No slides found in", M.container);
    };
  }, {
    "./helpers/addCSSRule.js": 1,
    "./helpers/addClass.js": 2,
    "./helpers/addEvents.js": 3,
    "./helpers/arrayFromNodeList.js": 4,
    "./helpers/caf.js": 5,
    "./helpers/calc.js": 6,
    "./helpers/checkStorageValue.js": 7,
    "./helpers/createStyleSheet.js": 9,
    "./helpers/events.js": 11,
    "./helpers/extend.js": 12,
    "./helpers/forEach.js": 13,
    "./helpers/getAttr.js": 14,
    "./helpers/getCssRulesLength.js": 16,
    "./helpers/getEndProperty.js": 17,
    "./helpers/getSlideId.js": 18,
    "./helpers/getTouchDirection.js": 19,
    "./helpers/has3DTransforms.js": 20,
    "./helpers/hasAttr.js": 21,
    "./helpers/hasClass.js": 22,
    "./helpers/hideElement.js": 23,
    "./helpers/isVisible.js": 25,
    "./helpers/jsTransform.js": 26,
    "./helpers/mediaquerySupport.js": 27,
    "./helpers/percentageLayout.js": 29,
    "./helpers/raf.js": 30,
    "./helpers/removeAttrs.js": 31,
    "./helpers/removeCSSRule.js": 32,
    "./helpers/removeClass.js": 33,
    "./helpers/removeEvents.js": 34,
    "./helpers/setAttrs.js": 36,
    "./helpers/setLocalStorage.js": 38,
    "./helpers/showElement.js": 39,
    "./helpers/toDegree.js": 40,
    "./helpers/whichProperty.js": 41
  }],
  43: [function (e, t, n) {
    "use strict";

    function a(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n["default"] = void 0;

    var r = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), this.basketBtn = Array.from(document.querySelectorAll(".basket-btn")), this.basketBtnClose = document.querySelector(".basket_close"), this.basket = document.getElementById("product-basket"), this.basketBtn && this.basket && this.basketBtnClose && this.handler();
      }

      var t, n, r;
      return t = e, (n = [{
        key: "handler",
        value: function value() {
          var t = this;
          this.basketBtn.map(function (e) {
            e.addEventListener("click", function () {
              t.basket.classList.add("is-open");
            });
          }), this.basket.addEventListener("click", function (e) {
            e.target === t.basket && t.handlerClose();
          }), this.basketBtnClose.addEventListener("click", function () {
            t.handlerClose();
          });
        }
      }, {
        key: "handlerClose",
        value: function value() {
          this.basket.classList.remove("is-open");
        }
      }]) && a(t.prototype, n), r && a(t, r), e;
    }();

    n["default"] = r;
  }, {}],
  44: [function (e, t, n) {
    "use strict";

    function a(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n["default"] = void 0;

    var r = function () {
      function t() {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t);
        var e = Array.from(document.querySelectorAll(".product-color"));
        e && this.handler(e);
      }

      var e, n, r;
      return e = t, (n = [{
        key: "handler",
        value: function value(e) {
          e.map(function (e) {
            var t = Array.from(e.querySelectorAll(".product-color_item"));
            t.map(function (e) {
              e.addEventListener("click", function () {
                t.map(function (e) {
                  e.classList.remove("is-active");
                }), e.classList.add("is-active");
              });
            });
          });
        }
      }]) && a(e.prototype, n), r && a(e, r), t;
    }();

    n["default"] = r;
  }, {}],
  45: [function (e, t, n) {
    "use strict";

    function a(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n["default"] = void 0;

    var r = function () {
      function t() {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t);
        var e = Array.from(document.querySelectorAll(".product-count"));
        e && this.handler(e);
      }

      var e, n, r;
      return e = t, (n = [{
        key: "handler",
        value: function value(e) {
          e.map(function (e) {
            var t = e.querySelector(".product-count_sub"),
                n = e.querySelector(".product-count_add"),
                r = e.querySelector(".product-count_field");
            t.addEventListener("click", function () {
              1 !== Number(r.value) && (console.log(r.value), r.stepDown());
            }), n.addEventListener("click", function () {
              r.stepUp();
            });
          });
        }
      }]) && a(e.prototype, n), r && a(e, r), t;
    }();

    n["default"] = r;
  }, {}],
  46: [function (e, t, n) {
    "use strict";

    function a(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n["default"] = void 0;

    var r = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), this.productCardOrderBtns = Array.from(document.querySelectorAll(".product-card_order")), this.productCardOrderBtns && this.handler();
      }

      var t, n, r;
      return t = e, (n = [{
        key: "handler",
        value: function value() {
          var t = this;
          this.productCardOrderBtns.map(function (e) {
            var t = e.closest(".product-card_action");
            e.addEventListener("click", function () {
              t.classList.add("show-size");
            });
          }), document.addEventListener("click", function (e) {
            e.target.closest(".product-card_order") || t.productCardOrderBtns.map(function (e) {
              e.closest(".product-card_action").classList.remove("show-size");
            });
          });
        }
      }]) && a(t.prototype, n), r && a(t, r), e;
    }();

    n["default"] = r;
  }, {}],
  47: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n["default"] = void 0;
    var a = e("tiny-slider/src/tiny-slider");

    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    var r = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e);
        Array.from(document.querySelectorAll(".product-gallery"));
        document.getElementById("product-gallery") && this.handlerMobile();
      }

      var t, n, r;
      return t = e, (n = [{
        key: "handler",
        value: function value(e) {
          e.map(function (e) {
            var n = e.querySelector(".product-gallery_select__img"),
                r = Array.from(e.querySelectorAll(".product-gallery_item"));
            r.map(function (t) {
              t.addEventListener("click", function () {
                var e = t.querySelector("img").getAttribute("src");
                r.map(function (e) {
                  e.classList.remove("is-active");
                }), t.classList.add("is-active"), n.setAttribute("src", e);
              });
            });
          });
        }
      }, {
        key: "handlerMobile",
        value: function value() {
          var e;
          window.innerWidth < 576 && (e = (0, a.tns)({
            container: "#product-gallery",
            items: 1,
            mouseDrag: !0,
            nav: !0,
            controls: !1,
            swipeAngle: 30,
            speed: 400,
            axis: "horizontal"
          })), window.addEventListener("resize", function () {
            575 < window.innerWidth ? e && e.version && e.destroy() : e && e.version || (e = (0, a.tns)({
              container: "#product-gallery",
              items: 1,
              mouseDrag: !0,
              nav: !0,
              controls: !1,
              swipeAngle: !1,
              speed: 400
            }));
          });
        }
      }]) && o(t.prototype, n), r && o(t, r), e;
    }();

    n["default"] = r;
  }, {
    "tiny-slider/src/tiny-slider": 42
  }],
  48: [function (e, t, n) {
    "use strict";

    function a(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n["default"] = void 0;

    var r = function () {
      function t() {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t);
        var e = Array.from(document.querySelectorAll(".product-size_item"));
        e && this.handler(e);
      }

      var e, n, r;
      return e = t, (n = [{
        key: "handler",
        value: function value(t) {
          t.map(function (e) {
            e.classList.contains("is-disabled") || e.addEventListener("click", function () {
              t.map(function (e) {
                e.classList.remove("is-active");
              }), e.classList.add("is-active");
            });
          });
        }
      }]) && a(e.prototype, n), r && a(e, r), t;
    }();

    n["default"] = r;
  }, {}],
  49: [function (e, t, n) {
    "use strict";

    function c(e, t) {
      var _n2;

      if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (_n2 = function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return l(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(e);
          if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t);
        }(e)) || t && e && "number" == typeof e.length) {
          _n2 && (e = _n2);

          var r = 0,
              a = function a() {};

          return {
            s: a,
            n: function n() {
              return r >= e.length ? {
                done: !0
              } : {
                done: !1,
                value: e[r++]
              };
            },
            e: function e(_e2) {
              throw _e2;
            },
            f: a
          };
        }

        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }

      var o,
          i = !0,
          s = !1;
      return {
        s: function s() {
          _n2 = e[Symbol.iterator]();
        },
        n: function n() {
          var e = _n2.next();

          return i = e.done, e;
        },
        e: function e(_e3) {
          s = !0, o = _e3;
        },
        f: function f() {
          try {
            i || null == _n2["return"] || _n2["return"]();
          } finally {
            if (s) throw o;
          }
        }
      };
    }

    function l(e, t) {
      (null == t || t > e.length) && (t = e.length);

      for (var n = 0, r = new Array(t); n < t; n++) {
        r[n] = e[n];
      }

      return r;
    }

    function a(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n["default"] = void 0;

    var r = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), this.doc = document, this.body = this.doc.querySelector("body"), this.selectors = this.doc.querySelectorAll(".selector"), this.selectorVals = this.doc.querySelectorAll(".selector_val"), this.selectorItems = this.doc.querySelectorAll(".selector_list li"), this.selectorSearchFiles = this.doc.querySelectorAll(".selector_search"), this.selectors && this.handlerPre(this.selectors), this.selectorVals && this.handlerSelectClick(this.selectorVals), this.selectorItems && this.handlerSelectItem(this.selectorItems), this.selectorSearchFiles && this.handlerSearch(this.selectorSearchFiles), this.body && this.handlerCloseMissClick(this.body);
      }

      var t, n, r;
      return t = e, (n = [{
        key: "handlerCloseMissClick",
        value: function value(e) {
          e.addEventListener("click", function (n) {
            Array.from(document.querySelectorAll(".selector.show-list")).map(function (e) {
              var t = e.querySelector(".selector_val");
              n.target !== e && n.target !== t && e.classList.remove("show-list");
            });
          });
        }
      }, {
        key: "handlerPre",
        value: function value(e) {
          var u,
              t = c(e);

          try {
            for (t.s(); !(u = t.n()).done;) {
              !function () {
                var e,
                    t = u.value,
                    n = t.querySelector(".selector_input"),
                    r = n.value,
                    a = t.querySelectorAll(".selector_drop li"),
                    o = t.querySelector(".selector_val");
                n.addEventListener("change", function () {
                  n.value ? t.classList.add("no-empty") : t.classList.remove("no-empty");
                });
                var i,
                    s = c(a);

                try {
                  for (s.s(); !(i = s.n()).done;) {
                    var l = i.value;
                    l.classList.remove("is-active"), l.getAttribute("data-val") === r && (e = l.innerHTML, l.classList.add("is-active"), o.innerHTML = e, o.setAttribute("data-val", r));
                  }
                } catch (e) {
                  s.e(e);
                } finally {
                  s.f();
                }
              }();
            }
          } catch (e) {
            t.e(e);
          } finally {
            t.f();
          }
        }
      }, {
        key: "handlerSelectClick",
        value: function value(e) {
          var t,
              n = c(e);

          try {
            for (n.s(); !(t = n.n()).done;) {
              !function () {
                var e = t.value;
                e.addEventListener("click", function () {
                  e.closest(".selector").classList.toggle("show-list");
                });
              }();
            }
          } catch (e) {
            n.e(e);
          } finally {
            n.f();
          }
        }
      }, {
        key: "handlerSelectItem",
        value: function value(s) {
          var e,
              t = c(s);

          try {
            for (t.s(); !(e = t.n()).done;) {
              !function () {
                var i = e.value;
                i.addEventListener("click", function () {
                  var e = i.getAttribute("data-val"),
                      t = i.closest(".selector").querySelector(".selector_input"),
                      n = i.closest(".selector").querySelector(".selector_val"),
                      r = i.innerHTML;
                  t.dispatchEvent(new Event("change")), t.value = e, i.closest(".selector").classList.remove("show-list");
                  var a,
                      o = c(s);

                  try {
                    for (o.s(); !(a = o.n()).done;) {
                      a.value.classList.remove("is-active");
                    }
                  } catch (e) {
                    o.e(e);
                  } finally {
                    o.f();
                  }

                  n.innerHTML = r, n.setAttribute("data-val", e);
                });
              }();
            }
          } catch (e) {
            t.e(e);
          } finally {
            t.f();
          }
        }
      }, {
        key: "handlerSearch",
        value: function value(e) {
          var t,
              n = c(e);

          try {
            for (n.s(); !(t = n.n()).done;) {
              !function () {
                var l = t.value;
                l.addEventListener("input", function () {
                  var e = l.closest(".selector"),
                      t = l.value.toLowerCase(),
                      n = e.querySelectorAll(".selector_list li");

                  if (t.length) {
                    var r,
                        a = c(n);

                    try {
                      for (a.s(); !(r = a.n()).done;) {
                        var o = r.value;
                        0 === o.innerHTML.toLowerCase().indexOf(t) ? o.classList.remove("is-hidden") : o.classList.add("is-hidden");
                      }
                    } catch (e) {
                      a.e(e);
                    } finally {
                      a.f();
                    }
                  } else {
                    var i,
                        s = c(n);

                    try {
                      for (s.s(); !(i = s.n()).done;) {
                        i.value.classList.remove("is-hidden");
                      }
                    } catch (e) {
                      s.e(e);
                    } finally {
                      s.f();
                    }
                  }
                });
              }();
            }
          } catch (e) {
            n.e(e);
          } finally {
            n.f();
          }
        }
      }]) && a(t.prototype, n), r && a(t, r), e;
    }();

    n["default"] = r;
  }, {}],
  50: [function (e, t, n) {
    "use strict";

    function a(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n["default"] = void 0;

    var r = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), this.tableSizeLink = Array.from(document.querySelectorAll(".table-size-link")), this.tableSize = document.getElementById("product-table-size"), this.tableSizeCloseBtn = this.tableSize.querySelector(".table-size_close"), this.tableSizeTabLinks = Array.from(this.tableSize.querySelectorAll(".table-size_type__item")), this.tableSizeTabBlocks = Array.from(this.tableSize.querySelectorAll(".table-size_block")), this.tableSizeLink && this.tableSize && this.tableSizeCloseBtn && this.tableSizeTabLinks && this.handler();
      }

      var t, n, r;
      return t = e, (n = [{
        key: "handler",
        value: function value() {
          var n = this;
          this.tableSizeLink.map(function (e) {
            e.addEventListener("click", function () {
              n.tableSize.classList.add("is-open");
            });
          }), this.tableSizeCloseBtn.addEventListener("click", function () {
            n.handlerCloseTableSize();
          }), this.tableSize.addEventListener("click", function (e) {
            e.target === n.tableSize && n.handlerCloseTableSize();
          }), this.tableSizeTabLinks.map(function (t) {
            t.addEventListener("click", function () {
              var e;
              t.classList.contains("is-active") || (e = document.getElementById(t.getAttribute("data-type")), n.tableSizeTabLinks.map(function (e) {
                e.classList.remove("is-active");
              }), n.tableSizeTabBlocks.map(function (e) {
                e.classList.remove("is-active");
              }), t.classList.add("is-active"), e.classList.add("is-active"));
            });
          });
        }
      }, {
        key: "handlerCloseTableSize",
        value: function value() {
          this.tableSize.classList.remove("is-open");
        }
      }]) && a(t.prototype, n), r && a(t, r), e;
    }();

    n["default"] = r;
  }, {}],
  51: [function (e, t, n) {
    "use strict";

    function a(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n["default"] = void 0;

    var r = function () {
      function n() {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, n);
        var e = Array.from(document.querySelectorAll(".product-tab_links .product-tab_link")),
            t = Array.from(document.querySelectorAll(".product-tab_block .product-tab_link"));
        e && this.handlerTab(e), t && this.handlerMobileTab(t), e && t && this.handlerResize(e, t);
      }

      var e, t, r;
      return e = n, (t = [{
        key: "handlerTab",
        value: function value(o) {
          var i = Array.from(document.querySelectorAll(".product-tab_item"));
          o.map(function (a) {
            a.addEventListener("click", function () {
              var n = a.getAttribute("data-tab"),
                  e = document.getElementById(n),
                  t = a.closest(".product-tab"),
                  r = Array.from(t.querySelectorAll(".product-tab_block"));
              o.map(function (e) {
                e.classList.remove("is-active");
              }), i.map(function (e) {
                e.classList.remove("is-active");
              }), r.map(function (e) {
                var t = e.querySelector(".product-tab_link");
                t.getAttribute("data-tab") === n && t.classList.add("is-active");
              }), a.classList.add("is-active"), e.classList.add("is-active");
            });
          });
        }
      }, {
        key: "handlerMobileTab",
        value: function value(e) {
          Array.from(document.querySelectorAll(".product-tab_item"));
          e.map(function (r) {
            r.addEventListener("click", function () {
              var t = r.getAttribute("data-tab"),
                  e = document.getElementById(t),
                  n = r.closest(".product-tab");
              Array.from(n.querySelectorAll(".product-tab_links .product-tab_link")).map(function (e) {
                e.getAttribute("data-tab") === t && e.classList.toggle("is-active");
              }), r.classList.toggle("is-active"), e.classList.toggle("is-active");
            });
          });
        }
      }, {
        key: "handlerResize",
        value: function value(n, r) {
          var a = document.querySelectorAll(".product-tab_links .product-tab_link"),
              o = document.querySelectorAll(".product-tab_block .product-tab_link");
          window.addEventListener("resize", function () {
            var e, t;
            (0 < a.length || 0 < o.length) && (575 < window.innerWidth ? (e = n[0].getAttribute("data-tab"), t = document.getElementById(e), n[0].classList.add("is-active"), t.classList.add("is-active")) : r.map(function (e) {
              var t = e.getAttribute("data-tab"),
                  n = document.getElementById(t);
              e.closest(".product-tab");
              e.classList.remove("is-active"), n.classList.remove("is-active");
            }));
          });
        }
      }]) && a(e.prototype, t), r && a(e, r), n;
    }();

    n["default"] = r;
  }, {}],
  52: [function (e, t, n) {
    "use strict";

    var r = f(e("./modules/ProductSize")),
        a = f(e("./modules/Basket")),
        o = f(e("./modules/TableSize")),
        i = f(e("./modules/ProductCardAdd")),
        s = f(e("./modules/productTab")),
        l = f(e("./modules/Selector")),
        u = f(e("./modules/ColorChange")),
        c = f(e("./modules/CountProduct")),
        d = f(e("./modules/ProductGallery"));

    function f(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    new r["default"](), new a["default"](), new o["default"](), new i["default"](), new s["default"](), new l["default"](), new u["default"](), new c["default"](), new d["default"]();
  }, {
    "./modules/Basket": 43,
    "./modules/ColorChange": 44,
    "./modules/CountProduct": 45,
    "./modules/ProductCardAdd": 46,
    "./modules/ProductGallery": 47,
    "./modules/ProductSize": 48,
    "./modules/Selector": 49,
    "./modules/TableSize": 50,
    "./modules/productTab": 51
  }]
}, {}, [52]); // libs 
// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),position(digi),when(breakpoint)"
// e.x. data-da="item,2,992"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle

"use strict";

(function () {
  var originalPositions = [];
  var daElements = document.querySelectorAll('[data-da]');
  var daElementsArray = [];
  var daMatchMedia = []; //Заполняем массивы

  if (daElements.length > 0) {
    var number = 0;

    for (var index = 0; index < daElements.length; index++) {
      var daElement = daElements[index];
      var daMove = daElement.getAttribute('data-da');

      if (daMove != '') {
        var daArray = daMove.split(',');
        var daPlace = daArray[1] ? daArray[1].trim() : 'last';
        var daBreakpoint = daArray[2] ? daArray[2].trim() : '767';
        var daType = daArray[3] === 'min' ? daArray[3].trim() : 'max';
        var daDestination = document.querySelector('.' + daArray[0].trim());

        if (daArray.length > 0 && daDestination) {
          daElement.setAttribute('data-da-index', number); //Заполняем массив первоначальных позиций

          originalPositions[number] = {
            "parent": daElement.parentNode,
            "index": indexInParent(daElement)
          }; //Заполняем массив элементов 

          daElementsArray[number] = {
            "element": daElement,
            "destination": document.querySelector('.' + daArray[0].trim()),
            "place": daPlace,
            "breakpoint": daBreakpoint,
            "type": daType
          };
          number++;
        }
      }
    }

    dynamicAdaptSort(daElementsArray); //Создаем события в точке брейкпоинта

    for (var _index = 0; _index < daElementsArray.length; _index++) {
      var el = daElementsArray[_index];
      var _daBreakpoint = el.breakpoint;
      var _daType = el.type;
      daMatchMedia.push(window.matchMedia("(" + _daType + "-width: " + _daBreakpoint + "px)"));

      daMatchMedia[_index].addListener(dynamicAdapt);
    }
  } //Основная функция


  function dynamicAdapt(e) {
    for (var _index2 = 0; _index2 < daElementsArray.length; _index2++) {
      var _el = daElementsArray[_index2];
      var _daElement = _el.element;
      var _daDestination = _el.destination;
      var _daPlace = _el.place;
      var _daBreakpoint2 = _el.breakpoint;
      var daClassname = "_dynamic_adapt_" + _daBreakpoint2;

      if (daMatchMedia[_index2].matches) {
        //Перебрасываем элементы
        if (!_daElement.classList.contains(daClassname)) {
          var actualIndex = indexOfElements(_daDestination)[_daPlace];

          if (_daPlace === 'first') {
            actualIndex = indexOfElements(_daDestination)[0];
          } else if (_daPlace === 'last') {
            actualIndex = indexOfElements(_daDestination)[indexOfElements(_daDestination).length];
          }

          _daDestination.insertBefore(_daElement, _daDestination.children[actualIndex]);

          _daElement.classList.add(daClassname);
        }
      } else {
        //Возвращаем на место
        if (_daElement.classList.contains(daClassname)) {
          dynamicAdaptBack(_daElement);

          _daElement.classList.remove(daClassname);
        }
      }
    }

    customAdapt();
  } //Вызов основной функции


  dynamicAdapt(); //Функция возврата на место

  function dynamicAdaptBack(el) {
    var daIndex = el.getAttribute('data-da-index');
    var originalPlace = originalPositions[daIndex];
    var parentPlace = originalPlace['parent'];
    var indexPlace = originalPlace['index'];
    var actualIndex = indexOfElements(parentPlace, true)[indexPlace];
    parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
  } //Функция получения индекса внутри родителя


  function indexInParent(el) {
    var children = Array.prototype.slice.call(el.parentNode.children);
    return children.indexOf(el);
  } //Функция получения массива индексов элементов внутри родителя 


  function indexOfElements(parent, back) {
    var children = parent.children;
    var childrenArray = [];

    for (var i = 0; i < children.length; i++) {
      var childrenElement = children[i];

      if (back) {
        childrenArray.push(i);
      } else {
        //Исключая перенесенный элемент
        if (childrenElement.getAttribute('data-da') == null) {
          childrenArray.push(i);
        }
      }
    }

    return childrenArray;
  } //Сортировка объекта


  function dynamicAdaptSort(arr) {
    arr.sort(function (a, b) {
      if (a.breakpoint > b.breakpoint) {
        return -1;
      } else {
        return 1;
      }
    });
    arr.sort(function (a, b) {
      if (a.place > b.place) {
        return 1;
      } else {
        return -1;
      }
    });
  } //Дополнительные сценарии адаптации


  function customAdapt() {//const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  }
})();

!function (i) {
  "use strict";

  "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery);
}(function (i) {
  "use strict";

  var e = window.Slick || {};
  (e = function () {
    var e = 0;
    return function (t, o) {
      var s,
          n = this;
      n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: i(t),
        appendDots: i(t),
        arrows: !0,
        asNavFor: null,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function customPaging(e, t) {
          return i('<button type="button" />').text(t + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: .35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3
      }, n.initials = {
        animating: !1,
        dragging: !1,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        scrolling: !1,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: !1,
        slideOffset: 0,
        swipeLeft: null,
        swiping: !1,
        $list: null,
        touchObject: {},
        transformsEnabled: !1,
        unslicked: !1
      }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(t).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = e++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0);
    };
  }()).prototype.activateADA = function () {
    this.$slideTrack.find(".slick-active").attr({
      "aria-hidden": "false"
    }).find("a, input, button, select").attr({
      tabindex: "0"
    });
  }, e.prototype.addSlide = e.prototype.slickAdd = function (e, t, o) {
    var s = this;
    if ("boolean" == typeof t) o = t, t = null;else if (t < 0 || t >= s.slideCount) return !1;
    s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function (e, t) {
      i(t).attr("data-slick-index", e);
    }), s.$slidesCache = s.$slides, s.reinit();
  }, e.prototype.animateHeight = function () {
    var i = this;

    if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
      var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
      i.$list.animate({
        height: e
      }, i.options.speed);
    }
  }, e.prototype.animateSlide = function (e, t) {
    var o = {},
        s = this;
    s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
      left: e
    }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
      top: e
    }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), i({
      animStart: s.currentLeft
    }).animate({
      animStart: e
    }, {
      duration: s.options.speed,
      easing: s.options.easing,
      step: function step(i) {
        i = Math.ceil(i), !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o));
      },
      complete: function complete() {
        t && t.call();
      }
    })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function () {
      s.disableTransition(), t.call();
    }, s.options.speed));
  }, e.prototype.getNavTarget = function () {
    var e = this,
        t = e.options.asNavFor;
    return t && null !== t && (t = i(t).not(e.$slider)), t;
  }, e.prototype.asNavFor = function (e) {
    var t = this.getNavTarget();
    null !== t && "object" == _typeof(t) && t.each(function () {
      var t = i(this).slick("getSlick");
      t.unslicked || t.slideHandler(e, !0);
    });
  }, e.prototype.applyTransition = function (i) {
    var e = this,
        t = {};
    !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
  }, e.prototype.autoPlay = function () {
    var i = this;
    i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed));
  }, e.prototype.autoPlayClear = function () {
    var i = this;
    i.autoPlayTimer && clearInterval(i.autoPlayTimer);
  }, e.prototype.autoPlayIterator = function () {
    var i = this,
        e = i.currentSlide + i.options.slidesToScroll;
    i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e));
  }, e.prototype.buildArrows = function () {
    var e = this;
    !0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
      "aria-disabled": "true",
      tabindex: "-1"
    }));
  }, e.prototype.buildDots = function () {
    var e,
        t,
        o = this;

    if (!0 === o.options.dots) {
      for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) {
        t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
      }

      o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active");
    }
  }, e.prototype.buildOut = function () {
    var e = this;
    e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, t) {
      i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "");
    }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable");
  }, e.prototype.buildRows = function () {
    var i,
        e,
        t,
        o,
        s,
        n,
        r,
        l = this;

    if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) {
      for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
        var d = document.createElement("div");

        for (e = 0; e < l.options.rows; e++) {
          var a = document.createElement("div");

          for (t = 0; t < l.options.slidesPerRow; t++) {
            var c = i * r + (e * l.options.slidesPerRow + t);
            n.get(c) && a.appendChild(n.get(c));
          }

          d.appendChild(a);
        }

        o.appendChild(d);
      }

      l.$slider.empty().append(o), l.$slider.children().children().children().css({
        width: 100 / l.options.slidesPerRow + "%",
        display: "inline-block"
      });
    }
  }, e.prototype.checkResponsive = function (e, t) {
    var o,
        s,
        n,
        r = this,
        l = !1,
        d = r.$slider.width(),
        a = window.innerWidth || i(window).width();

    if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
      s = null;

      for (o in r.breakpoints) {
        r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
      }

      null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || !1 === l || r.$slider.trigger("breakpoint", [r, l]);
    }
  }, e.prototype.changeSlide = function (e, t) {
    var o,
        s,
        n,
        r = this,
        l = i(e.currentTarget);

    switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
      case "previous":
        s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
        break;

      case "next":
        s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
        break;

      case "index":
        var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
        r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
        break;

      default:
        return;
    }
  }, e.prototype.checkNavigable = function (i) {
    var e, t;
    if (e = this.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1];else for (var o in e) {
      if (i < e[o]) {
        i = t;
        break;
      }

      t = e[o];
    }
    return i;
  }, e.prototype.cleanUpEvents = function () {
    var e = this;
    e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
  }, e.prototype.cleanUpSlideEvents = function () {
    var e = this;
    e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
  }, e.prototype.cleanUpRows = function () {
    var i,
        e = this;
    e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(i));
  }, e.prototype.clickHandler = function (i) {
    !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
  }, e.prototype.destroy = function (e) {
    var t = this;
    t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
      i(this).attr("style", i(this).data("originalStyling"));
    }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t]);
  }, e.prototype.disableTransition = function (i) {
    var e = this,
        t = {};
    t[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
  }, e.prototype.fadeSlide = function (i, e) {
    var t = this;
    !1 === t.cssTransitions ? (t.$slides.eq(i).css({
      zIndex: t.options.zIndex
    }), t.$slides.eq(i).animate({
      opacity: 1
    }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
      opacity: 1,
      zIndex: t.options.zIndex
    }), e && setTimeout(function () {
      t.disableTransition(i), e.call();
    }, t.options.speed));
  }, e.prototype.fadeSlideOut = function (i) {
    var e = this;
    !1 === e.cssTransitions ? e.$slides.eq(i).animate({
      opacity: 0,
      zIndex: e.options.zIndex - 2
    }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
      opacity: 0,
      zIndex: e.options.zIndex - 2
    }));
  }, e.prototype.filterSlides = e.prototype.slickFilter = function (i) {
    var e = this;
    null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit());
  }, e.prototype.focusHandler = function () {
    var e = this;
    e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (t) {
      t.stopImmediatePropagation();
      var o = i(this);
      setTimeout(function () {
        e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay());
      }, 0);
    });
  }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
    return this.currentSlide;
  }, e.prototype.getDotCount = function () {
    var i = this,
        e = 0,
        t = 0,
        o = 0;
    if (!0 === i.options.infinite) {
      if (i.slideCount <= i.options.slidesToShow) ++o;else for (; e < i.slideCount;) {
        ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
      }
    } else if (!0 === i.options.centerMode) o = i.slideCount;else if (i.options.asNavFor) for (; e < i.slideCount;) {
      ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
    } else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
    return o - 1;
  }, e.prototype.getLeft = function (i) {
    var e,
        t,
        o,
        s,
        n = this,
        r = 0;
    return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e;
  }, e.prototype.getOption = e.prototype.slickGetOption = function (i) {
    return this.options[i];
  }, e.prototype.getNavigableIndexes = function () {
    var i,
        e = this,
        t = 0,
        o = 0,
        s = [];

    for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); t < i;) {
      s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
    }

    return s;
  }, e.prototype.getSlick = function () {
    return this;
  }, e.prototype.getSlideCount = function () {
    var e,
        t,
        o = this;
    return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
      if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return e = n, !1;
    }), Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll;
  }, e.prototype.goTo = e.prototype.slickGoTo = function (i, e) {
    this.changeSlide({
      data: {
        message: "index",
        index: parseInt(i)
      }
    }, e);
  }, e.prototype.init = function (e) {
    var t = this;
    i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay());
  }, e.prototype.initADA = function () {
    var e = this,
        t = Math.ceil(e.slideCount / e.options.slidesToShow),
        o = e.getNavigableIndexes().filter(function (i) {
      return i >= 0 && i < e.slideCount;
    });
    e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
      "aria-hidden": "true",
      tabindex: "-1"
    }).find("a, input, button, select").attr({
      tabindex: "-1"
    }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (t) {
      var s = o.indexOf(t);
      i(this).attr({
        role: "tabpanel",
        id: "slick-slide" + e.instanceUid + t,
        tabindex: -1
      }), -1 !== s && i(this).attr({
        "aria-describedby": "slick-slide-control" + e.instanceUid + s
      });
    }), e.$dots.attr("role", "tablist").find("li").each(function (s) {
      var n = o[s];
      i(this).attr({
        role: "presentation"
      }), i(this).find("button").first().attr({
        role: "tab",
        id: "slick-slide-control" + e.instanceUid + s,
        "aria-controls": "slick-slide" + e.instanceUid + n,
        "aria-label": s + 1 + " of " + t,
        "aria-selected": null,
        tabindex: "-1"
      });
    }).eq(e.currentSlide).find("button").attr({
      "aria-selected": "true",
      tabindex: "0"
    }).end());

    for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) {
      e.$slides.eq(s).attr("tabindex", 0);
    }

    e.activateADA();
  }, e.prototype.initArrowEvents = function () {
    var i = this;
    !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
      message: "previous"
    }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {
      message: "next"
    }, i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)));
  }, e.prototype.initDotEvents = function () {
    var e = this;
    !0 === e.options.dots && (i("li", e.$dots).on("click.slick", {
      message: "index"
    }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
  }, e.prototype.initSlideEvents = function () {
    var e = this;
    e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
  }, e.prototype.initializeEvents = function () {
    var e = this;
    e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
      action: "start"
    }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
      action: "move"
    }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
      action: "end"
    }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
      action: "end"
    }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition);
  }, e.prototype.initUI = function () {
    var i = this;
    !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show();
  }, e.prototype.keyHandler = function (i) {
    var e = this;
    i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({
      data: {
        message: !0 === e.options.rtl ? "next" : "previous"
      }
    }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({
      data: {
        message: !0 === e.options.rtl ? "previous" : "next"
      }
    }));
  }, e.prototype.lazyLoad = function () {
    function e(e) {
      i("img[data-lazy]", e).each(function () {
        var e = i(this),
            t = i(this).attr("data-lazy"),
            o = i(this).attr("data-srcset"),
            s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
            r = document.createElement("img");
        r.onload = function () {
          e.animate({
            opacity: 0
          }, 100, function () {
            o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({
              opacity: 1
            }, 200, function () {
              e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
            }), n.$slider.trigger("lazyLoaded", [n, e, t]);
          });
        }, r.onerror = function () {
          e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t]);
        }, r.src = t;
      });
    }

    var t,
        o,
        s,
        n = this;
    if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(o + n.options.slidesToShow), !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)), t = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad) for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++) {
      r < 0 && (r = n.slideCount - 1), t = (t = t.add(d.eq(r))).add(d.eq(l)), r--, l++;
    }
    e(t), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow));
  }, e.prototype.loadSlider = function () {
    var i = this;
    i.setPosition(), i.$slideTrack.css({
      opacity: 1
    }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
  }, e.prototype.next = e.prototype.slickNext = function () {
    this.changeSlide({
      data: {
        message: "next"
      }
    });
  }, e.prototype.orientationChange = function () {
    var i = this;
    i.checkResponsive(), i.setPosition();
  }, e.prototype.pause = e.prototype.slickPause = function () {
    var i = this;
    i.autoPlayClear(), i.paused = !0;
  }, e.prototype.play = e.prototype.slickPlay = function () {
    var i = this;
    i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1;
  }, e.prototype.postSlide = function (e) {
    var t = this;
    t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
  }, e.prototype.prev = e.prototype.slickPrev = function () {
    this.changeSlide({
      data: {
        message: "previous"
      }
    });
  }, e.prototype.preventDefault = function (i) {
    i.preventDefault();
  }, e.prototype.progressiveLazyLoad = function (e) {
    e = e || 1;
    var t,
        o,
        s,
        n,
        r,
        l = this,
        d = i("img[data-lazy]", l.$slider);
    d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function () {
      s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad();
    }, r.onerror = function () {
      e < 3 ? setTimeout(function () {
        l.progressiveLazyLoad(e + 1);
      }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad());
    }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l]);
  }, e.prototype.refresh = function (e) {
    var t,
        o,
        s = this;
    o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, {
      currentSlide: t
    }), s.init(), e || s.changeSlide({
      data: {
        message: "index",
        index: t
      }
    }, !1);
  }, e.prototype.registerBreakpoints = function () {
    var e,
        t,
        o,
        s = this,
        n = s.options.responsive || null;

    if ("array" === i.type(n) && n.length) {
      s.respondTo = s.options.respondTo || "window";

      for (e in n) {
        if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
          for (t = n[e].breakpoint; o >= 0;) {
            s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
          }

          s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings;
        }
      }

      s.breakpoints.sort(function (i, e) {
        return s.options.mobileFirst ? i - e : e - i;
      });
    }
  }, e.prototype.reinit = function () {
    var e = this;
    e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e]);
  }, e.prototype.resize = function () {
    var e = this;
    i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
      e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition();
    }, 50));
  }, e.prototype.removeSlide = e.prototype.slickRemove = function (i, e, t) {
    var o = this;
    if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i, o.slideCount < 1 || i < 0 || i > o.slideCount - 1) return !1;
    o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit();
  }, e.prototype.setCSS = function (i) {
    var e,
        t,
        o = this,
        s = {};
    !0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)));
  }, e.prototype.setDimensions = function () {
    var i = this;
    !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({
      padding: "0px " + i.options.centerPadding
    }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({
      padding: i.options.centerPadding + " 0px"
    })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
    var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
    !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
  }, e.prototype.setFade = function () {
    var e,
        t = this;
    t.$slides.each(function (o, s) {
      e = t.slideWidth * o * -1, !0 === t.options.rtl ? i(s).css({
        position: "relative",
        right: e,
        top: 0,
        zIndex: t.options.zIndex - 2,
        opacity: 0
      }) : i(s).css({
        position: "relative",
        left: e,
        top: 0,
        zIndex: t.options.zIndex - 2,
        opacity: 0
      });
    }), t.$slides.eq(t.currentSlide).css({
      zIndex: t.options.zIndex - 1,
      opacity: 1
    });
  }, e.prototype.setHeight = function () {
    var i = this;

    if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
      var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
      i.$list.css("height", e);
    }
  }, e.prototype.setOption = e.prototype.slickSetOption = function () {
    var e,
        t,
        o,
        s,
        n,
        r = this,
        l = !1;
    if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) r.options[o] = s;else if ("multiple" === n) i.each(o, function (i, e) {
      r.options[i] = e;
    });else if ("responsive" === n) for (t in s) {
      if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]];else {
        for (e = r.options.responsive.length - 1; e >= 0;) {
          r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
        }

        r.options.responsive.push(s[t]);
      }
    }
    l && (r.unload(), r.reinit());
  }, e.prototype.setPosition = function () {
    var i = this;
    i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i]);
  }, e.prototype.setProps = function () {
    var i = this,
        e = document.body.style;
    i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType;
  }, e.prototype.setSlideClasses = function (i) {
    var e,
        t,
        o,
        s,
        n = this;

    if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode) {
      var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
      e = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center");
    } else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));

    "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad();
  }, e.prototype.setupInfinite = function () {
    var e,
        t,
        o,
        s = this;

    if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (t = null, s.slideCount > s.options.slidesToShow)) {
      for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) {
        t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
      }

      for (e = 0; e < o + s.slideCount; e += 1) {
        t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
      }

      s.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
        i(this).attr("id", "");
      });
    }
  }, e.prototype.interrupt = function (i) {
    var e = this;
    i || e.autoPlay(), e.interrupted = i;
  }, e.prototype.selectHandler = function (e) {
    var t = this,
        o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
        s = parseInt(o.attr("data-slick-index"));
    s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s);
  }, e.prototype.slideHandler = function (i, e, t) {
    var o,
        s,
        n,
        r,
        l,
        d = null,
        a = this;
    if (e = e || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i)) if (!1 === e && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
      a.postSlide(o);
    }) : a.postSlide(o));else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
      a.postSlide(o);
    }) : a.postSlide(o));else {
      if (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== t ? (a.fadeSlideOut(n), a.fadeSlide(s, function () {
        a.postSlide(s);
      })) : a.postSlide(s), void a.animateHeight();
      !0 !== t ? a.animateSlide(d, function () {
        a.postSlide(s);
      }) : a.postSlide(s);
    }
  }, e.prototype.startLoad = function () {
    var i = this;
    !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading");
  }, e.prototype.swipeDirection = function () {
    var i,
        e,
        t,
        o,
        s = this;
    return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical";
  }, e.prototype.swipeEnd = function (i) {
    var e,
        t,
        o = this;
    if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
    if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;

    if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
      switch (t = o.swipeDirection()) {
        case "left":
        case "down":
          e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
          break;

        case "right":
        case "up":
          e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1;
      }

      "vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]));
    } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {});
  }, e.prototype.swipeHandler = function (i) {
    var e = this;
    if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {
      case "start":
        e.swipeStart(i);
        break;

      case "move":
        e.swipeMove(i);
        break;

      case "end":
        e.swipeEnd(i);
    }
  }, e.prototype.swipeMove = function (i) {
    var e,
        t,
        o,
        s,
        n,
        r,
        l = this;
    return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft))));
  }, e.prototype.swipeStart = function (i) {
    var e,
        t = this;
    if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, !1;
    void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, t.dragging = !0;
  }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
    var i = this;
    null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit());
  }, e.prototype.unload = function () {
    var e = this;
    i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
  }, e.prototype.unslick = function (i) {
    var e = this;
    e.$slider.trigger("unslick", [e, i]), e.destroy();
  }, e.prototype.updateArrows = function () {
    var i = this;
    Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
  }, e.prototype.updateDots = function () {
    var i = this;
    null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"));
  }, e.prototype.visibility = function () {
    var i = this;
    i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1);
  }, i.fn.slick = function () {
    var i,
        t,
        o = this,
        s = arguments[0],
        n = Array.prototype.slice.call(arguments, 1),
        r = o.length;

    for (i = 0; i < r; i++) {
      if ("object" == _typeof(s) || void 0 === s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), void 0 !== t) return t;
    }

    return o;
  };
});
/* jquery.nicescroll v3.7.6 InuYaksa - MIT - https://nicescroll.areaaperta.com */

!function (e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = e(require("jquery")) : e(jQuery);
}(function (e) {
  "use strict";

  var o = !1,
      t = !1,
      r = 0,
      i = 2e3,
      s = 0,
      n = e,
      l = document,
      a = window,
      c = n(a),
      d = [],
      u = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || !1,
      h = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.mozCancelAnimationFrame || !1;
  if (u) a.cancelAnimationFrame || (h = function h(e) {});else {
    var p = 0;
    u = function u(e, o) {
      var t = new Date().getTime(),
          r = Math.max(0, 16 - (t - p)),
          i = a.setTimeout(function () {
        e(t + r);
      }, r);
      return p = t + r, i;
    }, h = function h(e) {
      a.clearTimeout(e);
    };
  }

  var m = a.MutationObserver || a.WebKitMutationObserver || !1,
      f = Date.now || function () {
    return new Date().getTime();
  },
      g = {
    zindex: "auto",
    cursoropacitymin: 0,
    cursoropacitymax: 1,
    cursorcolor: "#424242",
    cursorwidth: "6px",
    cursorborder: "1px solid #fff",
    cursorborderradius: "5px",
    scrollspeed: 40,
    mousescrollstep: 27,
    touchbehavior: !1,
    emulatetouch: !1,
    hwacceleration: !0,
    usetransition: !0,
    boxzoom: !1,
    dblclickzoom: !0,
    gesturezoom: !0,
    grabcursorenabled: !0,
    autohidemode: !0,
    background: "",
    iframeautoresize: !0,
    cursorminheight: 32,
    preservenativescrolling: !0,
    railoffset: !1,
    railhoffset: !1,
    bouncescroll: !0,
    spacebarenabled: !0,
    railpadding: {
      top: 0,
      right: 0,
      left: 0,
      bottom: 0
    },
    disableoutline: !0,
    horizrailenabled: !0,
    railalign: "right",
    railvalign: "bottom",
    enabletranslate3d: !0,
    enablemousewheel: !0,
    enablekeyboard: !0,
    smoothscroll: !0,
    sensitiverail: !0,
    enablemouselockapi: !0,
    cursorfixedheight: !1,
    directionlockdeadzone: 6,
    hidecursordelay: 400,
    nativeparentscrolling: !0,
    enablescrollonselection: !0,
    overflowx: !0,
    overflowy: !0,
    cursordragspeed: .3,
    rtlmode: "auto",
    cursordragontouch: !1,
    oneaxismousemode: "auto",
    scriptpath: function () {
      var e = l.currentScript || function () {
        var e = l.getElementsByTagName("script");
        return !!e.length && e[e.length - 1];
      }(),
          o = e ? e.src.split("?")[0] : "";

      return o.split("/").length > 0 ? o.split("/").slice(0, -1).join("/") + "/" : "";
    }(),
    preventmultitouchscrolling: !0,
    disablemutationobserver: !1,
    enableobserver: !0,
    scrollbarid: !1
  },
      v = !1,
      w = function w() {
    if (v) return v;
    var e = l.createElement("DIV"),
        o = e.style,
        t = navigator.userAgent,
        r = navigator.platform,
        i = {};
    return i.haspointerlock = "pointerLockElement" in l || "webkitPointerLockElement" in l || "mozPointerLockElement" in l, i.isopera = "opera" in a, i.isopera12 = i.isopera && "getUserMedia" in navigator, i.isoperamini = "[object OperaMini]" === Object.prototype.toString.call(a.operamini), i.isie = "all" in l && "attachEvent" in e && !i.isopera, i.isieold = i.isie && !("msInterpolationMode" in o), i.isie7 = i.isie && !i.isieold && (!("documentMode" in l) || 7 === l.documentMode), i.isie8 = i.isie && "documentMode" in l && 8 === l.documentMode, i.isie9 = i.isie && "performance" in a && 9 === l.documentMode, i.isie10 = i.isie && "performance" in a && 10 === l.documentMode, i.isie11 = "msRequestFullscreen" in e && l.documentMode >= 11, i.ismsedge = "msCredentials" in a, i.ismozilla = "MozAppearance" in o, i.iswebkit = !i.ismsedge && "WebkitAppearance" in o, i.ischrome = i.iswebkit && "chrome" in a, i.ischrome38 = i.ischrome && "touchAction" in o, i.ischrome22 = !i.ischrome38 && i.ischrome && i.haspointerlock, i.ischrome26 = !i.ischrome38 && i.ischrome && "transition" in o, i.cantouch = "ontouchstart" in l.documentElement || "ontouchstart" in a, i.hasw3ctouch = (a.PointerEvent || !1) && (navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0), i.hasmstouch = !i.hasw3ctouch && (a.MSPointerEvent || !1), i.ismac = /^mac$/i.test(r), i.isios = i.cantouch && /iphone|ipad|ipod/i.test(r), i.isios4 = i.isios && !("seal" in Object), i.isios7 = i.isios && "webkitHidden" in l, i.isios8 = i.isios && "hidden" in l, i.isios10 = i.isios && a.Proxy, i.isandroid = /android/i.test(t), i.haseventlistener = "addEventListener" in e, i.trstyle = !1, i.hastransform = !1, i.hastranslate3d = !1, i.transitionstyle = !1, i.hastransition = !1, i.transitionend = !1, i.trstyle = "transform", i.hastransform = "transform" in o || function () {
      for (var e = ["msTransform", "webkitTransform", "MozTransform", "OTransform"], t = 0, r = e.length; t < r; t++) {
        if (void 0 !== o[e[t]]) {
          i.trstyle = e[t];
          break;
        }
      }

      i.hastransform = !!i.trstyle;
    }(), i.hastransform && (o[i.trstyle] = "translate3d(1px,2px,3px)", i.hastranslate3d = /translate3d/.test(o[i.trstyle])), i.transitionstyle = "transition", i.prefixstyle = "", i.transitionend = "transitionend", i.hastransition = "transition" in o || function () {
      i.transitionend = !1;

      for (var e = ["webkitTransition", "msTransition", "MozTransition", "OTransition", "OTransition", "KhtmlTransition"], t = ["-webkit-", "-ms-", "-moz-", "-o-", "-o", "-khtml-"], r = ["webkitTransitionEnd", "msTransitionEnd", "transitionend", "otransitionend", "oTransitionEnd", "KhtmlTransitionEnd"], s = 0, n = e.length; s < n; s++) {
        if (e[s] in o) {
          i.transitionstyle = e[s], i.prefixstyle = t[s], i.transitionend = r[s];
          break;
        }
      }

      i.ischrome26 && (i.prefixstyle = t[1]), i.hastransition = i.transitionstyle;
    }(), i.cursorgrabvalue = function () {
      var e = ["grab", "-webkit-grab", "-moz-grab"];
      (i.ischrome && !i.ischrome38 || i.isie) && (e = []);

      for (var t = 0, r = e.length; t < r; t++) {
        var s = e[t];
        if (o.cursor = s, o.cursor == s) return s;
      }

      return "url(https://cdnjs.cloudflare.com/ajax/libs/slider-pro/1.3.0/css/images/openhand.cur),n-resize";
    }(), i.hasmousecapture = "setCapture" in e, i.hasMutationObserver = !1 !== m, e = null, v = i, i;
  },
      b = function b(e, p) {
    function v() {
      var e = T.doc.css(P.trstyle);
      return !(!e || "matrix" != e.substr(0, 6)) && e.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, "").split(/, +/);
    }

    function b() {
      var e = T.win;
      if ("zIndex" in e) return e.zIndex();

      for (; e.length > 0;) {
        if (9 == e[0].nodeType) return !1;
        var o = e.css("zIndex");
        if (!isNaN(o) && 0 !== o) return parseInt(o);
        e = e.parent();
      }

      return !1;
    }

    function x(e, o, t) {
      var r = e.css(o),
          i = parseFloat(r);

      if (isNaN(i)) {
        var s = 3 == (i = I[r] || 0) ? t ? T.win.outerHeight() - T.win.innerHeight() : T.win.outerWidth() - T.win.innerWidth() : 1;
        return T.isie8 && i && (i += 1), s ? i : 0;
      }

      return i;
    }

    function S(e, o, t, r) {
      T._bind(e, o, function (r) {
        var i = {
          original: r = r || a.event,
          target: r.target || r.srcElement,
          type: "wheel",
          deltaMode: "MozMousePixelScroll" == r.type ? 0 : 1,
          deltaX: 0,
          deltaZ: 0,
          preventDefault: function preventDefault() {
            return r.preventDefault ? r.preventDefault() : r.returnValue = !1, !1;
          },
          stopImmediatePropagation: function stopImmediatePropagation() {
            r.stopImmediatePropagation ? r.stopImmediatePropagation() : r.cancelBubble = !0;
          }
        };
        return "mousewheel" == o ? (r.wheelDeltaX && (i.deltaX = -.025 * r.wheelDeltaX), r.wheelDeltaY && (i.deltaY = -.025 * r.wheelDeltaY), !i.deltaY && !i.deltaX && (i.deltaY = -.025 * r.wheelDelta)) : i.deltaY = r.detail, t.call(e, i);
      }, r);
    }

    function z(e, o, t, r) {
      T.scrollrunning || (T.newscrolly = T.getScrollTop(), T.newscrollx = T.getScrollLeft(), D = f());
      var i = f() - D;

      if (D = f(), i > 350 ? A = 1 : A += (2 - A) / 10, e = e * A | 0, o = o * A | 0, e) {
        if (r) if (e < 0) {
          if (T.getScrollLeft() >= T.page.maxw) return !0;
        } else if (T.getScrollLeft() <= 0) return !0;
        var s = e > 0 ? 1 : -1;
        X !== s && (T.scrollmom && T.scrollmom.stop(), T.newscrollx = T.getScrollLeft(), X = s), T.lastdeltax -= e;
      }

      if (o) {
        if (function () {
          var e = T.getScrollTop();

          if (o < 0) {
            if (e >= T.page.maxh) return !0;
          } else if (e <= 0) return !0;
        }()) {
          if (M.nativeparentscrolling && t && !T.ispage && !T.zoomactive) return !0;
          var n = T.view.h >> 1;
          T.newscrolly < -n ? (T.newscrolly = -n, o = -1) : T.newscrolly > T.page.maxh + n ? (T.newscrolly = T.page.maxh + n, o = 1) : o = 0;
        }

        var l = o > 0 ? 1 : -1;
        B !== l && (T.scrollmom && T.scrollmom.stop(), T.newscrolly = T.getScrollTop(), B = l), T.lastdeltay -= o;
      }

      (o || e) && T.synched("relativexy", function () {
        var e = T.lastdeltay + T.newscrolly;
        T.lastdeltay = 0;
        var o = T.lastdeltax + T.newscrollx;
        T.lastdeltax = 0, T.rail.drag || T.doScrollPos(o, e);
      });
    }

    function k(e, o, t) {
      var r, i;
      return !(t || !q) || (0 === e.deltaMode ? (r = -e.deltaX * (M.mousescrollstep / 54) | 0, i = -e.deltaY * (M.mousescrollstep / 54) | 0) : 1 === e.deltaMode && (r = -e.deltaX * M.mousescrollstep * 50 / 80 | 0, i = -e.deltaY * M.mousescrollstep * 50 / 80 | 0), o && M.oneaxismousemode && 0 === r && i && (r = i, i = 0, t && (r < 0 ? T.getScrollLeft() >= T.page.maxw : T.getScrollLeft() <= 0) && (i = r, r = 0)), T.isrtlmode && (r = -r), z(r, i, t, !0) ? void (t && (q = !0)) : (q = !1, e.stopImmediatePropagation(), e.preventDefault()));
    }

    var T = this;
    this.version = "3.7.6", this.name = "nicescroll", this.me = p;
    var E = n("body"),
        M = this.opt = {
      doc: E,
      win: !1
    };
    if (n.extend(M, g), M.snapbackspeed = 80, e) for (var L in M) {
      void 0 !== e[L] && (M[L] = e[L]);
    }

    if (M.disablemutationobserver && (m = !1), this.doc = M.doc, this.iddoc = this.doc && this.doc[0] ? this.doc[0].id || "" : "", this.ispage = /^BODY|HTML/.test(M.win ? M.win[0].nodeName : this.doc[0].nodeName), this.haswrapper = !1 !== M.win, this.win = M.win || (this.ispage ? c : this.doc), this.docscroll = this.ispage && !this.haswrapper ? c : this.win, this.body = E, this.viewport = !1, this.isfixed = !1, this.iframe = !1, this.isiframe = "IFRAME" == this.doc[0].nodeName && "IFRAME" == this.win[0].nodeName, this.istextarea = "TEXTAREA" == this.win[0].nodeName, this.forcescreen = !1, this.canshowonmouseevent = "scroll" != M.autohidemode, this.onmousedown = !1, this.onmouseup = !1, this.onmousemove = !1, this.onmousewheel = !1, this.onkeypress = !1, this.ongesturezoom = !1, this.onclick = !1, this.onscrollstart = !1, this.onscrollend = !1, this.onscrollcancel = !1, this.onzoomin = !1, this.onzoomout = !1, this.view = !1, this.page = !1, this.scroll = {
      x: 0,
      y: 0
    }, this.scrollratio = {
      x: 0,
      y: 0
    }, this.cursorheight = 20, this.scrollvaluemax = 0, "auto" == M.rtlmode) {
      var C = this.win[0] == a ? this.body : this.win,
          N = C.css("writing-mode") || C.css("-webkit-writing-mode") || C.css("-ms-writing-mode") || C.css("-moz-writing-mode");
      "horizontal-tb" == N || "lr-tb" == N || "" === N ? (this.isrtlmode = "rtl" == C.css("direction"), this.isvertical = !1) : (this.isrtlmode = "vertical-rl" == N || "tb" == N || "tb-rl" == N || "rl-tb" == N, this.isvertical = "vertical-rl" == N || "tb" == N || "tb-rl" == N);
    } else this.isrtlmode = !0 === M.rtlmode, this.isvertical = !1;

    if (this.scrollrunning = !1, this.scrollmom = !1, this.observer = !1, this.observerremover = !1, this.observerbody = !1, !1 !== M.scrollbarid) this.id = M.scrollbarid;else do {
      this.id = "ascrail" + i++;
    } while (l.getElementById(this.id));
    this.rail = !1, this.cursor = !1, this.cursorfreezed = !1, this.selectiondrag = !1, this.zoom = !1, this.zoomactive = !1, this.hasfocus = !1, this.hasmousefocus = !1, this.railslocked = !1, this.locked = !1, this.hidden = !1, this.cursoractive = !0, this.wheelprevented = !1, this.overflowx = M.overflowx, this.overflowy = M.overflowy, this.nativescrollingarea = !1, this.checkarea = 0, this.events = [], this.saved = {}, this.delaylist = {}, this.synclist = {}, this.lastdeltax = 0, this.lastdeltay = 0, this.detected = w();
    var P = n.extend({}, this.detected);
    this.canhwscroll = P.hastransform && M.hwacceleration, this.ishwscroll = this.canhwscroll && T.haswrapper, this.isrtlmode ? this.isvertical ? this.hasreversehr = !(P.iswebkit || P.isie || P.isie11) : this.hasreversehr = !(P.iswebkit || P.isie && !P.isie10 && !P.isie11) : this.hasreversehr = !1, this.istouchcapable = !1, P.cantouch || !P.hasw3ctouch && !P.hasmstouch ? !P.cantouch || P.isios || P.isandroid || !P.iswebkit && !P.ismozilla || (this.istouchcapable = !0) : this.istouchcapable = !0, M.enablemouselockapi || (P.hasmousecapture = !1, P.haspointerlock = !1), this.debounced = function (e, o, t) {
      T && (T.delaylist[e] || !1 || (T.delaylist[e] = {
        h: u(function () {
          T.delaylist[e].fn.call(T), T.delaylist[e] = !1;
        }, t)
      }, o.call(T)), T.delaylist[e].fn = o);
    }, this.synched = function (e, o) {
      T.synclist[e] ? T.synclist[e] = o : (T.synclist[e] = o, u(function () {
        T && (T.synclist[e] && T.synclist[e].call(T), T.synclist[e] = null);
      }));
    }, this.unsynched = function (e) {
      T.synclist[e] && (T.synclist[e] = !1);
    }, this.css = function (e, o) {
      for (var t in o) {
        T.saved.css.push([e, t, e.css(t)]), e.css(t, o[t]);
      }
    }, this.scrollTop = function (e) {
      return void 0 === e ? T.getScrollTop() : T.setScrollTop(e);
    }, this.scrollLeft = function (e) {
      return void 0 === e ? T.getScrollLeft() : T.setScrollLeft(e);
    };

    var R = function R(e, o, t, r, i, s, n) {
      this.st = e, this.ed = o, this.spd = t, this.p1 = r || 0, this.p2 = i || 1, this.p3 = s || 0, this.p4 = n || 1, this.ts = f(), this.df = o - e;
    };

    if (R.prototype = {
      B2: function B2(e) {
        return 3 * (1 - e) * (1 - e) * e;
      },
      B3: function B3(e) {
        return 3 * (1 - e) * e * e;
      },
      B4: function B4(e) {
        return e * e * e;
      },
      getPos: function getPos() {
        return (f() - this.ts) / this.spd;
      },
      getNow: function getNow() {
        var e = (f() - this.ts) / this.spd,
            o = this.B2(e) + this.B3(e) + this.B4(e);
        return e >= 1 ? this.ed : this.st + this.df * o | 0;
      },
      update: function update(e, o) {
        return this.st = this.getNow(), this.ed = e, this.spd = o, this.ts = f(), this.df = this.ed - this.st, this;
      }
    }, this.ishwscroll) {
      this.doc.translate = {
        x: 0,
        y: 0,
        tx: "0px",
        ty: "0px"
      }, P.hastranslate3d && P.isios && this.doc.css("-webkit-backface-visibility", "hidden"), this.getScrollTop = function (e) {
        if (!e) {
          var o = v();
          if (o) return 16 == o.length ? -o[13] : -o[5];
          if (T.timerscroll && T.timerscroll.bz) return T.timerscroll.bz.getNow();
        }

        return T.doc.translate.y;
      }, this.getScrollLeft = function (e) {
        if (!e) {
          var o = v();
          if (o) return 16 == o.length ? -o[12] : -o[4];
          if (T.timerscroll && T.timerscroll.bh) return T.timerscroll.bh.getNow();
        }

        return T.doc.translate.x;
      }, this.notifyScrollEvent = function (e) {
        var o = l.createEvent("UIEvents");
        o.initUIEvent("scroll", !1, !1, a, 1), o.niceevent = !0, e.dispatchEvent(o);
      };

      var _ = this.isrtlmode ? 1 : -1;

      P.hastranslate3d && M.enabletranslate3d ? (this.setScrollTop = function (e, o) {
        T.doc.translate.y = e, T.doc.translate.ty = -1 * e + "px", T.doc.css(P.trstyle, "translate3d(" + T.doc.translate.tx + "," + T.doc.translate.ty + ",0)"), o || T.notifyScrollEvent(T.win[0]);
      }, this.setScrollLeft = function (e, o) {
        T.doc.translate.x = e, T.doc.translate.tx = e * _ + "px", T.doc.css(P.trstyle, "translate3d(" + T.doc.translate.tx + "," + T.doc.translate.ty + ",0)"), o || T.notifyScrollEvent(T.win[0]);
      }) : (this.setScrollTop = function (e, o) {
        T.doc.translate.y = e, T.doc.translate.ty = -1 * e + "px", T.doc.css(P.trstyle, "translate(" + T.doc.translate.tx + "," + T.doc.translate.ty + ")"), o || T.notifyScrollEvent(T.win[0]);
      }, this.setScrollLeft = function (e, o) {
        T.doc.translate.x = e, T.doc.translate.tx = e * _ + "px", T.doc.css(P.trstyle, "translate(" + T.doc.translate.tx + "," + T.doc.translate.ty + ")"), o || T.notifyScrollEvent(T.win[0]);
      });
    } else this.getScrollTop = function () {
      return T.docscroll.scrollTop();
    }, this.setScrollTop = function (e) {
      T.docscroll.scrollTop(e);
    }, this.getScrollLeft = function () {
      return T.hasreversehr ? T.detected.ismozilla ? T.page.maxw - Math.abs(T.docscroll.scrollLeft()) : T.page.maxw - T.docscroll.scrollLeft() : T.docscroll.scrollLeft();
    }, this.setScrollLeft = function (e) {
      return setTimeout(function () {
        if (T) return T.hasreversehr && (e = T.detected.ismozilla ? -(T.page.maxw - e) : T.page.maxw - e), T.docscroll.scrollLeft(e);
      }, 1);
    };

    this.getTarget = function (e) {
      return !!e && (e.target ? e.target : !!e.srcElement && e.srcElement);
    }, this.hasParent = function (e, o) {
      if (!e) return !1;

      for (var t = e.target || e.srcElement || e || !1; t && t.id != o;) {
        t = t.parentNode || !1;
      }

      return !1 !== t;
    };
    var I = {
      thin: 1,
      medium: 3,
      thick: 5
    };
    this.getDocumentScrollOffset = function () {
      return {
        top: a.pageYOffset || l.documentElement.scrollTop,
        left: a.pageXOffset || l.documentElement.scrollLeft
      };
    }, this.getOffset = function () {
      if (T.isfixed) {
        var e = T.win.offset(),
            o = T.getDocumentScrollOffset();
        return e.top -= o.top, e.left -= o.left, e;
      }

      var t = T.win.offset();
      if (!T.viewport) return t;
      var r = T.viewport.offset();
      return {
        top: t.top - r.top,
        left: t.left - r.left
      };
    }, this.updateScrollBar = function (e) {
      var o, t;
      if (T.ishwscroll) T.rail.css({
        height: T.win.innerHeight() - (M.railpadding.top + M.railpadding.bottom)
      }), T.railh && T.railh.css({
        width: T.win.innerWidth() - (M.railpadding.left + M.railpadding.right)
      });else {
        var r = T.getOffset();

        if (o = {
          top: r.top,
          left: r.left - (M.railpadding.left + M.railpadding.right)
        }, o.top += x(T.win, "border-top-width", !0), o.left += T.rail.align ? T.win.outerWidth() - x(T.win, "border-right-width") - T.rail.width : x(T.win, "border-left-width"), (t = M.railoffset) && (t.top && (o.top += t.top), t.left && (o.left += t.left)), T.railslocked || T.rail.css({
          top: o.top,
          left: o.left,
          height: (e ? e.h : T.win.innerHeight()) - (M.railpadding.top + M.railpadding.bottom)
        }), T.zoom && T.zoom.css({
          top: o.top + 1,
          left: 1 == T.rail.align ? o.left - 20 : o.left + T.rail.width + 4
        }), T.railh && !T.railslocked) {
          o = {
            top: r.top,
            left: r.left
          }, (t = M.railhoffset) && (t.top && (o.top += t.top), t.left && (o.left += t.left));
          var i = T.railh.align ? o.top + x(T.win, "border-top-width", !0) + T.win.innerHeight() - T.railh.height : o.top + x(T.win, "border-top-width", !0),
              s = o.left + x(T.win, "border-left-width");
          T.railh.css({
            top: i - (M.railpadding.top + M.railpadding.bottom),
            left: s,
            width: T.railh.width
          });
        }
      }
    }, this.doRailClick = function (e, o, t) {
      var r, i, s, n;
      T.railslocked || (T.cancelEvent(e), "pageY" in e || (e.pageX = e.clientX + l.documentElement.scrollLeft, e.pageY = e.clientY + l.documentElement.scrollTop), o ? (r = t ? T.doScrollLeft : T.doScrollTop, s = t ? (e.pageX - T.railh.offset().left - T.cursorwidth / 2) * T.scrollratio.x : (e.pageY - T.rail.offset().top - T.cursorheight / 2) * T.scrollratio.y, T.unsynched("relativexy"), r(0 | s)) : (r = t ? T.doScrollLeftBy : T.doScrollBy, s = t ? T.scroll.x : T.scroll.y, n = t ? e.pageX - T.railh.offset().left : e.pageY - T.rail.offset().top, i = t ? T.view.w : T.view.h, r(s >= n ? i : -i)));
    }, T.newscrolly = T.newscrollx = 0, T.hasanimationframe = "requestAnimationFrame" in a, T.hascancelanimationframe = "cancelAnimationFrame" in a, T.hasborderbox = !1, this.init = function () {
      if (T.saved.css = [], P.isoperamini) return !0;
      if (P.isandroid && !("hidden" in l)) return !0;
      M.emulatetouch = M.emulatetouch || M.touchbehavior, T.hasborderbox = a.getComputedStyle && "border-box" === a.getComputedStyle(l.body)["box-sizing"];
      var e = {
        "overflow-y": "hidden"
      };

      if ((P.isie11 || P.isie10) && (e["-ms-overflow-style"] = "none"), T.ishwscroll && (this.doc.css(P.transitionstyle, P.prefixstyle + "transform 0ms ease-out"), P.transitionend && T.bind(T.doc, P.transitionend, T.onScrollTransitionEnd, !1)), T.zindex = "auto", T.ispage || "auto" != M.zindex ? T.zindex = M.zindex : T.zindex = b() || "auto", !T.ispage && "auto" != T.zindex && T.zindex > s && (s = T.zindex), T.isie && 0 === T.zindex && "auto" == M.zindex && (T.zindex = "auto"), !T.ispage || !P.isieold) {
        var i = T.docscroll;
        T.ispage && (i = T.haswrapper ? T.win : T.doc), T.css(i, e), T.ispage && (P.isie11 || P.isie) && T.css(n("html"), e), !P.isios || T.ispage || T.haswrapper || T.css(E, {
          "-webkit-overflow-scrolling": "touch"
        });
        var d = n(l.createElement("div"));
        d.css({
          position: "relative",
          top: 0,
          "float": "right",
          width: M.cursorwidth,
          height: 0,
          "background-color": M.cursorcolor,
          border: M.cursorborder,
          "background-clip": "padding-box",
          "-webkit-border-radius": M.cursorborderradius,
          "-moz-border-radius": M.cursorborderradius,
          "border-radius": M.cursorborderradius
        }), d.addClass("nicescroll-cursors"), T.cursor = d;
        var u = n(l.createElement("div"));
        u.attr("id", T.id), u.addClass("nicescroll-rails nicescroll-rails-vr");
        var h,
            p,
            f = ["left", "right", "top", "bottom"];

        for (var g in f) {
          p = f[g], (h = M.railpadding[p] || 0) && u.css("padding-" + p, h + "px");
        }

        u.append(d), u.width = Math.max(parseFloat(M.cursorwidth), d.outerWidth()), u.css({
          width: u.width + "px",
          zIndex: T.zindex,
          background: M.background,
          cursor: "default"
        }), u.visibility = !0, u.scrollable = !0, u.align = "left" == M.railalign ? 0 : 1, T.rail = u, T.rail.drag = !1;
        var v = !1;
        !M.boxzoom || T.ispage || P.isieold || (v = l.createElement("div"), T.bind(v, "click", T.doZoom), T.bind(v, "mouseenter", function () {
          T.zoom.css("opacity", M.cursoropacitymax);
        }), T.bind(v, "mouseleave", function () {
          T.zoom.css("opacity", M.cursoropacitymin);
        }), T.zoom = n(v), T.zoom.css({
          cursor: "pointer",
          zIndex: T.zindex,
          backgroundImage: "url(" + M.scriptpath + "zoomico.png)",
          height: 18,
          width: 18,
          backgroundPosition: "0 0"
        }), M.dblclickzoom && T.bind(T.win, "dblclick", T.doZoom), P.cantouch && M.gesturezoom && (T.ongesturezoom = function (e) {
          return e.scale > 1.5 && T.doZoomIn(e), e.scale < .8 && T.doZoomOut(e), T.cancelEvent(e);
        }, T.bind(T.win, "gestureend", T.ongesturezoom))), T.railh = !1;
        var w;
        if (M.horizrailenabled && (T.css(i, {
          overflowX: "hidden"
        }), (d = n(l.createElement("div"))).css({
          position: "absolute",
          top: 0,
          height: M.cursorwidth,
          width: 0,
          backgroundColor: M.cursorcolor,
          border: M.cursorborder,
          backgroundClip: "padding-box",
          "-webkit-border-radius": M.cursorborderradius,
          "-moz-border-radius": M.cursorborderradius,
          "border-radius": M.cursorborderradius
        }), P.isieold && d.css("overflow", "hidden"), d.addClass("nicescroll-cursors"), T.cursorh = d, (w = n(l.createElement("div"))).attr("id", T.id + "-hr"), w.addClass("nicescroll-rails nicescroll-rails-hr"), w.height = Math.max(parseFloat(M.cursorwidth), d.outerHeight()), w.css({
          height: w.height + "px",
          zIndex: T.zindex,
          background: M.background
        }), w.append(d), w.visibility = !0, w.scrollable = !0, w.align = "top" == M.railvalign ? 0 : 1, T.railh = w, T.railh.drag = !1), T.ispage) u.css({
          position: "fixed",
          top: 0,
          height: "100%"
        }), u.css(u.align ? {
          right: 0
        } : {
          left: 0
        }), T.body.append(u), T.railh && (w.css({
          position: "fixed",
          left: 0,
          width: "100%"
        }), w.css(w.align ? {
          bottom: 0
        } : {
          top: 0
        }), T.body.append(w));else {
          if (T.ishwscroll) {
            "static" == T.win.css("position") && T.css(T.win, {
              position: "relative"
            });
            var x = "HTML" == T.win[0].nodeName ? T.body : T.win;
            n(x).scrollTop(0).scrollLeft(0), T.zoom && (T.zoom.css({
              position: "absolute",
              top: 1,
              right: 0,
              "margin-right": u.width + 4
            }), x.append(T.zoom)), u.css({
              position: "absolute",
              top: 0
            }), u.css(u.align ? {
              right: 0
            } : {
              left: 0
            }), x.append(u), w && (w.css({
              position: "absolute",
              left: 0,
              bottom: 0
            }), w.css(w.align ? {
              bottom: 0
            } : {
              top: 0
            }), x.append(w));
          } else {
            T.isfixed = "fixed" == T.win.css("position");
            var S = T.isfixed ? "fixed" : "absolute";
            T.isfixed || (T.viewport = T.getViewport(T.win[0])), T.viewport && (T.body = T.viewport, /fixed|absolute/.test(T.viewport.css("position")) || T.css(T.viewport, {
              position: "relative"
            })), u.css({
              position: S
            }), T.zoom && T.zoom.css({
              position: S
            }), T.updateScrollBar(), T.body.append(u), T.zoom && T.body.append(T.zoom), T.railh && (w.css({
              position: S
            }), T.body.append(w));
          }

          P.isios && T.css(T.win, {
            "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
            "-webkit-touch-callout": "none"
          }), M.disableoutline && (P.isie && T.win.attr("hideFocus", "true"), P.iswebkit && T.win.css("outline", "none"));
        }

        if (!1 === M.autohidemode ? (T.autohidedom = !1, T.rail.css({
          opacity: M.cursoropacitymax
        }), T.railh && T.railh.css({
          opacity: M.cursoropacitymax
        })) : !0 === M.autohidemode || "leave" === M.autohidemode ? (T.autohidedom = n().add(T.rail), P.isie8 && (T.autohidedom = T.autohidedom.add(T.cursor)), T.railh && (T.autohidedom = T.autohidedom.add(T.railh)), T.railh && P.isie8 && (T.autohidedom = T.autohidedom.add(T.cursorh))) : "scroll" == M.autohidemode ? (T.autohidedom = n().add(T.rail), T.railh && (T.autohidedom = T.autohidedom.add(T.railh))) : "cursor" == M.autohidemode ? (T.autohidedom = n().add(T.cursor), T.railh && (T.autohidedom = T.autohidedom.add(T.cursorh))) : "hidden" == M.autohidemode && (T.autohidedom = !1, T.hide(), T.railslocked = !1), P.cantouch || T.istouchcapable || M.emulatetouch || P.hasmstouch) {
          T.scrollmom = new y(T);
          T.ontouchstart = function (e) {
            if (T.locked) return !1;
            if (e.pointerType && ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE)) return !1;

            if (T.hasmoving = !1, T.scrollmom.timer && (T.triggerScrollEnd(), T.scrollmom.stop()), !T.railslocked) {
              var o = T.getTarget(e);
              if (o && /INPUT/i.test(o.nodeName) && /range/i.test(o.type)) return T.stopPropagation(e);
              var t = "mousedown" === e.type;

              if (!("clientX" in e) && "changedTouches" in e && (e.clientX = e.changedTouches[0].clientX, e.clientY = e.changedTouches[0].clientY), T.forcescreen) {
                var r = e;
                (e = {
                  original: e.original ? e.original : e
                }).clientX = r.screenX, e.clientY = r.screenY;
              }

              if (T.rail.drag = {
                x: e.clientX,
                y: e.clientY,
                sx: T.scroll.x,
                sy: T.scroll.y,
                st: T.getScrollTop(),
                sl: T.getScrollLeft(),
                pt: 2,
                dl: !1,
                tg: o
              }, T.ispage || !M.directionlockdeadzone) T.rail.drag.dl = "f";else {
                var i = {
                  w: c.width(),
                  h: c.height()
                },
                    s = T.getContentSize(),
                    l = s.h - i.h,
                    a = s.w - i.w;
                T.rail.scrollable && !T.railh.scrollable ? T.rail.drag.ck = l > 0 && "v" : !T.rail.scrollable && T.railh.scrollable ? T.rail.drag.ck = a > 0 && "h" : T.rail.drag.ck = !1;
              }

              if (M.emulatetouch && T.isiframe && P.isie) {
                var d = T.win.position();
                T.rail.drag.x += d.left, T.rail.drag.y += d.top;
              }

              if (T.hasmoving = !1, T.lastmouseup = !1, T.scrollmom.reset(e.clientX, e.clientY), o && t) {
                if (!/INPUT|SELECT|BUTTON|TEXTAREA/i.test(o.nodeName)) return P.hasmousecapture && o.setCapture(), M.emulatetouch ? (o.onclick && !o._onclick && (o._onclick = o.onclick, o.onclick = function (e) {
                  if (T.hasmoving) return !1;

                  o._onclick.call(this, e);
                }), T.cancelEvent(e)) : T.stopPropagation(e);
                /SUBMIT|CANCEL|BUTTON/i.test(n(o).attr("type")) && (T.preventclick = {
                  tg: o,
                  click: !1
                });
              }
            }
          }, T.ontouchend = function (e) {
            if (!T.rail.drag) return !0;

            if (2 == T.rail.drag.pt) {
              if (e.pointerType && ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE)) return !1;
              T.rail.drag = !1;
              var o = "mouseup" === e.type;
              if (T.hasmoving && (T.scrollmom.doMomentum(), T.lastmouseup = !0, T.hideCursor(), P.hasmousecapture && l.releaseCapture(), o)) return T.cancelEvent(e);
            } else if (1 == T.rail.drag.pt) return T.onmouseup(e);
          };
          var z = M.emulatetouch && T.isiframe && !P.hasmousecapture,
              k = .3 * M.directionlockdeadzone | 0;
          T.ontouchmove = function (e, o) {
            if (!T.rail.drag) return !0;
            if (e.targetTouches && M.preventmultitouchscrolling && e.targetTouches.length > 1) return !0;
            if (e.pointerType && ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE)) return !0;

            if (2 == T.rail.drag.pt) {
              "changedTouches" in e && (e.clientX = e.changedTouches[0].clientX, e.clientY = e.changedTouches[0].clientY);
              var t, r;

              if (r = t = 0, z && !o) {
                var i = T.win.position();
                r = -i.left, t = -i.top;
              }

              var s = e.clientY + t,
                  n = s - T.rail.drag.y,
                  a = e.clientX + r,
                  c = a - T.rail.drag.x,
                  d = T.rail.drag.st - n;
              if (T.ishwscroll && M.bouncescroll) d < 0 ? d = Math.round(d / 2) : d > T.page.maxh && (d = T.page.maxh + Math.round((d - T.page.maxh) / 2));else if (d < 0 ? (d = 0, s = 0) : d > T.page.maxh && (d = T.page.maxh, s = 0), 0 === s && !T.hasmoving) return T.ispage || (T.rail.drag = !1), !0;
              var u = T.getScrollLeft();

              if (T.railh && T.railh.scrollable && (u = T.isrtlmode ? c - T.rail.drag.sl : T.rail.drag.sl - c, T.ishwscroll && M.bouncescroll ? u < 0 ? u = Math.round(u / 2) : u > T.page.maxw && (u = T.page.maxw + Math.round((u - T.page.maxw) / 2)) : (u < 0 && (u = 0, a = 0), u > T.page.maxw && (u = T.page.maxw, a = 0))), !T.hasmoving) {
                if (T.rail.drag.y === e.clientY && T.rail.drag.x === e.clientX) return T.cancelEvent(e);
                var h = Math.abs(n),
                    p = Math.abs(c),
                    m = M.directionlockdeadzone;
                if (T.rail.drag.ck ? "v" == T.rail.drag.ck ? p > m && h <= k ? T.rail.drag = !1 : h > m && (T.rail.drag.dl = "v") : "h" == T.rail.drag.ck && (h > m && p <= k ? T.rail.drag = !1 : p > m && (T.rail.drag.dl = "h")) : h > m && p > m ? T.rail.drag.dl = "f" : h > m ? T.rail.drag.dl = p > k ? "f" : "v" : p > m && (T.rail.drag.dl = h > k ? "f" : "h"), !T.rail.drag.dl) return T.cancelEvent(e);
                T.triggerScrollStart(e.clientX, e.clientY, 0, 0, 0), T.hasmoving = !0;
              }

              return T.preventclick && !T.preventclick.click && (T.preventclick.click = T.preventclick.tg.onclick || !1, T.preventclick.tg.onclick = T.onpreventclick), T.rail.drag.dl && ("v" == T.rail.drag.dl ? u = T.rail.drag.sl : "h" == T.rail.drag.dl && (d = T.rail.drag.st)), T.synched("touchmove", function () {
                T.rail.drag && 2 == T.rail.drag.pt && (T.prepareTransition && T.resetTransition(), T.rail.scrollable && T.setScrollTop(d), T.scrollmom.update(a, s), T.railh && T.railh.scrollable ? (T.setScrollLeft(u), T.showCursor(d, u)) : T.showCursor(d), P.isie10 && l.selection.clear());
              }), T.cancelEvent(e);
            }

            return 1 == T.rail.drag.pt ? T.onmousemove(e) : void 0;
          }, T.ontouchstartCursor = function (e, o) {
            if (!T.rail.drag || 3 == T.rail.drag.pt) {
              if (T.locked) return T.cancelEvent(e);
              T.cancelScroll(), T.rail.drag = {
                x: e.touches[0].clientX,
                y: e.touches[0].clientY,
                sx: T.scroll.x,
                sy: T.scroll.y,
                pt: 3,
                hr: !!o
              };
              var t = T.getTarget(e);
              return !T.ispage && P.hasmousecapture && t.setCapture(), T.isiframe && !P.hasmousecapture && (T.saved.csspointerevents = T.doc.css("pointer-events"), T.css(T.doc, {
                "pointer-events": "none"
              })), T.cancelEvent(e);
            }
          }, T.ontouchendCursor = function (e) {
            if (T.rail.drag) {
              if (P.hasmousecapture && l.releaseCapture(), T.isiframe && !P.hasmousecapture && T.doc.css("pointer-events", T.saved.csspointerevents), 3 != T.rail.drag.pt) return;
              return T.rail.drag = !1, T.cancelEvent(e);
            }
          }, T.ontouchmoveCursor = function (e) {
            if (T.rail.drag) {
              if (3 != T.rail.drag.pt) return;

              if (T.cursorfreezed = !0, T.rail.drag.hr) {
                T.scroll.x = T.rail.drag.sx + (e.touches[0].clientX - T.rail.drag.x), T.scroll.x < 0 && (T.scroll.x = 0);
                var o = T.scrollvaluemaxw;
                T.scroll.x > o && (T.scroll.x = o);
              } else {
                T.scroll.y = T.rail.drag.sy + (e.touches[0].clientY - T.rail.drag.y), T.scroll.y < 0 && (T.scroll.y = 0);
                var t = T.scrollvaluemax;
                T.scroll.y > t && (T.scroll.y = t);
              }

              return T.synched("touchmove", function () {
                T.rail.drag && 3 == T.rail.drag.pt && (T.showCursor(), T.rail.drag.hr ? T.doScrollLeft(Math.round(T.scroll.x * T.scrollratio.x), M.cursordragspeed) : T.doScrollTop(Math.round(T.scroll.y * T.scrollratio.y), M.cursordragspeed));
              }), T.cancelEvent(e);
            }
          };
        }

        if (T.onmousedown = function (e, o) {
          if (!T.rail.drag || 1 == T.rail.drag.pt) {
            if (T.railslocked) return T.cancelEvent(e);
            T.cancelScroll(), T.rail.drag = {
              x: e.clientX,
              y: e.clientY,
              sx: T.scroll.x,
              sy: T.scroll.y,
              pt: 1,
              hr: o || !1
            };
            var t = T.getTarget(e);
            return P.hasmousecapture && t.setCapture(), T.isiframe && !P.hasmousecapture && (T.saved.csspointerevents = T.doc.css("pointer-events"), T.css(T.doc, {
              "pointer-events": "none"
            })), T.hasmoving = !1, T.cancelEvent(e);
          }
        }, T.onmouseup = function (e) {
          if (T.rail.drag) return 1 != T.rail.drag.pt || (P.hasmousecapture && l.releaseCapture(), T.isiframe && !P.hasmousecapture && T.doc.css("pointer-events", T.saved.csspointerevents), T.rail.drag = !1, T.cursorfreezed = !1, T.hasmoving && T.triggerScrollEnd(), T.cancelEvent(e));
        }, T.onmousemove = function (e) {
          if (T.rail.drag) {
            if (1 !== T.rail.drag.pt) return;
            if (P.ischrome && 0 === e.which) return T.onmouseup(e);

            if (T.cursorfreezed = !0, T.hasmoving || T.triggerScrollStart(e.clientX, e.clientY, 0, 0, 0), T.hasmoving = !0, T.rail.drag.hr) {
              T.scroll.x = T.rail.drag.sx + (e.clientX - T.rail.drag.x), T.scroll.x < 0 && (T.scroll.x = 0);
              var o = T.scrollvaluemaxw;
              T.scroll.x > o && (T.scroll.x = o);
            } else {
              T.scroll.y = T.rail.drag.sy + (e.clientY - T.rail.drag.y), T.scroll.y < 0 && (T.scroll.y = 0);
              var t = T.scrollvaluemax;
              T.scroll.y > t && (T.scroll.y = t);
            }

            return T.synched("mousemove", function () {
              T.cursorfreezed && (T.showCursor(), T.rail.drag.hr ? T.scrollLeft(Math.round(T.scroll.x * T.scrollratio.x)) : T.scrollTop(Math.round(T.scroll.y * T.scrollratio.y)));
            }), T.cancelEvent(e);
          }

          T.checkarea = 0;
        }, P.cantouch || M.emulatetouch) T.onpreventclick = function (e) {
          if (T.preventclick) return T.preventclick.tg.onclick = T.preventclick.click, T.preventclick = !1, T.cancelEvent(e);
        }, T.onclick = !P.isios && function (e) {
          return !T.lastmouseup || (T.lastmouseup = !1, T.cancelEvent(e));
        }, M.grabcursorenabled && P.cursorgrabvalue && (T.css(T.ispage ? T.doc : T.win, {
          cursor: P.cursorgrabvalue
        }), T.css(T.rail, {
          cursor: P.cursorgrabvalue
        }));else {
          var L = function L(e) {
            if (T.selectiondrag) {
              if (e) {
                var o = T.win.outerHeight(),
                    t = e.pageY - T.selectiondrag.top;
                t > 0 && t < o && (t = 0), t >= o && (t -= o), T.selectiondrag.df = t;
              }

              if (0 !== T.selectiondrag.df) {
                var r = -2 * T.selectiondrag.df / 6 | 0;
                T.doScrollBy(r), T.debounced("doselectionscroll", function () {
                  L();
                }, 50);
              }
            }
          };

          T.hasTextSelected = "getSelection" in l ? function () {
            return l.getSelection().rangeCount > 0;
          } : "selection" in l ? function () {
            return "None" != l.selection.type;
          } : function () {
            return !1;
          }, T.onselectionstart = function (e) {
            T.ispage || (T.selectiondrag = T.win.offset());
          }, T.onselectionend = function (e) {
            T.selectiondrag = !1;
          }, T.onselectiondrag = function (e) {
            T.selectiondrag && T.hasTextSelected() && T.debounced("selectionscroll", function () {
              L(e);
            }, 250);
          };
        }

        if (P.hasw3ctouch ? (T.css(T.ispage ? n("html") : T.win, {
          "touch-action": "none"
        }), T.css(T.rail, {
          "touch-action": "none"
        }), T.css(T.cursor, {
          "touch-action": "none"
        }), T.bind(T.win, "pointerdown", T.ontouchstart), T.bind(l, "pointerup", T.ontouchend), T.delegate(l, "pointermove", T.ontouchmove)) : P.hasmstouch ? (T.css(T.ispage ? n("html") : T.win, {
          "-ms-touch-action": "none"
        }), T.css(T.rail, {
          "-ms-touch-action": "none"
        }), T.css(T.cursor, {
          "-ms-touch-action": "none"
        }), T.bind(T.win, "MSPointerDown", T.ontouchstart), T.bind(l, "MSPointerUp", T.ontouchend), T.delegate(l, "MSPointerMove", T.ontouchmove), T.bind(T.cursor, "MSGestureHold", function (e) {
          e.preventDefault();
        }), T.bind(T.cursor, "contextmenu", function (e) {
          e.preventDefault();
        })) : P.cantouch && (T.bind(T.win, "touchstart", T.ontouchstart, !1, !0), T.bind(l, "touchend", T.ontouchend, !1, !0), T.bind(l, "touchcancel", T.ontouchend, !1, !0), T.delegate(l, "touchmove", T.ontouchmove, !1, !0)), M.emulatetouch && (T.bind(T.win, "mousedown", T.ontouchstart, !1, !0), T.bind(l, "mouseup", T.ontouchend, !1, !0), T.bind(l, "mousemove", T.ontouchmove, !1, !0)), (M.cursordragontouch || !P.cantouch && !M.emulatetouch) && (T.rail.css({
          cursor: "default"
        }), T.railh && T.railh.css({
          cursor: "default"
        }), T.jqbind(T.rail, "mouseenter", function () {
          if (!T.ispage && !T.win.is(":visible")) return !1;
          T.canshowonmouseevent && T.showCursor(), T.rail.active = !0;
        }), T.jqbind(T.rail, "mouseleave", function () {
          T.rail.active = !1, T.rail.drag || T.hideCursor();
        }), M.sensitiverail && (T.bind(T.rail, "click", function (e) {
          T.doRailClick(e, !1, !1);
        }), T.bind(T.rail, "dblclick", function (e) {
          T.doRailClick(e, !0, !1);
        }), T.bind(T.cursor, "click", function (e) {
          T.cancelEvent(e);
        }), T.bind(T.cursor, "dblclick", function (e) {
          T.cancelEvent(e);
        })), T.railh && (T.jqbind(T.railh, "mouseenter", function () {
          if (!T.ispage && !T.win.is(":visible")) return !1;
          T.canshowonmouseevent && T.showCursor(), T.rail.active = !0;
        }), T.jqbind(T.railh, "mouseleave", function () {
          T.rail.active = !1, T.rail.drag || T.hideCursor();
        }), M.sensitiverail && (T.bind(T.railh, "click", function (e) {
          T.doRailClick(e, !1, !0);
        }), T.bind(T.railh, "dblclick", function (e) {
          T.doRailClick(e, !0, !0);
        }), T.bind(T.cursorh, "click", function (e) {
          T.cancelEvent(e);
        }), T.bind(T.cursorh, "dblclick", function (e) {
          T.cancelEvent(e);
        })))), M.cursordragontouch && (this.istouchcapable || P.cantouch) && (T.bind(T.cursor, "touchstart", T.ontouchstartCursor), T.bind(T.cursor, "touchmove", T.ontouchmoveCursor), T.bind(T.cursor, "touchend", T.ontouchendCursor), T.cursorh && T.bind(T.cursorh, "touchstart", function (e) {
          T.ontouchstartCursor(e, !0);
        }), T.cursorh && T.bind(T.cursorh, "touchmove", T.ontouchmoveCursor), T.cursorh && T.bind(T.cursorh, "touchend", T.ontouchendCursor)), M.emulatetouch || P.isandroid || P.isios ? (T.bind(P.hasmousecapture ? T.win : l, "mouseup", T.ontouchend), T.onclick && T.bind(l, "click", T.onclick), M.cursordragontouch ? (T.bind(T.cursor, "mousedown", T.onmousedown), T.bind(T.cursor, "mouseup", T.onmouseup), T.cursorh && T.bind(T.cursorh, "mousedown", function (e) {
          T.onmousedown(e, !0);
        }), T.cursorh && T.bind(T.cursorh, "mouseup", T.onmouseup)) : (T.bind(T.rail, "mousedown", function (e) {
          e.preventDefault();
        }), T.railh && T.bind(T.railh, "mousedown", function (e) {
          e.preventDefault();
        }))) : (T.bind(P.hasmousecapture ? T.win : l, "mouseup", T.onmouseup), T.bind(l, "mousemove", T.onmousemove), T.onclick && T.bind(l, "click", T.onclick), T.bind(T.cursor, "mousedown", T.onmousedown), T.bind(T.cursor, "mouseup", T.onmouseup), T.railh && (T.bind(T.cursorh, "mousedown", function (e) {
          T.onmousedown(e, !0);
        }), T.bind(T.cursorh, "mouseup", T.onmouseup)), !T.ispage && M.enablescrollonselection && (T.bind(T.win[0], "mousedown", T.onselectionstart), T.bind(l, "mouseup", T.onselectionend), T.bind(T.cursor, "mouseup", T.onselectionend), T.cursorh && T.bind(T.cursorh, "mouseup", T.onselectionend), T.bind(l, "mousemove", T.onselectiondrag)), T.zoom && (T.jqbind(T.zoom, "mouseenter", function () {
          T.canshowonmouseevent && T.showCursor(), T.rail.active = !0;
        }), T.jqbind(T.zoom, "mouseleave", function () {
          T.rail.active = !1, T.rail.drag || T.hideCursor();
        }))), M.enablemousewheel && (T.isiframe || T.mousewheel(P.isie && T.ispage ? l : T.win, T.onmousewheel), T.mousewheel(T.rail, T.onmousewheel), T.railh && T.mousewheel(T.railh, T.onmousewheelhr)), T.ispage || P.cantouch || /HTML|^BODY/.test(T.win[0].nodeName) || (T.win.attr("tabindex") || T.win.attr({
          tabindex: ++r
        }), T.bind(T.win, "focus", function (e) {
          o = T.getTarget(e).id || T.getTarget(e) || !1, T.hasfocus = !0, T.canshowonmouseevent && T.noticeCursor();
        }), T.bind(T.win, "blur", function (e) {
          o = !1, T.hasfocus = !1;
        }), T.bind(T.win, "mouseenter", function (e) {
          t = T.getTarget(e).id || T.getTarget(e) || !1, T.hasmousefocus = !0, T.canshowonmouseevent && T.noticeCursor();
        }), T.bind(T.win, "mouseleave", function (e) {
          t = !1, T.hasmousefocus = !1, T.rail.drag || T.hideCursor();
        })), T.onkeypress = function (e) {
          if (T.railslocked && 0 === T.page.maxh) return !0;
          e = e || a.event;
          var r = T.getTarget(e);
          if (r && /INPUT|TEXTAREA|SELECT|OPTION/.test(r.nodeName) && (!(r.getAttribute("type") || r.type || !1) || !/submit|button|cancel/i.tp)) return !0;
          if (n(r).attr("contenteditable")) return !0;

          if (T.hasfocus || T.hasmousefocus && !o || T.ispage && !o && !t) {
            var i = e.keyCode;
            if (T.railslocked && 27 != i) return T.cancelEvent(e);
            var s = e.ctrlKey || !1,
                l = e.shiftKey || !1,
                c = !1;

            switch (i) {
              case 38:
              case 63233:
                T.doScrollBy(72), c = !0;
                break;

              case 40:
              case 63235:
                T.doScrollBy(-72), c = !0;
                break;

              case 37:
              case 63232:
                T.railh && (s ? T.doScrollLeft(0) : T.doScrollLeftBy(72), c = !0);
                break;

              case 39:
              case 63234:
                T.railh && (s ? T.doScrollLeft(T.page.maxw) : T.doScrollLeftBy(-72), c = !0);
                break;

              case 33:
              case 63276:
                T.doScrollBy(T.view.h), c = !0;
                break;

              case 34:
              case 63277:
                T.doScrollBy(-T.view.h), c = !0;
                break;

              case 36:
              case 63273:
                T.railh && s ? T.doScrollPos(0, 0) : T.doScrollTo(0), c = !0;
                break;

              case 35:
              case 63275:
                T.railh && s ? T.doScrollPos(T.page.maxw, T.page.maxh) : T.doScrollTo(T.page.maxh), c = !0;
                break;

              case 32:
                M.spacebarenabled && (l ? T.doScrollBy(T.view.h) : T.doScrollBy(-T.view.h), c = !0);
                break;

              case 27:
                T.zoomactive && (T.doZoom(), c = !0);
            }

            if (c) return T.cancelEvent(e);
          }
        }, M.enablekeyboard && T.bind(l, P.isopera && !P.isopera12 ? "keypress" : "keydown", T.onkeypress), T.bind(l, "keydown", function (e) {
          (e.ctrlKey || !1) && (T.wheelprevented = !0);
        }), T.bind(l, "keyup", function (e) {
          e.ctrlKey || !1 || (T.wheelprevented = !1);
        }), T.bind(a, "blur", function (e) {
          T.wheelprevented = !1;
        }), T.bind(a, "resize", T.onscreenresize), T.bind(a, "orientationchange", T.onscreenresize), T.bind(a, "load", T.lazyResize), P.ischrome && !T.ispage && !T.haswrapper) {
          var C = T.win.attr("style"),
              N = parseFloat(T.win.css("width")) + 1;
          T.win.css("width", N), T.synched("chromefix", function () {
            T.win.attr("style", C);
          });
        }

        if (T.onAttributeChange = function (e) {
          T.lazyResize(T.isieold ? 250 : 30);
        }, M.enableobserver && (T.isie11 || !1 === m || (T.observerbody = new m(function (e) {
          if (e.forEach(function (e) {
            if ("attributes" == e.type) return E.hasClass("modal-open") && E.hasClass("modal-dialog") && !n.contains(n(".modal-dialog")[0], T.doc[0]) ? T.hide() : T.show();
          }), T.me.clientWidth != T.page.width || T.me.clientHeight != T.page.height) return T.lazyResize(30);
        }), T.observerbody.observe(l.body, {
          childList: !0,
          subtree: !0,
          characterData: !1,
          attributes: !0,
          attributeFilter: ["class"]
        })), !T.ispage && !T.haswrapper)) {
          var R = T.win[0];
          !1 !== m ? (T.observer = new m(function (e) {
            e.forEach(T.onAttributeChange);
          }), T.observer.observe(R, {
            childList: !0,
            characterData: !1,
            attributes: !0,
            subtree: !1
          }), T.observerremover = new m(function (e) {
            e.forEach(function (e) {
              if (e.removedNodes.length > 0) for (var o in e.removedNodes) {
                if (T && e.removedNodes[o] === R) return T.remove();
              }
            });
          }), T.observerremover.observe(R.parentNode, {
            childList: !0,
            characterData: !1,
            attributes: !1,
            subtree: !1
          })) : (T.bind(R, P.isie && !P.isie9 ? "propertychange" : "DOMAttrModified", T.onAttributeChange), P.isie9 && R.attachEvent("onpropertychange", T.onAttributeChange), T.bind(R, "DOMNodeRemoved", function (e) {
            e.target === R && T.remove();
          }));
        }

        !T.ispage && M.boxzoom && T.bind(a, "resize", T.resizeZoom), T.istextarea && (T.bind(T.win, "keydown", T.lazyResize), T.bind(T.win, "mouseup", T.lazyResize)), T.lazyResize(30);
      }

      if ("IFRAME" == this.doc[0].nodeName) {
        var _ = function _() {
          T.iframexd = !1;
          var o;

          try {
            (o = "contentDocument" in this ? this.contentDocument : this.contentWindow._doc).domain;
          } catch (e) {
            T.iframexd = !0, o = !1;
          }

          if (T.iframexd) return "console" in a && console.log("NiceScroll error: policy restriced iframe"), !0;

          if (T.forcescreen = !0, T.isiframe && (T.iframe = {
            doc: n(o),
            html: T.doc.contents().find("html")[0],
            body: T.doc.contents().find("body")[0]
          }, T.getContentSize = function () {
            return {
              w: Math.max(T.iframe.html.scrollWidth, T.iframe.body.scrollWidth),
              h: Math.max(T.iframe.html.scrollHeight, T.iframe.body.scrollHeight)
            };
          }, T.docscroll = n(T.iframe.body)), !P.isios && M.iframeautoresize && !T.isiframe) {
            T.win.scrollTop(0), T.doc.height("");
            var t = Math.max(o.getElementsByTagName("html")[0].scrollHeight, o.body.scrollHeight);
            T.doc.height(t);
          }

          T.lazyResize(30), T.css(n(T.iframe.body), e), P.isios && T.haswrapper && T.css(n(o.body), {
            "-webkit-transform": "translate3d(0,0,0)"
          }), "contentWindow" in this ? T.bind(this.contentWindow, "scroll", T.onscroll) : T.bind(o, "scroll", T.onscroll), M.enablemousewheel && T.mousewheel(o, T.onmousewheel), M.enablekeyboard && T.bind(o, P.isopera ? "keypress" : "keydown", T.onkeypress), P.cantouch ? (T.bind(o, "touchstart", T.ontouchstart), T.bind(o, "touchmove", T.ontouchmove)) : M.emulatetouch && (T.bind(o, "mousedown", T.ontouchstart), T.bind(o, "mousemove", function (e) {
            return T.ontouchmove(e, !0);
          }), M.grabcursorenabled && P.cursorgrabvalue && T.css(n(o.body), {
            cursor: P.cursorgrabvalue
          })), T.bind(o, "mouseup", T.ontouchend), T.zoom && (M.dblclickzoom && T.bind(o, "dblclick", T.doZoom), T.ongesturezoom && T.bind(o, "gestureend", T.ongesturezoom));
        };

        this.doc[0].readyState && "complete" === this.doc[0].readyState && setTimeout(function () {
          _.call(T.doc[0], !1);
        }, 500), T.bind(this.doc, "load", _);
      }
    }, this.showCursor = function (e, o) {
      if (T.cursortimeout && (clearTimeout(T.cursortimeout), T.cursortimeout = 0), T.rail) {
        if (T.autohidedom && (T.autohidedom.stop().css({
          opacity: M.cursoropacitymax
        }), T.cursoractive = !0), T.rail.drag && 1 == T.rail.drag.pt || (void 0 !== e && !1 !== e && (T.scroll.y = e / T.scrollratio.y | 0), void 0 !== o && (T.scroll.x = o / T.scrollratio.x | 0)), T.cursor.css({
          height: T.cursorheight,
          top: T.scroll.y
        }), T.cursorh) {
          var t = T.hasreversehr ? T.scrollvaluemaxw - T.scroll.x : T.scroll.x;
          T.cursorh.css({
            width: T.cursorwidth,
            left: !T.rail.align && T.rail.visibility ? t + T.rail.width : t
          }), T.cursoractive = !0;
        }

        T.zoom && T.zoom.stop().css({
          opacity: M.cursoropacitymax
        });
      }
    }, this.hideCursor = function (e) {
      T.cursortimeout || T.rail && T.autohidedom && (T.hasmousefocus && "leave" === M.autohidemode || (T.cursortimeout = setTimeout(function () {
        T.rail.active && T.showonmouseevent || (T.autohidedom.stop().animate({
          opacity: M.cursoropacitymin
        }), T.zoom && T.zoom.stop().animate({
          opacity: M.cursoropacitymin
        }), T.cursoractive = !1), T.cursortimeout = 0;
      }, e || M.hidecursordelay)));
    }, this.noticeCursor = function (e, o, t) {
      T.showCursor(o, t), T.rail.active || T.hideCursor(e);
    }, this.getContentSize = T.ispage ? function () {
      return {
        w: Math.max(l.body.scrollWidth, l.documentElement.scrollWidth),
        h: Math.max(l.body.scrollHeight, l.documentElement.scrollHeight)
      };
    } : T.haswrapper ? function () {
      return {
        w: T.doc[0].offsetWidth,
        h: T.doc[0].offsetHeight
      };
    } : function () {
      return {
        w: T.docscroll[0].scrollWidth,
        h: T.docscroll[0].scrollHeight
      };
    }, this.onResize = function (e, o) {
      if (!T || !T.win) return !1;
      var t = T.page.maxh,
          r = T.page.maxw,
          i = T.view.h,
          s = T.view.w;

      if (T.view = {
        w: T.ispage ? T.win.width() : T.win[0].clientWidth,
        h: T.ispage ? T.win.height() : T.win[0].clientHeight
      }, T.page = o || T.getContentSize(), T.page.maxh = Math.max(0, T.page.h - T.view.h), T.page.maxw = Math.max(0, T.page.w - T.view.w), T.page.maxh == t && T.page.maxw == r && T.view.w == s && T.view.h == i) {
        if (T.ispage) return T;
        var n = T.win.offset();

        if (T.lastposition) {
          var l = T.lastposition;
          if (l.top == n.top && l.left == n.left) return T;
        }

        T.lastposition = n;
      }

      return 0 === T.page.maxh ? (T.hideRail(), T.scrollvaluemax = 0, T.scroll.y = 0, T.scrollratio.y = 0, T.cursorheight = 0, T.setScrollTop(0), T.rail && (T.rail.scrollable = !1)) : (T.page.maxh -= M.railpadding.top + M.railpadding.bottom, T.rail.scrollable = !0), 0 === T.page.maxw ? (T.hideRailHr(), T.scrollvaluemaxw = 0, T.scroll.x = 0, T.scrollratio.x = 0, T.cursorwidth = 0, T.setScrollLeft(0), T.railh && (T.railh.scrollable = !1)) : (T.page.maxw -= M.railpadding.left + M.railpadding.right, T.railh && (T.railh.scrollable = M.horizrailenabled)), T.railslocked = T.locked || 0 === T.page.maxh && 0 === T.page.maxw, T.railslocked ? (T.ispage || T.updateScrollBar(T.view), !1) : (T.hidden || (T.rail.visibility || T.showRail(), T.railh && !T.railh.visibility && T.showRailHr()), T.istextarea && T.win.css("resize") && "none" != T.win.css("resize") && (T.view.h -= 20), T.cursorheight = Math.min(T.view.h, Math.round(T.view.h * (T.view.h / T.page.h))), T.cursorheight = M.cursorfixedheight ? M.cursorfixedheight : Math.max(M.cursorminheight, T.cursorheight), T.cursorwidth = Math.min(T.view.w, Math.round(T.view.w * (T.view.w / T.page.w))), T.cursorwidth = M.cursorfixedheight ? M.cursorfixedheight : Math.max(M.cursorminheight, T.cursorwidth), T.scrollvaluemax = T.view.h - T.cursorheight - (M.railpadding.top + M.railpadding.bottom), T.hasborderbox || (T.scrollvaluemax -= T.cursor[0].offsetHeight - T.cursor[0].clientHeight), T.railh && (T.railh.width = T.page.maxh > 0 ? T.view.w - T.rail.width : T.view.w, T.scrollvaluemaxw = T.railh.width - T.cursorwidth - (M.railpadding.left + M.railpadding.right)), T.ispage || T.updateScrollBar(T.view), T.scrollratio = {
        x: T.page.maxw / T.scrollvaluemaxw,
        y: T.page.maxh / T.scrollvaluemax
      }, T.getScrollTop() > T.page.maxh ? T.doScrollTop(T.page.maxh) : (T.scroll.y = T.getScrollTop() / T.scrollratio.y | 0, T.scroll.x = T.getScrollLeft() / T.scrollratio.x | 0, T.cursoractive && T.noticeCursor()), T.scroll.y && 0 === T.getScrollTop() && T.doScrollTo(T.scroll.y * T.scrollratio.y | 0), T);
    }, this.resize = T.onResize;
    var O = 0;
    this.onscreenresize = function (e) {
      clearTimeout(O);
      var o = !T.ispage && !T.haswrapper;
      o && T.hideRails(), O = setTimeout(function () {
        T && (o && T.showRails(), T.resize()), O = 0;
      }, 120);
    }, this.lazyResize = function (e) {
      return clearTimeout(O), e = isNaN(e) ? 240 : e, O = setTimeout(function () {
        T && T.resize(), O = 0;
      }, e), T;
    }, this.jqbind = function (e, o, t) {
      T.events.push({
        e: e,
        n: o,
        f: t,
        q: !0
      }), n(e).on(o, t);
    }, this.mousewheel = function (e, o, t) {
      var r = "jquery" in e ? e[0] : e;
      if ("onwheel" in l.createElement("div")) T._bind(r, "wheel", o, t || !1);else {
        var i = void 0 !== l.onmousewheel ? "mousewheel" : "DOMMouseScroll";
        S(r, i, o, t || !1), "DOMMouseScroll" == i && S(r, "MozMousePixelScroll", o, t || !1);
      }
    };
    var Y = !1;

    if (P.haseventlistener) {
      try {
        var H = Object.defineProperty({}, "passive", {
          get: function get() {
            Y = !0;
          }
        });
        a.addEventListener("test", null, H);
      } catch (e) {}

      this.stopPropagation = function (e) {
        return !!e && ((e = e.original ? e.original : e).stopPropagation(), !1);
      }, this.cancelEvent = function (e) {
        return e.cancelable && e.preventDefault(), e.stopImmediatePropagation(), e.preventManipulation && e.preventManipulation(), !1;
      };
    } else Event.prototype.preventDefault = function () {
      this.returnValue = !1;
    }, Event.prototype.stopPropagation = function () {
      this.cancelBubble = !0;
    }, a.constructor.prototype.addEventListener = l.constructor.prototype.addEventListener = Element.prototype.addEventListener = function (e, o, t) {
      this.attachEvent("on" + e, o);
    }, a.constructor.prototype.removeEventListener = l.constructor.prototype.removeEventListener = Element.prototype.removeEventListener = function (e, o, t) {
      this.detachEvent("on" + e, o);
    }, this.cancelEvent = function (e) {
      return (e = e || a.event) && (e.cancelBubble = !0, e.cancel = !0, e.returnValue = !1), !1;
    }, this.stopPropagation = function (e) {
      return (e = e || a.event) && (e.cancelBubble = !0), !1;
    };

    this.delegate = function (e, o, t, r, i) {
      var s = d[o] || !1;
      s || (s = {
        a: [],
        l: [],
        f: function f(e) {
          for (var o = s.l, t = !1, r = o.length - 1; r >= 0; r--) {
            if (!1 === (t = o[r].call(e.target, e))) return !1;
          }

          return t;
        }
      }, T.bind(e, o, s.f, r, i), d[o] = s), T.ispage ? (s.a = [T.id].concat(s.a), s.l = [t].concat(s.l)) : (s.a.push(T.id), s.l.push(t));
    }, this.undelegate = function (e, o, t, r, i) {
      var s = d[o] || !1;
      if (s && s.l) for (var n = 0, l = s.l.length; n < l; n++) {
        s.a[n] === T.id && (s.a.splice(n), s.l.splice(n), 0 === s.a.length && (T._unbind(e, o, s.l.f), d[o] = null));
      }
    }, this.bind = function (e, o, t, r, i) {
      var s = "jquery" in e ? e[0] : e;

      T._bind(s, o, t, r || !1, i || !1);
    }, this._bind = function (e, o, t, r, i) {
      T.events.push({
        e: e,
        n: o,
        f: t,
        b: r,
        q: !1
      }), Y && i ? e.addEventListener(o, t, {
        passive: !1,
        capture: r
      }) : e.addEventListener(o, t, r || !1);
    }, this._unbind = function (e, o, t, r) {
      d[o] ? T.undelegate(e, o, t, r) : e.removeEventListener(o, t, r);
    }, this.unbindAll = function () {
      for (var e = 0; e < T.events.length; e++) {
        var o = T.events[e];
        o.q ? o.e.unbind(o.n, o.f) : T._unbind(o.e, o.n, o.f, o.b);
      }
    }, this.showRails = function () {
      return T.showRail().showRailHr();
    }, this.showRail = function () {
      return 0 === T.page.maxh || !T.ispage && "none" == T.win.css("display") || (T.rail.visibility = !0, T.rail.css("display", "block")), T;
    }, this.showRailHr = function () {
      return T.railh && (0 === T.page.maxw || !T.ispage && "none" == T.win.css("display") || (T.railh.visibility = !0, T.railh.css("display", "block"))), T;
    }, this.hideRails = function () {
      return T.hideRail().hideRailHr();
    }, this.hideRail = function () {
      return T.rail.visibility = !1, T.rail.css("display", "none"), T;
    }, this.hideRailHr = function () {
      return T.railh && (T.railh.visibility = !1, T.railh.css("display", "none")), T;
    }, this.show = function () {
      return T.hidden = !1, T.railslocked = !1, T.showRails();
    }, this.hide = function () {
      return T.hidden = !0, T.railslocked = !0, T.hideRails();
    }, this.toggle = function () {
      return T.hidden ? T.show() : T.hide();
    }, this.remove = function () {
      T.stop(), T.cursortimeout && clearTimeout(T.cursortimeout);

      for (var e in T.delaylist) {
        T.delaylist[e] && h(T.delaylist[e].h);
      }

      T.doZoomOut(), T.unbindAll(), P.isie9 && T.win[0].detachEvent("onpropertychange", T.onAttributeChange), !1 !== T.observer && T.observer.disconnect(), !1 !== T.observerremover && T.observerremover.disconnect(), !1 !== T.observerbody && T.observerbody.disconnect(), T.events = null, T.cursor && T.cursor.remove(), T.cursorh && T.cursorh.remove(), T.rail && T.rail.remove(), T.railh && T.railh.remove(), T.zoom && T.zoom.remove();

      for (var o = 0; o < T.saved.css.length; o++) {
        var t = T.saved.css[o];
        t[0].css(t[1], void 0 === t[2] ? "" : t[2]);
      }

      T.saved = !1, T.me.data("__nicescroll", "");
      var r = n.nicescroll;
      r.each(function (e) {
        if (this && this.id === T.id) {
          delete r[e];

          for (var o = ++e; o < r.length; o++, e++) {
            r[e] = r[o];
          }

          --r.length && delete r[r.length];
        }
      });

      for (var i in T) {
        T[i] = null, delete T[i];
      }

      T = null;
    }, this.scrollstart = function (e) {
      return this.onscrollstart = e, T;
    }, this.scrollend = function (e) {
      return this.onscrollend = e, T;
    }, this.scrollcancel = function (e) {
      return this.onscrollcancel = e, T;
    }, this.zoomin = function (e) {
      return this.onzoomin = e, T;
    }, this.zoomout = function (e) {
      return this.onzoomout = e, T;
    }, this.isScrollable = function (e) {
      var o = e.target ? e.target : e;
      if ("OPTION" == o.nodeName) return !0;

      for (; o && 1 == o.nodeType && o !== this.me[0] && !/^BODY|HTML/.test(o.nodeName);) {
        var t = n(o),
            r = t.css("overflowY") || t.css("overflowX") || t.css("overflow") || "";
        if (/scroll|auto/.test(r)) return o.clientHeight != o.scrollHeight;
        o = !!o.parentNode && o.parentNode;
      }

      return !1;
    }, this.getViewport = function (e) {
      for (var o = !(!e || !e.parentNode) && e.parentNode; o && 1 == o.nodeType && !/^BODY|HTML/.test(o.nodeName);) {
        var t = n(o);
        if (/fixed|absolute/.test(t.css("position"))) return t;
        var r = t.css("overflowY") || t.css("overflowX") || t.css("overflow") || "";
        if (/scroll|auto/.test(r) && o.clientHeight != o.scrollHeight) return t;
        if (t.getNiceScroll().length > 0) return t;
        o = !!o.parentNode && o.parentNode;
      }

      return !1;
    }, this.triggerScrollStart = function (e, o, t, r, i) {
      if (T.onscrollstart) {
        var s = {
          type: "scrollstart",
          current: {
            x: e,
            y: o
          },
          request: {
            x: t,
            y: r
          },
          end: {
            x: T.newscrollx,
            y: T.newscrolly
          },
          speed: i
        };
        T.onscrollstart.call(T, s);
      }
    }, this.triggerScrollEnd = function () {
      if (T.onscrollend) {
        var e = T.getScrollLeft(),
            o = T.getScrollTop(),
            t = {
          type: "scrollend",
          current: {
            x: e,
            y: o
          },
          end: {
            x: e,
            y: o
          }
        };
        T.onscrollend.call(T, t);
      }
    };
    var B = 0,
        X = 0,
        D = 0,
        A = 1,
        q = !1;
    if (this.onmousewheel = function (e) {
      if (T.wheelprevented || T.locked) return !1;
      if (T.railslocked) return T.debounced("checkunlock", T.resize, 250), !1;
      if (T.rail.drag) return T.cancelEvent(e);
      if ("auto" === M.oneaxismousemode && 0 !== e.deltaX && (M.oneaxismousemode = !1), M.oneaxismousemode && 0 === e.deltaX && !T.rail.scrollable) return !T.railh || !T.railh.scrollable || T.onmousewheelhr(e);
      var o = f(),
          t = !1;
      if (M.preservenativescrolling && T.checkarea + 600 < o && (T.nativescrollingarea = T.isScrollable(e), t = !0), T.checkarea = o, T.nativescrollingarea) return !0;
      var r = k(e, !1, t);
      return r && (T.checkarea = 0), r;
    }, this.onmousewheelhr = function (e) {
      if (!T.wheelprevented) {
        if (T.railslocked || !T.railh.scrollable) return !0;
        if (T.rail.drag) return T.cancelEvent(e);
        var o = f(),
            t = !1;
        return M.preservenativescrolling && T.checkarea + 600 < o && (T.nativescrollingarea = T.isScrollable(e), t = !0), T.checkarea = o, !!T.nativescrollingarea || (T.railslocked ? T.cancelEvent(e) : k(e, !0, t));
      }
    }, this.stop = function () {
      return T.cancelScroll(), T.scrollmon && T.scrollmon.stop(), T.cursorfreezed = !1, T.scroll.y = Math.round(T.getScrollTop() * (1 / T.scrollratio.y)), T.noticeCursor(), T;
    }, this.getTransitionSpeed = function (e) {
      return 80 + e / 72 * M.scrollspeed | 0;
    }, M.smoothscroll) {
      if (T.ishwscroll && P.hastransition && M.usetransition && M.smoothscroll) {
        var j = "";
        this.resetTransition = function () {
          j = "", T.doc.css(P.prefixstyle + "transition-duration", "0ms");
        }, this.prepareTransition = function (e, o) {
          var t = o ? e : T.getTransitionSpeed(e),
              r = t + "ms";
          return j !== r && (j = r, T.doc.css(P.prefixstyle + "transition-duration", r)), t;
        }, this.doScrollLeft = function (e, o) {
          var t = T.scrollrunning ? T.newscrolly : T.getScrollTop();
          T.doScrollPos(e, t, o);
        }, this.doScrollTop = function (e, o) {
          var t = T.scrollrunning ? T.newscrollx : T.getScrollLeft();
          T.doScrollPos(t, e, o);
        }, this.cursorupdate = {
          running: !1,
          start: function start() {
            var e = this;

            if (!e.running) {
              e.running = !0;

              var o = function o() {
                e.running && u(o), T.showCursor(T.getScrollTop(), T.getScrollLeft()), T.notifyScrollEvent(T.win[0]);
              };

              u(o);
            }
          },
          stop: function stop() {
            this.running = !1;
          }
        }, this.doScrollPos = function (e, o, t) {
          var r = T.getScrollTop(),
              i = T.getScrollLeft();
          if (((T.newscrolly - r) * (o - r) < 0 || (T.newscrollx - i) * (e - i) < 0) && T.cancelScroll(), M.bouncescroll ? (o < 0 ? o = o / 2 | 0 : o > T.page.maxh && (o = T.page.maxh + (o - T.page.maxh) / 2 | 0), e < 0 ? e = e / 2 | 0 : e > T.page.maxw && (e = T.page.maxw + (e - T.page.maxw) / 2 | 0)) : (o < 0 ? o = 0 : o > T.page.maxh && (o = T.page.maxh), e < 0 ? e = 0 : e > T.page.maxw && (e = T.page.maxw)), T.scrollrunning && e == T.newscrollx && o == T.newscrolly) return !1;
          T.newscrolly = o, T.newscrollx = e;
          var s = T.getScrollTop(),
              n = T.getScrollLeft(),
              l = {};
          l.x = e - n, l.y = o - s;
          var a = 0 | Math.sqrt(l.x * l.x + l.y * l.y),
              c = T.prepareTransition(a);
          T.scrollrunning || (T.scrollrunning = !0, T.triggerScrollStart(n, s, e, o, c), T.cursorupdate.start()), T.scrollendtrapped = !0, P.transitionend || (T.scrollendtrapped && clearTimeout(T.scrollendtrapped), T.scrollendtrapped = setTimeout(T.onScrollTransitionEnd, c)), T.setScrollTop(T.newscrolly), T.setScrollLeft(T.newscrollx);
        }, this.cancelScroll = function () {
          if (!T.scrollendtrapped) return !0;
          var e = T.getScrollTop(),
              o = T.getScrollLeft();
          return T.scrollrunning = !1, P.transitionend || clearTimeout(P.transitionend), T.scrollendtrapped = !1, T.resetTransition(), T.setScrollTop(e), T.railh && T.setScrollLeft(o), T.timerscroll && T.timerscroll.tm && clearInterval(T.timerscroll.tm), T.timerscroll = !1, T.cursorfreezed = !1, T.cursorupdate.stop(), T.showCursor(e, o), T;
        }, this.onScrollTransitionEnd = function () {
          if (T.scrollendtrapped) {
            var e = T.getScrollTop(),
                o = T.getScrollLeft();
            if (e < 0 ? e = 0 : e > T.page.maxh && (e = T.page.maxh), o < 0 ? o = 0 : o > T.page.maxw && (o = T.page.maxw), e != T.newscrolly || o != T.newscrollx) return T.doScrollPos(o, e, M.snapbackspeed);
            T.scrollrunning && T.triggerScrollEnd(), T.scrollrunning = !1, T.scrollendtrapped = !1, T.resetTransition(), T.timerscroll = !1, T.setScrollTop(e), T.railh && T.setScrollLeft(o), T.cursorupdate.stop(), T.noticeCursor(!1, e, o), T.cursorfreezed = !1;
          }
        };
      } else this.doScrollLeft = function (e, o) {
        var t = T.scrollrunning ? T.newscrolly : T.getScrollTop();
        T.doScrollPos(e, t, o);
      }, this.doScrollTop = function (e, o) {
        var t = T.scrollrunning ? T.newscrollx : T.getScrollLeft();
        T.doScrollPos(t, e, o);
      }, this.doScrollPos = function (e, o, t) {
        var r = T.getScrollTop(),
            i = T.getScrollLeft();
        ((T.newscrolly - r) * (o - r) < 0 || (T.newscrollx - i) * (e - i) < 0) && T.cancelScroll();
        var s = !1;
        if (T.bouncescroll && T.rail.visibility || (o < 0 ? (o = 0, s = !0) : o > T.page.maxh && (o = T.page.maxh, s = !0)), T.bouncescroll && T.railh.visibility || (e < 0 ? (e = 0, s = !0) : e > T.page.maxw && (e = T.page.maxw, s = !0)), T.scrollrunning && T.newscrolly === o && T.newscrollx === e) return !0;
        T.newscrolly = o, T.newscrollx = e, T.dst = {}, T.dst.x = e - i, T.dst.y = o - r, T.dst.px = i, T.dst.py = r;
        var n = 0 | Math.sqrt(T.dst.x * T.dst.x + T.dst.y * T.dst.y),
            l = T.getTransitionSpeed(n);
        T.bzscroll = {};
        var a = s ? 1 : .58;
        T.bzscroll.x = new R(i, T.newscrollx, l, 0, 0, a, 1), T.bzscroll.y = new R(r, T.newscrolly, l, 0, 0, a, 1);
        f();

        var c = function c() {
          if (T.scrollrunning) {
            var e = T.bzscroll.y.getPos();
            T.setScrollLeft(T.bzscroll.x.getNow()), T.setScrollTop(T.bzscroll.y.getNow()), e <= 1 ? T.timer = u(c) : (T.scrollrunning = !1, T.timer = 0, T.triggerScrollEnd());
          }
        };

        T.scrollrunning || (T.triggerScrollStart(i, r, e, o, l), T.scrollrunning = !0, T.timer = u(c));
      }, this.cancelScroll = function () {
        return T.timer && h(T.timer), T.timer = 0, T.bzscroll = !1, T.scrollrunning = !1, T;
      };
    } else this.doScrollLeft = function (e, o) {
      var t = T.getScrollTop();
      T.doScrollPos(e, t, o);
    }, this.doScrollTop = function (e, o) {
      var t = T.getScrollLeft();
      T.doScrollPos(t, e, o);
    }, this.doScrollPos = function (e, o, t) {
      var r = e > T.page.maxw ? T.page.maxw : e;
      r < 0 && (r = 0);
      var i = o > T.page.maxh ? T.page.maxh : o;
      i < 0 && (i = 0), T.synched("scroll", function () {
        T.setScrollTop(i), T.setScrollLeft(r);
      });
    }, this.cancelScroll = function () {};
    this.doScrollBy = function (e, o) {
      z(0, e);
    }, this.doScrollLeftBy = function (e, o) {
      z(e, 0);
    }, this.doScrollTo = function (e, o) {
      var t = o ? Math.round(e * T.scrollratio.y) : e;
      t < 0 ? t = 0 : t > T.page.maxh && (t = T.page.maxh), T.cursorfreezed = !1, T.doScrollTop(e);
    }, this.checkContentSize = function () {
      var e = T.getContentSize();
      e.h == T.page.h && e.w == T.page.w || T.resize(!1, e);
    }, T.onscroll = function (e) {
      T.rail.drag || T.cursorfreezed || T.synched("scroll", function () {
        T.scroll.y = Math.round(T.getScrollTop() / T.scrollratio.y), T.railh && (T.scroll.x = Math.round(T.getScrollLeft() / T.scrollratio.x)), T.noticeCursor();
      });
    }, T.bind(T.docscroll, "scroll", T.onscroll), this.doZoomIn = function (e) {
      if (!T.zoomactive) {
        T.zoomactive = !0, T.zoomrestore = {
          style: {}
        };
        var o = ["position", "top", "left", "zIndex", "backgroundColor", "marginTop", "marginBottom", "marginLeft", "marginRight"],
            t = T.win[0].style;

        for (var r in o) {
          var i = o[r];
          T.zoomrestore.style[i] = void 0 !== t[i] ? t[i] : "";
        }

        T.zoomrestore.style.width = T.win.css("width"), T.zoomrestore.style.height = T.win.css("height"), T.zoomrestore.padding = {
          w: T.win.outerWidth() - T.win.width(),
          h: T.win.outerHeight() - T.win.height()
        }, P.isios4 && (T.zoomrestore.scrollTop = c.scrollTop(), c.scrollTop(0)), T.win.css({
          position: P.isios4 ? "absolute" : "fixed",
          top: 0,
          left: 0,
          zIndex: s + 100,
          margin: 0
        });
        var n = T.win.css("backgroundColor");
        return ("" === n || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(n)) && T.win.css("backgroundColor", "#fff"), T.rail.css({
          zIndex: s + 101
        }), T.zoom.css({
          zIndex: s + 102
        }), T.zoom.css("backgroundPosition", "0 -18px"), T.resizeZoom(), T.onzoomin && T.onzoomin.call(T), T.cancelEvent(e);
      }
    }, this.doZoomOut = function (e) {
      if (T.zoomactive) return T.zoomactive = !1, T.win.css("margin", ""), T.win.css(T.zoomrestore.style), P.isios4 && c.scrollTop(T.zoomrestore.scrollTop), T.rail.css({
        "z-index": T.zindex
      }), T.zoom.css({
        "z-index": T.zindex
      }), T.zoomrestore = !1, T.zoom.css("backgroundPosition", "0 0"), T.onResize(), T.onzoomout && T.onzoomout.call(T), T.cancelEvent(e);
    }, this.doZoom = function (e) {
      return T.zoomactive ? T.doZoomOut(e) : T.doZoomIn(e);
    }, this.resizeZoom = function () {
      if (T.zoomactive) {
        var e = T.getScrollTop();
        T.win.css({
          width: c.width() - T.zoomrestore.padding.w + "px",
          height: c.height() - T.zoomrestore.padding.h + "px"
        }), T.onResize(), T.setScrollTop(Math.min(T.page.maxh, e));
      }
    }, this.init(), n.nicescroll.push(this);
  },
      y = function y(e) {
    var o = this;
    this.nc = e, this.lastx = 0, this.lasty = 0, this.speedx = 0, this.speedy = 0, this.lasttime = 0, this.steptime = 0, this.snapx = !1, this.snapy = !1, this.demulx = 0, this.demuly = 0, this.lastscrollx = -1, this.lastscrolly = -1, this.chkx = 0, this.chky = 0, this.timer = 0, this.reset = function (e, t) {
      o.stop(), o.steptime = 0, o.lasttime = f(), o.speedx = 0, o.speedy = 0, o.lastx = e, o.lasty = t, o.lastscrollx = -1, o.lastscrolly = -1;
    }, this.update = function (e, t) {
      var r = f();
      o.steptime = r - o.lasttime, o.lasttime = r;
      var i = t - o.lasty,
          s = e - o.lastx,
          n = o.nc.getScrollTop() + i,
          l = o.nc.getScrollLeft() + s;
      o.snapx = l < 0 || l > o.nc.page.maxw, o.snapy = n < 0 || n > o.nc.page.maxh, o.speedx = s, o.speedy = i, o.lastx = e, o.lasty = t;
    }, this.stop = function () {
      o.nc.unsynched("domomentum2d"), o.timer && clearTimeout(o.timer), o.timer = 0, o.lastscrollx = -1, o.lastscrolly = -1;
    }, this.doSnapy = function (e, t) {
      var r = !1;
      t < 0 ? (t = 0, r = !0) : t > o.nc.page.maxh && (t = o.nc.page.maxh, r = !0), e < 0 ? (e = 0, r = !0) : e > o.nc.page.maxw && (e = o.nc.page.maxw, r = !0), r ? o.nc.doScrollPos(e, t, o.nc.opt.snapbackspeed) : o.nc.triggerScrollEnd();
    }, this.doMomentum = function (e) {
      var t = f(),
          r = e ? t + e : o.lasttime,
          i = o.nc.getScrollLeft(),
          s = o.nc.getScrollTop(),
          n = o.nc.page.maxh,
          l = o.nc.page.maxw;
      o.speedx = l > 0 ? Math.min(60, o.speedx) : 0, o.speedy = n > 0 ? Math.min(60, o.speedy) : 0;
      var a = r && t - r <= 60;
      (s < 0 || s > n || i < 0 || i > l) && (a = !1);
      var c = !(!o.speedy || !a) && o.speedy,
          d = !(!o.speedx || !a) && o.speedx;

      if (c || d) {
        var u = Math.max(16, o.steptime);

        if (u > 50) {
          var h = u / 50;
          o.speedx *= h, o.speedy *= h, u = 50;
        }

        o.demulxy = 0, o.lastscrollx = o.nc.getScrollLeft(), o.chkx = o.lastscrollx, o.lastscrolly = o.nc.getScrollTop(), o.chky = o.lastscrolly;

        var p = o.lastscrollx,
            m = o.lastscrolly,
            g = function g() {
          var e = f() - t > 600 ? .04 : .02;
          o.speedx && (p = Math.floor(o.lastscrollx - o.speedx * (1 - o.demulxy)), o.lastscrollx = p, (p < 0 || p > l) && (e = .1)), o.speedy && (m = Math.floor(o.lastscrolly - o.speedy * (1 - o.demulxy)), o.lastscrolly = m, (m < 0 || m > n) && (e = .1)), o.demulxy = Math.min(1, o.demulxy + e), o.nc.synched("domomentum2d", function () {
            if (o.speedx) {
              o.nc.getScrollLeft();
              o.chkx = p, o.nc.setScrollLeft(p);
            }

            if (o.speedy) {
              o.nc.getScrollTop();
              o.chky = m, o.nc.setScrollTop(m);
            }

            o.timer || (o.nc.hideCursor(), o.doSnapy(p, m));
          }), o.demulxy < 1 ? o.timer = setTimeout(g, u) : (o.stop(), o.nc.hideCursor(), o.doSnapy(p, m));
        };

        g();
      } else o.doSnapy(o.nc.getScrollLeft(), o.nc.getScrollTop());
    };
  },
      x = e.fn.scrollTop;

  e.cssHooks.pageYOffset = {
    get: function get(e, o, t) {
      var r = n.data(e, "__nicescroll") || !1;
      return r && r.ishwscroll ? r.getScrollTop() : x.call(e);
    },
    set: function set(e, o) {
      var t = n.data(e, "__nicescroll") || !1;
      return t && t.ishwscroll ? t.setScrollTop(parseInt(o)) : x.call(e, o), this;
    }
  }, e.fn.scrollTop = function (e) {
    if (void 0 === e) {
      var o = !!this[0] && (n.data(this[0], "__nicescroll") || !1);
      return o && o.ishwscroll ? o.getScrollTop() : x.call(this);
    }

    return this.each(function () {
      var o = n.data(this, "__nicescroll") || !1;
      o && o.ishwscroll ? o.setScrollTop(parseInt(e)) : x.call(n(this), e);
    });
  };
  var S = e.fn.scrollLeft;
  n.cssHooks.pageXOffset = {
    get: function get(e, o, t) {
      var r = n.data(e, "__nicescroll") || !1;
      return r && r.ishwscroll ? r.getScrollLeft() : S.call(e);
    },
    set: function set(e, o) {
      var t = n.data(e, "__nicescroll") || !1;
      return t && t.ishwscroll ? t.setScrollLeft(parseInt(o)) : S.call(e, o), this;
    }
  }, e.fn.scrollLeft = function (e) {
    if (void 0 === e) {
      var o = !!this[0] && (n.data(this[0], "__nicescroll") || !1);
      return o && o.ishwscroll ? o.getScrollLeft() : S.call(this);
    }

    return this.each(function () {
      var o = n.data(this, "__nicescroll") || !1;
      o && o.ishwscroll ? o.setScrollLeft(parseInt(e)) : S.call(n(this), e);
    });
  };

  var z = function z(e) {
    var o = this;
    if (this.length = 0, this.name = "nicescrollarray", this.each = function (e) {
      return n.each(o, e), o;
    }, this.push = function (e) {
      o[o.length] = e, o.length++;
    }, this.eq = function (e) {
      return o[e];
    }, e) for (var t = 0; t < e.length; t++) {
      var r = n.data(e[t], "__nicescroll") || !1;
      r && (this[this.length] = r, this.length++);
    }
    return this;
  };

  !function (e, o, t) {
    for (var r = 0, i = o.length; r < i; r++) {
      t(e, o[r]);
    }
  }(z.prototype, ["show", "hide", "toggle", "onResize", "resize", "remove", "stop", "doScrollPos"], function (e, o) {
    e[o] = function () {
      var e = arguments;
      return this.each(function () {
        this[o].apply(this, e);
      });
    };
  }), e.fn.getNiceScroll = function (e) {
    return void 0 === e ? new z(this) : this[e] && n.data(this[e], "__nicescroll") || !1;
  }, (e.expr.pseudos || e.expr[":"]).nicescroll = function (e) {
    return void 0 !== n.data(e, "__nicescroll");
  }, n.fn.niceScroll = function (e, o) {
    void 0 !== o || "object" != _typeof(e) || "jquery" in e || (o = e, e = !1);
    var t = new z();
    return this.each(function () {
      var r = n(this),
          i = n.extend({}, o);

      if (e) {
        var s = n(e);
        i.doc = s.length > 1 ? n(e, r) : s, i.win = r;
      }

      !("doc" in i) || "win" in i || (i.win = r);
      var l = r.data("__nicescroll") || !1;
      l || (i.doc = i.doc || r, l = new b(i, r), r.data("__nicescroll", l)), t.push(l);
    }), 1 === t.length ? t[0] : t;
  }, a.NiceScroll = {
    getjQuery: function getjQuery() {
      return e;
    }
  }, n.nicescroll || (n.nicescroll = new z(), n.nicescroll.options = g);
}); // components

$(document).ready(function () {
  $(".basket_list").niceScroll({
    cursorwidth: "8px",
    cursorborderradius: "5px",
    cursorcolor: "#8D8F9A"
  });
  $(".summary-cart__products-wrapper").niceScroll({
    cursorwidth: "8px",
    cursorborderradius: "5px",
    cursorcolor: "#8D8F9A"
  });
});
$(document).ready(function () {
  function testWebP(callback) {
    var webP = new Image();

    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };

    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  testWebP(function (support) {
    if (support == true) {
      document.querySelector('body').classList.add('webp');
    } else {
      document.querySelector('body').classList.add('no-webp');
    }
  });
});
$(document).ready(function () {
  $('.site_header__burger').click(function (event) {
    $('.site_header__burger, .side-categories__wrapper').toggleClass('active');
    $('body').toggleClass('lock');
  });
});
$(document).ready(function () {
  $('.nav__item').on('mouseenter', function () {
    $(body).addClass('lock');
    $(this).children('.popup').addClass('open');
    $(body).css({
      'padding-right': '17px'
    });
  }).on('mouseleave', function () {
    $(body).removeClass('lock');
    $(body).css({
      'padding-right': '0'
    });
    $(this).children('.popup').removeClass('open');
  });
});
$(document).ready(function () {
  $('.tabs-triggers__item').click(function (e) {
    e.preventDefault();
    var tabsid = $(this).closest('.tabs').attr("id");
    $('#' + tabsid + ' ' + '.tabs-triggers__item').removeClass('tabs-triggers__item--active');
    $('#' + tabsid + ' ' + '.tabs-content__item').removeClass('tabs-content__item--active');
    $(this).addClass('tabs-triggers__item--active');
    $($(this).attr('href')).addClass('tabs-content__item--active');
  });
  $('.tabs-triggers__item:first').click();
});
$(document).ready(function () {
  $('#sizeTabsSub .tabs-triggers__item:first').click();
  $('#mobileMenuTabs .tabs-triggers__item').removeClass('tabs-triggers__item--active');
  $('#mobileMenuTabs .tabs-content__item').removeClass('tabs-content__item--active');
});
$(document).ready(function () {
  $('.accordion__title').click(function (event) {
    var accordionid = $(this).closest('.accordion').attr("id");

    if ($('#' + accordionid).hasClass('accordion-one')) {
      $('#' + accordionid + ' ' + '.accordion__title').not($(this)).removeClass('active');
      $('#' + accordionid + ' ' + '.accordion__text').not($(this).next()).slideUp(300);
    }

    $(this).toggleClass('active').next().slideToggle(300);
  });
  $('.sorting__orderby').mousedown(function (event) {
    $('.sorting__orderby-wrapper span').toggleClass('active');
  });
  $(".sorting__orderby").change(function () {
    $('.sorting__orderby-wrapper span').removeClass('active');
  });
  $('.sorting__orderby').focusout(function () {
    $('.sorting__orderby-wrapper span').removeClass('active');
  });
});
$(document).ready(function () {
  var showMore = document.querySelector('.show-more__label');
  var catalogItem = document.querySelectorAll('.filter-catalog__item .title-h6');
  mediaQueryMdMin = window.matchMedia('(min-width: 768px)');
  mediaQuerySmMax = window.matchMedia('(max-width: 575px)'); // mediaQueryMdMin

  mediaQueryMdMin.addListener(handleTabletChange);

  function handleTabletChange(e) {
    if (e.matches) {
      if ($('#sideCategoriesMobileAccordion')) {
        $('#sideCategoriesMobileAccordion').removeClass('accordion');
        $('#sideCategoriesMobileAccordion .side-categories__item').removeClass('accordion__item');
        $('#sideCategoriesMobileAccordion .side-categories__title').removeClass('accordion__title');
        $('#sideCategoriesMobileAccordion .side-categories__text').removeClass('accordion__text');
        $('#sideCategoriesMobileAccordion .side-categories__text').css({
          display: "block"
        });
      }

      if (showMore) {
        showMore.innerHTML = "Показывать на странице";
      }

      if (catalogItem) {
        for (var index = 0; index < catalogItem.length; index++) {
          var catalogItems = catalogItem[index];
          catalogItems.classList.remove('accordion__title');
        }
      }

      if ($('.filter-catalog .accordion__text')) {
        $('.filter-catalog .accordion__text').css({
          display: "block"
        });
      }
    } else {
      if ($('#sideCategoriesMobileAccordion')) {
        $('#sideCategoriesMobileAccordion').addClass('accordion');
        $('#sideCategoriesMobileAccordion .side-categories__item').addClass('accordion__item');
        $('#sideCategoriesMobileAccordion .side-categories__title').addClass('accordion__title');
        $('#sideCategoriesMobileAccordion .side-categories__text').addClass('accordion__text');
      }

      if (showMore) {
        showMore.innerHTML = "Отображать товаров";
      }

      if (catalogItem) {
        for (var _index3 = 0; _index3 < catalogItem.length; _index3++) {
          var _catalogItems = catalogItem[_index3];

          _catalogItems.classList.add('accordion__title');
        }
      }
    }
  }

  if (mediaQueryMdMin.matches) {
    if ($('#sideCategoriesMobileAccordion')) {
      $('#sideCategoriesMobileAccordion').removeClass('accordion');
      $('#sideCategoriesMobileAccordion .side-categories__item').removeClass('accordion__item');
      $('#sideCategoriesMobileAccordion .side-categories__title').removeClass('accordion__title');
      $('#sideCategoriesMobileAccordion .side-categories__text').removeClass('accordion__text');
      $('#sideCategoriesMobileAccordion .filter-catalog .accordion__text').css({
        display: "block"
      });
    }

    if (catalogItem) {
      for (var index = 0; index < catalogItem.length; index++) {
        var catalogItems = catalogItem[index];
        catalogItems.classList.remove('accordion__title');
      }
    }

    if ($('.filter-catalog .accordion__text')) {
      $('.filter-catalog .accordion__text').css({
        display: "block"
      });
    }
  } else {
    if (showMore) {
      showMore.innerHTML = "Отображать товаров";
    }
  } // mediaQuerySmMax


  mediaQuerySmMax.addListener(handleTabletChangeSmMax);

  function handleTabletChangeSmMax(e) {
    if (e.matches) {
      if ($('.site_footer__block')) {
        $('.site_footer__block').removeClass('accordion');
        $('.site_footer__block .site_footer__text').removeClass('accordion__text');
        $('.site_footer__block .site_footer__text').css({
          display: "block"
        });
      }
    } else {
      if ($('.site_footer__block')) {
        $('.site_footer__block').addClass('accordion');
        $('.site_footer__block .site_footer__text').addClass('accordion__text');
      }
    }
  }

  if (mediaQuerySmMax.matches) {} else {
    if ($('.site_footer__block')) {
      $('.site_footer__block').removeClass('accordion');
      $('.site_footer__block .site_footer__text').removeClass('accordion__text');
      $('.site_footer__block .site_footer__text').css({
        display: "block"
      });
    }
  }
});
var popupLinks = document.querySelectorAll('.popup-link');
var body = document.querySelector('body');
var lockPadding = document.querySelectorAll(".lock-padding");
var unlock = true;
var timeout = 300;

if (popupLinks.length > 0) {
  var _loop = function _loop(index) {
    var popupLink = popupLinks[index];
    popupLink.addEventListener("click", function (e) {
      var popupName = popupLink.getAttribute('href').replace('#', '');
      var currentPopup = document.getElementById(popupName);
      popupOpen(currentPopup);
      e.preventDefault();
    });
  };

  for (var index = 0; index < popupLinks.length; index++) {
    _loop(index);
  }
}

var popupCloseIcon = document.querySelectorAll('.close-popup');

if (popupCloseIcon.length > 0) {
  var _loop2 = function _loop2(_index4) {
    var el = popupCloseIcon[_index4];
    el.addEventListener('click', function (e) {
      popupClose(el.closest('.popup'));
      e.preventDefault();
    });
  };

  for (var _index4 = 0; _index4 < popupCloseIcon.length; _index4++) {
    _loop2(_index4);
  }
}

function popupOpen(currentPopup) {
  if (currentPopup && unlock) {
    var popupActive = document.querySelector('.popup.open');

    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }

    currentPopup.classList.add('open');
    currentPopup.addEventListener('click', function (e) {
      if (!e.target.closest('.popup__content')) {
        popupClose(e.target.closest('.popup'));
      }
    });
  }
}

function popupClose(popupActive) {
  var doUnlock = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (unlock) {
    popupActive.classList.remove('open');

    if (doUnlock) {
      bodyUnLock();
    }
  }
}

function bodyLock() {
  var lockPaddingValue = window.innerWidth - document.querySelector('.site-main').offsetWidth + 'px'; //!обратить внимание на контейнер

  if (lockPadding.length > 0) {
    for (var _index5 = 0; _index5 < lockPadding.length; _index5++) {
      var el = lockPadding[_index5];
      el.style.paddingRight = lockPaddingValue;
    }
  }

  body.style.paddingRight = lockPaddingValue;
  body.classList.add('lock');
  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

function bodyUnLock() {
  setTimeout(function () {
    if (lockPadding.length > 0) {
      for (var _index6 = 0; _index6 < lockPadding.length; _index6++) {
        var el = lockPadding[_index6];
        el.style.paddingRight = '0px';
      }
    }

    body.style.paddingRight = '0px';
    body.classList.remove('lock');
  }, timeout);
  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

document.addEventListener('keydown', function (e) {
  if (e.which === 27) {
    var popupActive = document.querySelector('.popup.open');
    popupClose(popupActive);
  }
});

(function () {
  // проверяем поддержку
  if (!Element.prototype.closest) {
    // реализуем
    Element.prototype.closest = function (css) {
      var node = this;

      while (node) {
        if (node.matches(css)) return node;else node = node.parentElement;
      }

      return null;
    };
  }
})();

(function () {
  // проверяем поддержку
  if (!Element.prototype.matches) {
    // определяем свойство
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;
  }
})();

$(document).ready(function () {
  var select = function select() {
    var selectHeader = document.querySelectorAll('.custom-select');
    var selectItem = document.querySelectorAll('.custom-options__option');
    selectHeader.forEach(function (item) {
      item.addEventListener('click', selectToggle);
    });
    selectItem.forEach(function (item) {
      item.addEventListener('click', selectChoose);
    });

    function selectToggle() {
      this.classList.toggle('open');
    }

    function selectChoose() {
      var text = this.innerText,
          select = this.closest('.custom-select'),
          currentText = select.querySelector('.custom-select__trigger span');
      currentText.innerText = text;
      mediaQuery = window.matchMedia('(max-width: 767px)');

      if (mediaQuery.matches) {
        if (select.closest('.custom-select-wrapper').classList.contains('sorting__custom-select-wrapper')) {
          currentText.innerText = "Сортировка";
        }
      }

      var options = this.closest('.custom-options');
      var option = options.querySelectorAll('.custom-options__option');

      for (var _index7 = 0; _index7 < option.length; _index7++) {
        var element = option[_index7];
        element.classList.remove('selected');
      }

      this.classList.add("selected");
    }

    mediaQuery = window.matchMedia('(max-width: 767px)');
    mediaQuery.addListener(handleTabletChange);

    function handleTabletChange(e) {
      if (e.matches) {
        var trigger = document.querySelector('.sorting__custom-select-wrapper .custom-select__trigger span');

        if (trigger) {
          trigger.innerHTML = "Сортировка";
        }
      }
    }

    if (mediaQuery.matches) {
      var trigger = document.querySelector('.sorting__custom-select-wrapper .custom-select__trigger span');

      if (trigger) {
        trigger.innerHTML = "Сортировка";
      }
    }
  };

  select();
});
$(document).ready(function () {
  var workEmail = $('.email');
  var validateText = $(".input-group__valide-text");
  $(workEmail).on('change', function () {
    var workEmailProp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var input = $(this).val();

    if (workEmailProp.test(input) == false) {
      console.log($(this).parent());
      $(this).parent().removeClass('_valid');
      $(this).parent().addClass('_invalid');
      $(this).parent().children('.input-group__valide-text').slideDown(300).text("Что-то пошло не так");
    } else {
      $(this).parent().removeClass('_invalid');
      $(this).parent().addClass('_valid');
      $(this).parent().children('.input-group__valide-text').slideDown(300).text("Успешно");
    }
  }); // workEmail.onchange = () => {
  //     var workEmailProp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //     var input = workEmail.value;
  //     console.log(workEmail);
  //     if (workEmailProp.test(input) == false) {
  //         console.log(workEmail.child(validateText));
  //         console.log("Something is wrong");
  //     }
  //     else {
  //         console.log("All is good");
  //     }
  // };
});
$(document).ready(function () {
  var navOffset = $('.site_header__bottom').offset().top;
  $(window).scroll(function () {
    var scrolled = $(this).scrollTop();

    if (scrolled > navOffset) {
      $('.site_wrap').addClass('nav-fixed');
    } else if (scrolled < navOffset) {
      $('.site_wrap').removeClass('nav-fixed');
    }
  });
});
$(document).ready(function () {
  $('.slider_popular-goods').slick({
    autoplay: false,
    infinite: true,
    slidesToShow: 4,
    arrows: true,
    centerMode: false,
    variableWidth: false,
    prevArrow: '<button type="button" class="slick-prev"><i class="arrow-slider-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="arrow-slider-right"></i></button>',
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        dots: true,
        arrows: false
      }
    }, {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
        arrows: false,
        dots: true
      }
    }]
  }); // Ширина точек слайдера каталога

  $(function () {
    var sectionNumber = document.querySelectorAll('.sec-popular-goods').length;
    var slidesNumber = $('.slider_item').length;
    var slidesClonedNumber = $('.slider_item.slick-cloned').length;
    var dotsWidth = 100 / (slidesNumber - slidesClonedNumber) * sectionNumber;
    $('.slider_popular-goods .slick-dots li').width(dotsWidth + '%');
  });
  $('.banner-slider').slick({
    autoplay: true,
    infinite: true,
    slidesToShow: 1
  });
  $('.instagram__cards').slick({
    autoplay: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    prevArrow: '<button type="button" class="slick-prev"><i class="arrow-slider-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="arrow-slider-right"></i></button>',
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        arrows: false
      }
    }, {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        rows: 2,
        slidesPerRow: 2,
        arrows: false
      }
    }]
  });
});
$(document).ready(function () {
  $('.change-view-password-js').click(function () {
    var type = $(this).siblings('input').attr('type') == "text" ? "password" : 'text';
    $(this).siblings('input').prop('type', type); // $(this).toggleClass('');
  });
  $('.lk-wrapper__mb-navigation-btn').click(function (e) {
    e.preventDefault();

    if (window.innerWidth < 951) {
      $('.lk-wrapper__sidebar').addClass('lk-wrapper__sidebar--active');
    }
  });
  $('.lk-wrapper__sidebar-title').click(function () {
    if (window.innerWidth < 951) {
      $('.lk-wrapper__sidebar').removeClass('lk-wrapper__sidebar--active');
    }
  });
  $('.lk-wrapper__content-tab').click(function (e) {
    e.preventDefault();
    var href = $(this).attr('href');

    if (href !== '#') {
      $(this).siblings().removeClass('lk-wrapper__content-tab--active');
      $(this).addClass('lk-wrapper__content-tab--active');
      $('.lk-wrapper__content-box').removeClass('lk-wrapper__content-box--active');
      $(href).addClass('lk-wrapper__content-box--active');
    }
  });
  $('.lk-wrapper__content-tab').click(function (e) {
    e.preventDefault();
    var href = $(this).attr('href');

    if (href !== '#') {
      $(this).siblings().removeClass('lk-wrapper__content-tab--active');
      $(this).addClass('lk-wrapper__content-tab--active');
      $('.signin-wrapper__auth-box').removeClass('signin-wrapper__auth-box--active');
      $('.lk-wrapper__content-box').removeClass('signin-wrapper__auth-box--active');
      $(href).addClass('signin-wrapper__auth-box--active');
    }
  }); // Add address

  $('.lk-wrapper__add-address').click(function () {
    var clone = $('.lk-wrapper__form-address:first').clone();
    clone.find('input').val('');
    $(this).before(clone);
  }); // remove review

  $('.lk-reviews-item__remove').click(function (e) {
    e.preventDefault();
    var review = $(this).closest('.lk-reviews-item').fadeOut(400, function () {
      $(this).remove();
    });
  });
});
$(document).ready(function () {
  var checkoutStep = $('checkoutStep-1'); // if (checkoutStep) {
  //     $('#checkoutStep-1 input').blur(function () {
  //         if ($(this).val()) {
  //             $('#checkoutStep-2').slideDown(300);
  //         }
  //     });
  //     $('input:radio[name="delivery"]').change(function () {
  //         $('#checkoutStep-3').slideDown(300);
  //     })
  //     $('#checkoutStep-3 input').blur(function () {
  //         if ($('#step-checkout-name').val()
  //             && $('#step-checkout-surname').val()
  //             && $('#step-checkout-email').val()
  //             && $('#step-checkout-phone').val()) {
  //             $('#checkoutStep-4').slideDown(300);
  //         }
  //     });
  //     $('#checkoutStep-4 input').blur(function () {
  //         if ($('#step-checkout-street').val()
  //             && $('#step-checkout-house').val()
  //             && $('#step-checkout-corps').val()
  //             && $('#step-checkout-building').val()
  //             && $('#step-checkout-flat').val()) {
  //             $('#checkoutStep-5').slideDown(300);
  //         }
  //     });
  // }

  $('input:radio[name="payment"]').change(function () {
    var checkoutStepID = $(this).closest('.step-checkout').attr("id");
    $('#' + checkoutStepID + ' ' + '.radio-group__checked').not($(this).next()).slideUp(300);
    $(this).parent().children('.radio-group__checked').slideDown(300);
  });
  $('.radio-group__field').click(function (e) {
    var checkoutStepID = $(this).closest('.step-checkout').attr("id");
    $('#' + checkoutStepID + ' ' + '.radio-group').removeClass('_active');
    $(this).parent().addClass('_active');
  });
});
$(document).ready(function () {
  var promocode = $('#promocode');
  var promocodeTrue = 'EAZYWAY2020';
  var promocodeError = 'Промокод не найдет';
  var promocodeSuccess = 'Промокод успешно применен';
  promocode.blur(function () {
    if ($(this).val()) {
      $('.summary-cart__promocode-text').slideDown(300);

      if ($(this).val() == promocodeTrue) {
        $('.summary-cart__promocode-text').removeClass('_red');
        $('.summary-cart__promocode-text').addClass('_green');
        $('.summary-cart__promocode-text').text(promocodeSuccess);
      } else {
        $('.summary-cart__promocode-text').removeClass('_green');
        $('.summary-cart__promocode-text').addClass('_red');
        $('.summary-cart__promocode-text').text(promocodeError);
      }
    } else {
      $('.summary-cart__promocode-text').slideUp(300);
    }
  });
}) // !delete on release!!
;
$(document).ready(function () {
  $('#sideCategories-accordion .accordion__title:first').click();
  $('.help-tabs__item').click(function () {
    $('.popup').removeClass('open');
    $('body').removeClass('lock');
    $('body').css({
      paddingRight: 0
    });
    $('.help-page__menu-mobile a').removeClass('active');
  });
  $('.help-page__menu-mobile a').click(function () {
    $('.help-page__menu-mobile a').toggleClass('active');
  });
});