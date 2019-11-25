 describe("User Registration Page Tests", () => {
    it("user registration success", () => { 
	       browser.waitForAngularEnabled(false);
           browser.get('https://github.com/'); 
		   
	    element(by.model('id=user[login]')).sendKeys('some');
        element(by.model('id=user[email]')).sendKeys('some'+'@user.com');
        element(by.model('id=user[password]')).sendKeys('123456');
        element(by.id('submitBtn')).click();
		
		    browser.waitForAngularEnabled(true);
            browser.get('https://google.com/');
		   browser.getCurrentUrl().then((url) => {
              expect(url).toBe('https://google.com/');
	});
	});
 });