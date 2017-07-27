webpackJsonp([2],{

/***/ "../../../../../src/colabbg.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "colabbg.89ee9146d1ad8ab61112.jpg";

/***/ }),

/***/ "../../../../../src/colabbg2.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "colabbg2.4d5b1306270d2d91a0e5.jpg";

/***/ }),

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--9-1!../node_modules/postcss-loader/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--9-1!../node_modules/postcss-loader/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(http://fonts.googleapis.com/css?family=Roboto:400,500,300,700);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/icon?family=Material+Icons);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Pragati+Narrow:400,700);", ""]);

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n\nbody {\n  font-family: 'Roboto', sans-serif;\n  margin: 0px 0px 0px 0px;\n  background-color: #f5f8fa;\n  /* background-image: url('colabbg.jpg');\n  background-size: 100%; */\n}\n\nhtml {\n  height: 100%;\n}\n\nmain {\n  padding-top: 20px;\n  background-color: #f5f8fa;\n}\n\na {\n  margin: 5px 0px 5px 0px;\n}\na:link {\n  text-decoration: none;\n}\n\n.leftli {\n  margin: 3px 0px 3px 0px;\n}\n\n.postimg {\n\tmax-width: 100%;\n\tmax-height: 800px;\n}\n\na.nounder:hover {\n  border: none;\n}\n\na:visited {\n  color: black;\n}\na:hover {\n  border-bottom: 1px solid #061651;\n}\n\n.bg {\n  background-image: url(" + __webpack_require__("../../../../../src/colabbg.jpg") + ");\n  background-size: cover;\n  height: 100vh;\n}\n\n\n.bg2 {\n  background-image: url(" + __webpack_require__("../../../../../src/colabbg2.jpg") + ");\n  background-size: cover;\n  height: 100%;\n}\n\n\nli.mmenu {\n  display: inline-block;\n  width: 19.5%;\n  vertical-align: middle;\n  font-size: 20px;\n  text-align: center;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  color: white;\n  font-weight: 300;\n}\n\nli.mmenu:hover {\n  background-color: rgb(255, 255, 255, .1);\n  border-radius: 10px;\n  cursor: pointer;\n}\n\ni.material-icons {\n  vertical-align: middle;\n  margin-top: -2px;\n  cursor: pointer;\n\n}\n\n.btn {\n  border: 1px solid #061651;\n  padding: 10px 25px 10px 25px;\n  background-color: white;\n  cursor: pointer;\n}\n\nli.colab:hover {\n  background-color: #061651;\n}\n\nli.colab {\n  width: 20%;\n}\n\n/* .bg {\n  background-image: url('colabbg.jpg');\n} */\n\n\nli.searchbar:hover {\n  background-color: #061651;\n}\n\nspan.atest {\n  vertical-align: middle;\n  padding-left: 5px;\n  margin: auto;\n}\n\n.profilestats {\n  border-top: 1px solid #1c98ff;\n  width: 80%;\n  margin: auto;\n  padding-top: 10px;\n}\n\n.profilestatul {\n  list-style-type: none;\n  padding-left: 10%;\n}\n\nh2 {\n  text-align: center;\n  border: 2px solid #061651;\n  border-radius: 25px;\n  background-color: #061651;\n  color: white;\n  font-weight: 300;\n  padding: 2px 0px 2px 0px;\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n\nh2.morespace {\n  margin-bottom: 60px;\n  margin-top: 40px;\n}\n\nh1 {\n  margin: 5px 0px 5px 0px;\n  border-bottom: 1px solid #1c98ff;\n  padding-bottom: 1px;\n  font-weight: 500;\n  font-size: 22px;\n}\n\nli.colab {\n  /* background-color: #1c98ff; */\n}\n\nli.midmenu:hover {\n  /* border-left: 2px solid #e7e7e7;\t */\n  background-color: rgba(255,255,255, 0.1);\n}\n\nimg.feedpic {\n  width: 80%;\n  height: auto;\n  margin: auto;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\ndiv.contactinfos{\n  text-align: center;\n  margin-top: 30px;\n  font-size: 18px;\n}\n\napp-root {\n  background-color: red;\n}\n\nspan.contact {\n  margin-left: 20px;\n  margin-right: 20px;\n  padding-bottom: 5px;\n  border-bottom: 1px solid #3db2e1;\n}\n\n.namelarge {\n  text-align: center;\n  font-size: 20px;\n}\n\n.col_4 {\n  width: 70%;\n  margin: 5% 15% 0% 15%;\n}\n\ndiv.avatar {\n  width: 40%;\n  height: auto;\n  margin: auto;\n}\n\nimg.profilepic {\n  width: 80%;\n  display: block;\n  height: auto;\n  margin: auto;\n  border-radius: 10px;\n}\n\nimg.profpicfull{\n  max-width: 80%;\n  max-height: 500px;\n  padding: 0% 10% 0% 10%;\n\n}\n\nimg.brand {\n  display: inline;\n  /* max-width: 7%;\n    max-height: 30px;\n    padding-left: 4.5%;\n    padding-right: 4.5%; */\n}\n\nli.searchbar {\n  /*padding-right: 2%; */\n  padding-right: 0px;\n}\n\nul.ulstat {\n  list-style-type: none;\n  text-align: left;\n  padding-left: 10%;\n  font-size: 13px;\n}\n\nform {\n  margin: 0px 0px 0px 0px;\n}\n\ninput[type=\"search\"] {\n  border: none;\n  border-bottom: 1px solid white;\n  background-color: #061651;\n  color: white;\n  margin: 0px 0px 0px 0px;\n  padding: 0px 0px 0px 0px;\n  width: 200px;\n}\n\nform {\n  margin: 0px 0px 0px 0px;\n  padding: 0px 0px 0px 0px;\n}\n\nli.brand {\n /* background-image: url(\"logo.png\");\n  background-size: contain;\n  background-repeat: no-repeat; */\n}\n\nspan {\n  margin: 0px 0px 0px 0px;\n}\n\nul {\n  margin: 0px 0px 0px 0px;\n  padding: 0px 0px 5px 0px;\n\n}\n\nul.navul {\n  background-color: #061651;\n}\n\nmain {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.col_1 {\n  width: 12%;\n  padding-left: 1%;\n  padding-right: 5%;\n}\n\n.col_1_adjusted {\n  background-color: white;\n  border: 1px solid #e7e7e7;\n  margin-top: 30px;\n}\n\n.col_2 {\n  width: 70%;\n  padding: 0px 0% 0px 0%;\n  /* background-color: blue; */\n}\n\n.sortby {\n  /* border: 1px solid #e7e7e7; */\n  /* background-color: white; */\n  padding-top: 30px;\n}\n\n.sortheading {\n  margin-bottom: 5px;\n  padding-left: 10%;\n}\n.sortul {\n  /*list-style-type: none; */\n  text-align: justify;\n  padding-left: 10%;\n\n}\n\ndiv.results {\n  margin-top: 50px;\n  background-color: white;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  padding-right: 10px;\n}\ndiv.sort  {\n  margin-top: 40px;\n  text-align: center;\n\n}\n\ndiv.infos {\n  background-color: white;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  box-shadow: 0px 7px 16px -5px rgba(79,79,79,1);\n}\n\nspan.sortspan {\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  margin-left: 20px;\n  margin-right: 20px;\n  background-color: #061651;\n  cursor: pointer;\n}\n\nspan.sortspan:hover {\n  background-color: #2e48aa;\n}\n\n\n.col_3 {\n  width: 9%;\n  margin: auto;\n  margin-top: 0px;\n  /*background-color: green; */\n}\n\n.ulersatz {\n  padding-left: 10%;\n  margin-top: 5px;\n}\n\n.marker {\n\n}\n\n.marker:hover {\n  width: 4px;\n  height: 16px;\n  background-color: #1c98ff;\n}\n\nspan.co {\n  font-size: 30px;\n}\n\nspan.lab {\n  font-family: 'Pragati Narrow', sans-serif;\n  font-weight: 900;\n  font-size: 34px;\n  line-height: 1rem;\n\n}\n\ndiv.content {\n  /* background-color: orange; */\n  margin: 5px 0px 5px 5px;\n  border: 1px solid #efefef;\n}\n\ndiv.answer {\n  margin-left: 8.45%;\n  background-color: green;\n}\n\ndiv.tt {\n  -ms-flex-preferred-size: 85%;\n      flex-basis: 85%;\n}\n\ndiv.nr {\n  -ms-flex-preferred-size: 10.5%;\n      flex-basis: 10.5%;\n  margin: auto;\n  background-color: white;\n  text-align: center;\n  font-size: 22px;\n  color: #727272;\n}\n.feedtext {\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  font-weight: 700;\n  font-size: 22px;\n}\n\n\n.flexrow {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n.flexcol {\n  /*   display: flex; */\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background-color: white;\n}\n.item {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -ms-flex-preferred-size: 85%;\n      flex-basis: 85%;\n  color: #2f2f2f;\n  /*  display: inline-block; */\n  background-color: white;\n  word-wrap: break-word;\n  padding-bottom: 10px;\n\n}\n\n.item_4\n{\n  padding-left: 20px;\n  padding-right: 20px;\n\n}\n\n.item_2 {\n  min-width: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -ms-flex-preferred-size: 85%;\n      flex-basis: 85%;\n  padding-left: 10px;\n  position: relative;\n}\n\n/*\n.item_3 {\n  flex: 1;\n flex-basis: 85%;\n padding-left:5px;\n} */\n\n.symbols {\n  -ms-flex-preferred-size: 0.1%;\n      flex-basis: 0.1%;\n  margin: auto;\n  text-align: center;\n  background-color: white;\n  /* background-color: yellow; */\n\n}\n.lmod{\n  /* max-height: 12%; */\n  text-align: right;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n\n.formdiv {\n}\n\nspan.created {\n  text-align: right;\n  padding-bottom: 5px;\n  font-style: italic;\n  position: absolute;\n  bottom: 0px;\n  right: 0px;\n  font-size: 14px;\n}\n\n.stats {\n  -ms-flex-preferred-size: 10%;\n      flex-basis: 10%;\n  text-align: center;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  /* font-weight: 300; */\n  border-right: 1px solid #e7e7e7;\n  border-left: 1px solid #efefef;\n  background-color: white;\n  /* background-color: purple; */\n}\n\ndiv.text {\n  padding-top: 5px;\n}\n/* ---------------- */\n.materialize-textarea {\n  background-color: transparent;\n  border: none;\n  border-bottom: 1px solid #1c98ff;\n  border-radius: 0;\n  outline: none;\n  height: 3rem;\n  width: 100%;\n  font-size: 1rem;\n  margin: 10px 0 20px 0;\n  padding: 0;\n  box-shadow: none;\n  box-sizing: content-box;\n  transition: all 0.3s;\n  font-family: 'Roboto', sans-serif;\n}\n\n.selected {\n  background-color: #a5a5a5;\n}\n\n.hidden  {\n  display: none;\n}\n\n.markertest {\n  width: 5px;\n  background-color: red;\n  position: absolute;\n}\n\n.imgupload {\n  padding-top: 10px;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map