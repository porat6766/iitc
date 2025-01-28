from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
import time

service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service)

driver.get("http://www.google.com")
time.sleep(2)
driver.get("http://atid.store")
time.sleep(2)
driver.back()
time.sleep(2)
driver.forward()
time.sleep(2)
driver.refresh()
time.sleep(2)
driver.quit()

print(driver.title)
driver.maximize_window()

input("Press Enter to close the browser...")
 