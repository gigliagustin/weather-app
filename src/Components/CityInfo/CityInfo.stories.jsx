import React from 'react';
import 'typeface-roboto';
import CityInfo from './CityInfo';

export default {
  title: 'CityInfo',
  component: CityInfo,
};

export function CityExample() {
  return <CityInfo city="Tucumán" country="Argentina" />;
}
