document.querySelector(".gallery");const e=document.querySelector(".feedback-form"),t=e.elements;function o(){"checkbox"!==this.type?(localStorage.setItem(this.name,this.value),console.log(this.name,this.value)):(localStorage.setItem(this.name,this.checked),console.log("checkbox:",this.name,JSON.stringify(this.checked)))}e.querySelector('[type="submit"]').addEventListener("click",(function(){for(let e=0;e<t.length;e++)localStorage.removeItem(t[e].name)})),function(){for(let e=0;e<t.length;e++)"submit"!==t[e].type&&("checkbox"===t[e].type?(t[e].checked=JSON.parse(localStorage.getItem(t[e].name)),console.log("checkbox",localStorage.getItem(t[e].name))):(t[e].value=localStorage.getItem(t[e].name),console.log(localStorage.getItem(t[e].name))));!function(){for(let e=0;e<t.length;e++)t[e].addEventListener("change",o)}()}();
//# sourceMappingURL=04-storage.09337dc2.js.map