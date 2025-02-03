from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import NoSuchElementException, TimeoutException
from datetime import datetime
import logging
import time

now_time = datetime.now().strftime("%H-%M-%S")
 
logging.basicConfig(

    filename=f"app_test_{now_time}.log",
    filemode="w",
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s",
)

logging.info("Starting Automation Test... ✅")
service = Service()
options = webdriver.ChromeOptions()
options.add_argument("--window-size=2560,1440")

driver = webdriver.Chrome(service=service, options=options)

logging.info("Navigating to the URL... ✅")
driver.get("https://www.idf.il/%D7%A0%D7%95%D7%A4%D7%9C%D7%99%D7%9D/%D7%97%D7%9C%D7%9C%D7%99-%D7%94%D7%9E%D7%9C%D7%97%D7%9E%D7%94/")
time.sleep(3)

# try:
#     FallenIDFSoldiers = WebDriverWait(driver, 50).until(
#         EC.presence_of_all_elements_located(
#             (By.CLASS_NAME, "solder-name"))
#     )

#     time.sleep(3)
#     for soldier in FallenIDFSoldiers:
#         full_text = soldier.get_attribute("innerText").strip()
#         logging.info(full_text.encode("utf-8").decode("utf-8"))

# except TimeoutException as e:
#     logging.error(f"TimeoutException occurred: {e}")
# except NoSuchElementException as e:
#     logging.error(f"NoSuchElementException occurred: {e}")
# except Exception as e:
#     logging.error(f"An unexpected error occurred: {e}")
# finally:
#     driver.quit()

# try:
#     inputWikipedia = WebDriverWait(driver, 10).until(
#         EC.presence_of_element_located(
#             (By.XPATH, "//input[@id='searchInput']"))
#     )
#     inputWikipedia.send_keys("יהדות סין")
#     time.sleep(3)
#     searchBtn = WebDriverWait(driver, 10).until(
#         EC.element_to_be_clickable(
#             (By.XPATH, "//i[@class='sprite svg-search-icon']"))
#     )
#     time.sleep(3)
#     assert searchBtn.click(), logging.info("Btn not found/clicked")
#     time.sleep(3)

#     logging.info("Search completed successfully! ✅")
# except TimeoutException as e:
#     logging.error(f"TimeoutException occurred: {e}")
# except NoSuchElementException as e:
#     logging.error(f"NoSuchElementException occurred: {e}")
# except Exception as e:
#     logging.error(f"An unexpected error occurred: {e}")
# finally:
#     driver.quit()

# try:
#     small_modal = WebDriverWait(driver, 10).until(
#         EC.presence_of_element_located(
#             (By.XPATH, "//button[@id='showSmallModal']"))
#     )
#     large_modal = WebDriverWait(driver, 10).until(
#         EC.presence_of_element_located(
#             (By.XPATH, "//button[@id='showLargeModal']"))
#     )

#     btnsModal = [small_modal, large_modal]
#     for btn in btnsModal:
#         # time.sleep(5)
#         btn.click()
#         # time.sleep(5)
#         index = btnsModal.index(btn)
#         if index == 0:
#             small_modal_close = WebDriverWait(driver, 10).until(
#                 EC.presence_of_element_located(
#                     (By.XPATH, "//button[@id='closeSmallModal']"))
#             )
#             # time.sleep(5)
#             small_modal_close.click()
#             logging.info('First Dialog Close!')
#         elif index == 1:
#             large_modal_close = WebDriverWait(driver, 10).until(
#                 EC.presence_of_element_located(
#                     (By.XPATH, "//button[@id='closeLargeModal']"))
#             )
#             # time.sleep(5)
#             large_modal_close.click()
#             logging.info('Seconed Dialog Close!')

# except TimeoutException:
#     logging.error("Button Wasn't Found in Time! 🆘")
# except AssertionError as e:
#     logging.error(e)
# except Exception as e:
#     logging.error(f"Some btn not loaded successfully! Error: {str(e)}")

# # Get Js Alert Button
# try:

#     js_alert_btn = WebDriverWait(driver, 10).until(
#         EC.presence_of_element_located((By.XPATH, '//ul/li[1]/button'))
#     )
#     assert js_alert_btn.is_displayed, "Error Not Found Button! 🆘"
#     logging.info("Button Found... ✅")

#     logging.info("Clicking Button...")

#     js_alert_btn.click()

#     logging.info("Alert Button Clicked!✅")

#     alert = driver.switch_to.alert
#     assert "I am a JS Alert" in alert.text, "Text Does not match the alert"
#     logging.info("Text Does match the alert!✅")
#     alert.accept()
#     driver.switch_to.window
# except TimeoutException:
#     logging.error("Button Wasnt Found in Time! 🆘")
# except AssertionError as e:
#     logging.error(e)

# # Get JS Confirm Button
# try:
#     js_confirm_btn = WebDriverWait(driver, 10).until(
#         EC.presence_of_element_located((By.XPATH, '//ul/li[2]/button'))
#     )

#     assert js_confirm_btn.is_displayed, "Error Not Found Button! 🆘"
#     logging.info("Button Found... ✅")

#     logging.info("Clicking Button...")

#     js_confirm_btn.click()

#     logging.info("Alert Button Clicked!✅")

#     alert = driver.switch_to.alert

#     assert "I am a JS Confirm" in alert.text, "Text Does not match the alert"
#     logging.info("Text Does match the alert!✅")
#     alert.accept()
#     driver.switch_to.window
#     # time.sleep(5)
# except TimeoutException:
#     logging.error("Button Wasnt Found in Time! 🆘")
# except AssertionError as e:
#     logging.error(e)

# # Get JS Prompt Button
# try:

#     js_prompt_btn = WebDriverWait(driver, 10).until(
#         EC.presence_of_element_located(
#             (By.XPATH, "//button[normalize-space()='Click for JS Prompt']"))
#     )
#     assert js_prompt_btn.is_displayed(), "Error: Button Not Found! 🆘"
#     logging.info("Button Found... ✅")

#     logging.info("Clicking Button...")

#     js_prompt_btn.click()

#     logging.info("Alert Button Clicked! ✅")

#     # Switch to the alert and send text
#     alert = driver.switch_to.alert
#     alert.send_keys("Bla Bla Bla!")

#     # Optional, just to ensure the text is sent before interacting with the alert
#     time.sleep(5)

#     # Accept the alert
#     alert.accept()

#     # Optionally, switch back to the main window (if there were multiple windows)
#     driver.switch_to.window(driver.window_handles[0])

#     time.sleep(5)

# except TimeoutException:
#     logging.error("Button wasn't found in time! 🆘")
# except AssertionError as e:
#     logging.error(e)

# logging.info("Automation Test Done! ✅")
