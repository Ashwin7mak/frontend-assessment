import React, { Component } from 'react';
import { connect } from 'react-redux';

class Item extends Component {
  
  render() {

    const { title, image, subtitle, tags } = this.props;

    return(
      <div className='item-container'>
        <div className='item-description'> 
          <img className='item-avatar' src={image} alt="Item Image"/>
          <h3 className='title'>{title}</h3>
          <p className='subtitle'>{subtitle}</p>
        </div> 
        <div className='tag-container'>
          <div className='tag-sub-container'>
            {
              tags.map((tag) => (
                <div className='tag'>{tag}</div>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ items }) {
  let { title, image, subtitle, tags } = items[0]
  return {
    title,
    image,
    subtitle,
    tags
  }
}

export default connect(mapStateToProps)(Item);