import React, { Component } from 'react';
import { connect } from 'react-redux';

class Reviews extends Component {

  render() {
    const { reviews } = this.props;
    return(
      <div className='review-container'>
        <h3 className='review-title'>Reviews</h3>
        <div className='review-subcontainer'>
          <div className='review'>" {reviews[0]['review']} "</div> <br />
          <div className='reviewer'> - {reviews[0]['customer']}</div>
        </div> 
      </div>
    )
  }
}

function mapStateToProps ({ items }){
  let { reviews } = items[0];

  return {
    reviews,
  }
}

export default connect(mapStateToProps)(Reviews);