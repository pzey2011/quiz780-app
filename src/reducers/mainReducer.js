
import Cookies from 'js-cookie';

if(typeof Cookies.get('step')=== "undefined")
	Cookies.set('step', 0, { expires: 7 });

let initStep=Cookies.get('step');

let initialState = {
  step: parseInt(initStep),
};


const mainReducer = (state = initialState, action) => { 
    switch (action.type) { 
		case "INCREASE_STEP":
			state={
				...state,
				step: state.step+action.data
			};
			Cookies.set('step', state.step, { expires: 7 });
		break;
		case "RESET_STEP":
			state={
				...state,
				step: 0
			};
			Cookies.set('step', state.step, { expires: 7 });
		break;
		default:

		break;

    } 
    return state;
};
export default mainReducer;