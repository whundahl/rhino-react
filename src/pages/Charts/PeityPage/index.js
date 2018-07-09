import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import PeityItems from './Peity'

class PeityPage extends React.Component {
  static defaultProps = {
    pathName: 'Peity',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Peity" />
        <PeityItems />
      </Page>
    )
  }
}

export default PeityPage
