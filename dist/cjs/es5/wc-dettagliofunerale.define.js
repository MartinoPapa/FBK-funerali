"use strict";
// WcDettagliofunerale: Custom Elements Define Library, ES Module/es5 Target
Object.defineProperty(exports, "__esModule", { value: true });
var wc_dettagliofunerale_core_js_1 = require("./wc-dettagliofunerale.core.js");
var wc_dettagliofunerale_components_js_1 = require("./wc-dettagliofunerale.components.js");
function defineCustomElements(win, opts) {
    return wc_dettagliofunerale_core_js_1.defineCustomElement(win, wc_dettagliofunerale_components_js_1.COMPONENTS, opts);
}
exports.defineCustomElements = defineCustomElements;
