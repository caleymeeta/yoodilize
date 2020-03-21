module.exports = {
    
    elements: {
        EmailAddress: {
            selector: '//input[@name="email"]',
            locateStrategy: 'xpath'
        },
        password : 'input[name="password"]',
        loginclickbutton: {
            selector: '//button[text()="Login in"]',
            locateStrategy: 'xpath'
        },

    
        

    }
}