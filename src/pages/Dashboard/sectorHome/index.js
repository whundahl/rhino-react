import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import Sectors from './Sectors'

class SectorHome extends React.Component {
  static defaultProps = {
    pathName: 'REIT Sectors',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="REIT Sectors" />
        <Sectors />
      </Page>
    )
  }
}

export default SectorHome
