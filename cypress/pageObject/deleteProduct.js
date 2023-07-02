class deleteProduct{
    deleteProduct1 = '#tbodyid > :nth-child(1) > :nth-child(4) > a'
    deleteProduct2nd = '#tbodyid > :nth-child(2) > :nth-child(4) > a'

    clickDeleteProduct1(){
        cy.get(this.deleteProduct1).click()
    }

    clickDeleteProduct2nd(){
        cy.get(this.deleteProduct2nd).click()
    }

}

export default deleteProduct