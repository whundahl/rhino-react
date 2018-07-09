import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import MailList from './MailList'

class MailAppPage extends React.Component {
  static defaultProps = {
    pathName: 'Mail App',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Mail App" />
        <MailList />
      </Page>
    )
  }
}

export default MailAppPage
