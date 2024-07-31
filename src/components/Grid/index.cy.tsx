import React from 'react';
import { mount } from 'cypress/react';
import Grid from './index';
import { DataProvider } from '../../contexts/data';

describe('Grid', () => {
  it('should render correctly with mock data', () => {

    mount(
      <DataProvider isTest>
        <Grid />
      </DataProvider>
    );

    // Add your assertions here
    // cy.get('some-selector').should('contain', 'expected text');
    cy.get('[data-test-id="sum"]').should('exist');
    cy.get('[data-test-id="sum"]').should('contain', '86.40€');
  });
});
