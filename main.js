/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){e=function(){return n};var r,n={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(r){f=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,i=Object.create(o.prototype),c=new P(n||[]);return a(i,"_invoke",{value:C(t,r,c)}),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=p;var h="suspendedStart",y="suspendedYield",v="executing",m="completed",_={};function b(){}function g(){}function w(){}var S={};f(S,u,(function(){return this}));var L=Object.getPrototypeOf,E=L&&L(L(T([])));E&&E!==o&&i.call(E,u)&&(S=E);var x=w.prototype=b.prototype=Object.create(S);function k(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function q(e,r){function n(o,a,c,u){var s=d(e[o],e,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==t(f)&&i.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)}var o;a(this,"_invoke",{value:function(t,e){function i(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(i,i):i()}})}function C(t,e,n){var o=h;return function(i,a){if(o===v)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:r,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=j(c,n);if(u){if(u===_)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=d(t,e,n);if("normal"===s.type){if(o=n.done?m:y,s.arg===_)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function j(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),_;var i=d(o,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,_;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,_):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,_)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function T(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function t(){for(;++o<e.length;)if(i.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=r,t.done=!0,t};return a.next=a}}throw new TypeError(t(e)+" is not iterable")}return g.prototype=w,a(x,"constructor",{value:w,configurable:!0}),a(w,"constructor",{value:g,configurable:!0}),g.displayName=f(w,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,f(t,l,"GeneratorFunction")),t.prototype=Object.create(x),t},n.awrap=function(t){return{__await:t}},k(q.prototype),f(q.prototype,s,(function(){return this})),n.AsyncIterator=q,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new q(p(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(x),f(x,l,"Generator"),f(x,u,(function(){return this})),f(x,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=T,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(A),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,_):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),_},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),A(r),_}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;A(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:T(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),_}},n}function r(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)}))}}var o={baseUrl:"https://nomoreparties.co/v1/wff-cohort-29",headers:{authorization:"0c5598f1-ce23-4f59-9db5-59c53bd41d35","Content-Type":"application/json"}},i=function(t){return t.ok?t.json():Promise.reject("Ошибка ".concat(t.status))};function a(){return(a=n(e().mark((function t(){var r;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(o.baseUrl,"/users/me"),{headers:o.headers});case 2:return r=t.sent,t.abrupt("return",r.json());case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function c(){return(c=n(e().mark((function t(){var r;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(o.baseUrl,"/cards"),{headers:o.headers});case 2:return r=t.sent,t.abrupt("return",r.json());case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function u(){return(u=n(e().mark((function t(r,n){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:fetch("".concat(o.baseUrl,"/users/me"),{method:"PATCH",headers:o.headers,body:JSON.stringify({name:r,about:n})});case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function s(){return(s=n(e().mark((function t(r,n){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(o.baseUrl,"/cards"),{method:"POST",headers:o.headers,body:JSON.stringify({name:r,link:n})}).then(i));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(){return(l=n(e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:fetch("".concat(o.baseUrl,"/cards/").concat(r),{method:"DELETE",headers:o.headers}).then(i);case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(){return(f=n(e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(o.baseUrl,"/cards/likes/").concat(r),{method:"PUT",headers:o.headers}).then(i));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(){return(p=n(e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(o.baseUrl,"/cards/likes/").concat(r),{method:"DELETE",headers:o.headers}).then(i));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(){return(d=n(e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(o.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:o.headers,body:JSON.stringify({avatar:r})}).then(i));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var h=function(t,e,r){var n=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0),o=n.querySelector(".card__delete-button"),i=n.querySelector(".card__image"),a=n.querySelector(".card__like-button"),c=n.querySelector(".card__like-count"),u=t.owner._id,s=r._id,d=t.likes.length;return s!==u&&(o.style.visibility="hidden"),c.textContent=d,n.querySelector(".card__title").textContent=t.name,i.src=t.link,i.alt=t.name,a.addEventListener("click",(function(){!function(t,e,r){t.classList.value.includes("card__like-button_is-active")?function(t){return p.apply(this,arguments)}(e._id).then((function(e){t.classList.remove("card__like-button_is-active"),console.log(e),r.textContent=e.likes.length})).catch((function(t){console.log(t)})):function(t){return f.apply(this,arguments)}(e._id).then((function(e){t.classList.add("card__like-button_is-active"),console.log(e),r.textContent=e.likes.length})).catch((function(t){console.log(t)}))}(a,t,c)})),o.addEventListener("click",(function(){!function(t){t.remove()}(n),function(t){l.apply(this,arguments)}(t._id)})),i.addEventListener("click",(function(){e(t.name,t.link)})),t.likes.some((function(t){return t._id===r._id}))&&a.classList.add("card__like-button_is-active"),n},y=function(t){t.classList.add("popup_is-opened"),document.addEventListener("keydown",m)},v=function(t){t.classList.remove("popup_is-opened"),document.removeEventListener("keydown",m)};function m(t){"Escape"===t.key&&v(document.querySelector(".popup_is-opened"))}var _=function(t,e,r){var n=t.querySelector(".".concat(e.id,"-error"));e.classList.remove(r.inputErrorClass),n.classList.remove(r.errorClass),n.textContent=""};function b(t,e,r){!function(t){return t.some((function(t){return!t.validity.valid}))}(t)?(e.disabled=!1,e.classList.remove(r.inactiveButtonClass)):(e.disabled=!0,e.classList.add(r.inactiveButtonClass))}function g(t,e){var r=Array.from(t.querySelectorAll(e.inputSelector)),n=t.querySelector(e.submitButtonSelector);r.forEach((function(r){_(t,r,e)})),b(r,n,e)}function w(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}var S,L=document.querySelector(".profile__image"),E=document.querySelector(".profile__title"),x=document.querySelector(".profile__description"),k=document.querySelector(".profile__add-button"),q=document.querySelector(".popup_type_new-card"),C=document.querySelector(".places__list"),j=document.querySelectorAll(".popup"),O=document.querySelectorAll(".popup__close"),A=document.querySelector(".profile__edit-button"),P=document.querySelector(".popup_type_edit"),T=document.forms["edit-profile"],N=document.querySelector(".popup__input_type_name"),U=document.querySelector(".popup__input_type_description"),G=document.forms["new-place"],B=document.querySelector(".popup__input_type_card-name"),I=document.querySelector(".popup__input_type_url"),D=document.querySelector(".popup_type_image"),F=D.querySelector(".popup__image"),M=D.querySelector(".popup__caption"),H=document.querySelector(".popup__input_type_avatar_url"),J=document.querySelector(".popup_type_edit_avatar"),V=document.querySelector(".profile__image-container"),Y=document.forms["edit-avatar"],z={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_inactive",inputErrorClass:"popup__input_type_error",errorClass:"form__input-error_active"};Promise.all([function(){return a.apply(this,arguments)}(),function(){return c.apply(this,arguments)}()]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,c=[],u=!0,s=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){s=!0,o=t}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return c}}(e,r)||function(t,e){if(t){if("string"==typeof t)return w(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?w(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];S=o,E.textContent=o.name,x.textContent=o.about,L.src=o.avatar,i.forEach((function(t){C.append(h(t,$,o))}))})).catch((function(t){console.error(t)}));var $=function(t,e){F.src=e,F.alt=t,M.textContent=t,y(D),g(G,z)};A.addEventListener("click",(function(){y(P),N.value=E.textContent,U.value=x.innerHTML,g(T,z)})),V.addEventListener("click",(function(){y(J),g(Y,z)})),T.addEventListener("submit",(function(t){t.preventDefault();var e=N.value,r=U.value,n=T.querySelector(".popup__button");n.textContent="Сохранение...",function(t,e){return u.apply(this,arguments)}(e,r).then((function(){v(P),E.textContent=e,x.textContent=r})).catch((function(t){console.log(t)})).finally((function(){n.textContent="Сохранить"}))})),k.addEventListener("click",(function(){y(q)})),O.forEach((function(t){t.addEventListener("click",(function(){var e=t.closest(".popup");v(e)}))})),function(t){t.forEach((function(t){t.addEventListener("click",(function(e){e.target.classList.contains("popup")&&v(t)}))}))}(j),G.addEventListener("submit",(function(t){t.preventDefault();var e=B.value,r=I.value,n=G.querySelector(".popup__button"),o=n.value;n.textContent="Сохранение...",function(t,e){return s.apply(this,arguments)}(e,r).then((function(t){v(q),C.prepend(h(t,$,S))})).catch((function(t){console.log(t)})).finally((function(){n.textContent=o})),B.value="",I.value=""})),j.forEach((function(t){t.classList.add("popup_is-animated")})),Y.addEventListener("submit",(function(t){t.preventDefault();var e=H.value,r=Y.querySelector(".popup__button"),n=r.value;r.textContent="Сохранение...",function(t){return d.apply(this,arguments)}(e).then((function(t){L.src=t.avatar,v(J)})).catch((function(t){console.log(t)})).finally((function(){r.textContent=n}))})),function(t){Array.from(document.querySelectorAll(t.formSelector)).forEach((function(e){!function(t,e){var r=Array.from(t.querySelectorAll(e.inputSelector)),n=t.querySelector(e.submitButtonSelector);r.forEach((function(o){o.addEventListener("input",(function(){!function(t,e,r){e.validity.patternMismatch?e.setCustomValidity(e.dataset.errorMessage):e.setCustomValidity(""),e.validity.valid?_(t,e,r):function(t,e,r,n){var o=t.querySelector(".".concat(e.id,"-error"));e.classList.add(n.inputErrorClass),o.textContent=r,o.classList.add(n.errorClass)}(t,e,e.validationMessage,r)}(t,o,e),b(r,n,e)}))}))}(e,t)}))}(z)})();