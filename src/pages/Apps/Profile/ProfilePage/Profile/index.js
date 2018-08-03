import React from 'react'
import { Button, Progress, Calendar, Tabs, Upload, Icon, Input, Menu, Dropdown, Switch } from 'antd'
import data from './data.json'
import './style.scss'
import Avatar from 'components/CleanComponents/Avatar'
import Donut from 'components/CleanComponents/Donut'
import Chat from 'components/CleanComponents/Chat'
import SettingsForm from './SettingsForm'
import { setLayoutState } from 'ducks/app'
import { connect } from 'react-redux'

const TabPane = Tabs.TabPane
const { TextArea } = Input

const actions = (
  <Menu>
    <Menu.Item>
      <Icon type="edit" /> Edit Post
    </Menu.Item>
    <Menu.Item>
      <Icon type="delete" /> Delete Post
    </Menu.Item>
    <Menu.Item>
      <Icon type="frown-o" /> Mark as a Spam
    </Menu.Item>
  </Menu>
)

const mapStateToProps = (state, props) => ({
  layoutState: state.app.layoutState,
})

@connect(mapStateToProps)

class ProfileApp extends React.Component {
  state = {
    name: '',
    nickname: '',
    photo: '',
    background: '',
    post: '',
    postsCount: '',
    followersCount: '',
    lastActivity: '',
    status: '',
    layoutState: this.props.layoutState,
  }

