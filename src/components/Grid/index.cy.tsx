import React from 'react';
import { mount } from 'cypress/react';
import Grid from './index';
import { mockTable } from '../../mocks/data';
import { DataProvider } from '../../contexts/data';

describe('Grid', () => {
  it('Render Grid with mock data', () => {

    mount(
      <DataProvider mock={mockTable}>
        <Grid />
      </DataProvider>
    );

    cy.get('[data-test="product"]').should('have.length', 3);
    cy.get('[data-test="product"]').first().should('contain', 'Bier');
    cy.get('[data-test="sum"]').should('exist');
    cy.get('[data-test="sum"]').should('contain', '86.40€');
  });
});
