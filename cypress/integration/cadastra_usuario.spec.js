/// <reference types="cypress"/>

let Chance = require('chance');
let chance = new Chance();

context('Cadastrar', () => {
    it('Cadastrar novo usuario', () => {
        cy.visit('/');

        cy.get('.login').click();

        //Inserir e-mail random
        cy.get('input[name="email_create"]').type(chance.email());
        cy.get('button[name="SubmitCreate"]').click();

        //Tela de cadastro
        cy.get('input[id="id_gender2"]').check();

        cy.get('input[id="customer_firstname"]').type(chance.first());
        cy.get('input[id="customer_lastname"]').type(chance.last());
        cy.get('input[id="passwd"]').type("123456");
        
        cy.get('select[id="days"]').select('14');
        cy.get('select[id="months"]').select('3');
        cy.get('select[id="years"]').select('2020');

        cy.get('input[id="newsletter"]').check();

        cy.get('input[id="company"]').type(chance.company());
        cy.get('input[id="address1"]').type(chance.address());
        cy.get('input[id="address2"]').type(chance.d100());
        cy.get('input[id="city"]').type(chance.city());
        cy.get('select[id="id_state"]').select('Florida');
        cy.get('input[id="postcode"]').type('00000');
        cy.get('input[id="phone_mobile"]').type(chance.phone());

        cy.get('button[id="submitAccount"]').click();

        cy.url().should('contain', 'my-account');
    });
});