import React from 'react'
import { Table, Select, Tag, Divider, Input, Button, Icon, Slider, Tabs } from 'antd'

const TabPane = Tabs.TabPane

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

class DashboardAlpha extends React.Component {
  state = {
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
          <div className="col-lg-12">
            <div className="card" style={{ height: 800 }}>
              <div className="card-header">
                <div className="utils__title">
                  <strong>Sector Performance</strong>
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
              <Table columns={columns} dataSource={this.state.data} />
            </div>
          </div>

          <div className="col-lg-12 col-xl-6">
            <div className="card" style={{ height: 500 }}>
              <div className="card-header">
                <div className="utils__title">
                  <strong>Table Portfolios</strong>
                </div>
              </div>
              <Table columns={columns} dataSource={this.state.data} />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 col-xl-6">
            <div className="card" style={{ height: 500 }}>
              <div className="card-header">
                <div className="utils__title">
                  <strong>Top Performers</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12 col-xl-6">
            <div className="card" style={{ height: 500 }}>
              <div className="card-header">
                <div className="utils__title">
                  <strong>Bottom Performers</strong>
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
