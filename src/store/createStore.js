import {createStore, combineReducers, applyMiddleware} from 'redux';
import textReduser from './textReducer';
import countReduser from './countReduser';
import { composeWithDevTools } from '@redux-devtools/extension';


const rootReduser = combineReducers({
  textReduser,
  countReduser,
})

const store = createStore(rootReduser, composeWithDevTools());

export default store; 