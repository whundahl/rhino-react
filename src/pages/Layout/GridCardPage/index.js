import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import GridCard from './GridCard'

class GridCardPage extends React.Component {
  static defaultProps = {
    pathName: 'Card',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Card" />
        <GridCard />
      </Page>
    )
  }
}

export default GridCardPage
