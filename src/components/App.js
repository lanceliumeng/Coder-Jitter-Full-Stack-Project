import React, { useState, useEffect } from "react";
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

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [messageList, setMessageList] = useState([]);

  //lifting up the child component logingform to App component
  const activateUser = (username) => {
    setLoggedInUser(username);
  };

  const addMessage = (text) => {
    const newMsg = {
      text: text,
      user: loggedInUser,
      id: nextId,
    };

    setMessageList((messageList) => [newMsg, ...messageList]);
  };

  const nextId =
    messageList.reduce(
      (init, currMsg) => (init > currMsg.id ? init : currMsg.id),
      0
    ) + 1;

  useEffect(() => {
    //fetch
    setMessageList(initialMessageList);
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
