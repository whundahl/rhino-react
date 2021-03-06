import React from 'react'
import { Line } from 'peity-react'
import './style.scss'

class Stock1 extends React.Component {
  state = {
    chartsData: [5, 3, 9, 6, 5, 9, 7, 3, 5, 2],
  }

  render() {
    const { chartsData } = this.state
    return (
      <div className="bitcoinPrice d-inline-block mr-4">
        VNQ:
        <span style={{ margin: '0 8px', position: 'relative', top: '3px' }}>
          <Line values={chartsData} />
        </span>
        +2.76%
      </div>
    )
  }
}

export default Stock1
