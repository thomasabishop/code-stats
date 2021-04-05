import React from 'react';
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
  title: {
    text: '',
  },
  chart: {
    type: 'bar',
  },
  xAxis: {
    categories: ['Apples', 'Bananas', 'Oranges'],
  },
  yAxis: {
    title: {
      text: 'Fruit eaten',
    },
  },
  series: [
    {
      name: 'Jane',
      data: [1, 0, 4],
    },
    {
      name: 'John',
      data: [5, 7, 3],
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
