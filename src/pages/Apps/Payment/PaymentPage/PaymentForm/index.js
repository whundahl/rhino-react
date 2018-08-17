import React from 'react'
import {
  CardElement,
  StripeProvider,
  Elements,
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  PostalCodeElement,
  injectStripe,
} from 'react-stripe-elements'
import { Upload, message, Button, Icon, Carousel } from 'antd'
import './style.scss'

class _CardForm extends React.Component {
  handleSubmit = ev => {
    console.log('ev', ev.target, this.props.stripe)
    ev.preventDefault()
    if (this.props.stripe) {
      this.props.stripe.createSource({ type: 'card' }).then(payload => {
        if (payload.source) {
          console.log('[source]', payload)
        } else {
          console.log('Error creating a token')
        }
      })
    } else {
      console.log("Stripe.js hasn't loaded yet.")
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <CardElement />
        <button>Verify</button>
      </form>
    )
  }
}

const handleBlur = () => {
  console.log('[blur]')
}
const handleChange = change => {
  console.log('[change]', change)
}
const handleClick = () => {
  console.log('[click]')
}
const handleFocus = () => {
  console.log('[focus]')
}
const handleReady = () => {
  console.log('[ready]')
}

const CardForm = injectStripe(_CardForm)

class _SplitForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Card number
          <CardNumberElement
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            onReady={handleReady}
          />
        </label>
        <label>
          Expiration date
          <CardExpiryElement
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            onReady={handleReady}
          />
        </label>
        <label>
          CVC
          <CardCVCElement
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            onReady={handleReady}
          />
        </label>
        <label>
          Postal code
          <PostalCodeElement
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            onReady={handleReady}
          />
        </label>
        <button>Pay</button>
      </form>
    )
  }
}
const SplitForm = injectStripe(_SplitForm)

class PaymentForm extends React.Component {
  render() {
    return (
      <div>
        <section className="card">
          <div className="card-header">
            <div className="utils__title">
              <strong>Payment Method</strong>
            </div>
          </div>
          <div className="card-body">
            <div className="Checkout">
              <h1>Payment Verification</h1>
              <Elements>
                <CardForm />
              </Elements>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default PaymentForm
