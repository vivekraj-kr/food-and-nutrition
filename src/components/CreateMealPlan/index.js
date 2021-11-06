import React, { useState } from 'react';
import axios from 'axios';

const CreateMealPlan = () => {
  const [mealPlan, setMealPlan] = useState();
  const [timeFrame, setTimeFrame] = useState('');
  const [targetCalories, setTargetCalories] = useState('');
  const [diet, setDiet] = useState('');
  const [exclude, setExclude] = useState('');

  const onGenerateMealPlan = (e) => {
    console.log(e);
    e.preventDefault();
    const options = {
      method: 'GET',
      url: 'https://api.spoonacular.com/mealplanner/generate',
      params: {
        timeFrame,
        targetCalories,
        diet,
        exclude,
        apiKey: 'eaf032e063404cb084746b77ec4bcf43'
      }
    };
    
    axios.request(options).then((response) => {
      console.log(response.data);
      setMealPlan(response.data);
    }).catch((error) => {
      console.error(error);
    });
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
          <button type='submit' onClick={onGenerateMealPlan} > Generate </button>
        </form>
      </section>
      <section>
        {mealPlan 
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