import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { commitsBarClosure } from './data';
const options = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: 0,
    plotShadow: false,
  },
  title: {
    text: '',
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
  },
  accessibility: {
    point: {
      valueSuffix: '%',
    },
  },
  plotOptions: {
    pie: {
      dataLabels: {
        enabled: true,
        distance: -50,
        style: {
          fontWeight: 'bold',
          color: 'white',
        },
      },
      startAngle: -90,
      endAngle: 90,
      center: ['50%', '75%'],
      size: '110%',
    },
  },
  series: [
    {
      type: 'pie',
      name: 'Browser share',
      innerSize: '50%',
      data: [
        ['Chrome', 58.9],
        ['Firefox', 13.29],
        ['Internet Explorer', 13],
        ['Edge', 3.78],
        ['Safari', 3.42],
        {
          name: 'Other',
          y: 7.61,
          dataLabels: {
            enabled: false,
          },
        },
      ],
    },
  ],
};

function BarLanguages() {
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      containerProps={{ style: { height: '100%' } }}
    />
  );
}

export default BarLanguages;
