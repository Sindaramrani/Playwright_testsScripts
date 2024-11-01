const { chromium } = require('playwright');
const url = 'https://baseplates.uap.int.api.bbci.co.uk/playtime-island/preview/index.html?animations=off#/';
(async () => {
  const browser = await chromium.launch({ headless: false }); // Set headless to true for headless mode
  const context = await browser.newContext();
  const page = await context.newPage();

  // Scenario 1: Continuous Carousel Navigation
  await page.goto(url);
  await page.waitForTimeout(500); // Wait for the page to load (adjust as needed)

  // Click right navigation button
  await page.click('button[aria-label="Right swipe - select to move to the right"]'); // Replace with actual selector
  await page.waitForTimeout(1000); // Wait for the carousel to move

  // Click left navigation button
  await page.click('button[aria-label="Left swipe - select to move to the left"]'); // Replace with actual selector
  await page.waitForTimeout(1000); // Wait for the carousel to return
  await browser.close();
})();
