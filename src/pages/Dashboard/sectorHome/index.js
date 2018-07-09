import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import DashboardAlpha from './DashboardAlpha'

class DashboardAlphaPage extends React.Component {
  static defaultProps = {
    pathName: 'REIT Sectors',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="REIT Sectors" />
        <DashboardAlpha />
      </Page>
    )
  }
}

export default DashboardAlphaPage
