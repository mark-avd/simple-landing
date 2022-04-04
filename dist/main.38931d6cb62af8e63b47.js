!function(){"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var t=document.querySelector(".form__dropzone"),n=document.querySelector(".filePreview__name"),r=document.querySelector(".fileInput"),i=document.querySelector(".filePreview__details"),a=document.querySelector(".filePreview__thumbnail"),o=document.querySelector(".button_add"),l=document.querySelector(".filePreview__bin");t.addEventListener("dragenter",(function(e){return s(e)})),t.addEventListener("dragover",(function(e){return s(e)})),t.addEventListener("drop",(function(e){return s(e)})),r.addEventListener("change",(function(e){return u(e)})),o.addEventListener("click",(function(e){r.click(),e.preventDefault()})),l.addEventListener("click",(function(){r.value="",a.src="",y.classList.toggle("hide"),g.file=!1,L()}));var c,s=function(e){e.preventDefault(),"drop"===e.type&&(r.files=e.dataTransfer.files,u(e),g.file=!0,L())},u=function(e){var t="drop"===e.type?e.dataTransfer.files[0]:e.target.files[0],r=t.name,o=t.size,l=String(o/1024/1024).slice(0,3)+" mb",c=r.indexOf("."),s=r.substring(c+1).toUpperCase(),u=r.substring(0,c);u.length>15&&(u=u.substring(0,16)+"..."),a.src=URL.createObjectURL(t),n.innerHTML=u,i.innerHTML=s+" "+l,y.classList.remove("hide")},d=document.querySelector(".form__main"),f=document.querySelector(".section"),m=document.querySelector(".form__dropzone"),v=document.querySelector(".form__files"),y=document.querySelector(".form__filePreview"),_=document.querySelector(".button_send"),p=document.querySelector(".form__sending-status"),h=/^[a-zA-Z\s]*$/,g={name:!1,gender:!1,country:!1,city:!1,dateOfBirth:!1,file:!1},L=function(){var e=Object.values(g).reduce((function(e,t){return e+t}));e>=6&&(_.disabled=!1),e<6&&(_.disabled=!0)},b=function(e){!function(e){"name"!==e.name&&"country"!==e.name&&"city"!==e.name||(""===e.value&&(e.nextElementSibling.textContent="The field is required",e.classList.add("input_error"),g["".concat(e.name)]=!1),h.test(e.value)||(e.nextElementSibling.textContent="Only latin letters and spaces are allowed",e.classList.add("input_error"),g["".concat(e.name)]=!1),""!==e.value&&h.test(e.value)&&(e.nextElementSibling.textContent="",e.classList.remove("input_error"),g["".concat(e.name)]=!0)),"gender"===e.name&&"default"!==e.value&&(g.gender=!0),"bDate"===e.name&&(Date.parse(e.value)<Date.parse("1940-01-01")&&(e.nextElementSibling.textContent="Enter correct date of birth",e.classList.add("input_error"),g.dateOfBirth=!1),Date.parse(e.value)>Date.parse("1940-01-01")&&(e.nextElementSibling.textContent="",e.classList.remove("input_error"),g.dateOfBirth=!0),Date.parse(e.value)>Date.parse("2008-01-01")&&(e.nextElementSibling.textContent="Enter correct date of birth",e.classList.add("input_error"),g.dateOfBirth=!1)),"file"===e.name&&e.files.length&&(g.file=!0)}(e),L(),g.name&&g.gender&&(f.classList.remove("hide"),g.dateOfBirth&&g.city&&g.country&&m.classList.remove("hide"))},S=function(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,n)}(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var i=0,a=function(){};return{s:a,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var e=r.next();return l=e.done,e},e:function(e){c=!0,o=e},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw o}}}}(d.elements);try{var E=function(){var e=c.value;"BUTTON"!==e.tagName&&e.addEventListener("input",(function(){return b(e)}))};for(S.s();!(c=S.n()).done;)E()}catch(e){S.e(e)}finally{S.f()}d.addEventListener("submit",(function(e){e.preventDefault(),d.reset(),v.removeChild(y),_.disabled=!0,p.classList.remove("hide")})),window.addEventListener("keypress",(function(e){"Enter"===e.key&&e.preventDefault()}));var q,w=document.querySelectorAll(".slider__wrapper .slider__line .slider__slide"),x=document.querySelector(".slider__line"),O=document.querySelectorAll(".slider__dot"),k=0,D=function(){O.forEach((function(e){return e.classList.remove("slider__dot_active")})),O[k].classList.add("slider__dot_active")},A=function(){x.style.transform="translate(-"+k*q+"px)"},C=function(e){e.target.classList.contains("dot1")&&(x.style.transform="translate(0)",k=0),e.target.classList.contains("dot2")&&(x.style.transform="translate(-"+1/3*100+"%)",k=1),e.target.classList.contains("dot3")&&(x.style.transform="translate(-"+2/3*100+"%)",k=2),D()},T=function(e,t){"prev"===t&&--k<0&&(k=w.length-1),"next"===t&&++k>=w.length&&(k=0),A(),D()};x.addEventListener("click",D),O[0].addEventListener("click",C),O[1].addEventListener("click",C),O[2].addEventListener("click",C),document.querySelector(".slider__switch_left").addEventListener("click",(function(e){T(0,"prev")})),document.querySelector(".slider__switch_right").addEventListener("click",(function(e){T(0,"next")}));var B=function(){q=document.querySelector(".slider__wrapper").offsetWidth,x.style.width=q*w.length+"px",w.forEach((function(e){e.style.width=q+"px",e.style.height="535px"})),A(),D()};window.addEventListener("resize",B),B()}();