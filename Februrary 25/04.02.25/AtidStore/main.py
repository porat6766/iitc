from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import NoSuchElementException, TimeoutException
from selenium.webdriver.common.keys import Keys
from datetime import datetime
import logging
import time

#
now_time = datetime.now().strftime("%H-%M-%S")
logging.basicConfig(
    filename=f"app_test_{now_time}.log",
    filemode="w",
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s",
    encoding="utf-8"
)

logging.info("Starting Automation Test... ✅")
service = Service()
options = webdriver.ChromeOptions()
options.add_argument("--window-size=2560,1440")

driver = webdriver.Chrome(service=service, options=options)

logging.info("Navigating to the URL... ✅")
driver.get("https://www.10bis.co.il/next/")
time.sleep(3)

InputSearch = WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.ID, "homePage_SelectAddress"))
)


def slow_scroll(driver, increment=100, delay=0.3):

    current_scroll_position = 0
    total_height = driver.execute_script("return document.body.scrollHeight")
    while current_scroll_position < total_height:
        driver.execute_script(
            "window.scrollTo(0, arguments[0]);", current_scroll_position)
        time.sleep(delay)
        current_scroll_position += increment
        total_height = driver.execute_script(
            "return document.body.scrollHeight")

    driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")


try:

    InputSearch.send_keys("שדרות רוטשילד 22, תל אביב-יפו" + Keys.ENTER)
    time.sleep(5)

    slow_scroll(driver, increment=100, delay=0.1)

    cards = WebDriverWait(driver, 150).until(EC.presence_of_all_elements_located(
        (By.CSS_SELECTOR, '[data-test-id^="resid_"]')))
    logging.info(f"Found {len(cards)} restaurant cards.")

    for card in cards:
        try:
            restruantCard = {}
            name_element = card.find_element(
                By.CSS_SELECTOR, '.TitleWrapper-fDnxUO.graLtw')
            restaurant_name = name_element.text.strip()

            reversed_name = "".join(reversed(restaurant_name))
            print(reversed_name)

            restruantCard[restaurant_name] = reversed_name
        except Exception as inner:
            logging.error(
                "לא ניתן למצוא את שם המסעדה בתוך הכרטיס", exc_info=True)

    print("סך הכל מסעדות שנמצאו:")
    for name, rev in restruantCard.items():
        print(f"{name}: {rev}")

except TimeoutException as e:
    logging.error(f"TimeoutException occurred: {e}")
except NoSuchElementException as e:
    logging.error(f"NoSuchElementException occurred: {e}")
except Exception as e:
    logging.error(f"An unexpected error occurred: {e}")

driver.quit()

"""
"""
# try:
#     itemsInCartNUM = WebDriverWait(driver, 10).until(
#         EC.presence_of_element_located((By.XPATH, "//span[@class='count']"))).text

#     BtnShopNow = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, "//a[@href='https://atid.store/product-category/men/']//span[@class='elementor-button-content-wrapper']//span[@class='elementor-button-text'][normalize-space()='Shop Now']"))
#                                                  )

#     BtnShopNow.click(), logging.info("BtnShopNow not clicked")
#     logging.info("we move to shop...")

#     AtidBlueShoesImg = WebDriverWait(driver, 10).until(EC.presence_of_element_located(
#         (By.XPATH, "//a[@href='https://atid.store/product/atid-blue-shoes/']//img[@class='attachment-woocommerce_thumbnail size-woocommerce_thumbnail']")))

#     AtidBlueShoesImg.click(), logging.info("we not a move to item")
#     logging.info("we move to one item...")

#     BtnAddToCart = WebDriverWait(driver, 10).until(EC.presence_of_element_located(
#         (By.XPATH, "//button[normalize-space()= 'Add to cart']")))

#     BtnAddToCart.click(), logging.info("item no added")
#     logging.info("item click to add successfully!")

#     meassage = WebDriverWait(driver, 10).until(EC.presence_of_element_located(
#         (By.XPATH, "//div[@role='alert']")))

#     meassage.is_displayed(), logging.info("item no added")
#     logging.info("item added successfully!!")

#     itemsInCartNUMUpdate = WebDriverWait(driver, 10).until(
#         EC.presence_of_element_located((By.XPATH, "//span[@class='count']"))).text

#     itemsInCartNUM = int(itemsInCartNUM) + 1
#     itemsInCartNUMUpdate = int(itemsInCartNUMUpdate)
#     if itemsInCartNUMUpdate == itemsInCartNUM:
#         logging.info("Check item added successfully!!")

# except TimeoutException as e:
#     logging.error(f"TimeoutException occurred: {e}")
# except NoSuchElementException as e:
#     logging.error(f"NoSuchElementException occurred: {e}")
# except Exception as e:
#     logging.error(f"An unexpected error occurred: {e}")

