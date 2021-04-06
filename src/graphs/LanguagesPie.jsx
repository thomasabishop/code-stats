import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie',
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
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: false,
      },
      showInLegend: true,
    },
  },
  series: [
    {
      name: 'Languages',
      colorByPoint: true,
      data: [
        {
          name: 'React JavaScript',
          y: 61.41,
          sliced: true,
          selected: true,
        },
        {
          name: 'JavaScript',
          y: 11.84,
        },
        {
          name: 'TypeScript',
          y: 10.85,
        },
        {
          name: 'SCSS',
          y: 4.67,
        },
        {
          name: 'HTML',
          y: 4.18,
        },
        {
          name: 'Other',
          y: 7.05,
        },
      ],
    },
  ],
};

function LanguagesPie() {
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      containerProps={{ style: { height: '100%' } }}
    />
  );
}

export default LanguagesPie;
