import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import LinearIcons from './LinearIcons'

class LinearIconsPage extends React.Component {
  static defaultProps = {
    pathName: 'Linear Icons',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Linear Icons" />
        <LinearIcons />
      </Page>
    )
  }
}

export default LinearIconsPage
