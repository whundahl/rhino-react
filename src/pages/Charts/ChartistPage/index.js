import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import ChartistsItems from './Chartist'

class ChartistPage extends React.Component {
  static defaultProps = {
    pathName: 'Chartists',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Chartists" />
        <ChartistsItems />
      </Page>
    )
  }
}

export default ChartistPage
