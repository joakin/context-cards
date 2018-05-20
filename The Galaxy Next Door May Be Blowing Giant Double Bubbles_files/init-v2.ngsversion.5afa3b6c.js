require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";var platform=require("platform-loader-v2");platform.loadScripts(function(){Pestle.init(),console.log("News Site Loaded")});
},{"platform-loader-v2":"platform-loader-v2"}],"platform-loader-v2":[function(require,module,exports){
"use strict";var Platform={loadScripts:function(t){var r=document.querySelectorAll('script[type="text/ng-script"]'),e=r.length;Array.prototype.forEach.call(r,function(r){var c=document.createElement("script");c.onload=function(){--e||(require("platform/v2/scripts/main.js")(),t())},c.async=!0,c.src=r.getAttribute("data-src"),document.body.appendChild(c)})}};module.exports=Platform;
},{"platform/v2/scripts/main.js":"platform/v2/scripts/main.js"}]},{},[1])


//# sourceMappingURL=main_map.json