import React from 'react'
import { Upload, message, Button, Icon } from 'antd'
import './style.scss'
import data from './data.json'

const props = {
  name: 'file',
  action: '//jsonplaceholder.typicode.com/posts/',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList)
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`)
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
  },
}

class GalleryList extends React.Component {
  state = {
    imgData: [],
  }

  componentWillMount() {
    this.setState({
      imgData: data.images,
    })
  }

  render() {
    let { imgData } = this.state
    return (
      <div className="card">
        <div className="card-header clearfix">
          <div className="pull-right">
            <Upload {...props}>
              <Button type="primary">
                <Icon type="upload" /> Click to Upload
              </Button>
            </Upload>
          </div>
          <div className="utils__title">
            <strong>Photo Gallery</strong>
          </div>
        </div>
        <div className="card-body">
          <div className="gallery">
            {imgData.map((image, index) => (
              <div
                className={
                  image.editable === false
                    ? 'gallery__item'
                    : 'gallery__item gallery__item--with-controls'
                }
                style={{ backgroundImage: 'url(' + image.path + ')' }}
                key={index}
              >
                {image.editable === true && (
                  <div className="gallery__item-controls">
                    <Button.Group size="default">
                      <Button>
                        <Icon type="edit" />
                      </Button>
                      <Button>
                        <Icon type="delete" />
                      </Button>
                    </Button.Group>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default GalleryList
