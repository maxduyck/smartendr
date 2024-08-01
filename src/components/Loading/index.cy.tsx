import React from 'react';
import { mount } from 'cypress/react';
import Loading from './index';
import { mockError, mockLoading } from '../../mocks/data';
import { DataProvider } from '../../contexts/data';

describe('Loading', () => {
  it('Render Loading view while loading', () => {

    mount(
      <DataProvider mock={mockLoading}>
        <Loading />
      </DataProvider>
    );

    cy.get('[data-test="loader"]').should('exist');
  });

  it('Render Loading view with error', () => {

    mount(
      <DataProvider mock={mockError}>
        <Loading />
      </DataProvider>
    );

    cy.get('[data-test="error"]').should('exist');
    cy.get('[data-test="error"]').should('contain', 'An error occurred');
  });
});
