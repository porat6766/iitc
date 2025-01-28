from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service)

# driver.get("http://www.google.com")
# WebDriverWait(driver, 10).until(EC.title_contains("Google"))

# driver.get("http://atid.store")

# Shop_now = driver.find_element(
#     By.XPATH, "//span[@class='elementor-button-text'][normalize-space()='Shop Now'][1]")

# Shop_now.click()

# # driver.execute_script("window.scroll(0,document.body.scrollHeight);")

# if driver.current_url == "https://atid.store/store/":
#     print("Successfully navigated to the store page!")
# else:
#     print("Navigation failed or URL is different:", driver.current_url)

# driver.maximize_window()

# input("Press Enter to close the browser...")


"""
"""

driver.get("https://practicetestautomation.com/practice-test-login/")

Username = driver.find_element(
    By.XPATH, "(//input[@id='username'])[1]").send_keys('student')

Password = driver.find_element(
    By.XPATH, "(//input[@id='password'])[1]").send_keys('Password123')

time.sleep(3)

login_btn = driver.find_element(
    By.XPATH, "(//button[normalize-space()='Submit'])[1]")

login_btn.click()

time.sleep(3)

if driver.current_url == "practicetestautomation.com/logged-in-successfully/":
    print("The user login successfully!")
else:
    print("Navigation failed or URL is different:", driver.current_url)

time.sleep(3)

message = driver.find_element(
    By.XPATH, "(//h1[normalize-space()='Logged In Successfully'])[1]")

log_out_btn = driver.find_element(
    By.XPATH, "(//a[normalize-space()='Log out'])[1]")

log_out_btn.click()

time.sleep(3)

if driver.current_url == "https://practicetestautomation.com/practice-test-login/":
    print("The user log out successfully!")
else:
    print("Navigation failed or URL is different:", driver.current_url)

time.sleep(3)

Username = driver.find_element(
    By.XPATH, "(//input[@id='username'])[1]").send_keys('student_1')

Password = driver.find_element(
    By.XPATH, "(//input[@id='password'])[1]").send_keys('Password123')

time.sleep(3)

login_btn = driver.find_element(
    By.XPATH, "(//button[normalize-space()='Submit'])[1]")

login_btn.click()

message = driver.find_element(
    By.XPATH, "(//div[@id='error'])[1]")

if message.text == "Your username is invalid!":
    print("userName is invalid")

Username = driver.find_element(
    By.XPATH, "(//input[@id='username'])[1]").send_keys('student_1')

Password = driver.find_element(
    By.XPATH, "(//input[@id='password'])[1]").send_keys('Password1234')

time.sleep(3)

login_btn = driver.find_element(
    By.XPATH, "(//button[normalize-space()='Submit'])[1]")

login_btn.click()

time.sleep(3)

if message.text == "Your password is invalid!":
    print("Password is invalid")
    
time.sleep(3)
