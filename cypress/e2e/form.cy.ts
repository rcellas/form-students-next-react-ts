describe('Formulario de Estudiante', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'); 
    cy.injectAxe();
  });

  it('Verifica que se puede ingresar el nombre', () => {
    cy.get('input[name="name"]').type('John Doe').should('have.value', 'John Doe');
  });

  it('Verifica que se puede ingresar la descripción', () => {
    cy.get('textarea[name="description"]').type('Descripción del estudiante').should('have.value', 'Descripción del estudiante');
  });

  it('Verifica que se pueden seleccionar opciones de stack', () => {
    const stacks = ['JavaScript', 'Python', 'Java', 'C#', 'Ruby'];
    stacks.forEach(stack => {
      cy.get(`input[type="checkbox"][id="${stack}"]`).check().should('be.checked');
    });
  });

  it('Verifica que se puede ingresar el LinkedIn', () => {
    cy.get('input[name="linkedin"]').type('https://www.linkedin.com/in/johndoe').should('have.value', 'https://www.linkedin.com/in/johndoe');
  });

  it('Verifica que se puede adjuntar un archivo de CV', () => {
    const filePath = 'cv.pdf'; 
    cy.get('input[name="cv"]').attachFile(filePath);
    cy.get('input[name="cv"]').should('have.prop', 'files').then((files) => {
      const fileList = files as unknown as FileList;
      expect(fileList[0].name).to.equal('cv.pdf');
    });
  });

  it('Verifica que se puede ingresar la provincia', () => {
    cy.get('input[name="provincia"]').type('Madrid').should('have.value', 'Madrid');
  });

  it('Verifica que se puede ingresar la comunidad autónoma', () => {
    cy.get('input[name="comunidad"]').type('Comunidad de Madrid').should('have.value', 'Comunidad de Madrid');
  });

  it('Verifica que se puede ingresar el código postal', () => {
    cy.get('input[name="codigoPostal"]').type('28001').should('have.value', '28001');
  });

  it('Verifica que el botón de envío está presente y se puede hacer clic', () => {
    cy.get('button[type="submit"]').should('exist').and('be.visible').click();
  });

  it('Verifica que el formulario se envía correctamente', () => {
    cy.get('input[name="name"]').type('John Doe');
    cy.get('textarea[name="description"]').type('Descripción del estudiante');
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
    cy.get('input[name="comunidad"]').type('Comunidad de Madrid');
    cy.get('input[name="codigoPostal"]').type('28001');
    cy.get('button[type="submit"]').click();
  });

  // tarda demasiado
  // it('Realiza una auditoría de accesibilidad en toda la página', () => {
  //   cy.checkA11y();
  // });

  it('Realiza una auditoría de accesibilidad en el formulario', () => {
    cy.get('form').checkA11y(); 
  });

  it('Realiza una auditoría de accesibilidad en campos específicos', () => {
    cy.get('input[name="name"]').checkA11y();
    cy.get('textarea[name="description"]').checkA11y();
    cy.get('input[name="linkedin"]').checkA11y();
    cy.get('input[name="cv"]').checkA11y();
    cy.get('input[name="provincia"]').checkA11y();
    cy.get('input[name="comunidad"]').checkA11y();
    cy.get('input[name="codigoPostal"]').checkA11y();
  });

  it('Realiza una auditoría de accesibilidad en el botón de envío', () => {
    cy.get('button[type="submit"]').checkA11y();
  });
});