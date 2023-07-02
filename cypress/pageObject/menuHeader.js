class menuHeader {
    menuHome = '.active > .nav-link'
    menuContact = ':nth-child(2) > .nav-link'
    menuAboutus = ':nth-child(3) > .nav-link'
    menuCart = '#cartur'
    menuCart2 = ':nth-child(4) > .nav-link'
    menuLogin = '#login2'
    menuSignup = '#signin2'
    logoProduct1 = '#nava > img'
    logoProduct2 = '#nava'
    menuLogout = '#logout2'

    //Logo
    visibleLogoProduct1(){
        cy.get(this.logoProduct1).should('be.visible')
    }

    visibleLogoProduct2(){
        cy.get(this.logoProduct2).should('be.visible')
    }
    
    //Home
    visibleMenuHome(){
        cy.get(this.menuHome).should('be.visible')
    }
    
    clickMenuHome(){
        cy.get(this.menuHome).click()
    }

    //Contact
    visibleMenuContact(){
        cy.get(this.menuContact).should('be.visible')
    }
    
    clickMenuContact(){
        cy.get(this.menuContact).click()
    }

    //About us
    visibleMenuAboutus(){
        cy.get(this.menuAboutus).should('be.visible')
    }
    
    clickMenuAboutus(){
        cy.get(this.menuAboutus).click()
    }

    //Cart
    visibleMenuCart(){
        cy.get(this.menuCart2).should('be.visible')
    }
    
    clickMenuCart(){
        cy.get(this.menuCart).click() 
    }

    //Login
    visibleMenuLogin(){
        cy.get(this.menuLogin).should('be.visible')
    }
    
    clickMenuLogin(){
        cy.get(this.menuLogin).click() 
    }

    //Signup
    visibleMenuSignup(){
        cy.get(this.menuSignup).should('be.visible')
    }
    
    clickMenuSignup(){
        cy.get(this.menuSignup).click() 
    }

    //wait 200
    wait(){
        cy.wait(200)
    }

    //Logout
    clickMenuLogout(){
        cy.get(this.menuLogout).click() 
    }

}

export default menuHeader