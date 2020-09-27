import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setView } from '../actions/view';
import { faHome, faChartBar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SideNav extends Component {

  handleSubmit = (view) => {
    this.props.setView(view);
  }

  render() {

    const { isOverview, isSales } = this.props;

    return(
      <div className='side-nav-container'>
        <div 
          className='btn'
          style={{ color: isOverview ? 'black' : 'grey' }}
          onClick={
            isOverview
            ? null 
            : (() => (this.handleSubmit('OVERVIEW')) )
          }>
          <FontAwesomeIcon 
            icon={faHome} 
            style={{ color: isOverview ? '#03a9f4' : 'grey' }}
            aria-hidden="true"/>
          <span id="overview-icon-text">OVERVIEW</span>
        </div>
        <div 
          className='btn'
          style={{ color: isSales ? 'black' : 'grey' }}
          onClick={
            isSales
            ? null 
            : (() => (this.handleSubmit('SALES')) )
          }>
          <FontAwesomeIcon 
            icon={faChartBar} 
            style={{ color: isSales ? '#03a9f4' : 'grey' }}
            aria-hidden="true"
          />
          <span id="sales-icon-text">SALES</span>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  setView: setView
}

function mapStateToProps ({ view }){
  let isOverview = view === 'OVERVIEW';
  let isSales = view === 'SALES';

  return {
    isOverview,
    isSales
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideNav);