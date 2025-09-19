exports.HelperFunctions = class HelperFunctions {

   async AllTextSearch(searchValue, allTextContents){
    let found = false;
    for (const text of allTextContents) {
        if (text.includes(searchValue)) {
            found = true;
            break; // Exit the loop once the term is found and sets found to true 
        }
    }

    if (found) {
        console.log(`The search term "${searchValue}" was found in at least one element's text content.`);
    } else {
        console.log(`The search term "${searchValue}" was not found in any element's text content.`);
        return test.fail() 
    }
    }

    


}


