import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import GitHubExplore from './GitHubExplore'

class GitHubExplorePage extends React.Component {
  static defaultProps = {
    pathName: 'GitHub Explore',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="GitHub Explore" />
        <GitHubExplore />
      </Page>
    )
  }
}

export default GitHubExplorePage
