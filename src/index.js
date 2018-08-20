import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import { Helmet } from 'react-helmet'
import { composeWithDevTools } from 'redux-devtools-extension'
import createHistory from 'history/createHashHistory'
import thunk from 'redux-thunk'
import 'es6-promise/auto'
import 'setimmediate'
import 'chartist-plugin-tooltip'

import { LocaleProvider } from 'antd'
import enGB from 'antd/lib/locale-provider/en_GB'
import registerServiceWorker from 'registerServiceWorker'
import { StripeProvider } from 'react-stripe-elements'

import Layout from 'components/LayoutComponents/Layout'
import reducer from 'ducks'

import 'resources/_antd.less' // redefinition AntDesign variables
import 'bootstrap/dist/css/bootstrap.min.css' // bootstrap styles

import 'resources/AntStyles/AntDesign/antd.cleanui.scss'
import 'resources/CleanStyles/Core/core.cleanui.scss'
import 'resources/CleanStyles/Vendors/vendors.cleanui.scss'

const history = createHistory()
const router = routerMiddleware(history)
const middlewares = [router, thunk]
const isLogger = false
if (isLogger && process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger')
  middlewares.push(logger)
}
const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)))

class App extends React.Component {
  constructor() {
    super()
    this.state = { stripe: null }
  }

  componentDidMount() {
    if (window.Stripe) {
      this.setState({ stripe: window.Stripe('pk_test_h7Lktp5iioRMH4SdjQVQEAZK') })
    } else {
      document.querySelector('#stripe-js').addEventListener('load', () => {
        this.setState({ stripe: window.Stripe('pk_test_h7Lktp5iioRMH4SdjQVQEAZK') })
      })
    }
  }

  render() {
    return (
      <StripeProvider stripe={this.state.stripe}>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <LocaleProvider locale={enGB}>
              <div>
                <Helmet titleTemplate="Rhino R.E.A. | %s" />
                <Layout />
              </div>
            </LocaleProvider>
          </ConnectedRouter>
        </Provider>
      </StripeProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()

export default history
