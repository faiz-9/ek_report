const puppeteer = require('puppeteer');
const fs = require('fs');

async function generatePDF() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // read the HTML file
  const html = fs.readFileSync('index.html', 'utf8');

  await page.setContent(html);

  // generate the PDF
  const pdf = await page.pdf({
    height: '525px',
    width: '1000px',
    printBackground: true,
  });

  await browser.close();

  return pdf;
}

generatePDF().then((pdf) => {
  // write the PDF to a file
  fs.writeFile('output.pdf', pdf, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('PDF file created successfully');
  });
});
