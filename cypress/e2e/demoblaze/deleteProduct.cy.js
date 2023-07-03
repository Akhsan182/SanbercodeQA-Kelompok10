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
  
  it('TC_CP_12 User can delete product from cart', () => {
    Login_Page.clickLogin1()
    Menu_Header.wait()
    Login_Page.inputUsername(inputan.valid_user2)
    Login_Page.inputPassword(inputan.valid_pass2)
    Login_Page.clickLogin2()
    Menu_Header.wait()
    AddtoCart_Page.additem1()
    AddtoCart_Page.clickaddtocartButton()
    Menu_Header.clickMenuCart()
    DeleteProduct.clickDeleteProduct1()
  })

  it('TC_CP_13 User can delete product from cart on second line', () => {
    Login_Page.clickLogin1()
    Login_Page.wait()
    Login_Page.inputUsername(inputan.valid_user2)
    Login_Page.inputPassword(inputan.valid_pass2)
    Login_Page.clickLogin2()
    Login_Page.wait()
    AddtoCart_Page.additem1()
    AddtoCart_Page.clickaddtocartButton()
    Menu_Header.clickMenuHome()
    AddtoCart_Page.additem1()
    AddtoCart_Page.clickaddtocartButton()
    Menu_Header.clickMenuCart()
    DeleteProduct.clickDeleteProduct2nd()
  })

})