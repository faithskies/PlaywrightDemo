# Purely python playwright example 
from playwright.sync_api import sync_playwright

with sync_playwright() as p:  # p give access to browsers, when completes, playwright shuts down automatically
    browser = p.chromium.launch(
        headless=True
    )  # True is faster but invisble, False will launch the browser so you can follow the process
    page = browser.new_page()
    page.goto("https://www.google.com")
    print("Page title", page.title())  # prints the pages titles
    browser.close()
