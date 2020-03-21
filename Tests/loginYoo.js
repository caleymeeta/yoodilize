module.exports = {
    beforeEach: browser => {
        browser
            .url('https://www.yoodlize.com/')
        //$x('//element[@attribute="value"]')
    },

    afterEach: browser => {
        browser
            .end()
    },
    'Login ': browser => {

        browser
            .useXpath()
            .click('//span[text()="Log in"]')
            
            .pause(2000)
            
    }
}