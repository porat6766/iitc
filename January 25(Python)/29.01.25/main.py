from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service)


driver.get("https://atid.store/")


wait = WebDriverWait(driver, 10)

time.sleep(2)

BtnCategoryName = wait.until(EC.element_to_be_clickable(
    (By.XPATH, "(//a[@class='menu-link'][normalize-space()='Men'])[1]")))
BtnCategoryName.click()

time.sleep(2)

productName = wait.until(EC.presence_of_element_located(
    (By.XPATH, "(//h2[normalize-space()='ATID Blue Shoes'])[1]")))

time.sleep(2)

inputProductSearch = wait.until(EC.presence_of_element_located(
    (By.XPATH, "(//input[contains(@id,'wc-block-search__input')])[1]")))
inputProductSearch.send_keys(productName.text)

time.sleep(2)

btnSearch = wait.until(EC.element_to_be_clickable(
    (By.XPATH, "(//button[@aria-label='Search'])[1]")))
btnSearch.click()

time.sleep(2)

driver.get("https://atid.store/product/atid-blue-shoes/")

time.sleep(2)

price = wait.until(EC.presence_of_element_located(
    (By.XPATH, "//div[@class='summary entry-summary']//ins//bdi[1]")))

print(price.text.split(" ")[0])

if "atid-blue-shoes" in driver.current_url:
    print("All checks passed successfully!")

time.sleep(2)

driver.quit()
