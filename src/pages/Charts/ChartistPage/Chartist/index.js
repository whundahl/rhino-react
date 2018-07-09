import React from 'react'
import ChartistGraph from 'react-chartist'
import Chartist from 'chartist'
import './style.scss'

const animationData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  series: [
    [1, 2, 2.7, 0, 3, 5, 3, 4, 8, 10, 12, 7],
    [0, 1.2, 2, 7, 2.5, 9, 5, 8, 9, 11, 14, 4],
    [10, 9, 8, 6.5, 6.8, 6, 5.4, 5.3, 4.5, 4.4, 3, 2.8],
  ],
}

const animatonOptions = {
  axisX: {
    labelInterpolationFnc: function(value, index) {
      return index % 2 !== 0 ? !1 : value
    },
  },
}

const smilData = {
  labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  series: [
    [12, 9, 7, 8, 5, 4, 6, 2, 3, 3, 4, 6],
    [4, 5, 3, 7, 3, 5, 5, 3, 4, 4, 5, 5],
    [5, 3, 4, 5, 6, 3, 3, 4, 5, 6, 3, 4],
    [3, 4, 5, 6, 7, 6, 4, 5, 6, 7, 6, 3],
  ],
}

let smilOptions = {
  low: 0,
  plugins: [Chartist.plugins.tooltip()],
  seq: 0,
}

let smilListener = {
  created: function() {
    smilOptions.seq = 0
  },
  draw: function(data) {
    let delays = 80
    let durations = 500

    if ((smilOptions.seq++, 'line' === data.type))
      data.element.animate({
        opacity: {
          begin: smilOptions.seq * delays + 1e3,
          dur: durations,
          from: 0,
          to: 1,
        },
      })
    else if ('label' === data.type && 'x' === data.axis)
      data.element.animate({
        y: {
          begin: smilOptions.seq * delays,
          dur: durations,
          from: data.y + 100,
          to: data.y,
          easing: 'easeOutQuart',
        },
      })
    else if ('label' === data.type && 'y' === data.axis)
      data.element.animate({
        x: {
          begin: smilOptions.seq * delays,
          dur: durations,
          from: data.x - 100,
          to: data.x,
          easing: 'easeOutQuart',
        },
      })
    else if ('point' === data.type)
      data.element.animate({
        x1: {
          begin: smilOptions.seq * delays,
          dur: durations,
          from: data.x - 10,
          to: data.x,
          easing: 'easeOutQuart',
        },
        x2: {
          begin: smilOptions.seq * delays,
          dur: durations,
          from: data.x - 10,
          to: data.x,
          easing: 'easeOutQuart',
        },
        opacity: {
          begin: smilOptions.seq * delays,
          dur: durations,
          from: 0,
          to: 1,
          easing: 'easeOutQuart',
        },
      })
    else if ('grid' === data.type) {
      var pos1Animation = {
        begin: smilOptions.seq * delays,
        dur: durations,
        from: data[data.axis.units.pos + '1'] - 30,
        to: data[data.axis.units.pos + '1'],
        easing: 'easeOutQuart',
      }
      var pos2Animation = {
        begin: smilOptions.seq * delays,
        dur: durations,
        from: data[data.axis.units.pos + '2'] - 100,
        to: data[data.axis.units.pos + '2'],
        easing: 'easeOutQuart',
      }
      var ctAnimations = {}
      ctAnimations[data.axis.units.pos + '1'] = pos1Animation
      ctAnimations[data.axis.units.pos + '2'] = pos2Animation
      ctAnimations.opacity = {
        begin: smilOptions.seq * delays,
        dur: durations,
        from: 0,
        to: 1,
        easing: 'easeOutQuart',
      }
      data.element.animate(ctAnimations)
    }
  },
}

let lineData = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  series: [[12, 9, 7, 8, 5], [2, 1, 3.5, 7, 3], [1, 3, 4, 5, 6]],
}

let lineOptions = {
  fullWidth: !0,
  chartPadding: {
    right: 40,
  },
  plugins: [Chartist.plugins.tooltip()],
}

let areaData = {
  labels: [1, 2, 3, 4, 5, 6, 7, 8],
  series: [[5, 9, 7, 8, 5, 3, 5, 4]],
}

let areaOptions = {
  low: 0,
  showArea: true,
  plugins: [Chartist.plugins.tooltip()],
}

let scatterTimes = function(n) {
  return Array.apply(null, new Array(n))
}

let scatterData = scatterTimes(52)
  .map(Math.random)
  .reduce(
    function(scatterData, rnd, index) {
      scatterData.labels.push(index + 1)
      scatterData.series.forEach(function(series) {
        series.push(Math.random() * 100)
      })
      return scatterData
    },
    {
      labels: [],
      series: scatterTimes(4).map(function() {
        return []
      }),
    },
  )

let scatterOptions = {
  showLine: false,
  axisX: {
    labelInterpolationFnc: function(value, index) {
      return index % 13 === 0 ? 'W' + value : null
    },
  },
  plugins: [Chartist.plugins.tooltip()],
}

