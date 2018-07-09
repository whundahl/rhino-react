import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import GitHubDiscuss from './GitHubDiscuss'

class GitHubDiscussPage extends React.Component {
  static defaultProps = {
    pathName: 'GitHub Discuss',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="GitHub Discuss" />
        <GitHubDiscuss />
      </Page>
    )
  }
}

export default GitHubDiscussPage
