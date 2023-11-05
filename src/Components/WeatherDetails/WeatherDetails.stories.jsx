import React from 'react';
import WeatherDetails from './WeatherDetails';

export default {
  title: 'WeatherDetails',
  component: WeatherDetails,
};

export function WeatherDetailsExample() {
  return <WeatherDetails humidity={75} wind={6} />;
}