let scatterResponsiveOptions = [
  [
    'screen and (min-width: 640px)',
    {
      axisX: {
        labelInterpolationFnc: function(value, index) {
          return index % 4 === 0 ? 'W' + value : null
        },
      },
    },
  ],
]

let horizontalData = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  series: [[5, 4, 3, 7, 5, 10, 3], [3, 2, 9, 5, 4, 6, 4]],
}

let horizontalOptions = {
  seriesBarDistance: 10,
  reverseData: !0,
  horizontalBars: !0,
  axisY: {
    offset: 70,
  },
  plugins: [Chartist.plugins.tooltip()],
}

let biPolarLineData = {
  labels: [1, 2, 3, 4, 5, 6, 7, 8],
  series: [
    [1, 2, 3, 1, -2, 0, 1, 0],
    [-2, -1, -2, -1, -2.5, -1, -2, -1],
    [0, 0, 0, 1, 2, 2.5, 2, 1],
    [2.5, 2, 1, 0.5, 1, 0.5, -1, -2.5],
  ],
}

let biPolarLineOptions = {
  high: 3,
  low: -3,
  showArea: !0,
  showLine: !1,
  showPoint: !1,
  fullWidth: !0,
  axisX: {
    showLabel: false,
    showGrid: false,
  },
  plugins: [Chartist.plugins.tooltip()],
}

let biPolarBarData = {
  labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
  series: [[1, 2, 4, 8, 6, -2, -1, -4, -6, -2]],
}

let biPolarBarOptions = {
  high: 10,
  low: -10,
  axisX: {
    labelInterpolationFnc: function(value, index) {
      return index % 2 === 0 ? value : null
    },
  },
  plugins: [Chartist.plugins.tooltip()],
}

let stackedBarData = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  series: [[8e5, 12e5, 14e5, 13e5], [2e5, 4e5, 5e5, 3e5], [1e5, 2e5, 4e5, 6e5]],
}

let stackedBarOptions = {
  stackBars: !0,
  axisY: {
    labelInterpolationFnc: function(value) {
      return value / 1e3 + 'k'
    },
  },
  plugins: [Chartist.plugins.tooltip()],
}

let stackedBarListener = {
  draw: function(data) {
    'bar' === data.type &&
      data.element.attr({
        style: 'stroke-width: 30px',
      })
  },
}

let overlappingBarData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  series: [[5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8], [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]],
}

let overlappingBarOptions = {
  seriesBarDistance: 10,
  plugins: [Chartist.plugins.tooltip()],
}

let overlappingResponsiveOptions = [
  [
    '',
    {
      seriesBarDistance: 5,
      axisX: {
        labelInterpolationFnc: function(value) {
          return value[0]
        },
      },
    },
  ],
]

let labelsPieData = {
  labels: ['Bananas', 'Apples', 'Grapes'],
  series: [20, 15, 40],
}
let labelsPieOptions = {
  labelInterpolationFnc: function(value) {
    return value[0]
  },
}
let labelsPieResponsiveOptions = [
  [
    'screen and (min-width: 640px)',
    {
      chartPadding: 30,
      labelOffset: 100,
      labelDirection: 'explode',
      labelInterpolationFnc: function(value) {
        return value
      },
    },
  ],
  [
    'screen and (min-width: 1024px)',
    {
      labelOffset: 80,
      chartPadding: 20,
    },
  ],
]

let simplePieData = {
  series: [5, 3, 4],
}

let simplePieSum = function(a, b) {
  return a + b
}

let simplePieOptions = {
  labelInterpolationFnc: function(value) {
    return Math.round(value / simplePieData.series.reduce(simplePieSum) * 100) + '%'
  },
}

