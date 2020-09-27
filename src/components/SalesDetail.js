import React, { Component } from 'react';
import { connect } from 'react-redux';

class SalesDetails extends Component {

  formatData = (type, data) => {
    let typeCheck = type.toLowerCase();
    let stringData = data.toString();
    if(typeCheck.includes('sales') || typeCheck.includes('margin')){
      return `$${stringData.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    } else if(typeCheck.includes('week')) {
      let date = stringData.split('-');
      return `${date[1]}-${date[2]}-${date[0].slice(-2)}`;
    }
    return stringData
  }
  
  render() {

    const { sales } = this.props;

    return(
      <div className='details-container'>
        <table className='detail-table'>
          <thead className='table-head'>
            <tr>
              <th>WEEK ENDING</th>
              <th>RETAIL SALES</th>
              <th>WHOLESALE SALES</th>
              <th>UNITS SOLD</th>
              <th>RETAILER MARGIN</th>
            </tr>
          </thead>
          <tbody className='table-body'>
            {
              sales.map((sale) => (
                <tr className='table-body-row'>
                  {Object.keys(sale).map((key) => (
                    <td>{this.formatData(key, sale[key])}</td>
                  ))}
                </tr>     
              ))   
            }
          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps ({ items }){
  let { sales } = items[0];

  return {
    sales
  }
}

export default connect(mapStateToProps)(SalesDetails);