module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
  testEnvironment: 'jsdom',
};