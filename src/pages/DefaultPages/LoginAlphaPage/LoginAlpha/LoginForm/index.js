import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'

const FormItem = Form.Item

class LoginFormComponent extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          <label className="form-label mb-0">Username</label>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </FormItem>
        <FormItem>
          <label className="form-label mb-0">Password</label>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a
            className="login-form-forgot pull-right text-primary"
            style={{ lineHeight: '36px' }}
            href="javascript: void(0);"
          >
            Forgot password?
          </a>
        </FormItem>
        <div className="form-actions">
          <Button type="primary" htmlType="submit" className="login-form-button">
            Sign in
          </Button>
          <span className="ml-3 register-link">
            <a href="javascript: void(0);" className="text-primary utils__link--underlined">
              Register
            </a>{' '}
            if you don't have account
          </span>
        </div>
        <div className="form-group">
          <span>Use another service to Log In</span>
          <div className="mt-2">
            <a href="javascript: void(0);" className="btn btn-icon mr-2">
              <i className="icmn-facebook" />
            </a>
            <a href="javascript: void(0);" className="btn btn-icon mr-2">
              <i className="icmn-google" />
            </a>
            <a href="javascript: void(0);" className="btn btn-icon mr-2">
              <i className="icmn-windows" />
            </a>
            <a href="javascript: void(0);" className="btn btn-icon mr-2">
              <i className="icmn-twitter" />
            </a>
          </div>
        </div>
      </Form>
    )
  }
}

const LoginForm = Form.create()(LoginFormComponent)
export default LoginForm
