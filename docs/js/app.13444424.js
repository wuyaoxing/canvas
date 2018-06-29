(function(t){function e(e){for(var a,r,i=e[0],c=e[1],u=e[2],v=0,h=[];v<i.length;v++)r=i[v],o[r]&&h.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(h.length)h.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(a=!1)}a&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},o={1:0},s=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/canvas/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;s.push([4,0]),n()})({4:function(t,e,n){t.exports=n("Vtdi")},Ao5S:function(t,e,n){},EDI0:function(t,e,n){},Vtdi:function(t,e,n){"use strict";n.r(e);n("VRzm");var a=n("Kw5r"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._v("\n  App\n  "),n("p",t._l(t.routes,function(e){return e.name!==t.$route.name?n("router-link",{key:e.name,attrs:{to:e.path}},[t._v(t._s(e.name))]):t._e()})),n("router-view")],1)},s=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"canvas-brush"},[n("p",[t._v("画笔颜色： "),n("el-color-picker",{model:{value:t.color,callback:function(e){t.color=e},expression:"color"}})],1),n("p",[t._v("画笔粗细： "),n("el-input-number",{attrs:{step:4,max:20,size:"small"},model:{value:t.num,callback:function(e){t.num=e},expression:"num"}})],1),n("p",[n("el-button",{attrs:{type:"primary"},on:{click:t.saveCanvasToImage}},[t._v("save")]),n("el-button",{on:{click:t.clearCanvas}},[t._v("clear")]),n("el-button",{attrs:{type:"danger"},on:{click:t.clearAll}},[t._v("clear all")])],1),n("canvas",{ref:"canvas",on:{mousedown:t.mouseDownEvent,mouseup:t.mouseUpEvent,mousemove:t.mouseMoveEvent,touchstart:t.mouseDownEvent,touchend:t.mouseUpEvent,touchmove:t.mouseMoveEvent}},[t._v("sorry, your broswer does not support html5 canvas!")]),n("div",t._l(t.canvasImgPath,function(t){return n("img",{key:t,attrs:{src:t}})}))])},i=[],c={name:"canvas-brush",data:function(){return{context:null,color:"#ff0000",num:2,isMouseDown:!1,array_paint:[],canvasImgPath:[]}},methods:{initCanvasStyle:function(){this.canvas=this.$refs.canvas;var t=this.canvas,e=this.$el,n=e.clientWidth,a=e.clientHeight;t.width=n,t.height=a,t.style.background="#f3f4f5",this.context=t.getContext("2d")},setCanvasProperties:function(){var t=this.context;t.strokeStyle=this.color,t.lineWidth=this.num,t.lineJoin="round",t.lineCap="round"},paint:function(){var t=this.context,e=this.array_paint;if(t.beginPath(),t.moveTo(e[0][0],e[0][1]),1==e.length)t.lineTo(e[0][0]+1,e[0][1]+1);else{var n=1;for(n in e)t.lineTo(e[n][0],e[n][1]),t.moveTo(e[n][0],e[n][1])}t.closePath(),t.stroke()},mouseDownEvent:function(t){t.preventDefault();var e=this.canvas,n=t.targetTouches?t.targetTouches[0]:t;this.isMouseDown=!0,this.setCanvasProperties(),this.array_paint.push([n.clientX-e.offsetLeft,n.clientY-e.offsetTop]),this.paint()},mouseUpEvent:function(t){t.preventDefault(),this.isMouseDown=!1,this.array_paint=[]},mouseMoveEvent:function(t){t.preventDefault();var e=this.canvas,n=t.targetTouches?t.targetTouches[0]:t;this.isMouseDown&&(this.array_paint.push([n.clientX-e.offsetLeft,n.clientY-e.offsetTop]),this.paint())},saveCanvasToImage:function(){var t=this.canvas;this.canvasImgPath.unshift(t.toDataURL("image/png"))},clearCanvas:function(){var t=this.canvas;this.context.clearRect(0,0,t.width,t.height)},clearAll:function(){this.clearCanvas(),this.canvasImgPath=[]}},mounted:function(){var t=this;this.$nextTick(function(){t.initCanvasStyle()})}},u=c,l=(n("ftND"),n("KHd+")),v=Object(l["a"])(u,r,i,!1,null,null,null),h=v.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"canvas-brush"},[n("p",[t._v("画笔颜色： "),n("el-color-picker",{model:{value:t.color,callback:function(e){t.color=e},expression:"color"}})],1),n("p",[t._v("画笔粗细： "),n("el-input-number",{attrs:{step:4,max:20,size:"small"},model:{value:t.num,callback:function(e){t.num=e},expression:"num"}})],1),n("p",[n("el-button",{attrs:{type:"primary"},on:{click:t.saveCanvasToImage}},[t._v("save")]),n("el-button",{on:{click:t.clearCanvas}},[t._v("clear")]),n("el-button",{attrs:{type:"danger"},on:{click:t.clearAll}},[t._v("clear all")])],1),n("canvas",{ref:"canvas",on:{mousedown:t.mouseDownEvent,mouseup:t.mouseUpEvent,mousemove:t.mouseMoveEvent,touchstart:t.mouseDownEvent,touchend:t.mouseUpEvent,touchmove:t.mouseMoveEvent}},[t._v("sorry, your broswer does not support html5 canvas!")]),n("div",t._l(t.canvasImgPath,function(t){return n("img",{key:t,attrs:{src:t}})}))])},p=[],m={name:"canvas-brush",data:function(){return{context:null,color:"#ff0000",num:2,isMouseDown:!1,array_paint:[],canvasImgPath:[]}},methods:{initCanvasStyle:function(){this.canvas=this.$refs.canvas;var t=this.canvas,e=this.$el,n=e.clientWidth,a=e.clientHeight;t.width=n,t.height=a,t.style.background="#f3f4f5",this.context=t.getContext("2d")},setCanvasProperties:function(){var t=this.context;t.strokeStyle=this.color,t.lineWidth=this.num,t.lineJoin="round",t.lineCap="round"},paint:function(){var t=this.context,e=this.array_paint;if(t.beginPath(),t.moveTo(e[0][0],e[0][1]),1==e.length)t.lineTo(e[0][0]+1,e[0][1]+1);else{var n=1;for(n in e)t.lineTo(e[n][0],e[n][1]),t.moveTo(e[n][0],e[n][1])}t.closePath(),t.stroke()},mouseDownEvent:function(t){t.preventDefault();var e=this.canvas,n=t.targetTouches?t.targetTouches[0]:t;this.isMouseDown=!0,this.setCanvasProperties(),this.array_paint.push([n.clientX-e.offsetLeft,n.clientY-e.offsetTop]),this.paint()},mouseUpEvent:function(t){t.preventDefault(),this.isMouseDown=!1,this.array_paint=[]},mouseMoveEvent:function(t){t.preventDefault();var e=this.canvas,n=t.targetTouches?t.targetTouches[0]:t;this.isMouseDown&&(this.array_paint.push([n.clientX-e.offsetLeft,n.clientY-e.offsetTop]),this.paint())},saveCanvasToImage:function(){var t=this.canvas;this.canvasImgPath.unshift(t.toDataURL("image/png"))},clearCanvas:function(){var t=this.canvas;this.context.clearRect(0,0,t.width,t.height)},clearAll:function(){this.clearCanvas(),this.canvasImgPath=[]},draw:function(){var t=this.context;t.arc(100,100,30,0,Math.PI,!0),this.drawRoundRect(t,100,100,200,200,50),t.stroke()},drawRoundRect:function(t,e,n,a,o,s){t.beginPath(),t.arc(e+s,n+s,s,Math.PI,3*Math.PI/2),t.lineTo(a-s+e,n),t.arc(a-s+e,s+n,s,3*Math.PI/2,2*Math.PI),t.lineTo(a+e,o+n-s),t.arc(a-s+e,o-s+n,s,0,1*Math.PI/2),t.lineTo(s+e,o+n),t.arc(s+e,o-s+n,s,1*Math.PI/2,Math.PI),t.closePath()}},mounted:function(){var t=this;this.$nextTick(function(){t.initCanvasStyle(),t.draw()})}},d=m,g=(n("bGm3"),Object(l["a"])(d,f,p,!1,null,null,null)),y=g.exports,b=[{name:"canvasTest",path:"/canvas/test",component:y},{name:"canvasBrush",path:"/canvas/brush",component:h}],_=b.concat(),w=_,T={name:"app",computed:{routes:function(){return b}}},P=T,x=(n("ZL7j"),Object(l["a"])(P,o,s,!1,null,null,null)),k=x.exports,D=n("jE9Z");a["default"].use(D["a"]);var M=new D["a"]({routes:w}),C=n("XJYT"),E=n.n(C);n("D66Q");a["default"].use(E.a),a["default"].config.productionTip=!1,new a["default"]({router:M,render:function(t){return t(k)}}).$mount("#app")},ZL7j:function(t,e,n){"use strict";var a=n("EDI0"),o=n.n(a);o.a},bGm3:function(t,e,n){"use strict";var a=n("Ao5S"),o=n.n(a);o.a},ety8:function(t,e,n){},ftND:function(t,e,n){"use strict";var a=n("ety8"),o=n.n(a);o.a}});
//# sourceMappingURL=app.13444424.js.map