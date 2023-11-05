import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { IconContext } from 'react-icons';
import {
  WiCloud, WiDayCloudy, WiDayFog, WiDaySunny, WiRain,
} from 'react-icons/wi';

const stateByName = {
  cloud: WiCloud,
  cloudy: WiDayCloudy,
  fog: WiDayFog,
  sunny: WiDaySunny,
  rain: WiRain,
};

const renderState = (state) => {
  const Icon = stateByName[state] !== undefined ? stateByName[state] : stateByName.sunny;
  return <Icon />;
};

const Weather = ({ temperature , state }) => {
  return (
    <div>
      <IconContext.Provider value={{ size: '5em' }}>
        { renderState(state) }
      </IconContext.Provider>
      <Typography display="inline" variant="h3">{temperature}</Typography>
    </div>
  );
};

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
  state: PropTypes.string.isRequired,
};

export default Weather;