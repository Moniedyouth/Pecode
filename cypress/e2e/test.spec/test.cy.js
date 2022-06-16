
import loginPage from "../pages/login.page";


describe('Test Login page', () => {

    it('Are all elements present', () => {
        loginPage.wrapper.should('be.visible');
        loginPage.logo.should('be.visible');
        loginPage.header.should('be.visible');
        loginPage.userInput.should('be.visible');
        loginPage.passwordInput.should('be.visible');
        loginPage.loginButton.should('be.visible');
    });

    it('Login with valid credantials', () => {
        loginPage.usernameError.should('not.be.visible');
        loginPage.loginWithValidCredentials();
        loginPage.usernameError.should('be.visible').should('have.text', 'No account found with that username.');
    });

    it('Login with no credantials', () => {
        loginPage.usernameError.should('not.be.visible');
        loginPage.loginButton.click();
        loginPage.usernameError.should('be.visible').should('have.text', 'Please enter username.');
        loginPage.passwordError.should('be.visible').should('have.text', 'Please enter your password.');
    });

    it('Login with empty username input', () => {
        loginPage.usernameError.should('not.be.visible');
        loginPage.loginWithEmptyUsername();
        loginPage.usernameError.should('be.visible').should('have.text', 'Please enter username.');
    });

    it('Login with space into username input', () => {
        loginPage.usernameError.should('not.be.visible');
        loginPage.loginWithSpaceIntoUsername();
        loginPage.usernameError.should('be.visible').should('have.text', 'Please enter username.');
    });

    it('Login with HTML into username input', () => {
        loginPage.usernameError.should('not.be.visible');
        loginPage.loginWitHTMLIntoUsername;
        // Login form shouldn't take on a value HTML code. Should show Error message. So test should falls.
        loginPage.usernameError.should('be.visible').should('have.text', 'Please enter username.');
    });

    it('Login with empty password input', () => {
        loginPage.passwordError.should('not.be.visible');
        loginPage.loginWithEmptyPassword();
        loginPage.passwordError.should('be.visible').should('have.text', 'Please enter your password.');
    });

    it('Login with space into password input', () => {
        loginPage.passwordError.should('not.be.visible');
        loginPage.loginWithSpaceIntoPassword();
        loginPage.passwordError.should('be.visible').should('have.text', 'Please enter your password.');
    });

    it('Login with HTML into password input', () => {
        loginPage.passwordError.should('not.be.visible');
        loginPage.loginWitHTMLIntoPassword();
        // Login form shouldn't take on a value HTML code. Should show Error message. So test should falls. 
        loginPage.passwordError.should('be.visible').should('have.text', 'Please enter your password.');
    });


})