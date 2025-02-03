from selenium.common.exceptions import NoSuchElementException, TimeoutException
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
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

logging.info("Automation Test Done! ✅")

time.sleep(10)

try:

    js_alert_button = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located(
            (By.XPATH, "//button[normalize-space()='Click for JS Alert']"))
    )
    logging.info("The button found successfully!")

    assert js_alert_button.is_displayed(), "Button not a exist!!"

    js_alert_button.click()
    logging.info("element clicked!!!")

    alert = driver.switch_to.alert

    assert "I am a JS Alert" in alert.text, "Text does not a match!!"
    logging.info("alert text is right!!!")


except TimeoutException:
    logging.info("element not loaded in time!!!")
except AssertionError as e:
    logging.info(e)