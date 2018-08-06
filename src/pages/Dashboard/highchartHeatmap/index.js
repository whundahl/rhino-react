import React, { Component } from 'react';
import Highcharts from 'highcharts';
import {
  HighchartsChart, withHighcharts, Title, Subtitle, XAxis, YAxis, TreemapSeries, Tooltip
} from 'react-jsx-highcharts';



class Heatmap extends Component {

  constructor (props) {
    super(props);

    this.state = {
      treeData: null
    };
  }
  render () {

    const levels = [{
      level: 1,
      dataLabels: {
        enabled: true
      },
      borderWidth: 3
    }];
    const tooltipFormatter = function () {
      return `${this.key}: ${this.point.value}`;
    };

    return (
      <div className="app">
        <HighchartsChart>
          <Title>Global Mortality Rate 2012, per 100,000 population</Title>

          <Subtitle>Click points to drill down. Source: WHO.</Subtitle>

          <XAxis />

          <YAxis>
            <TreemapSeries
              data={null}
              allowDrillToNode
              layoutAlgorithm="squarified"
              animationLimit={1000}
              dataLabels={{ enabled: false }}
              levelIsConstant={false}
              levels={levels} />
          </YAxis>

          <Tooltip formatter={tooltipFormatter} />
        </HighchartsChart>
>
      </div>
    );
  }
}

export default withHighcharts(Heatmap, Highcharts);