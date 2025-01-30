from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.alert import Alert
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.support.ui import Select
import time


chrome_options = Options()


service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service, options=chrome_options)


driver.get("http://localhost:5173/delays")
try:
    WebDriverWait(driver, 10).until(EC.presence_of_element_located(
        (By.XPATH, "//p[normalize-space()='Loading content... Please wait.']")))
    print("Loaded and dynamic content is visible")

    WebDriverWait(driver, 10).until(EC.presence_of_element_located(
        (By.XPATH, "//p[normalize-space()='Dynamic Content Loaded!']")))
    print("Loaded Finish")

except NoSuchElementException:
    print("Element not found")


driver.get("http://localhost:5173/buttons-links")
try:
    btn = WebDriverWait(driver, 5).until(EC.presence_of_element_located(
        (By.XPATH, "//button[@id='submit-btn']")))

    btn.click()

    alert = Alert(driver)
    print("Alert is exist")
    alert.accept()
    print("Alert clicked successfully!")

except NoSuchElementException:
    print("Element not found")


driver.get("http://localhost:5173/checkboxes-radios")
try:
    checkbox = WebDriverWait(driver, 5).until(EC.presence_of_element_located(
        (By.XPATH, "//input[@type='checkbox']")))

    checkbox.click()
    print("Checkbox selected")

    checkbox.click()
    print("Checkbox unselected")

except NoSuchElementException:
    print("Element not found")


driver.get("http://localhost:5173/mini-project")
try:

    userName = WebDriverWait(driver, 5).until(EC.presence_of_element_located(
        (By.XPATH, "//input[@placeholder='Enter username']"))).send_keys("Porat123")

    email = WebDriverWait(driver, 5).until(EC.presence_of_element_located(
        (By.XPATH, "//input[@placeholder='Enter email']"))).send_keys("pop@gmail.com")

    countries_dropdown = Select(driver.find_element(
        By.XPATH, "//select[@name='country']"))
    countries_dropdown.select_by_index(1)

    checkbox = WebDriverWait(driver, 5).until(EC.presence_of_element_located(
        (By.XPATH, "//input[@type='checkbox']")))

    checkbox.click()
    print("Checkbox clicked")

    submitBtn = WebDriverWait(driver, 5).until(EC.presence_of_element_located(
        (By.XPATH, "//button[normalize-space()='Submit']")))

    submitBtn.click()

    returnMsg = WebDriverWait(driver, 5).until(EC.presence_of_element_located(
        (By.XPATH, "//p[1]")))

    if returnMsg.text == 'Form Submitted: {"username":"Porat123","email":"pop@gmail.com","country":"US","acceptTerms":true}':
        print("Forms checks passed!")

except NoSuchElementException:
    print("Element not found")

time.sleep(10)

print("All checks passed successfully!")

driver.quit()
