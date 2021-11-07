import React from 'react';
import { Provider } from 'react-redux'; 
import store from '../components/store';
import './App.scss';
import Header from './Header';
import CreateMealPlan from './CreateMealPlan';

const App = () => {
  return (
    <Provider store={store}>
      <Header/>
      <CreateMealPlan />
    </Provider>
  );
}

export default App;