  componentWillMount() {
    this.setState({
      name: data.name,
      nickname: data.nickname,
      photo: data.photo,
      background: data.background,
      post: data.post,
      postsCount: data.postsCount,
      followersCount: data.followersCount,
      lastActivity: data.lastActivity,
      status: data.status,
      skills: data.skills,
      coursesEnd: data.coursesEnd,
      adress: data.adress,
      profSkills: data.profSkills,
      lastCompanies: data.lastCompanies,
      personal: data.personal,
      posts: data.posts,
    })
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      layoutState: newProps.layoutState,
    })
  }

  closeSettings = () => {
    const { dispatch } = this.props
    dispatch(setLayoutState({ settingsOpened: false }))
  }

  setMenuCollapsed = state => {
    const { dispatch } = this.props
    dispatch(setLayoutState({ menuCollapsed: state }))
  }

  setMenuShadow = state => {
    const { dispatch } = this.props
    dispatch(setLayoutState({ menuShadow: state }))
  }

  setThemeLight = state => {
    const { dispatch } = this.props
    dispatch(setLayoutState({ themeLight: state }))
  }

  setSquaredBorders = state => {
    const { dispatch } = this.props
    dispatch(setLayoutState({ squaredBorders: state }))
  }

  setFixedWidth = state => {
    const { dispatch } = this.props
    dispatch(setLayoutState({ fixedWidth: state }))
  }

  setBorderLess = state => {
    const { dispatch } = this.props
    dispatch(setLayoutState({ borderLess: state }))
  }

  setIsMenuTop = state => {
    const { dispatch } = this.props
    dispatch(setLayoutState({ isMenuTop: state }))
  }



  render() {
    let {
      name,
      nickname,
      photo,
      background,
      post,
      postsCount,
      followersCount,
      lastActivity,
      status,
      skills,
      coursesEnd,
      adress,
      profSkills,
      lastCompanies,
      personal,
      posts,
      layoutState,
    } = this.state
    return (
      <div className="profile">
        <div className="row">
          <div className="col-xl-4">
            <div
              className="card profile__header"
              style={{ backgroundImage: 'url(' + background + ')' }}
            >
              <div className="profile__header-card">
                <div className="card-body text-center">
                  <Avatar src={photo} size="110" border="true" borderColor="white" />
                  <br />
                  <br />
                  <Button.Group size="default">
                    <Button style={{ width: 150 }}>Follow</Button>
                  </Button.Group>
                  <br />
                  <p className="text-white mt-2">{'Last activity: ' + lastActivity}</p>
                  <p className="text-white mt-2">
                    {status === 'Online' && <Donut type="success" name={status} />}
                    {status === 'Offline' && <Donut type="danger" name={status} />}
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="mb-3 text-black">
                  <strong>Payment Actions</strong>
                </h5>
                <div className="profile__actions">
                  <Button style={{ display: 'block', width: '100%' }}>Renew Subscription</Button>
                  <Button style={{ display: 'block', width: '100%' }}>
                    Check Subscription Status
                  </Button>
                  <Button style={{ display: 'block', width: '100%' }}>
                    Update Payment Information
                  </Button>
                  <Button style={{ display: 'block', width: '100%' }}>Upgrade Subscription</Button>
                  <Button style={{ display: 'block', width: '100%' }}>Delete Account</Button>
                  <Button style={{ display: 'block', width: '100%' }}>
                    Update Billing Information
                  </Button>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="mb-3 text-black">
                  <strong>Engagement Tracker</strong>
                </h5>
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="mb-1">{skill.name}</div>
                    <Progress percent={skill.value} showInfo={false} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="card profile__social-info">
              <div className="profile__social-name">
                <h2>
                  <span className="text-black mr-2">
                    <strong>{name}</strong>
                  </span>
                  <small className="text-muted">{nickname}</small>
                </h2>
                <p className="mb-1">{post}</p>
              </div>
              <div className="profile__social-counts">
                <div className="text-center mr-3">
                  <h2>{followersCount}</h2>
                  <p className="mb-0">Followers</p>
                </div>
                <div className="text-center">
                  <h2>{postsCount}</h2>
                  <p className="mb-0">Posts</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="mb-3 text-black">
                  <strong>Information</strong>
                </h5>
                <dl className="row">
                  <dt className="col-xl-3">About:</dt>
                  <dd className="col-xl-9">{coursesEnd}</dd>
                  <dt className="col-xl-3">Address:</dt>
                  <dd className="col-xl-9">{adress}</dd>
                  <dt className="col-xl-3">Skills:</dt>
                  <dd className="col-xl-9">
                    {profSkills.map((skill, index) => (
                      <span className="badge badge-default mr-1" key={index}>
                        {skill}
                      </span>
                    ))}
                  </dd>
                  <dt className="col-xl-3">Last companies:</dt>
                  <dd className="col-xl-9">{lastCompanies}</dd>
                  <dt className="col-xl-3">Personal Information:</dt>
                  <dd className="col-xl-9">{personal}</dd>
                </dl>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="mb-3 text-black">
                  <strong>Settings</strong>
                </h5>

                <Tabs defaultActiveKey="1">
                  <TabPane
                    tab={
                      <span>
                        <i className="icmn-cog" /> Personal
                      </span>
                    }
                    key="1"
                  >
                  <div className="row">
                  <div className="col-lg-6">
                      <div className="settingsSider__item">
              <Switch checked={layoutState.isMenuTop} onChange={this.setIsMenuTop} />
              <span className="settingsSider__itemLabel">Menu Top (Horizontal)</span>
            </div>
            <div className="settingsSider__item">
              <Switch checked={layoutState.menuCollapsed} onChange={this.setMenuCollapsed} />
              <span className="settingsSider__itemLabel">Collapsed Menu</span>
            </div>
            <div className="settingsSider__item">
              <Switch checked={layoutState.menuShadow} onChange={this.setMenuShadow} />
              <span className="settingsSider__itemLabel">Menu Shadow</span>
            </div>
            <div className="settingsSider__item">
              <Switch checked={layoutState.themeLight} onChange={this.setThemeLight} />
              <span className="settingsSider__itemLabel">Light Theme</span>
            </div>
            </div>
            <div className="col-lg-6">
            <div className="settingsSider__item">
              <Switch checked={layoutState.borderLess} onChange={this.setBorderLess} />
              <span className="settingsSider__itemLabel">Borderless Cards</span>
            </div>
            <div className="settingsSider__item">
              <Switch checked={layoutState.squaredBorders} onChange={this.setSquaredBorders} />
              <span className="settingsSider__itemLabel">Squared Borders</span>
            </div>
            <div className="settingsSider__item">
              <Switch checked={layoutState.fixedWidth} onChange={this.setFixedWidth} />
              <span className="settingsSider__itemLabel">Fixed Width</span>
            </div>
            </div>
            </div>
                    <SettingsForm />
                
                  </TabPane>
                  <TabPane
                    tab={
                      <span>
                        <i className="icmn-cog" /> Notifications
                      </span>
                    }
                    key="2"
                  />
                  <TabPane
                    tab={
                      <span>
                        <i className="icmn-cog" /> Alerts
                      </span>
                    }
                    key="3"
                  />
                  <TabPane
                    tab={
                      <span>
                        <i className="icmn-cog" /> Email
                      </span>
                    }
                    key="4"
                  />
                </Tabs>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <Tabs defaultActiveKey="1">
                  <TabPane
                    tab={
                      <span>
                        <i className="icmn-bubbles" /> Messages
                      </span>
                    }
                    key="1"
                  >
                    <Chat />
                  </TabPane>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileApp
