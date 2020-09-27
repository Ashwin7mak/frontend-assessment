import React, { Component } from 'react';
import { connect } from 'react-redux';

class Description extends Component{
  
  render() {

    const { brand, retailer, details } = this.props;

    return(
      <div className='description-container'>
        <h3 className='description-title'>Product Details</h3>
        <div className='description'>{details}</div>
        <div className='product-retailer'>
          <p>Manufactured by </p>{brand} <br />
          <p>Sold by </p>{retailer} 
        </div>
      </div>
    )
  }
}

function mapStateToProps({ items }) {
  let { brand, retailer, details } = items[0];
  
  return {
    brand,
    retailer,
    details
  }
}

export default connect(mapStateToProps)(Description);