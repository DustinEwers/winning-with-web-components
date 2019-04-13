
// AppLibrary: Custom Elements Define Library, ES Module/es2017 Target

import { defineCustomElement } from './app-library.core.js';
import { COMPONENTS } from './app-library.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, COMPONENTS, opts);
}
