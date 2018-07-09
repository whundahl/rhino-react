import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import BlogFeed from './BlogFeed'

class BlogFeedPage extends React.Component {
  static defaultProps = {
    pathName: 'Blog Feed',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Blog Feed" />
        <BlogFeed />
      </Page>
    )
  }
}

export default BlogFeedPage
