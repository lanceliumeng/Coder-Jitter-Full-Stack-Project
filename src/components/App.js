import React, { useState, useEffect, useReducer } from "react";
import LoginForm from "./login-page/LoginForm";
import MessageForm from "./message/MessageForm";
import Messages from "./message/Messages";
import Navigation from "./navbar/Navigation";
import initialMessageList from "../data/messageList.json";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import About from "./about-page/About";
import NotFound from "./404-page/NotFound";
import MessageDetail from "./message/MessageDetail";
import reducer from "./utlis/reducer";

const App = () => {
  //useReducer handles all the states in the same object
  const initialState = {
    messageList: [],
    loggedInUser: "",
  };
  //useReducer receives two arguments: reducer and state
  //it returns an array with two elements:
  //store -> actually that's the name for the state
  //dispatch -> it is the function that triggers the reducer function, dispatch's argument is action
  const [store, dispatch] = useReducer(reducer, initialState);
  const { messageList, loggedInUser } = store;

  // const [loggedInUser, setLoggedInUser] = useState("");
  // const [messageList, setMessageList] = useState([]);

  //lifting up the child component logingform to App component
  const activateUser = (username) => {
    // setLoggedInUser(username);
    dispatch({
      type: "setLoggedInUser",
      data: username,
    });
  };

  const addMessage = (text) => {
    const newMsg = {
      id: nextId,
      text: text,
      user: loggedInUser,
    };

    // setMessageList((messageList) => [newMsg, ...messageList]);
    dispatch({
      type: "addMessage",
      data: newMsg,
    });
  };

  const nextId =
    messageList.reduce(
      (init, currMsg) => (init > currMsg.id ? init : currMsg.id),
      0
    ) + 1;

  useEffect(() => {
    //fetch
    // setMessageList(initialMessageList);
    dispatch({
      type: "setMessageList",
      data: initialMessageList,
    });
  }, []);

  return (
    <div>
      <h1> Jitter </h1>

      {/* {!loggedInUser ? (
        <LoginForm activateUser={activateUser} />
      ) : (
        <MessageForm loggedInUser={loggedInUser} addMessage={addMessage} />
      )}
      <Messages messageList={messageList} /> */}

      {/* use react-router-dom to wrap all the components into app's routing */}
      <Router>
        <Navigation loggedInUser={loggedInUser} activateUser={activateUser} />
        {/* Navigation component use Link, so it should be nested in Router */}
        <Routes>
          <Route path="/" element={<Navigate to="messages" replace />} />
          <Route path="messages">
            <Route index element={<Messages messageList={messageList} />} />
            <Route
              path="new"
              element={
                loggedInUser ? (
                  <MessageForm
                    loggedInUser={loggedInUser}
                    addMessage={addMessage}
                  />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path=":messageId"
              element={<MessageDetail messageList={messageList} />}
            />
          </Route>

          <Route path="about" element={<About />} />
          <Route
            path="login"
            element={<LoginForm activateUser={activateUser} />}
          />
          <Route path="*" element={<NotFound />} />
          {/* for everything else routes render notFound component */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
