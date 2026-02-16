const fs = require('fs');
const path = require('path');
const palettes = require('./src/palettes');
const buildTheme = require('./src/builder');

// ── Variants ─────────────────────────────────────────────────
const variants = [
  { name: 'XX121',        palette: palettes.blue,   file: 'XX121-color-theme.json' },
  { name: 'XX121 Yellow', palette: palettes.yellow,  file: 'XX121-yellow-color-theme.json' },
  { name: 'XX121 Green',  palette: palettes.green,   file: 'XX121-green-color-theme.json' },
];

// ── Write Output ────────────────────────────────────────────
const themesDir = path.join(__dirname, 'themes');
if (!fs.existsSync(themesDir)) fs.mkdirSync(themesDir);

console.log('BUILD START');
let errors = 0;

for (const variant of variants) {
  const theme = buildTheme(variant.name, variant.palette);

  // Validate required fields
  if (!theme.name || !theme.type || !theme.colors || !theme.tokenColors) {
    console.error('INVALID:', variant.name, '- missing required fields');
    errors++;
    continue;
  }

  const json = JSON.stringify(theme, null, '\t');

  // Validate JSON is parseable
  try {
    JSON.parse(json);
  } catch (e) {
    console.error('INVALID JSON:', variant.name, '-', e.message);
    errors++;
    continue;
  }

  const outputPath = path.join(themesDir, variant.file);
  fs.writeFileSync(outputPath, json);
  console.log('GENERATED:', variant.name, '->', outputPath);
}

console.log('VARIANTS:', variants.length);

if (errors > 0) {
  console.error(`BUILD FAILED: ${errors} error(s)`);
  process.exit(1);
} else {
  console.log('BUILD OK');
}
