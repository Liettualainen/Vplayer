!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,d=f||l||Function("return this")(),m=Object.prototype.toString,p=Math.max,v=Math.min,y=function(){return d.Date.now()};function g(e,t,n){var r,o,a,u,s,c,f=0,l=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(i);function g(t){var n=r,i=o;return r=o=void 0,f=t,u=e.apply(i,n)}function S(e){return f=e,s=setTimeout(O,t),l?g(e):u}function w(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-f>=a}function O(){var e=y();if(w(e))return T(e);s=setTimeout(O,function(e){var n=t-(e-c);return d?v(n,a-(e-f)):n}(e))}function T(e){return s=void 0,m&&r?g(e):(r=o=void 0,u)}function j(){var e=y(),n=w(e);if(r=arguments,o=this,c=e,n){if(void 0===s)return S(c);if(d)return s=setTimeout(O,t),g(c)}return void 0===s&&(s=setTimeout(O,t)),u}return t=b(t)||0,h(n)&&(l=!!n.leading,a=(d="maxWait"in n)?p(b(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),j.cancel=function(){void 0!==s&&clearTimeout(s),f=0,r=c=o=s=void 0},j.flush=function(){return void 0===s?u:T(y())},j}function h(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(h(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=h(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=u.test(t);return i||s.test(t)?c(t.slice(2),i?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return h(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:r,maxWait:t,trailing:o})};var S,w=document.createElement("img"),O=document.querySelector(".img-area"),T=O.innerHTML,j=document.querySelector(".feedback-form"),k=j.elements,N=j.querySelector('[type="submit"]'),x="feedback-form-state",I={},M=[];function E(){if("checkbox"!==this.type&&"password"!==this.type&&"file"!==this.type)return I[this.name]=this.value,I.password="",localStorage.setItem(x,JSON.stringify(I)),void(I.password=S);if("checkbox"===this.type)return I[this.name]=this.checked,I.password="",localStorage.setItem(x,JSON.stringify(I)),void(I.password=S);if("password"===this.type)return I[this.name]="",localStorage.setItem(x,JSON.stringify(I)),I[this.name]=this.value,S=this.value,void console.log("CurrentPassword:",S);if("file"===this.type){var e=this,t=this.files[0],n=new FileReader;return n.readAsDataURL(t),n.onload=function(){var r=O.querySelectorAll("img");r.forEach((function(e){return e.remove()})),r.src=n.result,I[e.name]=r.src,localStorage.setItem(x,JSON.stringify(I));var i=n.result;i&&(O.innerHTML=""),w.src=i,O.appendChild(w),O.dataset.img=t.name},void(I.password="")}}function L(){var n=JSON.parse(localStorage.getItem(x));if(n){for(var r in n)M.push(n[r]);for(var i=0;i<k.length;++i)"submit"!==k[i].type&&"button"!==k[i].type&&("checkbox"===k[i].type?k[i].checked=M[i]:"file"===k[i].type?M[i]&&(k[i].src=M[i],w.src=k[i].src,O.innerHTML="",O.appendChild(w),O.dataset.img=k[i].name):k[i].value=M[i])}else!function(){for(var e=0;e<k.length;++e)"submit"!==k[e].type&&(I[j.elements[e].name]="")}();!function(){var n=JSON.parse(localStorage.getItem(x));for(var r in n)I[r]=n[r];for(var i=0;i<k.length;i++)k[i].addEventListener("change",e(t)(E,500))}()}N.addEventListener("click",(function(){I.check?(w.remove(),O.innerHTML=T,j.reset(),console.log("formData is submited to backend:",I),I=null,I={},M.lenght=0,localStorage.removeItem(x),L()):alert("Please accept subscribe")})),L()}();
//# sourceMappingURL=03-feedback.a4d3319c.js.map