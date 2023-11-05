import React from 'react';
import ForecastItem from './ForecastItem';

export default {
  title: 'ForecastItem',
  component: ForecastItem,
};

export function SunnyMonday() {
  return <ForecastItem hour={10} state="sunny" temperature={35} weekDay="Lunes" />;
}
