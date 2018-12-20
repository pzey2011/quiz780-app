import {createStore , combineReducers, applyMiddleware} from 'redux';
import main from './reducers/mainReducer';
import questions from './reducers/questionReducer';
import counter from './reducers/counterReducer';
import logger from 'redux-logger';

export default createStore(
	combineReducers({ 
	    main,
	    questions,
	    counter
  	}),
	applyMiddleware(logger)
);