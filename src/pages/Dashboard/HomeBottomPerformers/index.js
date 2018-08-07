import React, { Component } from 'react';
import Highcharts from 'highcharts';
import {
  HighchartsChart, Chart, withHighcharts, XAxis, YAxis, Title, Legend, ColumnSeries,
} from 'react-jsx-highcharts';


class BottomPerformers extends Component {

  render() {

    return (
      <div className="residentialBar">
        <HighchartsChart>
          <Chart />

          <Title>Bottom 5 REITs Today</Title>

          <Legend />

          <XAxis categories={['ACC', 'APTS', 'AVB', 'CPT', 'EQR']} />

          <YAxis>
            <ColumnSeries name="Rhino Rating" data={[3, 2, 1, 3, 4]} />

          </YAxis>
        </HighchartsChart>

     
      </div>
    );
  }
}

export default withHighcharts(BottomPerformers, Highcharts);