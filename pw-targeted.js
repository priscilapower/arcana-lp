const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto('http://localhost:3030', { waitUntil: 'networkidle' });

  // Deck grid - scroll to it using absolute position
  await page.evaluate(() => window.scrollTo(0, 2900));
  await page.waitForTimeout(300);
  await page.screenshot({ path: '/tmp/arcana-deck-final.png' });

  // Pricing - scroll to absolute position
  await page.evaluate(() => window.scrollTo(0, 7450));
  await page.waitForTimeout(300);
  await page.screenshot({ path: '/tmp/arcana-pricing-final.png' });

  await browser.close();
})();
