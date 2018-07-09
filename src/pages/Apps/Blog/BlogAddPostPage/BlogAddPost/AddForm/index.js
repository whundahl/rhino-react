// import React from 'react'
import React from 'react'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { Form, Input, Button, Radio, Select, Upload, Icon } from 'antd'
//import './wysiwyg-editor.css'

const FormItem = Form.Item
const RadioGroup = Radio.Group
const Dragger = Upload.Dragger

@Form.create()
class AddForm extends React.Component {
  render() {
    return (
      <Form className="add-post__form mt-3">
        <FormItem>
          <div className="form-group">
            <label className="add-post__label">
              <strong>Title</strong>
            </label>
            <Input placeholder="Post title" />
          </div>
        </FormItem>
        <FormItem>
          <div className="form-group">
            <label className="add-post__label">
              <strong>Type</strong>
            </label>
            <RadioGroup>
              <Radio value={'text'}>Text</Radio>
              <Radio value={'video'}>Video</Radio>
              <Radio value={'image'}>Image</Radio>
              <Radio value={'audio'}>Audio</Radio>
              <Radio value={'vimeo'}>Vimeo</Radio>
            </RadioGroup>
          </div>
        </FormItem>
        <FormItem>
          <div className="form-group">
            <label className="add-post__label">
              <strong>Category</strong>
            </label>
            <Select
              mode="tags"
              size="default"
              placeholder="Select post category"
              defaultValue={['travel', 'lifestyle']}
              style={{ width: '100%' }}
            />
          </div>
        </FormItem>
        <FormItem>
          <div className="form-group">
            <label className="add-post__label">
              <strong>Content</strong>
            </label>
            <div className="add-post__editor">
              <Editor />
            </div>
          </div>
        </FormItem>
        <FormItem>
          <div className="form-group">
            <label className="add-post__label">
              <strong>Files</strong>
            </label>
            <Dragger>
              <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibit from uploading company data
                or other band files
              </p>
            </Dragger>
          </div>
        </FormItem>
        <FormItem>
          <div className="add-post__submit">
            <span className="mr-3">
              <Button type="primary" htmlType="submit">
                Save and Post
              </Button>
            </span>
            <Button type="danger" htmlType="submit">
              Discard
            </Button>
          </div>
        </FormItem>
      </Form>
    )
  }
}

export default AddForm
