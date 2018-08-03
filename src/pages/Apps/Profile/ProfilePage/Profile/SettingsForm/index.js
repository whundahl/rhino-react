import React from 'react'
import { Form, Icon, Input, Button, Upload, Checkbox } from 'antd'

const FormItem = Form.Item
const { TextArea } = Input
const CheckboxGroup = Checkbox.Group
const plainOptions = [
  'Residential',
  'Man. Housing',
  'Single Family Rentals',
  'Shopping Centers',
  'Malls',
  'Self Storage',
  'Tripple Net',
  'Gaming',
  'Data Centers',
  'Healthcare',
  'Office',
  'Industrial',
  'Lodging',
  'Prisions',
  'Other',
  'Mortgage',
  'Timber',
  'Infranstructure',
]
const defaultCheckedList = ['Apple', 'Orange']

@Form.create()
class SettingsForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      facebook: '',
      linkedIn: '',
      checkedList: defaultCheckedList,
      indeterminate: true,
      checkAll: false,
    }
  }

  emitEmpty = () => {
    this.facebookInput.focus()
    this.linkedInInput.focus()
    this.setState({ facebook: '' })
    this.setState({ linkedIn: '' })
  }
  onChangeFacebook = e => {
    this.setState({ facebook: e.target.value })
  }
  onChangeLinkedIn = e => {
    this.setState({ linkedIn: e.target.value })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const { facebook, linkedIn } = this.state
    const suffix = facebook ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null
    const suffix2 = linkedIn ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null

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
        <div className="row">
          <div className="col-lg-11">
            <h5 className="text-black mt-4 mb-3">
              <strong>Bio</strong>
            </h5>
            <FormItem>
              <TextArea placeholder="Please Enter Your Bio Here" rows={4} />
            </FormItem>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <h5 className="text-black mt-4 mb-3">
              <strong>Social Media</strong>
            </h5>
            <FormItem>
              <Input
                placeholder="Enter your Facebook Url"
                prefix={<Icon type="facebook" style={{ color: 'rgba(0,0,0,.25)' }} />}
                suffix={suffix}
                value={facebook}
                onChange={this.onChangeFacebook}
                ref={node => (this.facebookInput = node)}
              />
            </FormItem>
            <FormItem>
              <Input
                placeholder="Enter your LinkedIn Url"
                prefix={<Icon type="linkedin" style={{ color: 'rgba(0,0,0,.25)' }} />}
                suffix={suffix2}
                value={linkedIn}
                onChange={this.onChangeLinkedIn}
                ref={node => (this.linkedInInput = node)}
              />
            </FormItem>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-11">
            <h5 className="text-black mt-4 mb-3">
              <strong>Sectors of Interest</strong>
            </h5>
            <FormItem>
              <div style={{ borderBottom: '1px solid #E9E9E9' }}>
                <Checkbox
                  indeterminate={this.state.indeterminate}
                  onChange={this.onCheckAllChange}
                  checked={this.state.checkAll}
                >
                  Check all
                </Checkbox>
              </div>
              <br />
              <CheckboxGroup
                options={plainOptions}
                value={this.state.checkedList}
                onChange={this.onChange}
              />
            </FormItem>
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

  onChange = checkedList => {
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && checkedList.length < plainOptions.length,
      checkAll: checkedList.length === plainOptions.length,
    })
  }
  onCheckAllChange = e => {
    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked,
    })
  }
}

export default SettingsForm
