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
    'Item Search': browser => {
        //var searchTerm = 'Cookie Monster'
        
        homePage
            .click('@SearchXPath')
        searchPage  
            .setValue('@SearchField', 'Bike')   
            .click('@SearchButton')
            .pause(500)
            /*
            .setValue('@SearchXPath', [searchTerm, browser.Keys.ENTER])
            .waitForElementPresent('@results')
            .verify.containsText('@results', searchTerm)
            */
    }
}


/*
Decalare all pages which u want to use on your page using let
google = browser.page.googlePage()   //reference of page




*/

