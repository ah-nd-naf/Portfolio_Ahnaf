import puppeteer from 'puppeteer';

const urls = {
  'social-media-app': 'https://social-media-app-amber-eight-47.vercel.app',
  'Authentication-System': 'https://authentication-system-six-teal.vercel.app',
  'PetSite': 'https://pet-site-pi.vercel.app/'
};

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  for (const [name, url] of Object.entries(urls)) {
    console.log(`Taking screenshot of ${name}...`);
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 800 });
    try {
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
      await new Promise(r => setTimeout(r, 3000)); // allow time for animations/loading
      await page.screenshot({ path: `./public/${name}.png` });
      console.log(`Saved ${name}.png`);
    } catch (e) {
      console.error(`Failed to screenshot ${name}:`, e.message);
    }
  }
  await browser.close();
})();
