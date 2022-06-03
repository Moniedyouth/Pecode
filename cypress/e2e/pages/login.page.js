import * as enviroment from "../enviroment/enviroment"
class Loginpage {

    get wrapper() {
        return cy.get('.wrapper');
    }
    get logo() {
        return cy.get('#logomini');
    }
    get header() {
        return cy.get('h1');
    }
    get userInput() {
        return cy.get(':nth-child(1) > .form-control');
    }
    get passwordInput() {
        return cy.get(':nth-child(2) > .form-control');
    }
    get loginButton() {
        return cy.get('.btn');
    }
    get usernameError() {
        return cy.xpath('//input[@name="username"]//following-sibling::span')
    }
    get passwordError() {
        return cy.xpath('//input[@name="password"]//following-sibling::span')
    }
    get body() {
        return cy.get('body')
    }



    loginWithValidCredentials() {
        this.userInput.type(enviroment[0].login);
        this.passwordInput.type(enviroment[0].password);
        this.loginButton.click()
    }

    loginWithEmptyUsername() {
        this.userInput.invoke('val', enviroment[1].login);
        this.passwordInput.type(enviroment[1].password);
        this.loginButton.click()
    }

    loginWithSpaceIntoUsername() {
        this.userInput.type(enviroment[2].login);
        this.passwordInput.type(enviroment[2].password);
        this.loginButton.click()
    }

    loginWitHTMLIntoUsername() {
        this.userInput.type(enviroment[3].login);
        this.passwordInput.type(enviroment[3].password);
        this.loginButton.click()
    }

    loginWithEmptyPassword() {
        this.userInput.type(enviroment[4].login);
        this.passwordInput.invoke('val', enviroment[4].password);
        this.loginButton.click()
    }

    loginWithSpaceIntoPassword() {
        this.userInput.type(enviroment[5].login);
        this.passwordInput.type(enviroment[5].password);
        this.loginButton.click()
    }

    loginWitHTMLIntoPassword() {
        this.userInput.type(enviroment[6].login);
        this.passwordInput.type(enviroment[6].password);
        this.loginButton.click()
    }


}
export default new Loginpage();