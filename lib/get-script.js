const transformScript = require('./transform-script');

module.exports = ({ source, template, style, emitCss, id, cacheEmit }) => {
  let code = '';
  const isJSComponent = id.includes('.t4.js') || id.includes('.t4.ts');

  if (isJSComponent) {
    code = `/** @jsx $jsx */\nimport { $jsx } from 'framework7';\n${source}`;
  } else {
    // Parse Script
    let script;
    if (source.indexOf('<script>') >= 0) {
      const scripts = source.split('<script>');
      script = scripts[scripts.length - 1].split('</script>')[0].trim();
    } else {
      script = 'export default () => { return $render }';
    }
    if (!script || !script.trim()) script = 'export default { return $render }';

    code = transformScript({
      script,
      template,
      style,
      id,
      emitCss,
    });
  }

  if (emitCss && style) {
    const fname = id
      .replace('.t4.html', '.css')
      .replace('.t4.jsx', '.css')
      .replace('.t4.js', '.css')
      .replace('.t4', '.css');
    code += `\nimport ${JSON.stringify(fname)};\n`;
    cacheEmit.set(fname, style);
  }

  return code;
};
