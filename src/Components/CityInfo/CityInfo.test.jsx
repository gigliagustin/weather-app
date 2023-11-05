/* eslint-disable no-undef */
// Estandar de las 3 AAA
// La primera es el test Arrange
// La segunda es el test de Act
// La tercera es el test de Assert

/*
  * Siempre es importante reconocer que componante estamos testeando
  * Es importante que el test se ejecute de manera rápida
  */
import { render, screen } from '@testing-library/react';
import React from 'react';
import CityInfo from './CityInfo'; // SUT => Subject Under Testing

test('CityInfo render', async () => {
  /*
  * permite encontrar los componentes seleccionados por un determinado rol. E.g: Títulos, inputs
  */

  const city = 'Tucumán';
  const country = 'Argentina';
  render(<CityInfo city={city} country={country} />);

  const cityAndCountryComponents = await screen.findAllByRole('heading');

  // Cuando el test va a ser correcto?
  // Cuando el primer elemento sea "Tucuman" y cuando el 2do elemento sea "Argentina" va a ser true

  expect(cityAndCountryComponents[0]).toHaveTextContent(city);
  expect(cityAndCountryComponents[1]).toHaveTextContent(country);

  // Si el expect es correcto, el test debería dar ok
});
