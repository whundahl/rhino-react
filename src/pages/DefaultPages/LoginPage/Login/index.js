import React from 'react'
import LoginForm from './LoginForm'
import './style.scss'

class Login extends React.Component {
  state = {
    backgroundImage: 'url(resources/images/login/7.jpg)',
  }

  componentDidMount() {
    document.getElementsByTagName('body')[0].style.overflow = 'hidden'
  }

  componentWillUnmount() {
    document.getElementsByTagName('body')[0].style.overflow = ''
  }

  render() {
    const { backgroundImage } = this.state
    return (
      <div>
        <div
          className="main-login main-login--fullscreen"
          style={{ backgroundImage: backgroundImage }}
        >
          <div className="main-login__header">
            <div className="row">
              <div className="col-lg-12">
                <div className="main-login__header__logo">
                  <a href="javascript: void(0);">
                    <img src="resources/images/login/logo.png" alt="Rhino Premium" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="main-login__block main-login__block--extended pb-0">
            <div className="row">
              <div className="col-xl-12">
                <div className="main-login__block__inner">
                  <div className="main-login__block__form">
                    <LoginForm email={this.state.restoredEmail} />
                  </div>
                  <div className="main-login__block__sidebar">
                    <h4 className="main-login__block__sidebar__title text-white">
                      <strong>Rhino Web App</strong>
                      <br />
                      <span>Comming Summer 2018</span>
                    </h4>
                    <div className="main-login__block__sidebar__item">
                      We are designing a highly technical product in which we will utilize a number
                      of plug-ins that will generate hundreds of customized dashboards and portfolio
                      management tools.
                    </div>
                    <div className="main-login__block__sidebar__item">
                      This product is designed for family offices, CPAs, RIAs, Institutions, and
                      Pension Funds.{' '}
                    </div>
                    <div className="main-login__block__sidebar__place">
                      <i className="icmn-location mr-3" />
                      Charleston, USA
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-login__footer text-center">
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
                <a href="javascript: void(0);">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
