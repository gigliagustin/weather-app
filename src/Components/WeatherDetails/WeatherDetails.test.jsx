/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import React from 'react';
import WeatherDetails from './WeatherDetails';

test('Weather details render', async () => {
  render(<WeatherDetails humidity={75} wind={3} />);

  const humid = await screen.findByText(/75/);
  const wind = await screen.findByText(/3/);

  expect(humid).toHaveTextContent('Humedad: 75%');
  expect(wind).toHaveTextContent('Viento: 3km/h');
});
