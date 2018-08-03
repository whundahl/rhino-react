import React from 'react'
import { connect } from 'react-redux'
import { setLayoutState } from 'ducks/app'
import { Scrollbars } from 'react-custom-scrollbars'
import { Switch } from 'antd'
import './style.scss'

const mapStateToProps = (state, props) => ({
  layoutState: state.app.layoutState,
})

@connect(mapStateToProps)
class SettingsSider extends React.Component {
  state = {
    layoutState: this.props.layoutState,
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      layoutState: newProps.layoutState,
    })
  }

  closeSettings = () => {
    const { dispatch } = this.props
    dispatch(setLayoutState({ settingsOpened: false }))
  }

  setMenuCollapsed = state => {
    const { dispatch } = this.props
    dispatch(setLayoutState({ menuCollapsed: state }))
  }

  setMenuShadow = state => {
    const { dispatch } = this.props
    dispatch(setLayoutState({ menuShadow: state }))
  }

  setThemeLight = state => {
    const { dispatch } = this.props
    dispatch(setLayoutState({ themeLight: state }))
  }

  setSquaredBorders = state => {
    const { dispatch } = this.props
    dispatch(setLayoutState({ squaredBorders: state }))
  }

  setFixedWidth = state => {
    const { dispatch } = this.props
    dispatch(setLayoutState({ fixedWidth: state }))
  }

  setBorderLess = state => {
    const { dispatch } = this.props
    dispatch(setLayoutState({ borderLess: state }))
  }

  setIsMenuTop = state => {
    const { dispatch } = this.props
    dispatch(setLayoutState({ isMenuTop: state }))
  }

  render() {
    const { layoutState } = this.state
    return (
      <div
        className={'settingsSider ' + (layoutState.settingsOpened ? 'settingsSider--opened' : '')}
      >
        <Scrollbars style={{ height: '100vh' }}>
          <div className="settingsSider__container">
            <div className="settingsSider__title">
              Rhino Widgets
              <span className="fa fa-times" onClick={this.closeSettings} />
            </div>
            <div className="settingsSider__description">
              Welcome, _Username_, have a look around and see what Rhino Real Estate Advisors
              updated most recently.
            </div>
            <div className="settingsSider__item" />
            <div className="row">
              <div className="col">
                <div className="card" style={{ height: 300 }}>
                  <div className="card-header">
                    <div className="utils__title">
                      <strong>Recent News</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="card" style={{ height: 300 }}>
                  <div className="card-header">
                    <div className="utils__title">
                      <strong>Recent Articles</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="card" style={{ height: 300 }}>
                  <div className="card-header">
                    <div className="utils__title">
                      <strong>Gainers/ Loosers</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Scrollbars>
      </div>
    )
  }
}

export default SettingsSider
