!function o(i,s,l){function u(t,e){if(!s[t]){if(!i[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(c)return c(t,!0);var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}var a=s[t]={exports:{}};i[t][0].call(a.exports,function(e){return u(i[t][1][e]||e)},a,a.exports,o,i,s,l)}return s[t].exports}for(var c="function"==typeof require&&require,e=0;e<l.length;e++)u(l[e]);return u}({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.addCSSRule=function(e,t,n,r){"insertRule"in e?e.insertRule(t+"{"+n+"}",r):e.addRule(t,n,r)};e("./raf.js")},{"./raf.js":30}],2:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.addClass=void 0;var r=e("./hasClass.js"),a=r.classListSupport?function(e,t){(0,r.hasClass)(e,t)||e.classList.add(t)}:function(e,t){(0,r.hasClass)(e,t)||(e.className+=" "+t)};n.addClass=a},{"./hasClass.js":22}],3:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.addEvents=function(e,t,n){for(var r in t){var a=0<=["touchstart","touchmove"].indexOf(r)&&!n&&o.passiveOption;e.addEventListener(r,t[r],a)}};var o=e("./passiveOption.js")},{"./passiveOption.js":28}],4:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.arrayFromNodeList=function(e){for(var t=[],n=0,r=e.length;n<r;n++)t.push(e[n]);return t}},{}],5:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.caf=void 0;var r=window,a=r.cancelAnimationFrame||r.mozCancelAnimationFrame||function(e){clearTimeout(e)};n.caf=a},{}],6:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.calc=function(){var e=document,t=(0,u.getBody)(),n=(0,c.setFakeBody)(t),r=e.createElement("div"),a=!1;t.appendChild(r);try{for(var o,i="(10px * 10)",s=["calc"+i,"-moz-calc"+i,"-webkit-calc"+i],l=0;l<3;l++)if(o=s[l],r.style.width=o,100===r.offsetWidth){a=o.replace(i,"");break}}catch(e){}return t.fake?(0,d.resetFakeBody)(t,n):r.remove(),a};var u=e("./getBody.js"),c=e("./setFakeBody.js"),d=e("./resetFakeBody.js")},{"./getBody.js":15,"./resetFakeBody.js":35,"./setFakeBody.js":37}],7:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.checkStorageValue=function(e){return 0<=["true","false"].indexOf(e)?JSON.parse(e):e}},{}],8:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.classListSupport=void 0;var r="classList"in document.createElement("_");n.classListSupport=r},{}],9:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.createStyleSheet=function(e,t){var n=document.createElement("style");e&&n.setAttribute("media",e);t&&n.setAttribute("nonce",t);return document.querySelector("head").appendChild(n),n.sheet?n.sheet:n.styleSheet}},{}],10:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.docElement=void 0;var r=document.documentElement;n.docElement=r},{}],11:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.Events=function(){return{topics:{},on:function(e,t){this.topics[e]=this.topics[e]||[],this.topics[e].push(t)},off:function(e,t){if(this.topics[e])for(var n=0;n<this.topics[e].length;n++)if(this.topics[e][n]===t){this.topics[e].splice(n,1);break}},emit:function(t,n){n.type=t,this.topics[t]&&this.topics[t].forEach(function(e){e(n,t)})}}}},{}],12:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.extend=function(){for(var e,t,n,r=arguments[0]||{},a=1,o=arguments.length;a<o;a++)if(null!==(e=arguments[a]))for(t in e)n=e[t],r!==n&&void 0!==n&&(r[t]=n);return r}},{}],13:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.forEach=function(e,t,n){for(var r=0,a=e.length;r<a;r++)t.call(n,e[r],r)}},{}],14:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.getAttr=function(e,t){return e.getAttribute(t)}},{}],15:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.getBody=function(){var e=document,t=e.body;t||((t=e.createElement("body")).fake=!0);return t}},{}],16:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.getCssRulesLength=function(e){return("insertRule"in e?e.cssRules:e.rules).length}},{}],17:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.getEndProperty=function(e,t){var n=!1;/^Webkit/.test(e)?n="webkit"+t+"End":/^O/.test(e)?n="o"+t+"End":e&&(n=t.toLowerCase()+"end");return n}},{}],18:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.getSlideId=function(){var e=window.tnsId;return window.tnsId=e?e+1:1,"tns"+window.tnsId}},{}],19:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.getTouchDirection=function(e,t){var n=!1,r=Math.abs(90-Math.abs(e));90-t<=r?n="horizontal":r<=t&&(n="vertical");return n}},{}],20:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.has3DTransforms=function(e){if(!e)return!1;if(!window.getComputedStyle)return!1;var t,n=document,r=(0,s.getBody)(),a=(0,l.setFakeBody)(r),o=n.createElement("p"),i=9<e.length?"-"+e.slice(0,-9).toLowerCase()+"-":"";return i+="transform",r.insertBefore(o,null),o.style[e]="translate3d(1px,1px,1px)",t=window.getComputedStyle(o).getPropertyValue(i),r.fake?(0,u.resetFakeBody)(r,a):o.remove(),void 0!==t&&0<t.length&&"none"!==t};var s=e("./getBody.js"),l=e("./setFakeBody.js"),u=e("./resetFakeBody.js")},{"./getBody.js":15,"./resetFakeBody.js":35,"./setFakeBody.js":37}],21:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.hasAttr=function(e,t){return e.hasAttribute(t)}},{}],22:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"classListSupport",{enumerable:!0,get:function(){return r.classListSupport}}),n.hasClass=void 0;var r=e("./classListSupport.js"),a=r.classListSupport?function(e,t){return e.classList.contains(t)}:function(e,t){return 0<=e.className.indexOf(t)};n.hasClass=a},{"./classListSupport.js":8}],23:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.hideElement=function(e,t){"none"!==e.style.display&&(e.style.display="none")}},{}],24:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.isNodeList=function(e){return void 0!==e.item}},{}],25:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.isVisible=function(e){return"none"!==window.getComputedStyle(e).display}},{}],26:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.jsTransform=function(t,n,r,a,e,o,i){var s=Math.min(o,10),l=0<=e.indexOf("%")?"%":"px",e=e.replace(l,""),u=Number(t.style[n].replace(r,"").replace(a,"").replace(l,"")),c=(e-u)/o*s;setTimeout(function e(){o-=s,u+=c,t.style[n]=r+u+l+a,0<o?setTimeout(e,s):i()},s)}},{}],27:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.mediaquerySupport=function(){if(window.matchMedia||window.msMatchMedia)return!0;var e,t=document,n=(0,s.getBody)(),r=(0,l.setFakeBody)(n),a=t.createElement("div"),o=t.createElement("style"),i="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";o.type="text/css",a.className="tns-mq-test",n.appendChild(o),n.appendChild(a),o.styleSheet?o.styleSheet.cssText=i:o.appendChild(t.createTextNode(i));return e=window.getComputedStyle?window.getComputedStyle(a).position:a.currentStyle.position,n.fake?(0,u.resetFakeBody)(n,r):a.remove(),"absolute"===e};var s=e("./getBody.js"),l=e("./setFakeBody.js"),u=e("./resetFakeBody.js")},{"./getBody.js":15,"./resetFakeBody.js":35,"./setFakeBody.js":37}],28:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.passiveOption=void 0;var r=!1;try{var a=Object.defineProperty({},"passive",{get:function(){r=!0}});window.addEventListener("test",null,a)}catch(e){}var o=!!r&&{passive:!0};n.passiveOption=o},{}],29:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.percentageLayout=function(){var e=document,t=(0,l.getBody)(),n=(0,u.setFakeBody)(t),r=e.createElement("div"),a=e.createElement("div"),o="",i=!1;r.className="tns-t-subp2",a.className="tns-t-ct";for(var s=0;s<70;s++)o+="<div></div>";return a.innerHTML=o,r.appendChild(a),t.appendChild(r),i=Math.abs(r.getBoundingClientRect().left-a.children[67].getBoundingClientRect().left)<2,t.fake?(0,c.resetFakeBody)(t,n):r.remove(),i};var l=e("./getBody.js"),u=e("./setFakeBody.js"),c=e("./resetFakeBody.js")},{"./getBody.js":15,"./resetFakeBody.js":35,"./setFakeBody.js":37}],30:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.raf=void 0;var r=window,a=r.requestAnimationFrame||r.webkitRequestAnimationFrame||r.mozRequestAnimationFrame||r.msRequestAnimationFrame||function(e){return setTimeout(e,16)};n.raf=a},{}],31:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.removeAttrs=function(e,t){e=(0,o.isNodeList)(e)||e instanceof Array?e:[e];for(var n=(t=t instanceof Array?t:[t]).length,r=e.length;r--;)for(var a=n;a--;)e[r].removeAttribute(t[a])};var o=e("./isNodeList.js")},{"./isNodeList.js":24}],32:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.removeCSSRule=function(e,t){"deleteRule"in e?e.deleteRule(t):e.removeRule(t)};e("./raf.js")},{"./raf.js":30}],33:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.removeClass=void 0;var r=e("./hasClass.js"),a=r.classListSupport?function(e,t){(0,r.hasClass)(e,t)&&e.classList.remove(t)}:function(e,t){(0,r.hasClass)(e,t)&&(e.className=e.className.replace(t,""))};n.removeClass=a},{"./hasClass.js":22}],34:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.removeEvents=function(e,t){for(var n in t){var r=0<=["touchstart","touchmove"].indexOf(n)&&a.passiveOption;e.removeEventListener(n,t[n],r)}};var a=e("./passiveOption.js")},{"./passiveOption.js":28}],35:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.resetFakeBody=function(e,t){e.fake&&(e.remove(),r.docElement.style.overflow=t,r.docElement.offsetHeight)};var r=e("./docElement.js")},{"./docElement.js":10}],36:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.setAttrs=function(e,t){if(e=(0,a.isNodeList)(e)||e instanceof Array?e:[e],"[object Object]"!==Object.prototype.toString.call(t))return;for(var n=e.length;n--;)for(var r in t)e[n].setAttribute(r,t[r])};var a=e("./isNodeList.js")},{"./isNodeList.js":24}],37:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.setFakeBody=function(e){var t="";e.fake&&(t=r.docElement.style.overflow,e.style.background="",e.style.overflow=r.docElement.style.overflow="hidden",r.docElement.appendChild(e));return t};var r=e("./docElement.js")},{"./docElement.js":10}],38:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.setLocalStorage=function(e,t,n,r){if(r)try{e.setItem(t,n)}catch(e){}return n}},{}],39:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.showElement=function(e,t){"none"===e.style.display&&(e.style.display="")}},{}],40:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.toDegree=function(e,t){return Math.atan2(e,t)*(180/Math.PI)}},{}],41:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.whichProperty=function(t){{var n,r;"string"==typeof t&&(n=[t],r=t.charAt(0).toUpperCase()+t.substr(1),["Webkit","Moz","ms","O"].forEach(function(e){"ms"===e&&"transform"!==t||n.push(e+r)}),t=n)}for(var e=document.createElement("fakeelement"),a=(t.length,0);a<t.length;a++){var o=t[a];if(void 0!==e.style[o])return o}return!1}},{}],42:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.tns=void 0;var jr=e("./helpers/raf.js"),Lr=e("./helpers/caf.js"),wr=e("./helpers/extend.js"),kr=e("./helpers/checkStorageValue.js"),Ar=e("./helpers/setLocalStorage.js"),_r=e("./helpers/getSlideId.js"),Mr=e("./helpers/calc.js"),xr=e("./helpers/percentageLayout.js"),Tr=e("./helpers/mediaquerySupport.js"),Or=e("./helpers/createStyleSheet.js"),Pr=e("./helpers/addCSSRule.js"),Br=e("./helpers/removeCSSRule.js"),Nr=e("./helpers/getCssRulesLength.js"),Rr=e("./helpers/toDegree.js"),qr=e("./helpers/getTouchDirection.js"),zr=e("./helpers/forEach.js"),Dr=e("./helpers/hasClass.js"),Ir=e("./helpers/addClass.js"),Fr=e("./helpers/removeClass.js"),Hr=e("./helpers/hasAttr.js"),Vr=e("./helpers/getAttr.js"),Wr=e("./helpers/setAttrs.js"),Gr=e("./helpers/removeAttrs.js"),Ur=e("./helpers/arrayFromNodeList.js"),Qr=e("./helpers/hideElement.js"),Xr=e("./helpers/showElement.js"),Yr=e("./helpers/isVisible.js"),Kr=e("./helpers/whichProperty.js"),Jr=e("./helpers/has3DTransforms.js"),$r=e("./helpers/getEndProperty.js"),Zr=e("./helpers/addEvents.js"),ea=e("./helpers/removeEvents.js"),ta=e("./helpers/events.js"),na=e("./helpers/jsTransform.js");function ra(e){return(ra="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.keys||(Object.keys=function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});n.tns=function e(M){M=(0,wr.extend)({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,center:!1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:!1,freezable:!0,onInit:!1,useLocalStorage:!0,nonce:!1},M||{});var x=document,m=window,a={ENTER:13,SPACE:32,LEFT:37,RIGHT:39},t={},n=M.useLocalStorage;if(n){var r=navigator.userAgent,o=new Date;try{(t=m.localStorage)?(t.setItem(o,o),n=t.getItem(o)==o,t.removeItem(o)):n=!1,n||(t={})}catch(e){n=!1}n&&(t.tnsApp&&t.tnsApp!==r&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(e){t.removeItem(e)}),localStorage.tnsApp=r)}var y=t.tC?(0,kr.checkStorageValue)(t.tC):(0,Ar.setLocalStorage)(t,"tC",(0,Mr.calc)(),n),g=t.tPL?(0,kr.checkStorageValue)(t.tPL):(0,Ar.setLocalStorage)(t,"tPL",(0,xr.percentageLayout)(),n),T=t.tMQ?(0,kr.checkStorageValue)(t.tMQ):(0,Ar.setLocalStorage)(t,"tMQ",(0,Tr.mediaquerySupport)(),n),i=t.tTf?(0,kr.checkStorageValue)(t.tTf):(0,Ar.setLocalStorage)(t,"tTf",(0,Kr.whichProperty)("transform"),n),s=t.t3D?(0,kr.checkStorageValue)(t.t3D):(0,Ar.setLocalStorage)(t,"t3D",(0,Jr.has3DTransforms)(i),n),b=t.tTDu?(0,kr.checkStorageValue)(t.tTDu):(0,Ar.setLocalStorage)(t,"tTDu",(0,Kr.whichProperty)("transitionDuration"),n),l=t.tTDe?(0,kr.checkStorageValue)(t.tTDe):(0,Ar.setLocalStorage)(t,"tTDe",(0,Kr.whichProperty)("transitionDelay"),n),S=t.tADu?(0,kr.checkStorageValue)(t.tADu):(0,Ar.setLocalStorage)(t,"tADu",(0,Kr.whichProperty)("animationDuration"),n),u=t.tADe?(0,kr.checkStorageValue)(t.tADe):(0,Ar.setLocalStorage)(t,"tADe",(0,Kr.whichProperty)("animationDelay"),n),c=t.tTE?(0,kr.checkStorageValue)(t.tTE):(0,Ar.setLocalStorage)(t,"tTE",(0,$r.getEndProperty)(b,"Transition"),n),d=t.tAE?(0,kr.checkStorageValue)(t.tAE):(0,Ar.setLocalStorage)(t,"tAE",(0,$r.getEndProperty)(S,"Animation"),n),f=m.console&&"function"==typeof m.console.warn,v=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],h={};if(v.forEach(function(e){if("string"==typeof M[e]){var t=M[e],n=x.querySelector(t);if(h[e]=t,!n||!n.nodeName)return void(f&&console.warn("Can't find",M[e]));M[e]=n}}),!(M.container.children.length<1)){var O,P,p,B,N=M.responsive,R=M.nested,q="carousel"===M.mode;if(N){0 in N&&(M=(0,wr.extend)(M,N[0]),delete N[0]);var C={};for(var E in N){var j="number"==typeof(j=N[E])?{items:j}:j;C[E]=j}N=C,C=null}q||!function e(t){for(var n in t)q||("slideBy"===n&&(t[n]="page"),"edgePadding"===n&&(t[n]=!1),"autoHeight"===n&&(t[n]=!1)),"responsive"===n&&e(t[n])}(M),q||(M.axis="horizontal",M.slideBy="page",M.edgePadding=!1,O=M.animateIn,P=M.animateOut,p=M.animateDelay,B=M.animateNormal);var L,z,D="horizontal"===M.axis,w=x.createElement("div"),I=x.createElement("div"),F=M.container,k=F.parentNode,A=F.outerHTML,H=F.children,V=H.length,W=tn(),G=!1;N&&En(),q&&(F.className+=" tns-vpfix");var _,U,Q,X,Y,K,J,$,Z,ee,te,ne,re,ae,oe,ie,se,le,ue,ce,de,fe,ve,he,pe,me,ye,ge,be,Se,Ce,Ee,je,Le,we,ke,Ae,_e,Me,xe=M.autoWidth,Te=on("fixedWidth"),Oe=on("edgePadding"),Pe=on("gutter"),Be=rn(),Ne=on("center"),Re=xe?1:Math.floor(on("items")),qe=on("slideBy"),ze=M.viewportMax||M.fixedWidthViewportWidth,De=on("arrowKeys"),Ie=on("speed"),Fe=M.rewind,He=!Fe&&M.loop,Ve=on("autoHeight"),We=on("controls"),Ge=on("controlsText"),Ue=on("nav"),Qe=on("touch"),Xe=on("mouseDrag"),Ye=on("autoplay"),Ke=on("autoplayTimeout"),Je=on("autoplayText"),$e=on("autoplayHoverPause"),Ze=on("autoplayResetOnVisibility"),et=(0,Or.createStyleSheet)(null,on("nonce")),tt=M.lazyload,nt=M.lazyloadSelector,rt=[],at=He?(X=function(){{if(xe||Te&&!ze)return V-1;var e=Te?"fixedWidth":"items",t=[];if((Te||M[e]<V)&&t.push(M[e]),N)for(var n in N){var r=N[n][e];r&&(Te||r<V)&&t.push(r)}return t.length||t.push(0),Math.ceil(Te?ze/Math.min.apply(null,t):Math.max.apply(null,t))}}(),Y=q?Math.ceil((5*X-V)/2):4*X-V,Y=Math.max(X,Y),an("edgePadding")?Y+1:Y):0,ot=q?V+2*at:V+at,it=!(!Te&&!xe||He),st=Te?Xn():null,lt=!q||!He,ut=D?"left":"top",ct="",dt="",ft=Te?function(){return Ne&&!He?V-1:Math.ceil(-st/(Te+Pe))}:xe?function(){for(var e=0;e<ot;e++)if(_[e]>=-st)return e}:function(){return Ne&&q&&!He?V-1:He||q?Math.max(0,ot-Math.ceil(Re)):ot-1},vt=$t(on("startIndex")),ht=vt,pt=(Jt(),0),mt=xe?null:ft(),yt=M.preventActionWhenRunning,gt=M.swipeAngle,bt=!gt||"?",St=!1,Ct=M.onInit,Et=new ta.Events,jt=" tns-slider tns-"+M.mode,Lt=F.id||(0,_r.getSlideId)(),wt=on("disable"),kt=!1,At=M.freezable,_t=!(!At||xe)&&Cn(),Mt=!1,xt={click:rr,keydown:function(e){e=dr(e);var t=[a.LEFT,a.RIGHT].indexOf(e.keyCode);0<=t&&(0===t?$.disabled||rr(e,-1):Z.disabled||rr(e,1))}},Tt={click:function(e){if(St){if(yt)return;tr()}var t=fr(e=dr(e));for(;t!==ae&&!(0,Hr.hasAttr)(t,"data-nav");)t=t.parentNode;{var n,r;(0,Hr.hasAttr)(t,"data-nav")&&(n=ue=Number((0,Vr.getAttr)(t,"data-nav")),r=Te||xe?n*V/se:n*Re,nr(Dt?n:Math.min(Math.ceil(r),V-1),e),ce===n&&(Se&&lr(),ue=-1))}},keydown:function(e){e=dr(e);var t=x.activeElement;if(!(0,Hr.hasAttr)(t,"data-nav"))return;var n=[a.LEFT,a.RIGHT,a.ENTER,a.SPACE].indexOf(e.keyCode),r=Number((0,Vr.getAttr)(t,"data-nav"));0<=n&&(0===n?0<r&&cr(ie[r-1]):1===n?r<se-1&&cr(ie[r+1]):nr(ue=r,e))}},Ot={mouseover:function(){Se&&(or(),Ce=!0)},mouseout:function(){Ce&&(ar(),Ce=!1)}},Pt={visibilitychange:function(){x.hidden?Se&&(or(),je=!0):je&&(ar(),je=!1)}},Bt={keydown:function(e){e=dr(e);var t=[a.LEFT,a.RIGHT].indexOf(e.keyCode);0<=t&&rr(e,0===t?-1:1)}},Nt={touchstart:mr,touchmove:yr,touchend:gr,touchcancel:gr},Rt={mousedown:mr,mousemove:yr,mouseup:gr,mouseleave:gr},qt=an("controls"),zt=an("nav"),Dt=!!xe||M.navAsThumbnails,It=an("autoplay"),Ft=an("touch"),Ht=an("mouseDrag"),Vt="tns-slide-active",Wt="tns-slide-cloned",Gt="tns-complete",Ut={load:function(e){Tn(fr(e))},error:function(e){!function(e){(0,Ir.addClass)(e,"failed"),On(e)}(fr(e))}},Qt="force"===M.preventScrollOnTouch;qt&&(K=M.controlsContainer,J=M.controlsContainer?M.controlsContainer.outerHTML:"",$=M.prevButton,Z=M.nextButton,ee=M.prevButton?M.prevButton.outerHTML:"",te=M.nextButton?M.nextButton.outerHTML:""),zt&&(ae=M.navContainer,oe=M.navContainer?M.navContainer.outerHTML:"",se=xe?V:Sr(),le=0,ue=-1,ce=en(),de=ce,fe="tns-nav-active",ve="Carousel Page ",he=" (Current Slide)"),It&&(pe="forward"===M.autoplayDirection?1:-1,me=M.autoplayButton,ye=M.autoplayButton?M.autoplayButton.outerHTML:"",ge=["<span class='tns-visually-hidden'>"," animation</span>"]),(Ft||Ht)&&(Le={},Ae=!(we={}),Me=D?function(e,t){return e.x-t.x}:function(e,t){return e.y-t.y}),xe||Kt(wt||_t),i&&(ut=i,ct="translate",dt=s?(ct+=D?"3d(":"3d(0px, ",D?", 0px, 0px)":", 0px)"):(ct+=D?"X(":"Y(",")")),q&&(F.className=F.className.replace("tns-vpfix","")),function(){an("gutter");w.className="tns-outer",I.className="tns-inner",w.id=Lt+"-ow",I.id=Lt+"-iw",""===F.id&&(F.id=Lt);jt+=g||xe?" tns-subpixel":" tns-no-subpixel",jt+=y?" tns-calc":" tns-no-calc",xe&&(jt+=" tns-autowidth");jt+=" tns-"+M.axis,F.className+=jt,q?((L=x.createElement("div")).id=Lt+"-mw",L.className="tns-ovh",w.appendChild(L),L.appendChild(I)):w.appendChild(I);{Ve&&((L||I).className+=" tns-ah")}if(k.insertBefore(w,F),I.appendChild(F),(0,zr.forEach)(H,function(e,t){(0,Ir.addClass)(e,"tns-item"),e.id||(e.id=Lt+"-item"+t),!q&&B&&(0,Ir.addClass)(e,B),(0,Wr.setAttrs)(e,{"aria-hidden":"true",tabindex:"-1"})}),at){for(var e=x.createDocumentFragment(),t=x.createDocumentFragment(),n=at;n--;){var r,a=n%V,o=H[a].cloneNode(!0);(0,Ir.addClass)(o,Wt),(0,Gr.removeAttrs)(o,"id"),t.insertBefore(o,t.firstChild),q&&(r=H[V-1-a].cloneNode(!0),(0,Ir.addClass)(r,Wt),(0,Gr.removeAttrs)(r,"id"),e.appendChild(r))}F.insertBefore(e,F.firstChild),F.appendChild(t),H=F.children}}(),function(){if(!q)for(var e=vt,t=vt+Math.min(V,Re);e<t;e++){var n=H[e];n.style.left=100*(e-vt)/Re+"%",(0,Ir.addClass)(n,O),(0,Fr.removeClass)(n,B)}D&&(g||xe?((0,Pr.addCSSRule)(et,"#"+Lt+" > .tns-item","font-size:"+m.getComputedStyle(H[0]).fontSize+";",(0,Nr.getCssRulesLength)(et)),(0,Pr.addCSSRule)(et,"#"+Lt,"font-size:0;",(0,Nr.getCssRulesLength)(et))):q&&(0,zr.forEach)(H,function(e,t){var n;e.style.marginLeft=(n=t,y?y+"("+100*n+"% / "+ot+")":100*n/ot+"%")}));{T?(b&&(o=L&&M.autoHeight?fn(M.speed):"",(0,Pr.addCSSRule)(et,"#"+Lt+"-mw",o,(0,Nr.getCssRulesLength)(et))),o=sn(M.edgePadding,M.gutter,M.fixedWidth,M.speed,M.autoHeight),(0,Pr.addCSSRule)(et,"#"+Lt+"-iw",o,(0,Nr.getCssRulesLength)(et)),q&&(o=D&&!xe?"width:"+ln(M.fixedWidth,M.gutter,M.items)+";":"",b&&(o+=fn(Ie)),(0,Pr.addCSSRule)(et,"#"+Lt,o,(0,Nr.getCssRulesLength)(et))),o=D&&!xe?un(M.fixedWidth,M.gutter,M.items):"",M.gutter&&(o+=cn(M.gutter)),q||(b&&(o+=fn(Ie)),S&&(o+=vn(Ie)))):(q&&Ve&&(L.style[b]=Ie/1e3+"s"),I.style.cssText=sn(Oe,Pe,Te,Ve),q&&D&&!xe&&(F.style.width=ln(Te,Pe,Re)),o=D&&!xe?un(Te,Pe,Re):"",Pe&&(o+=cn(Pe))),o&&(0,Pr.addCSSRule)(et,"#"+Lt+" > .tns-item",o,(0,Nr.getCssRulesLength)(et))}if(N&&T)for(var r in N){r=parseInt(r);var a=N[r],o="",i="",s="",l="",u="",c=xe?null:on("items",r),d=on("fixedWidth",r),f=on("speed",r),v=on("edgePadding",r),h=on("autoHeight",r),p=on("gutter",r);b&&L&&on("autoHeight",r)&&"speed"in a&&(i="#"+Lt+"-mw{"+fn(f)+"}"),("edgePadding"in a||"gutter"in a)&&(s="#"+Lt+"-iw{"+sn(v,p,d,f,h)+"}"),q&&D&&!xe&&("fixedWidth"in a||"items"in a||Te&&"gutter"in a)&&(l="width:"+ln(d,p,c)+";"),b&&"speed"in a&&(l+=fn(f)),l=l&&"#"+Lt+"{"+l+"}",("fixedWidth"in a||Te&&"gutter"in a||!q&&"items"in a)&&(u+=un(d,p,c)),"gutter"in a&&(u+=cn(p)),!q&&"speed"in a&&(b&&(u+=fn(f)),S&&(u+=vn(f))),(o=i+s+l+(u=u&&"#"+Lt+" > .tns-item{"+u+"}"))&&et.insertRule("@media (min-width: "+r/16+"em) {"+o+"}",et.cssRules.length)}}(),hn();var Xt=He?q?function(){var e=pt,t=mt;e+=qe,t-=qe,Oe?(e+=1,--t):Te&&(Be+Pe)%(Te+Pe)&&--t,at&&(t<vt?vt-=V:vt<e&&(vt+=V))}:function(){if(mt<vt)for(;pt+V<=vt;)vt-=V;else if(vt<pt)for(;vt<=mt-V;)vt+=V}:function(){vt=Math.max(pt,Math.min(mt,vt))},Yt=q?function(){Un(F,""),b||!Ie?(Jn(),Ie&&(0,Yr.isVisible)(F)||tr()):(0,na.jsTransform)(F,ut,ct,dt,Yn(),Ie,tr),D||br()}:function(){rt=[];var e={};e[c]=e[d]=tr,(0,ea.removeEvents)(H[ht],e),(0,Zr.addEvents)(H[vt],e),$n(ht,O,P,!0),$n(vt,B,O),c&&d&&Ie&&(0,Yr.isVisible)(F)||tr()};return{version:"2.9.3",getInfo:Er,events:Et,goTo:nr,play:function(){Ye&&!Se&&(sr(),Ee=!1)},pause:function(){Se&&(lr(),Ee=!0)},isOn:G,updateSliderHeight:zn,refresh:hn,destroy:function(){var e;et.disabled=!0,et.ownerNode&&et.ownerNode.remove(),(0,ea.removeEvents)(m,{resize:bn}),De&&(0,ea.removeEvents)(x,Bt),K&&(0,ea.removeEvents)(K,xt),ae&&(0,ea.removeEvents)(ae,Tt),(0,ea.removeEvents)(F,Ot),(0,ea.removeEvents)(F,Pt),me&&(0,ea.removeEvents)(me,{click:ur}),Ye&&clearInterval(be),q&&c&&((e={})[c]=tr,(0,ea.removeEvents)(F,e)),Qe&&(0,ea.removeEvents)(F,Nt),Xe&&(0,ea.removeEvents)(F,Rt);var o=[A,J,ee,te,oe,ye];for(var t in v.forEach(function(e,t){var n,r,a="container"===e?w:M[e];"object"===ra(a)&&a&&(n=!!a.previousElementSibling&&a.previousElementSibling,r=a.parentNode,a.outerHTML=o[t],M[e]=n?n.nextElementSibling:r.firstElementChild)}),v=O=P=p=B=D=w=I=F=k=A=H=V=z=W=xe=Te=Oe=Pe=Be=Re=qe=ze=De=Ie=Fe=He=Ve=et=tt=_=rt=at=ot=it=st=lt=ut=ct=dt=ft=vt=ht=pt=mt=gt=bt=St=Ct=Et=jt=Lt=wt=kt=At=_t=Mt=xt=Tt=Ot=Pt=Bt=Nt=Rt=qt=zt=Dt=It=Ht=Vt=Gt=Ut=U=We=Ge=K=J=$=Z=ne=re=Ue=ae=oe=ie=se=le=ue=ce=de=fe=ve=he=Ye=Ke=pe=Je=$e=me=ye=Ze=ge=be=Se=Ce=Ee=je=Le=we=ke=Ae=_e=Me=Qe=Xe=null,this)"rebuild"!==t&&(this[t]=null);G=!1},rebuild:function(){return e((0,wr.extend)(M,h))}}}function Kt(e){e&&(We=Ue=Qe=Xe=De=Ye=$e=Ze=!1)}function Jt(){for(var e=q?vt-at:vt;e<0;)e+=V;return e%V+1}function $t(e){return e=e?Math.max(0,Math.min(He?V-1:V-Re,e)):0,q?e+at:e}function Zt(e){for(null==e&&(e=vt),q&&(e-=at);e<0;)e+=V;return Math.floor(e%V)}function en(){var e=Zt(),t=Dt?e:Te||xe?Math.ceil((e+1)*se/V-1):Math.floor(e/Re);return!He&&q&&vt===mt&&(t=se-1),t}function tn(){return m.innerWidth||x.documentElement.clientWidth||x.body.clientWidth}function nn(e){return"top"===e?"afterbegin":"beforeend"}function rn(){var e=Oe?2*Oe-Pe:0;return function e(t){if(null!=t){var n,r,a=x.createElement("div");return t.appendChild(a),r=(n=a.getBoundingClientRect()).right-n.left,a.remove(),r||e(t.parentNode)}}(k)-e}function an(e){if(M[e])return!0;if(N)for(var t in N)if(N[t][e])return!0;return!1}function on(e,t){if(null==t&&(t=W),"items"===e&&Te)return Math.floor((Be+Pe)/(Te+Pe))||1;var n=M[e];if(N)for(var r in N)t>=parseInt(r)&&e in N[r]&&(n=N[r][e]);return"slideBy"===e&&"page"===n&&(n=on("items")),q||"slideBy"!==e&&"items"!==e||(n=Math.floor(n)),n}function sn(e,t,n,r,a){var o,i,s="";return void 0!==e?(o=e,t&&(o-=t),s=D?"margin: 0 "+o+"px 0 "+e+"px;":"margin: "+e+"px 0 "+o+"px 0;"):t&&!n&&(i="-"+t+"px",s="margin: 0 "+(D?i+" 0 0":"0 "+i+" 0")+";"),!q&&a&&b&&r&&(s+=fn(r)),s}function ln(e,t,n){return e?(e+t)*ot+"px":y?y+"("+100*ot+"% / "+n+")":100*ot/n+"%"}function un(e,t,n){var r,a;return a="width:"+(a=e?e+t+"px":(q||(n=Math.floor(n)),r=q?ot:n,y?y+"(100% / "+r+")":100/r+"%")),"inner"!==R?a+";":a+" !important;"}function cn(e){return!1!==e?(D?"padding-":"margin-")+(D?"right":"bottom")+": "+e+"px;":""}function dn(e,t){var n=e.substring(0,e.length-t).toLowerCase();return n=n&&"-"+n+"-"}function fn(e){return dn(b,18)+"transition-duration:"+e/1e3+"s;"}function vn(e){return dn(S,17)+"animation-duration:"+e/1e3+"s;"}function hn(){var e;an("autoHeight")||xe||!D?(e=F.querySelectorAll("img"),(0,zr.forEach)(e,function(e){var t=e.src;tt||(t&&t.indexOf("data:image")<0?((e.src="",Zr.addEvents)(e,Ut),(0,Ir.addClass)(e,"loading"),e.src=t):Tn(e))}),(0,jr.raf)(function(){Nn((0,Ur.arrayFromNodeList)(e),function(){U=!0})}),an("autoHeight")&&(e=Pn(vt,Math.min(vt+Re-1,ot-1))),tt?pn():(0,jr.raf)(function(){Nn((0,Ur.arrayFromNodeList)(e),pn)})):(q&&Kn(),yn(),gn())}function pn(){var r;xe&&1<V?(r=He?vt:V-1,function e(){var t=H[r].getBoundingClientRect().left,n=H[r-1].getBoundingClientRect().right;Math.abs(t-n)<=1?mn():setTimeout(function(){e()},16)}()):mn()}function mn(){D&&!xe||(Dn(),xe?(st=Xn(),At&&(_t=Cn()),mt=ft(),Kt(wt||_t)):br()),q&&Kn(),yn(),gn()}function yn(){var e;if(In(),w.insertAdjacentHTML("afterbegin",'<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">'+_n()+"</span>  of "+V+"</div>"),Q=w.querySelector(".tns-liveregion .current"),It&&(e=Ye?"stop":"start",me?(0,Wr.setAttrs)(me,{"data-action":e}):M.autoplayButtonOutput&&(w.insertAdjacentHTML(nn(M.autoplayPosition),'<button type="button" data-action="'+e+'">'+ge[0]+e+ge[1]+Je[0]+"</button>"),me=w.querySelector("[data-action]")),me&&(0,Zr.addEvents)(me,{click:ur}),Ye&&(sr(),$e&&(0,Zr.addEvents)(F,Ot),Ze&&(0,Zr.addEvents)(F,Pt))),zt){var t,n;if(ae)(0,Wr.setAttrs)(ae,{"aria-label":"Carousel Pagination"}),ie=ae.children,(0,zr.forEach)(ie,function(e,t){(0,Wr.setAttrs)(e,{"data-nav":t,tabindex:"-1","aria-label":ve+(t+1),"aria-controls":Lt})});else{for(var r="",a=Dt?"":'style="display:none"',o=0;o<V;o++)r+='<button type="button" data-nav="'+o+'" tabindex="-1" aria-controls="'+Lt+'" '+a+' aria-label="'+ve+(o+1)+'"></button>';r='<div class="tns-nav" aria-label="Carousel Pagination">'+r+"</div>",w.insertAdjacentHTML(nn(M.navPosition),r),ae=w.querySelector(".tns-nav"),ie=ae.children}Cr(),b&&(t=b.substring(0,b.length-18).toLowerCase(),n="transition: all "+Ie/1e3+"s",t&&(n="-"+t+"-"+n),(0,Pr.addCSSRule)(et,"[aria-controls^="+Lt+"-item]",n,(0,Nr.getCssRulesLength)(et))),(0,Wr.setAttrs)(ie[ce],{"aria-label":ve+(ce+1)+he}),(0,Gr.removeAttrs)(ie[ce],"tabindex"),(0,Ir.addClass)(ie[ce],fe),(0,Zr.addEvents)(ae,Tt)}qt&&(K||$&&Z||(w.insertAdjacentHTML(nn(M.controlsPosition),'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="'+Lt+'">'+Ge[0]+'</button><button type="button" data-controls="next" tabindex="-1" aria-controls="'+Lt+'">'+Ge[1]+"</button></div>"),K=w.querySelector(".tns-controls")),$&&Z||($=K.children[0],Z=K.children[1]),M.controlsContainer&&(0,Wr.setAttrs)(K,{"aria-label":"Carousel Navigation",tabindex:"0"}),(M.controlsContainer||M.prevButton&&M.nextButton)&&(0,Wr.setAttrs)([$,Z],{"aria-controls":Lt,tabindex:"-1"}),(M.controlsContainer||M.prevButton&&M.nextButton)&&((0,Wr.setAttrs)($,{"data-controls":"prev"}),(0,Wr.setAttrs)(Z,{"data-controls":"next"})),ne=Hn($),re=Hn(Z),Gn(),K?(0,Zr.addEvents)(K,xt):((0,Zr.addEvents)($,xt),(0,Zr.addEvents)(Z,xt))),jn()}function gn(){var e;q&&c&&((e={})[c]=tr,(0,Zr.addEvents)(F,e)),Qe&&(0,Zr.addEvents)(F,Nt,M.preventScrollOnTouch),Xe&&(0,Zr.addEvents)(F,Rt),De&&(0,Zr.addEvents)(x,Bt),"inner"===R?Et.on("outerResized",function(){Sn(),Et.emit("innerLoaded",Er())}):(N||Te||xe||Ve||!D)&&(0,Zr.addEvents)(m,{resize:bn}),Ve&&("outer"===R?Et.on("innerLoaded",Bn):wt||Bn()),xn(),wt?kn():_t&&wn(),Et.on("indexChanged",Rn),"inner"===R&&Et.emit("innerLoaded",Er()),"function"==typeof Ct&&Ct(Er()),G=!0}function bn(e){(0,jr.raf)(function(){Sn(dr(e))})}function Sn(e){var t,n,r,a,o,i,s,l,u,c,d,f,v,h,p,m,y,g,b,S,C,E,j,L,w,k,A,_;G&&("outer"===R&&Et.emit("outerResized",Er(e)),W=tn(),n=z,r=!1,N&&(En(),(t=n!==z)&&Et.emit("newBreakpointStart",Er(e))),i=Re,s=wt,l=_t,u=De,c=We,d=Ue,f=Qe,v=Xe,h=Ye,p=$e,m=Ze,y=vt,t&&(g=Te,b=Ve,S=Ge,C=Ne,E=Je,T||(j=Pe,L=Oe)),De=on("arrowKeys"),We=on("controls"),Ue=on("nav"),Qe=on("touch"),Ne=on("center"),Xe=on("mouseDrag"),Ye=on("autoplay"),$e=on("autoplayHoverPause"),Ze=on("autoplayResetOnVisibility"),t&&(wt=on("disable"),Te=on("fixedWidth"),Ie=on("speed"),Ve=on("autoHeight"),Ge=on("controlsText"),Je=on("autoplayText"),Ke=on("autoplayTimeout"),T||(Oe=on("edgePadding"),Pe=on("gutter"))),Kt(wt),Be=rn(),D&&!xe||wt||(Dn(),D||(br(),r=!0)),(Te||xe)&&(st=Xn(),mt=ft()),(t||Te)&&(Re=on("items"),qe=on("slideBy"),(o=Re!==i)&&(Te||xe||(mt=ft()),Xt())),t&&wt!==s&&(wt?kn:function(){if(!kt)return;if(et.disabled=!1,F.className+=jt,Kn(),He)for(var e=at;e--;)q&&(0,Xr.showElement)(H[e]),(0,Xr.showElement)(H[ot-e-1]);if(!q)for(var t=vt,n=vt+V;t<n;t++){var r=H[t],a=t<vt+Re?O:B;r.style.left=100*(t-vt)/Re+"%",(0,Ir.addClass)(r,a)}Ln(),kt=!1})(),At&&(t||Te||xe)&&(_t=Cn())!==l&&(_t?(Jn(Yn($t(0))),wn()):(function(){if(!Mt)return;Oe&&T&&(I.style.margin="");if(at)for(var e="tns-transparent",t=at;t--;)q&&(0,Fr.removeClass)(H[t],e),(0,Fr.removeClass)(H[ot-t-1],e);Ln(),Mt=!1}(),r=!0)),Kt(wt||_t),Ye||($e=Ze=!1),De!==u&&(De?(0,Zr.addEvents):(0,ea.removeEvents))(x,Bt),We!==c&&(We?K?(0,Xr.showElement)(K):($&&(0,Xr.showElement)($),Z&&(0,Xr.showElement)(Z)):K?(0,Qr.hideElement)(K):($&&(0,Qr.hideElement)($),Z&&(0,Qr.hideElement)(Z))),Ue!==d&&(Ue?((0,Xr.showElement)(ae),Cr()):(0,Qr.hideElement)(ae)),Qe!==f&&(Qe?(0,Zr.addEvents)(F,Nt,M.preventScrollOnTouch):(0,ea.removeEvents)(F,Nt)),Xe!==v&&(Xe?(0,Zr.addEvents):(0,ea.removeEvents))(F,Rt),Ye!==h&&(Ye?(me&&(0,Xr.showElement)(me),Se||Ee||sr()):(me&&(0,Qr.hideElement)(me),Se&&lr())),$e!==p&&($e?(0,Zr.addEvents):(0,ea.removeEvents))(F,Ot),Ze!==m&&(Ze?(0,Zr.addEvents):(0,ea.removeEvents))(x,Pt),t?(Te===g&&Ne===C||(r=!0),Ve!==b&&(Ve||(I.style.height="")),We&&Ge!==S&&($.innerHTML=Ge[0],Z.innerHTML=Ge[1]),me&&Je!==E&&(w=Ye?1:0,A=(k=me.innerHTML).length-E[w].length,k.substring(A)===E[w]&&(me.innerHTML=k.substring(0,A)+Je[w]))):Ne&&(Te||xe)&&(r=!0),(o||Te&&!xe)&&(se=Sr(),Cr()),(a=vt!==y)?(Et.emit("indexChanged",Er()),r=!0):o?a||Rn():(Te||xe)&&(xn(),In(),An()),o&&!q&&function(){for(var e=vt+Math.min(V,Re),t=ot;t--;){var n=H[t];vt<=t&&t<e?((0,Ir.addClass)(n,"tns-moving"),n.style.left=100*(t-vt)/Re+"%",(0,Ir.addClass)(n,O),(0,Fr.removeClass)(n,B)):n.style.left&&((n.style.left="",Ir.addClass)(n,B),(0,Fr.removeClass)(n,O)),(0,Fr.removeClass)(n,P)}setTimeout(function(){(0,zr.forEach)(H,function(e){(0,Fr.removeClass)(e,"tns-moving")})},300)}(),wt||_t||(t&&!T&&(Oe===L&&Pe===j||(I.style.cssText=sn(Oe,Pe,Te,Ie,Ve)),D&&(q&&(F.style.width=ln(Te,Pe,Re)),_=un(Te,Pe,Re)+cn(Pe),(0,Br.removeCSSRule)(et,(0,Nr.getCssRulesLength)(et)-1),(0,Pr.addCSSRule)(et,"#"+Lt+" > .tns-item",_,(0,Nr.getCssRulesLength)(et)))),Ve&&Bn(),r&&(Kn(),ht=vt)),t&&Et.emit("newBreakpointEnd",Er(e)))}function Cn(){if(!Te&&!xe)return V<=(Ne?Re-(Re-1)/2:Re);var e=Te?(Te+Pe)*V:_[V],t=Oe?Be+2*Oe:Be+Pe;return Ne&&(t-=Te?(Be-Te)/2:(Be-(_[vt+1]-_[vt]-Pe))/2),e<=t}function En(){for(var e in z=0,N)(e=parseInt(e))<=W&&(z=e)}function jn(){!Ye&&me&&(0,Qr.hideElement)(me),!Ue&&ae&&(0,Qr.hideElement)(ae),We||(K?(0,Qr.hideElement)(K):($&&(0,Qr.hideElement)($),Z&&(0,Qr.hideElement)(Z)))}function Ln(){Ye&&me&&(0,Xr.showElement)(me),Ue&&ae&&(0,Xr.showElement)(ae),We&&(K?(0,Xr.showElement)(K):($&&(0,Xr.showElement)($),Z&&(0,Xr.showElement)(Z)))}function wn(){if(!Mt){if(Oe&&(I.style.margin="0px"),at)for(var e="tns-transparent",t=at;t--;)q&&(0,Ir.addClass)(H[t],e),(0,Ir.addClass)(H[ot-t-1],e);jn(),Mt=!0}}function kn(){if(!kt){if(et.disabled=!0,F.className=F.className.replace(jt.substring(1),""),(0,Gr.removeAttrs)(F,["style"]),He)for(var e=at;e--;)q&&(0,Qr.hideElement)(H[e]),(0,Qr.hideElement)(H[ot-e-1]);if(D&&q||(0,Gr.removeAttrs)(I,["style"]),!q)for(var t=vt,n=vt+V;t<n;t++){var r=H[t];(0,Gr.removeAttrs)(r,["style"]),(0,Fr.removeClass)(r,O),(0,Fr.removeClass)(r,B)}jn(),kt=!0}}function An(){var e=_n();Q.innerHTML!==e&&(Q.innerHTML=e)}function _n(){var e=Mn(),t=e[0]+1,n=e[1]+1;return t===n?t+"":t+" to "+n}function Mn(e){null==e&&(e=Yn());var n,r,t,a,o,i,s=vt;return Ne||Oe?(xe||Te)&&(n=-(parseFloat(e)+Oe),r=n+Be+2*Oe):xe&&(n=_[vt],r=n+Be),xe?_.forEach(function(e,t){t<ot&&((Ne||Oe)&&e<=n+.5&&(s=t),.5<=r-e&&(a=t))}):(a=Te?(t=Te+Pe,Ne||Oe?(s=Math.floor(n/t),Math.ceil(r/t-1)):s+Math.ceil(Be/t)-1):Ne||Oe?(o=Re-1,a=Ne?(s-=o/2,vt+o/2):vt+o,Oe&&(s-=i=Oe*Re/Be,a+=i),s=Math.floor(s),Math.ceil(a)):s+Re-1,s=Math.max(s,0),a=Math.min(a,ot-1)),[s,a]}function xn(){var e;tt&&!wt&&((e=Mn()).push(nt),Pn.apply(null,e).forEach(function(e){var t,n;(0,Dr.hasClass)(e,Gt)||((t={})[c]=function(e){e.stopPropagation()},(0,Zr.addEvents)(e,t),(0,Zr.addEvents)(e,Ut),e.src=(0,Vr.getAttr)(e,"data-src"),(n=(0,Vr.getAttr)(e,"data-srcset"))&&(e.srcset=n),(0,Ir.addClass)(e,"loading"))}))}function Tn(e){(0,Ir.addClass)(e,"loaded"),On(e)}function On(e){(0,Ir.addClass)(e,Gt),(0,Fr.removeClass)(e,"loading"),(0,ea.removeEvents)(e,Ut)}function Pn(e,t,n){var r=[];for(n=n||"img";e<=t;)(0,zr.forEach)(H[e].querySelectorAll(n),function(e){r.push(e)}),e++;return r}function Bn(){var e=Pn.apply(null,Mn());(0,jr.raf)(function(){Nn(e,zn)})}function Nn(n,e){return U?e():(n.forEach(function(e,t){!tt&&e.complete&&On(e),(0,Dr.hasClass)(e,Gt)&&n.splice(t,1)}),n.length?void(0,jr.raf)(function(){Nn(n,e)}):e())}function Rn(){xn(),In(),An(),Gn(),function(){{var e,t;Ue&&(ce=0<=ue?ue:en(),ue=-1,ce!==de&&(e=ie[de],t=ie[ce],(0,Wr.setAttrs)(e,{tabindex:"-1","aria-label":ve+(de+1)}),(0,Fr.removeClass)(e,fe),(0,Wr.setAttrs)(t,{"aria-label":ve+(ce+1)+he}),(0,Gr.removeAttrs)(t,"tabindex"),(0,Ir.addClass)(t,fe),de=ce))}}()}function qn(e,t){for(var n=[],r=e,a=Math.min(e+t,ot);r<a;r++)n.push(H[r].offsetHeight);return Math.max.apply(null,n)}function zn(){var e=Ve?qn(vt,Re):qn(at,V),t=L||I;t.style.height!==e&&(t.style.height=e+"px")}function Dn(){_=[0];var n=D?"left":"top",r=D?"right":"bottom",a=H[0].getBoundingClientRect()[n];(0,zr.forEach)(H,function(e,t){t&&_.push(e.getBoundingClientRect()[n]-a),t===ot-1&&_.push(e.getBoundingClientRect()[r]-a)})}function In(){var e=Mn(),n=e[0],r=e[1];(0,zr.forEach)(H,function(e,t){n<=t&&t<=r?(0,Hr.hasAttr)(e,"aria-hidden")&&((0,Gr.removeAttrs)(e,["aria-hidden","tabindex"]),(0,Ir.addClass)(e,Vt)):(0,Hr.hasAttr)(e,"aria-hidden")||((0,Wr.setAttrs)(e,{"aria-hidden":"true",tabindex:"-1"}),(0,Fr.removeClass)(e,Vt))})}function Fn(e){return e.nodeName.toLowerCase()}function Hn(e){return"button"===Fn(e)}function Vn(e){return"true"===e.getAttribute("aria-disabled")}function Wn(e,t,n){e?t.disabled=n:t.setAttribute("aria-disabled",n.toString())}function Gn(){var e,t,n,r;!We||Fe||He||(e=ne?$.disabled:Vn($),t=re?Z.disabled:Vn(Z),r=!Fe&&mt<=vt,(n=vt<=pt)&&!e&&Wn(ne,$,!0),!n&&e&&Wn(ne,$,!1),r&&!t&&Wn(re,Z,!0),!r&&t&&Wn(re,Z,!1))}function Un(e,t){b&&(e.style[b]=t)}function Qn(e){return null==e&&(e=vt),xe?(Be-(Oe?Pe:0)-(_[e+1]-_[e]-Pe))/2:Te?(Be-Te)/2:(Re-1)/2}function Xn(){var e=Be+(Oe?Pe:0)-(Te?(Te+Pe)*ot:_[ot]);return Ne&&!He&&(e=Te?-(Te+Pe)*(ot-1)-Qn():Qn(ot-1)-_[ot-1]),0<e&&(e=0),e}function Yn(e){var t,n;return null==e&&(e=vt),D&&!xe?Te?(t=-(Te+Pe)*e,Ne&&(t+=Qn())):(n=i?ot:Re,Ne&&(e-=Qn()),t=100*-e/n):(t=-_[e],Ne&&xe&&(t+=Qn())),it&&(t=Math.max(t,st)),t+=!D||xe||Te?"px":"%"}function Kn(e){Un(F,"0s"),Jn(e)}function Jn(e){null==e&&(e=Yn()),F.style[ut]=ct+e+dt}function $n(e,t,n,r){var a=e+Re;He||(a=Math.min(a,ot));for(var o=e;o<a;o++){var i=H[o];r||(i.style.left=100*(o-vt)/Re+"%"),p&&l&&(i.style[l]=i.style[u]=p*(o-e)/1e3+"s"),(0,Fr.removeClass)(i,t),(0,Ir.addClass)(i,n),r&&rt.push(i)}}function Zn(e,t){lt&&Xt(),vt===ht&&!t||(Et.emit("indexChanged",Er()),Et.emit("transitionStart",Er()),Ve&&Bn(),Se&&e&&0<=["click","keydown"].indexOf(e.type)&&lr(),St=!0,Yt())}function er(e){return e.toLowerCase().replace(/-/g,"")}function tr(e){if(q||St){if(Et.emit("transitionEnd",Er(e)),!q&&0<rt.length)for(var t=0;t<rt.length;t++){var n=rt[t];n.style.left="",u&&l&&(n.style[u]="",n.style[l]=""),(0,Fr.removeClass)(n,P),(0,Ir.addClass)(n,B)}var r;(!e||!q&&e.target.parentNode===F||e.target===F&&er(e.propertyName)===er(ut))&&(lt||(r=vt,Xt(),vt!==r&&(Et.emit("indexChanged",Er()),Kn())),"inner"===R&&Et.emit("innerLoaded",Er()),St=!1,ht=vt)}}function nr(e,t){if(!_t)if("prev"===e)rr(t,-1);else if("next"===e)rr(t,1);else{if(St){if(yt)return;tr()}var n,r=Zt(),a=0;"first"===e?a=-r:"last"===e?a=q?V-Re-r:V-1-r:("number"!=typeof e&&(e=parseInt(e)),isNaN(e)||(t||(e=Math.max(0,Math.min(V-1,e))),a=e-r)),!q&&a&&Math.abs(a)<Re&&(n=0<a?1:-1,a+=pt<=vt+a-V?V*n:2*V*n*-1),vt+=a,q&&He&&(vt<pt&&(vt+=V),mt<vt&&(vt-=V)),Zt(vt)!==Zt(ht)&&Zn(t)}}function rr(e,t){if(St){if(yt)return;tr()}var n;if(!t){for(var r=fr(e=dr(e));r!==K&&[$,Z].indexOf(r)<0;)r=r.parentNode;var a=[$,Z].indexOf(r);0<=a&&(n=!0,t=0===a?-1:1)}if(Fe){if(vt===pt&&-1===t)return void nr("last",e);if(vt===mt&&1===t)return void nr("first",e)}t&&(vt+=qe*t,xe&&(vt=Math.floor(vt)),Zn(n||e&&"keydown"===e.type?e:null))}function ar(){be=setInterval(function(){rr(null,pe)},Ke),Se=!0}function or(){clearInterval(be),Se=!1}function ir(e,t){(0,Wr.setAttrs)(me,{"data-action":e}),me.innerHTML=ge[0]+e+ge[1]+t}function sr(){ar(),me&&ir("stop",Je[1])}function lr(){or(),me&&ir("start",Je[0])}function ur(){Ee=Se?(lr(),!0):(sr(),!1)}function cr(e){e.focus()}function dr(e){return vr(e=e||m.event)?e.changedTouches[0]:e}function fr(e){return e.target||m.event.srcElement}function vr(e){return 0<=e.type.indexOf("touch")}function hr(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function pr(){return(0,qr.getTouchDirection)((0,Rr.toDegree)(we.y-Le.y,we.x-Le.x),gt)===M.axis}function mr(e){if(St){if(yt)return;tr()}Ye&&Se&&or(),Ae=!0,_e&&((0,Lr.caf)(_e),_e=null);var t=dr(e);Et.emit(vr(e)?"touchStart":"dragStart",Er(e)),!vr(e)&&0<=["img","a"].indexOf(Fn(fr(e)))&&hr(e),we.x=Le.x=t.clientX,we.y=Le.y=t.clientY,q&&(ke=parseFloat(F.style[ut].replace(ct,"")),Un(F,"0s"))}function yr(e){var t;Ae&&(t=dr(e),we.x=t.clientX,we.y=t.clientY,q?_e=_e||(0,jr.raf)(function(){!function e(t){if(!bt)return void(Ae=!1);(0,Lr.caf)(_e);Ae&&(_e=(0,jr.raf)(function(){e(t)}));"?"===bt&&(bt=pr());if(bt){!Qt&&vr(t)&&(Qt=!0);try{t.type&&Et.emit(vr(t)?"touchMove":"dragMove",Er(t))}catch(e){}var n=ke,r=Me(we,Le);!D||Te||xe?(n+=r,n+="px"):(n+=i?r*Re*100/((Be+Pe)*ot):100*r/(Be+Pe),n+="%"),F.style[ut]=ct+n+dt}}(e)}):("?"===bt&&(bt=pr()),bt&&(Qt=!0)),("boolean"!=typeof e.cancelable||e.cancelable)&&Qt&&e.preventDefault())}function gr(r){var e,a,n;Ae&&(_e&&((0,Lr.caf)(_e),_e=null),q&&Un(F,""),Ae=!1,e=dr(r),we.x=e.clientX,we.y=e.clientY,a=Me(we,Le),Math.abs(a)&&(vr(r)||(n=fr(r),(0,Zr.addEvents)(n,{click:function e(t){hr(t),(0,ea.removeEvents)(n,{click:e})}})),q?_e=(0,jr.raf)(function(){if(D&&!xe){var e=-a*Re/(Be+Pe),e=0<a?Math.floor(e):Math.ceil(e);vt+=e}else{var t=-(ke+a);if(t<=0)vt=pt;else if(t>=_[ot-1])vt=mt;else for(var n=0;n<ot&&t>=_[n];)t>_[vt=n]&&a<0&&(vt+=1),n++}Zn(r,a),Et.emit(vr(r)?"touchEnd":"dragEnd",Er(r))}):bt&&rr(r,0<a?-1:1))),"auto"===M.preventScrollOnTouch&&(Qt=!1),gt&&(bt="?"),Ye&&!Se&&ar()}function br(){(L||I).style.height=_[vt+Re]-_[vt]+"px"}function Sr(){var e=Te?(Te+Pe)*V/Be:V/Re;return Math.min(Math.ceil(e),V)}function Cr(){if(Ue&&!Dt&&se!==le){var e=le,t=se,n=Xr.showElement;for(se<le&&(e=se,t=le,n=Qr.hideElement);e<t;)n(ie[e]),e++;le=se}}function Er(e){return{container:F,slideItems:H,navContainer:ae,navItems:ie,controlsContainer:K,hasControls:qt,prevButton:$,nextButton:Z,items:Re,slideBy:qe,cloneCount:at,slideCount:V,slideCountNew:ot,index:vt,indexCached:ht,displayIndex:Jt(),navCurrentIndex:ce,navCurrentIndexCached:de,pages:se,pagesCached:le,sheet:et,isOn:G,event:e||{}}}f&&console.warn("No slides found in",M.container)}},{"./helpers/addCSSRule.js":1,"./helpers/addClass.js":2,"./helpers/addEvents.js":3,"./helpers/arrayFromNodeList.js":4,"./helpers/caf.js":5,"./helpers/calc.js":6,"./helpers/checkStorageValue.js":7,"./helpers/createStyleSheet.js":9,"./helpers/events.js":11,"./helpers/extend.js":12,"./helpers/forEach.js":13,"./helpers/getAttr.js":14,"./helpers/getCssRulesLength.js":16,"./helpers/getEndProperty.js":17,"./helpers/getSlideId.js":18,"./helpers/getTouchDirection.js":19,"./helpers/has3DTransforms.js":20,"./helpers/hasAttr.js":21,"./helpers/hasClass.js":22,"./helpers/hideElement.js":23,"./helpers/isVisible.js":25,"./helpers/jsTransform.js":26,"./helpers/mediaquerySupport.js":27,"./helpers/percentageLayout.js":29,"./helpers/raf.js":30,"./helpers/removeAttrs.js":31,"./helpers/removeCSSRule.js":32,"./helpers/removeClass.js":33,"./helpers/removeEvents.js":34,"./helpers/setAttrs.js":36,"./helpers/setLocalStorage.js":38,"./helpers/showElement.js":39,"./helpers/toDegree.js":40,"./helpers/whichProperty.js":41}],43:[function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.basketBtn=Array.from(document.querySelectorAll(".basket-btn")),this.basketBtnClose=document.querySelector(".basket_close"),this.basket=document.getElementById("product-basket"),this.basketBtn&&this.basket&&this.basketBtnClose&&this.handler()}var t,n,r;return t=e,(n=[{key:"handler",value:function(){var t=this;this.basketBtn.map(function(e){e.addEventListener("click",function(){t.basket.classList.add("is-open")})}),this.basket.addEventListener("click",function(e){e.target===t.basket&&t.handlerClose()}),this.basketBtnClose.addEventListener("click",function(){t.handlerClose()})}},{key:"handlerClose",value:function(){this.basket.classList.remove("is-open")}}])&&a(t.prototype,n),r&&a(t,r),e}();n.default=r},{}],44:[function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=Array.from(document.querySelectorAll(".product-color"));e&&this.handler(e)}var e,n,r;return e=t,(n=[{key:"handler",value:function(e){e.map(function(e){var t=Array.from(e.querySelectorAll(".product-color_item"));t.map(function(e){e.addEventListener("click",function(){t.map(function(e){e.classList.remove("is-active")}),e.classList.add("is-active")})})})}}])&&a(e.prototype,n),r&&a(e,r),t}();n.default=r},{}],45:[function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=Array.from(document.querySelectorAll(".product-count"));e&&this.handler(e)}var e,n,r;return e=t,(n=[{key:"handler",value:function(e){e.map(function(e){var t=e.querySelector(".product-count_sub"),n=e.querySelector(".product-count_add"),r=e.querySelector(".product-count_field");t.addEventListener("click",function(){1!==Number(r.value)&&(console.log(r.value),r.stepDown())}),n.addEventListener("click",function(){r.stepUp()})})}}])&&a(e.prototype,n),r&&a(e,r),t}();n.default=r},{}],46:[function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.productCardOrderBtns=Array.from(document.querySelectorAll(".product-card_order")),this.productCardOrderBtns&&this.handler()}var t,n,r;return t=e,(n=[{key:"handler",value:function(){var t=this;this.productCardOrderBtns.map(function(e){var t=e.closest(".product-card_action");e.addEventListener("click",function(){t.classList.add("show-size")})}),document.addEventListener("click",function(e){e.target.closest(".product-card_order")||t.productCardOrderBtns.map(function(e){e.closest(".product-card_action").classList.remove("show-size")})})}}])&&a(t.prototype,n),r&&a(t,r),e}();n.default=r},{}],47:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e("tiny-slider/src/tiny-slider");function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);Array.from(document.querySelectorAll(".product-gallery"));document.getElementById("product-gallery")&&this.handlerMobile()}var t,n,r;return t=e,(n=[{key:"handler",value:function(e){e.map(function(e){var n=e.querySelector(".product-gallery_select__img"),r=Array.from(e.querySelectorAll(".product-gallery_item"));r.map(function(t){t.addEventListener("click",function(){var e=t.querySelector("img").getAttribute("src");r.map(function(e){e.classList.remove("is-active")}),t.classList.add("is-active"),n.setAttribute("src",e)})})})}},{key:"handlerMobile",value:function(){var e;window.innerWidth<576&&(e=(0,a.tns)({container:"#product-gallery",items:1,mouseDrag:!0,nav:!0,controls:!1,swipeAngle:!1,speed:400})),window.addEventListener("resize",function(){575<window.innerWidth?e&&e.version&&e.destroy():e&&e.version||(e=(0,a.tns)({container:"#product-gallery",items:1,mouseDrag:!0,nav:!0,controls:!1,swipeAngle:!1,speed:400}))})}}])&&o(t.prototype,n),r&&o(t,r),e}();n.default=r},{"tiny-slider/src/tiny-slider":42}],48:[function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=Array.from(document.querySelectorAll(".product-size_item"));e&&this.handler(e)}var e,n,r;return e=t,(n=[{key:"handler",value:function(t){t.map(function(e){e.classList.contains("is-disabled")||e.addEventListener("click",function(){t.map(function(e){e.classList.remove("is-active")}),e.classList.add("is-active")})})}}])&&a(e.prototype,n),r&&a(e,r),t}();n.default=r},{}],49:[function(e,t,n){"use strict";function c(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){s=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw o}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.doc=document,this.body=this.doc.querySelector("body"),this.selectors=this.doc.querySelectorAll(".selector"),this.selectorVals=this.doc.querySelectorAll(".selector_val"),this.selectorItems=this.doc.querySelectorAll(".selector_list li"),this.selectorSearchFiles=this.doc.querySelectorAll(".selector_search"),this.selectors&&this.handlerPre(this.selectors),this.selectorVals&&this.handlerSelectClick(this.selectorVals),this.selectorItems&&this.handlerSelectItem(this.selectorItems),this.selectorSearchFiles&&this.handlerSearch(this.selectorSearchFiles),this.body&&this.handlerCloseMissClick(this.body)}var t,n,r;return t=e,(n=[{key:"handlerCloseMissClick",value:function(e){e.addEventListener("click",function(n){Array.from(document.querySelectorAll(".selector.show-list")).map(function(e){var t=e.querySelector(".selector_val");n.target!==e&&n.target!==t&&e.classList.remove("show-list")})})}},{key:"handlerPre",value:function(e){var u,t=c(e);try{for(t.s();!(u=t.n()).done;)!function(){var e,t=u.value,n=t.querySelector(".selector_input"),r=n.value,a=t.querySelectorAll(".selector_drop li"),o=t.querySelector(".selector_val");n.addEventListener("change",function(){n.value?t.classList.add("no-empty"):t.classList.remove("no-empty")});var i,s=c(a);try{for(s.s();!(i=s.n()).done;){var l=i.value;l.classList.remove("is-active"),l.getAttribute("data-val")===r&&(e=l.innerHTML,l.classList.add("is-active"),o.innerHTML=e,o.setAttribute("data-val",r))}}catch(e){s.e(e)}finally{s.f()}}()}catch(e){t.e(e)}finally{t.f()}}},{key:"handlerSelectClick",value:function(e){var t,n=c(e);try{for(n.s();!(t=n.n()).done;)!function(){var e=t.value;e.addEventListener("click",function(){e.closest(".selector").classList.toggle("show-list")})}()}catch(e){n.e(e)}finally{n.f()}}},{key:"handlerSelectItem",value:function(s){var e,t=c(s);try{for(t.s();!(e=t.n()).done;)!function(){var i=e.value;i.addEventListener("click",function(){var e=i.getAttribute("data-val"),t=i.closest(".selector").querySelector(".selector_input"),n=i.closest(".selector").querySelector(".selector_val"),r=i.innerHTML;t.dispatchEvent(new Event("change")),t.value=e,i.closest(".selector").classList.remove("show-list");var a,o=c(s);try{for(o.s();!(a=o.n()).done;){a.value.classList.remove("is-active")}}catch(e){o.e(e)}finally{o.f()}n.innerHTML=r,n.setAttribute("data-val",e)})}()}catch(e){t.e(e)}finally{t.f()}}},{key:"handlerSearch",value:function(e){var t,n=c(e);try{for(n.s();!(t=n.n()).done;)!function(){var l=t.value;l.addEventListener("input",function(){var e=l.closest(".selector"),t=l.value.toLowerCase(),n=e.querySelectorAll(".selector_list li");if(t.length){var r,a=c(n);try{for(a.s();!(r=a.n()).done;){var o=r.value;0===o.innerHTML.toLowerCase().indexOf(t)?o.classList.remove("is-hidden"):o.classList.add("is-hidden")}}catch(e){a.e(e)}finally{a.f()}}else{var i,s=c(n);try{for(s.s();!(i=s.n()).done;){i.value.classList.remove("is-hidden")}}catch(e){s.e(e)}finally{s.f()}}})}()}catch(e){n.e(e)}finally{n.f()}}}])&&a(t.prototype,n),r&&a(t,r),e}();n.default=r},{}],50:[function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.tableSizeLink=Array.from(document.querySelectorAll(".table-size-link")),this.tableSize=document.getElementById("product-table-size"),this.tableSizeCloseBtn=this.tableSize.querySelector(".table-size_close"),this.tableSizeTabLinks=Array.from(this.tableSize.querySelectorAll(".table-size_type__item")),this.tableSizeTabBlocks=Array.from(this.tableSize.querySelectorAll(".table-size_block")),this.tableSizeLink&&this.tableSize&&this.tableSizeCloseBtn&&this.tableSizeTabLinks&&this.handler()}var t,n,r;return t=e,(n=[{key:"handler",value:function(){var n=this;this.tableSizeLink.map(function(e){e.addEventListener("click",function(){n.tableSize.classList.add("is-open")})}),this.tableSizeCloseBtn.addEventListener("click",function(){n.handlerCloseTableSize()}),this.tableSize.addEventListener("click",function(e){e.target===n.tableSize&&n.handlerCloseTableSize()}),this.tableSizeTabLinks.map(function(t){t.addEventListener("click",function(){var e;t.classList.contains("is-active")||(e=document.getElementById(t.getAttribute("data-type")),n.tableSizeTabLinks.map(function(e){e.classList.remove("is-active")}),n.tableSizeTabBlocks.map(function(e){e.classList.remove("is-active")}),t.classList.add("is-active"),e.classList.add("is-active"))})})}},{key:"handlerCloseTableSize",value:function(){this.tableSize.classList.remove("is-open")}}])&&a(t.prototype,n),r&&a(t,r),e}();n.default=r},{}],51:[function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=function(){function n(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var e=Array.from(document.querySelectorAll(".product-tab_links .product-tab_link")),t=Array.from(document.querySelectorAll(".product-tab_block .product-tab_link"));e&&this.handlerTab(e),t&&this.handlerMobileTab(t),e&&t&&this.handlerResize(e,t)}var e,t,r;return e=n,(t=[{key:"handlerTab",value:function(o){var i=Array.from(document.querySelectorAll(".product-tab_item"));o.map(function(a){a.addEventListener("click",function(){var n=a.getAttribute("data-tab"),e=document.getElementById(n),t=a.closest(".product-tab"),r=Array.from(t.querySelectorAll(".product-tab_block"));o.map(function(e){e.classList.remove("is-active")}),i.map(function(e){e.classList.remove("is-active")}),r.map(function(e){var t=e.querySelector(".product-tab_link");t.getAttribute("data-tab")===n&&t.classList.add("is-active")}),a.classList.add("is-active"),e.classList.add("is-active")})})}},{key:"handlerMobileTab",value:function(e){Array.from(document.querySelectorAll(".product-tab_item"));e.map(function(r){r.addEventListener("click",function(){var t=r.getAttribute("data-tab"),e=document.getElementById(t),n=r.closest(".product-tab");Array.from(n.querySelectorAll(".product-tab_links .product-tab_link")).map(function(e){e.getAttribute("data-tab")===t&&e.classList.toggle("is-active")}),r.classList.toggle("is-active"),e.classList.toggle("is-active")})})}},{key:"handlerResize",value:function(n,r){var a=document.querySelectorAll(".product-tab_links .product-tab_link"),o=document.querySelectorAll(".product-tab_block .product-tab_link");window.addEventListener("resize",function(){var e,t;(0<a.length||0<o.length)&&(575<window.innerWidth?(e=n[0].getAttribute("data-tab"),t=document.getElementById(e),n[0].classList.add("is-active"),t.classList.add("is-active")):r.map(function(e){var t=e.getAttribute("data-tab"),n=document.getElementById(t);e.closest(".product-tab");e.classList.remove("is-active"),n.classList.remove("is-active")}))})}}])&&a(e.prototype,t),r&&a(e,r),n}();n.default=r},{}],52:[function(e,t,n){"use strict";var r=f(e("./modules/ProductSize")),a=f(e("./modules/Basket")),o=f(e("./modules/TableSize")),i=f(e("./modules/ProductCardAdd")),s=f(e("./modules/productTab")),l=f(e("./modules/Selector")),u=f(e("./modules/ColorChange")),c=f(e("./modules/CountProduct")),d=f(e("./modules/ProductGallery"));function f(e){return e&&e.__esModule?e:{default:e}}new r.default,new a.default,new o.default,new i.default,new s.default,new l.default,new u.default,new c.default,new d.default},{"./modules/Basket":43,"./modules/ColorChange":44,"./modules/CountProduct":45,"./modules/ProductCardAdd":46,"./modules/ProductGallery":47,"./modules/ProductSize":48,"./modules/Selector":49,"./modules/TableSize":50,"./modules/productTab":51}]},{},[52]);

// libs 
// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),position(digi),when(breakpoint)"
// e.x. data-da="item,2,992"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle

"use strict";

(function () {
	let originalPositions = [];
	let daElements = document.querySelectorAll('[data-da]');
	let daElementsArray = [];
	let daMatchMedia = [];
	//Заполняем массивы
	if (daElements.length > 0) {
		let number = 0;
		for (let index = 0; index < daElements.length; index++) {
			const daElement = daElements[index];
			const daMove = daElement.getAttribute('data-da');
			if (daMove != '') {
				const daArray = daMove.split(',');
				const daPlace = daArray[1] ? daArray[1].trim() : 'last';
				const daBreakpoint = daArray[2] ? daArray[2].trim() : '767';
				const daType = daArray[3] === 'min' ? daArray[3].trim() : 'max';
				const daDestination = document.querySelector('.' + daArray[0].trim())
				if (daArray.length > 0 && daDestination) {
					daElement.setAttribute('data-da-index', number);
					//Заполняем массив первоначальных позиций
					originalPositions[number] = {
						"parent": daElement.parentNode,
						"index": indexInParent(daElement)
					};
					//Заполняем массив элементов 
					daElementsArray[number] = {
						"element": daElement,
						"destination": document.querySelector('.' + daArray[0].trim()),
						"place": daPlace,
						"breakpoint": daBreakpoint,
						"type": daType
					}
					number++;
				}
			}
		}
		dynamicAdaptSort(daElementsArray);

		//Создаем события в точке брейкпоинта
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daBreakpoint = el.breakpoint;
			const daType = el.type;

			daMatchMedia.push(window.matchMedia("(" + daType + "-width: " + daBreakpoint + "px)"));
			daMatchMedia[index].addListener(dynamicAdapt);
		}
	}
	//Основная функция
	function dynamicAdapt(e) {
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daElement = el.element;
			const daDestination = el.destination;
			const daPlace = el.place;
			const daBreakpoint = el.breakpoint;
			const daClassname = "_dynamic_adapt_" + daBreakpoint;

			if (daMatchMedia[index].matches) {
				//Перебрасываем элементы
				if (!daElement.classList.contains(daClassname)) {
					let actualIndex = indexOfElements(daDestination)[daPlace];
					if (daPlace === 'first') {
						actualIndex = indexOfElements(daDestination)[0];
					} else if (daPlace === 'last') {
						actualIndex = indexOfElements(daDestination)[indexOfElements(daDestination).length];
					}
					daDestination.insertBefore(daElement, daDestination.children[actualIndex]);
					daElement.classList.add(daClassname);
				}
			} else {
				//Возвращаем на место
				if (daElement.classList.contains(daClassname)) {
					dynamicAdaptBack(daElement);
					daElement.classList.remove(daClassname);
				}
			}
		}
		customAdapt();
	}

	//Вызов основной функции
	dynamicAdapt();

	//Функция возврата на место
	function dynamicAdaptBack(el) {
		const daIndex = el.getAttribute('data-da-index');
		const originalPlace = originalPositions[daIndex];
		const parentPlace = originalPlace['parent'];
		const indexPlace = originalPlace['index'];
		const actualIndex = indexOfElements(parentPlace, true)[indexPlace];
		parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
	}
	//Функция получения индекса внутри родителя
	function indexInParent(el) {
		var children = Array.prototype.slice.call(el.parentNode.children);
		return children.indexOf(el);
	}
	//Функция получения массива индексов элементов внутри родителя 
	function indexOfElements(parent, back) {
		const children = parent.children;
		const childrenArray = [];
		for (let i = 0; i < children.length; i++) {
			const childrenElement = children[i];
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
	}
	//Сортировка объекта
	function dynamicAdaptSort(arr) {
		arr.sort(function (a, b) {
			if (a.breakpoint > b.breakpoint) { return -1 } else { return 1 }
		});
		arr.sort(function (a, b) {
			if (a.place > b.place) { return 1 } else { return -1 }
		});
	}
	//Дополнительные сценарии адаптации
	function customAdapt() {
		//const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	}
}());
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});


