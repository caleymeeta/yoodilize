let homePage = {}
let searchPage = {}
module.exports = {
    beforeEach: browser => {
        homePage = browser.page.HomePage()
        searchPage = browser.page.SearchPage()
        homePage.navigate()
    },
    afterEach: browser => {
        homePage
            .end()
    },
    'InValid Login': browser => {
        //var searchTerm = 'Cookie Monster'
        
        homePage
            .click('@LogInXPath')
        
    }
}


/*
Decalare all pages which u want to use on your page using let
google = browser.page.googlePage()   //reference of page




*/

