
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select, WebDriverWait
from selenium.common.exceptions import NoSuchElementException, TimeoutException
from selenium.webdriver.support import expected_conditions as EC
from datetime import datetime
import logging
import time

now_time = datetime.now().strftime("%H-%M-%S")

logging.basicConfig(
    # Log messages will be written to 'app.log'
    filename=f"app_test_{now_time}.log",
    filemode="w",
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s",
)

logging.info("Starting Automation Test... ✅")
service = Service()
options = webdriver.ChromeOptions()
options.add_argument("--window-size=2560,1440")
# options.add_argument('--headless')
driver = webdriver.Chrome(service=service, options=options)

logging.info("Navigating to the URL... ✅")
driver.get("https://the-internet.herokuapp.com/javascript_alerts")

counter = 0


def checkVasibality(btn):
    global counter
    try:
        counter += 1
        logging.info("check number is: " + str(counter))
        time.sleep(5)
        assert btn.is_displayed(), "Error: Button Not Found! 🆘"
        logging.info("Button Found... ✅")

        logging.info("Clicking Button...")

        btn.click()

        logging.info("Alert Button Clicked! ✅")

        alert = driver.switch_to.alert
        alert.send_keys("Bla Bla Bla!")
        time.sleep(2)
        alert.accept()

        logging.info("Alert Accepted! ✅")

    except TimeoutException:
        logging.error("Button wasn't found in time! 🆘")
    except AssertionError as e:
        logging.error(e)


js_prompt_btn = WebDriverWait(driver, 10).until(
    EC.presence_of_element_located(
        (By.XPATH, "//button[normalize-space()='Click for JS Prompt']"))
)

js_confirm_btn = WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.XPATH, '//ul/li[2]/button'))
)

js_alert_btn = WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.XPATH, '//ul/li[1]/button'))
)

buttons = [js_prompt_btn, js_confirm_btn, js_alert_btn]

try:

    for button in buttons:
        checkVasibality(button)
        time.sleep(5)

except Exception as e:
    logging.error(f"Error during the test: {str(e)}")

logging.info("Automation Test Done! ✅")
