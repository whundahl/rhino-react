import React, { Component } from 'react';
import Highcharts from 'highcharts';
import {
  HighchartsChart, Chart, withHighcharts, XAxis, YAxis, Title, Legend, PieSeries
} from 'react-jsx-highcharts';

class SectorBreakdown extends Component {

  render() {
    const pieData = [{
      name: 'Jane',
      y: 13
    }, {
      name: 'John',
      y: 23
    }, {
      name: 'Joe',
      y: 19
    }];

    return (
      <div className="app">
        <HighchartsChart>
          <Chart />

          <Title>Residential</Title>

          <Legend />

          <XAxis categories={['Apples', 'Oranges', 'Pears', 'Bananas', 'Plums']} />

          <YAxis>
            <PieSeries name="Total consumption" data={pieData} size={300} showInLegend={false} />
          </YAxis>
        </HighchartsChart>

      </div>
    );
  }
}

export default withHighcharts(SectorBreakdown, Highcharts)