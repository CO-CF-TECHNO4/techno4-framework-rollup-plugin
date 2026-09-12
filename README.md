# Rollup Techno4 Component Loader (`rollup-plugin-techno4`)

<div align="center">

**Плагін для Rollup та Vite для компіляції Single-File Components у TECHNO4 FRAMEWORK2**  
*Rollup & Vite plugin to load TECHNO4 FRAMEWORK2 Single-File Components*

[![License: LGPL-3.0-or-later](https://img.shields.io/badge/License-LGPL--3.0--or--later-blue.svg)](LICENSE)
[![Organization](https://img.shields.io/badge/Organization-CO%20%C2%ABCF%20TECHNO4%C2%BB-green.svg)](https://techno4.online)

---

### [uk_UA](#uk_ua) &nbsp;|&nbsp; [en_GB](#en_gb)

---

</div>

<br>

---

## uk_UA

### 🎯 Мета проєкту
> **Вільна ініціатива розвитку сучасних інструментів розробника за підтримки благодійної організації «БЛАГОДІЙНИЙ ФОНД ТЕХНО4» (CO «CF TECHNO4»).**

`rollup-plugin-techno4` — це офіційний плагін для збирачів **Vite** та **Rollup**, що забезпечує автоматичну трансформацію однофайлових компонентів Techno4 Single-File Components (`.t4.html`, `.t4`, `.techno4.html`, `.t4.js`) у стандартні JavaScript ES-модулі.

### ⚡ Можливості

- Безшовне перетворення компонентів `.t4` та `.t4.html` у швидкі ES-модулі Snabbdom VDOM.
- Автоматичне впровадження контексту: `$h`, `$t4`, `$t4route`, `$t4router`, `$store`, `$update`.
- Вилучення та ізоляція стилів із блоків `<style>`.
- Нативна підтримка як у **Vite** (hot module reload), так і в **Rollup**.
- Повна підтримка JSX компонентів із прагмою `$jsx`.

### 📦 Встановлення

```bash
npm install rollup-plugin-techno4 --save-dev
```

Якщо використовуються JSX-компоненти, додайте Babel-пресети:
```bash
npm install @rollup/plugin-babel @babel/preset-react @babel/preset-env --save-dev
```

### 🚀 Використання з Vite

У файлі `vite.config.js`:

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

### 🚀 Використання з Rollup

У файлі `rollup.config.js`:

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

### 🧩 Приклад Single-File Component

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
        <button class="button button-fill" @click=${sayHello}>Натисни мене</button>
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
    let greeting = 'Привіт від TECHNO4 FRAMEWORK2!';

    const sayHello = () => {
      $t4.dialog.alert('Вітаємо у TECHNO4!');
    };

    return $render;
  };
</script>
```

### 📚 Офіційна документація
👉 **[https://techno4.online/надбання/фреймворк](https://techno4.online/%D0%BD%D0%B0%D0%B4%D0%B1%D0%B0%D0%BD%D0%BD%D1%8F/%D1%84%D1%80%D0%B5%D0%B9%D0%BC%D0%B2%D0%BE%D1%80%D0%BA)**

### ⚖️ Ліцензія та права
Вихідний код розповсюджується за ліцензією **LGPL-3.0-or-later**.  
Підтримується: **благодійна організація «БЛАГОДІЙНИЙ ФОНД ТЕХНО4»** (`CO «CF TECHNO4»`).  
Автор: **Mykola Zghurskyi** (`mykola@techno4.online`).  
Містить адаптовані компоненти із відкритих джерел (MIT License).

<br>

---

## en_GB

### 🎯 Project Mission
> **A free initiative fostering modern developer tools, supported by the charitable organization "CO «CF TECHNO4»" (благодійна організація «БЛАГОДІЙНИЙ ФОНД ТЕХНО4»).**

`rollup-plugin-techno4` is the official plugin for **Vite** and **Rollup** bundlers that compiles TECHNO4 Single-File Components (`.t4.html`, `.t4`, `.techno4.html`, `.t4.js`) into clean ES modules.

### ⚡ Features

- Seamlessly transforms `.t4` and `.t4.html` components into fast Snabbdom VDOM ES modules.
- Injects standard component context: `$h`, `$t4`, `$t4route`, `$t4router`, `$store`, and `$update`.
- Extracts and optionally bundles scoped `<style>` blocks.
- Native support for **Vite** (HMR) and **Rollup**.
- Full JSX support with `$jsx` pragma.

### 📦 Installation

```bash
npm install rollup-plugin-techno4 --save-dev
```

If using JSX components, install Babel presets:
```bash
npm install @rollup/plugin-babel @babel/preset-react @babel/preset-env --save-dev
```

### 🚀 Usage with Vite

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

### 🚀 Usage with Rollup

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

### 🧩 Single-File Component Example

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
    let greeting = 'Hello from TECHNO4 FRAMEWORK2!';

    const sayHello = () => {
      $t4.dialog.alert('Welcome to Techno4!');
    };

    return $render;
  };
</script>
```

### 📚 Official Documentation
👉 **[https://techno4.online/надбання/фреймворк](https://techno4.online/%D0%BD%D0%B0%D0%B4%D0%B1%D0%B0%D0%BD%D0%BD%D1%8F/%D1%84%D1%80%D0%B5%D0%B9%D0%BC%D0%B2%D0%BE%D1%80%D0%BA)**

### ⚖️ License & Attribution
Distributed under the **LGPL-3.0-or-later** license.  
Published and supported by **CO «CF TECHNO4»** (`благодійна організація «БЛАГОДІЙНИЙ ФОНД ТЕХНО4»`).  
Author: **Mykola Zghurskyi** (`mykola@techno4.online`).  
Contains derivatives of open-source projects (MIT License).
