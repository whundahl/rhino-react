import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import FontAwesomeIcons from './FontAwesomeIcons'

class FontAwesomeIconsPage extends React.Component {
  static defaultProps = {
    pathName: 'FontAwesome Icons',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="FontAwesome Icons" />
        <FontAwesomeIcons />
      </Page>
    )
  }
}

export default FontAwesomeIconsPage
