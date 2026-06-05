#!/usr/bin/env node
// Render a digest HTML issue to PDF using puppeteer (local tooling, gitignored).
// Usage: node scripts/html-to-pdf.mjs <input.html> <output.pdf>
import puppeteer from 'puppeteer';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const [, , inPath, outPath] = process.argv;
if (!inPath || !outPath) {
  console.error('usage: node scripts/html-to-pdf.mjs <input.html> <output.pdf>');
  process.exit(2);
}

const url = pathToFileURL(path.resolve(inPath)).href;

const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});
try {
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 120000 });
  // Give web fonts a moment to settle.
  await page.evaluateHandle('document.fonts.ready');
  await new Promise((r) => setTimeout(r, 1500));
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
