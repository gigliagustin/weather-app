import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

const WeatherDetails = ({ humidity, wind }) => (
  <>
    <Typography>Humedad: {humidity}%</Typography>
    <Typography>Viento: {wind}km/h</Typography>
  </>
);

WeatherDetails.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
};

export default WeatherDetails;
