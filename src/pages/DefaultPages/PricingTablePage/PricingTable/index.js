import React from 'react'
import PricingItem from 'components/CleanComponents/PricingItem'
import './style.scss'

class PricingTable extends React.Component {
  render() {
    return (
      <div className="mb-5">
        <div className="pricing-table">
          <PricingItem type="success" extended={true} />
          <PricingItem />
          <PricingItem />
          <PricingItem type="default" />
        </div>
        <div className="pricing-table">
          <PricingItem type="warning" />
          <PricingItem />
          <PricingItem extended={true} />
          <PricingItem />
        </div>
      </div>
    )
  }
}

export default PricingTable
