

export const getCyElementByAttribut = (cy: Cypress.cy, id: string) => {
  return cy.get(`[data-cy=${id}]`);
};
