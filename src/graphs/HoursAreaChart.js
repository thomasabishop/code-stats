import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

// Dummy data, for styling purposes
//import { daysOfMonth } from './data';
import { hoursBarClosure } from './data';

const options = {
  chart: {
    type: 'area',
    spacingTop: 30,
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
  legend: {
    enabled: false,
  },
  tooltip: {},
  plotOptions: {
    area: {
      marker: {
        enabled: true,
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
    // {
    //   name: 'Commits',
    //   data: commitsBarClosure,
    //   type: 'spline',
    // },
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
