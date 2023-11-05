/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import React from 'react';
import Forecast from './Forecast';

const forecastItemList = [
  {
    hour: 18, state: 'sunny', temperature: 17, weekDay: 'Jueves',
  },
  {
    hour: 6, state: 'cloud', temperature: 18, weekDay: 'Viernes',
  },
  {
    hour: 12, state: 'fog', temperature: 18, weekDay: 'Viernes',
  },
  {
    hour: 19, state: 'cloudy', temperature: 19, weekDay: 'Viernes',
  },
  {
    hour: 14, state: 'rain', temperature: 17, weekDay: 'Sabado',
  },
  {
    hour: 13, state: 'rain', temperature: 17, weekDay: 'Sabado',
  },
];

test('Forecast render', async () => {
  render(
    <Forecast
      forecastItemList={forecastItemList}
    />,
  );

  const forecastItems = await screen.findAllByTestId('forecast-item-container');

  expect(forecastItems).toHaveLength(6);
});

test('Forecast render', async () => {
  render(
    <Forecast
      forecastItemList={forecastItemList}
    />,
  );

  const forecastItems = await screen.findAllByTestId('forecast-item-container');

  expect(forecastItems).not.toHaveLength(7);
});
