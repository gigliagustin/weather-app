/* eslint-disable no-unused-vars */
import { Paper } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router';
import { AppFrame, CityList } from '../Components';

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
    <AppFrame>
      <Paper
        elevation={3}
      >
        <CityList
          cities={cities}
          onClickCity={handleOnClick}
        />
      </Paper>
    </AppFrame>
  );
};
MainPage.propTypes = {};

export default MainPage;
