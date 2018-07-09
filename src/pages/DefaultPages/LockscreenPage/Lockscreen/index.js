import React from 'react'
import { Button } from 'antd'
import Avatar from 'components/CleanComponents/Avatar'
import UnlockForm from './UnlockForm'
import './style.scss'

class Lockscreen extends React.Component {
  state = {
    backgroundImage: 'url(resources/images/login/1.jpg)',
    fullSize: false,
  }

  switchSize = () => {
    let { fullSize } = this.state
    fullSize = !fullSize
    this.setState({
      fullSize: fullSize,
    })
  }

  render() {
    const { backgroundImage, fullSize } = this.state

    return (
      <div className={fullSize === false ? 'login' : 'login login--fullscreen'}>
        <div className="login__header">
          <div className="row">
            <div className="col-lg-8">
              <div className="login__header__logo">
                <a href="javascript: void(0);">
                  <img src="resources/images/login/logo.png" alt="Clean UI Admin Template" />
                </a>
                <Button className="ml-3" onClick={this.switchSize}>
                  Switch Fullscreen / Windowed
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="login__block mb-5">
          <div className="row">
            <div className="col-xl-12">
              <div className="login__block__inner">
                <div className="login__block__form">
                  <form id="form-validation" name="form-validation" method="POST">
                    <div className="text-center mb-3">
                      <Avatar src="resources/images/avatars/1.jpg" border="true" size="90" />
                    </div>
                    <h2 style={{ color: '#514d6a' }} className="text-center">
                      <i className="icmn-lock" />
                      <strong>Artour Arteezy</strong>
                    </h2>
                    <br />
                    <UnlockForm />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Lockscreen
