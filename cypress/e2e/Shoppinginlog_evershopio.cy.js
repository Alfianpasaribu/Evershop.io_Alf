import 'cypress-xpath';//agar fungsi xpath dapat berjalan
const faker = require('faker');//agar fungsi faker dapat berjalan

describe('Shopping_no_login', () => {
    it('signup_case_1_2_3_4_5', () => {
      const fakeName = faker.name.findName();//code untuk nama acak
      const fakeTelephone = faker.phone.phoneNumber();//code untuk phone number acak
      const streetAddress = faker.address.streetAddress();//code untuk alamat acak
      const city = faker.address.city();//code untuk kota acak
      //const zipCode = faker.address.zipCode();//code untuk membuat nomor pos acak
      cy.viewport(1920, 947);

      //login halaman demo
      cy.visit('https://demo.evershop.io/')
      //Masuk ke halaman login
      cy.xpath("//a[@href='/account/login']//*[name()='svg']").click();

      cy.xpath("//input[@placeholder='Email']").type("Alfian@gmail.com"); //input email user yang terdaftar
      cy.xpath("//input[@placeholder='Password']").type("Alfian77"); //input password user terdaftar
      cy.xpath("//span[normalize-space()='SIGN IN']").click(); //klik button sign up
      cy.wait(3000); // menunggu selama 3 detik
      cy.xpath("//a[normalize-space()='Men']").click(); //Untuk menampilkan barang khusus pria
      //menambahkan barang belanjaan
      cy.xpath("//img[@alt='Alphaedge 4d reflective shoes R']").click(); //model sepatu
      cy.xpath("//a[normalize-space()='XL']").click(); //ukuran sepatu
      cy.xpath("//a[normalize-space()='Black']").click(); //warna sepatu
      cy.wait(3000); // menunggu selama 3 detik
      cy.xpath("//button[@type='button']").click(); //klik button add to cart
      cy.xpath("//a[normalize-space()='Continue Shopping']").click(); //klik button add to cart
      cy.xpath("//a[normalize-space()='Men']").click(); //Untuk menampilkan barang khusus pria
      cy.xpath("//img[@alt='Swift run x shoes']").click(); //model sepatu
      cy.xpath("//a[normalize-space()='XL']").click(); //ukuran sepatu
      cy.xpath("//a[normalize-space()='Black']").click(); //warna sepatu
      cy.xpath("//input[@placeholder='Qty']").clear(); //jumlah barang
      cy.xpath("//input[@placeholder='Qty']").type("2"); //jumlah barang
      cy.wait(3000); // menunggu selama 3 detik
      cy.xpath("//button[@type='button']").click(); //klik button add to cart
      cy.xpath("//a[@class='add-cart-popup-button'][contains(.,'VIEW CART (2)')]").click(); //klik button view cart
      cy.xpath("//tbody/tr[2]/td[1]/div[1]/div[2]/div[2]/a[1]/span[1]").click(); //klik button
      cy.xpath("//a[@class='button primary']").click(); //klik button

      //halaman isi data untuk checkout
      cy.xpath("//input[@placeholder='Full name']").type(fakeName); //input nama acak
      cy.xpath("//input[@placeholder='Telephone']").type(fakeTelephone); //input telephone acak
      cy.xpath("//input[@placeholder='Address']").type(streetAddress); //input alamat acak
      cy.xpath("//input[@placeholder='City']").type(city); //input nama kota acak
      cy.xpath("//select[@id='address[country]']").select('CN'); //input nama negara
      cy.xpath("//select[@id='address[province]']").select('CN-34'); //input nama provinsi
      cy.xpath("//input[@placeholder='Postcode']").type("6745757"); //input postcode acak
      cy.wait(3000); // menunggu selama 3 detik
      cy.xpath("//span[normalize-space()='Express Delivery - $15.00']").click(); //klik button ongkir
      cy.wait(2000); // menunggu selama 2 detik
      cy.xpath("//button[@type='button']").click(); //klik button
      cy.wait(5000); // menunggu selama 5 detik
      cy.xpath("(//*[name()='svg'])[10]").click(); //klik button radio
      cy.wait(5000); // menunggu selama 5 detik
      cy.xpath("//button[@type='button']").click(); //klik button place order
      cy.wait(3000); // menunggu selama 3 detik
      
    })
})