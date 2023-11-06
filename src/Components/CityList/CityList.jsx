/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-parens */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import { Grid, List, ListItemButton } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import CityInfo from '../CityInfo/CityInfo';
import Weather from '../Weather/Weather';

const renderCityAndCountry = eventOnClickCity => cityAndCountry => {
  const { city, country } = cityAndCountry;

  return (
    <ListItemButton
      key={city}
      onClick={eventOnClickCity}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          md={9}
          xs={12}
        >
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid
          item
          md={3}
          xs={12}
        >
          <Weather temperature={10} state="sunny" />
        </Grid>
      </Grid>
    </ListItemButton>
  );
};

const CityList = ({ cities, onClickCity }) => (
  <List>
    {
        cities.map((cityAndCountry) => renderCityAndCountry(onClickCity)(cityAndCountry))
      }
  </List>
);

CityList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  })).isRequired,
  onClickCity: PropTypes.func.isRequired,
};

export default CityList;
