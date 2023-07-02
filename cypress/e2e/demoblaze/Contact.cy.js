import contactMenu from "../../pageObject/contactMenu"
const inputan = require("../../fixtures/demoblaze/dataContactUs.json")

describe('Contact Us Scenario', () => {
  const Contact_Us = new contactMenu()
  beforeEach(() => {
    cy.visit('https://demoblaze.com')
  })

  it('Send Short Message - Success', () => {
    Contact_Us.clickContactNavLink()
    Contact_Us.inputContactEmail(inputan.contact_email)
    Contact_Us.inputContactName(inputan.contact_name)
    Contact_Us.inputMessage(inputan.short_message)
    Contact_Us.clickSendMessage()
    Contact_Us.validate_success()
  })

  it('Send Long Message - Success', () => {
    Contact_Us.clickContactNavLink()
    Contact_Us.inputContactEmail(inputan.contact_email)
    Contact_Us.inputContactName(inputan.contact_name)
    Contact_Us.inputMessage(inputan.long_message)
    Contact_Us.clickSendMessage()
    Contact_Us.validate_success()
  })

  it('Failed Send Message - Invalid Email', () => {
    Contact_Us.clickContactNavLink()
    Contact_Us.inputContactEmail(inputan.invalid_contact_email)
    Contact_Us.inputContactName(inputan.contact_name)
    Contact_Us.inputMessage(inputan.short_message)
    Contact_Us.clickSendMessage()
    Contact_Us.validate_failed_invalid_email()
  })

  it('Failed Send Message - All Blank Field', () => {
    Contact_Us.clickContactNavLink()
    Contact_Us.clickSendMessage()
    Contact_Us.validate_failed_blank_field()
  })

  it('Failed Send Message - Empty Contact Email', () => {
    Contact_Us.clickContactNavLink()
    Contact_Us.inputContactName(inputan.contact_name)
    Contact_Us.inputMessage(inputan.short_message)
    Contact_Us.clickSendMessage()
    Contact_Us.validate_failed_empty_email()
  })

  it('Failed Send Message - Empty Contact Name', () => {
    Contact_Us.clickContactNavLink()
    Contact_Us.inputContactEmail(inputan.contact_email)
    Contact_Us.inputMessage(inputan.short_message)
    Contact_Us.clickSendMessage()
    Contact_Us.validate_failed_empty_name()
  })

  it('Failed Send Message - Empty Message Field', () => {
    Contact_Us.clickContactNavLink()
    Contact_Us.inputContactEmail(inputan.contact_email)
    Contact_Us.inputContactName(inputan.contact_name)
    Contact_Us.clickSendMessage()
    Contact_Us.validate_failed_empty_message()
  })

})