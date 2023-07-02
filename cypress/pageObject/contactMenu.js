class contactMenu {
    contactNavlink = ':nth-child(2) > .nav-link'
    contactEmail = '#recipient-email'
    contactName = '#recipient-name'
    message = '#message-text'
    btnSendMessage = '#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'
    //alert = '#nameofuser'

    clickContactNavLink() {
        cy.get(this.contactNavlink).click()
    }

    inputContactEmail(email) {
        cy.get(this.contactEmail, { delay: 0 }).type(email)
    }

    wait() {
        cy.wait(100)
    }

    inputContactName(name) {
        cy.get(this.contactName, { delay: 0 }).type(name)
    }

    wait() {
        cy.wait(100)
    }

    inputMessage(msg) {
        cy.get(this.message, { delay: 0 }).type(msg)
    }

    clickSendMessage() {
        cy.get(this.btnSendMessage).click()
    }

    validate_success() {
        //     cy.get(this.alert).should('be.visible')
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Thanks for the message!!`)
        })
    }

    validate_failed_invalid_email() {
        //     cy.get(this.alert).should('be.visible')
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Please input valid email`)
        })
    }

    validate_failed_blank_field() {
        //     cy.get(this.alert).should('be.visible')
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Field cannpt be empty. Please fill in with a valid data.`)
        })
    }

    validate_failed_empty_email() {
        //     cy.get(this.alert).should('be.visible')
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Contact email field cannot be empty`)
        })
    }

    validate_failed_empty_name() {
        //     cy.get(this.alert).should('be.visible')
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Contact name field cannot be empty`)
        })
    }

    validate_failed_empty_message() {
        //     cy.get(this.alert).should('be.visible')
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Message cannot be empty`)
        })
    }
}

export default contactMenu