import React from 'react'
import { Tabs, Input, Icon, Table, Button } from 'antd'
import './style.scss'
import data from './data.json'

const TabPane = Tabs.TabPane
const Search = Input.Search

const mailTab = category => {
  return (
    <div className="mail__tab">
      <div className="mail__tab-content">
        <div className="mb-1">
          <strong>
            {category.mailCount > 0
              ? category.title + ' (' + category.mailCount + ')'
              : category.title}
          </strong>
        </div>
        {category.mailCount > 0 && (
          <div>
            <small className="mail__tab-time">8:34PM</small>
            <div className="mail__tab-name">Barak Obama</div>
            <div className="mail__tab-text">
              Hello! Where you are now? I want to talk. Hello! Where you are now? I want to talk
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const defaultPagination = {
  pageSizeOptions: ['10', '50', '100', '250'],
  showSizeChanger: true,
  current: 1,
  size: 'small',
  showTotal: (total: number) => `Total ${total} items`,
  total: 0,
}

class MailList extends React.Component {
  state = {
    mailData: {},
    mailCategories: [],
    activeCategory: 'inbox',
    mails: [],
    pager: { ...defaultPagination },
  }

  handleTableChange = (pagination, filters, sorter) => {
    if (this.state.pager) {
      const pager = { ...this.state.pager }
      if (pager.pageSize !== pagination.pageSize) {
        this.pageSize = pagination.pageSize
        pager.pageSize = pagination.pageSize
        pager.current = 1
      } else {
        pager.current = pagination.current
      }
      this.setState({
        pager: pager,
      })
    }
  }

  changeCategory = key => {
    let { mailCategories, mails, mailData, activeCategory } = this.state

    activeCategory = mailCategories[key].key
    mails = mailData[activeCategory]

    this.setState({
      activeCategory: activeCategory,
      mails: mails,
    })
  }

  componentWillMount() {
    this.setState({
      mailData: data.mailData,
      mailCategories: data.mailData.mailCategories,
      mails: data.mailData['inbox'],
    })
  }

  render() {
    let { mailCategories, mails, pager } = this.state

    const columns = [
      {
        title: '',
        dataIndex: 'favorites',
        key: 'favorites',
        render: text => {
          return (
            <i
              className={
                text === true ? 'icmn-star-full text-warning' : 'icmn-star-full text-default'
              }
            />
          )
        },
      },
      {
        title: 'From',
        dataIndex: 'from',
        key: 'from',
        render: text => <a href="javascript: void(0);">{text}</a>,
        sorter: (a, b) => a.from.length - b.from.length,
      },
      {
        title: 'Message',
        dataIndex: 'message',
        key: 'message',
        sorter: (a, b) => a.message.length - b.message.length,
      },
      {
        title: '',
        dataIndex: 'attachments',
        key: 'attachments',
        render: text => {
          if (text === true) {
            return <i className="icmn-attachment text-default" />
          } else {
            return ''
          }
        },
      },
      {
        title: '',
        dataIndex: 'time',
        key: 'time',
      },
    ]

    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
      }),
    }

    return (
      <div className="card mail">
        <div className="mail__sidebar">
          <div className="mail__sidebar-header">
            <Search placeholder="input search text" style={{ width: '100%' }} />
          </div>
          <div className="mail__tabs">
            <Tabs defaultActiveKey="0" tabPosition={'left'} onChange={this.changeCategory}>
              {mailCategories.map((category, index) => (
                <TabPane tab={mailTab(category)} key={index} />
              ))}
            </Tabs>
          </div>
        </div>
        <div className="mail__content">
          <div className="mail__content-header">
            <div className="card-header clearfix">
              <div className="pull-right">
                <Button type="primary">Compose mail</Button>
              </div>
              <Tabs defaultActiveKey="1" tabPosition={'top'}>
                <TabPane
                  tab={
                    <span>
                      <Icon type="home" /> Primary
                    </span>
                  }
                  key="1"
                />
                <TabPane
                  tab={
                    <span>
                      <Icon type="message" /> Social
                    </span>
                  }
                  key="2"
                />
                <TabPane
                  tab={
                    <span>
                      <Icon type="tags" /> Promotion
                    </span>
                  }
                  key="3"
                />
              </Tabs>
            </div>
          </div>
          <div className="mail__content-wrapper">
            <Table
              columns={columns}
              rowSelection={rowSelection}
              dataSource={mails}
              pagination={pager}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default MailList
