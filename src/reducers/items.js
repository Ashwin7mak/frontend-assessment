import { RECEIVE } from '../actions/items'

export default function items(state = {}, action) {
  switch(action.type) {
    case RECEIVE :
      return {
        ...state,
        ...action.items,
      }
    default :
      return state
  }
}