!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r(require("prop-types"),require("react"),require("svg-baker-runtime/browser-symbol"),require("svg-sprite-loader/runtime/browser-sprite.build"));else if("function"==typeof define&&define.amd)define(["prop-types","react","svg-baker-runtime/browser-symbol","svg-sprite-loader/runtime/browser-sprite.build"],r);else{var t="object"==typeof exports?r(require("prop-types"),require("react"),require("svg-baker-runtime/browser-symbol"),require("svg-sprite-loader/runtime/browser-sprite.build")):r(e["prop-types"],e.react,e["svg-baker-runtime/browser-symbol"],e["svg-sprite-loader/runtime/browser-sprite.build"]);for(var o in t)("object"==typeof exports?exports:e)[o]=t[o]}}(this,function(e,r,t,o){return function(e){function r(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,r),i.l=!0,i.exports}var t={};return r.m=e,r.c=t,r.i=function(e){return e},r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=166)}({0:function(r,t){r.exports=e},1:function(e,t){e.exports=r},166:function(e,r,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var r="Icon Icon--"+y+" Icon--"+d.id+" "+(e.className||"");return p.default.createElement("div",{className:r,style:n({width:b+"px",height:v+"px"},e.style),onClick:e.onClick},p.default.createElement("svg",{viewBox:d.viewBox,width:b,height:v,style:{display:"block"}},p.default.createElement("use",{xlinkHref:"#"+d.id,style:{fill:"currentColor",color:e.fill}})))}Object.defineProperty(r,"__esModule",{value:!0});var n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},s=t(2),u=o(s),l=t(3),a=o(l),c=t(1),p=o(c),f=t(0),d=(o(f),new u.default({id:"notification_28",use:"notification_28-usage",viewBox:"0 0 28 28",content:'<symbol viewBox="0 0 28 28" id="notification_28"><path d="M14,25.5 C12.3072916,25.5 11,24.625 11,23 L17,23 C17,24.625 15.6927084,25.5 14,25.5 Z M21.4946166,17 C21.4946166,19 24,19.5 24,20.5 C24,21.5 23.5,22 21.5,22 L6.5,22 C4.5,22 4,21.5 4,20.5 C4,19.5 6.5,19 6.5,17 L6.5,13 C6.5,8 9,4 13,4 C13,3.25 13.5,3 14,3 C14.5,3 15,3.25 15,4 C19,4 21.4946166,8 21.4946166,13 L21.4946166,17 Z" /></symbol>'})),b=(a.default.add(d),d.viewBox.split(" ")[2]),v=d.viewBox.split(" ")[3],y=Math.max(b,v);i.displayName="icon-"+d.id,r.default=i},2:function(e,r){e.exports=t},3:function(e,r){e.exports=o}})});