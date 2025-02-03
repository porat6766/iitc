from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import NoSuchElementException, TimeoutException
from datetime import datetime
import logging
import time
import random
from webdriver_manager.chrome import ChromeDriverManager


def slow_typing(element, text, min_delay=0.1, max_delay=0.3):
    for char in text:
        element.send_keys(char)
        time.sleep(random.uniform(min_delay, max_delay))


def scroll_page(driver, scroll_count=3):
    for _ in range(scroll_count):  
        driver.execute_script("window.scrollBy(0, 500);")
        time.sleep(random.uniform(2, 4))  


def random_wait(min_wait=4, max_wait=8):
    time.sleep(random.uniform(min_wait, max_wait))


now_time = datetime.now().strftime("%H-%M-%S")

logging.basicConfig(
    filename=f"app_test_{now_time}.log",
    filemode="w",
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s",
)

logging.info("Starting Automation Test... ✅")

service = Service(ChromeDriverManager().install())
options = webdriver.ChromeOptions()
options.add_argument("--window-size=2560,1440")
options.add_argument("--ignore-certificate-errors")

driver = webdriver.Chrome(service=service, options=options)
driver.implicitly_wait(10)  

logging.info("Navigating to the URL... ✅")
driver.get("https://www.futbin.com/")

playersData = []

try:
    
    playersList = WebDriverWait(driver, 80).until(
        EC.presence_of_all_elements_located((By.XPATH, "//div[@class='small-player-card-grid']//a"))
    )

    scroll_page(driver)  
    random_wait()  

    for player in playersList:
        print(player.text)
        logging.info(player.text)
        try:
            time.sleep(5)
            player.click()  
            logging.info("Clicked successfully")
            time.sleep(5)
            random_wait()  

            
            name = WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.CSS_SELECTOR, ".page-header-top.xxs-row.align-center"))
            )
            time.sleep(5)

            playersData.append(name.text)
            logging.info(name.text)

            random_wait()  

            driver.back()  
            random_wait()  

        except Exception as e:
            logging.error(f"Error while processing a player: {e}")

except TimeoutException as e:
    logging.error(f"TimeoutException occurred: {e}")
except NoSuchElementException as e:
    logging.error(f"NoSuchElementException occurred: {e}")
except Exception as e:
    logging.error(f"An unexpected error occurred: {e}")
finally:
    driver.quit()
