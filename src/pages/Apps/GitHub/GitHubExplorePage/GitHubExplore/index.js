import React from 'react'
import { Tabs, Button, Select, Radio, Icon, Menu, Dropdown } from 'antd'
import './style.scss'
import data from './data.json'

const TabPane = Tabs.TabPane
const Option = Select.Option

const downloadDropdown = (
  <Menu>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
    <Menu.Item key="3">3rd item</Menu.Item>
  </Menu>
)

class GitHubExplore extends React.Component {
  state = {
    projectData: data.projectData,
  }

  render() {
    let { projectData } = this.state

    return (
      <section className="card">
        <div className="card-header">
          <div className="utils__title">
            <strong>GitHub Explore</strong>
          </div>
        </div>
        <div className="card-body pt-3">
          <div className="explore">
            <div className="explore__menu mb-3">
              <Tabs type="card" defaultActiveKey="1">
                <TabPane
                  tab={
                    <span>
                      <i className="mr-2 fa fa-home" />Home
                    </span>
                  }
                  key="1"
                />
                <TabPane
                  tab={
                    <span>
                      <i className="mr-2 fa fa-comments" />Discussion
                    </span>
                  }
                  key="2"
                />
                <TabPane
                  tab={
                    <span>
                      <i className="mr-2 fa fa-user" />Profile
                    </span>
                  }
                  key="3"
                />
                <TabPane
                  tab={
                    <span>
                      <i className="mr-2 fa fa-envelope" />Messages
                    </span>
                  }
                  key="4"
                />
                <TabPane
                  tab={
                    <span>
                      <i className="mr-2 fa fa-cog" />Settings
                    </span>
                  }
                  key="5"
                />
              </Tabs>
            </div>
            <div className="explore__descr clearfix">
              <p className="explore__descr-text">{projectData.description}</p>
              <span className="pull-right">
                <Button>Edit</Button>
              </span>
            </div>
            <div className="explore__overall-data">
              <ul className="explore__overall-data-list">
                <li className="explore__overall-data-item">
                  <a href="javascript: void(0);" className="explore__overall-data-link">
                    <i className="explore__overall-data-icon fa fa-check-circle-o mr-2" />
                    {projectData.commits + ' commits'}
                  </a>
                </li>
                <li className="explore__overall-data-item">
                  <a href="javascript: void(0);" className="explore__overall-data-link">
                    <i className="explore__overall-data-icon fa fa-th-list mr-2" />
                    {projectData.branches + ' branch'}
                  </a>
                </li>
                <li className="explore__overall-data-item">
                  <a href="javascript: void(0);" className="explore__overall-data-link">
                    <i className="explore__overall-data-icon fa fa-window-maximize mr-2" />
                    {projectData.releases + ' releases'}
                  </a>
                </li>
                <li className="explore__overall-data-item">
                  <a href="javascript: void(0);" className="explore__overall-data-link">
                    <i className="explore__overall-data-icon fa fa-bell mr-2" />
                    {projectData.contributors + ' contributors'}
                  </a>
                </li>
              </ul>
            </div>
            <div className="explore__sort clearfix">
              <div className="explore__sort-left">
                <Select
                  showSearch
                  style={{ width: 200 }}
                  placeholder="Select a type"
                  optionFilterProp="children"
                  defaultActiveFirstOption={true}
                  filterOption={(input, option) =>
                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="html">HTML</Option>
                  <Option value="css">CSS</Option>
                  <Option value="javascript">JavaScript</Option>
                </Select>
                <span className="ml-2">
                  <Button>New request</Button>
                </span>
              </div>
              <div className="explore__sort-right">
                <div className="explore__sort-option">
                  <Radio.Group>
                    <Radio.Button value="create">Create new file</Radio.Button>
                    <Radio.Button value="upload">Upload files</Radio.Button>
                    <Radio.Button value="find">Find file</Radio.Button>
                  </Radio.Group>
                </div>
                <div className="explore__sort-option">
                  <Dropdown overlay={downloadDropdown}>
                    <Button style={{ marginLeft: 8 }}>
                      Download <Icon type="down" />
                    </Button>
                  </Dropdown>
                </div>
              </div>
            </div>
            <table className="explore__nav table table-hover">
              <tbody>
                {projectData.explore.map((item, index) => (
                  <tr key={index}>
                    <td className="explore__nav-icon">
                      {item.type === 'folder' && <i className="fa fa-folder" />}
                      {item.type === 'file' && <i className="fa fa-file-o" />}
                    </td>
                    <td className="explore__nav-content">
                      <a href="javascript: void(0);" className="explore__nav-link">
                        {item.name}
                      </a>
                    </td>
                    <td className="explore__nav-descr">{item.info}</td>
                    <td className="explore__nav-time">{item.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    )
  }
}

export default GitHubExplore
