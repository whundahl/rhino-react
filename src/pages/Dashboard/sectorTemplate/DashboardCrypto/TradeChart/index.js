import React from 'react'

import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import Tradier from 'tradier-client';

class HighchartSector extends React.Component {

  constructor(props){
    
    super(props)
    this.state = {
      store: [],
      openPrice: [],
      LADR: [],      
    }
  }
    componentDidMount() {
      const tradier = new Tradier('7svYXqoAjts9fGptLU7mtKo4Z4Oa', 'sandbox');
      
      tradier.historical('LADR')
      .then(history => history.day.map( res =>(
        {
        open: `${res.open}`,
       })))
       .then(newData => this.setState({openPrice: newData, store: newData}))
       .catch(error => alert(error))

    }

    filterPrices(){
      for (var key in this.state.openPrice) {
        if (this.state.openPrice.hasOwnProperty(key)) {
           this.setState({LADR: this.state.openPrice[key].open})
        }
     }
    }

    render() {

      const { LADR } = this.state;

      const options = {
        title: {
          text: 'My stock chart'
        },
        series: [{LADR}]
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
