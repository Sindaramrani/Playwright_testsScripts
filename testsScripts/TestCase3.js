const { chromium } = require('playwright');
const { test, expect } = require('@playwright/test');
const url = 'https://baseplates.uap.int.api.bbci.co.uk/playtime-island/preview/index.html?animations=off#/';

(async () => {
    const browser = await chromium.launch({ headless: false }); // Set headless to true for headless mode
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(url);
    await page.waitForTimeout(500);
    // Wait for the carousel to be visible
    await page.waitForSelector('#continuous-carousel-tiles-wrapper');

//   for(let i=0;i<Math.random() * 10;i++){
  for(let i=0;i<2;i++){
      // Swipe left once using dragAndDrop
      await page.mouse.move(1000, 300); 
      await page.mouse.down(); 
      await page.mouse.move(200, 300); 
      await page.mouse.up();
    //   await page.waitForTimeout(50);
  }

  // Navigate through brands and select a specific brand
  const activeItem = await page.$('.PositionedTile__TileHolder-sc-13drsgf-0[style*="scale(1.3)"] img');
  const title = await activeItem.getAttribute('data-testid'); // Assuming the title is stored in the 'alt' attribute 
  console.log(`Current active brand title: ${title}`);
  await page.click(`img[data-testid="${title}"]`); // Adjust the selector based on your specific brand
  await page.waitForTimeout(100);
  await page.click('button[aria-label="Right swipe - select to move to the right"]'); // Replace with actual selector
  await page.waitForTimeout(1000);

 //now i am in sub game
  
 await page.click('button[aria-label="Left swipe - select to move to the left"]'); // Replace with actual selector
 console.log("navigation to right working successfully")
 await page.waitForTimeout(100);
 
 
 const buttons = await page.$$('button');
 buttons[4].click();
 console.log(buttons[4].title)
 console.log('Clicked the play video button successfully');
 

 console.log("navigation to left working successfully")
//  await page.waitForTimeout(1000);
 
 
 await page.waitForSelector('.src__LoadingBarBorder-sc-oo6j2r-2.hUORbg', { state: 'visible' }); // Now wait for the loading bar to disappear 
 await page.waitForSelector('.src__LoadingBarBorder-sc-oo6j2r-2.hUORbg', { state: 'hidden' }); 
 await page.waitForTimeout(500);
 console.log('Loading bar has disappeared!');
//  await page.click('button[aria-label="Left swipe - select to move to the left"]'); // Replace with actual selector
//  await page.waitForSelector('.src__LoadingBarBorder-sc-oo6j2r-2.hUORbg', { state: 'visible' }); // Now wait for the loading bar to disappear 

//  await page.waitForSelector('.src__TapArea-sc-1e9l4qf-0.cKuMdm .pop__PopNotifyStyledDiv-sc-113dcom-2.hOyzha', { state: 'visible' }); // Now wait for the loading bar to disappear 
console.log(buttons.length)
buttons[4].click();
await browser.close();
})();
