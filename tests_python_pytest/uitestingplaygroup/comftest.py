import pytest
from playwright.sync_api import sync_playwright

#starts the browser once per session, yields lets the test use the browser, and then the browser is closed
@pytest.fixture(scope="session")
def browser():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False) #sets up the browser to be used for the test
        yield browser  #lets the browser be used for the test
        browser.close()  #closes the browser

#gives us a fresh test page object for every test, uses the browser fixture        
@pytest.fixture
def page(browser):
    page = browser.new_page()
    yield page
    page.close()