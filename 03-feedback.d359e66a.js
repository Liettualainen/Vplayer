!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,d=s||c||Function("return this")(),m=Object.prototype.toString,v=Math.max,p=Math.min,g=function(){return d.Date.now()};function y(e,t,n){var o,i,a,u,f,l,s=0,c=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function y(t){var n=o,r=i;return o=i=void 0,s=t,u=e.apply(r,n)}function w(e){return s=e,f=setTimeout(O,t),c?y(e):u}function S(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-s>=a}function O(){var e=g();if(S(e))return j(e);f=setTimeout(O,function(e){var n=t-(e-l);return d?p(n,a-(e-s)):n}(e))}function j(e){return f=void 0,m&&o?y(e):(o=i=void 0,u)}function k(){var e=g(),n=S(e);if(o=arguments,i=this,l=e,n){if(void 0===f)return w(l);if(d)return f=setTimeout(O,t),y(l)}return void 0===f&&(f=setTimeout(O,t)),u}return t=b(t)||0,h(n)&&(c=!!n.leading,a=(d="maxWait"in n)?v(b(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),k.cancel=function(){void 0!==f&&clearTimeout(f),s=0,o=l=i=f=void 0},k.flush=function(){return void 0===f?u:j(g())},k}function h(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(h(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=h(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=u.test(t);return r||f.test(t)?l(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return h(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:o,maxWait:t,trailing:i})};document.querySelector("#avatar");var w,S=document.querySelector(".img-area"),O=document.querySelector(".feedback-form"),j=O.elements,k=O.querySelector('[type="submit"]'),x="feedback-form-state",N={},T=[];function E(){if("checkbox"!==this.type&&"password"!==this.type&&"file"!==this.type)return N[this.name]=this.value,N.password="",localStorage.setItem(x,JSON.stringify(N)),void(N.password=w);if("checkbox"===this.type)return N[this.name]=this.checked,N.password="",localStorage.setItem(x,JSON.stringify(N)),void(N.password=w);if("password"===this.type)return N[this.name]="",localStorage.setItem(x,JSON.stringify(N)),N[this.name]=this.value,w=this.value,console.log("CurrentPassword",w),void console.log("formData",N);if("file"===this.type){var e=this.files[0];console.log("imageFile",e);var t=new FileReader;t.onload=function(){S.querySelectorAll("img").forEach((function(e){return e.remove()}));var n=t.result,o=document.createElement("img");o.src=n,S.appendChild(o),S.dataset.img=e.name};var n=t.readAsDataURL(e);return console.log("formData",n),N[this.name].files=e,N.password="",N.password=w,void console.log("formData",N)}}function I(){var n=JSON.parse(localStorage.getItem(x));if(n){for(var o in n)T.push(n[o]);for(var r=0;r<j.length;++r)"submit"!==j[r].type&&"button"!==j[r].type&&("checkbox"===j[r].type?j[r].checked=T[r]:"file"===j[r].type?j[r].file=T[r]:j[r].value=T[r])}else!function(){for(var e=0;e<j.length;++e)"submit"!==j[e].type&&(N[O.elements[e].name]="")}();!function(){var n=JSON.parse(localStorage.getItem(x));for(var o in n)N[o]=n[o];for(var r=0;r<j.length;r++)j[r].addEventListener("change",e(t)(E,500))}()}k.addEventListener("click",(function(){N.check?(O.reset(),console.log("formData is submited to backend:",N),N=null,N={},T.lenght=0,localStorage.removeItem(x),I()):alert("Please accept subscribe")})),I()}();
//# sourceMappingURL=03-feedback.d359e66a.js.map
