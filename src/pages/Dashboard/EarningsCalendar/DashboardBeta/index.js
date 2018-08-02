import React from 'react'
import { Slider, Calendar, Badge, Table, Input, Dropdown, Button, Icon, Menu } from 'antd'
import ChartistGraph from 'react-chartist'
import Chartist from 'chartist'
import Donut from 'components/CleanComponents/Donut'
import UserCard from 'components/CleanComponents/UserCard'
import ProfileHeadCard from 'components/CleanComponents/ProfileHeadCard'
import ProgressGroup from 'components/CleanComponents/ProgressGroup'
import SliderCard from 'components/CleanComponents/SliderCard'
import InfoCard from 'components/CleanComponents/InfoCard'
import Chat from 'components/CleanComponents/Chat'
import {
  rangeSlider,
  calendarData,
  weekChartistData,
  monthCartistData,
  taskTableData,
  tableData,
} from './data.json'

// Slider Range Settings //
const rangeMarks = {
  0: '0',
  10: '10',
  20: '20',
  30: '30',
  40: '40',
  50: '50',
  60: '60',
  70: '70',
  80: '80',
  90: '90',
  100: '100',
}

// Calendar Settings //
function getListData(value) {
  let date = value.date()
  let itemName = 'date_' + date
  let listData
  if (calendarData[itemName] !== undefined) {
    listData = calendarData[itemName]
  }
  return listData || []
}

function dateCellRender(value) {
  const listData = getListData(value)
  return (
    <ul className="events">
      {listData.map(item => (
        <li key={item.content}>
          <Badge status={item.type} text={item.content} />
        </li>
      ))}
    </ul>
  )
}

// Week Chartist Settings //
const weekChartistOptions = {
  fullWidth: true,
  showArea: false,
  chartPadding: {
    right: 30,
    left: 0,
  },
  plugins: [
    Chartist.plugins.tooltip({
      seriesName: false,
    }),
  ],
}

// Month Chartist Settings //
const monthChartistOptions = {
  seriesBarDistance: 10,
}

class DashboardBeta extends React.Component {
  state = {
    rangeMarks: rangeMarks,
    weekChartistData: weekChartistData,
    monthCartistData: monthCartistData,
    taskTableSelectedRowKeys: [],
    tableData: tableData,
    filterDropdownVisible: false,
    searchText: '',
    filtered: false,
    sortedInfo: null,
  }

  // Task Table Settings //
  onSelectChange = taskTableSelectedRowKeys => {
    this.setState({ taskTableSelectedRowKeys })
  }

  onInputChange = e => {
    this.setState({ searchText: e.target.value })
  }

  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter)
    this.setState({
      sortedInfo: sorter,
    })
  }

  onSearch = () => {
    const { searchText } = this.state
    const reg = new RegExp(searchText, 'gi')
    this.setState({
      filterDropdownVisible: false,
      filtered: !!searchText,
      tableData: tableData
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
                      i > 0
                        ? [<span style={{ backgroundColor: 'yellow' }}>{match[0]}</span>, text]
                        : text,
                  )}
              </span>
            ),
          }
        })
        .filter(record => !!record),
    })
  }

  render() {
    let {
      rangeMarks,
      weekChartistData,
      monthCartistData,
      taskTableSelectedRowKeys,
      // sortedInfo,
    } = this.state

    // Task Table Settings //
    const taskTableRowSelection = {
      taskTableSelectedRowKeys,
      onChange: this.onSelectChange,
    }

    const dropdownMenu = (
      <Menu>
        <Menu.Item key="1">1st menu item</Menu.Item>
        <Menu.Item key="2">2nd menu item</Menu.Item>
        <Menu.Item key="3">3rd item</Menu.Item>
      </Menu>
    )

    const taskTableColumns = [
      {
        title: 'Name',
        dataIndex: 'name',
        render: text => <a href="javascript: void(0);">{text}</a>,
      },
      {
        title: 'Username',
        dataIndex: 'username',
        render: text => <a href="javascript: void(0);">{text}</a>,
      },
      {
        title: 'Actions',
        dataIndex: 'actions',
        render: () => (
          <div className="pull-right">
            <Dropdown overlay={dropdownMenu}>
              <Button style={{ marginLeft: 8 }} size="small">
                Action <Icon type="down" />
              </Button>
            </Dropdown>
          </div>
        ),
      },
    ]

    const tableColumns = [
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
          <Icon type="search" style={{ color: this.state.filtered ? '#108ee9' : '#aaa' }} />
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
        title: 'Position',
        dataIndex: 'position',
        key: 'position',
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        sorter: (a, b) => a.age - b.age,
      },
      {
        title: 'Office',
        dataIndex: 'office',
        key: 'office',
      },
      {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
      },
      {
        title: 'Salary',
        dataIndex: 'salary',
        key: 'salary',
        sorter: (a, b) => a.salary - b.salary,
      },
    ]

    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Earnings Calendar</strong>
                </div>
                <div className="utils__titleDescription">Earnings Updated by Tradier©</div>
              </div>
              <div className="card-body">
                <Calendar dateCellRender={dateCellRender} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DashboardBeta
