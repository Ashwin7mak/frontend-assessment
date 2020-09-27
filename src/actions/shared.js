import fetchItemData from '../utils/fetch';
import { receivedData } from './items';
import { setView } from './view';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

const INITIAL_VIEW = 'SALES';

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return fetchItemData()
      .then((response) => {
        dispatch(receivedData(response))
        dispatch(setView(INITIAL_VIEW))
        dispatch(hideLoading())
      })
  }
}