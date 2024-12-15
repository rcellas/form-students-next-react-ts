describe('Student Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'); 
    cy.injectAxe();
  });

  it('Should verify that the name can be entered', () => {
    cy.get('input[name="name"]').type('John Doe').should('have.value', 'John Doe');
  });

  it('Should verify that the description can be entered', () => {
    cy.get('textarea[name="description"]').type('Student description').should('have.value', 'Student description');
  });

  it('Should verify that stack options can be selected', () => {
    const stacks = ['JavaScript', 'Python', 'Java', 'C#', 'Ruby'];
    stacks.forEach(stack => {
      cy.get(`input[type="checkbox"][id="${stack}"]`).check().should('be.checked');
    });
  });

  it('Should verify that LinkedIn can be entered', () => {
    cy.get('input[name="linkedin"]').type('https://www.linkedin.com/in/johndoe').should('have.value', 'https://www.linkedin.com/in/johndoe');
  });

  it('Should verify that a CV file can be attached', () => {
    const filePath = 'cv.pdf'; 
    cy.get('input[name="cv"]').attachFile(filePath);
    cy.get('input[name="cv"]').should('have.prop', 'files').then((files) => {
      const fileList = files as unknown as FileList;
      expect(fileList[0].name).to.equal('cv.pdf');
    });
  });

  it('Should verify that the province can be entered', () => {
    cy.get('input[name="provincia"]').type('Madrid').should('have.value', 'Madrid');
  });

  it('Should verify that the autonomous community can be entered', () => {
    cy.get('input[name="comunidad"]').type('Community of Madrid').should('have.value', 'Community of Madrid');
  });

  it('Should verify that the postal code can be entered', () => {
    cy.get('input[name="codigoPostal"]').type('28001').should('have.value', '28001');
  });

  it('Should verify that the submit button is present and clickable', () => {
    cy.get('button[type="submit"]').should('exist').and('be.visible').click();
  });

  it('Should verify that the form is submitted correctly', () => {
    cy.get('input[name="name"]').type('John Doe');
    cy.get('textarea[name="description"]').type('Student description');
    const stacks = ['JavaScript', 'Python', 'Java', 'C#', 'Ruby'];
    stacks.forEach(stack => {
      cy.get(`input[type="checkbox"][id="${stack}"]`).check();
    });
    cy.get('input[name="linkedin"]').type('https://www.linkedin.com/in/johndoe');
    const filePath = 'cv.pdf';
    cy.get('input[name="cv"]').attachFile(filePath);
    cy.get('input[name="cv"]').should('have.prop', 'files').then((files) => {
      const fileList = files as unknown as FileList;
      expect(fileList[0].name).to.equal('cv.pdf');
    });
    cy.get('input[name="provincia"]').type('Madrid');
    cy.get('input[name="comunidad"]').type('Community of Madrid');
    cy.get('input[name="codigoPostal"]').type('28001');
    cy.get('button[type="submit"]').click();
  });

  it('Should run accessibility audits on the form', () => {
    cy.checkA11y('form', {
      runOnly: {
        type: 'tag',
        values: ['wcag2a', 'wcag2aa'], 
      }
    }, (violations) => {
      if (violations.length) {
        cy.log('Accessibility: Violations found');
        violations.forEach((violation) => {
          cy.log(`${violation.id}: ${violation.description}`);
          cy.log('Affected nodes:', violation.nodes.map((node) => node.html).join(', '));
        });
      }
      cy.wrap(violations).should('have.length', 0, `${violations.length} accessibility violation${violations.length === 1 ? '' : 's'} detected`);
    });
  });
});