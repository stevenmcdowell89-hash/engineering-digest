#!/usr/bin/env node
// Render a digest HTML issue to PDF using Playwright + the pre-installed Chromium.
// Usage: NODE_PATH=/opt/node22/lib/node_modules node scripts/html-to-pdf-playwright.mjs <input.html> <output.pdf>
import pw from '/opt/node22/lib/node_modules/playwright/index.js';
const { chromium } = pw;
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const [, , inPath, outPath] = process.argv;
if (!inPath || !outPath) {
  console.error('usage: node html-to-pdf-playwright.mjs <input.html> <output.pdf>');
  process.exit(2);
}

const url = pathToFileURL(path.resolve(inPath)).href;
const executablePath = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';

const browser = await chromium.launch({
  executablePath,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});
try {
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle', timeout: 120000 });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(1500);
  await page.pdf({
    path: path.resolve(outPath),
    format: 'A4',
    printBackground: true,
    margin: { top: '0', bottom: '0', left: '0', right: '0' },
  });
  console.log('PDF written:', outPath);
} finally {
  await browser.close();
}
