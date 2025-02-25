describe('login',()=>{  
  beforeEach(() =>{
    cy.visit("http://127.0.0.1:8000/accounts/login/")
 })
    it('Deve fazer login com sucesso', () => {
        cy.get('[name="username"]').type('samuel'); 
        cy.get('[name="password"]').type('teste123'); 
         cy.get('form > .btn').click();
        
         cy.url().should('not.include', '/login'); 
      })
      it('não deve fazer login  ', () => {
        cy.get('[name="username"]').type('teste'); 
        cy.get('[name="password"]').type('teste'); 
         cy.get('form > .btn').click();
        
      })

}
)  
describe('registrar',()=>{
  beforeEach(() =>{
    cy.visit("http://127.0.0.1:8000/accounts/register/")
 })
    it('Deve fazer cadastrar com sucesso', () => {
      cy.get('[name="username"]').type('samuel soares'); 
      cy.get('[name="email"]').type('samuel@gmail.com'); 
      cy.get('[name="password1"]').type('teste123'); 
      cy.get('[name="password2"]').type('teste123'); 
       cy.get('form > .btn').click();
      
    })
    it('Deve falar que email já cadastrato', () => {
      cy.get('[name="username"]').type('samuel'); 
      cy.get('[name="email"]').type('samulheus67@gmail.com'); 
      cy.get('[name="password1"]').type('teste123'); 
      cy.get('[name="password2"]').type('teste123'); 
       cy.get('form > .btn').click();
      
    })
    it('email errado', () => {
      cy.get('[name="username"]').type('samuel'); 
      cy.get('[name="email"]').type('samuelgmail.com'); 
      cy.get('[name="password1"]').type('teste123'); 
      cy.get('[name="password2"]').type('teste123'); 
       cy.get('form > .btn').click();
      
    })
}
)  
describe('esqueceu a senha ',()=>{
  it('Deve fazer login com sucesso', () => {
      cy.visit('http://127.0.0.1:8000/accounts/forget-password/')
      cy.get('[name="email"]').type('samulheus67@gmail.com'); 
       cy.get('form > .btn').click();
      
    })
}
)  