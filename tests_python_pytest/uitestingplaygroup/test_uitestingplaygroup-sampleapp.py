import re    # re is for regex 
from playwright.sync_api import expect   

def test_google_search(page):   # Test_ so pytest receognizes it, page is automatically injected from Playwright
    page.wait_for_timeout(3000) #if you want it to wait  3 sec before going to the site
    page.goto("http://uitestingplayground.com/sampleapp")
    
    #if there is a cookie popup
    try: 
        page.get_by_role("button", name="Accept all").click(timeout=3000)
    except: #this ia an else 
        print("No popup")
    
    page.get_by_role("combobox", name="Search").fill("Playwright Python") #find the search box it and fills it with that text
    page.keyboard.press("Enter") #simulates a user pressing the Enter on the keyboard
    expect(page).to_have_title(re.compile("Playwright", re.IGNORECASE)) #verify that the title include the text playwright
    
    