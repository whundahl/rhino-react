import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import YouTubeFeed from './YouTubeFeed'

class YouTubeFeedPage extends React.Component {
  static defaultProps = {
    pathName: 'YouTube Feed',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="YouTube Feed" />
        <YouTubeFeed />
      </Page>
    )
  }
}

export default YouTubeFeedPage
