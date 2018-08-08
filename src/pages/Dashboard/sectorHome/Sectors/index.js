import React from 'react'
import ChartCard from 'components/CleanComponents/ChartCard'
import ChartCardHouse from 'components/CleanComponents/manHousingCard'

class Sectors extends React.Component {
  state = {}

  render() {
    return (
      <div>
        <div className="utils__title utils__title--flat mb-3">
          <span className="text-uppercase font-size-16">Rhino Sectors</span>
        </div>
        <div className="row">
          <div className="col-lg-12 col-xl-6">
            <ChartCard
              title={'+ 1.64%'}
              amount={'Health Care'}
              chartProps={{
                width: 120,
                height: 107,
                lines: [
                  {
                    values: [
                      2,
                      11,
                      8,
                      14,
                      18,
                      20,
                      26,
                      30,
                      31,
                      33,
                      34,
                      35,
                      29,
                      35,
                      39,
                      20,
                      39,
                      40,
                      50,
                    ],
                    colors: {
                      // Green
                      area: 'rgba(19, 158, 90, 0.5)',
                      line: '#009966',
                    },
                  },
                ],
              }}
            />
          </div>
          <div className="col-lg-12 col-xl-6">
            <ChartCard
              title={'- 0.41%'}
              amount={'Industrial'}
              chartProps={{
                width: 120,
                height: 107,
                lines: [
                  {
                    values: [
                      20,
                      80,
                      67,
                      120,
                      132,
                      66,
                      97,
                      78,
                      67,
                      66,
                      48,
                      20,
                      30,
                      28,
                      27,
                      27,
                      26,
                      36,
                    ],
                    colors: {
                      // Red
                      area: 'rgba(204, 51, 51, 0.5)',
                      line: '#ff0000',
                    },
                  },
                ],
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-xl-6">
            <ChartCard
              title={'+ 0.73%'}
              amount={'Infrastructure'}
              chartProps={{
                width: 120,
                height: 107,
                lines: [
                  {
                    values: [42, 40, 40, 57, 54, 20, 97, 58, 69, 70, 70, 76, 56, 48, 79, 90],
                    colors: {
                      // Green
                      area: 'rgba(19, 158, 90, 0.5)',
                      line: '#009966',
                    },
                  },
                ],
              }}
            />
          </div>
          <div className="col-lg-12 col-xl-6">
            <ChartCard
              title={'+ 7.66%'}
              amount={'Lodging'}
              chartProps={{
                width: 120,
                height: 107,
                lines: [
                  {
                    values: [
                      2,
                      11,
                      8,
                      14,
                      18,
                      20,
                      26,
                      27,
                      32,
                      34,
                      46,
                      54,
                      35,
                      37,
                      39,
                      44,
                      46,
                      65,
                      69,
                      57,
                      59,
                    ],
                    colors: {
                      // Green
                      area: 'rgba(19, 158, 90, 0.5)',
                      line: '#009966',
                    },
                  },
                ],
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-xl-6">
            <ChartCard
              title={'-4.29%'}
              amount={'Malls'}
              chartProps={{
                width: 120,
                height: 107,
                lines: [
                  {
                    values: [29, 30, 37, 48, 44, 33, 44, 45, 55, 45, 55, 66, 57, 67, 56],
                    colors: {
                      // Red
                      area: 'rgba(204, 51, 51, 0.5)',
                      line: '#ff0000',
                    },
                  },
                ],
              }}
            />
          </div>
          <div className="col-lg-12 col-xl-6">
            <ChartCardHouse
              title={'+ 7.46%'}
              amount={'Man. Housing'}
              chartProps={{
                width: 200,
                height: 107,
                lines: [
                  {
                    values: [
                      22,
                      24,
                      34,
                      48,
                      46,
                      33,
                      35,
                      45,
                      40,
                      41,
                      43,
                      42,
                      45,
                      44,
                      55,
                      44,
                      44,
                      46,
                      37,
                      48,
                      49,
                      50,
                      52,
                      45,
                      40,
                      41,
                      43,
                      42,
                      45,
                      44,
                      55,
                      44,
                      44,
                      46,
                      37,
                      48,
                      49,
                      50,
                      52,
                      45,
                      40,
                      41,
                      43,
                      42,
                      45,
                      44,
                      55,
                      44,
                      44,
                      46,
                      37,
                      48,
                      49,
                      50,
                      52,
                    ],
                    colors: {
                      // Green
                      area: 'rgba(19, 158, 90, 0.5)',
                      line: '#009966',
                    },
                  },
                ],
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4">
            <ChartCard
              title={'+ 5.73%'}
              amount={'Mortgage REITs'}
              chartProps={{
                width: 120,
                height: 107,
                lines: [
                  {
                    values: [2, 11, 8, 14, 18, 20, 26],
                    colors: {
                      // Green
                      area: 'rgba(19, 158, 90, 0.5)',
                      line: '#009966',
                    },
                  },
                ],
              }}
            />
          </div>
          <div className="col-xl-4">
            <ChartCard
              title={'+ 0.41%'}
              amount={'Office'}
              chartProps={{
                width: 120,
                height: 107,
                lines: [
                  {
                    values: [20, 80, 67, 120, 132, 66, 97],
                    colors: {
                      // Green
                      area: 'rgba(19, 158, 90, 0.5)',
                      line: '#009966',
                    },
                  },
                ],
              }}
            />
          </div>
          <div className="col-xl-4">
            <ChartCard
              title={'- 3.95%'}
              amount={'Other'}
              chartProps={{
                width: 120,
                height: 107,
                lines: [
                  {
                    values: [42, 40, 80, 67, 84, 20, 97],
                    colors: {
                      // Red
                      area: 'rgba(204, 51, 51, 0.5)',
                      line: '#ff0000',
                    },
                  },
                ],
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4">
            <ChartCard
              title={'+ 5.00%'}
              amount={'Prison REITs'}
              chartProps={{
                width: 120,
                height: 107,
                lines: [
                  {
                    values: [2, 11, 8, 14, 18, 20, 26],
                    colors: {
                      // Green
                      area: 'rgba(19, 158, 90, 0.5)',
                      line: '#009966',
                    },
                  },
                ],
              }}
            />
          </div>
          <div className="col-xl-4">
            <ChartCard
              title={'+ 4.57%'}
              amount={'Residential'}
              chartProps={{
                width: 120,
                height: 107,
                lines: [
                  {
                    values: [20, 80, 67, 120, 132, 66, 97],
                    colors: {
                      // Green
                      area: 'rgba(19, 158, 90, 0.5)',
                      line: '#009966',
                    },
                  },
                ],
              }}
            />
          </div>
          <div className="col-xl-4">
            <ChartCard
              title={'+ 15.53%'}
              amount={'Self Storage'}
              chartProps={{
                width: 120,
                height: 107,
                lines: [
                  {
                    values: [42, 40, 80, 67, 84, 20, 97],
                    colors: {
                      // Green
                      area: 'rgba(19, 158, 90, 0.5)',
                      line: '#009966',
                    },
                  },
                ],
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4">
            <ChartCard
              title={'- 9.80%'}
              amount={'Shopping Centers'}
              chartProps={{
                width: 120,
                height: 107,
                lines: [
                  {
                    values: [
                      2,
                      11,
                      8,
                      14,
                      18,
                      20,
                      24,
                      45,
                      46,
                      56,
                      57,
                      58,
                      49,
                      49,
                      55,
                      57,
                      58,
                      60,
                      61,
                    ],
                    colors: {
                      // Red
                      area: 'rgba(204, 51, 51, 0.5)',
                      line: '#ff0000',
                    },
                  },
                ],
              }}
            />
          </div>
          <div className="col-xl-4">
            <ChartCard
              title={'+ 6.81%'}
              amount={'Timber'}
              chartProps={{
                width: 120,
                height: 107,
                lines: [
                  {
                    values: [20, 80, 67, 120, 132, 66, 97],
                    colors: {
                      // Green
                      area: 'rgba(19, 158, 90, 0.5)',
                      line: '#009966',
                    },
                  },
                ],
              }}
            />
          </div>
          <div className="col-xl-4">
            <ChartCard
              title={'+ 2.24%'}
              amount={'Triple Net'}
              chartProps={{
                width: 120,
                height: 107,
                lines: [
                  {
                    values: [42, 40, 80, 67, 84, 20, 97],
                    colors: {
                      // Green
                      area: 'rgba(19, 158, 90, 0.5)',
                      line: '#009966',
                    },
                  },
                ],
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4">
            <ChartCard
              title={'+ 2.24%'}
              amount={'Gaming REITs'}
              chartProps={{
                width: 120,
                height: 107,
                lines: [
                  {
                    values: [42, 40, 80, 67, 84, 20, 97],
                    colors: {
                      // Green
                      area: 'rgba(19, 158, 90, 0.5)',
                      line: '#009966',
                    },
                  },
                ],
              }}
            />
          </div>
          <div className="col-xl-4">
            <ChartCard
              title={'+ 2.24%'}
              amount={'Farmland'}
              chartProps={{
                width: 120,
                height: 107,
                lines: [
                  {
                    values: [42, 40, 80, 67, 84, 20, 97],
                    colors: {
                      // Green
                      area: 'rgba(19, 158, 90, 0.5)',
                      line: '#009966',
                    },
                  },
                ],
              }}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Sectors
