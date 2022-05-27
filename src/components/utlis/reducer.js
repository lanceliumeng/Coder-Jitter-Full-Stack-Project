//alternatice to useState, more complex more poweful,more flexible.
//useState is a syntax sugar of useReducer that simplifies it.
//kind of Redux

//reducer function
//it receives 2 parameters
//it  receives the current state and it  receives the action we want to implement to the state
//based in action the function will update the state one way or another
//action is an object with 2 keys, type and data.

const reducer = (state, action) => {
  console.log(state);
  console.log(action);
};

export default reducer;
