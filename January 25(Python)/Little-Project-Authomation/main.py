import sys
import json
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager

if len(sys.argv) < 3:
    print("Usage: python main.py <start_url> <depth>")
    sys.exit(1)

start_url = sys.argv[1]
max_depth = int(sys.argv[2])

options = Options()
options.add_argument("--headless")
options.add_argument(
    "user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36")
options.page_load_strategy = "eager"

driver = webdriver.Chrome(service=Service(
    ChromeDriverManager().install()), options=options)
driver.set_page_load_timeout(30)

results = []
visited_urls = set()


def crawl(url, depth):
    if depth > max_depth or url in visited_urls:
        return

    visited_urls.add(url)

    try:
        driver.get(url)
        time.sleep(60)
    except Exception as e:
        print(f"❌ Failed to load {url}: {e}")
        return

    images = driver.find_elements(By.TAG_NAME, "img")
    for img in images:
        src = img.get_attribute("src")
        if src:
            results.append({"imageUrl": src, "sourceUrl": url, "depth": depth})

    if depth < max_depth:
        links = driver.find_elements(By.TAG_NAME, "a")
        for link in links:
            href = link.get_attribute("href")

            if href and href.startswith("http") and "now14.co.il" in href:
                crawl(href, depth + 1)


crawl(start_url, 0)

with open("results.json", "w", encoding="utf-8") as f:
    json.dump({"results": results}, f, indent=4, ensure_ascii=False)

driver.quit()

print("✅ Crawler finished. Results saved in results.json")
