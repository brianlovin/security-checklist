import data from '../../config/data';

describe('Home', () => {
  before(() => {
    cy.visit('/');
  });

  it('should render footer', () => {
    cy.get('[data-cy="footer"]')
      .scrollIntoView()
      .should('be.visible');

    cy.get(`[href="https://github.com/brianlovin/security-checklist"]`).should(
      'be.visible'
    );
  });

  it('should render header', () => {
    cy.get('[data-cy="header"]')
      .scrollIntoView()
      .should('be.visible');

    cy.get(`[href="/about"]`).should('be.visible');
    cy.get(`[href="https://github.com/brianlovin/security-checklist"]`).should(
      'be.visible'
    );
  });

  it('should render content', () => {
    const dataKeys = Object.keys(data);
    dataKeys.map(key => {
      cy.contains(data[key].title);
    });
  });
});
