import React from 'react';
import { mount } from 'cypress/react';
import Layout from './index';
import { mockTable } from '../../mocks/data';
import { DataProvider } from '../../contexts/data';

describe('Layout', () => {
  it('Render Layout with mock data', () => {

    mount(
      <DataProvider mock={mockTable}>
        <Layout />
      </DataProvider>
    );

    cy.get('[data-test="header"]').should('exist');
    cy.get('[data-test="header"]').should('contain', 'Pending orders: 1');
  });
});
