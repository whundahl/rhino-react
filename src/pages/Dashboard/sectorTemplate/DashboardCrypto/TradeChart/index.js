import React from 'react'

import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import Tradier from 'tradier-client';

class HighchartSector extends React.Component {

  constructor(props){
    
    super(props)
    this.state = {
      store: [],
      openPrice: []
    }
  }
    componentDidMount() {
      const tradier = new Tradier('7svYXqoAjts9fGptLU7mtKo4Z4Oa', 'sandbox');
      
      tradier.historical('LADR')
      .then(history => history.day.map( result =>(
        {
        open: `${result.open}`,
       })))
       .then(newData => this.setState({openPrice: newData, store: newData}))
       .catch(error => alert(error))

    }
    render() {

      const { openPrice } = this.state;

      const options = {
        title: {
          text: 'My stock chart'
        },
        series: [{
          data: openPrice
        }]
      }
      
    return (

      <HighchartsReact
      highcharts={Highcharts}
      constructorType={'stockChart'}
      options={options}
    />

    )
  }
}


export default HighchartSector
