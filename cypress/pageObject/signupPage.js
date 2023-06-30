class signupPage{
    signupBtn1 = '#signin2'
    username = '#sign-username'
    password = '#sign-password'
    signupBtn2 = '#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'
    alert = '#nameofuser'

    clickSignup1(){
        cy.get(this.signupBtn1).click()
    }
    
    inputUsername(user){
        cy.get(this.username, {delay: 0}).type(user) 
    }

    wait(){
        cy.wait(100)
    }
    
    inputPassword(passw){
        cy.get(this.password, {delay: 0}).type(passw)
    }

    clickSignup2(){
        cy.get(this.signupBtn2).click()
    }

    validate(){
        cy.get(this.alert).should('be.visible')
    }
}

export default signupPage