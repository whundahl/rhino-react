import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import C3Items from './C3'

class C3Page extends React.Component {
  static defaultProps = {
    pathName: 'C3.js',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="C3.js" />
        <C3Items />
      </Page>
    )
  }
}

export default C3Page
