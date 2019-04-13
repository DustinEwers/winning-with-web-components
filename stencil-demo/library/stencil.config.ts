import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'app-library',
  globalStyle: 'src/global/app.css',
  outputTargets:[
    { type: 'dist' },
    { type: 'docs' },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
