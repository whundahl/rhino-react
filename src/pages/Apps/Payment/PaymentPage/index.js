import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import PaymentForm from './PaymentForm'

class Payment extends React.Component {
  static defaultProps = {
    pathName: 'Payment Method',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Payment Page" />
        <PaymentForm />
      </Page>
    )
  }
}

export default Payment
