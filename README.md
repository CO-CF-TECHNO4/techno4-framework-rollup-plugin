# Rollup Techno4 Component Loader (`rollup-plugin-techno4`)

> Rollup & Vite plugin to load Techno4 Framework 2 Single-File Components (`.t4.html`, `.t4`, `.techno4.html`, `.t4.js`).

Part of the **Techno4 Framework 2** ecosystem by **CO «CF TECHNO4»** (`благодійна організація «БЛАГОДІЙНИЙ ФОНД ТЕХНО4»`).

---

## Features

- Seamlessly transforms Techno4 Single-File Components (`.t4.html`, `.t4`, `.techno4.html`, `.t4.js`) into JavaScript ES modules.
- Injects `$h` VDOM template parser, `$t4`, `$t4route`, `$t4router`, `$store`, and `$update` component context.
- Extracts and optionally bundles scoped `<style>` blocks.
- Works natively with **Rollup** and **Vite**.
- Full support for JSX components with `$jsx` pragma.

---

## Installation

```bash
npm install rollup-plugin-techno4 --save-dev
```

If using JSX components, also install Babel presets:
```bash
npm install @rollup/plugin-babel @babel/preset-react @babel/preset-env --save-dev
```

---

## Usage with Vite

In `vite.config.js`:

```javascript
import { defineConfig } from 'vite';
import techno4Plugin from 'rollup-plugin-techno4';

export default defineConfig({
  esbuild: {
    jsxFactory: '$jsx',
  },
  plugins: [
    techno4Plugin({ emitCss: false }),
  ],
});
```

---

## Usage with Rollup

In `rollup.config.js`:

```javascript
import techno4Plugin from 'rollup-plugin-techno4';
import css from 'rollup-plugin-css-only';
import { babel } from '@rollup/plugin-babel';

export default {
  input: './src/app.js',
  output: {
    format: 'esm',
    file: './dist/app-bundle.js',
  },
  plugins: [
    techno4Plugin({ emitCss: true }),
    css({ output: 'app-bundle.css' }),
    babel({
      babelHelpers: 'bundled',
      presets: [
        ['@babel/preset-react', { pragma: '$jsx' }],
        ['@babel/preset-env', { modules: false }],
      ],
    }),
  ],
  external: ['techno4'],
};
```

---

## Single-File Component Example

```html
<!-- pages/home.t4.html -->
<template>
  <div class="page">
    <div class="navbar">
      <div class="navbar-inner">
        <div class="title">${title}</div>
      </div>
    </div>
    <div class="page-content">
      <div class="block">
        <p>${greeting}</p>
        <button class="button button-fill" @click=${sayHello}>Click Me</button>
      </div>
    </div>
  </div>
</template>

<style>
  .title {
    font-weight: bold;
  }
</style>

<script>
  export default (props, { $t4, $update }) => {
    let title = 'Techno4 Studio';
    let greeting = 'Hello from Techno4 Framework 2!';

    const sayHello = () => {
      $t4.dialog.alert('Welcome to Techno4!');
    };

    return $render;
  };
</script>
```

---

## License

Licensed under **LGPL-3.0-or-later** by **CO «CF TECHNO4»** (`благодійна організація «БЛАГОДІЙНИЙ ФОНД ТЕХНО4»`).
Original base code derived from MIT-licensed open source projects.
