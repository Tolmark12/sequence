!function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();t.exports=function(){function t(e){r(this,t),this.items=e,this.reset(),this.totalItems=this.items.length}return i(t,[{key:"next",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.incramentItemIndex(1,t)}},{key:"prev",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.incramentItemIndex(-1,t)}},{key:"isAtLastItem",value:function(){return this.currentItemIndex===this.totalItems-1}},{key:"incramentItemIndex",value:function(t,e){null==e&&(e=!1);var n=this.currentItemIndex+t;return n>this.totalItems-1?n=e?0:this.totalItems-1:n<0&&(n=e?this.totalItems-1:0),this.currentItemIndex!==n&&(this.currentItemIndex=n,!0)}},{key:"changeItemByIndex",value:function(t){var e=t>this.currentItemIndex?1:-1,n=Math.abs(this.currentItemIndex-t)*e;this.incramentItemIndex(n)}},{key:"activateItemByParam",value:function(t,e){this.currentItemIndex=this.getIndexByParam(t,e)}},{key:"getIndexByParam",value:function(t,e){for(var n=0;n<this.items.length;n++)if(this.items[n][t]===e)return n;return null}},{key:"getItemByParam",value:function(t,e){return this.items[this.getIndexByParam(t,e)]}},{key:"reset",value:function(){this.currentItemIndex=0}},{key:"addItem",value:function(t,e){null==e&&(e=this.items.length),this.items.splice(e,0,t),this.totalItems++}},{key:"removeItembyParam",value:function(t,e){this.removeItemByIndex(this.getIndexByParam(t,e))}},{key:"removeItemByIndex",value:function(t){null!=t&&(this.items.splice(t,1),this.totalItems--)}},{key:"currentItem",get:function(){return this.items[this.currentItemIndex]}}]),t}()}]);