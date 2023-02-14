const fs = require('fs');
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const html = fs.readFileSync('index.html', 'utf8');
  await page.setContent(html);
  await page.waitForLoadState('networkidle');

  const pdf = await page.pdf({
    height: 850,
    width: 1400,
    margin: { top: '1cm', right: '1cm', bottom: '1cm', left: '1cm' },
  });

  await browser.close();

  fs.writeFile('example.pdf', pdf, (err) => {
    if (err) throw err;
    console.log('PDF saved!');
  });
})();
