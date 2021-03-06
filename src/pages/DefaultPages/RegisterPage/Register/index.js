import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import RegisterForm from './RegisterForm'
import { gotoSignIn } from 'ducks/app'
import './style.scss'

const mapStateToProps = (state, props) => ({})

@connect(mapStateToProps)
class Register extends React.Component {
  state = {
    backgroundImage: 'url(resources/images/login/4.jpg)',
    fullSize: true,
  }

  generateBackground = () => {
    let { backgroundImage } = this.state

    let min = 1
    let max = 5
    let picNumber = Math.floor(Math.random() * (max - min + 1)) + min
    backgroundImage = 'url(resources/images/login/' + picNumber + '.jpg)'
    this.setState({
      backgroundImage: backgroundImage,
    })
  }

  gotoLogin = () => {
    const { dispatch } = this.props
    dispatch(gotoSignIn)
  }

  render() {
    const { backgroundImage, fullSize } = this.state

    return (
      <div
        className={fullSize === false ? 'login' : 'login login--fullscreen'}
        style={{ backgroundImage: backgroundImage }}
      >
        <div className="login__header">
          <div className="row">
            <div className="col-lg-4">
              <div className="login__header__menu">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item active">
                    <a href="javascript: void(0);" onClick={this.gotoLogin}>
                      Login
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript: void(0);">About</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript: void(0);">Support</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="login__block">
          <div className="row">
            <div className="col-xl-12">
              <div className="login__block__promo text-white text-center">
                <h1 className="mb-3 text-white">
                  <strong>WELCOME TO CLEAN UI ADMIN TEMPLATE</strong>
                </h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
              </div>
              <div className="login__block__inner">
                <div className="login__block__form">
                  <h4 className="text-uppercase">
                    <strong>Please Register</strong>
                  </h4>
                  <br />
                  <RegisterForm />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="login__footer text-center">
          <ul className="list-unstyled list-inline">
            <li className="list-inline-item">
              <a href="javascript: void(0);">Terms of Use</a>
            </li>
            <li className="active list-inline-item">
              <a href="javascript: void(0);">Compliance</a>
            </li>
            <li className="list-inline-item">
              <a href="javascript: void(0);">Confidential Information</a>
            </li>
            <li className="list-inline-item">
              <a href="javascript: void(0);">Support</a>
            </li>
            <li className="list-inline-item">
              <a href="javascript: void(0);">Contacts</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Register