// components
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
		}
		else {
			document.querySelector('body').classList.add('no-webp');
		}
	});
})
$(document).ready(function() {
    $('.site_header__burger').click(function(event) {
        $('.site_header__burger, .side-categories__wrapper').toggleClass('active');
        $('body').toggleClass('lock');
    })
})
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

        let accordionid = $(this).closest('.accordion').attr("id");

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
    let showMore = document.querySelector('.show-more__label');
    let catalogItem = document.querySelectorAll('.filter-catalog__item .title-h6');

    mediaQueryMdMin = window.matchMedia('(min-width: 768px)');
    mediaQuerySmMax = window.matchMedia('(max-width: 575px)');

    // mediaQueryMdMin
    mediaQueryMdMin.addListener(handleTabletChange);
    function handleTabletChange(e) {
        if (e.matches) {
            if ($('#sideCategoriesMobileAccordion')) {
                $('#sideCategoriesMobileAccordion').removeClass('accordion');
                $('#sideCategoriesMobileAccordion .side-categories__item').removeClass('accordion__item');
                $('#sideCategoriesMobileAccordion .side-categories__title').removeClass('accordion__title');
                $('#sideCategoriesMobileAccordion .side-categories__text').removeClass('accordion__text');
                $('#sideCategoriesMobileAccordion .side-categories__text').css({ display: "block" });
            }

            if (showMore) {
                showMore.innerHTML = "Показывать на странице";
            }

            if (catalogItem) {
                for (let index = 0; index < catalogItem.length; index++) {
                    const catalogItems = catalogItem[index];
                    catalogItems.classList.remove('accordion__title');
                }
            }

            if ($('.filter-catalog .accordion__text')) {
                $('.filter-catalog .accordion__text').css({ display: "block" });
            }
        }

        else {
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
                for (let index = 0; index < catalogItem.length; index++) {
                    const catalogItems = catalogItem[index];
                    catalogItems.classList.add('accordion__title');
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
            $('#sideCategoriesMobileAccordion .filter-catalog .accordion__text').css({ display: "block" });
        }

        if (catalogItem) {
            for (let index = 0; index < catalogItem.length; index++) {
                const catalogItems = catalogItem[index];
                catalogItems.classList.remove('accordion__title');
            }
        }
        if ($('.filter-catalog .accordion__text')) {
            $('.filter-catalog .accordion__text').css({ display: "block" });
        }
    }
    else {
        if (showMore) {
            showMore.innerHTML = "Отображать товаров";
        }
    }

    // mediaQuerySmMax
    mediaQuerySmMax.addListener(handleTabletChangeSmMax);
    function handleTabletChangeSmMax(e) {
        if (e.matches) {
            if ($('.site_footer__block')) {
                $('.site_footer__block').removeClass('accordion');
                $('.site_footer__block .site_footer__text').removeClass('accordion__text');
                $('.site_footer__block .site_footer__text').css({ display: "block" });
            }
        }
        else {
            if ($('.site_footer__block')) {
                $('.site_footer__block').addClass('accordion');
                $('.site_footer__block .site_footer__text').addClass('accordion__text');
            }
        }
    }

    if (mediaQuerySmMax.matches) {
    }
    else {
        if ($('.site_footer__block')) {
            $('.site_footer__block').removeClass('accordion');
            $('.site_footer__block .site_footer__text').removeClass('accordion__text');
            $('.site_footer__block .site_footer__text').css({ display: "block" });
        }
    }
});
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 300;

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const currentPopup = document.getElementById(popupName);
            popupOpen(currentPopup);
            e.preventDefault();
        });
    }
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function (e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}

