import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import ForgetPassword from './ForgetPassword'

class ForgetPasswordPage extends React.Component {
  render() {
    const { match, ...props } = this.props
    return (
      <Page {...props}>
        <Helmet title="Forget Password" />
        <ForgetPassword match={match} />
      </Page>
    )
  }
}

export default ForgetPasswordPage
