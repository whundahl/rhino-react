import React from 'react'
import { connect } from 'react-redux'
import { REDUCER, submit } from 'ducks/forgetPassword'
import { gotoRegister, gotoSignIn } from 'ducks/app'
import { Form, Input, Button } from 'antd'

const FormItem = Form.Item

const mapStateToProps = (state, props) => ({
  isSubmitForm: state.app.submitForms[REDUCER],
})

@connect(mapStateToProps)
@Form.create()
class ForgetPasswordForm extends React.Component {
  static defaultProps = {}

  // $FlowFixMe
  onSubmit = (isSubmitForm: ?boolean) => event => {
    event.preventDefault()
    const { form, dispatch } = this.props
    if (!isSubmitForm) {
      form.validateFields((error, values) => {
        if (!error) {
          dispatch(submit(values))
        }
      })
    }
  }

  onClickBack = () => {
    const { dispatch } = this.props
    dispatch(gotoSignIn)
  }

  render() {
    const { form, isSubmitForm } = this.props

    return (
      <div className="cat__pages__login__block__form">
        <h2 className="text-uppercase">
          <strong>Forgot Password?</strong>
        </h2>
        <br />
        <Form layout="vertical" hideRequiredMark onSubmit={this.onSubmit(isSubmitForm)}>
          <FormItem label="Email">
            {form.getFieldDecorator('email', {
              rules: [
                { type: 'email', message: 'The input is not a valid e-mail address' },
                { required: true, message: 'Please input your e-mail address' },
              ],
            })(<Input size="default" />)}
          </FormItem>
          <div className="form-actions">
            <Button
              type="primary"
              className="width-150 mr-4"
              htmlType="submit"
              loading={isSubmitForm}
            >
              Reset Password
            </Button>
          </div>

          <Button className="width-100" htmlType="button" onClick={this.onClickBack}>
            Back
          </Button>
        </Form>
      </div>
    )
  }
}

export default ForgetPasswordForm
