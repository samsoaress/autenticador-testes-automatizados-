// Desafio_tecnico_qa_Samuel_soares_caldeira

import { loginElements, registerElements, forgotPasswordElements } from '../support/elements';

describe('Login', () => {  
  beforeEach(() => {
    cy.visit("http://127.0.0.1:8000/accounts/login/");
  });

  it('Deve fazer login com sucesso', () => {
    cy.get(loginElements.username).type('samuel'); 
    cy.get(loginElements.password).type('teste123'); 
    cy.get(loginElements.loginButton).click();


    cy.url().should('not.include', '/login'); 
    cy.contains(' Bem-vindo, samuel').should('be.visible');
  });
 
  it('Não deve fazer login com credenciais inválidas', () => {
    cy.get(loginElements.username).type('teste'); 
    cy.get(loginElements.password).type('teste'); 
    cy.get(loginElements.loginButton).click();

    cy.contains('Credenciais inválidas').should('be.visible');

  });
});

describe('Registro', () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:8000/accounts/register/");
  });

  it('Deve cadastrar com sucesso', () => {
    cy.get(registerElements.username).type('jose soares'); 
    cy.get(registerElements.email).type('jose@gmail.com'); 
    cy.get(registerElements.password1).type('teste123'); 
    cy.get(registerElements.password2).type('teste123'); 
    cy.get(registerElements.registerButton).click();

    cy.contains('Usuário já existe').should('be.visible');
  });

  it('Deve exibir erro ao tentar cadastrar com um e-mail já cadastrado', () => {
    cy.get(registerElements.username).type('samuel'); 
    cy.get(registerElements.email).type('samulheus67@gmail.com'); 
    cy.get(registerElements.password1).type('teste123'); 
    cy.get(registerElements.password2).type('teste123'); 
    cy.get(registerElements.registerButton).click();

    cy.contains('Usuário já existe').should('be.visible');

  });

  it('Deve exibir erro ao cadastrar com e-mail inválido', () => {
    cy.get(registerElements.username).type('samuel'); 
    cy.get(registerElements.email).type('samuelgmail.com'); 
    cy.get(registerElements.password1).type('teste123'); 
    cy.get(registerElements.password2).type('teste123'); 
    cy.get(registerElements.registerButton).click();

    cy.contains('@').should('be.visible');
  });
});

describe('Recuperação de Senha', () => {
  it('Deve enviar e-mail de recuperação de senha', () => {
    cy.visit('http://127.0.0.1:8000/accounts/forget-password/');
    cy.get(forgotPasswordElements.email).type('samulheus67@gmail.com'); 
    cy.get(forgotPasswordElements.submitButton).click();


    cy.contains('TemplateDoesNotExist').should('be.visible');

    
  });
});
