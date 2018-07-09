import React from 'react'
import { Tabs, Menu, Dropdown, Icon, Button } from 'antd'
import { Editor } from 'react-draft-wysiwyg'
import Avatar from 'components/CleanComponents/Avatar'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import './style.scss'
import data from './data.json'

const TabPane = Tabs.TabPane

const postActions = (
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

class GitHubDiscuss extends React.Component {
  state = {
    discuss: data.discuss,
  }

  render() {
    let { discuss } = this.state

    return (
      <section className="card">
        <div className="card-header">
          <div className="utils__title">
            <strong>GitHub Discussion</strong>
          </div>
        </div>
        <div className="card-body">
          <div className="discuss">
            <div className="discuss__menu mb-3">
              <Tabs type="card" defaultActiveKey="2">
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
            <div className="discuss__header clearfix">
              <div className="discuss__title">
                <h1 className="discuss__title-text">{discuss.title}</h1>
                <div className="discuss__open">
                  <Button type="primary" size="small">
                    New discussion
                  </Button>
                </div>
              </div>
              <div className="discuss__meta">
                {discuss.status === 'open' && (
                  <span className="discuss__status btn btn-success btn-sm">
                    <i className="fa fa-check-circle-o mr-2" />
                    Open
                  </span>
                )}
                {discuss.status === 'closed' && (
                  <span className="discuss__status btn btn-danger btn-sm">
                    <i className="fa fa-times-circle mr-2" />
                    Closed
                  </span>
                )}
                <div className="discuss__meta-text">
                  <a href="javascript: void(0);" className="discuss__owner mr-1">
                    {discuss.authorName}
                  </a>
                  opened this discussion on
                  <span className="discuss__create-date ml-1">{discuss.date}</span> ·
                  <span className="discuss__comments-count ml-1">
                    {discuss.commentsCount + ' comments'}
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10">
                <div className="discuss__comments">
                  {discuss.comments.map((comment, index) => (
                    <div className="discuss__comment-item" key={index}>
                      <div className="discuss__comment-wrapper mb-0 pb-0 clearfix">
                        <div className="discuss__comment-avatar">
                          <Avatar src={comment.avatar} size="50" />
                        </div>
                        <div className="discuss__content-wrapper">
                          <div className="discuss__comment-head">
                            <div className="pull-right">
                              <Dropdown overlay={postActions}>
                                <a className="ant-dropdown-link" href="javascript: void(0);">
                                  Actions <Icon type="down" />
                                </a>
                              </Dropdown>
                            </div>
                            <strong>{comment.authorName}</strong> posted:
                            <small className="text-muted ml-2">{comment.date}</small>
                          </div>
                          <div
                            className="discuss__comment-content"
                            dangerouslySetInnerHTML={{ __html: comment.content }}
                          />
                          <div className="discuss__comment-bottom">
                            <a href="javascript: void(0);" className="mr-2">
                              <i className="icmn-heart mr-1" />
                              {comment.likesCount > 0 && (
                                <span>{comment.likesCount + ' Likes'}</span>
                              )}
                              {comment.likesCount === 0 && (
                                <span>{comment.likesCount + ' Like'}</span>
                              )}
                            </a>
                            <a href="javascript: void(0);" className="mr-2">
                              <i className="icmn-reply mr-1" />
                              Reply
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {discuss.status === 'open' && (
                  <div className="discuss__add-comment clearfix">
                    <div className="discuss__comment-avatar">
                      <Avatar size="50" src={discuss.authorImg} />
                    </div>
                    <div className="discuss__content-wrapper">
                      <div className="discuss__comment-head discuss__comment-head--empty p-3">
                        <Editor />
                      </div>
                      <div className="discuss__comment-bottom">
                        <Button type="primary">Comment</Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="col-lg-2">
                <div className="discuss__sidebar">
                  <div className="discuss__sidebar-item">
                    <div className="discuss__sidebar-head">Assignees</div>
                    <div className="discuss__sidebar-item-content">No one assigned</div>
                  </div>
                  <div className="discuss__sidebar-item">
                    <div className="discuss__sidebar-head">Labels</div>
                    <div className="discuss__sidebar-item-content">None yet</div>
                  </div>
                  <div className="discuss__sidebar-item">
                    <div className="discuss__sidebar-head">Projects</div>
                    <div className="discuss__sidebar-item-content">None yet</div>
                  </div>
                  <div className="discuss__sidebar-item">
                    <div className="discuss__sidebar-head">Milenstone</div>
                    <div className="discuss__sidebar-item-content">No milestone</div>
                  </div>
                  <div className="discuss__sidebar-item">
                    <div className="discuss__sidebar-head">Notifications</div>
                    <div className="discuss__sidebar-item-content">
                      You’re ignoring this thread.
                    </div>
                  </div>
                  <div className="discuss__sidebar-item">
                    <div className="discuss__sidebar-head">Participants</div>
                    <div className="discuss__sidebar-item-content">
                      <ul className="discuss__participants-list">
                        {discuss.participants.map((participant, index) => (
                          <li className="discuss__participants-item" key={index}>
                            <Avatar size="25" src={participant} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default GitHubDiscuss
