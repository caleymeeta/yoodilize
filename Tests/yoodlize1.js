module.exports = {
    beforeEach:  browser => {
      browser
       .url('https://www.yoodlize.com/')
       .maximizeWindow()
  
    },




'Test 1': browser => {
    browser
    .useXpath()
    .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[5]')
    .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Tools')
    .click('//img[@src="/images/logo/blueRaw.png"]')
    .pause(1000)
},
'Test 2': browser => {
    browser
    .useXpath()
    .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[6]')
    .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'CLothing')
    .click('//img[@src="/images/logo/blueRaw.png"]')
    .pause(1000)

}



}