parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{}],"JNcL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.selectorId=exports.targetDate=void 0;const e="Oct 25, 2021";exports.targetDate=e;const t="timer-1";exports.selectorId="timer-1";
},{}],"iIDB":[function(require,module,exports) {
"use strict";var t=require("../data/timer");class e{constructor(t,e){this.targetDate=Date.parse(e),this.targetDate?(this.selectorId=t,this.timerContainer=document.getElementById(this.selectorId),this.timerContainer?(this.getRefsElem(),this.start()):alert('Not find tag with ID "'+t+'"')):alert('Target data is not correct "'+e+'"')}getRefsElem(){this.dayContainer=this.timerContainer.querySelector('span[data-value="days"]'),this.dayContainer?(this.hourContainer=this.timerContainer.querySelector('span[data-value="hours"]'),this.hourContainer?(this.minContainer=this.timerContainer.querySelector('span[data-value="mins"]'),this.minContainer?(this.secContainer=this.timerContainer.querySelector('span[data-value="secs"]'),this.secContainer||alert('Check tag with class .data-value="secs"')):alert('Check tag with class .data-value="mins"')):alert('Check tag with class .data-value="hours"')):alert('Check tag with class .data-value="days"')}start(){if(this.targetDate-Date.now()<=0){const t=new Date;alert("Target date/time must be greater than the current date "+t)}else this.timerID=setInterval(()=>{if(this.targetDate-Date.now()<=0)return alert("Time is over !!!"),void clearInterval(this.timerID);this.render(this.getTimeComponents(this.targetDate-Date.now()))},1e3)}render(t){this.dayContainer.textContent=t.days,this.hourContainer.textContent=t.hours,this.minContainer.textContent=t.mins,this.secContainer.textContent=t.secs}getTimeComponents(t){const e=[],a=this.pad(Math.floor(t/864e5)),r=this.pad(Math.floor(t%864e5/36e5)),s=this.pad(Math.floor(t%36e5/6e4)),i=this.pad(Math.floor(t%6e4/1e3));return e.days=a,e.hours=r,e.mins=s,e.secs=i,e}pad(t){return String(t).padStart(2,"0")}}const a=new e(t.selectorId,t.targetDate);
},{"../data/timer":"JNcL"}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./js/timer-countdown");
},{"./sass/main.scss":"clu1","./js/timer-countdown":"iIDB"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-timer/src.35b9347f.js.map