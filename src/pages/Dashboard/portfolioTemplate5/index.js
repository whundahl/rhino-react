import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import Portfolio5 from './portfolio1'

class MortgagePortfolio extends React.Component {
  static defaultProps = {
    pathName: 'Portfolio Comparison',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Portfolios" />
        <Portfolio5 />
      </Page>
    )
  }
}

export default MortgagePortfolio
