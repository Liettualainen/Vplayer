function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,s=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,f="object"==typeof self&&self&&self.Object===Object&&self,l=c||f||Function("return this")(),u=Object.prototype.toString,d=Math.max,m=Math.min,p=function(){return l.Date.now()};function g(e,t,n){var r,i,o,a,s,c,f=0,l=!1,u=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,o=i;return r=i=void 0,f=t,a=e.apply(o,n)}function v(e){return f=e,s=setTimeout(w,t),l?b(e):a}function S(e){var n=e-c;return void 0===c||n>=t||n<0||u&&e-f>=o}function w(){var e=p();if(S(e))return k(e);s=setTimeout(w,function(e){var n=t-(e-c);return u?m(n,o-(e-f)):n}(e))}function k(e){return s=void 0,g&&r?b(e):(r=i=void 0,a)}function O(){var e=p(),n=S(e);if(r=arguments,i=this,c=e,n){if(void 0===s)return v(c);if(u)return s=setTimeout(w,t),b(c)}return void 0===s&&(s=setTimeout(w,t)),a}return t=y(t)||0,h(n)&&(l=!!n.leading,o=(u="maxWait"in n)?d(y(n.maxWait)||0,t):o,g="trailing"in n?!!n.trailing:g),O.cancel=function(){void 0!==s&&clearTimeout(s),f=0,r=c=i=s=void 0},O.flush=function(){return void 0===s?a:k(p())},O}function h(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==u.call(e)}(e))return NaN;if(h(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=h(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||a.test(e)?s(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return h(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:r,maxWait:t,trailing:i})};const b=document.createElement("img"),v=document.querySelector(".img-area"),S=v.innerHTML,w=document.querySelector(".feedback-form"),k=w.elements,O=w.querySelector('[type="submit"]');let T,j={};const x=[];function N(){if("checkbox"!==this.type&&"password"!==this.type&&"file"!==this.type)return j[this.name]=this.value,j.password="",localStorage.setItem("feedback-form-state",JSON.stringify(j)),void(j.password=T);if("checkbox"===this.type)return j[this.name]=this.checked,j.password="",localStorage.setItem("feedback-form-state",JSON.stringify(j)),void(j.password=T);if("password"===this.type)return j[this.name]="",localStorage.setItem("feedback-form-state",JSON.stringify(j)),j[this.name]=this.value,T=this.value,void console.log("CurrentPassword:",T);if("file"===this.type){const e=this.files[0],t=new FileReader;return t.readAsDataURL(e),t.onload=()=>{const n=v.querySelectorAll("img");n.forEach((e=>e.remove())),n.src=t.result,j[this.name]=n.src,localStorage.setItem("feedback-form-state",JSON.stringify(j));const r=t.result;r&&(v.innerHTML=""),b.src=r,v.appendChild(b),v.dataset.img=e.name},void(j.password="")}}function E(){const n=JSON.parse(localStorage.getItem("feedback-form-state"));if(n){for(let e in n)x.push(n[e]);for(let e=0;e<k.length;++e)"submit"!==k[e].type&&"button"!==k[e].type&&("checkbox"===k[e].type?k[e].checked=x[e]:"file"===k[e].type?x[e]&&(k[e].src=x[e],b.src=k[e].src,v.innerHTML="",v.appendChild(b),v.dataset.img=k[e].name):k[e].value=x[e])}else!function(){for(let e=0;e<k.length;++e)"submit"!==k[e].type&&(j[w.elements[e].name]="")}();!function(){{let e=JSON.parse(localStorage.getItem("feedback-form-state"));for(let t in e)j[t]=e[t]}for(let n=0;n<k.length;n++)k[n].addEventListener("change",e(t)(N,500))}()}O.addEventListener("click",(function(){j.check?(b.remove(),v.innerHTML=S,w.reset(),console.log("formData is submited to backend:",j),j=null,j={},x.lenght=0,localStorage.removeItem("feedback-form-state"),E()):alert("Please accept subscribe")})),E();
//# sourceMappingURL=03-feedback.ca055822.js.map