import {And, Given, Then, When} from "cypress-cucumber-preprocessor/steps"
import AuthPage from '../Pages/AuthPage';

//TC_807
//Login and password field required

    When ('I click on connexion button without filling in the login and password fields', () =>{
        AuthPage.clickOnLoginBtn()
    });

    Then('User should see and error message below the login and password fields', ()=> {
        cy.contains('email est invalid')
        .should('be.visible')
    });