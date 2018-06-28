(function(t){function n(n){for(var a,s,i=n[0],u=n[1],c=n[2],f=0,v=[];f<i.length;f++)s=i[f],o[s]&&v.push(o[s][0]),o[s]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);l&&l(n);while(v.length)v.shift()();return r.push.apply(r,c||[]),e()}function e(){for(var t,n=0;n<r.length;n++){for(var e=r[n],a=!0,i=1;i<e.length;i++){var u=e[i];0!==o[u]&&(a=!1)}a&&(r.splice(n--,1),t=s(s.s=e[0]))}return t}var a={},o={1:0},r=[];function s(n){if(a[n])return a[n].exports;var e=a[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=a,s.d=function(t,n,e){s.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,n){if(1&n&&(t=s(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)s.d(e,a,function(n){return t[n]}.bind(null,a));return e},s.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(n,"a",n),n},s.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},s.p="/canvas/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=n,i=i.slice();for(var c=0;c<i.length;c++)n(i[c]);var l=u;r.push([3,0]),e()})({3:function(t,n,e){t.exports=e("Vtdi")},EDI0:function(t,n,e){},Vtdi:function(t,n,e){"use strict";e.r(n);e("VRzm");var a=e("Kw5r"),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[t._v("\n  App\n  "),e("p",t._l(t.routes,function(n){return n.name!==t.$route.name?e("router-link",{key:n.name,attrs:{to:n.path}},[t._v(t._s(n.name))]):t._e()})),e("router-view")],1)},r=[],s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"canvas-brush"},[e("p",[t._v("画笔颜色： "),e("el-color-picker",{model:{value:t.color,callback:function(n){t.color=n},expression:"color"}})],1),e("p",[t._v("画笔粗细： "),e("el-input-number",{attrs:{step:4,max:20,size:"small"},model:{value:t.num,callback:function(n){t.num=n},expression:"num"}})],1),e("p",[e("el-button",{attrs:{type:"primary"},on:{click:t.saveCanvasToImage}},[t._v("save")]),e("el-button",{on:{click:t.clearCanvas}},[t._v("clear")]),e("el-button",{attrs:{type:"danger"},on:{click:t.clearAll}},[t._v("clear all")])],1),e("canvas",{ref:"canvas",on:{mousedown:t.mouseDownEvent,mouseup:t.mouseUpEvent,mousemove:t.mouseMoveEvent}},[t._v("sorry, your broswer does not support html5 canvas!")]),e("div",t._l(t.canvasImgPath,function(t){return e("img",{key:t,attrs:{src:t}})}))])},i=[],u={name:"canvas-brush",data:function(){return{context:null,color:"#ff0000",num:2,isMouseDown:!1,array_paint:[],canvasImgPath:[]}},methods:{initCanvasStyle:function(){this.canvas=this.$refs.canvas;var t=this.canvas,n=this.$el,e=n.clientWidth,a=n.clientHeight;t.width=e,t.height=a,t.style.background="#f3f4f5",this.context=t.getContext("2d")},setCanvasProperties:function(){var t=this.context;t.strokeStyle=this.color,t.lineWidth=this.num},paint:function(){var t=this.context,n=this.array_paint;if(t.beginPath(),t.moveTo(n[0][0],n[0][1]),1==n.length)t.lineTo(n[0][0]+1,n[0][1]+1);else{var e=1;for(e in n)t.lineTo(n[e][0],n[e][1]),t.moveTo(n[e][0],n[e][1])}t.closePath(),t.stroke()},mouseDownEvent:function(t){this.isMouseDown=!0,this.setCanvasProperties(),this.array_paint.push([event.offsetX,event.offsetY]),this.paint(t,"down")},mouseUpEvent:function(){this.isMouseDown=!1,this.array_paint=[]},mouseMoveEvent:function(t){this.isMouseDown&&(this.array_paint.push([event.offsetX,event.offsetY]),this.paint(t))},saveCanvasToImage:function(){var t=this.canvas;this.canvasImgPath.unshift(t.toDataURL("image/png"))},clearCanvas:function(){var t=this.canvas;this.context.clearRect(0,0,t.width,t.height)},clearAll:function(){this.clearCanvas(),this.canvasImgPath=[]}},mounted:function(){var t=this;this.$nextTick(function(){t.initCanvasStyle()})}},c=u,l=(e("ftND"),e("KHd+")),f=Object(l["a"])(c,s,i,!1,null,null,null),v=f.exports,p=[{name:"canvasBrush",path:"/canvas/brush",component:v}],h=p.concat(),m=h,d={name:"app",computed:{routes:function(){return p}}},y=d,b=(e("ZL7j"),Object(l["a"])(y,o,r,!1,null,null,null)),g=b.exports,_=e("jE9Z");a["default"].use(_["a"]);var w=new _["a"]({routes:m}),x=e("XJYT"),k=e.n(x);e("D66Q");a["default"].use(k.a),a["default"].config.productionTip=!1,new a["default"]({router:w,render:function(t){return t(g)}}).$mount("#app")},ZL7j:function(t,n,e){"use strict";var a=e("EDI0"),o=e.n(a);o.a},ety8:function(t,n,e){},ftND:function(t,n,e){"use strict";var a=e("ety8"),o=e.n(a);o.a}});
//# sourceMappingURL=app.87ace54a.js.map