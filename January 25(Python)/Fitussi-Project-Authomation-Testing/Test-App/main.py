import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import NoSuchElementException, TimeoutException
from selenium.webdriver.support.ui import Select

chrome_options = Options()
# chrome_options.add_argument("--headless")

service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service, options=chrome_options)

# try:
#     countries_deopdown = Select(driver.find_element(
#         By.XPATH, "(//select[@id='country-dropdown'])[1]"))

#     time.sleep(5)

#     select_1 = countries_deopdown.select_by_index(1)

#     time.sleep(5)

#     message = driver.find_element(
#         By.XPATH, "//p[normalize-space()='Selected Country: US']")

#     if message.text == "Selected Country: US":
#         print("The correct country was selected.")
#     else:
#         print("The selected country is not US.")


# except NoSuchElementException:
#     print("Element not a found")

driver.get("http://localhost:5173/delays")

try:

    msg = WebDriverWait(driver, 10).until(EC.presence_of_element_located(
        (By.XPATH, "//p[normalize-space()='Loading content... Please wait.']")))
    print("Loaded and dynamic content is visible")

    msg = WebDriverWait(driver, 10).until(EC.presence_of_element_located(
        (By.XPATH, "//p[normalize-space()='Dynamic Content Loaded!']")))
    print("Loaded Finish")

except NoSuchElementException:
    print("Element not found")

time.sleep(5)
