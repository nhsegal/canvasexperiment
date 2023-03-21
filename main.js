/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html, body {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nbutton {\n  background: #99ddee;\n  -webkit-border-radius: 15;\n  -moz-border-radius: 15;\n  border-radius: 5px;\n  width: 8rem;\n  color: black;\n  font-size: 16px;\n  padding: 5px 10px 5px 10px; \n  text-decoration: none;\n  margin: 0 0 1rem 0;\n  height: 3rem;\n}\n\ncanvas{\n  border: 1px solid grey;\n  border-radius: 10px;\n}\n\n.controls {\n  width: 900px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.center {\n  width: 10rem;\n}\n\n.top-msg {\n  text-align: center;\n}\n\nselect {\n  width: 3rem;\n  height: 1.5rem;\n  text-align: center;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,yCAAyC;AAC3C;;AAEA;EACE,mBAAmB;EACnB,yBAAyB;EACzB,sBAAsB;EACtB,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,eAAe;EACf,0BAA0B;EAC1B,qBAAqB;EACrB,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,cAAc;EACd,kBAAkB;AACpB","sourcesContent":["html, body {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nbutton {\n  background: #99ddee;\n  -webkit-border-radius: 15;\n  -moz-border-radius: 15;\n  border-radius: 5px;\n  width: 8rem;\n  color: black;\n  font-size: 16px;\n  padding: 5px 10px 5px 10px; \n  text-decoration: none;\n  margin: 0 0 1rem 0;\n  height: 3rem;\n}\n\ncanvas{\n  border: 1px solid grey;\n  border-radius: 10px;\n}\n\n.controls {\n  width: 900px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.center {\n  width: 10rem;\n}\n\n.top-msg {\n  text-align: center;\n}\n\nselect {\n  width: 3rem;\n  height: 1.5rem;\n  text-align: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
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
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Chain.js":
/*!**********************!*\
  !*** ./src/Chain.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Link */ "./src/Link.js");
/* harmony import */ var _circle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./circle */ "./src/circle.js");



class Chain {
  constructor({
    ctx, length, dx, dt
  }) {
    this.ctx = ctx;
    this.length = length;
    this.linkSize = dx;
    this.links = [];
    this.dt = dt;
    this.isDragging = false;

    this.links.push(new _Link__WEBPACK_IMPORTED_MODULE_0__["default"]({
      ctx: this.ctx,
      x: this.linkSize * 2,
      linkSize: 2 * this.linkSize
    }));

    for (let i = 1; i < this.length / this.linkSize; i += 1) {
      this.links.push(new _Link__WEBPACK_IMPORTED_MODULE_0__["default"](
        {
          ctx: this.ctx,
          x: i * dx + 2 * this.linkSize,
          linkSize: this.linkSize
        }
      ));
    }
  }

  display(end) {
    const ctx = this.ctx;
    for (let i = 1; i < this.links.length - 1; i += 1) {
      if (i % (2) === 0) {
        this.links[i].display();
      }
    }

    if (this.isDragging) {
      (0,_circle__WEBPACK_IMPORTED_MODULE_1__["default"])(ctx, this.links[0].x, this.links[0].y, this.links[0].linkSize, 'rgb(250, 0, 0)');
    } else {
      (0,_circle__WEBPACK_IMPORTED_MODULE_1__["default"])(ctx, this.links[0].x, this.links[0].y, this.links[0].linkSize, 'rgb(200, 0, 0)');
    }

    let lastLinkColor = 'rgb(250, 0, 0)';
    if (end === 'fixed') {
      lastLinkColor = 'rgb(0, 0, 240)';
    } else if (end === 'free') {
      lastLinkColor = 'rgb(0, 200, 0)';
    } else if (end === 'mirror') {
      lastLinkColor = 'rgb(200, 0, 0)';
    }

    (0,_circle__WEBPACK_IMPORTED_MODULE_1__["default"])(
      ctx,
      this.links[this.links.length - 1].x,
      this.links[this.links.length - 1].y,
      2 * this.linkSize,
      lastLinkColor
    );
  }

