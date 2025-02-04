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
driver.get("https://atid.store/")
time.sleep(3)

try:
    itemsInCartNUM = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "//span[@class='count']"))).text

    time.sleep(3)

    BtnShopNow = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, "//a[@href='https://atid.store/product-category/men/']//span[@class='elementor-button-content-wrapper']//span[@class='elementor-button-text'][normalize-space()='Shop Now']"))
                                                 )
    time.sleep(3)

    BtnShopNow.click(), logging.info("BtnShopNow not clicked")
    logging.info("we move to shop...")

    AtidBlueShoesImg = WebDriverWait(driver, 10).until(EC.presence_of_element_located(
        (By.XPATH, "//a[@href='https://atid.store/product/atid-blue-shoes/']//img[@class='attachment-woocommerce_thumbnail size-woocommerce_thumbnail']")))

    time.sleep(3)

    AtidBlueShoesImg.click(), logging.info("we not a move to item")
    logging.info("we move to one item...")

    time.sleep(3)

    BtnAddToCart = WebDriverWait(driver, 10).until(EC.presence_of_element_located(
        (By.XPATH, "//button[normalize-space()= 'Add to cart']")))

    time.sleep(3)

    BtnAddToCart.click(), logging.info("item no added")
    logging.info("item click to add successfully!")

    time.sleep(3)

    meassage = WebDriverWait(driver, 10).until(EC.presence_of_element_located(
        (By.XPATH, "//div[@role='alert']")))

    meassage.is_displayed(), logging.info("item no added")
    logging.info("item added successfully!!")

    time.sleep(6)

    itemsInCartNUMUpdate = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "//span[@class='count']"))).text

    itemsInCartNUM = int(itemsInCartNUM) + 1
    itemsInCartNUMUpdate = int(itemsInCartNUMUpdate)
    if itemsInCartNUMUpdate == itemsInCartNUM:
        logging.info("Check item added successfully!!")

except TimeoutException as e:
    logging.error(f"TimeoutException occurred: {e}")
except NoSuchElementException as e:
    logging.error(f"NoSuchElementException occurred: {e}")
except Exception as e:
    logging.error(f"An unexpected error occurred: {e}")


try:
    BtnSearch = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, "//a[@aria-label='Search icon link']"))
                                                )

    time.sleep(6)

    BtnSearch.click()

    time.sleep(6)

    InputSearch = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, "//input[@placeholder='Search …']"))
                                                  ).send_keys("shoes")

    time.sleep(6)

    BtnSearch.click()

    time.sleep(6)

    responseOfSearch = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, "//h1[@class='page-title ast-archive-title']"))
                                                       )

    time.sleep(6)

    if "Search Results for: shoes" in responseOfSearch.text:
        logging.info("Item Found Successfully!!")

    time.sleep(6)

except TimeoutException as e:
    logging.error(f"TimeoutException occurred: {e}")
except NoSuchElementException as e:
    logging.error(f"NoSuchElementException occurred: {e}")
except Exception as e:
    logging.error(f"An unexpected error occurred: {e}")

try:
    itemsInCartNUM = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "//span[@class='count']")))

    time.sleep(6)

    itemsInCartNUM.click()

    time.sleep(6)

    QuantityInItem = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "//input[@id='quantity_67a1d1b6e5617']")))

    time.sleep(6)

    QuantityInItem.click()

    time.sleep(6)

    QuantityInItem.clear()

    time.sleep(6)

    QuantityInItem.send_keys(0)

    UpdateBtn = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "//button[normalize-space()='Update cart']")))

    time.sleep(6)

    UpdateBtn.click()

    time.sleep(6)

    meassage = WebDriverWait(driver, 10).until(EC.presence_of_element_located(
        (By.XPATH, "//div[@role='alert']")))

    if "Cart updated." in meassage.text:
        logging.info("Cart Update Successfully!!")

except TimeoutException as e:
    logging.error(f"TimeoutException occurred: {e}")
except NoSuchElementException as e:
    logging.error(f"NoSuchElementException occurred: {e}")
except Exception as e:
    logging.error(f"An unexpected error occurred: {e}")
