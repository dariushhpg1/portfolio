from pathlib import Path
from playwright.sync_api import sync_playwright
root=Path(__file__).resolve().parents[1]
with sync_playwright() as p:
 browser=p.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox','--disable-dev-shm-usage'])
 for width,height,label in [(1440,900,'desktop'),(390,844,'mobile')]:
  page=browser.new_page(viewport={'width':width,'height':height},device_scale_factor=1)
  errors=[]
  page.on('pageerror',lambda err: errors.append(str(err)))
  page.set_content((root/'preview.html').read_text(),wait_until='load')
  page.screenshot(path=str(root.parent/f'darius-preview-{label}.png'),full_page=True)
  page.screenshot(path=str(root.parent/f'darius-hero-{label}.png'),full_page=False)
  stats=page.evaluate('''() => ({lang:document.documentElement.lang, sectionIds:[...document.querySelectorAll('main section[id]')].map(e=>e.id), externalLinks:[...document.querySelectorAll('a[href^="https://"]')].length, pageWidth:document.documentElement.scrollWidth, viewport:innerWidth, pageHeight:document.documentElement.scrollHeight, headings:[...document.querySelectorAll('h1,h2')].length})''')
  assert stats['lang']=='en',stats
  assert stats['pageWidth']<=width+1,stats
  assert len(stats['sectionIds'])==7,stats
  assert stats['externalLinks']>=6,stats
  page.locator('.hero-actions a[href="#work"]').click()
  page.wait_for_timeout(250)
  assert page.evaluate('location.hash')=='#work'
  if width < 600:
   page.locator('.menu-toggle').click()
   assert page.locator('.mobile-menu').is_visible()
   page.locator('.mobile-menu a[href="#writing"]').click()
   assert not page.locator('.mobile-menu').is_visible()
   assert page.evaluate('location.hash')=='#writing'
  assert not errors,errors
  print(f'{label} PASS | {stats} | JS errors: {len(errors)}')
  page.close()
 browser.close()