  move(end) {
    for (let i = 1; i < this.links.length - 1; i += 1) {
      this.links[i].fy = ((this.dt / this.linkSize) ** 2)
      * (this.links[i - 1].y - 2 * this.links[i].y + this.links[i + 1].y)
        + 2 * this.links[i].y
        - this.links[i].py;
    }
    if (end === 'free') {
      this.links[this.links.length - 1].fy = -(this.links[this.links.length - 1].y
            - this.links[this.links.length - 2].y)
        + 2 * this.links[this.links.length - 1].y
        - this.links[this.links.length - 1].py;
    } else if (end === 'fixed') {
      this.links[this.links.length - 1].fy = 0;
    } else if (end === 'mirror' && this.isDragging) {
      this.links[this.links.length - 1].fy = this.links[0].fy;
    } else if (end === 'mirror' && !this.isDragging) {
      this.links[this.links.length - 1].fy = this.links[this.links.length - 2].y;
      this.links[this.links.length - 1].y = this.links[this.links.length - 1].fy;
    } else if (end === 'antimirror' && this.isDragging) {
      this.links[this.links.length - 1].fy = -this.links[0].fy;
    } else if (end === 'antimirror' && !this.isDragging) {
      this.links[this.links.length - 1].fy = this.links[this.links.length - 2].y;
      this.links[this.links.length - 1].y = this.links[this.links.length - 1].fy;
    }

    if (!this.isDragging) {
      this.links[0].fy = this.links[1].y;
      this.links[0].y = this.links[0].fy;
    }
    for (let i = 1; i < this.links.length; i += 1) {
      this.links[i].py = this.links[i].y;
      this.links[i].y = this.links[i].fy;
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chain);


/***/ }),

/***/ "./src/Link.js":
/*!*********************!*\
  !*** ./src/Link.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _circle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./circle */ "./src/circle.js");

class Link {
  constructor({ ctx, x, linkSize }) {
    this.ctx = ctx;
    this.x = x;
    this.y = 0;
    this.py = 0;
    this.fy = 0;
    this.linkSize = linkSize;
  }

  display() {
    const ctx = this.ctx;
    (0,_circle__WEBPACK_IMPORTED_MODULE_0__["default"])(ctx, this.x, this.y, this.linkSize, 'rgb(0,0,0)');
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Link);


/***/ }),

/***/ "./src/buildHTML.js":
/*!**************************!*\
  !*** ./src/buildHTML.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const buildCanvas = (width, height) => {
  const canvas = document.createElement('canvas');
  canvas.id = 'canvas';
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  document.getElementById('canvas_container').append(canvas);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildCanvas);


/***/ }),

/***/ "./src/circle.js":
/*!***********************!*\
  !*** ./src/circle.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const circle = (ctx, x, y, r, c) => {
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fillStyle = c;
  ctx.fill();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (circle);


/***/ }),

/***/ "./src/drawBackground.js":
/*!*******************************!*\
  !*** ./src/drawBackground.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const drawBackground = (canvas, width, height, scale) => {
  canvas.width = Math.floor(width * scale);
  canvas.height = Math.floor(height * scale);
  const ctx = canvas.getContext('2d');
  ctx.scale(scale, scale);
  ctx.fillStyle = '#d8d8d8';
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = '#787878';
  for (let i = 0; i < 6; i += 1) {
    ctx.beginPath();
    ctx.moveTo(0, (i * height) / 6);
    ctx.lineTo(width, (i * height) / 6);
    ctx.closePath();
    ctx.stroke();
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (drawBackground);


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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _buildHTML__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buildHTML */ "./src/buildHTML.js");
/* harmony import */ var _drawBackground__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drawBackground */ "./src/drawBackground.js");
/* harmony import */ var _Chain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Chain */ "./src/Chain.js");





const width = 900;
const height = 300;
const scale = window.devicePixelRatio;
(0,_buildHTML__WEBPACK_IMPORTED_MODULE_1__["default"])(width, height);
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const chain = new _Chain__WEBPACK_IMPORTED_MODULE_3__["default"]({
  ctx,
  length: scale * width,
  dx: 8,
  dt: 8
});

/*
const mouseOverFirstLink = (e) => {
  e.preventDefault();
  const rect = canvas.getBoundingClientRect();
  const x = parseInt(e.clientX - rect.left, 10);
  const y = parseInt(e.clientY - rect.top, 10);
  console.log(x, y);
};
*/

const mouseOverFirstLink = (e) => {
  e.preventDefault();
  e.stopPropagation();
  const rect = canvas.getBoundingClientRect();
  const x = parseInt(e.clientX - rect.left, 10);
  const y = parseInt(e.clientY - rect.top, 10) - height / 2;
  if (x * x - chain.links[0].x * chain.links[0].x
     + y * y - chain.links[0].y * chain.links[0].y
    < (chain.links[0].linkSize * chain.links[0].linkSize) * 16) {
    chain.isDragging = true;
  } else {
    chain.isDragging = false;
  }
};

