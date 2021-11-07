import axios from 'axios';

const generateMealPlanSucces = (mealPlanData) => {
  debugger
  return {
    type: 'GENERATE_MEAL_PLAN_SUCCES',
    payload: mealPlanData
  }
};

const generateMealPlanFailure = (errorMsg) => ({
  type: 'GENERATE_MEAL_PLAN_FAILURE',
  payload: errorMsg
});

const generateMealPlan = (reqData) => {
  debugger
  const options = {
    method: 'GET',
    url: 'https://api.spoonacular.com/mealplanner/generate',
    params: {
      ...reqData,
      apiKey: 'eaf032e063404cb084746b77ec4bcf43'
    }
  };

  return (dispatch) => {
    debugger
    axios.request(options).then((response) => {
      console.log(response.data);
      dispatch(generateMealPlanSucces(response.data))
    }).catch((error) => {
      console.error(error);
      dispatch(generateMealPlanFailure(error.message))
    });
  }
}

export default generateMealPlan;