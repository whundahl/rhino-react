import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import DashboardBeta from './DashboardBeta'

class DashboardBetaPage extends React.Component {
  static defaultProps = {
    pathName: 'Dashboard Beta',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Dashboard Beta" />
        <DashboardBeta />
      </Page>
    )
  }
}

export default DashboardBetaPage
