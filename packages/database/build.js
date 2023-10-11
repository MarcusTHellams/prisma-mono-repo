require('esbuild').buildSync({
  entryPoints: ['index.ts'],
  bundle: false,
  platform: 'node',
  target: ['node16'],
  outdir: 'dist',
  sourcemap: false,
  format: 'cjs',
  minify: false,
  treeShaking: true,
});