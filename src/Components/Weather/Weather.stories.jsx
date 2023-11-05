import React from 'react';
import Weather from './Weather';

export default {
  title: 'Weather',
  component: Weather,
};

export function WeatherCloud() {
  return <Weather temperature={10} state="cloud" />;
}
export function WeatherSunny() {
  return <Weather temperature={23} state="sunny" />;
}