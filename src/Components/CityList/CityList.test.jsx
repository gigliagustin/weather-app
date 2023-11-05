/* eslint-disable no-undef */
import { fireEvent, render, screen } from '@testing-library/react';
import { React } from 'react';
import CityList from './CityList';

const cities = [
  { city: 'Tucumán', country: 'Argentina' },
  { city: 'Sao Paulo', country: 'Brasil' },
  { city: 'California', country: 'Estados Unidos' },
  { city: 'Amsterdam', country: 'Países Bajos' },
  { city: 'Marche', country: 'Italia' },
  { city: 'Bogotá', country: 'Colombia' },
];

test('CityList Render', async () => {
  /// AAA Arrange, Act, Assert
  render(<CityList cities={cities} />);
  const items = await screen.findAllByRole('button');

  expect(items).toHaveLength(6);
});

test('City list click on item', async () => {
  // We must simulate an user action clicking an item
  // we're gonna use "mock" function

  const fnClickOnItem = jest.fn();

  render(<CityList cities={cities} onClickCity={fnClickOnItem} />);

  const items = await screen.findAllByRole('button');

  // Now to simulate the acction, we're gonna use fireEvent
  // fireEvent is part of the testing-library

  fireEvent.click(items[0]);

  // What must happened now?
  // It must be called to the fnClickonItem function once.

  expect(fnClickOnItem).toHaveBeenCalledTimes(1);
});
