import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import Portfolios from './Portfolios'

class PortfolioHome extends React.Component {
  static defaultProps = {
    pathName: 'Portfolios',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Portfolio Home" />
        <Portfolios />
      </Page>
    )
  }
}

export default PortfolioHome
