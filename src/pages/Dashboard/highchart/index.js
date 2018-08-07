import React, { Component } from 'react'
import Highcharts from 'highcharts/highstock'
import {
  HighchartsStockChart,
  Chart,
  withHighcharts,
  XAxis,
  YAxis,
  Title,
  Legend,
  AreaSplineSeries,
  LineSeries,
  SplineSeries,
  Navigator,
  RangeSelector,
  Tooltip,
} from 'react-jsx-highstock'
import Tradier from 'tradier-client'

const TRADIER_API_TOKEN = '7svYXqoAjts9fGptLU7mtKo4Z4Oa'
const REITs = ['ACC', 'APTS', 'AVB', 'CPT', 'EQR', 'ESS', 'IRET', 'IRT', 'NRZ', 'NXRT']
const SECTOR = 'Residential'

Highcharts.theme = {
  colors: [
    '#2b908f',
    '#90ee7e',
    '#f45b5b',
    '#7798BF',
    '#aaeeee',
    '#ff0066',
    '#eeaaee',
    '#55BF3B',
    '#DF5353',
    '#7798BF',
    '#aaeeee',
  ],
  chart: {
    backgroundColor: {
      linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
      stops: [[0, '#2a2a2b'], [1, '#3e3e40']],
    },
    style: {
      fontFamily: "'Unica One', sans-serif",
    },
    plotBorderColor: '#606063',
  },
  title: {
    style: {
      color: '#E0E0E3',
      textTransform: 'uppercase',
      fontSize: '20px',
    },
  },
  subtitle: {
    style: {
      color: '#E0E0E3',
      textTransform: 'uppercase',
    },
  },
  xAxis: {
    gridLineColor: '#707073',
    labels: {
      style: {
        color: '#E0E0E3',
      },
    },
    lineColor: '#707073',
    minorGridLineColor: '#505053',
    tickColor: '#707073',
    title: {
      style: {
        color: '#A0A0A3',
      },
    },
  },
  yAxis: {
    gridLineColor: '#707073',
    labels: {
      style: {
        color: '#E0E0E3',
      },
    },
    lineColor: '#707073',
    minorGridLineColor: '#505053',
    tickColor: '#707073',
    tickWidth: 1,
    title: {
      style: {
        color: '#A0A0A3',
      },
    },
  },
  tooltip: {
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    style: {
      color: '#F0F0F0',
    },
  },
  plotOptions: {
    series: {
      dataLabels: {
        color: '#B0B0B3',
      },
      marker: {
        lineColor: '#333',
      },
    },
    boxplot: {
      fillColor: '#505053',
    },
    candlestick: {
      lineColor: 'white',
    },
    errorbar: {
      color: 'white',
    },
  },
  legend: {
    itemStyle: {
      color: '#E0E0E3',
    },
    itemHoverStyle: {
      color: '#FFF',
    },
    itemHiddenStyle: {
      color: '#606063',
    },
  },
  credits: {
    style: {
      color: '#666',
    },
  },
  labels: {
    style: {
      color: '#707073',
    },
  },

  drilldown: {
    activeAxisLabelStyle: {
      color: '#F0F0F3',
    },
    activeDataLabelStyle: {
      color: '#F0F0F3',
    },
  },

  navigation: {
    buttonOptions: {
      symbolStroke: '#DDDDDD',
      theme: {
        fill: '#505053',
      },
    },
  },

  // scroll charts
  rangeSelector: {
    buttonTheme: {
      fill: '#505053',
      stroke: '#000000',
      style: {
        color: '#CCC',
      },
      states: {
        hover: {
          fill: '#707073',
          stroke: '#000000',
          style: {
            color: 'white',
          },
        },
        select: {
          fill: '#000003',
          stroke: '#000000',
          style: {
            color: 'white',
          },
        },
      },
    },
    inputBoxBorderColor: '#505053',
    inputStyle: {
      backgroundColor: '#333',
      color: 'silver',
    },
    labelStyle: {
      color: 'silver',
    },
  },

  navigator: {
    handles: {
      backgroundColor: '#666',
      borderColor: '#AAA',
    },
    outlineColor: '#CCC',
    maskFill: 'rgba(255,255,255,0.1)',
    series: {
      color: '#7798BF',
      lineColor: '#A6C7ED',
    },
    xAxis: {
      gridLineColor: '#505053',
    },
  },

  scrollbar: {
    barBackgroundColor: '#808083',
    barBorderColor: '#808083',
    buttonArrowColor: '#CCC',
    buttonBackgroundColor: '#606063',
    buttonBorderColor: '#606063',
    rifleColor: '#FFF',
    trackBackgroundColor: '#404043',
    trackBorderColor: '#404043',
  },

  // special colors for some of the
  legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
  background2: '#505053',
  dataLabelsColor: '#B0B0B3',
  textColor: '#C0C0C0',
  contrastTextColor: '#F0F0F3',
  maskColor: 'rgba(255,255,255,0.3)',
}
Highcharts.setOptions(Highcharts.theme)

