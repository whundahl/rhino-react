import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import GridBootstrap from './GridBootstrap'

class GridBootstrapPage extends React.Component {
  static defaultProps = {
    pathName: 'Grid',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Grid" />
        <GridBootstrap />
      </Page>
    )
  }
}

export default GridBootstrapPage
