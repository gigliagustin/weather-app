/* eslint-disable react/jsx-no-constructed-context-values */
import { Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { IconContext } from 'react-icons';
import IconState, { defaultStates } from '../IconState/IconState';

const ForecastItem = ({
  weekDay, hour, state, temperature,
}) => (
  <Grid
    container
    direction="column"
    justifyContent="center"
    alignItems="center"
  >
    <Grid
      item
    >
      <Typography>{weekDay}</Typography>
    </Grid>
    <Grid
      item
    >
      <Typography>{hour}</Typography>
    </Grid>
    <Grid
      item
    >
      <IconContext.Provider value={{ size: '5em' }}>
        <IconState state={state} />
      </IconContext.Provider>
    </Grid>
    <Grid item>
      <Typography>{temperature} °</Typography>
    </Grid>
  </Grid>
);

ForecastItem.propTypes = {
  weekDay: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
  state: PropTypes.oneOf(defaultStates).isRequired,
  temperature: PropTypes.number.isRequired,
};

export default ForecastItem;
