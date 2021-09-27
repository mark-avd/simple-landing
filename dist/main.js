/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss":
/*!****************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss ***!
  \****************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".slider__container {\n  display: flex;\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));\n  border-radius: 32px;\n  overflow: hidden;\n}\n.slider__container img {\n  object-fit: cover;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"Montserrat\", sans-serif;\n  background-color: #F8F3FF;\n  color: #303030;\n}\n\nh1 {\n  font-size: 56px;\n}\n\nh2 {\n  font-weight: 800;\n  font-size: 40px;\n  line-height: 72px;\n}\n\nh3 {\n  font-weight: 800;\n  font-size: 27px;\n  line-height: 36px;\n}\n\n.vector {\n  position: absolute;\n}\n\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 26px 0;\n}\n.header a {\n  color: #8E43ED;\n  text-decoration: none;\n  padding: 0 32px;\n}\n\n.header__vectors {\n  margin-left: 64px;\n}\n\n.header__links {\n  margin-right: 144px;\n}\n\n#main {\n  display: flex;\n  align-items: center;\n  background-color: #fff;\n  border-radius: 220px 0;\n}\n@media screen and (max-width: 1100px) {\n  #main {\n    flex-direction: column;\n    align-items: baseline;\n    padding-bottom: 60px;\n  }\n}\n#main .photo {\n  border-radius: 32px;\n}\n\n.info__photo {\n  position: relative;\n  margin: 100px 0 100px 64px;\n}\n\n.info__container {\n  margin: 0 176px 0 32px;\n}\n.info__container h1, .info__container h3 {\n  margin-bottom: 24px;\n}\n\n.info__main {\n  margin-bottom: 64px;\n}\n.info__main p {\n  display: inline-block;\n  margin-right: 8px;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 21px;\n}\n.info__main span {\n  color: #AA7ECD;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 21px;\n}\n\n.info__about p {\n  color: #000;\n  font-weight: normal;\n  font-size: 18px;\n  line-height: 178%;\n}\n\n.vector__main--s {\n  left: -57px;\n  bottom: 105px;\n}\n\n.vector__main--m {\n  left: -64px;\n  bottom: -55px;\n}\n\n#form {\n  position: relative;\n}\n#form h2 {\n  margin: 56px 0 20px 0;\n}\n#form label {\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 19px;\n  display: inline-block;\n  margin: 20px 32px 20px 0;\n}\n\ninput, select {\n  background: #FFFFFF;\n  border: 1px solid #D9BBFF;\n  border-radius: 12px;\n  font-size: 16px;\n  padding: 16px;\n}\ninput:invalid, select:invalid {\n  color: #9F9F9F;\n}\ninput:focus:required, select:focus:required {\n  outline: none;\n  border-color: #8E43ED;\n  box-shadow: 0 0 1px #8E43ED;\n}\n\ninput[type=text], input[type=date], select {\n  width: 301px;\n}\n\n.form__main {\n  margin: 0 64px;\n}\n\n.form__fields {\n  display: flex;\n  flex-direction: column;\n}\n\nselect {\n  color: gray;\n}\n\n.form__dropzone {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 24px;\n  margin-top: 36px;\n  background: #FFFFFF;\n  border: 1px dashed #D9BBFF;\n  box-sizing: border-box;\n  border-radius: 12px;\n  max-width: 976px;\n}\n.form__dropzone span {\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 24px;\n  color: #9993BD;\n  margin: 0 16px;\n}\n\n.form__files {\n  display: flex;\n  margin-top: 8px;\n}\n\n.form__filePreview {\n  display: flex;\n  justify-content: space-between;\n  width: 256px;\n  background: #FFFFFF;\n  border: 1px solid #D9BBFF;\n  border-radius: 12px;\n  padding-right: 17px;\n}\n\n.filePreview__container {\n  display: flex;\n  align-items: center;\n}\n\n.filePreview__thumbnail {\n  object-fit: cover;\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  margin: 8px 8px 8px 12px;\n}\n\n.filePreview__name {\n  font-size: 14px;\n  line-height: 18px;\n}\n\n.filePreview__details {\n  font-size: 12px;\n  line-height: 18px;\n  color: #AFAFAF;\n}\n\n.hide {\n  visibility: hidden;\n}\n\n.fileInput {\n  display: none;\n}\n\n.btn {\n  background-color: #8E43ED;\n  border: 1px solid #8E43ED;\n  border-radius: 12px;\n  color: #fff;\n  cursor: pointer;\n  width: 211px;\n  height: 56px;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 24px;\n}\n.btn:active {\n  background-color: #500AA9;\n  border-color: #500AA9;\n}\n.btn:hover {\n  background-color: #6813D3;\n  border-color: #6813D3;\n}\n.btn:disabled {\n  background-color: #DED9E4;\n  border-color: #DED9E4;\n  cursor: auto;\n}\n\n.secondary {\n  color: #8E43ED;\n  background-color: #fff;\n}\n.secondary:active {\n  background-color: #F0E5FE;\n}\n.secondary:hover {\n  background-color: #FAF8FE;\n  border-color: #6813D3;\n}\n.secondary:disabled {\n  background-color: #fff;\n  border-color: #D9BBFF;\n  color: #D9BBFF;\n  cursor: auto;\n}\n\n.btn--send {\n  margin: 28px 0 48px 0;\n}\n\n.btn--add {\n  margin: 24px 0;\n}\n\n.vector__form {\n  z-index: -1;\n}\n@media screen and (max-width: 700px) {\n  .vector__form {\n    display: none;\n  }\n}\n\n.vector__form--m {\n  top: -15px;\n  left: -2px;\n}\n\n.vector__form--s {\n  top: 118px;\n  left: 173px;\n}\n\n.vector__form--b {\n  top: 256px;\n  left: 0px;\n}\n\n.vector__form--mc {\n  top: -24px;\n  right: -2px;\n}\n\n.vector__form--sc {\n  top: 94px;\n  right: 173px;\n}\n\n.vector__form--bc {\n  top: 232px;\n  right: 0px;\n}\n\n#slider {\n  background-color: #fff;\n}\n\n.slider__wrapper {\n  padding: 56px 64px;\n}\n\n.slider__container {\n  position: relative;\n  margin: auto;\n}\n\n.slide {\n  display: none;\n}\n\n.prev, .next {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  width: auto;\n  margin-top: -22px;\n  padding: 16px;\n  color: white;\n  font-weight: bold;\n  font-size: 18px;\n  transition: 0.6s ease;\n  border-radius: 0 3px 3px 0;\n  user-select: none;\n}\n\n.next {\n  right: 0;\n  border-radius: 3px 0 0 3px;\n}\n\n.prev:hover, .next:hover {\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n.text {\n  color: #f2f2f2;\n  font-size: 15px;\n  padding: 8px 12px;\n  position: absolute;\n  bottom: 8px;\n  width: 100%;\n  text-align: center;\n  align-items: center;\n}\n\n.dot {\n  cursor: pointer;\n  height: 15px;\n  width: 15px;\n  margin: 0 2px;\n  background-color: #bbb;\n  border-radius: 50%;\n  display: inline-block;\n  transition: background-color 0.6s ease;\n}\n\n.active, .dot:hover {\n  background-color: #717171;\n}", "",{"version":3,"sources":["webpack://./crousel.scss","webpack://./styles.scss"],"names":[],"mappings":"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","sourcesContent":[".slider__container {\r\n  display: flex;\r\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));\r\n  border-radius: 32px;\r\n  overflow: hidden;\r\n  img {\r\n    object-fit: cover;\r\n  }\r\n}","@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');\r\n@import 'crousel';\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: 'Montserrat', sans-serif;\r\n    background-color: #F8F3FF;\r\n    color: #303030;\r\n\r\n}\r\n\r\nh1 {\r\n\r\n    font-size: 56px;\r\n}\r\n\r\nh2 {\r\n    font-weight: 800;\r\n    font-size: 40px;\r\n    line-height: 72px;\r\n}\r\n\r\nh3 {\r\n    font-weight: 800;\r\n    font-size: 27px;\r\n    line-height: 36px;\r\n}\r\n\r\n.vector {\r\n    position: absolute;\r\n}\r\n\r\n// HEADER ----------------\r\n\r\n.header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 26px 0;\r\n    a {\r\n        color: #8E43ED;\r\n        text-decoration: none;\r\n        padding: 0 32px;\r\n    }\r\n}\r\n\r\n.header__vectors {\r\n    margin-left: 64px;\r\n}\r\n\r\n.header__links {\r\n    margin-right: 144px;\r\n}\r\n\r\n// MAIN ----------------\r\n#main {\r\n    display: flex;\r\n    align-items: center;\r\n    background-color: #fff;\r\n    border-radius: 220px 0;\r\n\r\n    @media screen and (max-width: 1100px){\r\n        flex-direction: column;\r\n        align-items: baseline;\r\n        padding-bottom: 60px;\r\n    }\r\n\r\n    .photo {\r\n        border-radius: 32px;\r\n\r\n    }\r\n}\r\n\r\n.info__photo {\r\n    position: relative;\r\n    margin: 100px 0 100px 64px;\r\n}\r\n\r\n.info__container {\r\n    margin: 0 176px 0 32px;\r\n\r\n    h1, h3 {\r\n        margin-bottom: 24px;\r\n    }\r\n}\r\n\r\n.info__main {\r\n    margin-bottom: 64px;\r\n    p {\r\n        display: inline-block;\r\n        margin-right: 8px;\r\n        font-weight: 500;\r\n        font-size: 16px;\r\n        line-height: 21px;\r\n    }\r\n    span {\r\n        color: #AA7ECD;\r\n        font-weight: bold;\r\n        font-size: 16px;\r\n        line-height: 21px;\r\n    }\r\n}\r\n\r\n.info__about {\r\n    p {\r\n        color: #000;\r\n        font-weight: normal;\r\n        font-size: 18px;\r\n        line-height: 178%;\r\n    }\r\n}\r\n\r\n.vector__main--s {\r\n    left: -57px;\r\n    bottom: 105px;\r\n}\r\n\r\n.vector__main--m {\r\n    left: -64px;\r\n    bottom: -55px;\r\n}\r\n\r\n// FORM ----------------\r\n\r\n#form {\r\n    position: relative;\r\n    h2 {\r\n        margin: 56px 0 20px 0;\r\n    }\r\n\r\n    label {\r\n        font-weight: 600;\r\n        font-size: 14px;\r\n        line-height: 19px;\r\n        display: inline-block;\r\n        margin: 20px 32px 20px 0;\r\n\r\n    }\r\n}\r\n\r\ninput, select {\r\n    background: #FFFFFF;\r\n    border: 1px solid #D9BBFF;\r\n    border-radius: 12px;\r\n    font-size: 16px;\r\n    padding: 16px;\r\n\r\n    &:invalid {\r\n        color: #9F9F9F;\r\n    }\r\n\r\n    &:focus:required {\r\n        outline: none;\r\n        border-color: #8E43ED;\r\n        box-shadow: 0 0 1px #8E43ED;\r\n    }\r\n\r\n}\r\n\r\ninput[type=text], input[type=date], select {\r\n    width: 301px;\r\n}\r\n\r\n.form__main {\r\n    margin: 0 64px;\r\n}\r\n\r\n.form__fields {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\nselect {\r\n    color: gray;\r\n\r\n}\r\n\r\n.form__dropzone {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 24px;\r\n    margin-top: 36px;\r\n\r\n    background: #FFFFFF;\r\n    border: 1px dashed #D9BBFF;\r\n    box-sizing: border-box;\r\n    border-radius: 12px;\r\n    max-width: 976px;\r\n\r\n    span {\r\n        font-weight: 500;\r\n        font-size: 16px;\r\n        line-height: 24px;\r\n        color: #9993BD;\r\n        margin: 0 16px;\r\n    }\r\n\r\n}\r\n\r\n.form__files {\r\n    display: flex;\r\n    margin-top: 8px;\r\n}\r\n\r\n.form__filePreview {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 256px;\r\n    background: #FFFFFF;\r\n    border: 1px solid #D9BBFF;\r\n    border-radius: 12px;\r\n    padding-right: 17px;\r\n}\r\n\r\n.filePreview__container {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.filePreview__thumbnail {\r\n    object-fit: cover;\r\n    height: 40px;\r\n    width: 40px;\r\n    border-radius: 50%;\r\n    margin: 8px 8px 8px 12px;\r\n}\r\n\r\n.filePreview__name {\r\n    font-size: 14px;\r\n    line-height: 18px;\r\n}\r\n\r\n.filePreview__details {\r\n    font-size: 12px;\r\n    line-height: 18px;\r\n    color: #AFAFAF;\r\n}\r\n\r\n.hide {\r\n    visibility: hidden;\r\n}\r\n\r\n.fileInput {\r\n    display: none;\r\n}\r\n\r\n.btn {\r\n    background-color: #8E43ED;\r\n    border: 1px solid #8E43ED;\r\n    border-radius: 12px;\r\n    color: #fff;\r\n    cursor: pointer;\r\n\r\n    width: 211px;\r\n    height: 56px;\r\n\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    line-height: 24px;\r\n\r\n    &:active {\r\n        background-color: #500AA9;\r\n        border-color: #500AA9;\r\n    }\r\n\r\n    &:hover {\r\n        background-color: #6813D3;\r\n        border-color: #6813D3;\r\n    }\r\n\r\n    &:disabled {\r\n        background-color: #DED9E4;\r\n        border-color: #DED9E4;\r\n        cursor: auto;\r\n    }\r\n}\r\n\r\n.secondary {\r\n    color: #8E43ED;\r\n    background-color: #fff;\r\n\r\n    &:active {\r\n        background-color: #F0E5FE;\r\n    }\r\n\r\n    &:hover {\r\n        background-color: #FAF8FE;\r\n        border-color: #6813D3;\r\n    }\r\n\r\n    &:disabled {\r\n        background-color: #fff;\r\n        border-color: #D9BBFF;\r\n        color: #D9BBFF;\r\n        cursor: auto;\r\n    }\r\n\r\n}\r\n\r\n.btn--send {\r\n    margin: 28px 0 48px 0;\r\n}\r\n\r\n.btn--add {\r\n    margin: 24px 0;\r\n}\r\n\r\n.vector__form{\r\n    z-index: -1;\r\n    @media screen and (max-width: 700px){\r\n        display: none;\r\n    }\r\n}\r\n\r\n.vector__form--m {\r\n    top: 56 - 71px;\r\n    left: -50 + 48px;\r\n}\r\n\r\n.vector__form--s {\r\n    top: 189 - 71px;\r\n    left: 173px;\r\n}\r\n\r\n.vector__form--b {\r\n    top: 327 - 71px;\r\n    left: -100 + 100px;\r\n}\r\n\r\n.vector__form--mc {\r\n    top: 47 - 71px;\r\n    right: -50 + 48px;\r\n}\r\n\r\n.vector__form--sc {\r\n    top: 165 - 71px;\r\n    right: 173px;\r\n}\r\n\r\n.vector__form--bc {\r\n    top: 303 - 71px;\r\n    right: 100 - 100px;\r\n\r\n}\r\n\r\n// SLIDER ----------------\r\n\r\n#slider {\r\n    background-color: #fff;\r\n}\r\n\r\n.slider__wrapper {\r\n    padding: 56px 64px;\r\n}\r\n\r\n.slider__container {\r\n    position: relative;\r\n    margin: auto;\r\n}\r\n\r\n.slide {\r\n    display: none;\r\n}\r\n\r\n.prev, .next {\r\n    cursor: pointer;\r\n    position: absolute;\r\n    top: 50%;\r\n    width: auto;\r\n    margin-top: -22px;\r\n    padding: 16px;\r\n    color: white;\r\n    font-weight: bold;\r\n    font-size: 18px;\r\n    transition: 0.6s ease;\r\n    border-radius: 0 3px 3px 0;\r\n    user-select: none;\r\n}\r\n\r\n.slide {\r\n\r\n}\r\n\r\n.next {\r\n    right: 0;\r\n    border-radius: 3px 0 0 3px;\r\n}\r\n\r\n.prev:hover, .next:hover {\r\n    background-color: rgba(0,0,0,0.8);\r\n}\r\n\r\n.text {\r\n    color: #f2f2f2;\r\n    font-size: 15px;\r\n    padding: 8px 12px;\r\n    position: absolute;\r\n    bottom: 8px;\r\n    width: 100%;\r\n    text-align: center;\r\n    align-items: center;\r\n}\r\n\r\n.dot {\r\n    cursor: pointer;\r\n    height: 15px;\r\n    width: 15px;\r\n    margin: 0 2px;\r\n    background-color: #bbb;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n    transition: background-color 0.6s ease;\r\n}\r\n\r\n.active, .dot:hover {\r\n    background-color: #717171;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ (function(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!*************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*************************************************************/
