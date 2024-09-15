import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/scoreboard.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/scoreboard.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [typescript()],
};
