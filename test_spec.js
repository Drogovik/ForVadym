  
describe("User Registration Page Tests", () => {
    it("user registration success", () => {    
	    element(by.model('user[login]')).sendKeys('some');
        element(by.model('user[email]')).sendKeys('some'+'@user.com');
        element(by.model('user[password]')).sendKeys('123456');
        element(by.id('submitBtn')).click();
		browser.ignoreSynchronization = true;
		browser.getCurrentUrl().then(function(url)
	    browser.waitForAngularEnabled(false);	
	{
            expect(url).toEqual('https://github.com/'); 
		
        });
	});
	});

	
	
// browser.waitForAngularEnabled(false);
// browser.get('/non-angular-login-page.html');

// element(by.id('username')).sendKeys('Jane');
// element(by.id('password')).sendKeys('1234');
// element(by.id('clickme')).click();

// browser.waitForAngularEnabled(true);
// browser.get('/page-containing-angular.html');