module.exports = {
  exclude: ['**/*spec.ts', '**/index.ts', 'node_modules/**'],
  excludeExternals: true,
  excludePrivate: true,
  hideGenerator: true,
  includes: './src',
  out: 'docs',
  module: 'commonjs',
  stripInternal: 'true',
  theme: 'markdown'
};
