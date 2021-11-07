import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import generateMealReducer from './CreateMealPlan/reducer';

const rootReducer = combineReducers({
  generateMeal: generateMealReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;