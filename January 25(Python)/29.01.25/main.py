from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service)

driver.get("https://atid.store/store/")

time.sleep(3)

inputProductName = driver.find_element(
    By.XPATH, "(//input[@id='wc-block-search__input-1'])[1]")

print(inputProductName)

time.sleep(3)
