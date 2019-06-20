
// WcDettagliofunerale: Custom Elements Define Library, ES Module/es5 Target

import { defineCustomElement } from './wc-dettagliofunerale.core.js';
import { COMPONENTS } from './wc-dettagliofunerale.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, COMPONENTS, opts);
}
