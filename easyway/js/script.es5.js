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
        wr = e("./helpers/caf.js"),
        Lr = e("./helpers/extend.js"),
        kr = e("./helpers/checkStorageValue.js"),
        Ar = e("./helpers/setLocalStorage.js"),
        Mr = e("./helpers/getSlideId.js"),
        _r = e("./helpers/calc.js"),
        xr = e("./helpers/percentageLayout.js"),
        Pr = e("./helpers/mediaquerySupport.js"),
        Tr = e("./helpers/createStyleSheet.js"),
        Or = e("./helpers/addCSSRule.js"),
        Br = e("./helpers/removeCSSRule.js"),
        Nr = e("./helpers/getCssRulesLength.js"),
        Rr = e("./helpers/toDegree.js"),
        zr = e("./helpers/getTouchDirection.js"),
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

    n.tns = function e(_) {
      _ = (0, Lr.extend)({
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
      }, _ || {});
      var x = document,
          m = window,
          a = {
        ENTER: 13,
        SPACE: 32,
        LEFT: 37,
        RIGHT: 39
      },
          t = {},
          n = _.useLocalStorage;

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

      var y = t.tC ? (0, kr.checkStorageValue)(t.tC) : (0, Ar.setLocalStorage)(t, "tC", (0, _r.calc)(), n),
          g = t.tPL ? (0, kr.checkStorageValue)(t.tPL) : (0, Ar.setLocalStorage)(t, "tPL", (0, xr.percentageLayout)(), n),
          P = t.tMQ ? (0, kr.checkStorageValue)(t.tMQ) : (0, Ar.setLocalStorage)(t, "tMQ", (0, Pr.mediaquerySupport)(), n),
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
        if ("string" == typeof _[e]) {
          var t = _[e],
              n = x.querySelector(t);
          if (h[e] = t, !n || !n.nodeName) return void (f && console.warn("Can't find", _[e]));
          _[e] = n;
        }
      }), !(_.container.children.length < 1)) {
        var T,
            O,
            p,
            B,
            N = _.responsive,
            R = _.nested,
            z = "carousel" === _.mode;

        if (N) {
          0 in N && (_ = (0, Lr.extend)(_, N[0]), delete N[0]);
          var C = {};

          for (var E in N) {
            var j = "number" == typeof (j = N[E]) ? {
              items: j
            } : j;
            C[E] = j;
          }

          N = C, C = null;
        }

        z || !function e(t) {
          for (var n in t) {
            z || ("slideBy" === n && (t[n] = "page"), "edgePadding" === n && (t[n] = !1), "autoHeight" === n && (t[n] = !1)), "responsive" === n && e(t[n]);
          }
        }(_), z || (_.axis = "horizontal", _.slideBy = "page", _.edgePadding = !1, T = _.animateIn, O = _.animateOut, p = _.animateDelay, B = _.animateNormal);
        var w,
            q,
            D = "horizontal" === _.axis,
            L = x.createElement("div"),
            I = x.createElement("div"),
            F = _.container,
            k = F.parentNode,
            A = F.outerHTML,
            H = F.children,
            V = H.length,
            W = tn(),
            G = !1;
        N && En(), z && (F.className += " tns-vpfix");

        var M,
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
            we,
            Le,
            ke,
            Ae,
            Me,
            _e,
            xe = _.autoWidth,
            Pe = on("fixedWidth"),
            Te = on("edgePadding"),
            Oe = on("gutter"),
            Be = rn(),
            Ne = on("center"),
            Re = xe ? 1 : Math.floor(on("items")),
            ze = on("slideBy"),
            qe = _.viewportMax || _.fixedWidthViewportWidth,
            De = on("arrowKeys"),
            Ie = on("speed"),
            Fe = _.rewind,
            He = !Fe && _.loop,
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
            et = (0, Tr.createStyleSheet)(null, on("nonce")),
            tt = _.lazyload,
            nt = _.lazyloadSelector,
            rt = [],
            at = He ? (X = function () {
          {
            if (xe || Pe && !qe) return V - 1;
            var e = Pe ? "fixedWidth" : "items",
                t = [];
            if ((Pe || _[e] < V) && t.push(_[e]), N) for (var n in N) {
              var r = N[n][e];
              r && (Pe || r < V) && t.push(r);
            }
            return t.length || t.push(0), Math.ceil(Pe ? qe / Math.min.apply(null, t) : Math.max.apply(null, t));
          }
        }(), Y = z ? Math.ceil((5 * X - V) / 2) : 4 * X - V, Y = Math.max(X, Y), an("edgePadding") ? Y + 1 : Y) : 0,
            ot = z ? V + 2 * at : V + at,
            it = !(!Pe && !xe || He),
            st = Pe ? Xn() : null,
            lt = !z || !He,
            ut = D ? "left" : "top",
            ct = "",
            dt = "",
            ft = Pe ? function () {
          return Ne && !He ? V - 1 : Math.ceil(-st / (Pe + Oe));
        } : xe ? function () {
          for (var e = 0; e < ot; e++) {
            if (M[e] >= -st) return e;
          }
        } : function () {
          return Ne && z && !He ? V - 1 : He || z ? Math.max(0, ot - Math.ceil(Re)) : ot - 1;
        },
            vt = $t(on("startIndex")),
            ht = vt,
            pt = (Jt(), 0),
            mt = xe ? null : ft(),
            yt = _.preventActionWhenRunning,
            gt = _.swipeAngle,
            bt = !gt || "?",
            St = !1,
            Ct = _.onInit,
            Et = new ta.Events(),
            jt = " tns-slider tns-" + _.mode,
            wt = F.id || (0, Mr.getSlideId)(),
            Lt = on("disable"),
            kt = !1,
            At = _.freezable,
            Mt = !(!At || xe) && Cn(),
            _t = !1,
            xt = {
          click: rr,
          keydown: function keydown(e) {
            e = dr(e);
            var t = [a.LEFT, a.RIGHT].indexOf(e.keyCode);
            0 <= t && (0 === t ? $.disabled || rr(e, -1) : Z.disabled || rr(e, 1));
          }
        },
            Pt = {
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
              (0, Hr.hasAttr)(t, "data-nav") && (n = ue = Number((0, Vr.getAttr)(t, "data-nav")), r = Pe || xe ? n * V / se : n * Re, nr(Dt ? n : Math.min(Math.ceil(r), V - 1), e), ce === n && (Se && lr(), ue = -1));
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
            Tt = {
          mouseover: function mouseover() {
            Se && (or(), Ce = !0);
          },
          mouseout: function mouseout() {
            Ce && (ar(), Ce = !1);
          }
        },
            Ot = {
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
            Nt = {
          touchstart: mr,
          touchmove: yr,
          touchend: gr,
          touchcancel: gr
        },
            Rt = {
          mousedown: mr,
          mousemove: yr,
          mouseup: gr,
          mouseleave: gr
        },
            zt = an("controls"),
            qt = an("nav"),
            Dt = !!xe || _.navAsThumbnails,
            It = an("autoplay"),
            Ft = an("touch"),
            Ht = an("mouseDrag"),
            Vt = "tns-slide-active",
            Wt = "tns-slide-cloned",
            Gt = "tns-complete",
            Ut = {
          load: function load(e) {
            Pn(fr(e));
          },
          error: function error(e) {
            !function (e) {
              (0, Ir.addClass)(e, "failed"), Tn(e);
            }(fr(e));
          }
        },
            Qt = "force" === _.preventScrollOnTouch;

        zt && (K = _.controlsContainer, J = _.controlsContainer ? _.controlsContainer.outerHTML : "", $ = _.prevButton, Z = _.nextButton, ee = _.prevButton ? _.prevButton.outerHTML : "", te = _.nextButton ? _.nextButton.outerHTML : ""), qt && (ae = _.navContainer, oe = _.navContainer ? _.navContainer.outerHTML : "", se = xe ? V : Sr(), le = 0, ue = -1, ce = en(), de = ce, fe = "tns-nav-active", ve = "Carousel Page ", he = " (Current Slide)"), It && (pe = "forward" === _.autoplayDirection ? 1 : -1, me = _.autoplayButton, ye = _.autoplayButton ? _.autoplayButton.outerHTML : "", ge = ["<span class='tns-visually-hidden'>", " animation</span>"]), (Ft || Ht) && (we = {}, Ae = !(Le = {}), _e = D ? function (e, t) {
          return e.x - t.x;
        } : function (e, t) {
          return e.y - t.y;
        }), xe || Kt(Lt || Mt), i && (ut = i, ct = "translate", dt = s ? (ct += D ? "3d(" : "3d(0px, ", D ? ", 0px, 0px)" : ", 0px)") : (ct += D ? "X(" : "Y(", ")")), z && (F.className = F.className.replace("tns-vpfix", "")), function () {
          an("gutter");
          L.className = "tns-outer", I.className = "tns-inner", L.id = wt + "-ow", I.id = wt + "-iw", "" === F.id && (F.id = wt);
          jt += g || xe ? " tns-subpixel" : " tns-no-subpixel", jt += y ? " tns-calc" : " tns-no-calc", xe && (jt += " tns-autowidth");
          jt += " tns-" + _.axis, F.className += jt, z ? ((w = x.createElement("div")).id = wt + "-mw", w.className = "tns-ovh", L.appendChild(w), w.appendChild(I)) : L.appendChild(I);
          {
            Ve && ((w || I).className += " tns-ah");
          }

          if (k.insertBefore(L, F), I.appendChild(F), (0, qr.forEach)(H, function (e, t) {
            (0, Ir.addClass)(e, "tns-item"), e.id || (e.id = wt + "-item" + t), !z && B && (0, Ir.addClass)(e, B), (0, Wr.setAttrs)(e, {
              "aria-hidden": "true",
              tabindex: "-1"
            });
          }), at) {
            for (var e = x.createDocumentFragment(), t = x.createDocumentFragment(), n = at; n--;) {
              var r,
                  a = n % V,
                  o = H[a].cloneNode(!0);
              (0, Ir.addClass)(o, Wt), (0, Gr.removeAttrs)(o, "id"), t.insertBefore(o, t.firstChild), z && (r = H[V - 1 - a].cloneNode(!0), (0, Ir.addClass)(r, Wt), (0, Gr.removeAttrs)(r, "id"), e.appendChild(r));
            }

            F.insertBefore(e, F.firstChild), F.appendChild(t), H = F.children;
          }
        }(), function () {
          if (!z) for (var e = vt, t = vt + Math.min(V, Re); e < t; e++) {
            var n = H[e];
            n.style.left = 100 * (e - vt) / Re + "%", (0, Ir.addClass)(n, T), (0, Fr.removeClass)(n, B);
          }
          D && (g || xe ? ((0, Or.addCSSRule)(et, "#" + wt + " > .tns-item", "font-size:" + m.getComputedStyle(H[0]).fontSize + ";", (0, Nr.getCssRulesLength)(et)), (0, Or.addCSSRule)(et, "#" + wt, "font-size:0;", (0, Nr.getCssRulesLength)(et))) : z && (0, qr.forEach)(H, function (e, t) {
            var n;
            e.style.marginLeft = (n = t, y ? y + "(" + 100 * n + "% / " + ot + ")" : 100 * n / ot + "%");
          }));
          {
            P ? (b && (o = w && _.autoHeight ? fn(_.speed) : "", (0, Or.addCSSRule)(et, "#" + wt + "-mw", o, (0, Nr.getCssRulesLength)(et))), o = sn(_.edgePadding, _.gutter, _.fixedWidth, _.speed, _.autoHeight), (0, Or.addCSSRule)(et, "#" + wt + "-iw", o, (0, Nr.getCssRulesLength)(et)), z && (o = D && !xe ? "width:" + ln(_.fixedWidth, _.gutter, _.items) + ";" : "", b && (o += fn(Ie)), (0, Or.addCSSRule)(et, "#" + wt, o, (0, Nr.getCssRulesLength)(et))), o = D && !xe ? un(_.fixedWidth, _.gutter, _.items) : "", _.gutter && (o += cn(_.gutter)), z || (b && (o += fn(Ie)), S && (o += vn(Ie)))) : (z && Ve && (w.style[b] = Ie / 1e3 + "s"), I.style.cssText = sn(Te, Oe, Pe, Ve), z && D && !xe && (F.style.width = ln(Pe, Oe, Re)), o = D && !xe ? un(Pe, Oe, Re) : "", Oe && (o += cn(Oe))), o && (0, Or.addCSSRule)(et, "#" + wt + " > .tns-item", o, (0, Nr.getCssRulesLength)(et));
          }
          if (N && P) for (var r in N) {
            r = parseInt(r);
            var a = N[r],
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
            b && w && on("autoHeight", r) && "speed" in a && (i = "#" + wt + "-mw{" + fn(f) + "}"), ("edgePadding" in a || "gutter" in a) && (s = "#" + wt + "-iw{" + sn(v, p, d, f, h) + "}"), z && D && !xe && ("fixedWidth" in a || "items" in a || Pe && "gutter" in a) && (l = "width:" + ln(d, p, c) + ";"), b && "speed" in a && (l += fn(f)), l = l && "#" + wt + "{" + l + "}", ("fixedWidth" in a || Pe && "gutter" in a || !z && "items" in a) && (u += un(d, p, c)), "gutter" in a && (u += cn(p)), !z && "speed" in a && (b && (u += fn(f)), S && (u += vn(f))), (o = i + s + l + (u = u && "#" + wt + " > .tns-item{" + u + "}")) && et.insertRule("@media (min-width: " + r / 16 + "em) {" + o + "}", et.cssRules.length);
          }
        }(), hn();
        var Xt = He ? z ? function () {
          var e = pt,
              t = mt;
          e += ze, t -= ze, Te ? (e += 1, --t) : Pe && (Be + Oe) % (Pe + Oe) && --t, at && (t < vt ? vt -= V : vt < e && (vt += V));
        } : function () {
          if (mt < vt) for (; pt + V <= vt;) {
            vt -= V;
          } else if (vt < pt) for (; vt <= mt - V;) {
            vt += V;
          }
        } : function () {
          vt = Math.max(pt, Math.min(mt, vt));
        },
            Yt = z ? function () {
          Un(F, ""), b || !Ie ? (Jn(), Ie && (0, Yr.isVisible)(F) || tr()) : (0, na.jsTransform)(F, ut, ct, dt, Yn(), Ie, tr), D || br();
        } : function () {
          rt = [];
          var e = {};
          e[c] = e[d] = tr, (0, ea.removeEvents)(H[ht], e), (0, Zr.addEvents)(H[vt], e), $n(ht, T, O, !0), $n(vt, B, T), c && d && Ie && (0, Yr.isVisible)(F) || tr();
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
            }), De && (0, ea.removeEvents)(x, Bt), K && (0, ea.removeEvents)(K, xt), ae && (0, ea.removeEvents)(ae, Pt), (0, ea.removeEvents)(F, Tt), (0, ea.removeEvents)(F, Ot), me && (0, ea.removeEvents)(me, {
              click: ur
            }), Ye && clearInterval(be), z && c && ((e = {})[c] = tr, (0, ea.removeEvents)(F, e)), Qe && (0, ea.removeEvents)(F, Nt), Xe && (0, ea.removeEvents)(F, Rt);
            var o = [A, J, ee, te, oe, ye];

            for (var t in v.forEach(function (e, t) {
              var n,
                  r,
                  a = "container" === e ? L : _[e];
              "object" === ra(a) && a && (n = !!a.previousElementSibling && a.previousElementSibling, r = a.parentNode, a.outerHTML = o[t], _[e] = n ? n.nextElementSibling : r.firstElementChild);
            }), v = T = O = p = B = D = L = I = F = k = A = H = V = q = W = xe = Pe = Te = Oe = Be = Re = ze = qe = De = Ie = Fe = He = Ve = et = tt = M = rt = at = ot = it = st = lt = ut = ct = dt = ft = vt = ht = pt = mt = gt = bt = St = Ct = Et = jt = wt = Lt = kt = At = Mt = _t = xt = Pt = Tt = Ot = Bt = Nt = Rt = zt = qt = Dt = It = Ht = Vt = Gt = Ut = U = We = Ge = K = J = $ = Z = ne = re = Ue = ae = oe = ie = se = le = ue = ce = de = fe = ve = he = Ye = Ke = pe = Je = $e = me = ye = Ze = ge = be = Se = Ce = Ee = je = we = Le = ke = Ae = Me = _e = Qe = Xe = null, this) {
              "rebuild" !== t && (this[t] = null);
            }

            G = !1;
          },
          rebuild: function rebuild() {
            return e((0, Lr.extend)(_, h));
          }
        };
      }

      function Kt(e) {
        e && (We = Ue = Qe = Xe = De = Ye = $e = Ze = !1);
      }

      function Jt() {
        for (var e = z ? vt - at : vt; e < 0;) {
          e += V;
        }

        return e % V + 1;
      }

      function $t(e) {
        return e = e ? Math.max(0, Math.min(He ? V - 1 : V - Re, e)) : 0, z ? e + at : e;
      }

      function Zt(e) {
        for (null == e && (e = vt), z && (e -= at); e < 0;) {
          e += V;
        }

        return Math.floor(e % V);
      }

      function en() {
        var e = Zt(),
            t = Dt ? e : Pe || xe ? Math.ceil((e + 1) * se / V - 1) : Math.floor(e / Re);
        return !He && z && vt === mt && (t = se - 1), t;
      }

      function tn() {
        return m.innerWidth || x.documentElement.clientWidth || x.body.clientWidth;
      }

      function nn(e) {
        return "top" === e ? "afterbegin" : "beforeend";
      }

      function rn() {
        var e = Te ? 2 * Te - Oe : 0;
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
        if (_[e]) return !0;
        if (N) for (var t in N) {
          if (N[t][e]) return !0;
        }
        return !1;
      }

      function on(e, t) {
        if (null == t && (t = W), "items" === e && Pe) return Math.floor((Be + Oe) / (Pe + Oe)) || 1;
        var n = _[e];
        if (N) for (var r in N) {
          t >= parseInt(r) && e in N[r] && (n = N[r][e]);
        }
        return "slideBy" === e && "page" === n && (n = on("items")), z || "slideBy" !== e && "items" !== e || (n = Math.floor(n)), n;
      }

      function sn(e, t, n, r, a) {
        var o,
            i,
            s = "";
        return void 0 !== e ? (o = e, t && (o -= t), s = D ? "margin: 0 " + o + "px 0 " + e + "px;" : "margin: " + e + "px 0 " + o + "px 0;") : t && !n && (i = "-" + t + "px", s = "margin: 0 " + (D ? i + " 0 0" : "0 " + i + " 0") + ";"), !z && a && b && r && (s += fn(r)), s;
      }

      function ln(e, t, n) {
        return e ? (e + t) * ot + "px" : y ? y + "(" + 100 * ot + "% / " + n + ")" : 100 * ot / n + "%";
      }

      function un(e, t, n) {
        var r, a;
        return a = "width:" + (a = e ? e + t + "px" : (z || (n = Math.floor(n)), r = z ? ot : n, y ? y + "(100% / " + r + ")" : 100 / r + "%")), "inner" !== R ? a + ";" : a + " !important;";
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
          tt || (t && t.indexOf("data:image") < 0 ? ((e.src = "", Zr.addEvents)(e, Ut), (0, Ir.addClass)(e, "loading"), e.src = t) : Pn(e));
        }), (0, jr.raf)(function () {
          Nn((0, Ur.arrayFromNodeList)(e), function () {
            U = !0;
          });
        }), an("autoHeight") && (e = On(vt, Math.min(vt + Re - 1, ot - 1))), tt ? pn() : (0, jr.raf)(function () {
          Nn((0, Ur.arrayFromNodeList)(e), pn);
        })) : (z && Kn(), yn(), gn());
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
        D && !xe || (Dn(), xe ? (st = Xn(), At && (Mt = Cn()), mt = ft(), Kt(Lt || Mt)) : br()), z && Kn(), yn(), gn();
      }

      function yn() {
        var e;

        if (In(), L.insertAdjacentHTML("afterbegin", '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + Mn() + "</span>  of " + V + "</div>"), Q = L.querySelector(".tns-liveregion .current"), It && (e = Ye ? "stop" : "start", me ? (0, Wr.setAttrs)(me, {
          "data-action": e
        }) : _.autoplayButtonOutput && (L.insertAdjacentHTML(nn(_.autoplayPosition), '<button type="button" data-action="' + e + '">' + ge[0] + e + ge[1] + Je[0] + "</button>"), me = L.querySelector("[data-action]")), me && (0, Zr.addEvents)(me, {
          click: ur
        }), Ye && (sr(), $e && (0, Zr.addEvents)(F, Tt), Ze && (0, Zr.addEvents)(F, Ot))), qt) {
          var t, n;
          if (ae) (0, Wr.setAttrs)(ae, {
            "aria-label": "Carousel Pagination"
          }), ie = ae.children, (0, qr.forEach)(ie, function (e, t) {
            (0, Wr.setAttrs)(e, {
              "data-nav": t,
              tabindex: "-1",
              "aria-label": ve + (t + 1),
              "aria-controls": wt
            });
          });else {
            for (var r = "", a = Dt ? "" : 'style="display:none"', o = 0; o < V; o++) {
              r += '<button type="button" data-nav="' + o + '" tabindex="-1" aria-controls="' + wt + '" ' + a + ' aria-label="' + ve + (o + 1) + '"></button>';
            }

            r = '<div class="tns-nav" aria-label="Carousel Pagination">' + r + "</div>", L.insertAdjacentHTML(nn(_.navPosition), r), ae = L.querySelector(".tns-nav"), ie = ae.children;
          }
          Cr(), b && (t = b.substring(0, b.length - 18).toLowerCase(), n = "transition: all " + Ie / 1e3 + "s", t && (n = "-" + t + "-" + n), (0, Or.addCSSRule)(et, "[aria-controls^=" + wt + "-item]", n, (0, Nr.getCssRulesLength)(et))), (0, Wr.setAttrs)(ie[ce], {
            "aria-label": ve + (ce + 1) + he
          }), (0, Gr.removeAttrs)(ie[ce], "tabindex"), (0, Ir.addClass)(ie[ce], fe), (0, Zr.addEvents)(ae, Pt);
        }

        zt && (K || $ && Z || (L.insertAdjacentHTML(nn(_.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' + wt + '">' + Ge[0] + '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' + wt + '">' + Ge[1] + "</button></div>"), K = L.querySelector(".tns-controls")), $ && Z || ($ = K.children[0], Z = K.children[1]), _.controlsContainer && (0, Wr.setAttrs)(K, {
          "aria-label": "Carousel Navigation",
          tabindex: "0"
        }), (_.controlsContainer || _.prevButton && _.nextButton) && (0, Wr.setAttrs)([$, Z], {
          "aria-controls": wt,
          tabindex: "-1"
        }), (_.controlsContainer || _.prevButton && _.nextButton) && ((0, Wr.setAttrs)($, {
          "data-controls": "prev"
        }), (0, Wr.setAttrs)(Z, {
          "data-controls": "next"
        })), ne = Hn($), re = Hn(Z), Gn(), K ? (0, Zr.addEvents)(K, xt) : ((0, Zr.addEvents)($, xt), (0, Zr.addEvents)(Z, xt))), jn();
      }

      function gn() {
        var e;
        z && c && ((e = {})[c] = tr, (0, Zr.addEvents)(F, e)), Qe && (0, Zr.addEvents)(F, Nt, _.preventScrollOnTouch), Xe && (0, Zr.addEvents)(F, Rt), De && (0, Zr.addEvents)(x, Bt), "inner" === R ? Et.on("outerResized", function () {
          Sn(), Et.emit("innerLoaded", Er());
        }) : (N || Pe || xe || Ve || !D) && (0, Zr.addEvents)(m, {
          resize: bn
        }), Ve && ("outer" === R ? Et.on("innerLoaded", Bn) : Lt || Bn()), xn(), Lt ? kn() : Mt && Ln(), Et.on("indexChanged", Rn), "inner" === R && Et.emit("innerLoaded", Er()), "function" == typeof Ct && Ct(Er()), G = !0;
      }

      function bn(e) {
        (0, jr.raf)(function () {
          Sn(dr(e));
        });
      }

      function Sn(e) {
        var t, n, r, a, o, i, s, l, u, c, d, f, v, h, p, m, y, g, b, S, C, E, j, w, L, k, A, M;
        G && ("outer" === R && Et.emit("outerResized", Er(e)), W = tn(), n = q, r = !1, N && (En(), (t = n !== q) && Et.emit("newBreakpointStart", Er(e))), i = Re, s = Lt, l = Mt, u = De, c = We, d = Ue, f = Qe, v = Xe, h = Ye, p = $e, m = Ze, y = vt, t && (g = Pe, b = Ve, S = Ge, C = Ne, E = Je, P || (j = Oe, w = Te)), De = on("arrowKeys"), We = on("controls"), Ue = on("nav"), Qe = on("touch"), Ne = on("center"), Xe = on("mouseDrag"), Ye = on("autoplay"), $e = on("autoplayHoverPause"), Ze = on("autoplayResetOnVisibility"), t && (Lt = on("disable"), Pe = on("fixedWidth"), Ie = on("speed"), Ve = on("autoHeight"), Ge = on("controlsText"), Je = on("autoplayText"), Ke = on("autoplayTimeout"), P || (Te = on("edgePadding"), Oe = on("gutter"))), Kt(Lt), Be = rn(), D && !xe || Lt || (Dn(), D || (br(), r = !0)), (Pe || xe) && (st = Xn(), mt = ft()), (t || Pe) && (Re = on("items"), ze = on("slideBy"), (o = Re !== i) && (Pe || xe || (mt = ft()), Xt())), t && Lt !== s && (Lt ? kn : function () {
          if (!kt) return;
          if (et.disabled = !1, F.className += jt, Kn(), He) for (var e = at; e--;) {
            z && (0, Xr.showElement)(H[e]), (0, Xr.showElement)(H[ot - e - 1]);
          }
          if (!z) for (var t = vt, n = vt + V; t < n; t++) {
            var r = H[t],
                a = t < vt + Re ? T : B;
            r.style.left = 100 * (t - vt) / Re + "%", (0, Ir.addClass)(r, a);
          }
          wn(), kt = !1;
        })(), At && (t || Pe || xe) && (Mt = Cn()) !== l && (Mt ? (Jn(Yn($t(0))), Ln()) : (function () {
          if (!_t) return;
          Te && P && (I.style.margin = "");
          if (at) for (var e = "tns-transparent", t = at; t--;) {
            z && (0, Fr.removeClass)(H[t], e), (0, Fr.removeClass)(H[ot - t - 1], e);
          }
          wn(), _t = !1;
        }(), r = !0)), Kt(Lt || Mt), Ye || ($e = Ze = !1), De !== u && (De ? (0, Zr.addEvents) : (0, ea.removeEvents))(x, Bt), We !== c && (We ? K ? (0, Xr.showElement)(K) : ($ && (0, Xr.showElement)($), Z && (0, Xr.showElement)(Z)) : K ? (0, Qr.hideElement)(K) : ($ && (0, Qr.hideElement)($), Z && (0, Qr.hideElement)(Z))), Ue !== d && (Ue ? ((0, Xr.showElement)(ae), Cr()) : (0, Qr.hideElement)(ae)), Qe !== f && (Qe ? (0, Zr.addEvents)(F, Nt, _.preventScrollOnTouch) : (0, ea.removeEvents)(F, Nt)), Xe !== v && (Xe ? (0, Zr.addEvents) : (0, ea.removeEvents))(F, Rt), Ye !== h && (Ye ? (me && (0, Xr.showElement)(me), Se || Ee || sr()) : (me && (0, Qr.hideElement)(me), Se && lr())), $e !== p && ($e ? (0, Zr.addEvents) : (0, ea.removeEvents))(F, Tt), Ze !== m && (Ze ? (0, Zr.addEvents) : (0, ea.removeEvents))(x, Ot), t ? (Pe === g && Ne === C || (r = !0), Ve !== b && (Ve || (I.style.height = "")), We && Ge !== S && ($.innerHTML = Ge[0], Z.innerHTML = Ge[1]), me && Je !== E && (L = Ye ? 1 : 0, A = (k = me.innerHTML).length - E[L].length, k.substring(A) === E[L] && (me.innerHTML = k.substring(0, A) + Je[L]))) : Ne && (Pe || xe) && (r = !0), (o || Pe && !xe) && (se = Sr(), Cr()), (a = vt !== y) ? (Et.emit("indexChanged", Er()), r = !0) : o ? a || Rn() : (Pe || xe) && (xn(), In(), An()), o && !z && function () {
          for (var e = vt + Math.min(V, Re), t = ot; t--;) {
            var n = H[t];
            vt <= t && t < e ? ((0, Ir.addClass)(n, "tns-moving"), n.style.left = 100 * (t - vt) / Re + "%", (0, Ir.addClass)(n, T), (0, Fr.removeClass)(n, B)) : n.style.left && ((n.style.left = "", Ir.addClass)(n, B), (0, Fr.removeClass)(n, T)), (0, Fr.removeClass)(n, O);
          }

          setTimeout(function () {
            (0, qr.forEach)(H, function (e) {
              (0, Fr.removeClass)(e, "tns-moving");
            });
          }, 300);
        }(), Lt || Mt || (t && !P && (Te === w && Oe === j || (I.style.cssText = sn(Te, Oe, Pe, Ie, Ve)), D && (z && (F.style.width = ln(Pe, Oe, Re)), M = un(Pe, Oe, Re) + cn(Oe), (0, Br.removeCSSRule)(et, (0, Nr.getCssRulesLength)(et) - 1), (0, Or.addCSSRule)(et, "#" + wt + " > .tns-item", M, (0, Nr.getCssRulesLength)(et)))), Ve && Bn(), r && (Kn(), ht = vt)), t && Et.emit("newBreakpointEnd", Er(e)));
      }

      function Cn() {
        if (!Pe && !xe) return V <= (Ne ? Re - (Re - 1) / 2 : Re);
        var e = Pe ? (Pe + Oe) * V : M[V],
            t = Te ? Be + 2 * Te : Be + Oe;
        return Ne && (t -= Pe ? (Be - Pe) / 2 : (Be - (M[vt + 1] - M[vt] - Oe)) / 2), e <= t;
      }

      function En() {
        for (var e in q = 0, N) {
          (e = parseInt(e)) <= W && (q = e);
        }
      }

      function jn() {
        !Ye && me && (0, Qr.hideElement)(me), !Ue && ae && (0, Qr.hideElement)(ae), We || (K ? (0, Qr.hideElement)(K) : ($ && (0, Qr.hideElement)($), Z && (0, Qr.hideElement)(Z)));
      }

      function wn() {
        Ye && me && (0, Xr.showElement)(me), Ue && ae && (0, Xr.showElement)(ae), We && (K ? (0, Xr.showElement)(K) : ($ && (0, Xr.showElement)($), Z && (0, Xr.showElement)(Z)));
      }

      function Ln() {
        if (!_t) {
          if (Te && (I.style.margin = "0px"), at) for (var e = "tns-transparent", t = at; t--;) {
            z && (0, Ir.addClass)(H[t], e), (0, Ir.addClass)(H[ot - t - 1], e);
          }
          jn(), _t = !0;
        }
      }

      function kn() {
        if (!kt) {
          if (et.disabled = !0, F.className = F.className.replace(jt.substring(1), ""), (0, Gr.removeAttrs)(F, ["style"]), He) for (var e = at; e--;) {
            z && (0, Qr.hideElement)(H[e]), (0, Qr.hideElement)(H[ot - e - 1]);
          }
          if (D && z || (0, Gr.removeAttrs)(I, ["style"]), !z) for (var t = vt, n = vt + V; t < n; t++) {
            var r = H[t];
            (0, Gr.removeAttrs)(r, ["style"]), (0, Fr.removeClass)(r, T), (0, Fr.removeClass)(r, B);
          }
          jn(), kt = !0;
        }
      }

      function An() {
        var e = Mn();
        Q.innerHTML !== e && (Q.innerHTML = e);
      }

      function Mn() {
        var e = _n(),
            t = e[0] + 1,
            n = e[1] + 1;

        return t === n ? t + "" : t + " to " + n;
      }

      function _n(e) {
        null == e && (e = Yn());
        var n,
            r,
            t,
            a,
            o,
            i,
            s = vt;
        return Ne || Te ? (xe || Pe) && (n = -(parseFloat(e) + Te), r = n + Be + 2 * Te) : xe && (n = M[vt], r = n + Be), xe ? M.forEach(function (e, t) {
          t < ot && ((Ne || Te) && e <= n + .5 && (s = t), .5 <= r - e && (a = t));
        }) : (a = Pe ? (t = Pe + Oe, Ne || Te ? (s = Math.floor(n / t), Math.ceil(r / t - 1)) : s + Math.ceil(Be / t) - 1) : Ne || Te ? (o = Re - 1, a = Ne ? (s -= o / 2, vt + o / 2) : vt + o, Te && (s -= i = Te * Re / Be, a += i), s = Math.floor(s), Math.ceil(a)) : s + Re - 1, s = Math.max(s, 0), a = Math.min(a, ot - 1)), [s, a];
      }

      function xn() {
        var e;
        tt && !Lt && ((e = _n()).push(nt), On.apply(null, e).forEach(function (e) {
          var t, n;
          (0, Dr.hasClass)(e, Gt) || ((t = {})[c] = function (e) {
            e.stopPropagation();
          }, (0, Zr.addEvents)(e, t), (0, Zr.addEvents)(e, Ut), e.src = (0, Vr.getAttr)(e, "data-src"), (n = (0, Vr.getAttr)(e, "data-srcset")) && (e.srcset = n), (0, Ir.addClass)(e, "loading"));
        }));
      }

      function Pn(e) {
        (0, Ir.addClass)(e, "loaded"), Tn(e);
      }

      function Tn(e) {
        (0, Ir.addClass)(e, Gt), (0, Fr.removeClass)(e, "loading"), (0, ea.removeEvents)(e, Ut);
      }

      function On(e, t, n) {
        var r = [];

        for (n = n || "img"; e <= t;) {
          (0, qr.forEach)(H[e].querySelectorAll(n), function (e) {
            r.push(e);
          }), e++;
        }

        return r;
      }

      function Bn() {
        var e = On.apply(null, _n());
        (0, jr.raf)(function () {
          Nn(e, qn);
        });
      }

      function Nn(n, e) {
        return U ? e() : (n.forEach(function (e, t) {
          !tt && e.complete && Tn(e), (0, Dr.hasClass)(e, Gt) && n.splice(t, 1);
        }), n.length ? void (0, jr.raf)(function () {
          Nn(n, e);
        }) : e());
      }

      function Rn() {
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

      function zn(e, t) {
        for (var n = [], r = e, a = Math.min(e + t, ot); r < a; r++) {
          n.push(H[r].offsetHeight);
        }

        return Math.max.apply(null, n);
      }

      function qn() {
        var e = Ve ? zn(vt, Re) : zn(at, V),
            t = w || I;
        t.style.height !== e && (t.style.height = e + "px");
      }

      function Dn() {
        M = [0];
        var n = D ? "left" : "top",
            r = D ? "right" : "bottom",
            a = H[0].getBoundingClientRect()[n];
        (0, qr.forEach)(H, function (e, t) {
          t && M.push(e.getBoundingClientRect()[n] - a), t === ot - 1 && M.push(e.getBoundingClientRect()[r] - a);
        });
      }

      function In() {
        var e = _n(),
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
        return null == e && (e = vt), xe ? (Be - (Te ? Oe : 0) - (M[e + 1] - M[e] - Oe)) / 2 : Pe ? (Be - Pe) / 2 : (Re - 1) / 2;
      }

      function Xn() {
        var e = Be + (Te ? Oe : 0) - (Pe ? (Pe + Oe) * ot : M[ot]);
        return Ne && !He && (e = Pe ? -(Pe + Oe) * (ot - 1) - Qn() : Qn(ot - 1) - M[ot - 1]), 0 < e && (e = 0), e;
      }

      function Yn(e) {
        var t, n;
        return null == e && (e = vt), D && !xe ? Pe ? (t = -(Pe + Oe) * e, Ne && (t += Qn())) : (n = i ? ot : Re, Ne && (e -= Qn()), t = 100 * -e / n) : (t = -M[e], Ne && xe && (t += Qn())), it && (t = Math.max(t, st)), t += !D || xe || Pe ? "px" : "%";
      }

      function Kn(e) {
        Un(F, "0s"), Jn(e);
      }

      function Jn(e) {
        null == e && (e = Yn()), F.style[ut] = ct + e + dt;
      }

      function $n(e, t, n, r) {
        var a = e + Re;
        He || (a = Math.min(a, ot));

        for (var o = e; o < a; o++) {
          var i = H[o];
          r || (i.style.left = 100 * (o - vt) / Re + "%"), p && l && (i.style[l] = i.style[u] = p * (o - e) / 1e3 + "s"), (0, Fr.removeClass)(i, t), (0, Ir.addClass)(i, n), r && rt.push(i);
        }
      }

      function Zn(e, t) {
        lt && Xt(), vt === ht && !t || (Et.emit("indexChanged", Er()), Et.emit("transitionStart", Er()), Ve && Bn(), Se && e && 0 <= ["click", "keydown"].indexOf(e.type) && lr(), St = !0, Yt());
      }

      function er(e) {
        return e.toLowerCase().replace(/-/g, "");
      }

      function tr(e) {
        if (z || St) {
          if (Et.emit("transitionEnd", Er(e)), !z && 0 < rt.length) for (var t = 0; t < rt.length; t++) {
            var n = rt[t];
            n.style.left = "", u && l && (n.style[u] = "", n.style[l] = ""), (0, Fr.removeClass)(n, O), (0, Ir.addClass)(n, B);
          }
          var r;
          (!e || !z && e.target.parentNode === F || e.target === F && er(e.propertyName) === er(ut)) && (lt || (r = vt, Xt(), vt !== r && (Et.emit("indexChanged", Er()), Kn())), "inner" === R && Et.emit("innerLoaded", Er()), St = !1, ht = vt);
        }
      }

      function nr(e, t) {
        if (!Mt) if ("prev" === e) rr(t, -1);else if ("next" === e) rr(t, 1);else {
          if (St) {
            if (yt) return;
            tr();
          }

          var n,
              r = Zt(),
              a = 0;
          "first" === e ? a = -r : "last" === e ? a = z ? V - Re - r : V - 1 - r : ("number" != typeof e && (e = parseInt(e)), isNaN(e) || (t || (e = Math.max(0, Math.min(V - 1, e))), a = e - r)), !z && a && Math.abs(a) < Re && (n = 0 < a ? 1 : -1, a += pt <= vt + a - V ? V * n : 2 * V * n * -1), vt += a, z && He && (vt < pt && (vt += V), mt < vt && (vt -= V)), Zt(vt) !== Zt(ht) && Zn(t);
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

        t && (vt += ze * t, xe && (vt = Math.floor(vt)), Zn(n || e && "keydown" === e.type ? e : null));
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
        return (0, zr.getTouchDirection)((0, Rr.toDegree)(Le.y - we.y, Le.x - we.x), gt) === _.axis;
      }

      function mr(e) {
        if (St) {
          if (yt) return;
          tr();
        }

        Ye && Se && or(), Ae = !0, Me && ((0, wr.caf)(Me), Me = null);
        var t = dr(e);
        Et.emit(vr(e) ? "touchStart" : "dragStart", Er(e)), !vr(e) && 0 <= ["img", "a"].indexOf(Fn(fr(e))) && hr(e), Le.x = we.x = t.clientX, Le.y = we.y = t.clientY, z && (ke = parseFloat(F.style[ut].replace(ct, "")), Un(F, "0s"));
      }

      function yr(e) {
        var t;
        Ae && (t = dr(e), Le.x = t.clientX, Le.y = t.clientY, z ? Me = Me || (0, jr.raf)(function () {
          !function e(t) {
            if (!bt) return void (Ae = !1);
            (0, wr.caf)(Me);
            Ae && (Me = (0, jr.raf)(function () {
              e(t);
            }));
            "?" === bt && (bt = pr());

            if (bt) {
              !Qt && vr(t) && (Qt = !0);

              try {
                t.type && Et.emit(vr(t) ? "touchMove" : "dragMove", Er(t));
              } catch (e) {}

              var n = ke,
                  r = _e(Le, we);

              !D || Pe || xe ? (n += r, n += "px") : (n += i ? r * Re * 100 / ((Be + Oe) * ot) : 100 * r / (Be + Oe), n += "%"), F.style[ut] = ct + n + dt;
            }
          }(e);
        }) : ("?" === bt && (bt = pr()), bt && (Qt = !0)), ("boolean" != typeof e.cancelable || e.cancelable) && Qt && e.preventDefault());
      }

      function gr(r) {
        var e, a, n;
        Ae && (Me && ((0, wr.caf)(Me), Me = null), z && Un(F, ""), Ae = !1, e = dr(r), Le.x = e.clientX, Le.y = e.clientY, a = _e(Le, we), Math.abs(a) && (vr(r) || (n = fr(r), (0, Zr.addEvents)(n, {
          click: function e(t) {
            hr(t), (0, ea.removeEvents)(n, {
              click: e
            });
          }
        })), z ? Me = (0, jr.raf)(function () {
          if (D && !xe) {
            var e = -a * Re / (Be + Oe),
                e = 0 < a ? Math.floor(e) : Math.ceil(e);
            vt += e;
          } else {
            var t = -(ke + a);
            if (t <= 0) vt = pt;else if (t >= M[ot - 1]) vt = mt;else for (var n = 0; n < ot && t >= M[n];) {
              t > M[vt = n] && a < 0 && (vt += 1), n++;
            }
          }

          Zn(r, a), Et.emit(vr(r) ? "touchEnd" : "dragEnd", Er(r));
        }) : bt && rr(r, 0 < a ? -1 : 1))), "auto" === _.preventScrollOnTouch && (Qt = !1), gt && (bt = "?"), Ye && !Se && ar();
      }

      function br() {
        (w || I).style.height = M[vt + Re] - M[vt] + "px";
      }

      function Sr() {
        var e = Pe ? (Pe + Oe) * V / Be : V / Re;
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
          hasControls: zt,
          prevButton: $,
          nextButton: Z,
          items: Re,
          slideBy: ze,
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

      f && console.warn("No slides found in", _.container);
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
            swipeAngle: !1,
            speed: 400
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

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n["default"] = void 0;
    var r = e("tiny-slider/src/tiny-slider");

    n["default"] = function e() {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, e), this.popularGoodsSlider = document.getElementById("popular-goods-slider"), this.popularGoodsSlider && (0, r.tns)({
        container: "#popular-goods-slider",
        items: 4,
        mouseDrag: !0,
        nav: !1,
        swipeAngle: !1,
        speed: 400,
        gutter: 20,
        edgePadding: 0,
        controlsText: ['<i class="arrow-slider-left"></i>', '<i class="arrow-slider-right"></i>'],
        responsive: {
          1200: {
            items: 4,
            edgePadding: 0
          },
          992: {
            items: 3,
            edgePadding: 0
          },
          575: {
            items: 2,
            edgePadding: 0
          },
          320: {
            gutter: 7,
            edgePadding: 20,
            items: 2
          }
        }
      });
    };
  }, {
    "tiny-slider/src/tiny-slider": 42
  }],
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
  52: [function (e, t, n) {
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
          window.addEventListener("resize", function () {
            var e, t;
            575 < window.innerWidth ? (e = n[0].getAttribute("data-tab"), t = document.getElementById(e), n[0].classList.add("is-active"), t.classList.add("is-active")) : r.map(function (e) {
              var t = e.getAttribute("data-tab"),
                  n = document.getElementById(t);
              e.closest(".product-tab");
              e.classList.remove("is-active"), n.classList.remove("is-active");
            });
          });
        }
      }]) && a(e.prototype, t), r && a(e, r), n;
    }();

    n["default"] = r;
  }, {}],
  53: [function (e, t, n) {
    "use strict";

    var r = v(e("./modules/ProductSize")),
        a = v(e("./modules/Basket")),
        o = v(e("./modules/TableSize")),
        i = v(e("./modules/ProductCardAdd")),
        s = v(e("./modules/Sliders")),
        l = v(e("./modules/productTab")),
        u = v(e("./modules/Selector")),
        c = v(e("./modules/ColorChange")),
        d = v(e("./modules/CountProduct")),
        f = v(e("./modules/ProductGallery"));

    function v(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    new r["default"](), new a["default"](), new o["default"](), new i["default"](), new s["default"](), new l["default"](), new u["default"](), new c["default"](), new d["default"](), new f["default"]();
  }, {
    "./modules/Basket": 43,
    "./modules/ColorChange": 44,
    "./modules/CountProduct": 45,
    "./modules/ProductCardAdd": 46,
    "./modules/ProductGallery": 47,
    "./modules/ProductSize": 48,
    "./modules/Selector": 49,
    "./modules/Sliders": 50,
    "./modules/TableSize": 51,
    "./modules/productTab": 52
  }]
}, {}, [53]); // libs 

