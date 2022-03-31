import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import 'rollup';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-js';
import pkg from './package.json';

const config = {
    input: 'src/package/enhance-url/index.tsx',
    output: [
        {
            file: './dist/cjs/index.js',
            format: 'cjs',
        },
        {
            file: './dist/esm/index.js',
            format: 'es',
        },
    ],
    external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],

    plugins: [
        nodeResolve(),
        commonjs(),
        typescript({
            typescript: require('typescript'),
        }),
        uglify.uglify({}, minify),
    ],
};

export default config;
