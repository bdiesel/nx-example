module.exports = {
  name: 'ui-header',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ui-header',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
