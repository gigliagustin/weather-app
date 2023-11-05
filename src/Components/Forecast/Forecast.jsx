import { Grid } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import ForecastItem from '../ForecastItem/ForecastItem';
import { defaultStates } from '../IconState/IconState';

const renderForecastItem = (forecast) => {
  const {
    hour, state, temperature, weekDay,
  } = forecast;
  return (
    <Grid data-testid="forecast-item-container" item key={`${weekDay}${hour}`}>
      <ForecastItem
        hour={hour}
        state={state}
        temperature={temperature}
        weekDay={weekDay}
      />
    </Grid>
  );
};

const Forecast = ({ forecastItemList }) => (
  <Grid
    container
    justifyContent="space-around"
    alignItems="center"
  >
    {
      forecastItemList.map((forecast) => renderForecastItem(forecast))
    }
  </Grid>
);

Forecast.propTypes = {
  forecastItemList: PropTypes.arrayOf(PropTypes.shape({
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    state: PropTypes.oneOf(defaultStates).isRequired,
    temperature: PropTypes.number.isRequired,
  })).isRequired,
};

export default Forecast;