(function (factory) {
  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object") {
    // Node/CommonJS
    module.exports = factory();
  } else {
    // Browser globals
    window.noUiSlider = factory();
  }
})(function () {
  "use strict";

  var VERSION = "%%REPLACE_THIS_WITH_VERSION%%"; //region Helper Methods

  function isValidFormatter(entry) {
    return _typeof(entry) === "object" && typeof entry.to === "function" && typeof entry.from === "function";
  }

  function removeElement(el) {
    el.parentElement.removeChild(el);
  }

  function isSet(value) {
    return value !== null && value !== undefined;
  } // Bindable version


  function preventDefault(e) {
    e.preventDefault();
  } // Removes duplicates from an array.


  function unique(array) {
    return array.filter(function (a) {
      return !this[a] ? this[a] = true : false;
    }, {});
  } // Round a value to the closest 'to'.


  function closest(value, to) {
    return Math.round(value / to) * to;
  } // Current position of an element relative to the document.


  function offset(elem, orientation) {
    var rect = elem.getBoundingClientRect();
    var doc = elem.ownerDocument;
    var docElem = doc.documentElement;
    var pageOffset = getPageOffset(doc); // getBoundingClientRect contains left scroll in Chrome on Android.
    // I haven't found a feature detection that proves this. Worst case
    // scenario on mis-match: the 'tap' feature on horizontal sliders breaks.

    if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) {
      pageOffset.x = 0;
    }

    return orientation ? rect.top + pageOffset.y - docElem.clientTop : rect.left + pageOffset.x - docElem.clientLeft;
  } // Checks whether a value is numerical.


  function isNumeric(a) {
    return typeof a === "number" && !isNaN(a) && isFinite(a);
  } // Sets a class and removes it after [duration] ms.


  function addClassFor(element, className, duration) {
    if (duration > 0) {
      addClass(element, className);
      setTimeout(function () {
        removeClass(element, className);
      }, duration);
    }
  } // Limits a value to 0 - 100


  function limit(a) {
    return Math.max(Math.min(a, 100), 0);
  } // Wraps a variable as an array, if it isn't one yet.
  // Note that an input array is returned by reference!


  function asArray(a) {
    return Array.isArray(a) ? a : [a];
  } // Counts decimals


  function countDecimals(numStr) {
    numStr = String(numStr);
    var pieces = numStr.split(".");
    return pieces.length > 1 ? pieces[1].length : 0;
  } // http://youmightnotneedjquery.com/#add_class


  function addClass(el, className) {
    if (el.classList && !/\s/.test(className)) {
      el.classList.add(className);
    } else {
      el.className += " " + className;
    }
  } // http://youmightnotneedjquery.com/#remove_class


  function removeClass(el, className) {
    if (el.classList && !/\s/.test(className)) {
      el.classList.remove(className);
    } else {
      el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    }
  } // https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/


  function hasClass(el, className) {
    return el.classList ? el.classList.contains(className) : new RegExp("\\b" + className + "\\b").test(el.className);
  } // https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes


  function getPageOffset(doc) {
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = (doc.compatMode || "") === "CSS1Compat";
    var x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? doc.documentElement.scrollLeft : doc.body.scrollLeft;
    var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? doc.documentElement.scrollTop : doc.body.scrollTop;
    return {
      x: x,
      y: y
    };
  } // we provide a function to compute constants instead
  // of accessing window.* as soon as the module needs it
  // so that we do not compute anything if not needed


  function getActions() {
    // Determine the events to bind. IE11 implements pointerEvents without
    // a prefix, which breaks compatibility with the IE10 implementation.
    return window.navigator.pointerEnabled ? {
      start: "pointerdown",
      move: "pointermove",
      end: "pointerup"
    } : window.navigator.msPointerEnabled ? {
      start: "MSPointerDown",
      move: "MSPointerMove",
      end: "MSPointerUp"
    } : {
      start: "mousedown touchstart",
      move: "mousemove touchmove",
      end: "mouseup touchend"
    };
  } // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
  // Issue #785


  function getSupportsPassive() {
    var supportsPassive = false;
    /* eslint-disable */

    try {
      var opts = Object.defineProperty({}, "passive", {
        get: function get() {
          supportsPassive = true;
        }
      });
      window.addEventListener("test", null, opts);
    } catch (e) {}
    /* eslint-enable */


    return supportsPassive;
  }

  function getSupportsTouchActionNone() {
    return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
  } //endregion
  //region Range Calculation
  // Determine the size of a sub-range in relation to a full range.


  function subRangeRatio(pa, pb) {
    return 100 / (pb - pa);
  } // (percentage) How many percent is this value of this range?


  function fromPercentage(range, value, startRange) {
    return value * 100 / (range[startRange + 1] - range[startRange]);
  } // (percentage) Where is this value on this range?


  function toPercentage(range, value) {
    return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0], 0);
  } // (value) How much is this percentage on this range?


  function isPercentage(range, value) {
    return value * (range[1] - range[0]) / 100 + range[0];
  }

  function getJ(value, arr) {
    var j = 1;

    while (value >= arr[j]) {
      j += 1;
    }

    return j;
  } // (percentage) Input a value, find where, on a scale of 0-100, it applies.


  function toStepping(xVal, xPct, value) {
    if (value >= xVal.slice(-1)[0]) {
      return 100;
    }

    var j = getJ(value, xVal);
    var va = xVal[j - 1];
    var vb = xVal[j];
    var pa = xPct[j - 1];
    var pb = xPct[j];
    return pa + toPercentage([va, vb], value) / subRangeRatio(pa, pb);
  } // (value) Input a percentage, find where it is on the specified range.


  function fromStepping(xVal, xPct, value) {
    // There is no range group that fits 100
    if (value >= 100) {
      return xVal.slice(-1)[0];
    }

    var j = getJ(value, xPct);
    var va = xVal[j - 1];
    var vb = xVal[j];
    var pa = xPct[j - 1];
    var pb = xPct[j];
    return isPercentage([va, vb], (value - pa) * subRangeRatio(pa, pb));
  } // (percentage) Get the step that applies at a certain value.


  function getStep(xPct, xSteps, snap, value) {
    if (value === 100) {
      return value;
    }

    var j = getJ(value, xPct);
    var a = xPct[j - 1];
    var b = xPct[j]; // If 'snap' is set, steps are used as fixed points on the slider.

    if (snap) {
      // Find the closest position, a or b.
      if (value - a > (b - a) / 2) {
        return b;
      }

      return a;
    }

    if (!xSteps[j - 1]) {
      return value;
    }

    return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1]);
  }

  function handleEntryPoint(index, value, that) {
    var percentage; // Wrap numerical input in an array.

    if (typeof value === "number") {
      value = [value];
    } // Reject any invalid input, by testing whether value is an array.


    if (!Array.isArray(value)) {
      throw new Error("noUiSlider (" + VERSION + "): 'range' contains invalid value.");
    } // Covert min/max syntax to 0 and 100.


    if (index === "min") {
      percentage = 0;
    } else if (index === "max") {
      percentage = 100;
    } else {
      percentage = parseFloat(index);
    } // Check for correct input.


    if (!isNumeric(percentage) || !isNumeric(value[0])) {
      throw new Error("noUiSlider (" + VERSION + "): 'range' value isn't numeric.");
    } // Store values.


    that.xPct.push(percentage);
    that.xVal.push(value[0]); // NaN will evaluate to false too, but to keep
    // logging clear, set step explicitly. Make sure
    // not to override the 'step' setting with false.

    if (!percentage) {
      if (!isNaN(value[1])) {
        that.xSteps[0] = value[1];
      }
    } else {
      that.xSteps.push(isNaN(value[1]) ? false : value[1]);
    }

    that.xHighestCompleteStep.push(0);
  }

  function handleStepPoint(i, n, that) {
    // Ignore 'false' stepping.
    if (!n) {
      return;
    } // Step over zero-length ranges (#948);


    if (that.xVal[i] === that.xVal[i + 1]) {
      that.xSteps[i] = that.xHighestCompleteStep[i] = that.xVal[i];
      return;
    } // Factor to range ratio


    that.xSteps[i] = fromPercentage([that.xVal[i], that.xVal[i + 1]], n, 0) / subRangeRatio(that.xPct[i], that.xPct[i + 1]);
    var totalSteps = (that.xVal[i + 1] - that.xVal[i]) / that.xNumSteps[i];
    var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
    var step = that.xVal[i] + that.xNumSteps[i] * highestStep;
    that.xHighestCompleteStep[i] = step;
  } //endregion
  //region Spectrum


  function Spectrum(entry, snap, singleStep) {
    this.xPct = [];
    this.xVal = [];
    this.xSteps = [singleStep || false];
    this.xNumSteps = [false];
    this.xHighestCompleteStep = [];
    this.snap = snap;
    var index;
    var ordered = []; // [0, 'min'], [1, '50%'], [2, 'max']
    // Map the object keys to an array.

    for (index in entry) {
      if (entry.hasOwnProperty(index)) {
        ordered.push([entry[index], index]);
      }
    } // Sort all entries by value (numeric sort).


    if (ordered.length && _typeof(ordered[0][0]) === "object") {
      ordered.sort(function (a, b) {
        return a[0][0] - b[0][0];
      });
    } else {
      ordered.sort(function (a, b) {
        return a[0] - b[0];
      });
    } // Convert all entries to subranges.


    for (index = 0; index < ordered.length; index++) {
      handleEntryPoint(ordered[index][1], ordered[index][0], this);
    } // Store the actual step values.
    // xSteps is sorted in the same order as xPct and xVal.


    this.xNumSteps = this.xSteps.slice(0); // Convert all numeric steps to the percentage of the subrange they represent.

    for (index = 0; index < this.xNumSteps.length; index++) {
      handleStepPoint(index, this.xNumSteps[index], this);
    }
  }

  Spectrum.prototype.getDistance = function (value) {
    var index;
    var distances = [];

    for (index = 0; index < this.xNumSteps.length - 1; index++) {
      // last "range" can't contain step size as it is purely an endpoint.
      var step = this.xNumSteps[index];

      if (step && value / step % 1 !== 0) {
        throw new Error("noUiSlider (" + VERSION + "): 'limit', 'margin' and 'padding' of " + this.xPct[index] + "% range must be divisible by step.");
      } // Calculate percentual distance in current range of limit, margin or padding


      distances[index] = fromPercentage(this.xVal, value, index);
    }

    return distances;
  }; // Calculate the percentual distance over the whole scale of ranges.
  // direction: 0 = backwards / 1 = forwards


  Spectrum.prototype.getAbsoluteDistance = function (value, distances, direction) {
    var xPct_index = 0; // Calculate range where to start calculation

    if (value < this.xPct[this.xPct.length - 1]) {
      while (value > this.xPct[xPct_index + 1]) {
        xPct_index++;
      }
    } else if (value === this.xPct[this.xPct.length - 1]) {
      xPct_index = this.xPct.length - 2;
    } // If looking backwards and the value is exactly at a range separator then look one range further


    if (!direction && value === this.xPct[xPct_index + 1]) {
      xPct_index++;
    }

    var start_factor;
    var rest_factor = 1;
    var rest_rel_distance = distances[xPct_index];
    var range_pct = 0;
    var rel_range_distance = 0;
    var abs_distance_counter = 0;
    var range_counter = 0; // Calculate what part of the start range the value is

    if (direction) {
      start_factor = (value - this.xPct[xPct_index]) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
    } else {
      start_factor = (this.xPct[xPct_index + 1] - value) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
    } // Do until the complete distance across ranges is calculated


    while (rest_rel_distance > 0) {
      // Calculate the percentage of total range
      range_pct = this.xPct[xPct_index + 1 + range_counter] - this.xPct[xPct_index + range_counter]; // Detect if the margin, padding or limit is larger then the current range and calculate

      if (distances[xPct_index + range_counter] * rest_factor + 100 - start_factor * 100 > 100) {
        // If larger then take the percentual distance of the whole range
        rel_range_distance = range_pct * start_factor; // Rest factor of relative percentual distance still to be calculated

        rest_factor = (rest_rel_distance - 100 * start_factor) / distances[xPct_index + range_counter]; // Set start factor to 1 as for next range it does not apply.

        start_factor = 1;
      } else {
        // If smaller or equal then take the percentual distance of the calculate percentual part of that range
        rel_range_distance = distances[xPct_index + range_counter] * range_pct / 100 * rest_factor; // No rest left as the rest fits in current range

        rest_factor = 0;
      }

      if (direction) {
        abs_distance_counter = abs_distance_counter - rel_range_distance; // Limit range to first range when distance becomes outside of minimum range

        if (this.xPct.length + range_counter >= 1) {
          range_counter--;
        }
      } else {
        abs_distance_counter = abs_distance_counter + rel_range_distance; // Limit range to last range when distance becomes outside of maximum range

        if (this.xPct.length - range_counter >= 1) {
          range_counter++;
        }
      } // Rest of relative percentual distance still to be calculated


      rest_rel_distance = distances[xPct_index + range_counter] * rest_factor;
    }

    return value + abs_distance_counter;
  };

  Spectrum.prototype.toStepping = function (value) {
    value = toStepping(this.xVal, this.xPct, value);
    return value;
  };

  Spectrum.prototype.fromStepping = function (value) {
    return fromStepping(this.xVal, this.xPct, value);
  };

  Spectrum.prototype.getStep = function (value) {
    value = getStep(this.xPct, this.xSteps, this.snap, value);
    return value;
  };

  Spectrum.prototype.getDefaultStep = function (value, isDown, size) {
    var j = getJ(value, this.xPct); // When at the top or stepping down, look at the previous sub-range

    if (value === 100 || isDown && value === this.xPct[j - 1]) {
      j = Math.max(j - 1, 1);
    }

    return (this.xVal[j] - this.xVal[j - 1]) / size;
  };

  Spectrum.prototype.getNearbySteps = function (value) {
    var j = getJ(value, this.xPct);
    return {
      stepBefore: {
        startValue: this.xVal[j - 2],
        step: this.xNumSteps[j - 2],
        highestStep: this.xHighestCompleteStep[j - 2]
      },
      thisStep: {
        startValue: this.xVal[j - 1],
        step: this.xNumSteps[j - 1],
        highestStep: this.xHighestCompleteStep[j - 1]
      },
      stepAfter: {
        startValue: this.xVal[j],
        step: this.xNumSteps[j],
        highestStep: this.xHighestCompleteStep[j]
      }
    };
  };

  Spectrum.prototype.countStepDecimals = function () {
    var stepDecimals = this.xNumSteps.map(countDecimals);
    return Math.max.apply(null, stepDecimals);
  }; // Outside testing


  Spectrum.prototype.convert = function (value) {
    return this.getStep(this.toStepping(value));
  }; //endregion
  //region Options

  /*	Every input option is tested and parsed. This'll prevent
      endless validation in internal methods. These tests are
      structured with an item for every option available. An
      option can be marked as required by setting the 'r' flag.
      The testing function is provided with three arguments:
          - The provided value for the option;
          - A reference to the options object;
          - The name for the option;
       The testing function returns false when an error is detected,
      or true when everything is OK. It can also modify the option
      object, to make sure all values can be correctly looped elsewhere. */
  //region Defaults


  var defaultFormatter = {
    to: function to(value) {
      return value !== undefined && value.toFixed(2);
    },
    from: Number
  };
  var cssClasses = {
    target: "target",
    base: "base",
    origin: "origin",
    handle: "handle",
    handleLower: "handle-lower",
    handleUpper: "handle-upper",
    touchArea: "touch-area",
    horizontal: "horizontal",
    vertical: "vertical",
    background: "background",
    connect: "connect",
    connects: "connects",
    ltr: "ltr",
    rtl: "rtl",
    textDirectionLtr: "txt-dir-ltr",
    textDirectionRtl: "txt-dir-rtl",
    draggable: "draggable",
    drag: "state-drag",
    tap: "state-tap",
    active: "active",
    tooltip: "tooltip",
    pips: "pips",
    pipsHorizontal: "pips-horizontal",
    pipsVertical: "pips-vertical",
    marker: "marker",
    markerHorizontal: "marker-horizontal",
    markerVertical: "marker-vertical",
    markerNormal: "marker-normal",
    markerLarge: "marker-large",
    markerSub: "marker-sub",
    value: "value",
    valueHorizontal: "value-horizontal",
    valueVertical: "value-vertical",
    valueNormal: "value-normal",
    valueLarge: "value-large",
    valueSub: "value-sub"
  }; //endregion

  function validateFormat(entry) {
    // Any object with a to and from method is supported.
    if (isValidFormatter(entry)) {
      return true;
    }

    throw new Error("noUiSlider (" + VERSION + "): 'format' requires 'to' and 'from' methods.");
  }

  function testStep(parsed, entry) {
    if (!isNumeric(entry)) {
      throw new Error("noUiSlider (" + VERSION + "): 'step' is not numeric.");
    } // The step option can still be used to set stepping
    // for linear sliders. Overwritten if set in 'range'.


    parsed.singleStep = entry;
  }

  function testKeyboardPageMultiplier(parsed, entry) {
    if (!isNumeric(entry)) {
      throw new Error("noUiSlider (" + VERSION + "): 'keyboardPageMultiplier' is not numeric.");
    }

    parsed.keyboardPageMultiplier = entry;
  }

  function testKeyboardDefaultStep(parsed, entry) {
    if (!isNumeric(entry)) {
      throw new Error("noUiSlider (" + VERSION + "): 'keyboardDefaultStep' is not numeric.");
    }

    parsed.keyboardDefaultStep = entry;
  }

  function testRange(parsed, entry) {
    // Filter incorrect input.
    if (_typeof(entry) !== "object" || Array.isArray(entry)) {
      throw new Error("noUiSlider (" + VERSION + "): 'range' is not an object.");
    } // Catch missing start or end.


    if (entry.min === undefined || entry.max === undefined) {
      throw new Error("noUiSlider (" + VERSION + "): Missing 'min' or 'max' in 'range'.");
    } // Catch equal start or end.


    if (entry.min === entry.max) {
      throw new Error("noUiSlider (" + VERSION + "): 'range' 'min' and 'max' cannot be equal.");
    }

    parsed.spectrum = new Spectrum(entry, parsed.snap, parsed.singleStep);
  }

  function testStart(parsed, entry) {
    entry = asArray(entry); // Validate input. Values aren't tested, as the public .val method
    // will always provide a valid location.

    if (!Array.isArray(entry) || !entry.length) {
      throw new Error("noUiSlider (" + VERSION + "): 'start' option is incorrect.");
    } // Store the number of handles.


    parsed.handles = entry.length; // When the slider is initialized, the .val method will
    // be called with the start options.

    parsed.start = entry;
  }

  function testSnap(parsed, entry) {
    // Enforce 100% stepping within subranges.
    parsed.snap = entry;

    if (typeof entry !== "boolean") {
      throw new Error("noUiSlider (" + VERSION + "): 'snap' option must be a boolean.");
    }
  }

  function testAnimate(parsed, entry) {
    // Enforce 100% stepping within subranges.
    parsed.animate = entry;

    if (typeof entry !== "boolean") {
      throw new Error("noUiSlider (" + VERSION + "): 'animate' option must be a boolean.");
    }
  }

  function testAnimationDuration(parsed, entry) {
    parsed.animationDuration = entry;

    if (typeof entry !== "number") {
      throw new Error("noUiSlider (" + VERSION + "): 'animationDuration' option must be a number.");
    }
  }

  function testConnect(parsed, entry) {
    var connect = [false];
    var i; // Map legacy options

    if (entry === "lower") {
      entry = [true, false];
    } else if (entry === "upper") {
      entry = [false, true];
    } // Handle boolean options


    if (entry === true || entry === false) {
      for (i = 1; i < parsed.handles; i++) {
        connect.push(entry);
      }

      connect.push(false);
    } // Reject invalid input
    else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) {
        throw new Error("noUiSlider (" + VERSION + "): 'connect' option doesn't match handle count.");
      } else {
        connect = entry;
      }

    parsed.connect = connect;
  }

  function testOrientation(parsed, entry) {
    // Set orientation to an a numerical value for easy
    // array selection.
    switch (entry) {
      case "horizontal":
        parsed.ort = 0;
        break;

      case "vertical":
        parsed.ort = 1;
        break;

      default:
        throw new Error("noUiSlider (" + VERSION + "): 'orientation' option is invalid.");
    }
  }

  function testMargin(parsed, entry) {
    if (!isNumeric(entry)) {
      throw new Error("noUiSlider (" + VERSION + "): 'margin' option must be numeric.");
    } // Issue #582


    if (entry === 0) {
      return;
    }

    parsed.margin = parsed.spectrum.getDistance(entry);
  }

  function testLimit(parsed, entry) {
    if (!isNumeric(entry)) {
      throw new Error("noUiSlider (" + VERSION + "): 'limit' option must be numeric.");
    }

    parsed.limit = parsed.spectrum.getDistance(entry);

    if (!parsed.limit || parsed.handles < 2) {
      throw new Error("noUiSlider (" + VERSION + "): 'limit' option is only supported on linear sliders with 2 or more handles.");
    }
  }

  function testPadding(parsed, entry) {
    var index;

    if (!isNumeric(entry) && !Array.isArray(entry)) {
      throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be numeric or array of exactly 2 numbers.");
    }

    if (Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1]))) {
      throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be numeric or array of exactly 2 numbers.");
    }

    if (entry === 0) {
      return;
    }

    if (!Array.isArray(entry)) {
      entry = [entry, entry];
    } // 'getDistance' returns false for invalid values.


    parsed.padding = [parsed.spectrum.getDistance(entry[0]), parsed.spectrum.getDistance(entry[1])];

    for (index = 0; index < parsed.spectrum.xNumSteps.length - 1; index++) {
      // last "range" can't contain step size as it is purely an endpoint.
      if (parsed.padding[0][index] < 0 || parsed.padding[1][index] < 0) {
        throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be a positive number(s).");
      }
    }

    var totalPadding = entry[0] + entry[1];
    var firstValue = parsed.spectrum.xVal[0];
    var lastValue = parsed.spectrum.xVal[parsed.spectrum.xVal.length - 1];

    if (totalPadding / (lastValue - firstValue) > 1) {
      throw new Error("noUiSlider (" + VERSION + "): 'padding' option must not exceed 100% of the range.");
    }
  }

  function testDirection(parsed, entry) {
    // Set direction as a numerical value for easy parsing.
    // Invert connection for RTL sliders, so that the proper
    // handles get the connect/background classes.
    switch (entry) {
      case "ltr":
        parsed.dir = 0;
        break;

      case "rtl":
        parsed.dir = 1;
        break;

      default:
        throw new Error("noUiSlider (" + VERSION + "): 'direction' option was not recognized.");
    }
  }

  function testBehaviour(parsed, entry) {
    // Make sure the input is a string.
    if (typeof entry !== "string") {
      throw new Error("noUiSlider (" + VERSION + "): 'behaviour' must be a string containing options.");
    } // Check if the string contains any keywords.
    // None are required.


    var tap = entry.indexOf("tap") >= 0;
    var drag = entry.indexOf("drag") >= 0;
    var fixed = entry.indexOf("fixed") >= 0;
    var snap = entry.indexOf("snap") >= 0;
    var hover = entry.indexOf("hover") >= 0;
    var unconstrained = entry.indexOf("unconstrained") >= 0;

    if (fixed) {
      if (parsed.handles !== 2) {
        throw new Error("noUiSlider (" + VERSION + "): 'fixed' behaviour must be used with 2 handles");
      } // Use margin to enforce fixed state


      testMargin(parsed, parsed.start[1] - parsed.start[0]);
    }

    if (unconstrained && (parsed.margin || parsed.limit)) {
      throw new Error("noUiSlider (" + VERSION + "): 'unconstrained' behaviour cannot be used with margin or limit");
    }

    parsed.events = {
      tap: tap || snap,
      drag: drag,
      fixed: fixed,
      snap: snap,
      hover: hover,
      unconstrained: unconstrained
    };
  }

  function testTooltips(parsed, entry) {
    if (entry === false) {
      return;
    }

    if (entry === true) {
      parsed.tooltips = [];

      for (var i = 0; i < parsed.handles; i++) {
        parsed.tooltips.push(true);
      }
    } else {
      parsed.tooltips = asArray(entry);

      if (parsed.tooltips.length !== parsed.handles) {
        throw new Error("noUiSlider (" + VERSION + "): must pass a formatter for all handles.");
      }

      parsed.tooltips.forEach(function (formatter) {
        if (typeof formatter !== "boolean" && (_typeof(formatter) !== "object" || typeof formatter.to !== "function")) {
          throw new Error("noUiSlider (" + VERSION + "): 'tooltips' must be passed a formatter or 'false'.");
        }
      });
    }
  }

  function testAriaFormat(parsed, entry) {
    parsed.ariaFormat = entry;
    validateFormat(entry);
  }

  function testFormat(parsed, entry) {
    parsed.format = entry;
    validateFormat(entry);
  }

  function testKeyboardSupport(parsed, entry) {
    parsed.keyboardSupport = entry;

    if (typeof entry !== "boolean") {
      throw new Error("noUiSlider (" + VERSION + "): 'keyboardSupport' option must be a boolean.");
    }
  }

  function testDocumentElement(parsed, entry) {
    // This is an advanced option. Passed values are used without validation.
    parsed.documentElement = entry;
  }

  function testCssPrefix(parsed, entry) {
    if (typeof entry !== "string" && entry !== false) {
      throw new Error("noUiSlider (" + VERSION + "): 'cssPrefix' must be a string or `false`.");
    }

    parsed.cssPrefix = entry;
  }

  function testCssClasses(parsed, entry) {
    if (_typeof(entry) !== "object") {
      throw new Error("noUiSlider (" + VERSION + "): 'cssClasses' must be an object.");
    }

    if (typeof parsed.cssPrefix === "string") {
      parsed.cssClasses = {};

      for (var key in entry) {
        if (!entry.hasOwnProperty(key)) {
          continue;
        }

        parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
      }
    } else {
      parsed.cssClasses = entry;
    }
  } // Test all developer settings and parse to assumption-safe values.


  function testOptions(options) {
    // To prove a fix for #537, freeze options here.
    // If the object is modified, an error will be thrown.
    // Object.freeze(options);
    var parsed = {
      margin: 0,
      limit: 0,
      padding: 0,
      animate: true,
      animationDuration: 300,
      ariaFormat: defaultFormatter,
      format: defaultFormatter
    }; // Tests are executed in the order they are presented here.

    var tests = {
      step: {
        r: false,
        t: testStep
      },
      keyboardPageMultiplier: {
        r: false,
        t: testKeyboardPageMultiplier
      },
      keyboardDefaultStep: {
        r: false,
        t: testKeyboardDefaultStep
      },
      start: {
        r: true,
        t: testStart
      },
      connect: {
        r: true,
        t: testConnect
      },
      direction: {
        r: true,
        t: testDirection
      },
      snap: {
        r: false,
        t: testSnap
      },
      animate: {
        r: false,
        t: testAnimate
      },
      animationDuration: {
        r: false,
        t: testAnimationDuration
      },
      range: {
        r: true,
        t: testRange
      },
      orientation: {
        r: false,
        t: testOrientation
      },
      margin: {
        r: false,
        t: testMargin
      },
      limit: {
        r: false,
        t: testLimit
      },
      padding: {
        r: false,
        t: testPadding
      },
      behaviour: {
        r: true,
        t: testBehaviour
      },
      ariaFormat: {
        r: false,
        t: testAriaFormat
      },
      format: {
        r: false,
        t: testFormat
      },
      tooltips: {
        r: false,
        t: testTooltips
      },
      keyboardSupport: {
        r: true,
        t: testKeyboardSupport
      },
      documentElement: {
        r: false,
        t: testDocumentElement
      },
      cssPrefix: {
        r: true,
        t: testCssPrefix
      },
      cssClasses: {
        r: true,
        t: testCssClasses
      }
    };
    var defaults = {
      connect: false,
      direction: "ltr",
      behaviour: "tap",
      orientation: "horizontal",
      keyboardSupport: true,
      cssPrefix: "noUi-",
      cssClasses: cssClasses,
      keyboardPageMultiplier: 5,
      keyboardDefaultStep: 10
    }; // AriaFormat defaults to regular format, if any.

    if (options.format && !options.ariaFormat) {
      options.ariaFormat = options.format;
    } // Run all options through a testing mechanism to ensure correct
    // input. It should be noted that options might get modified to
    // be handled properly. E.g. wrapping integers in arrays.


    Object.keys(tests).forEach(function (name) {
      // If the option isn't set, but it is required, throw an error.
      if (!isSet(options[name]) && defaults[name] === undefined) {
        if (tests[name].r) {
          throw new Error("noUiSlider (" + VERSION + "): '" + name + "' is required.");
        }

        return true;
      }

      tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name]);
    }); // Forward pips options

    parsed.pips = options.pips; // All recent browsers accept unprefixed transform.
    // We need -ms- for IE9 and -webkit- for older Android;
    // Assume use of -webkit- if unprefixed and -ms- are not supported.
    // https://caniuse.com/#feat=transforms2d

    var d = document.createElement("div");
    var msPrefix = d.style.msTransform !== undefined;
    var noPrefix = d.style.transform !== undefined;
    parsed.transformRule = noPrefix ? "transform" : msPrefix ? "msTransform" : "webkitTransform"; // Pips don't move, so we can place them using left/top.

    var styles = [["left", "top"], ["right", "bottom"]];
    parsed.style = styles[parsed.dir][parsed.ort];
    return parsed;
  } //endregion


  function scope(target, options, originalOptions) {
    var actions = getActions();
    var supportsTouchActionNone = getSupportsTouchActionNone();
    var supportsPassive = supportsTouchActionNone && getSupportsPassive(); // All variables local to 'scope' are prefixed with 'scope_'
    // Slider DOM Nodes

    var scope_Target = target;
    var scope_Base;
    var scope_Handles;
    var scope_Connects;
    var scope_Pips;
    var scope_Tooltips; // Slider state values

    var scope_Spectrum = options.spectrum;
    var scope_Values = [];
    var scope_Locations = [];
    var scope_HandleNumbers = [];
    var scope_ActiveHandlesCount = 0;
    var scope_Events = {}; // Exposed API

    var scope_Self; // Document Nodes

    var scope_Document = target.ownerDocument;
    var scope_DocumentElement = options.documentElement || scope_Document.documentElement;
    var scope_Body = scope_Document.body; // Pips constants

    var PIPS_NONE = -1;
    var PIPS_NO_VALUE = 0;
    var PIPS_LARGE_VALUE = 1;
    var PIPS_SMALL_VALUE = 2; // For horizontal sliders in standard ltr documents,
    // make .noUi-origin overflow to the left so the document doesn't scroll.

    var scope_DirOffset = scope_Document.dir === "rtl" || options.ort === 1 ? 0 : 100; // Creates a node, adds it to target, returns the new node.

    function addNodeTo(addTarget, className) {
      var div = scope_Document.createElement("div");

      if (className) {
        addClass(div, className);
      }

      addTarget.appendChild(div);
      return div;
    } // Append a origin to the base


    function addOrigin(base, handleNumber) {
      var origin = addNodeTo(base, options.cssClasses.origin);
      var handle = addNodeTo(origin, options.cssClasses.handle);
      addNodeTo(handle, options.cssClasses.touchArea);
      handle.setAttribute("data-handle", handleNumber);

      if (options.keyboardSupport) {
        // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
        // 0 = focusable and reachable
        handle.setAttribute("tabindex", "0");
        handle.addEventListener("keydown", function (event) {
          return eventKeydown(event, handleNumber);
        });
      }

      handle.setAttribute("role", "slider");
      handle.setAttribute("aria-orientation", options.ort ? "vertical" : "horizontal");

      if (handleNumber === 0) {
        addClass(handle, options.cssClasses.handleLower);
      } else if (handleNumber === options.handles - 1) {
        addClass(handle, options.cssClasses.handleUpper);
      }

      return origin;
    } // Insert nodes for connect elements


    function addConnect(base, add) {
      if (!add) {
        return false;
      }

      return addNodeTo(base, options.cssClasses.connect);
    } // Add handles to the slider base.


    function addElements(connectOptions, base) {
      var connectBase = addNodeTo(base, options.cssClasses.connects);
      scope_Handles = [];
      scope_Connects = [];
      scope_Connects.push(addConnect(connectBase, connectOptions[0])); // [::::O====O====O====]
      // connectOptions = [0, 1, 1, 1]

      for (var i = 0; i < options.handles; i++) {
        // Keep a list of all added handles.
        scope_Handles.push(addOrigin(base, i));
        scope_HandleNumbers[i] = i;
        scope_Connects.push(addConnect(connectBase, connectOptions[i + 1]));
      }
    } // Initialize a single slider.


    function addSlider(addTarget) {
      // Apply classes and data to the target.
      addClass(addTarget, options.cssClasses.target);

      if (options.dir === 0) {
        addClass(addTarget, options.cssClasses.ltr);
      } else {
        addClass(addTarget, options.cssClasses.rtl);
      }

      if (options.ort === 0) {
        addClass(addTarget, options.cssClasses.horizontal);
      } else {
        addClass(addTarget, options.cssClasses.vertical);
      }

      var textDirection = getComputedStyle(addTarget).direction;

      if (textDirection === "rtl") {
        addClass(addTarget, options.cssClasses.textDirectionRtl);
      } else {
        addClass(addTarget, options.cssClasses.textDirectionLtr);
      }

      return addNodeTo(addTarget, options.cssClasses.base);
    }

    function addTooltip(handle, handleNumber) {
      if (!options.tooltips[handleNumber]) {
        return false;
      }

      return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
    }

    function isSliderDisabled() {
      return scope_Target.hasAttribute("disabled");
    } // Disable the slider dragging if any handle is disabled


    function isHandleDisabled(handleNumber) {
      var handleOrigin = scope_Handles[handleNumber];
      return handleOrigin.hasAttribute("disabled");
    }

    function removeTooltips() {
      if (scope_Tooltips) {
        removeEvent("update.tooltips");
        scope_Tooltips.forEach(function (tooltip) {
          if (tooltip) {
            removeElement(tooltip);
          }
        });
        scope_Tooltips = null;
      }
    } // The tooltips option is a shorthand for using the 'update' event.


    function tooltips() {
      removeTooltips(); // Tooltips are added with options.tooltips in original order.

      scope_Tooltips = scope_Handles.map(addTooltip);
      bindEvent("update.tooltips", function (values, handleNumber, unencoded) {
        if (!scope_Tooltips[handleNumber]) {
          return;
        }

        var formattedValue = values[handleNumber];

        if (options.tooltips[handleNumber] !== true) {
          formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
        }

        scope_Tooltips[handleNumber].innerHTML = formattedValue;
      });
    }

    function aria() {
      bindEvent("update", function (values, handleNumber, unencoded, tap, positions) {
        // Update Aria Values for all handles, as a change in one changes min and max values for the next.
        scope_HandleNumbers.forEach(function (index) {
          var handle = scope_Handles[index];
          var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);
          var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);
          var now = positions[index]; // Formatted value for display

          var text = options.ariaFormat.to(unencoded[index]); // Map to slider range values

          min = scope_Spectrum.fromStepping(min).toFixed(1);
          max = scope_Spectrum.fromStepping(max).toFixed(1);
          now = scope_Spectrum.fromStepping(now).toFixed(1);
          handle.children[0].setAttribute("aria-valuemin", min);
          handle.children[0].setAttribute("aria-valuemax", max);
          handle.children[0].setAttribute("aria-valuenow", now);
          handle.children[0].setAttribute("aria-valuetext", text);
        });
      });
    }

    function getGroup(mode, values, stepped) {
      // Use the range.
      if (mode === "range" || mode === "steps") {
        return scope_Spectrum.xVal;
      }

      if (mode === "count") {
        if (values < 2) {
          throw new Error("noUiSlider (" + VERSION + "): 'values' (>= 2) required for mode 'count'.");
        } // Divide 0 - 100 in 'count' parts.


        var interval = values - 1;
        var spread = 100 / interval;
        values = []; // List these parts and have them handled as 'positions'.

        while (interval--) {
          values[interval] = interval * spread;
        }

        values.push(100);
        mode = "positions";
      }

      if (mode === "positions") {
        // Map all percentages to on-range values.
        return values.map(function (value) {
          return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
        });
      }

      if (mode === "values") {
        // If the value must be stepped, it needs to be converted to a percentage first.
        if (stepped) {
          return values.map(function (value) {
            // Convert to percentage, apply step, return to value.
            return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
          });
        } // Otherwise, we can simply use the values.


        return values;
      }
    }

    function generateSpread(density, mode, group) {
      function safeIncrement(value, increment) {
        // Avoid floating point variance by dropping the smallest decimal places.
        return (value + increment).toFixed(7) / 1;
      }

      var indexes = {};
      var firstInRange = scope_Spectrum.xVal[0];
      var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];
      var ignoreFirst = false;
      var ignoreLast = false;
      var prevPct = 0; // Create a copy of the group, sort it and filter away all duplicates.

      group = unique(group.slice().sort(function (a, b) {
        return a - b;
      })); // Make sure the range starts with the first element.

      if (group[0] !== firstInRange) {
        group.unshift(firstInRange);
        ignoreFirst = true;
      } // Likewise for the last one.


      if (group[group.length - 1] !== lastInRange) {
        group.push(lastInRange);
        ignoreLast = true;
      }

      group.forEach(function (current, index) {
        // Get the current step and the lower + upper positions.
        var step;
        var i;
        var q;
        var low = current;
        var high = group[index + 1];
        var newPct;
        var pctDifference;
        var pctPos;
        var type;
        var steps;
        var realSteps;
        var stepSize;
        var isSteps = mode === "steps"; // When using 'steps' mode, use the provided steps.
        // Otherwise, we'll step on to the next subrange.

        if (isSteps) {
          step = scope_Spectrum.xNumSteps[index];
        } // Default to a 'full' step.


        if (!step) {
          step = high - low;
        } // Low can be 0, so test for false. Index 0 is already handled.


        if (low === false) {
          return;
        } // If high is undefined we are at the last subrange. Make sure it iterates once (#1088)


        if (high === undefined) {
          high = low;
        } // Make sure step isn't 0, which would cause an infinite loop (#654)


        step = Math.max(step, 0.0000001); // Find all steps in the subrange.

        for (i = low; i <= high; i = safeIncrement(i, step)) {
          // Get the percentage value for the current step,
          // calculate the size for the subrange.
          newPct = scope_Spectrum.toStepping(i);
          pctDifference = newPct - prevPct;
          steps = pctDifference / density;
          realSteps = Math.round(steps); // This ratio represents the amount of percentage-space a point indicates.
          // For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-divided.
          // Round the percentage offset to an even number, then divide by two
          // to spread the offset on both sides of the range.

          stepSize = pctDifference / realSteps; // Divide all points evenly, adding the correct number to this subrange.
          // Run up to <= so that 100% gets a point, event if ignoreLast is set.

          for (q = 1; q <= realSteps; q += 1) {
            // The ratio between the rounded value and the actual size might be ~1% off.
            // Correct the percentage offset by the number of points
            // per subrange. density = 1 will result in 100 points on the
            // full range, 2 for 50, 4 for 25, etc.
            pctPos = prevPct + q * stepSize;
            indexes[pctPos.toFixed(5)] = [scope_Spectrum.fromStepping(pctPos), 0];
          } // Determine the point type.


          type = group.indexOf(i) > -1 ? PIPS_LARGE_VALUE : isSteps ? PIPS_SMALL_VALUE : PIPS_NO_VALUE; // Enforce the 'ignoreFirst' option by overwriting the type for 0.

          if (!index && ignoreFirst && i !== high) {
            type = 0;
          }

          if (!(i === high && ignoreLast)) {
            // Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
            indexes[newPct.toFixed(5)] = [i, type];
          } // Update the percentage count.


          prevPct = newPct;
        }
      });
      return indexes;
    }

    function addMarking(spread, filterFunc, formatter) {
      var element = scope_Document.createElement("div");
      var valueSizeClasses = [];
      valueSizeClasses[PIPS_NO_VALUE] = options.cssClasses.valueNormal;
      valueSizeClasses[PIPS_LARGE_VALUE] = options.cssClasses.valueLarge;
      valueSizeClasses[PIPS_SMALL_VALUE] = options.cssClasses.valueSub;
      var markerSizeClasses = [];
      markerSizeClasses[PIPS_NO_VALUE] = options.cssClasses.markerNormal;
      markerSizeClasses[PIPS_LARGE_VALUE] = options.cssClasses.markerLarge;
      markerSizeClasses[PIPS_SMALL_VALUE] = options.cssClasses.markerSub;
      var valueOrientationClasses = [options.cssClasses.valueHorizontal, options.cssClasses.valueVertical];
      var markerOrientationClasses = [options.cssClasses.markerHorizontal, options.cssClasses.markerVertical];
      addClass(element, options.cssClasses.pips);
      addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);

      function getClasses(type, source) {
        var a = source === options.cssClasses.value;
        var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
        var sizeClasses = a ? valueSizeClasses : markerSizeClasses;
        return source + " " + orientationClasses[options.ort] + " " + sizeClasses[type];
      }

      function addSpread(offset, value, type) {
        // Apply the filter function, if it is set.
        type = filterFunc ? filterFunc(value, type) : type;

        if (type === PIPS_NONE) {
          return;
        } // Add a marker for every point


        var node = addNodeTo(element, false);
        node.className = getClasses(type, options.cssClasses.marker);
        node.style[options.style] = offset + "%"; // Values are only appended for points marked '1' or '2'.

        if (type > PIPS_NO_VALUE) {
          node = addNodeTo(element, false);
          node.className = getClasses(type, options.cssClasses.value);
          node.setAttribute("data-value", value);
          node.style[options.style] = offset + "%";
          node.innerHTML = formatter.to(value);
        }
      } // Append all points.


      Object.keys(spread).forEach(function (offset) {
        addSpread(offset, spread[offset][0], spread[offset][1]);
      });
      return element;
    }

    function removePips() {
      if (scope_Pips) {
        removeElement(scope_Pips);
        scope_Pips = null;
      }
    }

    function pips(grid) {
      // Fix #669
      removePips();
      var mode = grid.mode;
      var density = grid.density || 1;
      var filter = grid.filter || false;
      var values = grid.values || false;
      var stepped = grid.stepped || false;
      var group = getGroup(mode, values, stepped);
      var spread = generateSpread(density, mode, group);
      var format = grid.format || {
        to: Math.round
      };
      scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));
      return scope_Pips;
    } // Shorthand for base dimensions.


    function baseSize() {
      var rect = scope_Base.getBoundingClientRect();
      var alt = "offset" + ["Width", "Height"][options.ort];
      return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt];
    } // Handler for attaching events trough a proxy.


    function attachEvent(events, element, callback, data) {
      // This function can be used to 'filter' events to the slider.
      // element is a node, not a nodeList
      var method = function method(e) {
        e = fixEvent(e, data.pageOffset, data.target || element); // fixEvent returns false if this event has a different target
        // when handling (multi-) touch events;

        if (!e) {
          return false;
        } // doNotReject is passed by all end events to make sure released touches
        // are not rejected, leaving the slider "stuck" to the cursor;


        if (isSliderDisabled() && !data.doNotReject) {
          return false;
        } // Stop if an active 'tap' transition is taking place.


        if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) {
          return false;
        } // Ignore right or middle clicks on start #454


        if (events === actions.start && e.buttons !== undefined && e.buttons > 1) {
          return false;
        } // Ignore right or middle clicks on start #454


        if (data.hover && e.buttons) {
          return false;
        } // 'supportsPassive' is only true if a browser also supports touch-action: none in CSS.
        // iOS safari does not, so it doesn't get to benefit from passive scrolling. iOS does support
        // touch-action: manipulation, but that allows panning, which breaks
        // sliders after zooming/on non-responsive pages.
        // See: https://bugs.webkit.org/show_bug.cgi?id=133112


        if (!supportsPassive) {
          e.preventDefault();
        }

        e.calcPoint = e.points[options.ort]; // Call the event handler with the event [ and additional data ].

        callback(e, data);
      };

      var methods = []; // Bind a closure on the target for every event type.

      events.split(" ").forEach(function (eventName) {
        element.addEventListener(eventName, method, supportsPassive ? {
          passive: true
        } : false);
        methods.push([eventName, method]);
      });
      return methods;
    } // Provide a clean event with standardized offset values.


    function fixEvent(e, pageOffset, eventTarget) {
      // Filter the event to register the type, which can be
      // touch, mouse or pointer. Offset changes need to be
      // made on an event specific basis.
      var touch = e.type.indexOf("touch") === 0;
      var mouse = e.type.indexOf("mouse") === 0;
      var pointer = e.type.indexOf("pointer") === 0;
      var x;
      var y; // IE10 implemented pointer events with a prefix;

      if (e.type.indexOf("MSPointer") === 0) {
        pointer = true;
      } // Erroneous events seem to be passed in occasionally on iOS/iPadOS after user finishes interacting with
      // the slider. They appear to be of type MouseEvent, yet they don't have usual properties set. Ignore
      // events that have no touches or buttons associated with them. (#1057, #1079, #1095)


      if (e.type === "mousedown" && !e.buttons && !e.touches) {
        return false;
      } // The only thing one handle should be concerned about is the touches that originated on top of it.


      if (touch) {
        // Returns true if a touch originated on the target.
        var isTouchOnTarget = function isTouchOnTarget(checkTouch) {
          return checkTouch.target === eventTarget || eventTarget.contains(checkTouch.target) || checkTouch.target.shadowRoot && checkTouch.target.shadowRoot.contains(eventTarget);
        }; // In the case of touchstart events, we need to make sure there is still no more than one
        // touch on the target so we look amongst all touches.


        if (e.type === "touchstart") {
          var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget); // Do not support more than one touch per handle.

          if (targetTouches.length > 1) {
            return false;
          }

          x = targetTouches[0].pageX;
          y = targetTouches[0].pageY;
        } else {
          // In the other cases, find on changedTouches is enough.
          var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget); // Cancel if the target touch has not moved.

          if (!targetTouch) {
            return false;
          }

          x = targetTouch.pageX;
          y = targetTouch.pageY;
        }
      }

      pageOffset = pageOffset || getPageOffset(scope_Document);

      if (mouse || pointer) {
        x = e.clientX + pageOffset.x;
        y = e.clientY + pageOffset.y;
      }

      e.pageOffset = pageOffset;
      e.points = [x, y];
      e.cursor = mouse || pointer; // Fix #435

      return e;
    } // Translate a coordinate in the document to a percentage on the slider


    function calcPointToPercentage(calcPoint) {
      var location = calcPoint - offset(scope_Base, options.ort);
      var proposal = location * 100 / baseSize(); // Clamp proposal between 0% and 100%
      // Out-of-bound coordinates may occur when .noUi-base pseudo-elements
      // are used (e.g. contained handles feature)

      proposal = limit(proposal);
      return options.dir ? 100 - proposal : proposal;
    } // Find handle closest to a certain percentage on the slider


    function getClosestHandle(clickedPosition) {
      var smallestDifference = 100;
      var handleNumber = false;
      scope_Handles.forEach(function (handle, index) {
        // Disabled handles are ignored
        if (isHandleDisabled(index)) {
          return;
        }

        var handlePosition = scope_Locations[index];
        var differenceWithThisHandle = Math.abs(handlePosition - clickedPosition); // Initial state

        var clickAtEdge = differenceWithThisHandle === 100 && smallestDifference === 100; // Difference with this handle is smaller than the previously checked handle

        var isCloser = differenceWithThisHandle < smallestDifference;
        var isCloserAfter = differenceWithThisHandle <= smallestDifference && clickedPosition > handlePosition;

        if (isCloser || isCloserAfter || clickAtEdge) {
          handleNumber = index;
          smallestDifference = differenceWithThisHandle;
        }
      });
      return handleNumber;
    } // Fire 'end' when a mouse or pen leaves the document.


    function documentLeave(event, data) {
      if (event.type === "mouseout" && event.target.nodeName === "HTML" && event.relatedTarget === null) {
        eventEnd(event, data);
      }
    } // Handle movement on document for handle and range drag.


    function eventMove(event, data) {
      // Fix #498
      // Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
      // https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
      // IE9 has .buttons and .which zero on mousemove.
      // Firefox breaks the spec MDN defines.
      if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) {
        return eventEnd(event, data);
      } // Check if we are moving up or down


      var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint); // Convert the movement into a percentage of the slider width/height

      var proposal = movement * 100 / data.baseSize;
      moveHandles(movement > 0, proposal, data.locations, data.handleNumbers);
    } // Unbind move events on document, call callbacks.


    function eventEnd(event, data) {
      // The handle is no longer active, so remove the class.
      if (data.handle) {
        removeClass(data.handle, options.cssClasses.active);
        scope_ActiveHandlesCount -= 1;
      } // Unbind the move and end events, which are added on 'start'.


      data.listeners.forEach(function (c) {
        scope_DocumentElement.removeEventListener(c[0], c[1]);
      });

      if (scope_ActiveHandlesCount === 0) {
        // Remove dragging class.
        removeClass(scope_Target, options.cssClasses.drag);
        setZindex(); // Remove cursor styles and text-selection events bound to the body.

        if (event.cursor) {
          scope_Body.style.cursor = "";
          scope_Body.removeEventListener("selectstart", preventDefault);
        }
      }

      data.handleNumbers.forEach(function (handleNumber) {
        fireEvent("change", handleNumber);
        fireEvent("set", handleNumber);
        fireEvent("end", handleNumber);
      });
    } // Bind move events on document.


    function eventStart(event, data) {
      // Ignore event if any handle is disabled
      if (data.handleNumbers.some(isHandleDisabled)) {
        return false;
      }

      var handle;

      if (data.handleNumbers.length === 1) {
        var handleOrigin = scope_Handles[data.handleNumbers[0]];
        handle = handleOrigin.children[0];
        scope_ActiveHandlesCount += 1; // Mark the handle as 'active' so it can be styled.

        addClass(handle, options.cssClasses.active);
      } // A drag should never propagate up to the 'tap' event.


      event.stopPropagation(); // Record the event listeners.

      var listeners = []; // Attach the move and end events.

      var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
        // The event target has changed so we need to propagate the original one so that we keep
        // relying on it to extract target touches.
        target: event.target,
        handle: handle,
        listeners: listeners,
        startCalcPoint: event.calcPoint,
        baseSize: baseSize(),
        pageOffset: event.pageOffset,
        handleNumbers: data.handleNumbers,
        buttonsProperty: event.buttons,
        locations: scope_Locations.slice()
      });
      var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
        target: event.target,
        handle: handle,
        listeners: listeners,
        doNotReject: true,
        handleNumbers: data.handleNumbers
      });
      var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
        target: event.target,
        handle: handle,
        listeners: listeners,
        doNotReject: true,
        handleNumbers: data.handleNumbers
      }); // We want to make sure we pushed the listeners in the listener list rather than creating
      // a new one as it has already been passed to the event handlers.

      listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent)); // Text selection isn't an issue on touch devices,
      // so adding cursor styles can be skipped.

      if (event.cursor) {
        // Prevent the 'I' cursor and extend the range-drag cursor.
        scope_Body.style.cursor = getComputedStyle(event.target).cursor; // Mark the target with a dragging state.

        if (scope_Handles.length > 1) {
          addClass(scope_Target, options.cssClasses.drag);
        } // Prevent text selection when dragging the handles.
        // In noUiSlider <= 9.2.0, this was handled by calling preventDefault on mouse/touch start/move,
        // which is scroll blocking. The selectstart event is supported by FireFox starting from version 52,
        // meaning the only holdout is iOS Safari. This doesn't matter: text selection isn't triggered there.
        // The 'cursor' flag is false.
        // See: http://caniuse.com/#search=selectstart


        scope_Body.addEventListener("selectstart", preventDefault, false);
      }

      data.handleNumbers.forEach(function (handleNumber) {
        fireEvent("start", handleNumber);
      });
    } // Move closest handle to tapped location.


    function eventTap(event) {
      // The tap event shouldn't propagate up
      event.stopPropagation();
      var proposal = calcPointToPercentage(event.calcPoint);
      var handleNumber = getClosestHandle(proposal); // Tackle the case that all handles are 'disabled'.

      if (handleNumber === false) {
        return false;
      } // Flag the slider as it is now in a transitional state.
      // Transition takes a configurable amount of ms (default 300). Re-enable the slider after that.


      if (!options.events.snap) {
        addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
      }

      setHandle(handleNumber, proposal, true, true);
      setZindex();
      fireEvent("slide", handleNumber, true);
      fireEvent("update", handleNumber, true);
      fireEvent("change", handleNumber, true);
      fireEvent("set", handleNumber, true);

      if (options.events.snap) {
        eventStart(event, {
          handleNumbers: [handleNumber]
        });
      }
    } // Fires a 'hover' event for a hovered mouse/pen position.


    function eventHover(event) {
      var proposal = calcPointToPercentage(event.calcPoint);
      var to = scope_Spectrum.getStep(proposal);
      var value = scope_Spectrum.fromStepping(to);
      Object.keys(scope_Events).forEach(function (targetEvent) {
        if ("hover" === targetEvent.split(".")[0]) {
          scope_Events[targetEvent].forEach(function (callback) {
            callback.call(scope_Self, value);
          });
        }
      });
    } // Handles keydown on focused handles
    // Don't move the document when pressing arrow keys on focused handles


    function eventKeydown(event, handleNumber) {
      if (isSliderDisabled() || isHandleDisabled(handleNumber)) {
        return false;
      }

      var horizontalKeys = ["Left", "Right"];
      var verticalKeys = ["Down", "Up"];
      var largeStepKeys = ["PageDown", "PageUp"];
      var edgeKeys = ["Home", "End"];

      if (options.dir && !options.ort) {
        // On an right-to-left slider, the left and right keys act inverted
        horizontalKeys.reverse();
      } else if (options.ort && !options.dir) {
        // On a top-to-bottom slider, the up and down keys act inverted
        verticalKeys.reverse();
        largeStepKeys.reverse();
      } // Strip "Arrow" for IE compatibility. https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key


      var key = event.key.replace("Arrow", "");
      var isLargeDown = key === largeStepKeys[0];
      var isLargeUp = key === largeStepKeys[1];
      var isDown = key === verticalKeys[0] || key === horizontalKeys[0] || isLargeDown;
      var isUp = key === verticalKeys[1] || key === horizontalKeys[1] || isLargeUp;
      var isMin = key === edgeKeys[0];
      var isMax = key === edgeKeys[1];

      if (!isDown && !isUp && !isMin && !isMax) {
        return true;
      }

      event.preventDefault();
      var to;

      if (isUp || isDown) {
        var multiplier = options.keyboardPageMultiplier;
        var direction = isDown ? 0 : 1;
        var steps = getNextStepsForHandle(handleNumber);
        var step = steps[direction]; // At the edge of a slider, do nothing

        if (step === null) {
          return false;
        } // No step set, use the default of 10% of the sub-range


        if (step === false) {
          step = scope_Spectrum.getDefaultStep(scope_Locations[handleNumber], isDown, options.keyboardDefaultStep);
        }

        if (isLargeUp || isLargeDown) {
          step *= multiplier;
        } // Step over zero-length ranges (#948);


        step = Math.max(step, 0.0000001); // Decrement for down steps

        step = (isDown ? -1 : 1) * step;
        to = scope_Values[handleNumber] + step;
      } else if (isMax) {
        // End key
        to = options.spectrum.xVal[options.spectrum.xVal.length - 1];
      } else {
        // Home key
        to = options.spectrum.xVal[0];
      }

      setHandle(handleNumber, scope_Spectrum.toStepping(to), true, true);
      fireEvent("slide", handleNumber);
      fireEvent("update", handleNumber);
      fireEvent("change", handleNumber);
      fireEvent("set", handleNumber);
      return false;
    } // Attach events to several slider parts.


    function bindSliderEvents(behaviour) {
      // Attach the standard drag event to the handles.
      if (!behaviour.fixed) {
        scope_Handles.forEach(function (handle, index) {
          // These events are only bound to the visual handle
          // element, not the 'real' origin element.
          attachEvent(actions.start, handle.children[0], eventStart, {
            handleNumbers: [index]
          });
        });
      } // Attach the tap event to the slider base.


      if (behaviour.tap) {
        attachEvent(actions.start, scope_Base, eventTap, {});
      } // Fire hover events


      if (behaviour.hover) {
        attachEvent(actions.move, scope_Base, eventHover, {
          hover: true
        });
      } // Make the range draggable.


      if (behaviour.drag) {
        scope_Connects.forEach(function (connect, index) {
          if (connect === false || index === 0 || index === scope_Connects.length - 1) {
            return;
          }

          var handleBefore = scope_Handles[index - 1];
          var handleAfter = scope_Handles[index];
          var eventHolders = [connect];
          addClass(connect, options.cssClasses.draggable); // When the range is fixed, the entire range can
          // be dragged by the handles. The handle in the first
          // origin will propagate the start event upward,
          // but it needs to be bound manually on the other.

          if (behaviour.fixed) {
            eventHolders.push(handleBefore.children[0]);
            eventHolders.push(handleAfter.children[0]);
          }

          eventHolders.forEach(function (eventHolder) {
            attachEvent(actions.start, eventHolder, eventStart, {
              handles: [handleBefore, handleAfter],
              handleNumbers: [index - 1, index]
            });
          });
        });
      }
    } // Attach an event to this slider, possibly including a namespace


    function bindEvent(namespacedEvent, callback) {
      scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
      scope_Events[namespacedEvent].push(callback); // If the event bound is 'update,' fire it immediately for all handles.

      if (namespacedEvent.split(".")[0] === "update") {
        scope_Handles.forEach(function (a, index) {
          fireEvent("update", index);
        });
      }
    } // Undo attachment of event


    function removeEvent(namespacedEvent) {
      var event = namespacedEvent && namespacedEvent.split(".")[0];
      var namespace = event && namespacedEvent.substring(event.length);
      Object.keys(scope_Events).forEach(function (bind) {
        var tEvent = bind.split(".")[0];
        var tNamespace = bind.substring(tEvent.length);

        if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) {
          delete scope_Events[bind];
        }
      });
    } // External event handling


    function fireEvent(eventName, handleNumber, tap) {
      Object.keys(scope_Events).forEach(function (targetEvent) {
        var eventType = targetEvent.split(".")[0];

        if (eventName === eventType) {
          scope_Events[targetEvent].forEach(function (callback) {
            callback.call( // Use the slider public API as the scope ('this')
            scope_Self, // Return values as array, so arg_1[arg_2] is always valid.
            scope_Values.map(options.format.to), // Handle index, 0 or 1
            handleNumber, // Un-formatted slider values
            scope_Values.slice(), // Event is fired by tap, true or false
            tap || false, // Left offset of the handle, in relation to the slider
            scope_Locations.slice(), // add the slider public API to an accessible parameter when this is unavailable
            scope_Self);
          });
        }
      });
    } // Split out the handle positioning logic so the Move event can use it, too


    function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue) {
      var distance; // For sliders with multiple handles, limit movement to the other handle.
      // Apply the margin option by adding it to the handle positions.

      if (scope_Handles.length > 1 && !options.events.unconstrained) {
        if (lookBackward && handleNumber > 0) {
          distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.margin, 0);
          to = Math.max(to, distance);
        }

        if (lookForward && handleNumber < scope_Handles.length - 1) {
          distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.margin, 1);
          to = Math.min(to, distance);
        }
      } // The limit option has the opposite effect, limiting handles to a
      // maximum distance from another. Limit must be > 0, as otherwise
      // handles would be unmovable.


      if (scope_Handles.length > 1 && options.limit) {
        if (lookBackward && handleNumber > 0) {
          distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.limit, 0);
          to = Math.min(to, distance);
        }

        if (lookForward && handleNumber < scope_Handles.length - 1) {
          distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.limit, 1);
          to = Math.max(to, distance);
        }
      } // The padding option keeps the handles a certain distance from the
      // edges of the slider. Padding must be > 0.


      if (options.padding) {
        if (handleNumber === 0) {
          distance = scope_Spectrum.getAbsoluteDistance(0, options.padding[0], 0);
          to = Math.max(to, distance);
        }

        if (handleNumber === scope_Handles.length - 1) {
          distance = scope_Spectrum.getAbsoluteDistance(100, options.padding[1], 1);
          to = Math.min(to, distance);
        }
      }

      to = scope_Spectrum.getStep(to); // Limit percentage to the 0 - 100 range

      to = limit(to); // Return false if handle can't move

      if (to === reference[handleNumber] && !getValue) {
        return false;
      }

      return to;
    } // Uses slider orientation to create CSS rules. a = base value;


    function inRuleOrder(v, a) {
      var o = options.ort;
      return (o ? a : v) + ", " + (o ? v : a);
    } // Moves handle(s) by a percentage
    // (bool, % to move, [% where handle started, ...], [index in scope_Handles, ...])


    function moveHandles(upward, proposal, locations, handleNumbers) {
      var proposals = locations.slice();
      var b = [!upward, upward];
      var f = [upward, !upward]; // Copy handleNumbers so we don't change the dataset

      handleNumbers = handleNumbers.slice(); // Check to see which handle is 'leading'.
      // If that one can't move the second can't either.

      if (upward) {
        handleNumbers.reverse();
      } // Step 1: get the maximum percentage that any of the handles can move


      if (handleNumbers.length > 1) {
        handleNumbers.forEach(function (handleNumber, o) {
          var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false); // Stop if one of the handles can't move.

          if (to === false) {
            proposal = 0;
          } else {
            proposal = to - proposals[handleNumber];
            proposals[handleNumber] = to;
          }
        });
      } // If using one handle, check backward AND forward
      else {
          b = f = [true];
        }

      var state = false; // Step 2: Try to set the handles with the found percentage

      handleNumbers.forEach(function (handleNumber, o) {
        state = setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o]) || state;
      }); // Step 3: If a handle moved, fire events

      if (state) {
        handleNumbers.forEach(function (handleNumber) {
          fireEvent("update", handleNumber);
          fireEvent("slide", handleNumber);
        });
      }
    } // Takes a base value and an offset. This offset is used for the connect bar size.
    // In the initial design for this feature, the origin element was 1% wide.
    // Unfortunately, a rounding bug in Chrome makes it impossible to implement this feature
    // in this manner: https://bugs.chromium.org/p/chromium/issues/detail?id=798223


    function transformDirection(a, b) {
      return options.dir ? 100 - a - b : a;
    } // Updates scope_Locations and scope_Values, updates visual state


    function updateHandlePosition(handleNumber, to) {
      // Update locations.
      scope_Locations[handleNumber] = to; // Convert the value to the slider stepping/range.

      scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);
      var translation = 10 * (transformDirection(to, 0) - scope_DirOffset);
      var translateRule = "translate(" + inRuleOrder(translation + "%", "0") + ")";
      scope_Handles[handleNumber].style[options.transformRule] = translateRule;
      updateConnect(handleNumber);
      updateConnect(handleNumber + 1);
    } // Handles before the slider middle are stacked later = higher,
    // Handles after the middle later is lower
    // [[7] [8] .......... | .......... [5] [4]


    function setZindex() {
      scope_HandleNumbers.forEach(function (handleNumber) {
        var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;
        var zIndex = 3 + (scope_Handles.length + dir * handleNumber);
        scope_Handles[handleNumber].style.zIndex = zIndex;
      });
    } // Test suggested values and apply margin, step.
    // if exactInput is true, don't run checkHandlePosition, then the handle can be placed in between steps (#436)


    function setHandle(handleNumber, to, lookBackward, lookForward, exactInput) {
      if (!exactInput) {
        to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false);
      }

      if (to === false) {
        return false;
      }

      updateHandlePosition(handleNumber, to);
      return true;
    } // Updates style attribute for connect nodes


    function updateConnect(index) {
      // Skip connects set to false
      if (!scope_Connects[index]) {
        return;
      }

      var l = 0;
      var h = 100;

      if (index !== 0) {
        l = scope_Locations[index - 1];
      }

      if (index !== scope_Connects.length - 1) {
        h = scope_Locations[index];
      } // We use two rules:
      // 'translate' to change the left/top offset;
      // 'scale' to change the width of the element;
      // As the element has a width of 100%, a translation of 100% is equal to 100% of the parent (.noUi-base)


      var connectWidth = h - l;
      var translateRule = "translate(" + inRuleOrder(transformDirection(l, connectWidth) + "%", "0") + ")";
      var scaleRule = "scale(" + inRuleOrder(connectWidth / 100, "1") + ")";
      scope_Connects[index].style[options.transformRule] = translateRule + " " + scaleRule;
    } // Parses value passed to .set method. Returns current value if not parse-able.


    function resolveToValue(to, handleNumber) {
      // Setting with null indicates an 'ignore'.
      // Inputting 'false' is invalid.
      if (to === null || to === false || to === undefined) {
        return scope_Locations[handleNumber];
      } // If a formatted number was passed, attempt to decode it.


      if (typeof to === "number") {
        to = String(to);
      }

      to = options.format.from(to);
      to = scope_Spectrum.toStepping(to); // If parsing the number failed, use the current value.

      if (to === false || isNaN(to)) {
        return scope_Locations[handleNumber];
      }

      return to;
    } // Set the slider value.


    function valueSet(input, fireSetEvent, exactInput) {
      var values = asArray(input);
      var isInit = scope_Locations[0] === undefined; // Event fires by default

      fireSetEvent = fireSetEvent === undefined ? true : !!fireSetEvent; // Animation is optional.
      // Make sure the initial values were set before using animated placement.

      if (options.animate && !isInit) {
        addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
      } // First pass, without lookAhead but with lookBackward. Values are set from left to right.


      scope_HandleNumbers.forEach(function (handleNumber) {
        setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false, exactInput);
      });
      var i = scope_HandleNumbers.length === 1 ? 0 : 1; // Secondary passes. Now that all base values are set, apply constraints.
      // Iterate all handles to ensure constraints are applied for the entire slider (Issue #1009)

      for (; i < scope_HandleNumbers.length; ++i) {
        scope_HandleNumbers.forEach(function (handleNumber) {
          setHandle(handleNumber, scope_Locations[handleNumber], true, true, exactInput);
        });
      }

      setZindex();
      scope_HandleNumbers.forEach(function (handleNumber) {
        fireEvent("update", handleNumber); // Fire the event only for handles that received a new value, as per #579

        if (values[handleNumber] !== null && fireSetEvent) {
          fireEvent("set", handleNumber);
        }
      });
    } // Reset slider to initial values


    function valueReset(fireSetEvent) {
      valueSet(options.start, fireSetEvent);
    } // Set value for a single handle


    function valueSetHandle(handleNumber, value, fireSetEvent, exactInput) {
      // Ensure numeric input
      handleNumber = Number(handleNumber);

      if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) {
        throw new Error("noUiSlider (" + VERSION + "): invalid handle number, got: " + handleNumber);
      } // Look both backward and forward, since we don't want this handle to "push" other handles (#960);
      // The exactInput argument can be used to ignore slider stepping (#436)


      setHandle(handleNumber, resolveToValue(value, handleNumber), true, true, exactInput);
      fireEvent("update", handleNumber);

      if (fireSetEvent) {
        fireEvent("set", handleNumber);
      }
    } // Get the slider value.


    function valueGet() {
      var values = scope_Values.map(options.format.to); // If only one handle is used, return a single value.

      if (values.length === 1) {
        return values[0];
      }

      return values;
    } // Removes classes from the root and empties it.


    function destroy() {
      for (var key in options.cssClasses) {
        if (!options.cssClasses.hasOwnProperty(key)) {
          continue;
        }

        removeClass(scope_Target, options.cssClasses[key]);
      }

      while (scope_Target.firstChild) {
        scope_Target.removeChild(scope_Target.firstChild);
      }

      delete scope_Target.noUiSlider;
    }

    function getNextStepsForHandle(handleNumber) {
      var location = scope_Locations[handleNumber];
      var nearbySteps = scope_Spectrum.getNearbySteps(location);
      var value = scope_Values[handleNumber];
      var increment = nearbySteps.thisStep.step;
      var decrement = null; // If snapped, directly use defined step value

      if (options.snap) {
        return [value - nearbySteps.stepBefore.startValue || null, nearbySteps.stepAfter.startValue - value || null];
      } // If the next value in this step moves into the next step,
      // the increment is the start of the next step - the current value


      if (increment !== false) {
        if (value + increment > nearbySteps.stepAfter.startValue) {
          increment = nearbySteps.stepAfter.startValue - value;
        }
      } // If the value is beyond the starting point


      if (value > nearbySteps.thisStep.startValue) {
        decrement = nearbySteps.thisStep.step;
      } else if (nearbySteps.stepBefore.step === false) {
        decrement = false;
      } // If a handle is at the start of a step, it always steps back into the previous step first
      else {
          decrement = value - nearbySteps.stepBefore.highestStep;
        } // Now, if at the slider edges, there is no in/decrement


      if (location === 100) {
        increment = null;
      } else if (location === 0) {
        decrement = null;
      } // As per #391, the comparison for the decrement step can have some rounding issues.


      var stepDecimals = scope_Spectrum.countStepDecimals(); // Round per #391

      if (increment !== null && increment !== false) {
        increment = Number(increment.toFixed(stepDecimals));
      }

      if (decrement !== null && decrement !== false) {
        decrement = Number(decrement.toFixed(stepDecimals));
      }

      return [decrement, increment];
    } // Get the current step size for the slider.


    function getNextSteps() {
      return scope_HandleNumbers.map(getNextStepsForHandle);
    } // Updateable: margin, limit, padding, step, range, animate, snap


    function updateOptions(optionsToUpdate, fireSetEvent) {
      // Spectrum is created using the range, snap, direction and step options.
      // 'snap' and 'step' can be updated.
      // If 'snap' and 'step' are not passed, they should remain unchanged.
      var v = valueGet();
      var updateAble = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format", "pips", "tooltips"]; // Only change options that we're actually passed to update.

      updateAble.forEach(function (name) {
        // Check for undefined. null removes the value.
        if (optionsToUpdate[name] !== undefined) {
          originalOptions[name] = optionsToUpdate[name];
        }
      });
      var newOptions = testOptions(originalOptions); // Load new options into the slider state

      updateAble.forEach(function (name) {
        if (optionsToUpdate[name] !== undefined) {
          options[name] = newOptions[name];
        }
      });
      scope_Spectrum = newOptions.spectrum; // Limit, margin and padding depend on the spectrum but are stored outside of it. (#677)

      options.margin = newOptions.margin;
      options.limit = newOptions.limit;
      options.padding = newOptions.padding; // Update pips, removes existing.

      if (options.pips) {
        pips(options.pips);
      } else {
        removePips();
      } // Update tooltips, removes existing.


      if (options.tooltips) {
        tooltips();
      } else {
        removeTooltips();
      } // Invalidate the current positioning so valueSet forces an update.


      scope_Locations = [];
      valueSet(optionsToUpdate.start || v, fireSetEvent);
    } // Initialization steps


    function setupSlider() {
      // Create the base element, initialize HTML and set classes.
      // Add handles and connect elements.
      scope_Base = addSlider(scope_Target);
      addElements(options.connect, scope_Base); // Attach user events.

      bindSliderEvents(options.events); // Use the public value method to set the start values.

      valueSet(options.start);

      if (options.pips) {
        pips(options.pips);
      }

      if (options.tooltips) {
        tooltips();
      }

      aria();
    }

    setupSlider(); // noinspection JSUnusedGlobalSymbols

    scope_Self = {
      destroy: destroy,
      steps: getNextSteps,
      on: bindEvent,
      off: removeEvent,
      get: valueGet,
      set: valueSet,
      setHandle: valueSetHandle,
      reset: valueReset,
      // Exposed for unit testing, don't use this in your application.
      __moveHandles: function __moveHandles(a, b, c) {
        moveHandles(a, b, scope_Locations, c);
      },
      options: originalOptions,
      // Issue #600, #678
      updateOptions: updateOptions,
      target: scope_Target,
      // Issue #597
      removePips: removePips,
      removeTooltips: removeTooltips,
      getTooltips: function getTooltips() {
        return scope_Tooltips;
      },
      getOrigins: function getOrigins() {
        return scope_Handles;
      },
      pips: pips // Issue #594

    };
    return scope_Self;
  } // Run the standard initializer


  function initialize(target, originalOptions) {
    if (!target || !target.nodeName) {
      throw new Error("noUiSlider (" + VERSION + "): create requires a single element, got: " + target);
    } // Throw an error if the slider was already initialized.


    if (target.noUiSlider) {
      throw new Error("noUiSlider (" + VERSION + "): Slider was already initialized.");
    } // Test the options and create the slider environment;


    var options = testOptions(originalOptions, target);
    var api = scope(target, options, originalOptions);
    target.noUiSlider = api;
    return api;
  } // Use an object instead of a function for future expandability;


  return {
    // Exposed for unit testing, don't use this in your application.
    __spectrum: Spectrum,
    version: VERSION,
    // A reference to the default classes, allows global changes.
    // Use the cssClasses option for changes to one slider.
    cssClasses: cssClasses,
    create: initialize
  };
});

