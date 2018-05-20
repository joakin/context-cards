/*!
 * Barlesque - ORB and all
 * Copyright (c) 2015 BBC, all rights reserved.
 */
define("orb/api",function(){"use strict";var n={layout:[]},t=(window.orb.fig(),{}),i={layout:function(t){n.layout.push(t)},trigger:function(t,i){if(n[t])for(var o=0,r=n[t].length;o<r;o++)n[t][o](i)},config:function(n,i){return 0===arguments.length?t:1===arguments.length?t[n]:void(t[n]=i)}};return i});