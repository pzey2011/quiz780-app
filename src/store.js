import {createStore , combineReducers} from 'redux';
import main from './reducers/mainReducer';
import questions from './reducers/questionReducer';
import counter from './reducers/counterReducer';

export default createStore(
	combineReducers({ 
	    main,
	    questions,
	    counter
  	})
);