import React from 'react'
import { Input, Icon, Button, Pagination } from 'antd'
import './style.scss'
import data from './data.json'

const Search = Input.Search

class BlogFeed extends React.Component {
  state = {
    articlesData: data.articlesData,
    articlesCategories: data.articlesCategories,
    latesArticlesData: data.latesArticlesData,
  }

  render() {
    let { articlesData, articlesCategories, latesArticlesData } = this.state
    return (
      <section className="card">
        <div className="card-header">
          <div className="utils__title">
            <strong>Blog Feed</strong>
          </div>
        </div>
        <div className="card-body">
          <div className="blog-feed">
            <div className="row">
              <div className="col-lg-8">
                <main className="blog-feed__postbar">
                  {articlesData.map((article, index) => (
                    <article className="blog-feed__article" key={index}>
                      <div className="blog-feed__article-information">
                        <div className="blog-feed__article-title">
                          <h1>
                            <a href="javascript: void(0);">{article.name}</a>
                          </h1>
                        </div>
                        <ul className="blog-feed__article-meta">
                          <li className="blog-feed__article-meta-inf">
                            <span className="blog-feed__article-author">
                              Post By <a href="javascript: void(0);">{article.author}</a>
                            </span>
                          </li>
                          <li className="blog-feed__article-meta-inf">
                            <span className="blog-feed__article-date">{'On ' + article.date}</span>
                          </li>
                        </ul>
                      </div>
                      <div className="blog-feed__article-media">
                        <a href="javascript: void(0);" className="blog-feed__article-link">
                          <img src={article.cover} alt={article.name} />
                        </a>
                      </div>
                      <div className="blog-feed__article-content">
                        <div dangerouslySetInnerHTML={{ __html: article.shortContent }} />
                        <div className="blog-feed__article-more">
                          <Button type="primary">
                            Read more
                            <i
                              className="blog-feed__more-icon fa fa-angle-right"
                              aria-hidden="true"
                            />
                          </Button>
                        </div>
                      </div>
                      <footer className="blog-feed__article-footer">
                        <div className="row">
                          <div className="col-8">
                            <div className="blog-feed__article-hashtags">
                              {article.tags.map((tag, index) => (
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
                  ))}
                </main>
                <div className="mb-5">
                  <Pagination defaultCurrent={1} total={50} />
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

export default BlogFeed
