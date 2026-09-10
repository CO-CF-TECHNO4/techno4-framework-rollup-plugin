const { rollup } = require('rollup');
const { babel } = require('@rollup/plugin-babel');
const css = require('rollup-plugin-css-only');
const techno4Plugin = require('../lib/index');

rollup({
  input: './test/app.js',
  plugins: [
    techno4Plugin({ emitCss: true }),
    css({ output: 'app-bundle.css' }),
    babel({
      presets: [
        '@babel/preset-react',
        [
          '@babel/preset-env',
          {
            modules: false,
          },
        ],
      ],
    }),
  ],
  external: ['techno4'],
}).then((bundle) =>
  bundle.write({
    format: 'esm',
    file: `./test/app-bundle.js`,
  }),
);
