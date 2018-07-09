import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import PricingTable from './PricingTable'

class PricingTablePage extends React.Component {
  static defaultProps = {
    pathName: 'Pricing Table',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Pricing Table" />
        <PricingTable />
      </Page>
    )
  }
}

export default PricingTablePage
