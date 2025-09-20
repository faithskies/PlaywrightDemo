exports.HelperFunctions = class HelperFunctions {

    async AllTextSearch(searchValue, allTextContents) {
        // let found = false;
        for (const text of allTextContents) {
            if (text.includes(searchValue)) {
                console.log(`The search term "${searchValue}" was found in at least one element's text content.`);
                return true
            }
        }
        console.log(`The search term "${searchValue}" was NOT found in any element's text content.`);
        //return found
        return false
    }

}