# try:
#     BtnSearch = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, "//a[@aria-label='Search icon link']"))
#                                                 )

#     BtnSearch.click()

#     InputSearch = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, "//input[@placeholder='Search …']"))
#                                                   ).send_keys("shoes")

#     BtnSearch.click()

#     responseOfSearch = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, "//h1[@class='page-title ast-archive-title']"))
#                                                        )

#     if "Search Results for: shoes" in responseOfSearch.text:
#         logging.info("Item Found Successfully!!")

# except TimeoutException as e:
#     logging.error(f"TimeoutException occurred: {e}")
# except NoSuchElementException as e:
#     logging.error(f"NoSuchElementException occurred: {e}")
# except Exception as e:
#     logging.error(f"An unexpected error occurred: {e}")

# try:
#     itemsInCartNUM = WebDriverWait(driver, 10).until(
#         EC.element_to_be_clickable((By.XPATH, "//span[@class='count']"))
#     )
#     itemsInCartNUM.click()

#     print("pppppppppppppppppppppppppppppppppppppppppppppppp")
#     time.sleep(3)

#     quantity_input = WebDriverWait(driver, 10).until(
#         EC.presence_of_element_located((By.CLASS_NAME, "input-text qty text"))
#     )

#     quantity_input.clear()

#     quantity_input.send_keys("0")

#     new_value = quantity_input.get_attribute("value")
#     print("The new quantity value is:", new_value)

#     UpdateBtn = WebDriverWait(driver, 10).until(
#         EC.element_to_be_clickable(
#             (By.XPATH, "//button[normalize-space()='Update cart']"))
#     )
#     UpdateBtn.click()

#     message = WebDriverWait(driver, 10).until(
#         EC.presence_of_element_located((By.XPATH, "//div[@role='alert']"))
#     )
#     if "Cart updated." in message.text:
#         logging.info("Cart Update Successfully!!")
#     else:
#         logging.error("Cart update message not found or text did not match!")

# except TimeoutException as e:
#     logging.error(f"TimeoutException occurred: {e}")
# except NoSuchElementException as e:
#     logging.error(f"NoSuchElementException occurred: {e}")
# except Exception as e:
#     logging.error(f"An unexpected error occurred: {e}")

# try:
#     listPlayersNames = WebDriverWait(driver, 100).until(EC.presence_of_all_elements_located((
#         By.CLASS_NAME, "FozYP"
#     )))

#     listPlayersPhotos = WebDriverWait(driver, 100).until(EC.presence_of_all_elements_located((
#         By.CLASS_NAME, "VeBrne"
#     )))

#     for playerName in listPlayersNames:
#         print(playerName.text)
#         logging.info("".join(reversed(playerName.text)))

#     for playerPhoto in listPlayersPhotos:
#         playerPhotoSrc = playerPhoto.get_attribute("src")
#         print(playerPhotoSrc)
#         print("")
#         logging.info(playerPhotoSrc)
#         logging.info("")
#         # if len(playerPhotoSrc) > 10:
#         #     driver.get(str(playerPhotoSrc))
#         #     time.sleep(5)
#         #     driver.get("https://www.google.com/search?q=players+list&sca_esv=71611abca5e5e6db&sxsrf=AHTn8zrmMMD9a3vaMa-vsueKhOm9xsVryQ%3A1738666738278&ei=8vKhZ6vbENP1i-gPrN6CqQE&ved=0ahUKEwirnMWq7qmLAxXT-gIHHSyvIBUQ4dUDCBA&uact=5&oq=players+list&gs_lp=Egxnd3Mtd2l6LXNlcnAiDHBsYXllcnMgbGlzdDIIEAAYgAQYywEyCBAAGIAEGMsBMggQABiABBjLATIIEAAYgAQYywEyCBAAGIAEGMsBMggQABiABBjLATIIEAAYgAQYywEyCBAAGIAEGMsBMggQABiABBjLATIIEAAYgAQYywFIwg1QRFjSC3ABeAGQAQCYAbQBoAGMBqoBAzAuNbgBA8gBAPgBAZgCBqACsAbCAgoQABiwAxjWBBhHwgINEAAYgAQYsAMYQxiKBcICChAuGIAEGEMYigXCAgUQABiABMICDhAuGIAEGMcBGMsBGK8BmAMAiAYBkAYMkgcDMS41oAfNKg&sclient=gws-wiz-serp")
#         #     time.sleep(5)

# except TimeoutException as e:
#     logging.error(f"TimeoutException occurred: {e}")
# except NoSuchElementException as e:
#     logging.error(f"NoSuchElementException occurred: {e}")
# except Exception as e:
#     logging.error(f"An unexpected error occurred: {e}")
