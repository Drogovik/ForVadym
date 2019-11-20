describe("User Registration Page Tests", () => {
    it("user registration success", () => {
	browser.get("https://github.com/");
	// element(by.model('user[login]')).sendKeys('some')
	    element(by.model('user[login]')).sendKeys('some');
        element(by.model('user[email]')).sendKeys('some'+'@user.com');
        element(by.model('user[password]')).sendKeys('123456');
        element(by.id('submitBtn')).click();
		browser.getCurrentUrl().then(function(url) {
            expect(url).toEqual('https://github.com/');     
        });
	});
	});