const mouseMove = (e) => {
  e.preventDefault();
  e.stopPropagation();
  const rect = canvas.getBoundingClientRect();
  // const x = parseInt(e.clientX - rect.left, 10);
  const y = parseInt(e.clientY - rect.top, 10) - height / 2;
  if (chain.isDragging) {
    chain.links[0].y = 2 * y;
  }
};

const mouseUp = (e) => {
  e.preventDefault();
  e.stopPropagation();
  chain.isDragging = false;
};

/*
function handleMouseMove(e) {
  e.preventDefault();
  var mouseX = parseInt(e.clientX - offsetX);
  var mouseY = parseInt(e.clientY - offsetY);

  var dx = mouseX - circle.cx;
  var dy = mouseY - circle.cy;
  var isInside = dx * dx + dy * dy <= circle.radius * circle.radius;

  if (isInside && !circle.wasInside) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle(circle, isInside);
  } else if (!isInside && circle.wasInside) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle(circle, isInside);
  }
}

*/
canvas.addEventListener('mousedown', mouseOverFirstLink);
canvas.addEventListener('mousemove', mouseMove);
canvas.addEventListener('mouseup', mouseUp);

const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  (0,_drawBackground__WEBPACK_IMPORTED_MODULE_2__["default"])(canvas, width, height, scale);
  ctx.setTransform(1, 0, 0, 1, 0, canvas.height / 2);
  chain.move('fixed', true);
  chain.display();
  window.requestAnimationFrame(draw);
};

