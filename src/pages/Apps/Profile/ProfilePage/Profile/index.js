import React from 'react'
import { Button, Progress, Calendar, Tabs, Upload, Icon, Input, Menu, Dropdown } from 'antd'
import data from './data.json'
import './style.scss'
import Avatar from 'components/CleanComponents/Avatar'
import Donut from 'components/CleanComponents/Donut'
import Chat from 'components/CleanComponents/Chat'
import SettingsForm from './SettingsForm'

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
                    <Button style={{ width: 150 }}>Add to Friend</Button>
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
                  <strong>Actions</strong>
                </h5>
                <div className="profile__actions">
                  <Button style={{ display: 'block', width: '100%' }}>Send Message</Button>
                  <Button style={{ display: 'block', width: '100%' }}>Send File</Button>
                  <Button style={{ display: 'block', width: '100%' }}>Access History</Button>
                  <Button style={{ display: 'block', width: '100%' }}>Rename User</Button>
                  <Button style={{ display: 'block', width: '100%' }}>Ban User</Button>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="mb-3 text-black">
                  <strong>Skills</strong>
                </h5>
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="mb-1">{skill.name}</div>
                    <Progress percent={skill.value} showInfo={false} />
                  </div>
                ))}
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="mb-3 text-black">
                  <strong>Information</strong>
                </h5>
                <dl className="row">
                  <dt className="col-xl-3">Courses End:</dt>
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
                  <strong>Calendar</strong>
                </h5>
                <Calendar fullscreen={false} />
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
                <Tabs defaultActiveKey="1">
                  <TabPane
                    tab={
                      <span>
                        <i className="icmn-menu" /> Wall
                      </span>
                    }
                    key="1"
                  >
                    <div className="py-3">
                      <TextArea rows={3} />
                      <div className="mt-3">
                        <Button className="mr-2" type="primary" style={{ width: 200 }}>
                          <i className="fa fa-send mr-2" />
                          Create Post
                        </Button>
                        <Upload>
                          <Button>
                            <Icon type="upload" /> Attach File
                          </Button>
                        </Upload>
                      </div>
                    </div>
                    <hr />
                    {posts.map((post, index) => {
                      return (
                        <div key={index}>
                          <div className="profile__wall-item clearfix" key={index}>
                            <div className="profile__wall-avatar">
                              <Avatar size="50" src={post.avatar} border={false} />
                            </div>
                            <div className="profile__wall-content">
                              <div className="mb-3">
                                <div className="pull-right">
                                  <Dropdown overlay={actions}>
                                    <a className="ant-dropdown-link" href="javascript: void(0);">
                                      Actions <Icon type="down" />
                                    </a>
                                  </Dropdown>
                                </div>
                                <strong>{post.name}</strong> posted:
                                <br />
                                <small className="text-muted">{post.date}</small>
                              </div>
                              <div
                                dangerouslySetInnerHTML={{ __html: post.content }}
                                className="mb-3"
                              />
                              <div className="mr-3">
                                <a href="javascript: void(0);" className="mr-3">
                                  <i className="icmn-heart mr-2" />
                                  {post.likesCount > 0 && <span>{post.likesCount + ' Likes'}</span>}
                                  {post.likesCount === 0 && (
                                    <span>{post.likesCount + ' Like'}</span>
                                  )}
                                </a>
                                <a href="javascript: void(0);">
                                  <i className="icmn-bubble mr-2" />
                                  {post.commentsCount > 0 && (
                                    <span>{post.commentsCount + ' Comments'}</span>
                                  )}
                                  {post.commentsCount === 0 && (
                                    <span>{post.commentsCount + ' Comment'}</span>
                                  )}
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="profile__wall-content profile__wall-content--inner">
                            {post.comments.length > 0 && (
                              <div className="profile__wall-comments">
                                {post.comments.map((postComment, index) => (
                                  <div className="profile__wall-item clearfix" key={index}>
                                    <div className="profile__wall-avatar">
                                      <Avatar size="50" src={postComment.avatar} border={false} />
                                    </div>
                                    <div className="profile__wall-content">
                                      <div className="mb-3">
                                        <div className="pull-right">
                                          <Dropdown overlay={actions}>
                                            <a
                                              className="ant-dropdown-link"
                                              href="javascript: void(0);"
                                            >
                                              Actions <Icon type="down" />
                                            </a>
                                          </Dropdown>
                                        </div>
                                        <strong>{postComment.name}</strong> posted:
                                        <br />
                                        <small className="text-muted">{postComment.date}</small>
                                      </div>
                                      <div
                                        dangerouslySetInnerHTML={{ __html: postComment.content }}
                                      />
                                      <div>
                                        <a href="javascript: void(0);" className="mr-2">
                                          <i className="icmn-heart mr-2" />
                                          {postComment.likesCount > 0 && (
                                            <span>{postComment.likesCount + ' Likes'}</span>
                                          )}
                                          {postComment.likesCount === 0 && (
                                            <span>{postComment.likesCount + ' Like'}</span>
                                          )}
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                          <div className="form-group mt-4 mb-0">
                            <TextArea rows={3} />
                            <div className="mt-3">
                              <Button className="mr-2" type="primary" style={{ width: 200 }}>
                                <i className="fa fa-send mr-2" />
                                Comment
                              </Button>
                              <Upload>
                                <Button>
                                  <Icon type="upload" /> Attach File
                                </Button>
                              </Upload>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </TabPane>
                  <TabPane
                    tab={
                      <span>
                        <i className="icmn-bubbles" /> Messages
                      </span>
                    }
                    key="2"
                  >
                    <Chat />
                  </TabPane>
                  <TabPane
                    tab={
                      <span>
                        <i className="icmn-cog" /> Settings
                      </span>
                    }
                    key="3"
                  >
                    <SettingsForm />
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
