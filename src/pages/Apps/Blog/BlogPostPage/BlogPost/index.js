import React from 'react'
import { Input, Icon, Menu, Dropdown } from 'antd'
import Avatar from 'components/CleanComponents/Avatar'
import CommentForm from './CommentForm'
import './style.scss'
import data from './data.json'

const Search = Input.Search

const actions = (
  <Menu>
    <Menu.Item>
      <Icon type="edit" /> Edit Comment
    </Menu.Item>
    <Menu.Item>
      <Icon type="delete" /> Delete Comment
    </Menu.Item>
    <Menu.Item>
      <Icon type="frown-o" /> Mark as a Spam
    </Menu.Item>
  </Menu>
)

class BlogPost extends React.Component {
  state = {
    articleData: data.articleData,
    articlesCategories: data.articlesCategories,
    latesArticlesData: data.latesArticlesData,
    comments: data.comments,
  }

  render() {
    let { articleData, articlesCategories, latesArticlesData, comments } = this.state
    return (
      <section className="card">
        <div className="card-header">
          <div className="utils__title">
            <strong>Blog Post</strong>
          </div>
        </div>
        <div className="card-body">
          <div className="blog-feed">
            <div className="row">
              <div className="col-lg-8">
                <article className="blog-feed__article">
                  <div className="blog-feed__article-information">
                    <div className="blog-feed__article-title">
                      <h1>
                        <a href="javascript: void(0);">{articleData.name}</a>
                      </h1>
                    </div>
                    <ul className="blog-feed__article-meta">
                      <li className="blog-feed__article-meta-inf">
                        <span className="blog-feed__article-author">
                          Post By <a href="javascript: void(0);">{articleData.author}</a>
                        </span>
                      </li>
                      <li className="blog-feed__article-meta-inf">
                        <span className="blog-feed__article-date">{'On ' + articleData.date}</span>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="blog-feed__article-content"
                    dangerouslySetInnerHTML={{ __html: articleData.content }}
                  />
                  <footer className="blog-feed__article-footer">
                    <div className="row">
                      <div className="col-8">
                        <div className="blog-feed__article-hashtags">
                          {articleData.tags.map((tag, index) => (
                            <a href="javascript: void(0);" key={index}>
                              {tag}
                            </a>
                          ))}
                        </div>
                      </div>
                      <div className="col-4">
                        <ul className="blog-feed__share">
                          <li className="blog-feed__share-item">
                            <a href="javascript: void(0);">
                              <i className="fa fa-facebook" />
                            </a>
                          </li>
                          <li className="blog-feed__share-item">
                            <a href="javascript: void(0);">
                              <i className="fa fa-twitter" />
                            </a>
                          </li>
                          <li className="blog-feed__share-item">
                            <a href="javascript: void(0);">
                              <i className="fa fa-pinterest-p" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </footer>
                </article>
                <div className="blog-feed__author-card clearfix">
                  <div className="blog-feed__author-photo">
                    <Avatar src={articleData.authorAvatar} size="110" />
                  </div>
                  <div className="blog-feed__author-inf">
                    <span className="blog-feed__author-name">{articleData.author}</span>
                    <p className="blog-feed__author-words">
                      &ldquo;{articleData.authorStatus}&rdquo;
                    </p>
                    <div className="blog-feed__author-profile">
                      <a
                        href="javascript: void(0);"
                        className="blog-feed__author-profile-btn btn btn-sm btn-primary"
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
                </div>
                <div className="blog-feed__add-comment mb-4">
                  <div className="blog-feed__add-comment-title mb-3">Leave a comment</div>
                  <div className="blog-feed__add-comment-form">
                    <CommentForm />
                  </div>
                </div>
                <div className="blog-feed__comments mb-4">
                  <div className="blog-feed__comments-title">Comments</div>
                  <div className="blog-feed__comments-wrap mt-3">
                    {comments.length > 0 && (
                      <div className="blog-feed__comments">
                        {comments.map((postComment, index) => (
                          <div
                            className={
                              postComment.subComments !== undefined
                                ? 'blog-feed__comment-item clearfix pb-0'
                                : 'blog-feed__comment-item clearfix'
                            }
                            key={index}
                          >
                            <div className="blog-feed__comment-avatar">
                              <Avatar size="50" src={postComment.avatar} border={false} />
                            </div>
                            <div className="blog-feed__comment-content">
                              <div className="mb-3 clearfix">
                                <div className="pull-left">
                                  <strong>{postComment.name}</strong> posted:
                                  <br />
                                  <small className="text-muted">{postComment.date}</small>
                                </div>
                                <div className="pull-right">
                                  <Dropdown overlay={actions}>
                                    <a className="ant-dropdown-link" href="javascript: void(0);">
                                      Actions <Icon type="down" />
                                    </a>
                                  </Dropdown>
                                </div>
                              </div>
                              <div dangerouslySetInnerHTML={{ __html: postComment.content }} />
                              <div>
                                <a href="javascript: void(0);" className="mr-3">
                                  <i className="icmn-heart mr-2" />
                                  {postComment.likesCount > 0 && (
                                    <span>{postComment.likesCount + ' Likes'}</span>
                                  )}
                                  {postComment.likesCount === 0 && (
                                    <span>{postComment.likesCount + ' Like'}</span>
                                  )}
                                </a>
                                <a href="javascript: void(0);" className="mr-3">
                                  <i className="icmn-bubble mr-2" />
                                  {postComment.commentsCount > 0 && (
                                    <span>{postComment.commentsCount + ' Comments'}</span>
                                  )}
                                  {postComment.commentsCount === 0 && (
                                    <span>{postComment.commentsCount + ' Comment'}</span>
                                  )}
                                </a>
                                <a href="javascript: void(0);">
                                  <i className="icmn-reply mr-2" />
                                  <span>Reply</span>
                                </a>
                              </div>
                              {postComment.subComments && (
                                <div className="blog-feed__subcomments-content">
                                  {postComment.subComments.map((subComment, index) => (
                                    <div className="blog-feed__comment-item clearfix" key={index}>
                                      <div className="blog-feed__comment-avatar">
                                        <Avatar size="50" src={subComment.avatar} border={false} />
                                      </div>
                                      <div className="blog-feed__comment-content">
                                        <div className="mb-3 clearfix">
                                          <div className="pull-left">
                                            <strong>{subComment.name}</strong> posted:
                                            <br />
                                            <small className="text-muted">{subComment.date}</small>
                                          </div>
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
                                        </div>
                                        <div
                                          dangerouslySetInnerHTML={{ __html: subComment.content }}
                                        />
                                        <div>
                                          <a href="javascript: void(0);" className="mr-3">
                                            <i className="icmn-heart mr-2" />
                                            {subComment.likesCount > 0 && (
                                              <span>{subComment.likesCount + ' Likes'}</span>
                                            )}
                                            {subComment.likesCount === 0 && (
                                              <span>{subComment.likesCount + ' Like'}</span>
                                            )}
                                          </a>
                                          <a href="javascript: void(0);" className="mr-3">
                                            <i className="icmn-bubble mr-2" />
                                            {subComment.commentsCount > 0 && (
                                              <span>{subComment.commentsCount + ' Comments'}</span>
                                            )}
                                            {subComment.commentsCount === 0 && (
                                              <span>{subComment.commentsCount + ' Comment'}</span>
                                            )}
                                          </a>
                                          <a href="javascript: void(0);">
                                            <i className="icmn-reply mr-2" />
                                            <span>Reply</span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="mb-5 pb-2">
                      <a href="javascript: void(0);" className="btn btn-default btn-block mb-5">
                        Load More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <aside className="blog-feed__sidebar">
                  <div className="blog-feed__sidebar-partition">
                    <div className="blog-feed__partition-head">
                      <span className="blog-feed__partition-name">Search</span>
                    </div>
                    <div className="input-group">
                      <Search
                        placeholder="Search ..."
                        enterButton={
                          <span>
                            <Icon type="search" /> Search
                          </span>
                        }
                      />
                    </div>
                  </div>
                  <div className="blog-feed__sidebar-partition">
                    <div className="blog-feed__partition-head">
                      <span className="blog-feed__partition-name">Categories</span>
                    </div>
                    <ul className="blog-feed__categories-list">
                      {articlesCategories.map((category, index) => (
                        <li className="blog-feed__categories-item" key={index}>
                          <a className="blog-feed__categories-link" href="javascript: void(0);">
                            {category}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="blog-feed__sidebar-partition">
                    <div className="blog-feed__partition-head">
                      <span className="blog-feed__partition-name">Latest post</span>
                    </div>
                    {latesArticlesData.map((latestArticle, index) => (
                      <article className="blog-feed__latest-post" key={index}>
                        <div className="blog-feed__latest-img">
                          <a href="javascript: void(0);">
                            <img src={latestArticle.cover} alt={latestArticle.name} />
                          </a>
                        </div>
                        <div className="blog-feed__latest-data">
                          <div className="blog-feed__latest-name">
                            <h2>
                              <a href="javascript: void(0);">{latestArticle.name}</a>
                            </h2>
                          </div>
                          <ul className="blog-feed__article-meta blog-feed__article-meta--latest">
                            <li className="blog-feed__article-meta-inf">
                              <span className="blog-feed__article-author">
                                Post By <a href="javascript: void(0);">{latestArticle.author}</a>
                              </span>
                            </li>
                            <li className="blog-feed__article-meta-inf">
                              <span className="blog-feed__article-date">
                                {'On ' + latestArticle.date}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </article>
                    ))}
                  </div>
                  <div className="blog-feed__sidebar-partition">
                    <div className="blog-feed__partition-head">
                      <span className="blog-feed__partition-name">Subscribe</span>
                    </div>
                    <div className="input-group">
                      <Input
                        addonBefore={<Icon type="mail" />}
                        placeholder="Email adress"
                        size="default"
                      />
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default BlogPost