draw();
/*

const levelSet = () => {
  switch (level) {
    case '1':
      pens.length = 0;
      for (let i = 0; i < 2; i += 1) {
        pens.push(
          new Pen(q5, 0, 250, q5.color(100 + 250 * i, 100 * i, 200 - 200 * i))
        );
      }

      pens[0].x = q5.width - 20;
      pens[0].y = 40;
      pens[1].x = q5.width / 2;
      pens[1].y = q5.height / 4;
      return pens;

    case '2':
      pens.length = 0;
      for (let i = 0; i < 3; i += 1) {
        pens.push(new Pen(q5, 0, 250, q5.color(0)));
      }

      pens[0].x = q5.width - 100;
      pens[0].y = (3.5 * q5.height) / 5;
      pens[0].color = q5.color(100, 0, 200);
      pens[1].x = q5.width - 30;
      pens[1].y = (1.5 * q5.height) / 5;
      pens[1].color = q5.color(250, 100, 0);
      pens[2].x = q5.width - 100;
      pens[2].y = (1.5 * q5.height) / 5;
      pens[2].color = q5.color(100, 0, 200);

      return pens;
    case '3':
      pens.length = 0;
      for (let i = 0; i < 5; i += 1) {
        pens.push(new Pen(q5, 0, 250, q5.color(0)));
      }

      pens[0].x = q5.width / 2;
      pens[0].y = (3.5 * q5.height) / 5;
      pens[0].color = q5.color(100, 0, 200);
      pens[1].x = q5.width / 2 - 120;
      pens[1].y = (3.5 * q5.height) / 5;
      pens[1].color = q5.color(250, 100, 0);
      pens[2].x = q5.width / 2 + 120;
      pens[2].y = (3.5 * q5.height) / 5;
      pens[2].color = q5.color(250, 100, 0);
      pens[3].x = q5.width - 10;
      pens[3].y = (3 * q5.height) / 5;
      pens[3].color = q5.color(250, 100, 0);
      pens[4].x = q5.width - 10;
      pens[4].y = (2 * q5.height) / 5;
      pens[4].color = q5.color(250, 100, 0);

      return pens;
    case '4':
      pens.length = 0;
      for (let i = 0; i < 6; i += 1) {
        pens.push(new Pen(q5, 0, 250, q5.color(0)));
      }

      pens[0].x = q5.width / 2 + 80;
      pens[0].y = (3.5 * q5.height) / 5;
      pens[0].color = q5.color(100, 0, 200);
      pens[1].x = q5.width / 2;
      pens[1].y = (3.5 * q5.height) / 5;
      pens[1].color = q5.color(250, 100, 0);
      pens[2].x = q5.width / 2;
      pens[2].y = (1.5 * q5.height) / 5;
      pens[2].color = q5.color(250, 100, 0);
      pens[3].x = q5.width / 2 - 80;
      pens[3].y = (1.5 * q5.height) / 5;
      pens[3].color = q5.color(100, 0, 200);
      pens[4].x = q5.width / 2 - 80;
      pens[4].y = (3.5 * q5.height) / 5;
      pens[4].color = q5.color(100, 0, 200);
      pens[5].x = q5.width / 2 + 80;
      pens[5].y = (1.5 * q5.height) / 5;
      pens[5].color = q5.color(100, 0, 200);
      return pens;
    case '5':
      pens.length = 0;
      for (let i = 0; i < 6; i += 1) {
        pens.push(new Pen(q5, 0, 250, q5.color(0)));
      }
      pens[0].x = 3 * (q5.width / 4);
      pens[0].y = (1 * q5.height) / 5;
      pens[0].color = q5.color(100, 0, 200);

      pens[1].x = 1 * (q5.width / 4);
      pens[1].y = (4 * q5.height) / 5;
      pens[1].color = q5.color(100, 0, 200);

      pens[2].x = 1 * (q5.width / 4);
      pens[2].y = (1 * q5.height) / 5;
      pens[2].color = q5.color(100, 0, 200);

      pens[3].x = 3 * (q5.width / 4);
      pens[3].y = (4 * q5.height) / 5;
      pens[3].color = q5.color(100, 0, 200);

      pens[4].x = 6;
      pens[4].y = (2 * q5.height) / 6;
      pens[4].color = q5.color(250, 100, 0);

      pens[5].x = 6;
      pens[5].y = (4 * q5.height) / 6;
      pens[5].color = q5.color(250, 100, 0);

      return pens;
    default:
      return pens;
  }
};

const reset = () => {
  chain.links.forEach((val, i, arr) => {
    arr[i].y = 0;
    arr[i].py = 0;
    arr[i].fy = 0;
  });
  if (pens.length) {
    pens.forEach((pen)=>{
      pen.hit = false;
    });
  }
};

q5.setup = () => {
  q5.createCanvas(width, 300);
  q5.textAlign(q5.CENTER);

  // Event Listeners
  document.querySelectorAll('input[name="right_end"]').forEach((option) => {
    option.addEventListener('change', (event) => {
      end = event.target.value;
    });
  });

  document.querySelector('#resetButton').addEventListener('click', reset);

  document.querySelectorAll('select[name="level"]').forEach((option) => {
    option.addEventListener('change', (e) => {
      level = e.target.value;
      levelSet();
      reset();
    });
  });
};
q5.noLoop();
q5.draw = () => {
  q5.background(220);
  q5.fill(0);
  q5.stroke(0);
  q5.strokeWeight(1);
  q5.line(0, Math.floor(q5.height / 2) + 0.5, q5.width, Math.floor(q5.height / 2) + 0.5);
  q5.line(0, Math.floor(q5.height / 3) + 0.5, q5.width, Math.floor(q5.height / 3) + 0.5);
  q5.line(
    0,
    Math.floor((2 * q5.height) / 3) + 0.5,
    q5.width,
    Math.floor((2 * q5.height) / 3) + 0.5
  );
  q5.line(0, Math.floor(q5.height / 6) + 0.5, q5.width, Math.floor(q5.height / 6) + 0.5);
  q5.line(
    0,
    Math.floor((5 * q5.height) / 6) + 0.5,
    q5.width,
    Math.floor((5 * q5.height) / 6) + 0.5
  );

  if (dragging) {
    chain.links[0].fy = q5.mouseY - q5.height / 2;
  }
  chain.links[0].py = chain.links[0].y;
  chain.links[0].y = chain.links[0].fy;
  chain.move(end, dragging);

  q5.noStroke();

  if (pens.length) {
    pens.forEach((pen) => {
      if (pen.hitCheck(chain)) {
        mySound.play();
      }
      pen.display();
    });
  }
  chain.display(end, dragging);
};

q5.mousePressed = () => {
  if (
    q5.dist(
      chain.links[0].x,
      chain.links[0].y + q5.height / 2,
      q5.mouseX,
      q5.mouseY
    )
    < (3 * chain.linkSize) / 2
  ) {
    dragging = true;
  }
};
q5.mouseReleased = () => {
  dragging = false;
};
*/

})();

/******/ })()
;
//# sourceMappingURL=main.js.map