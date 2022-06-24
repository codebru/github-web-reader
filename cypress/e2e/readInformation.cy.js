describe('GIVEN I am a user that wants to read the information on the site', () => {
  it('WHEN I go to the home page THEN I seed the base readme for the github markdown repo', () => {
    cy.visit('http://0.0.0.0:3000');
    cy.contains('Sample markdown project for testing the github-web-reader codebase');
  });

  it('WHEN I decide to read a sub page AND select that page from the navigation THEN it is displayed to me', () => {
    cy.visit('http://0.0.0.0:3000');
    cy.contains('subpage').click();
    cy.contains('Subpage Title');
  });
});
