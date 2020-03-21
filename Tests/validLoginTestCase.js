let homePage = {}
let loginPage = {}
module.exports = {
    beforeEach: browser => {
        homePage = browser.page.HomePage()
        loginPage = browser.page.LoginPage()
        homePage.navigate()
    },
    afterEach: browser => {
        homePage
            .end()
    },
    'Valid Login': browser => {
        //var searchTerm = 'Cookie Monster'
        
        homePage
            .click('@LogInXPath')
        
    }
}


/*
Decalare all pages which u want to use on your page using let
google = browser.page.googlePage()   //reference of page




*/

