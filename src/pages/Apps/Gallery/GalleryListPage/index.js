import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import GalleryList from './GalleryList'

class GalleryAppPage extends React.Component {
  static defaultProps = {
    pathName: 'Gallery',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Gallery" />
        <GalleryList />
      </Page>
    )
  }
}

export default GalleryAppPage
