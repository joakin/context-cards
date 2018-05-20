(function(){
var o={'uk':0,
'ck':1,
'ad':1,
'ap':0,
'tb':0,
'mb':0,
'eu':1,
'df':0 // this is not a default fig
};

window.orb=window.orb||{};
window.fig=window.fig||{};

if (window.name.match(/ orb_fig_referrer=([^ ]*)/)) {
    window.orb.referrer = decodeURIComponent(RegExp.$1);
    window.name = window.name.replace(/ orb_fig_referrer=([^ ]*)/, '');
}

if (window.name.match(/ orb_fig_last_hostname=([^ ]*)/)) {
    window.orb.lastHostname = decodeURIComponent(RegExp.$1);
    window.name = window.name.replace(/ orb_fig_last_hostname=([^ ]*)/, '');
}

//is fig.js loaded by the manager?
var figManagerLoaded = window.fig && window.fig.manager

//a default is set by figmanager that we should override.
if(figManagerLoaded && window.orb.fig && window.orb.fig.isDefault()) {
  window.fig.manager.setFig(window, o);
}

//if there is no fig manager then we may not have a fig at all.
if(!figManagerLoaded && !window.orb.fig) {
  window.orb.fig = function(k){return (arguments.length)? o[k]:o};
}

if (window.fig.async && typeof JSON != 'undefined') {
    var jsonFig = JSON.stringify(o);
    var date = new Date();
    date.setTime(date.getTime()+(24*60*60*1000));
    document.cookie = 'ckns_orb_cachedfig=' + jsonFig + '; expires=' + date.toGMTString() + '; path=/'
}

})();

orb._clientsideRedirect=function(h,o){var j=false,m;o=o||window;m=(o.document.cookie.match(/ckps_d=(.)/)?RegExp.$1:"");if(orb._redirectionIsEnabled(o)&&orb._dependenciesSatisfied(h,o)){var p=(o.location.hostname||"").toLowerCase(),a=(o.location.href||""),k={isUk:/(^|\.)bbc\.co\.uk$/i.test(p),isInt:/(^|\.)bbc\.com$/i.test(p),isMb:/^m\./i.test(p),isDesk:/^(www|pal)\./i.test(p)},c={isUk:h("uk"),isMb:h("mb")},n,b;if(o.bbcredirection.geo===true){if(k.isInt===true&&c.isUk===1){o.name+=" orb_fig_referrer="+encodeURIComponent(document.referrer);b=a.replace(/^(.+?bbc)\.com/i,"$1.co.uk")}else{if(k.isUk===true&&c.isUk===0){o.name+=" orb_fig_referrer="+encodeURIComponent(document.referrer);b=a.replace(/^(.+?bbc)\.co\.uk/i,"$1.com")}}}n=(b||a);if(o.bbcredirection.device===true){if(k.isDesk===true&&(m==="m"||(!m&&c.isMb===1))){o.name+=" orb_fig_referrer="+encodeURIComponent(document.referrer);n=n.replace(/^(https?:\/\/)(www|pal)\./i,"$1m.")}else{if(k.isMb===true&&(m==="d"||(!m&&c.isMb===0))){o.name+=" orb_fig_referrer="+encodeURIComponent(document.referrer);n=n.replace(/^(https?:\/\/)m\./i,"$1www.")}}}if(n&&a.toLowerCase()!==n.toLowerCase()){var l=o.orb&&o.orb.lastHostname===o.location.hostname;var g=o.orb&&o.orb.lastHostname&&n.indexOf(o.orb.lastHostname)>-1;var d=o.location.pathname==="/";try{if(!l&&(!g||d)){o.name+=" orb_fig_last_hostname="+o.location.hostname;j=true;o.location.replace(n)}}catch(i){j=false;o.require(["istats-1"],function(e){e.log("redirection_fail","",{})})}}}return j};orb._redirectionIsEnabled=function(a){return(a.bbcredirection&&(a.bbcredirection.geo===true||a.bbcredirection.device===true))};orb._dependenciesSatisfied=function(b,a){return(typeof b==="function"&&typeof a.location.replace!=="undefined")};orb.fig.device={};orb.fig.geo={};orb.fig.user={};orb.fig.device.isTablet=function(){return window.orb.fig("no")?undefined:window.orb.fig("tb")};orb.fig.device.isMobile=function(){return window.orb.fig("no")?undefined:window.orb.fig("mb")};orb.fig.geo.isUK=function(){return window.orb.fig("no")?undefined:window.orb.fig("uk")};orb.fig.geo.isEU=function(){return window.orb.fig("no")?undefined:window.orb.fig("eu")};window.orb.fig.isDefault=function(){return window.orb.fig("df")};      orb._clientsideRedirect(window.mockFig || window.orb.fig, window.mockWindow || window);
  