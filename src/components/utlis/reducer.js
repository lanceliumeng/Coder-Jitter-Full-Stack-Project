//alternatice to useState, more complex more poweful,more flexible.
//useState is a syntax sugar of useReducer that simplifies it.
//kind of Redux

//reducer function
//it receives 2 parameters
//it  receives the current state and it  receives the action we want to implement to the state
//based in action the function will update the state one way or another
//action is an object with 2 keys, type and data.
//action type key determines what is the action we are taking
//action data key contains the data necessary to update the state
//the function returns the updated state
const reducer = (state, action) => {
  console.log(state);
  console.log(action);

  switch (action.type) {
    case "setMessageList": {
      //populate the messageList Array with the inital values
      return { ...state, messageList: action.data };
    }
    case "addMessage": {
      //for add new message
      return { ...state, messageList: [action.data, ...state.messageList] };
    }
    case "setLoggedInUser": {
      //for add new message
      return { ...state, loggedInUser: action.data };
    }
    default:
      return state;
  }
};

export default reducer;
