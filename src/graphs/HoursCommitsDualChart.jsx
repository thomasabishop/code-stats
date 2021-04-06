import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

// Dummy data
import { daysOfMonth } from './data';
import { hoursBarClosure } from './data';
import { commitsBarClosure } from './data';

const options = {
  chart: {
    zoomType: 'xy',
    spacingTop: 50,
  },
  title: {
    text: ' ',
  },
  xAxis: [
    {
      categories: daysOfMonth,
      crosshair: true,
    },
  ],
  yAxis: [
    {
      // Primary yAxis
      labels: {
        style: {
          color: Highcharts.getOptions().colors[1],
        },
      },
      title: {
        text: 'Hours',
        style: {
          color: Highcharts.getOptions().colors[1],
        },
      },
    },
    {
      // Secondary yAxis
      title: {
        text: 'Commits',
        style: {
          color: Highcharts.getOptions().colors[0],
        },
      },
      labels: {
        style: {
          color: Highcharts.getOptions().colors[0],
        },
      },
      opposite: true,
    },
  ],
  tooltip: {
    shared: true,
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    x: -40,
    verticalAlign: 'top',
    y: -40,
    floating: true,
    backgroundColor:
      Highcharts.defaultOptions.legend.backgroundColor || // theme
      'rgba(255,255,255,0.25)',
  },
  series: [
    {
      name: 'Hours',
      type: 'column',
      yAxis: 1,
      data: hoursBarClosure,
    },
    {
      name: 'Commits',
      type: 'spline',
      data: commitsBarClosure,
      color: Highcharts.getOptions().colors[2],
    },
  ],
};

function HoursCommitsDualChart() {
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      containerProps={{ style: { height: '100%' } }}
    />
  );
}

export default HoursCommitsDualChart;
