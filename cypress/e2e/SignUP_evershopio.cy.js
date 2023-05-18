import 'cypress-xpath';//agar fungsi xpath dapat berjalan
const faker = require('faker');//agar fungsi faker dapat berjalan

describe('Signup_case_1', () => {
    it('signup_case1', () => {
      const email = faker.internet.email();//code untuk membuat email palsu
      
      //login halaman demo
      cy.visit('https://demo.evershop.io/')
     
      //Masuk ke halaman login
      cy.xpath("//a[@href='/account/login']//*[name()='svg']").click();
     
      //Masuk ke halaman sign up
      cy.xpath("//a[normalize-space()='Create an account']").click();
     
      //Sign up new user
      cy.xpath("//input[@placeholder='Full Name']").type("Alfian"); //input Nama User
      cy.xpath("//input[@placeholder='Email']").type(email); //input email user
      cy.xpath("//input[@placeholder='Password']").type("A1fian77"); //input password user
      cy.xpath("//button[@type='button']").click(); //klik button sign up
      cy.wait(3000); // menunggu selama 3 detik
    })

    it('Signup_case_2', () => {
      const email = faker.internet.email();//code untuk membuat email palsu
    
      //login halaman demo
      cy.visit('https://demo.evershop.io/')
    
      //Masuk ke halaman login
      cy.xpath("//a[@href='/account/login']//*[name()='svg']").click();
   
      //Masuk ke halaman sign up
   
      cy.xpath("//a[normalize-space()='Create an account']").click();
      //Sign up new user
      cy.xpath("//input[@placeholder='Full Name']").type("Alfian"); //input Nama User
      cy.xpath("//input[@placeholder='Email']").type("Alfian@gmail.com"); //input email user
      cy.xpath("//input[@placeholder='Password']").type("A1fian77"); //input password user
      cy.xpath("//button[@type='button']").click(); //klik button sign up
      cy.xpath("//input[@placeholder='Email']").clear(); // fungsi "clear" untuk menghapus email sebelumnya
      cy.xpath("//input[@placeholder='Email']").type(email); //input email user
      cy.xpath("//button[@type='button']").click(); //klik button sign up
      cy.wait(3000); // menunggu selama 3 detik
    });
  })