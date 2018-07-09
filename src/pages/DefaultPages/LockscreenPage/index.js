import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import Lockscreen from './Lockscreen'

class LockscreenPage extends React.Component {
  static defaultProps = {
    pathName: 'Lockscreen',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Lockscreen" />
        <Lockscreen />
      </Page>
    )
  }
}

export default LockscreenPage
