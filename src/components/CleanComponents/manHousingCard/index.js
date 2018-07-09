import React from 'react'
import Sparkline from '@rowno/sparkline'
import './style.scss'

class ChartCardHouse extends React.Component {
  static defaultProps = {
    chartProps: {},
    title: '',
    amount: '',
  }

  render() {
    const { chartProps, title, amount } = this.props

    return (
      <div className="card chartCard1">
        {chartProps && (
          <div className="chartCard1__chart">
            <Sparkline {...chartProps} />
          </div>
        )}
        {amount && <div className="chartCard1__amount">{amount}</div>}
        {title && <div className="chartCard1__title">{title}</div>}
      </div>
    )
  }
}

export default ChartCardHouse
