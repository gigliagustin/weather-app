/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import { React } from 'react'
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
  const items = await screen.findAllByRole('listitem');

  expect(items).toHaveLength(6);
});