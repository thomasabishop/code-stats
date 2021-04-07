import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

// Dummy data, for styling purposes
//import { daysOfMonth } from './data';
import { hoursBarClosure } from './data';
//import { commitsBarClosure } from './data';

const options = {
  chart: {
    type: 'area',
  },
  title: {
    text: '',
  },
  xAxis: {
    allowDecimals: false,
  },
  yAxis: {
    title: {
      text: 'Hours',
    },
    labels: {},
  },
  tooltip: {},
  plotOptions: {
    area: {
      marker: {
        enabled: false,
        symbol: 'circle',
        radius: 2,
        states: {
          hover: {
            enabled: true,
          },
        },
      },
    },
  },
  series: [
    {
      name: 'Hours',
      data: hoursBarClosure,
    },
  ],
};

function HoursAreaChart() {
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      containerProps={{ style: { height: '100%' } }}
    />
  );
}

export default HoursAreaChart;
