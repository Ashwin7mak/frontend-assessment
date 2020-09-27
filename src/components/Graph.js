import React, { Component } from 'react'
import { connect } from 'react-redux'
import {XYPlot, XAxis, LineSeries} from 'react-vis';

class Graph extends Component {
  
  render() {

    const { retailSalesData, wholesaleSalesData } = this.props;

    return(
      <div className='graph-container'>
        <h3 className='graph-title'>Retail Sales</h3>
        <XYPlot
          xType="time"
          yDomain={[-1500000, 2000000]}
          width={900}
          height={500}>
          <XAxis/>
          <LineSeries
            color='#03a9f4'
            style={{strokeLinejoin: "round"}}
            data={retailSalesData}/>
          <LineSeries
            color='grey'
            data={wholesaleSalesData}/>
        </XYPlot>
      </div>
    )
  }
  
}

function mapStateToProps({ items }) {
  let { sales } = items[0];

  let retailSalesData = [];
  let wholesaleSalesData =[];

  sales.map((sale) => {
    let day = sale['weekEnding'].split('-');
    let rearrangedDay = `${day[1]}-${day[2]}-${day[0]}`;
    wholesaleSalesData.push({
      x: new Date(rearrangedDay),
      y: sale['wholesaleSales']
    });
    retailSalesData.push({
      x: new Date(rearrangedDay),
      y: sale['retailSales']
    });
  })

  return {
    retailSalesData,
    wholesaleSalesData
  }
}

export default connect(mapStateToProps)(Graph);