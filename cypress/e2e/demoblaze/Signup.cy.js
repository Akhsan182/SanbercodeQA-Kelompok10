import signupPage from "../../pageObject/signupPage"
const inputan = require("../../fixtures/demoblaze/data.json")

describe('Sign Up Scenario', () => {
  const Signup_Page = new signupPage()
  beforeEach(() => {
    cy.visit('https://demoblaze.com')
  })
  it('Sign Up - Success', () => {
    Signup_Page.clickSignup1()
    Signup_Page.inputUsername(inputan.valid_signup_user)
    Signup_Page.inputPassword(inputan.valid_signup_pass)
    Signup_Page.clickSignup2()
  })

  it('Sign Up - Empty Username & Password', () => {
    Signup_Page.clickSignup1()
    Signup_Page.clickSignup2()
  })

  it('Sign Up - Empty Password', () => {
    Signup_Page.clickSignup1()
    Signup_Page.inputUsername(inputan.valid_signup_user)
    Signup_Page.clickSignup2()
  })

  it('Sign Up - Empty Username', () => {
    Signup_Page.clickSignup1()
    Signup_Page.inputPassword(inputan.valid_signup_pass)
    Signup_Page.clickSignup2()
  })
})