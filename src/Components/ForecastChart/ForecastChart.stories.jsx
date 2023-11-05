import React from 'react';
import ForecastChart from './ForecastChart';

export default {
  title: 'ForecastChart',
  component: ForecastChart,
};

const forecastData = [
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

export const ForecastChartExample = () => <ForecastChart forecastData={forecastData} />;
