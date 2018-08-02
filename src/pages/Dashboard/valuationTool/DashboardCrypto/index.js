import React from 'react'
import './style.scss'
import { Tabs } from 'antd'

const TabPane = Tabs.TabPane

class DashboardCrypto extends React.Component {
  state = {}

  render() {
    return (
      <div className="crypto">
        <Tabs defaultActiveKey="1" tabPosition="top">
          <TabPane tab="Overview" key="1">
            {' '}
            <div className="card">
              <div className="card-body">
                <div className="crypto__table text-nowrap" style={{ height: 600 }} />
              </div>
            </div>
          </TabPane>
          <TabPane tab="Returns" key="2">
            {' '}
            <div className="row">
              <div className="col-lg-12 col-xl-2">
                <div className="card" style={{ height: 250 }}>
                  <div className="card-header">
                    <div className="utils__title">
                      <strong>Yearly Return</strong>
                    </div>
                  </div>
                </div>
                <div className="card" style={{ height: 250 }}>
                  <div className="card-header">
                    <div className="utils__title">
                      <strong>Monthly Return</strong>
                    </div>
                  </div>
                </div>
                <div className="card" style={{ height: 250 }}>
                  <div className="card-header">
                    <div className="utils__title">
                      <strong>Weekly Return</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12 col-xl-10">
                <div className="card" style={{ height: 810 }}>
                  <div className="card-header">
                    <div className="utils__title">
                      <strong>REIT Chart</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tab="Earnings Forcaster" key="3">
            <div className="row">
              <div className="col-lg-4 col-xl-4">
                <div className="card" style={{ height: 150 }}>
                  <div className="card-header">
                    <div className="utils__title">
                      <strong>Payout Ratio</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-xl-4">
                <div className="card" style={{ height: 150 }}>
                  <div className="card-header">
                    <div className="utils__title">
                      <strong>Trailing P/FFO</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-xl-4">
                <div className="card" style={{ height: 150 }}>
                  <div className="card-header">
                    <div className="utils__title">
                      <strong>P/FFO</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12 col-xl-12">
                <div className="card" style={{ height: 800 }}>
                  <div className="card-header">
                    <div className="utils__title">
                      <strong>Earnings Table</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12 col-xl-12">
                <div className="card" style={{ height: 600 }}>
                  <div className="card-header">
                    <div className="utils__title">
                      <strong>Payout Ratio</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12 col-xl-12">
                <div className="card" style={{ height: 600 }}>
                  <div className="card-header">
                    <div className="utils__title">
                      <strong>Earnings Growth</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-xl-12">
                <div className="card" style={{ height: 600 }}>
                  <div className="card-header">
                    <div className="utils__title">
                      <strong>P/FFO/Trailing</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tab="Dividend Lab" key="4">
            <div className="row">
              <div className="col-lg-4 col-xl-4">
                <div className="card" style={{ height: 150 }}>
                  <div className="card-header">
                    <div className="utils__title">
                      <strong>Dividend Yeild</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-xl-4">
                <div className="card" style={{ height: 150 }}>
                  <div className="card-header">
                    <div className="utils__title">
                      <strong>Dividend Growth</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-xl-4">
                <div className="card" style={{ height: 150 }}>
                  <div className="card-header">
                    <div className="utils__title">
                      <strong>4 Year Dividend Growth</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12 col-xl-12">
                <div className="card" style={{ height: 1000 }}>
                  <div className="card-header">
                    <div className="utils__title">
                      <strong>Dividend Chart</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tab="Valuation" key="5">
            <div className="row">
              <div className="col-lg-4 col-xl-4">
                <div className="card" style={{ height: 150 }}>
                  <div className="card-header">
                    <div className="utils__title">
                      <strong>Current Price</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-xl-4">
                <div className="card" style={{ height: 150 }}>
                  <div className="card-header">
                    <div className="utils__title">
                      <strong>Current Value</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-xl-4">
                <div className="card" style={{ height: 150 }}>
                  <div className="card-header">
                    <div className="utils__title">
                      <strong>Premium</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tab="Ratings" key="6">
            <div className="row">
              <div className="col-lg-4 col-xl-4">
                <div className="card" style={{ height: 150 }}>
                  <div className="card-header">
                    <div className="utils__title">
                      <strong>Rhino Rating</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-xl-4">
                <div className="card" style={{ height: 150 }}>
                  <div className="card-header">
                    <div className="utils__title">
                      <strong>Credit Rating</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-xl-4">
                <div className="card" style={{ height: 150 }}>
                  <div className="card-header">
                    <div className="utils__title">
                      <strong>Buy | Hold | Sell</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12 col-xl-12">
                <div className="card" style={{ height: 1000 }}>
                  <div className="card-header">
                    <div className="utils__title">
                      <strong>Rhino Scorecard</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tab="Analyst Expectations" key="7">
            Content of tab 7
          </TabPane>
          <TabPane tab="Research" key="8">
            Content of tab 8
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default DashboardCrypto
