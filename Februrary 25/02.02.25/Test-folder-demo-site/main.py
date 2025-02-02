from selenium.common.exceptions import NoSuchElementException, TimeoutException
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from datetime import datetime
import logging
import time

# Set up logging
logging.basicConfig(level=logging.INFO)
logging.info("Starting Automation Test... ✅")

# Initialize WebDriver and Chrome options
service = Service()
options = webdriver.ChromeOptions()
options.add_argument("--window-size=2560,1440")

# Initialize driver
driver = webdriver.Chrome(service=service, options=options)

url = "http://localhost:5173/"
driver.get(url)

# Capture screenshot of the full page
# Adding current time to the filename
now_time = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
driver.save_screenshot(f"./screenshots/page_full_screen_{now_time}.png")

# Assert page title
logging.info("Checking the page title...")
try:
    assert "Vite + React" in driver.title, "The title doesn't match the expected value"
    logging.info("The page title is correct! ✅")

    headerTitle = driver.find_element(
        By.XPATH, "//h6[normalize-space()='MyEcommerce']")

    assert "MyEcommerce" in headerTitle.text, "The title in header doesn't match the expected value"
    logging.info("The page title in header is correct! ✅")

    searchInputText = "fgchvjbknlm"

    searchInput = driver.find_element(
        By.XPATH, "//input[@id=':r3:']").send_keys(searchInputText)

    searchBtn = driver.find_element(
        By.XPATH, "//button[normalize-space()='Subscribe']")

    time.sleep(5)

    searchInputTextFromInput = driver.find_element(
        By.XPATH, "//input[@id=':r3:']").text

    time.sleep(5)

    searchBtn.click()

    time.sleep(5)

    errorMessage = driver.find_element(
        By.XPATH, "//p[@id=':r3:-helper-text']").text

    assert "Invalid email address" in errorMessage, "not contain the right content"
    logging.info("not contain the right content! ✅(SORRY)")


except AssertionError as e:
    logging.error(f"Page title assertion failed: {e}")

# Check for specific input element (e.g., a button or input field)
try:
    logging.info("Checking the button...")

    # Wait for the element to be present
    mail_input = WebDriverWait(driver, 3).until(
        EC.presence_of_element_located((By.XPATH, "//input[@id=':r3:']"))
    )

    # Take a screenshot of the input element
    mail_input.screenshot("./test.png")

    # Assert the element is displayed
    assert mail_input.is_displayed(), "The button/input is not displayed"
    logging.info("The button/input is displayed! ✅")

except AssertionError as e:
    logging.error(f"Assertion error: {e}")
except TimeoutException:
    logging.error("The button/input doesn't exist within the timeout period 🆘")
except NoSuchElementException:
    logging.error("No such element found 🆘")

# End of the automation test
logging.info("Done with the Automation Test... ✅")

time.sleep(10)

try:
    name_input = WebDriverWait(driver, 8).until(
        EC.presence_of_element_located((By.XPATH, "//input[@id=':r5:']"))
    ).send_keys("BURLA")

    email_input = WebDriverWait(driver, 8).until(
        EC.presence_of_element_located((By.XPATH, "//input[@id=':r7:']"))
    ).send_keys("BURLA@GMAIL.COM")

    message_input = WebDriverWait(driver, 8).until(
        EC.presence_of_element_located((By.XPATH, "//textarea[@id=':r9:']"))
    ).send_keys("BLA BLA BLKA BKLA BLA BLA")

    time.sleep(5)

    submit = WebDriverWait(driver, 8).until(
        EC.presence_of_element_located(
            (By.XPATH, "//button[normalize-space()='Submit']"))
    )

    submit.click()

    logging.info("BOOM!!!")

    alert = driver.switch_to.alert
    alert.accept()

except AssertionError as e:
    logging.error(f"Assertion error: {e}")
except TimeoutException:
    logging.error("The button/input doesn't exist within the timeout period 🆘")
except NoSuchElementException:
    logging.error("No such element found 🆘")


try:
    accirdion_1 = WebDriverWait(driver, 8).until(
        EC.presence_of_element_located(
            (By.XPATH, "//div[@class='MuiBox-root css-19i7e4c']//div[1]//h3[1]//button[1]//span[1]"))
    )

    accirdion_1.click()
    logging.info("BOOM!")

    time.sleep(5)

    TEXT_accirdion_1 = WebDriverWait(driver, 8).until(
        EC.presence_of_element_located(
            (By.XPATH, "//p[contains(text(),'You can return most items within 30 days. However,')]"))
    ).text

    print(TEXT_accirdion_1)

    assert "You can return most items within 30 days. However, due to an intentional bug, this might sometimes show the wrong info or fail to process your request." in TEXT_accirdion_1, logging.info(
        "Text not a match!")

    logging.info("BOOM3!!")

except AssertionError as e:
    logging.error(f"Assertion error: {e}")
except TimeoutException:
    logging.error("The button/input doesn't exist within the timeout period 🆘")
except NoSuchElementException:
    logging.error("No such element found 🆘")

time.sleep(10)

# Close the driver
driver.quit()
