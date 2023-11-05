import { Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { IconContext } from 'react-icons';
import { IconState, defaultStates } from '../IconState';

const Weather = ({ temperature, state }) => (
  <Grid
    container
    item
    direction="row"
    justifyContent="center"
    spacing={1}
  >
    { /* eslint-disable-next-line react/jsx-no-constructed-context-values */ }
    <IconContext.Provider value={{ size: '6em' }}>
      <IconState state={state} />
    </IconContext.Provider>
    <Typography display="inline" variant="h2">{temperature}</Typography>
  </Grid>
);

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
  state: PropTypes.oneOf(defaultStates).isRequired,
};

export default Weather;
