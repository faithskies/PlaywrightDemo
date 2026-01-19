exports.HelperFunctions = class HelperFunctions {
    //--- intended for any reusable methods that dont fit into a specific page

    // use this if you only have a single search variable to check the obj for
    async AllTextSearch(searchValue, allTextContents) {
        // let found = false;
        for (const text of allTextContents) {
            if (text.includes(searchValue)) {
                console.log(`The search term "${searchValue}" was found in at least one element's text content.`);
                return true
            }
        }
        console.log(`The search term "${searchValue}" was NOT found in any element's text content.`);
        return false
    }

    // use this if you have an array of searchable variables to check for. This iterates through them and passes them to AllTextSearch
    async multipleSearchTerms(searchTileForValue, allTileDataByHeader) {
        for (let i = 0; i < searchTileForValue.length; i++) {
                let temp = await this.AllTextSearch(searchTileForValue[i], allTileDataByHeader)
                return temp
            } 
    } 


}


