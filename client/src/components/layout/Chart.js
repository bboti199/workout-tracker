import React from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

const Chart = ({ xLabel, chartData }) => {
  return (
    <div>
      <ResponsiveContainer width={1000} aspect={16.0 / 9.0}>
        <AreaChart data={chartData}>
          <Area
            type='monotone'
            dataKey={xLabel}
            stroke='#8884d8'
            fill='#5d5cd3'
          />
          <CartesianGrid stroke='#ccc' />
          <XAxis dataKey='date' />
          <YAxis />
          <Tooltip />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
