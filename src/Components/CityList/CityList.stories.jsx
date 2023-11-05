/* eslint-disable import/no-extraneous-dependencies */
import { action } from '@storybook/addon-actions';
import React from 'react';
import CityList from './CityList';

const cities = [
  { city: 'Tucumán', country: 'Argentina' },
  { city: 'Sao Paulo', country: 'Brasil' },
  { city: 'California', country: 'Estados Unidos' },
  { city: 'Amsterdam', country: 'Países Bajos' },
  { city: 'Marche', country: 'Italia' },
  { city: 'Bogotá', country: 'Colombia' },
];

export default {
  title: 'CityList',
  component: CityList,
};

export function CityListExample() {
  return <CityList cities={cities} onClickCity={action('Click on city')} />;
}
