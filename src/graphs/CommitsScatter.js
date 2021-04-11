import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { commitsBarClosure } from './data';
const options = {
  chart: {
    spacingTop: 30,
  },
  title: {
    text: '',
  },

  yAxis: {
    title: {
      text: 'Commits',
    },
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false,
      },
    },
  },

  series: [
    {
      name: '',
      data: commitsBarClosure,
      color: Highcharts.getOptions().colors[2],
    },
  ],
  legend: {
    enabled: false,
  },
  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {},
      },
    ],
  },
};

function CommitsScatter() {
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      containerProps={{ style: { height: '100%' } }}
    />
  );
}

export default CommitsScatter;
