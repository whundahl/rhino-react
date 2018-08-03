import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import BlogPost from './BlogPost'

class BlogPostPage extends React.Component {
  static defaultProps = {
    pathName: 'Article Posting',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Article Posting" />
        <BlogPost />
      </Page>
    )
  }
}

export default BlogPostPage
