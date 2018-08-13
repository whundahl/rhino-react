import React from 'react'
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from 'antd'
import { connect } from 'react-redux'
import { REDUCER, submit } from 'ducks/register'

const FormItem = Form.Item
const Option = Select.Option
const AutoCompleteOption = AutoComplete.Option

const mapStateToProps = (state, props) => ({})

@connect(mapStateToProps)
@Form.create()
class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  }
  handleSubmit = e => {
    console.log('2', this.props)
    e.preventDefault()
    const { form, dispatch } = this.props
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        dispatch(submit(values))
      }
    })
  }
  handleConfirmBlur = e => {
    const value = e.target.value
    this.setState({ confirmDirty: this.state.confirmDirty || !!value })
  }
  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!')
    } else {
      callback()
    }
  }
  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true })
    }
    callback()
  }
  handleWebsiteChange = value => {
    let autoCompleteResult
    if (!value) {
      autoCompleteResult = []
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`)
    }
    this.setState({ autoCompleteResult })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    const { autoCompleteResult } = this.state

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    }
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    }
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '1',
    })(
      <Select style={{ width: 70 }}>
        <Option value="1">+1</Option>
        <Option value="44">+44</Option>
        <Option value="91">+91</Option>
        <Option value="86">+86</Option>
        <Option value="52">+52</Option>
        <Option value="56">+56</Option>
      </Select>,
    )

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ))

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem {...formItemLayout} label="E-mail">
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Password">
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please input your password or password should be at least 6!',
                min: 6,
              },
              {
                validator: this.validateToNextPassword,
              },
            ],
          })(<Input type="password" />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Confirm Password">
          {getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
                message: 'Please confirm your password!',
              },
              {
                validator: this.compareToFirstPassword,
              },
            ],
          })(<Input type="password" onBlur={this.handleConfirmBlur} />)}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={
            <span>
              Username&nbsp;
              <Tooltip title="What do you want others to call you?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          }
        >
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!', whitespace: true }],
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Phone Number">
          {getFieldDecorator('phone', {
            rules: [{ required: false, message: 'Please input your phone number!' }],
          })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Website">
          {getFieldDecorator('website', {
            rules: [{ required: false, message: 'Please input website!' }],
          })(
            <AutoComplete
              dataSource={websiteOptions}
              onChange={this.handleWebsiteChange}
              placeholder="website"
            >
              <Input />
            </AutoComplete>,
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
            rules: [{ required: true, message: 'Please check Terms and Conditions' }],
          })(
            <Checkbox>
              I have read the <a href="">Terms and Conditions</a>
            </Checkbox>,
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          {getFieldDecorator('morningBlast', {
            valuePropName: 'checked2',
          })(<Checkbox>Please add me to the Morning Blast</Checkbox>)}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </FormItem>
      </Form>
    )
  }
}

const RegisterForm = Form.create()(RegistrationForm)
export default RegisterForm
