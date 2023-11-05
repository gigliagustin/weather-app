import PropTypes from 'prop-types';
import React from 'react';
import {
  WiCloud, WiDayCloudy, WiDayFog, WiDaySunny, WiRain,
} from 'react-icons/wi';

export const defaultStates = [
  'cloud',
  'cloudy',
  'fog',
  'sunny',
  'rain',
];

const stateByName = {
  cloud: WiCloud,
  cloudy: WiDayCloudy,
  fog: WiDayFog,
  sunny: WiDaySunny,
  rain: WiRain,
};

const IconState = ({ state }) => {
  const StateByName = stateByName[state];
  return (
    <StateByName />
  );
};

IconState.propTypes = {
  state: PropTypes.oneOf(defaultStates).isRequired,
};

export default IconState;
