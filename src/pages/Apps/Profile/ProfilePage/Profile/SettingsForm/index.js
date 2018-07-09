import React from 'react'
import { Form, Icon, Input, Button, Upload } from 'antd'

const FormItem = Form.Item

@Form.create()
class SettingsForm extends React.Component {
  state = {}

  render() {
    const { getFieldDecorator } = this.props.form

    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <h5 className="text-black mt-4">
          <strong>Personal Information</strong>
        </h5>
        <div className="row">
          <div className="col-lg-6">
            <FormItem>
              <label className="form-label mb-0">Username</label>
              {getFieldDecorator('userName', {
                rules: [{ required: false }],
              })(<Input placeholder="Username" />)}
            </FormItem>
          </div>
          <div className="col-lg-6">
            <FormItem>
              <label className="form-label mb-0">Email</label>
              {getFieldDecorator('email', {
                rules: [{ required: false }],
              })(<Input placeholder="Email" />)}
            </FormItem>
          </div>
        </div>
        <h5 className="text-black mt-4">
          <strong>New Password</strong>
        </h5>
        <div className="row">
          <div className="col-lg-6">
            <FormItem>
              <label className="form-label mb-0">Password</label>
              {getFieldDecorator('password')(<Input placeholder="New password" />)}
            </FormItem>
          </div>
          <div className="col-lg-6">
            <FormItem>
              <label className="form-label mb-0">Confirm Password</label>
              {getFieldDecorator('confirmpassword')(<Input placeholder="Confirm password" />)}
            </FormItem>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <h5 className="text-black mt-4 mb-3">
              <strong>Profile Avatar</strong>
            </h5>
            <Upload>
              <Button size="small">
                <Icon type="upload" /> Click to Upload
              </Button>
            </Upload>
          </div>
          <div className="col-lg-6">
            <h5 className="text-black mt-4 mb-3">
              <strong>Profile Background</strong>
            </h5>
            <Upload>
              <Button size="small">
                <Icon type="upload" /> Click to Upload
              </Button>
            </Upload>
          </div>
        </div>
        <div className="form-actions">
          <Button style={{ width: 150 }} type="primary" htmlType="submit" className="mr-3">
            Submit
          </Button>
          <Button htmlType="submit">Cancel</Button>
        </div>
      </Form>
    )
  }
}

export default SettingsForm
