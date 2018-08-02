import React from 'react'
import { Table, Select, Tag, Divider, Input, Button, Icon } from 'antd'
import './style.scss'
import { marketHistory } from './data.json'

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Joe Black',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Jim Green',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
]

class DashboardCrypto extends React.Component {
  state = {
    marketHistory: {
      data: marketHistory,
    },
    filterDropdownVisible: false,
    data,
    searchText: '',
    filtered: false,
  }

  onInputChange = e => {
    this.setState({ searchText: e.target.value })
  }
  onSearch = () => {
    const { searchText } = this.state
    const reg = new RegExp(searchText, 'gi')
    this.setState({
      filterDropdownVisible: false,
      filtered: !!searchText,
      data: data
        .map(record => {
          const match = record.name.match(reg)
          if (!match) {
            return null
          }
          return {
            ...record,
            name: (
              <span>
                {record.name
                  .split(reg)
                  .map(
                    (text, i) =>
                      i > 0 ? [<span className="highlight">{match[0]}</span>, text] : text,
                  )}
              </span>
            ),
          }
        })
        .filter(record => !!record),
    })
  }

  render() {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        filterDropdown: (
          <div className="custom-filter-dropdown">
            <Input
              ref={ele => (this.searchInput = ele)}
              placeholder="Search name"
              value={this.state.searchText}
              onChange={this.onInputChange}
              onPressEnter={this.onSearch}
            />
            <Button type="primary" onClick={this.onSearch}>
              Search
            </Button>
          </div>
        ),
        filterIcon: (
          <Icon type="smile-o" style={{ color: this.state.filtered ? '#108ee9' : '#aaa' }} />
        ),
        filterDropdownVisible: this.state.filterDropdownVisible,
        onFilterDropdownVisibleChange: visible => {
          this.setState(
            {
              filterDropdownVisible: visible,
            },
            () => this.searchInput && this.searchInput.focus(),
          )
        },
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        filters: [
          {
            text: 'London',
            value: 'London',
          },
          {
            text: 'New York',
            value: 'New York',
          },
        ],
        onFilter: (value, record) => record.address.indexOf(value) === 0,
      },
    ]

    return (
      <div className="crypto">
        <Divider strong>Overview</Divider>
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
            <strong>Listed Timber REITs</strong>
          </div>
          <a href="javascript: void(0);" className="crypto__listItem crypto__listItem--current">
            <span className="crypto__listPercents">
              <span>11.7%</span>
              0.00016985
            </span>
            <span className="crypto__listCurrency">
              <span>CTT</span>
              97.20
            </span>
          </a>
          <a href="javascript: void(0);" className="crypto__listItem crypto__listItem--negative">
            <span className="crypto__listPercents">
              <span>-2.3%</span>
              0.00016985
            </span>
            <span className="crypto__listCurrency">
              <span>PCH</span>
              44.90
            </span>
          </a>
          <a href="javascript: void(0);" className="crypto__listItem">
            <span className="crypto__listPercents">
              <span>7.2%</span>
              0.00016985
            </span>
            <span className="crypto__listCurrency">
              <span>RYN</span>
              32.78
            </span>
          </a>
          <a href="javascript: void(0);" className="crypto__listItem crypto__listItem--negative">
            <span className="crypto__listPercents">
              <span>-11.7%</span>
              0.00016985
            </span>
            <span className="crypto__listCurrency">
              <span>WY</span>
              12.25
            </span>
          </a>
        </div>
        <div className="crypto__content">
          <div className="utils__title utils__title--flat mb-3">
            <strong>Sector Chart</strong>
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
              <div className="crypto__order" style={{ height: 400 }}>
                <div className="crypto__orderLeft">
                  <div className="crypto__table text-nowrap" />
                </div>
                <div className="crypto__orderMiddle" />
                <div className="crypto__orderRight">
                  <div className="crypto__table text-nowrap" />
                </div>
              </div>
            </div>
          </div>
          <div className="utils__title utils__title--flat mb-3">
            <strong>Recent News</strong>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="crypto__table text-nowrap" style={{ height: 400 }} />
            </div>
          </div>
          <div className="utils__title utils__title--flat mb-3">
            <strong>Rhino Ratings</strong>
          </div>
          <div className="card">
            <div className="card-body" style={{ height: 200 }} />
          </div>
        </div>
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
              <Table columns={columns} dataSource={this.state.data} />
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
              <Table columns={columns} dataSource={this.state.data} />
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
              <Table columns={columns} dataSource={this.state.data} />
            </div>
          </div>
        </div>
        <Divider strong>Research</Divider>

        <div className="card">
          <div className="card-body">
            <div className="crypto__table text-nowrap" style={{ height: 600 }} />
          </div>
        </div>
      </div>
    )
  }
}

export default DashboardCrypto
