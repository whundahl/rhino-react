import React from 'react'
// import TradeChart from './TradeChart'


import { Table, Select, Tag, Divider } from 'antd'
import './style.scss'
import { myOpenOrders, marketHistory, orderBookBuy, orderBookSell } from './data.json'

import { Tabs, Radio } from 'antd';
const TabPane = Tabs.TabPane;

class DashboardCrypto extends React.Component {
  state = {
    orderType: 'buy',
    graphData: null,
    myOpenOrders: {
      loading: false,
      loaded: false,
      data: myOpenOrders,
    },
    myOrderHistory: {
      loading: false,
      loaded: false,
      data: myOpenOrders,
    },
    marketHistory: {
      data: marketHistory,
    },
    orderBook: {
      buy: orderBookBuy,
      sell: orderBookSell,
    },
  }

  toggleOrderType = e => {
    this.setState({
      orderType: e.target.value,
    })
  }

  render() {
    const { orderBook } = this.state

    const ordersBuyColumns = [
      {
        title: '',
        dataIndex: 'sell',
        key: 'sell',
        width: 60,
        render: () => {
          return (
            <a href="javascript: void(0);" className="utils__link--blue ml-2">
              <strong>BUY</strong>
            </a>
          )
        },
      },
      {
        title: 'ASK',
        dataIndex: 'ask',
        key: 'ask',
        width: 120,
        render: value => {
          return <span style={{ color: '#f75535' }}>{value}</span>
        },
      },
      {
        title: 'Size',
        dataIndex: 'size',
        key: 'size',
      },
      {
        title: 'Total',
        dataIndex: 'total',
        key: 'total',
      },
      {
        title: 'SUM',
        dataIndex: 'sum',
        key: 'sum',
      },
    ]

    return (
      <div className="crypto">
      
     

  <Tabs
          defaultActiveKey="1"
          tabPosition="top"
          style={{ height: 1400 }}
        >
          <TabPane tab="Overview" key="1"> <div className="card">
          <div className="card-body">
            <div className="crypto__table text-nowrap" style={{ height: 600 }} />
          </div>
        </div></TabPane>
          <TabPane tab="Returns" key="2">  <div className="row">
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
        </div></TabPane>
          <TabPane tab="FFO Forcaster" key="3">Content of tab 3</TabPane>
          <TabPane tab="Dividend Lab" key="4">Content of tab 4</TabPane>
          <TabPane tab="Valuation" key="5">Content of tab 5</TabPane>
          <TabPane tab="Ratings" key="6">Content of tab 6</TabPane>
          <TabPane tab="Analyst Expectations" key="7">Content of tab 7</TabPane>
  
        </Tabs>

        <Divider strong>Sector Composition</Divider>

        <div className="row">
          <div className="col-lg-12 col-xl-6">
            <div className="card" style={{ height: 400 }}>
              <div className="card-header">
                <div className="utils__title">
                  <strong>Sector Breakdown</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12 col-xl-6">
            <div className="card" style={{ height: 400 }}>
              <div className="card-header">
                <div className="utils__title">
                  <strong>Sector Analysis</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="crypto__table text-nowrap" style={{ height: 400 }}>
              <Table
                columns={ordersBuyColumns}
                dataSource={orderBook.buy}
                pagination={true}
                size="small"
                scroll={{ x: true }}
              />
            </div>
          </div>
        </div>
        <Divider strong>Ratings</Divider>

        <div className="row">
          <div className="col-lg-12 col-xl-6">
            <div className="card" style={{ height: 400 }}>
              <div className="card-header">
                <div className="utils__title">
                  <strong>Rhino Sector Rating</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12 col-xl-6">
            <div className="card" style={{ height: 400 }}>
              <div className="card-header">
                <div className="utils__title">
                  <strong>BUY | SELL | HOLD</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="crypto__table text-nowrap" style={{ height: 400 }}>
              <Table
                columns={ordersBuyColumns}
                dataSource={orderBook.buy}
                pagination={true}
                size="small"
                scroll={{ x: true }}
              />
            </div>
          </div>
        </div>
        <Divider strong>Valuation</Divider>
        <div className="card">
          <div className="card-body">
            <div className="crypto__table text-nowrap" style={{ height: 600 }} />
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="crypto__table text-nowrap" style={{ height: 400 }}>
              <Table
                columns={ordersBuyColumns}
                dataSource={orderBook.buy}
                pagination={true}
                size="small"
                scroll={{ x: true }}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DashboardCrypto












     