(function (factory) {
  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object") {
    // Node/CommonJS
    module.exports = factory();
  } else {
    // Browser globals
    window.wNumb = factory();
  }
})(function () {
  "use strict";

  var FormatOptions = ["decimals", "thousand", "mark", "prefix", "suffix", "encoder", "decoder", "negativeBefore", "negative", "edit", "undo"]; // General
  // Reverse a string

  function strReverse(a) {
    return a.split("").reverse().join("");
  } // Check if a string starts with a specified prefix.


  function strStartsWith(input, match) {
    return input.substring(0, match.length) === match;
  } // Check is a string ends in a specified suffix.


  function strEndsWith(input, match) {
    return input.slice(-1 * match.length) === match;
  } // Throw an error if formatting options are incompatible.


  function throwEqualError(F, a, b) {
    if ((F[a] || F[b]) && F[a] === F[b]) {
      throw new Error(a);
    }
  } // Check if a number is finite and not NaN


  function isValidNumber(input) {
    return typeof input === "number" && isFinite(input);
  } // Provide rounding-accurate toFixed method.
  // Borrowed: http://stackoverflow.com/a/21323330/775265


  function toFixed(value, exp) {
    value = value.toString().split("e");
    value = Math.round(+(value[0] + "e" + (value[1] ? +value[1] + exp : exp)));
    value = value.toString().split("e");
    return (+(value[0] + "e" + (value[1] ? +value[1] - exp : -exp))).toFixed(exp);
  } // Formatting
  // Accept a number as input, output formatted string.


  function formatTo(decimals, thousand, mark, prefix, suffix, encoder, decoder, negativeBefore, negative, edit, undo, input) {
    var originalInput = input,
        inputIsNegative,
        inputPieces,
        inputBase,
        inputDecimals = "",
        output = ""; // Apply user encoder to the input.
    // Expected outcome: number.

    if (encoder) {
      input = encoder(input);
    } // Stop if no valid number was provided, the number is infinite or NaN.


    if (!isValidNumber(input)) {
      return false;
    } // Rounding away decimals might cause a value of -0
    // when using very small ranges. Remove those cases.


    if (decimals !== false && parseFloat(input.toFixed(decimals)) === 0) {
      input = 0;
    } // Formatting is done on absolute numbers,
    // decorated by an optional negative symbol.


    if (input < 0) {
      inputIsNegative = true;
      input = Math.abs(input);
    } // Reduce the number of decimals to the specified option.


    if (decimals !== false) {
      input = toFixed(input, decimals);
    } // Transform the number into a string, so it can be split.


    input = input.toString(); // Break the number on the decimal separator.

    if (input.indexOf(".") !== -1) {
      inputPieces = input.split(".");
      inputBase = inputPieces[0];

      if (mark) {
        inputDecimals = mark + inputPieces[1];
      }
    } else {
      // If it isn't split, the entire number will do.
      inputBase = input;
    } // Group numbers in sets of three.


    if (thousand) {
      inputBase = strReverse(inputBase).match(/.{1,3}/g);
      inputBase = strReverse(inputBase.join(strReverse(thousand)));
    } // If the number is negative, prefix with negation symbol.


    if (inputIsNegative && negativeBefore) {
      output += negativeBefore;
    } // Prefix the number


    if (prefix) {
      output += prefix;
    } // Normal negative option comes after the prefix. Defaults to '-'.


    if (inputIsNegative && negative) {
      output += negative;
    } // Append the actual number.


    output += inputBase;
    output += inputDecimals; // Apply the suffix.

    if (suffix) {
      output += suffix;
    } // Run the output through a user-specified post-formatter.


    if (edit) {
      output = edit(output, originalInput);
    } // All done.


    return output;
  } // Accept a sting as input, output decoded number.


  function formatFrom(decimals, thousand, mark, prefix, suffix, encoder, decoder, negativeBefore, negative, edit, undo, input) {
    var originalInput = input,
        inputIsNegative,
        output = ""; // User defined pre-decoder. Result must be a non empty string.

    if (undo) {
      input = undo(input);
    } // Test the input. Can't be empty.


    if (!input || typeof input !== "string") {
      return false;
    } // If the string starts with the negativeBefore value: remove it.
    // Remember is was there, the number is negative.


    if (negativeBefore && strStartsWith(input, negativeBefore)) {
      input = input.replace(negativeBefore, "");
      inputIsNegative = true;
    } // Repeat the same procedure for the prefix.


    if (prefix && strStartsWith(input, prefix)) {
      input = input.replace(prefix, "");
    } // And again for negative.


    if (negative && strStartsWith(input, negative)) {
      input = input.replace(negative, "");
      inputIsNegative = true;
    } // Remove the suffix.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice


    if (suffix && strEndsWith(input, suffix)) {
      input = input.slice(0, -1 * suffix.length);
    } // Remove the thousand grouping.


    if (thousand) {
      input = input.split(thousand).join("");
    } // Set the decimal separator back to period.


    if (mark) {
      input = input.replace(mark, ".");
    } // Prepend the negative symbol.


    if (inputIsNegative) {
      output += "-";
    } // Add the number


    output += input; // Trim all non-numeric characters (allow '.' and '-');

    output = output.replace(/[^0-9\.\-.]/g, ""); // The value contains no parse-able number.

    if (output === "") {
      return false;
    } // Covert to number.


    output = Number(output); // Run the user-specified post-decoder.

    if (decoder) {
      output = decoder(output);
    } // Check is the output is valid, otherwise: return false.


    if (!isValidNumber(output)) {
      return false;
    }

    return output;
  } // Framework
  // Validate formatting options


  function validate(inputOptions) {
    var i,
        optionName,
        optionValue,
        filteredOptions = {};

    if (inputOptions["suffix"] === undefined) {
      inputOptions["suffix"] = inputOptions["postfix"];
    }

    for (i = 0; i < FormatOptions.length; i += 1) {
      optionName = FormatOptions[i];
      optionValue = inputOptions[optionName];

      if (optionValue === undefined) {
        // Only default if negativeBefore isn't set.
        if (optionName === "negative" && !filteredOptions.negativeBefore) {
          filteredOptions[optionName] = "-"; // Don't set a default for mark when 'thousand' is set.
        } else if (optionName === "mark" && filteredOptions.thousand !== ".") {
          filteredOptions[optionName] = ".";
        } else {
          filteredOptions[optionName] = false;
        } // Floating points in JS are stable up to 7 decimals.

      } else if (optionName === "decimals") {
        if (optionValue >= 0 && optionValue < 8) {
          filteredOptions[optionName] = optionValue;
        } else {
          throw new Error(optionName);
        } // These options, when provided, must be functions.

      } else if (optionName === "encoder" || optionName === "decoder" || optionName === "edit" || optionName === "undo") {
        if (typeof optionValue === "function") {
          filteredOptions[optionName] = optionValue;
        } else {
          throw new Error(optionName);
        } // Other options are strings.

      } else {
        if (typeof optionValue === "string") {
          filteredOptions[optionName] = optionValue;
        } else {
          throw new Error(optionName);
        }
      }
    } // Some values can't be extracted from a
    // string if certain combinations are present.


    throwEqualError(filteredOptions, "mark", "thousand");
    throwEqualError(filteredOptions, "prefix", "negative");
    throwEqualError(filteredOptions, "prefix", "negativeBefore");
    return filteredOptions;
  } // Pass all options as function arguments


  function passAll(options, method, input) {
    var i,
        args = []; // Add all options in order of FormatOptions

    for (i = 0; i < FormatOptions.length; i += 1) {
      args.push(options[FormatOptions[i]]);
    } // Append the input, then call the method, presenting all
    // options as arguments.


    args.push(input);
    return method.apply("", args);
  }

  function wNumb(options) {
    if (!(this instanceof wNumb)) {
      return new wNumb(options);
    }

    if (_typeof(options) !== "object") {
      return;
    }

    options = validate(options); // Call 'formatTo' with proper arguments.

    this.to = function (input) {
      return passAll(options, formatTo, input);
    }; // Call 'formatFrom' with proper arguments.


    this.from = function (input) {
      return passAll(options, formatFrom, input);
    };
  }

  return wNumb;
}); // components


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
$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});
$(document).ready(function () {
  $('.tabs-triggers__item').click(function (e) {
    e.preventDefault();
    $('.tabs-triggers__item').removeClass('tabs-triggers__item--active');
    $('.tabs-content__item').removeClass('tabs-content__item--active');
    $(this).addClass('tabs-triggers__item--active');
    $($(this).attr('href')).addClass('tabs-content__item--active');
  });
  $('.tabs-triggers__item:first').click();
});
$(document).ready(function () {
  $('.accordion__title').click(function (event) {
    if ($('.accordion').hasClass('accordion-one')) {
      $('.accordion__title').not($(this)).removeClass('active');
      $('.accordion__text').not($(this).next()).slideUp(300);
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
var popupLinks = document.querySelectorAll('.popup-link');
var body = document.querySelector('body');
var lockPadding = document.querySelectorAll(".lock-padding");
var unlock = true;
var timeout = 800;

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
  var _loop2 = function _loop2(_index) {
    var el = popupCloseIcon[_index];
    el.addEventListener('click', function (e) {
      popupClose(el.closest('.popup'));
      e.preventDefault();
    });
  };

  for (var _index = 0; _index < popupCloseIcon.length; _index++) {
    _loop2(_index);
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
    for (var _index2 = 0; _index2 < lockPadding.length; _index2++) {
      var el = lockPadding[_index2];
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
      for (var _index3 = 0; _index3 < lockPadding.length; _index3++) {
        var el = lockPadding[_index3];
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
    mediaQuery = window.matchMedia('(min-width: 768px)');

    if (mediaQuery.matches) {
      var text = this.innerText,
          _select = this.closest('.custom-select'),
          currentText = _select.querySelector('.custom-select__trigger span');

      currentText.innerText = text;
    }

    var options = this.closest('.custom-options');
    var option = options.querySelectorAll('.custom-options__option');

    for (var _index4 = 0; _index4 < option.length; _index4++) {
      var element = option[_index4];
      element.classList.remove('selected');
    }

    this.classList.add("selected");
  }

  mediaQuery = window.matchMedia('(max-width: 767px)');
  mediaQuery.addListener(handleTabletChange);

  function handleTabletChange(e) {
    if (e.matches) {
      var trigger = document.querySelector('.sorting__custom-select-wrapper .custom-select__trigger span');
      trigger.innerHTML = "Сортировать по";
    }
  }

  if (mediaQuery.matches) {
    var trigger = document.querySelector('.sorting__custom-select-wrapper .custom-select__trigger span');
    trigger.innerHTML = "Сортировать по";
  }
};

select();
;
$(document).ready(function () {
  $('#sideCategories-accordion .accordion__title:first').click();
  var priceSlider = document.querySelector('.price-filter');
  noUiSlider.create(priceSlider, {
    start: [0, 1000],
    connect: true,
    tooltips: [wNumb({
      decimals: 0
    }), wNumb({
      decimals: 0
    })],
    range: {
      'min': [0],
      'max': [1000]
    }
  });
});