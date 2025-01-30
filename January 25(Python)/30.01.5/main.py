import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import NoSuchElementException, TimeoutException

chrome_options = Options()
chrome_options.add_argument("--headless")

service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service, options=chrome_options)

try:
    driver.get("https://atid.store/")

    antug = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.CLASS_NAME, "custom-logo-link"))
    )
    antug.click()
except (NoSuchElementException, TimeoutException):
    print("Logo element not found or not clickable!")

try:
    driver.get("https://atid.store/contact-us/")

    name = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located(
            (By.CSS_SELECTOR, ".wpforms-field-large.wpforms-field-required"))
    )
    name.send_keys("Porat")

    subject = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located(
            (By.XPATH, "//input[@id='wpforms-15-field_5']"))
    )
    subject.send_keys("Cut the bullshit")

    email = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "wpforms-15-field_4"))
    )
    email.send_keys("por850@gmail.com")

    message = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "wpforms-15-field_2"))
    )
    message.send_keys("hhhhhh")
except (NoSuchElementException, TimeoutException):
    print("One or more form fields not found!")

try:
    submit_button = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.ID, "wpforms-submit-15"))
    )
    submit_button.click()
except (NoSuchElementException, TimeoutException):
    print("Submit button not found or not clickable!")

try:
    successMsg = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located(
            (By.XPATH, "//p[contains(text(), 'Thanks for contacting us!')]"))
    )
    print("✅ Form submitted successfully!")
except (NoSuchElementException, TimeoutException):
    print("Form submission was unsuccessful!")



driver.quit()
