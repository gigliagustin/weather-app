import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { IconContext } from 'react-icons';
import { IconState, defaultStates } from '../IconState';

const Weather = ({ temperature, state }) => (
  <div>
    { /* eslint-disable-next-line react/jsx-no-constructed-context-values */ }
    <IconContext.Provider value={{ size: '5em' }}>
      <IconState state={state} />
    </IconContext.Provider>
    <Typography display="inline" variant="h3">{temperature}</Typography>
  </div>
);

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
  state: PropTypes.oneOf(defaultStates).isRequired,
};

export default Weather;
