import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import Invoice from 'components/CleanComponents/Invoice'

class InvoicePage extends React.Component {
  static defaultProps = {
    pathName: 'Invoice',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Invoice" />
        <div className="card">
          <div className="card-body">
            <Invoice />
          </div>
        </div>
      </Page>
    )
  }
}

export default InvoicePage
