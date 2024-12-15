/// <reference types="cypress" />
import 'cypress-file-upload';
import 'cypress-axe';

// Extender la interfaz Chainable para incluir el comando personalizado
declare global {
  namespace Cypress {
    interface Chainable {
      testA11y(context: any, options?: any, violationCallback?: (violations: any[]) => void, skipFailures?: boolean): Chainable<Element>;
    }
  }
}

// Definir un comando personalizado para inyectar axe-core y luego realizar la comprobación
Cypress.Commands.add('testA11y', (context: any, options?: any, violationCallback?: (violations: any[]) => void, skipFailures?: boolean) => {
  cy.injectAxe(); // Inyectar axe-core
  cy.checkA11y(context, options, violationCallback, skipFailures); // Usar el comando original de cypress-axe
});