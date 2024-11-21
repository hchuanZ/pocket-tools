const puppeteer = require('puppeteer');

async function scrapeSite(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const content = await page.content();
  console.log(content);
  await browser.close();
}

scrapeSite('http://example.com');