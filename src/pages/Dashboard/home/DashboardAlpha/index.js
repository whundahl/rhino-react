import React from 'react'


class DashboardAlpha extends React.Component {
  state = {}

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-12 col-xl-8">
            <div className="card" style={{ height: 500 }}>
              <div className="card-header">
                <div className="utils__title">
                  <strong>Top Articles</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12 col-xl-4">
            <div className="card" style={{ height: 500 }}>
              <div className="card-header">
                <div className="utils__title">
                  <strong>News Feed</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 col-xl-6">
            <div className="card" style={{ height: 500 }}>
              <div className="card-header">
                <div className="utils__title">
                  <strong>Table Sectors</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12 col-xl-6">
            <div className="card" style={{ height: 500 }}>
              <div className="card-header">
                <div className="utils__title">
                  <strong>Table Portfolios</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 col-xl-6">
            <div className="card" style={{ height: 500 }}>
              <div className="card-header">
                <div className="utils__title">
                  <strong>Top Performers</strong>
                  <p>(Bar Chart with the top 5 Best REIT Performances for the Day)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12 col-xl-6">
            <div className="card" style={{ height: 500 }}>
              <div className="card-header">
                <div className="utils__title">
                  <strong>Bottom Performers</strong>
                  <p>(Bar Chart with the top 5 Worst REIT Performances for the Day)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 col-xl-6">
            <div className="card" style={{ height: 500 }}>
              <div className="card-header">
                <div className="utils__title">
                  <strong>ETF Tracker</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12 col-xl-6">
            <div className="card" style={{ height: 500 }}>
              <div className="card-header">
                <div className="utils__title">
                  <strong>Profile</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-xl-12">
            <div className="card" style={{ height: 500 }}>
              <div className="card-header">
                <div className="utils__title">
                  <strong>Rhino Coverage Spectrum</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DashboardAlpha
