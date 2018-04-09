exports.config = {
  namespace: 'app-library',
  outputTargets:[
    { type: 'dist' },
    { type: 'www' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
