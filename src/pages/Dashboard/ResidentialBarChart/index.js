import React, { Component } from 'react'
import Highcharts from 'highcharts'
import {
  HighchartsChart,
  Chart,
  withHighcharts,
  XAxis,
  YAxis,
  Title,
  Legend,
  ColumnSeries,
} from 'react-jsx-highcharts'

class ResidentialSectorRating extends Component {
  render() {
    return (
      <div className="residentialBar">
        <HighchartsChart>
          <Chart />

          <Title>Combination chart</Title>

          <Legend />

          <XAxis
            categories={['ACC', 'APTS', 'AVB', 'CPT', 'EQR', 'ESS', 'IRET', 'IRT', 'NRZ', 'NRXT']}
          />

          <YAxis>
            <ColumnSeries name="Rhino Rating" data={[3, 2, 1, 3, 4, 5, 1, 1.65, 4, 5]} />
          </YAxis>
        </HighchartsChart>
      </div>
    )
  }
}

export default withHighcharts(ResidentialSectorRating, Highcharts)