/***/ (function(module) {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./styles.scss":
/*!*********************!*\
  !*** ./styles.scss ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ (function(module) {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ (function(module) {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ (function(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ (function(module) {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ (function(module) {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./styles.scss");

var dropContainer = document.querySelector('.form__dropzone');
var fileInput = document.querySelector('.fileInput');
var fileName = document.querySelector('.filePreview__name');
var fileDetails = document.querySelector('.filePreview__details');
var filePreview = document.querySelector('.form__filePreview');
var fileThumbnail = document.querySelector('.filePreview__thumbnail');
var addButton = document.querySelector('.btn--add');
var trashBin = document.querySelector('.filePreview__bin');
dropContainer.addEventListener('dragenter', dndHandler);
dropContainer.addEventListener('dragover', dndHandler);
dropContainer.addEventListener('drop', dndHandler);

function dndHandler(e) {
  if (e.type === 'drop') {
    fileInput.files = e.dataTransfer.files;
    createFilePreview(e);
  }

  e.preventDefault();
}

fileInput.onchange = function (e) {
  createFilePreview(e);
};

addButton.onclick = function (e) {
  fileInput.click();
  e.preventDefault();
};

trashBin.onclick = function () {
  fileInput.value = '';
  fileThumbnail.src = '';
  filePreview.classList.toggle('hide');
};

var createFilePreview = function createFilePreview(e) {
  var obj = e.type === 'drop' ? e.dataTransfer.files[0] : e.target.files[0];
  var name = obj.name,
      size = obj.size;
  var formattedSize = String(size / 1024 / 1024).slice(0, 3) + ' mb';
  var dotIndex = name.indexOf('.');
  var justName = name.substring(0, dotIndex);
  var fileExtension = name.substring(dotIndex + 1).toUpperCase();
  fileThumbnail.src = URL.createObjectURL(obj);
  fileName.innerHTML = justName;
  fileDetails.innerHTML = fileExtension + ' ' + formattedSize;
  filePreview.classList.remove('hide');
}; // SLIDER --------------
// const dot1 = document.querySelector('.dot1').onclick = currentSlide(1)
// const dot2 = document.querySelector('.dot2').onclick = currentSlide(2)
// const dot3 = document.querySelector('.dot3').onclick = currentSlide(3)


document.querySelector('.prev').onclick = function () {
  return plusSlides(-1);
};

document.querySelector('.next').onclick = function () {
  return plusSlides(1);
};

var slideIndex = 1;
showSlides(slideIndex); // Next/previous controls

function plusSlides(n) {
  showSlides(slideIndex += n);
} // Thumbnail image controls


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.querySelector('.slide');
  var dots = document.querySelector('.dot');

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
}();
/******/ })()
;
//# sourceMappingURL=main.js.map