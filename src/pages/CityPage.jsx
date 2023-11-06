/* eslint-disable no-unused-vars */
import { Grid } from '@mui/material';
import React from 'react';
import {
  AppFrame,
  CityInfo,
  Forecast,
  ForecastChart,
  Weather,
  WeatherDetails,
} from '../Components';

const dataExample = [
  {
    dayHour: 'Tue 18',
    min: 14,
    max: 22,
  },
  {
    dayHour: 'Fri 06',
    min: 18,
    max: 27,
  },
  {
    dayHour: 'Fri 12',
    min: 20,
    max: 30,
  },
  {
    dayHour: 'Sat 15',
    min: 25,
    max: 31,
  },
  {
    dayHour: 'Sun 16',
    min: 26,
    max: 35,
  },
  {
    dayHour: 'Mon 17',
    min: 23,
    max: 29,
  },
  {
    dayHour: 'Thu 18',
    min: 20,
    max: 25,
  },
  {
    dayHour: 'Wed 19',
    min: 13,
    max: 20,
  },
];

const forecastItemsExample = [
  {
    hour: 18, state: 'sunny', temperature: 17, weekDay: 'Jueves',
  },
  {
    hour: 6, state: 'cloud', temperature: 18, weekDay: 'Viernes',
  },
  {
    hour: 12, state: 'fog', temperature: 18, weekDay: 'Viernes',
  },
  {
    hour: 19, state: 'cloudy', temperature: 19, weekDay: 'Viernes',
  },
  {
    hour: 14, state: 'rain', temperature: 17, weekDay: 'Sabado',
  },
  {
    hour: 13, state: 'rain', temperature: 17, weekDay: 'Sabado',
  },
];

const CityPage = () => {
  const city = 'Tucumán';
  const country = 'Argentina';
  const state = 'cloudy';
  const temperature = 20;
  const humidity = 85;
  const wind = 5;
  const forecastData = dataExample;
  const forecastItemList = forecastItemsExample;

  return (
    <AppFrame>
      <Grid
        container
        justifyContent="space-around"
        direction="column"
        spacing={2}
      >
        <Grid
          container
          item
          justifyContent="center"
          alignItems="flex-end"
          xs={12}
        >
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid
          container
          item
          justifyContent="center"
          xs={12}
        >
          <Weather state={state} temperature={temperature} />
          <WeatherDetails humidity={humidity} wind={wind} />
        </Grid>
        <Grid item>
          <ForecastChart forecastData={forecastData} />
        </Grid>
        <Grid item>
          <Forecast forecastItemList={forecastItemList} />
        </Grid>
      </Grid>
    </AppFrame>
  );
};
CityPage.propTypes = {};

export default CityPage;
