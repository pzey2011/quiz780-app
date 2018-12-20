import Cookies from 'js-cookie';

if(isNaN(parseInt(Cookies.get('total_time'))))
{
  Cookies.set('total_time', 0, { expires: 7 });
  Cookies.set('this_time', 0, { expires: 7 });
}

const initialState = {
  this_time: parseInt(Cookies.get('this_time')),
  total_time: parseInt(Cookies.get('total_time'))
};
const counterReducer = (state = initialState , action)=>{

  // when this actions is dispatched, increment state
  switch (action.type) { 
    case 'INCREMENT_TIMER':
      state = {
        ...state,
        this_time: state.this_time+1,
        total_time: state.total_time+1
      }
      
      Cookies.set('this_time', state.this_time, { expires: 7 });
      Cookies.set('total_time', state.total_time, { expires: 7 });
    break;
    case 'RESET_TIMER':
      state = {
        ...state,
        this_time: 0,
        total_time: 0
      }
      Cookies.set('this_time', 0, { expires: 7 });
      Cookies.set('total_time', 0, { expires: 7 });
    break;
    case 'RESET_THIS_TIMER':
      state = {
        ...state,
        this_time: 0,
      }
      Cookies.set('this_time', 0, { expires: 7 });
    break;
    default:
    break;
  }
  return state;
}
export default counterReducer;