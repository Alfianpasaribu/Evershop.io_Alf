import 'cypress-xpath';//agar fungsi xpath dapat berjalan

describe('LogIn_Feature', () => {
    it('signup_case1', () => {
      //login halaman demo
      cy.visit('https://demo.evershop.io/')

      //Masuk ke halaman login
      cy.xpath("//a[@href='/account/login']//*[name()='svg']").click();

      cy.xpath("//input[@placeholder='Email']").type("Alfian@gmail.com"); //input email user yang terdaftar
      cy.xpath("//input[@placeholder='Password']").type("Alfian77"); //input password user terdaftar
      cy.xpath("//span[normalize-space()='SIGN IN']").click(); //klik button sign up
      cy.wait(3000); // menunggu selama 3 detik
    })

    it('signup_case2', () => {
        //login halaman demo
        cy.visit('https://demo.evershop.io/')
  
        //Masuk ke halaman login
        cy.xpath("//a[@href='/account/login']//*[name()='svg']").click();
  
        cy.xpath("//input[@placeholder='Email']").type("Alfian55@gmail.com"); //input email user yang belum terdaftar
        cy.xpath("//input[@placeholder='Password']").type("Atfian77"); //input password user yang salah
        cy.xpath("//span[normalize-space()='SIGN IN']").click(); //klik button sign up
        cy.wait(3000); // menunggu selama 3 detik
      })
})