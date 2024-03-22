
import {getCyElementByAttribut} from './../../src/app/testHelper/test.helper';
import {APP_API} from '../../src/app/config/api.config';
describe('Liste des cvs', () => {
  it("should vist cv page ", () => {
    cy.visit('cv');
  })
  it("should have cv List ", () => {
    cy.visit('cv');
    const list = getCyElementByAttribut(cy, 'listCvs');
  })
  it("should not hav CvCard by default", () => {
    cy.visit('cv');
    getCyElementByAttribut(cy, 'cvCard').should('not.exist');
  })
  it("should getCvs Fixture", () => {
    cy.intercept(APP_API.cv, { fixture: 'cvs' });
    cy.visit('cv');
    getCyElementByAttribut(cy, 'listCvs').first().contains('Aymen');
  })
  it("should navigate after click", () => {
    cy.intercept(APP_API.cv, { fixture: 'cvs' });
    cy.visit('cv');
    const item = getCyElementByAttribut(cy, 'item').first();
    item.click();
    cy.intercept(APP_API.cv+1, { fixture: 'cv1' });
    getCyElementByAttribut(cy, 'detailCvButton').click({force: true});
    cy.location().should((location) => {
      expect(location.pathname).to.equal('/cv/1');
    });

  })
})
