import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import SideNav from './SideNav';
import Graph from './Graph';
import SalesDetails from './SalesDetail';
import Description from './Description';
import Reviews from './Reviews';
import { handleInitialData } from '../actions/shared';
import LoadingBar from 'react-redux-loading-bar';
import logo from "../img/stackline-logo.png";

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  renderView = (view) => {
    if(view === 'SALES') {
      return (
        <div className='content-container'>
          <Graph />
          <SalesDetails />
        </div>) 
      } 
      else if(view === 'OVERVIEW') { 
        return ( 
          <div className='content-container'>
            <Description />
            <Reviews />
          </div>)
      }
  }

  render() {

    const { loading, view } = this.props;
    
    return (
       <div>
         <LoadingBar style={{ backgroundColor: 'grey'}} />
         {
           loading === true
           ? null
           : 
            <>
              <div className='header-container'>
                <img src={logo} alt="Stackline logo" />
              </div>
              <div className='main-container'>
                <div className='side-panel-container'>
                  <Item />
                  <SideNav />
                </div>
                {this.renderView(view)}
              </div>
            </>
         }
       </div>
    );
  }
}

function mapStateToProps({ items, view }) {
  return {
    view,
    loading: Object.keys(items).length === 0
  }
}

export default connect(mapStateToProps)(App);
