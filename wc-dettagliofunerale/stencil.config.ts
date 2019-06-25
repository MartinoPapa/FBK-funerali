import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'wc-dettagliofunerale',
  outputTargets: [
    {
      type: 'dist',
    },
    {
      type: 'docs'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};