class HighchartWrapper extends Component {
  constructor(props) {
    super(props)

    this.state = {
      reitData: [],
      loading: true,
    }
  }

  componentDidMount() {
    this.mounted = true
    const tradier = new Tradier(TRADIER_API_TOKEN, 'sandbox')
    const promises = []

    for (let i = 0; i < REITs.length; i++) {
      promises.push(
        tradier
          .historical(REITs[i])
          .then(history => history.day.map(res => [new Date(res.date).getTime(), res.open]))
          .catch(error => alert(error)),
      )
    }

    Promise.all(promises).then(res => {
      for (let i = 0; i < res.length; i++) {
        if (res[i]) {
          const reitLen = res[i].length
          const reit = res[i]
          for (let j = 0; j < reitLen; j++)
            for (let k = j + 1; k < reitLen - 1; k++) {
              if (reit[j][0] > reit[k][0]) {
                reit[j][0] = reit[j][0] + reit[k][0]
                reit[k][0] = reit[j][0] - reit[k][0]
                reit[j][0] = reit[j][0] - reit[k][0]
              }
            }
        }
      }

      if (this.mounted) {
        this.setState({ reitData: res, loading: false })
      }
    })
  }

  render() {
    const { loading, reitData } = this.state

    if (loading) {
      return <div className="app">Loading...</div>
    } else {
      return (
        <div className="app">
          <HighchartsStockChart>
            <Chart zoomType="x" height={700} />

            <Title>{SECTOR.toUpperCase()}</Title>

            <Legend>
              <Legend.Title>Key</Legend.Title>
            </Legend>

            <RangeSelector>
              <RangeSelector.Button count={1} type="day">
                1d
              </RangeSelector.Button>
              <RangeSelector.Button count={7} type="day">
                7d
              </RangeSelector.Button>
              <RangeSelector.Button count={1} type="month">
                1m
              </RangeSelector.Button>
              <RangeSelector.Button type="all">All</RangeSelector.Button>
              <RangeSelector.Input boxBorderColor="#7cb5ec" />
            </RangeSelector>

            <Tooltip />

            <XAxis>
              <XAxis.Title>Time</XAxis.Title>
            </XAxis>

            <YAxis>
              <YAxis.Title>Open Value</YAxis.Title>
              {reitData.map((r, idx) => (
                <SplineSeries
                  key={'reit-series-' + idx}
                  id={REITs[idx]}
                  name={REITs[idx]}
                  data={r}
                />
              ))}
            </YAxis>

            <Navigator>
              {REITs.map((r, idx) => (
                <Navigator.Series key={'reit-navigation' + idx} seriesId={r} />
              ))}

              <Navigator.Series seriesId="group2" />
            </Navigator>
          </HighchartsStockChart>
        </div>
      )
    }
  }

  componentWillUnmount() {
    this.mounted = false
  }
}

export default withHighcharts(HighchartWrapper, Highcharts)
