import loginPage from "../../pageObject/loginPage"
import addtocartPage from "../../pageObject/addtocartPage"
import deleteProduct from "../../pageObject/deleteProduct"
import menuHeader from "../../pageObject/menuHeader"
const inputan = require('../../fixtures/demoblaze/data.json')

describe('User delete product from Cart page', () => {
  const Login_Page = new loginPage()
  const AddtoCart_Page = new addtocartPage()
  const DeleteProduct = new deleteProduct()
  const Menu_Header = new menuHeader()
  beforeEach(() => {
    cy.visit('')
  })
  
  it('User delete product from Cart page', () => {
    Login_Page.clickLogin1()
    Menu_Header.wait()
    Login_Page.inputUsername(inputan.valid_user)
    Login_Page.inputPassword(inputan.valid_pass)
    Login_Page.clickLogin2()
    Menu_Header.wait()
    AddtoCart_Page.additem1()
    AddtoCart_Page.clickaddtocartButton()
    Menu_Header.clickMenuCart()
    DeleteProduct.clickDeleteProduct1()
    Menu_Header.clickMenuLogout()
  })

})