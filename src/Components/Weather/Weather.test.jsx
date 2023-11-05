/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import React from 'react';
import Weather from './Weather';

// TDD
test('Weather sunny render', async () => {
  // AAA Arrange, Act, Assert
  render(<Weather temperature={10} state="sunny" />);

  const temp = await screen.findByRole('heading');

  expect(temp).toHaveTextContent(10);
});
