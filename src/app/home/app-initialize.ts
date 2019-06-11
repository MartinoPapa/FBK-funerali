//import { defineCustomElements as WcAnteprima } from 'wc-anteprima/loader';
import { defineCustomElements as wcFunerale } from 'funerale/dist/loader';


export function appInitialize() {
  return () => {
    const win = window as any;
    if (typeof win !== 'undefined') {
      // Define all of our custom elements
      //WALoader(win);
      wcFunerale(win);
    }
  };
}

