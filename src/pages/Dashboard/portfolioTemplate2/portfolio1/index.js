import React from 'react'
import { Table, Select, Tag, Divider } from 'antd'
import './style.scss'
import { myOpenOrders, marketHistory, orderBookBuy, orderBookSell } from './data.json'

class Portfolio2 extends React.Component {
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
        <Divider style={{ fontWeight: 'bold' }}>Overview</Divider>
        <div className="crypto__listMobile">
          <div className="utils__title utils__title--flat mb-3">
            <strong>Listed REITs</strong>
          </div>
          <Select showSearch size="large" defaultValue="btc" style={{ width: '100%' }}>
            <Select.Option value="ARI">
              ARI
              <Tag color="blue" className="ml-3">
                11.7%
              </Tag>
            </Select.Option>
            <Select.Option value="ACRE">
              ACRE
              <Tag color="red" className="ml-3">
                -2.3%
              </Tag>
            </Select.Option>
            <Select.Option value="BXMT">
              BXMT
              <Tag color="red" className="ml-3">
                -7.2%
              </Tag>
            </Select.Option>
            <Select.Option value="GPMT">
              GPMT
              <Tag color="red" className="ml-3">
                -11.7%
              </Tag>
            </Select.Option>
            <Select.Option value="HASI">
              HASI
              <Tag color="blue" className="ml-3">
                67.5%
              </Tag>
            </Select.Option>
            <Select.Option value="JCAP">
              JCAP
              <Tag color="red" className="ml-3">
                -22.9%
              </Tag>
            </Select.Option>
            <Select.Option value="KREF">
              KREF
              <Tag color="red" className="ml-3">
                -12.3%
              </Tag>
            </Select.Option>
            <Select.Option value="LADR">
              LADR
              <Tag color="blue" className="ml-3">
                +4.3%
              </Tag>
            </Select.Option>
            <Select.Option value="STWD">
              STWD
              <Tag color="red" className="ml-3">
                -4.2%
              </Tag>
            </Select.Option>
            <Select.Option value="TRTX">
              TRTX
              <Tag color="red" className="ml-3">
                -1.7%
              </Tag>
            </Select.Option>
            <Select.Option value="CLNC">
              CLNC
              <Tag color="red" className="ml-3">
                -2.8%
              </Tag>
            </Select.Option>
          </Select>
        </div>
        <div className="crypto__list">
          <div className="utils__title utils__title--flat mb-3">
            <strong>Durable Income Listed REITs</strong>
          </div>
          <a href="javascript: void(0);" className="crypto__listItem crypto__listItem--current">
            <span className="crypto__listPercents">
              <span>11.7%</span>
              0.00016985
            </span>
            <span className="crypto__listCurrency">
              <span>AVB</span>
              97.20
            </span>
          </a>
          <a href="javascript: void(0);" className="crypto__listItem crypto__listItem--negative">
            <span className="crypto__listPercents">
              <span>-2.3%</span>
              0.00016985
            </span>
            <span className="crypto__listCurrency">
              <span>BXMT</span>
              44.90
            </span>
          </a>
          <a href="javascript: void(0);" className="crypto__listItem">
            <span className="crypto__listPercents">
              <span>7.2%</span>
              0.00016985
            </span>
            <span className="crypto__listCurrency">
              <span>CCI</span>
              32.78
            </span>
          </a>
          <a href="javascript: void(0);" className="crypto__listItem crypto__listItem--negative">
            <span className="crypto__listPercents">
              <span>-11.7%</span>
              0.00016985
            </span>
            <span className="crypto__listCurrency">
              <span>CHCT</span>
              12.25
            </span>
          </a>
          <a href="javascript: void(0);" className="crypto__listItem">
            <span className="crypto__listPercents">
              <span>67.5%</span>
              0.00016985
            </span>
            <span className="crypto__listCurrency">
              <span>CIO</span>
              8.26
            </span>
          </a>
          <a href="javascript: void(0);" className="crypto__listItem crypto__listItem--negative">
            <span className="crypto__listPercents">
              <span>-22.9%</span>
              0.00016985
            </span>
            <span className="crypto__listCurrency">
              <span>CLDT</span>
              5.20
            </span>
          </a>
          <a href="javascript: void(0);" className="crypto__listItem crypto__listItem--negative">
            <span className="crypto__listPercents">
              <span>-12.3%</span>
              0.00016985
            </span>
            <span className="crypto__listCurrency">
              <span>CONE</span>
              3.20
            </span>
          </a>
          <a href="javascript: void(0);" className="crypto__listItem">
            <span className="crypto__listPercents">
              <span>+4.3%</span>
              0.00036234
            </span>
            <span className="crypto__listCurrency">
              <span>CORR</span>
              5.64
            </span>
          </a>
          <a href="javascript: void(0);" className="crypto__listItem crypto__listItem--negative">
            <span className="crypto__listPercents">
              <span>-4.2%</span>
              0.00035685
            </span>
            <span className="crypto__listCurrency">
              <span>CUBE</span>
              6.36
            </span>
          </a>
          <a href="javascript: void(0);" className="crypto__listItem crypto__listItem--negative">
            <span className="crypto__listPercents">
              <span>-1.7%</span>
              0.00000985
            </span>
            <span className="crypto__listCurrency">
              <span>DLR</span>
              6.35
            </span>
          </a>
          <a href="javascript: void(0);" className="crypto__listItem crypto__listItem--negative">
            <span className="crypto__listPercents">
              <span>-2.8%</span>
              0.00000152
            </span>
            <span className="crypto__listCurrency">
              <span>DOC</span>
              1.03
            </span>
          </a>
          <a href="javascript: void(0);" className="crypto__listItem crypto__listItem--negative">
            <span className="crypto__listPercents">
              <span>-2.8%</span>
              0.00000152
            </span>
            <span className="crypto__listCurrency">
              <span>EXR</span>
              1.03
            </span>
          </a>
          <a href="javascript: void(0);" className="crypto__listItem crypto__listItem--negative">
            <span className="crypto__listPercents">
              <span>-2.8%</span>
              0.00000152
            </span>
            <span className="crypto__listCurrency">
              <span>GPT</span>
              1.03
            </span>
          </a>
          <a href="javascript: void(0);" className="crypto__listItem crypto__listItem--negative">
            <span className="crypto__listPercents">
              <span>-2.8%</span>
              0.00000152
            </span>
            <span className="crypto__listCurrency">
              <span>HASI</span>
              1.03
            </span>
          </a>
          <a href="javascript: void(0);" className="crypto__listItem crypto__listItem--negative">
            <span className="crypto__listPercents">
              <span>-2.8%</span>
              0.00000152
            </span>
            <span className="crypto__listCurrency">
              <span>HTA</span>
              1.03
            </span>
          </a>
          <a href="javascript: void(0);" className="crypto__listItem crypto__listItem--negative">
            <span className="crypto__listPercents">
              <span>-2.8%</span>
              0.00000152
            </span>
            <span className="crypto__listCurrency">
              <span>JCAP</span>
              1.03
            </span>
          </a>
          <a href="javascript: void(0);" className="crypto__listItem crypto__listItem--negative">
            <span className="crypto__listPercents">
              <span>-2.8%</span>
              0.00000152
            </span>
            <span className="crypto__listCurrency">
              <span>KIM</span>
              1.03
            </span>
          </a>
          <a href="javascript: void(0);" className="crypto__listItem crypto__listItem--negative">
            <span className="crypto__listPercents">
              <span>-2.8%</span>
              0.00000152
            </span>
            <span className="crypto__listCurrency">
              <span>LADR</span>
              1.03
            </span>
          </a>
          <a href="javascript: void(0);" className="crypto__listItem crypto__listItem--negative">
            <span className="crypto__listPercents">
              <span>-2.8%</span>
              0.00000152
            </span>
            <span className="crypto__listCurrency">
              <span>LTC</span>
              1.03
            </span>
          </a>
          <a href="javascript: void(0);" className="crypto__listItem crypto__listItem--negative">
            <span className="crypto__listPercents">
              <span>-2.8%</span>
              0.00000152
            </span>
            <span className="crypto__listCurrency">
              <span>LXP</span>
              1.03
            </span>
          </a>{' '}
          <a href="javascript: void(0);" className="crypto__listItem crypto__listItem--negative">
            <span className="crypto__listPercents">
              <span>-2.8%</span>
              0.00000152
            </span>
            <span className="crypto__listCurrency">
              <span>O</span>
              1.03
            </span>
          </a>{' '}
          <a href="javascript: void(0);" className="crypto__listItem crypto__listItem--negative">
            <span className="crypto__listPercents">
              <span>-2.8%</span>
              0.00000152
            </span>
            <span className="crypto__listCurrency">
              <span>OHI</span>
              1.03
            </span>
          </a>{' '}
          <a href="javascript: void(0);" className="crypto__listItem crypto__listItem--negative">
            <span className="crypto__listPercents">
              <span>-2.8%</span>
              0.00000152
            </span>
            <span className="crypto__listCurrency">
              <span>OUT</span>
              1.03
            </span>
          </a>{' '}
          <a href="javascript: void(0);" className="crypto__listItem crypto__listItem--negative">
            <span className="crypto__listPercents">
              <span>-2.8%</span>
              0.00000152
            </span>
            <span className="crypto__listCurrency">
              <span>PEB</span>
              1.03
            </span>
          </a>{' '}
          <a href="javascript: void(0);" className="crypto__listItem crypto__listItem--negative">
            <span className="crypto__listPercents">
              <span>-2.8%</span>
              0.00000152
            </span>
            <span className="crypto__listCurrency">
              <span>PEI</span>
              1.03
            </span>
          </a>
          <a href="javascript: void(0);" className="crypto__listItem crypto__listItem--negative">
            <span className="crypto__listPercents">
              <span>-2.8%</span>
              0.00000152
            </span>
            <span className="crypto__listCurrency">
              <span>PK</span>
              1.03
            </span>
          </a>
          <a href="javascript: void(0);" className="crypto__listItem crypto__listItem--negative">
            <span className="crypto__listPercents">
              <span>-2.8%</span>
              0.00000152
            </span>
            <span className="crypto__listCurrency">
              <span>PSA</span>
              1.03
            </span>
          </a>
          <a href="javascript: void(0);" className="crypto__listItem crypto__listItem--negative">
            <span className="crypto__listPercents">
              <span>-2.8%</span>
              0.00000152
            </span>
            <span className="crypto__listCurrency">
              <span>QTS</span>
              1.03
            </span>
          </a>
          <a href="javascript: void(0);" className="crypto__listItem crypto__listItem--negative">
            <span className="crypto__listPercents">
              <span>-2.8%</span>
              0.00000152
            </span>
            <span className="crypto__listCurrency">
              <span>ROIC</span>
              1.03
            </span>
          </a>
          <a href="javascript: void(0);" className="crypto__listItem crypto__listItem--negative">
            <span className="crypto__listPercents">
              <span>-2.8%</span>
              0.00000152
            </span>
            <span className="crypto__listCurrency">
              <span>SKT</span>
              1.03
            </span>
          </a>
          <a href="javascript: void(0);" className="crypto__listItem crypto__listItem--negative">
            <span className="crypto__listPercents">
              <span>-2.8%</span>
              0.00000152
            </span>
            <span className="crypto__listCurrency">
              <span>SPG</span>
              1.03
            </span>
          </a>
          <a href="javascript: void(0);" className="crypto__listItem crypto__listItem--negative">
            <span className="crypto__listPercents">
              <span>-2.8%</span>
              0.00000152
            </span>
            <span className="crypto__listCurrency">
              <span>STAG</span>
              1.03
            </span>
          </a>
          <a href="javascript: void(0);" className="crypto__listItem crypto__listItem--negative">
            <span className="crypto__listPercents">
              <span>-2.8%</span>
              0.00000152
            </span>
            <span className="crypto__listCurrency">
              <span>STOR</span>
              1.03
            </span>
          </a>
          <a href="javascript: void(0);" className="crypto__listItem crypto__listItem--negative">
            <span className="crypto__listPercents">
              <span>-2.8%</span>
              0.00000152
            </span>
            <span className="crypto__listCurrency">
              <span>TCO</span>
              1.03
            </span>
          </a>
          <a href="javascript: void(0);" className="crypto__listItem crypto__listItem--negative">
            <span className="crypto__listPercents">
              <span>-2.8%</span>
              0.00000152
            </span>
            <span className="crypto__listCurrency">
              <span>TRTX</span>
              1.03
            </span>
          </a>
          <a href="javascript: void(0);" className="crypto__listItem crypto__listItem--negative">
            <span className="crypto__listPercents">
              <span>-2.8%</span>
              0.00000152
            </span>
            <span className="crypto__listCurrency">
              <span>UBA</span>
              1.03
            </span>
          </a>
          <a href="javascript: void(0);" className="crypto__listItem crypto__listItem--negative">
            <span className="crypto__listPercents">
              <span>-2.8%</span>
              0.00000152
            </span>
            <span className="crypto__listCurrency">
              <span>UMH</span>
              1.03
            </span>
          </a>
          <a href="javascript: void(0);" className="crypto__listItem crypto__listItem--negative">
            <span className="crypto__listPercents">
              <span>-2.8%</span>
              0.00000152
            </span>
            <span className="crypto__listCurrency">
              <span>VNO</span>
              1.03
            </span>
          </a>
          <a href="javascript: void(0);" className="crypto__listItem crypto__listItem--negative">
            <span className="crypto__listPercents">
              <span>-2.8%</span>
              0.00000152
            </span>
            <span className="crypto__listCurrency">
              <span>VTR</span>
              1.03
            </span>
          </a>
          <a href="javascript: void(0);" className="crypto__listItem crypto__listItem--negative">
            <span className="crypto__listPercents">
              <span>-2.8%</span>
              0.00000152
            </span>
            <span className="crypto__listCurrency">
              <span>WPC</span>
              1.03
            </span>
          </a>
        </div>
        <div className="crypto__content">
          <div className="utils__title utils__title--flat mb-3">
            <strong>DAVOS Portfolio Chart</strong>
          </div>
          <div className="card">
            <div className="card-body">
              <div style={{ height: 700 }} />
            </div>
          </div>
          <div className="utils__title utils__title--flat mb-3">
            <strong>Recent Articles</strong>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="crypto__order" style={{ height: 800 }} />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 col-xl-6">
              <div className="card" style={{ height: 600 }}>
                <div className="card-header">
                  <div className="utils__title">
                    <strong>Sector Allocation</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-xl-6">
              <div className="card" style={{ height: 600 }}>
                <div className="card-header">
                  <div className="utils__title">
                    <strong>REIT Allocation</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="utils__title utils__title--flat mb-3">
            <strong>Portfolio Statistics</strong>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="crypto__order" style={{ height: 470 }} />
            </div>
          </div>
        </div>

        <Divider style={{ fontWeight: 'bold' }}>Recent Trades</Divider>

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

export default Portfolio2
