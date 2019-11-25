 describe("User Registration Page Tests", () => {
    it("user registration success", () => {  
       //  browser.get(https://github.com/);
	    element(by.model('id=user[login]')).sendKeys('some');
        element(by.model('id=user[email]')).sendKeys('some'+'@user.com');
        element(by.model('id=user[password]')).sendKeys('123456');
        element(by.id('submitBtn')).click();
		browser.ignoreSynchronization =true;
		    browser.get(https://github.com/);
	    browser.ignoreSynchronization =false;	
	       expect(url).toEqual('https://github.com/'); 
	});
	});