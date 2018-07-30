import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import DashboardCrypto from './DashboardCrypto'

class DashboardCryptoPage extends React.Component {
  static defaultProps = {
    pathName: 'Commercial Mortgage',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Commercial Mortgage" />
        <DashboardCrypto />
      </Page>
    )
  }
}

export default DashboardCryptoPage