class ChartistsItems extends React.Component {
  render() {
    return (
      <section className="card">
        <div className="card-header">
          <div className="utils__title">
            <strong>Chartist.js</strong>
            <a
              href="https://gionkunz.github.io/chartist-js/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-primary ml-4"
            >
              Official Documentation <i className="icmn-link ml-1" />
            </a>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-6">
              <h5 className="text-black">
                <strong>CSS Styling & Animations</strong>
              </h5>
              <p className="text-muted">
                Element: read{' '}
                <a
                  href="https://gionkunz.github.io/chartist-js/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  official documentation
                  <small>
                    <i className="icmn-link ml-1" />
                  </small>
                </a>
              </p>
              <div className="mb-5">
                <ChartistGraph
                  className="height-300 chart-css-animations chartist-theme-dark chartist-animated"
                  data={animationData}
                  options={animatonOptions}
                  type="Line"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h5 className="text-black">
                <strong>SMIL Animations</strong>
              </h5>
              <p className="text-muted">
                Element: read{' '}
                <a
                  href="https://gionkunz.github.io/chartist-js/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  official documentation
                  <small>
                    <i className="icmn-link ml-1" />
                  </small>
                </a>
              </p>
              <div className="mb-5">
                <ChartistGraph
                  className="height-300 chart-smil-animations"
                  data={smilData}
                  options={smilOptions}
                  type="Line"
                  listener={smilListener}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <h5 className="text-black">
                <strong>Line</strong>
              </h5>
              <p className="text-muted">
                Element: read{' '}
                <a
                  href="https://gionkunz.github.io/chartist-js/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  official documentation
                  <small>
                    <i className="icmn-link ml-1" />
                  </small>
                </a>
              </p>
              <div className="mb-5">
                <ChartistGraph
                  className="height-300"
                  data={lineData}
                  options={lineOptions}
                  type="Line"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h5 className="text-black">
                <strong>Area</strong>
              </h5>
              <p className="text-muted">
                Element: read{' '}
                <a
                  href="https://gionkunz.github.io/chartist-js/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  official documentation
                  <small>
                    <i className="icmn-link ml-1" />
                  </small>
                </a>
              </p>
              <div className="mb-5">
                <ChartistGraph
                  className="height-300"
                  data={areaData}
                  options={areaOptions}
                  type="Line"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <h5 className="text-black">
                <strong>Scatter</strong>
              </h5>
              <p className="text-muted">
                Element: read{' '}
                <a
                  href="https://gionkunz.github.io/chartist-js/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  official documentation
                  <small>
                    <i className="icmn-link ml-1" />
                  </small>
                </a>
              </p>
              <div className="mb-5">
                <ChartistGraph
                  className="height-300"
                  data={scatterData}
                  options={scatterOptions}
                  responsive-options={scatterResponsiveOptions}
                  type="Line"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h5 className="text-black">
                <strong>Horizontal Bar</strong>
              </h5>
              <p className="text-muted">
                Element: read{' '}
                <a
                  href="https://gionkunz.github.io/chartist-js/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  official documentation
                  <small>
                    <i className="icmn-link ml-1" />
                  </small>
                </a>
              </p>
              <div className="mb-5">
                <ChartistGraph
                  className="height-300"
                  type="Bar"
                  data={horizontalData}
                  options={horizontalOptions}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <h5 className="text-black">
                <strong>Bi-polar Line</strong>
              </h5>
              <p className="text-muted">
                Element: read{' '}
                <a
                  href="https://gionkunz.github.io/chartist-js/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  official documentation
                  <small>
                    <i className="icmn-link ml-1" />
                  </small>
                </a>
              </p>
              <div className="mb-5">
                <ChartistGraph
                  className="height-300"
                  data={biPolarLineData}
                  options={biPolarLineOptions}
                  type="Line"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h5 className="text-black">
                <strong>Bi-polar Bar</strong>
              </h5>
              <p className="text-muted">
                Element: read{' '}
                <a
                  href="https://gionkunz.github.io/chartist-js/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  official documentation
                  <small>
                    <i className="icmn-link ml-1" />
                  </small>
                </a>
              </p>
              <div className="mb-5">
                <ChartistGraph
                  className="height-300"
                  data={biPolarBarData}
                  options={biPolarBarOptions}
                  type="Bar"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <h5 className="text-black">
                <strong>Stacked Bar</strong>
              </h5>
              <p className="text-muted">
                Element: read{' '}
                <a
                  href="https://gionkunz.github.io/chartist-js/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  official documentation
                  <small>
                    <i className="icmn-link ml-1" />
                  </small>
                </a>
              </p>
              <div className="mb-5">
                <ChartistGraph
                  className="height-300"
                  data={stackedBarData}
                  options={stackedBarOptions}
                  listener={stackedBarListener}
                  type="Bar"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h5 className="text-black">
                <strong>Overlapping Bar</strong>
              </h5>
              <p className="text-muted">
                Element: read{' '}
                <a
                  href="https://gionkunz.github.io/chartist-js/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  official documentation
                  <small>
                    <i className="icmn-link ml-1" />
                  </small>
                </a>
              </p>
              <div className="mb-5">
                <ChartistGraph
                  className="height-300"
                  data={overlappingBarData}
                  options={overlappingBarOptions}
                  responsive-options={overlappingResponsiveOptions}
                  type="Bar"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <h5 className="text-black">
                <strong>Simple Pie</strong>
              </h5>
              <p className="text-muted">
                Element: read{' '}
                <a
                  href="https://gionkunz.github.io/chartist-js/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  official documentation
                  <small>
                    <i className="icmn-link ml-1" />
                  </small>
                </a>
              </p>
              <div className="mb-5">
                <ChartistGraph
                  className="height-300"
                  data={simplePieData}
                  options={simplePieOptions}
                  type="Pie"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h5 className="text-black">
                <strong>Pie w/ Labels</strong>
              </h5>
              <p className="text-muted">
                Element: read{' '}
                <a
                  href="https://gionkunz.github.io/chartist-js/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  official documentation
                  <small>
                    <i className="icmn-link ml-1" />
                  </small>
                </a>
              </p>
              <div className="mb-5">
                <ChartistGraph
                  className="height-300"
                  data={labelsPieData}
                  options={labelsPieOptions}
                  responsive-options={labelsPieResponsiveOptions}
                  type="Pie"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default ChartistsItems
