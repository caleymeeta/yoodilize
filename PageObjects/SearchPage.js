module.exports = {
    //url: 'https://www.yoodlize.com/',
    elements: {
        SearchField: {
            selector: "//input[@placeholder='Search here..']",
            locateStrategy: 'xpath'
        },
        SearchButton: {
            selector: '//button[text()="Search"]',
            locateStrategy: 'xpath'
        }
    }
}