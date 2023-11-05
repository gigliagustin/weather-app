import PropTypes from 'prop-types';
import React from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const ForecastChart = ({ forecastData }) => (
  <ResponsiveContainer
    height={250}
    width="95%"
  >
    <LineChart
      margin={{
        top: 20,
        bottom: 20,
        left: 5,
        right: 5,
      }}
      data={forecastData}
    >
      <XAxis dataKey="dayHour" />
      <YAxis />
      <CartesianGrid />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        stroke="#FF0000"
        dataKey="max"
      />
      <Line
        dataKey="min"
        type="monotone"
        stroke="#0000FF"
      />
    </LineChart>
  </ResponsiveContainer>
);
ForecastChart.propTypes = {
  forecastData: PropTypes.arrayOf(
    PropTypes.shape({
      dayHour: PropTypes.string.isRequired,
      min: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ForecastChart;
