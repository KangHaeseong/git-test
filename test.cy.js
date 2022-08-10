describe('sample spec', () => {

  it('visit platform', () => {
    cy.visit('https://gloground.com'), {
      onBeforeLoad: (win) => {
        win.sessionStorage.clear()
      }
    }
  })

  it('login test', () => {
   cy.get('input[name="email"]').type('glozmaster1@gmail.com')
   cy.get('input[name="password"]').type('Test123!@#')
    cy.get('.btn.btn-primary.btn-login').click()
  })

  it('skip walkthrough', () => {
    cy.get('#skip_workthrough').click()
  })

  it('profile', () => {
    cy.contains('GloZpro0005776271').should('have.class', 'img[alt="icon=profile"]').click({force: true})
  })

  it('Forum Test', () => {
    cy.get('.nickname').contains('GloZpro0006627565')
    cy.contains('Forum').click()
    cy.contains('Bulletin Board').click()
    cy.contains('Create Discussion').click()
    cy.get('input[placeholder="Title"]').type('test')
    cy.get('div[class="ProseMirror toastui-editor-contents"]').type('test')
    cy.get('.basicButton_Blue100perButton__Dkxpt.null').click()
    cy.get('.basicButton_BlueShortButton__0BYIX.null').click()
    cy.contains('GloZ Platform Users Guidelines').click()
    cy.get('textarea[maxlength="300"]').type('test')
    cy.get('.sc-hAWXA-d.hxHAwd').click()
    cy.get('img[style="cursor:.pointer;"]').click()
    cy.go('back')
    cy.get('#skip_workthrough').click()
    cy.contains('My Board').click()
    cy.contains('test').should('be.visible').click({force: true})
    cy.get('img[alt="delete"]').click()
    cy.get('.basicButton_BlueShortButton__0BYIX.null').click()
  })

    it('Add Request', () => {
    cy.contains('Request').click()
    cy.contains('Video Transcription').click()
    cy.get('input[name="sourceUrl"]').type('https://www.youtube.com/watch?v=dV1HbIh3yOA')
    cy.get('#importConfirm').click()
    check price
     cy.get('.amount').contains('30.69')
    
    cy.get('#rememberSelected').check({force: true})
    cy.contains('NEXT').should('have.class', 'basicButton_Blue100perButton__Dkxpt').click({force: true})
    cy.contains('PAYMENT').should('be.visible').click()
  })

  it('Wesub test', () => {
    cy.contains('Request').click()
    cy.contains('Wesub').click()
    cy.contains('NEW').should('be.visible').click()
    cy.get('input[name="url"]').type('https://www.youtube.com/watch?v=9VNNVQ0TZS8')
    cy.get('input[value="IMPORT"]').click()
    cy.get('input[type="checkbox"]').click()
    cy.get('.sc-gmAFnh.sc-fEpNGT.lmkqrF.jdQhLk').click({force: true})
    cy.get('svg[class="css-8mmkcg"]').should('be.visible').click()
  })
})
