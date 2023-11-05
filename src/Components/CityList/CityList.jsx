import { Grid } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { CityInfo } from '../CityInfo';
import { Weather } from '../Weather';

const renderCityAndCountry = (cityAndCountry) => {
  const { city, country } = cityAndCountry;

  return (
    <li key={city}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          md={8}
          xs={12}
        >
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid
          item
          md={4}
          xs={12}
        >
          <Weather temperature={10} state="sunny" />
        </Grid>
      </Grid>
    </li>
  );
};

function CityList({ cities }) {
  return (
    <ul>
      { cities.map((cityAndCountry) => renderCityAndCountry(cityAndCountry)) }
    </ul>
  );
}

CityList.propTypes = {
  cities: PropTypes.arrayOf.isRequired,
};

export default CityList;