function popupOpen(currentPopup) {
    if (currentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
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

function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnLock();
        }
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.site-main').offsetWidth + 'px'; //!обратить внимание на контейнер

    if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
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
            for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = '0px';
            }
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout)
}

document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
        const popupActive = document.querySelector('.popup.open');
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
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }
})();

(function () {
    // проверяем поддержку
    if (!Element.prototype.matches) {

        // определяем свойство
        Element.prototype.matches = Element.prototype.matchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector;
    }
})();
$(document).ready(function () {
    let select = function () {
        let selectHeader = document.querySelectorAll('.custom-select');
        let selectItem = document.querySelectorAll('.custom-options__option');

        selectHeader.forEach(item => {
            item.addEventListener('click', selectToggle)
        });

        selectItem.forEach(item => {
            item.addEventListener('click', selectChoose)
        });

        function selectToggle() {
            this.classList.toggle('open');
        }

        function selectChoose() {

            let text = this.innerText,
                select = this.closest('.custom-select'),
                currentText = select.querySelector('.custom-select__trigger span');
            currentText.innerText = text;

            mediaQuery = window.matchMedia('(max-width: 767px)');
            if (mediaQuery.matches) {
                if (select.closest('.custom-select-wrapper').classList.contains('sorting__custom-select-wrapper')) {
                    currentText.innerText = "Сортировать по";
                }
            }

            let options = this.closest('.custom-options');
            let option = options.querySelectorAll('.custom-options__option');

            for (let index = 0; index < option.length; index++) {
                const element = option[index];
                element.classList.remove('selected');
            }

            this.classList.add("selected");
        }

        mediaQuery = window.matchMedia('(max-width: 767px)');

        mediaQuery.addListener(handleTabletChange);
        function handleTabletChange(e) {
            if (e.matches) {
                let trigger = document.querySelector('.sorting__custom-select-wrapper .custom-select__trigger span');
                if (trigger) {
                    trigger.innerHTML = "Сортировать по";
                }
            }
        }
        if (mediaQuery.matches) {
            let trigger = document.querySelector('.sorting__custom-select-wrapper .custom-select__trigger span');
            if (trigger) {
                trigger.innerHTML = "Сортировать по";
            }
        }
    };

    select();
})
const navOffset = $('.site_header__bottom').offset().top;
$(window).scroll(function () {
    const scrolled = $(this).scrollTop();

    if (scrolled > navOffset) {
        $('.site_wrap').addClass('nav-fixed');
    } else if (scrolled < navOffset) {
        $('.site_wrap').removeClass('nav-fixed');
    }
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
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true,
                }
            },
        ]
    });

    // Ширина точек слайдера каталога
    $(function () {
        let sectionNumber = document.querySelectorAll('.sec-popular-goods').length;
        let slidesNumber = $('.slider_item').length;
        let slidesClonedNumber = $('.slider_item.slick-cloned').length;
        let dotsWidth = 100 / (slidesNumber - slidesClonedNumber) * sectionNumber;
        $('.slider_popular-goods .slick-dots li').width(dotsWidth + '%');
    });

    $('.banner-slider').slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
    })

    $('.summary-cart__products').slick({
        autoplay: false,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    })
    // высота точек слайдера каталога на странице оформления заказа
    mediaQueryMdMax = window.matchMedia('(max-width: 767px)');
    $(function () {
        if ($('.summary-cart__product').length > 0) {
            let slidesNumber = $('.summary-cart__product').length;

            if (mediaQueryMdMax.matches) {
                let dotsHeight = 100 / (slidesNumber);
                $('.summary-cart__products .slick-dots li').height(dotsHeight + '%');
            } else {
                let dotsHeight = 100 / (slidesNumber - 1);
                $('.summary-cart__products .slick-dots li').height(dotsHeight + '%');
            }
        }
    });
})
$(document).ready(function () {
    $('.change-view-password-js').click(function(){

        var type = $(this).siblings('input').attr('type') == "text" ? "password" : 'text';
        $(this).siblings('input').prop('type', type);
        // $(this).toggleClass('');
    })
    $('.lk-wrapper__mb-navigation-btn').click(function(e){
        e.preventDefault();
        if(window.innerWidth < 951){
            $('.lk-wrapper__sidebar').addClass('lk-wrapper__sidebar--active');
        }
    });
    $('.lk-wrapper__sidebar-title').click(function(){
        if(window.innerWidth < 951){
            $('.lk-wrapper__sidebar').removeClass('lk-wrapper__sidebar--active');
        }
    })

    $('.lk-wrapper__content-tab').click(function(e){
    	e.preventDefault();
    	var href = $(this).attr('href');
        if(href !== '#'){
            $(this).siblings().removeClass('lk-wrapper__content-tab--active');
            $(this).addClass('lk-wrapper__content-tab--active');


            $('.lk-wrapper__content-box').removeClass('lk-wrapper__content-box--active');
            $(href).addClass('lk-wrapper__content-box--active');
        }
    });


    $('.lk-wrapper__content-tab').click(function(e){
        e.preventDefault();
        var href = $(this).attr('href');
        if(href !== '#'){
            $(this).siblings().removeClass('lk-wrapper__content-tab--active');
            $(this).addClass('lk-wrapper__content-tab--active');


            // $('.signin-wrapper__auth-box').removeClass('signin-wrapper__auth-box--active');
            $('.lk-wrapper__content-box').removeClass('signin-wrapper__auth-box--active');
            $(href).addClass('signin-wrapper__auth-box--active');
        }
    });


    // Add address
    $('.lk-wrapper__add-address').click(function(){
        var clone = $('.lk-wrapper__form-address:first').clone();
        clone.find('input').val('');
        $(this).before(clone);
    });

    // remove review
    $('.lk-reviews-item__remove').click(function(e){
        e.preventDefault();
        var review = $(this).closest('.lk-reviews-item').fadeOut(400, function() { $(this).remove(); });
    })
});
$(document).ready(function () {
    const checkoutStep = $('checkoutStep-1');
    // if (checkoutStep) {
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
        let checkoutStepID = $(this).closest('.step-checkout').attr("id");
        $('#' + checkoutStepID + ' ' + '.radio-group__checked').not($(this).next()).slideUp(300);
        $(this).parent().children('.radio-group__checked').slideDown(300);
    })
    
    $('.radio-group__field').click(function (e) {
        let checkoutStepID = $(this).closest('.step-checkout').attr("id");
        $('#' + checkoutStepID + ' ' + '.radio-group').removeClass('_active');

        $(this).parent().addClass('_active');
    })
});
$(document).ready(function () {
    let promocode = $('#promocode');
    const promocodeTrue = 'EAZYWAY2020';
    const promocodeError = 'Промокод не найдет';
    const promocodeSuccess = 'Промокод успешно применен';

    promocode.blur(function () {
        if ($(this).val()) {
            $('.summary-cart__promocode-text').slideDown(300);

            if ($(this).val() == promocodeTrue) {
                $('.summary-cart__promocode-text').removeClass('_red');
                $('.summary-cart__promocode-text').addClass('_green');
                $('.summary-cart__promocode-text').text(promocodeSuccess);
            }
            else {
                $('.summary-cart__promocode-text').removeClass('_green');
                $('.summary-cart__promocode-text').addClass('_red');
                $('.summary-cart__promocode-text').text(promocodeError);
            }
        }
        else {
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
        $('body').css({ paddingRight: 0 });
        $('.help-page__menu-mobile a').removeClass('active');
    });

    $('.help-page__menu-mobile a').click(function () {
        $('.help-page__menu-mobile a').toggleClass('active');
    });
    
}); 