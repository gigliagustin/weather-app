/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import React from 'react';
import ForecastItem from './ForecastItem';

test('ForecastItem test', async () => {
  render(<ForecastItem hour={10} state="sunny" temperature={25} weekDay="Monday" />);

  const hour = await screen.findByText(/10/);
  const temperature = await screen.findByText(/25/);
  const weekDay = await screen.findByText('Monday');

  expect(hour).toHaveTextContent('10');
  expect(temperature).toHaveTextContent('25');
  expect(weekDay).toHaveTextContent('Monday');
});
