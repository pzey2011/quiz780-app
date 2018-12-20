import Cookies from 'js-cookie';
if(typeof Cookies.get('timer')=== "undefined")
  Cookies.set('timer', 0, { expires: 7 });

const counterReducer = (state = parseInt(Cookies.get('timer')), action)=>{

  // when this actions is dispatched, increment state
  switch (action.type) { 
    case 'INCREMENT_TIMER':
      state = state + 1;
      Cookies.set('timer', state, { expires: 7 });
    break;
    case 'RESET_TIMER':
      state = 0;
      Cookies.set('timer', state, { expires: 7 });
    break;
    default:
    break;
  }
  return state;
}
export default counterReducer;