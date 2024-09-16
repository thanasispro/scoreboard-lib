import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

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
  plugins: [
    resolve(), 
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
  ],
  external: ['uuid'],
};
