/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router';
import { CityList } from '../Components';

const MainPage = (props) => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate('/city');
  };
  const cities = [
    { city: 'Tucumán', country: 'Argentina' },
    { city: 'Sao Paulo', country: 'Brasil' },
    { city: 'California', country: 'Estados Unidos' },
    { city: 'Amsterdam', country: 'Países Bajos' },
    { city: 'Marche', country: 'Italia' },
    { city: 'Bogotá', country: 'Colombia' },
  ];
  return (
    <div>
      MainPage
      <h2>Lista de ciudades</h2>
      <CityList
        cities={cities}
        onClickCity={handleOnClick}
      />
    </div>
  );
};
MainPage.propTypes = {};

export default MainPage;
