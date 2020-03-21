module.exports = {
    beforeEach:  browser =>{
       browser
       .url('https://www.yoodlize.com/')
      //$x('//element[@attribute="value"]')
    },
    
    afterEach: browser =>{
       browser
        .end()
    },
    
    'See all 1: Recreational Vehicles':browser =>{
        
      browser
          .useXpath()
          .click("//div[text()='RECREATIONAL VEHICLES']//div[text()='See all']")   
          .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]','Recreational Vehicles') 
          .setValue("//input[@placeholder='Search here..']",'bike')
          .click("//button[text()='Search']")
          .pause(5000)
          
    },

    'See all 2:OUTDOOR GEAR': browser=>{

      browser
          .useXpath()
          .click("//div[text()='OUTDOOR GEAR']//div[text()='See all']")
          .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]','category: Outdoor Gear')
          .setValue("//input[@placeholder='Search here..']",'Snowshoes')
          .click("//button[text()='Search']")
          .pause(5000)
          
     },
     
     'See all 3:ELECTRONICS': browser=>{

      browser
          .useXpath()
          .click("//div[text()='ELECTRONICS']//div[text()='See all']")
          .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]','Electronics')
          .setValue("//input[@placeholder='Search here..']",'Tablet')
          .click("//button[text()='Search']")
          .pause(5000)
          
     },

     'Log in':browser=>{

       browser
         .useXpath()
         .click('//span[text()="Log in"]')
     }

     

     
  }     
          