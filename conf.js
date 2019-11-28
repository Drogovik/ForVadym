exports.config = {
   seleniumAddress: 'http://localhost:4444/wd/hub',
   directConnect: true,
specs: ['test_spec.js'],

capabilities: {
    'browserName': 'chrome',

},
useAllAngular2AppRoots: true,
framework: 'jasmine'
};


//
//exports.config = {
//	directConnect: true,
//	 capabilities: {
 //   'browserName': 'chrome'
//  },
 //   framework: 'jasmine',
 //   specs: ['test_spec.js'],
  //  
//}; 

//exports.config = {
  //seleniumAddress: 'http://localhost:4444/wd/hub',

 //   'test_spec.js'
  //],

  //capabilities: {
 //   'browserName': 'chrome'
  //},

  //onPrepare: function() {
  //  browser.driver.get('http://localhost:8000/login.html');

  //  browser.driver.findElement(by.id('id=user[login]')).sendKeys('some');
  //  browser.driver.findElement(by.id('id=user[email]')).sendKeys('some'+'@user.com');
	//browser.driver.findElement(by.id('id=user[password]')).sendKeys('123456');
   // browser.driver.findElement(by.id('submitBtn')).click();
   // browser.driver.wait(function() {
  //    return browser.driver.getCurrentUrl().then(function(url) {
   //     return /index/.test(url);
   //   });
   // });
 // },

 // baseUrl: 'http://localhost:8000',
//};



