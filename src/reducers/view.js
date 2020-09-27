import { VIEW } from '../actions/view';

export default function view(state = null, action ) {

  switch(action.type){
    case VIEW :
      return action.view
    default:
      return state
  }
}