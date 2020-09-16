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
}, {}, [53]); // components

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
  var lockPaddingValue = window.innerWidth - document.querySelector('.site-content').offsetWidth + 'px'; //!обратить внимание на контейнер

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
    var text = this.innerText,
        select = this.closest('.custom-select'),
        currentText = select.querySelector('.custom-select__trigger span');
    currentText.innerText = text;
    var options = this.closest('.custom-options');
    var option = options.querySelectorAll('.custom-options__option');

    for (var _index4 = 0; _index4 < option.length; _index4++) {
      var element = option[_index4];
      element.classList.remove('selected');
    }

    this.classList.add("selected");
  }
};

select();
;
$(document).ready(function () {
  $('#sideCategories-accordion .accordion__title:first').click();
});