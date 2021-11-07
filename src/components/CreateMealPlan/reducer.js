const generateMealReducer = (state={}, action) => {
  debugger
  const { type, payload } = action;

  switch (type) {
    case 'GENERATE_MEAL_PLAN_SUCCES':
      return {
        ...state,
        ...payload,
      }

    case 'GENERATE_MEAL_PLAN_FAILURE':
      return {
        ...state,
        ...payload,
      }

    default:
      return state;
  }
}

export default generateMealReducer;