import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import generateMealPlan from './actions';

const CreateMealPlan = () => {
  //const [mealPlan, setMealPlan] = useState();
  const mealPlan = useSelector((state) => state.generateMeal)
  const isRender = Object.getOwnPropertyNames(mealPlan).length !== 0;

  console.log(`mealPlan ${mealPlan}`);

  const dispatch = useDispatch();

  const [timeFrame, setTimeFrame] = useState('');
  const [targetCalories, setTargetCalories] = useState('');
  const [diet, setDiet] = useState('');
  const [exclude, setExclude] = useState('');

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(generateMealPlan({
      timeFrame,
      targetCalories,
      diet,
      exclude
    }))
  }

  const MealsConatiner = () => {
    return mealPlan.meals.map((meal) => { 
      return <div className="card" key={meal.id}>
        {meal.title}
      </div>
    })
  }

  return(
    <>
      <h1> Generate meal plan</h1>
      <section>
        <form>
          <div>
            <label> Time frame </label>
            <input type='text' onChange={(e) => {setTimeFrame(e.target.value)}} value={timeFrame} name='timeFrame' />
          </div>
          <div>
            <label> Calories </label>
            <input type='text' onChange={(e) => {setTargetCalories(e.target.value)}} value={targetCalories} name='targetCalories' />
          </div>
          <div>
          <label> Diet </label>
            <input type='text' onChange={(e) => {setDiet(e.target.value)}} value={diet} name='diet' />
          </div>
          <div>
            <label> Exclude </label>
            <input type='text' onChange={(e) => {setExclude(e.target.value)}} value={exclude} name='exclude' />
          </div>
          <button type='submit' onClick={onHandleSubmit} > Generate </button>
        </form>
      </section>
      <section>
        {isRender 
        ?
          <MealsConatiner />
        :
          null
        }
      </section>
    </>
  );
}

export default CreateMealPlan;