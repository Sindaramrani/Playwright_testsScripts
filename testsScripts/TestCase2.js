const { chromium } = require('playwright');
const url = 'https://baseplates.uap.int.api.bbci.co.uk/playtime-island/preview/index.html?animations=off#/';

(async () => {
    const browser = await chromium.launch({ headless: false }); // Set headless to true for headless mode
    const context = await browser.newContext();
    const page = await context.newPage();
  await page.goto(url);
  await page.waitForTimeout(500);

  // Wait for the carousel to be visible
  await page.waitForSelector('#continuous-carousel-tiles-wrapper');

  // Swipe left once using dragAndDrop
  await page.mouse.move(1000, 300); 
  await page.mouse.down(); 
  await page.mouse.move(200, 300); 
  await page.mouse.up();
  
  // Verify the carousel moved left
  const activeItemLeft = await page.locator('.PositionedTile__TileHolder-sc-13drsgf-0[style*="scale(1.3)"] img[data-testid="brand-tile-supertato"]').isVisible();
  console.log(activeItemLeft ? 'Carousel moved left successfully' : 'Failed to move carousel left');
  
  await page.waitForTimeout(500);
  // Swipe right once using dragAndDrop
  await page.mouse.move(200, 300); 
  await page.mouse.down(); 
  await page.mouse.move(1000, 300); 
  await page.mouse.up();
  
  await page.waitForTimeout(500);
  // Verify the carousel moved right back to the original position
  const activeItemRight = await page.locator('.PositionedTile__TileHolder-sc-13drsgf-0[style*="scale(1.3)"] img[data-testid="brand-tile-halloween"]').isVisible();
  console.log(activeItemRight ? 'Carousel moved right successfully' : 'Failed to move carousel right');

  await browser.close();
})();
